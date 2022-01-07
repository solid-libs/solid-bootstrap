// ported from https://github.com/reactjs/react-transition-group/blob/5aa3fd2d7e3354a7e42505d55af605ff44f74e2e/src/Transition.js

import {
  createSignal,
  createComputed,
  Component,
  children,
  JSX,
  useContext,
  on,
  onMount,
  onCleanup,
  Show,
  createMemo,
  splitProps,
  mergeProps,
} from "solid-js";
import TransitionGroupContext from "./TransitionGroupContext";
import { nextFrame } from "./utils";

/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */
export const UNMOUNTED = "unmounted";
export const EXITED = "exited";
export const ENTERING = "entering";
export const ENTERED = "entered";
export const EXITING = "exiting";

export type TransitionStatus =
  | typeof ENTERING
  | typeof ENTERED
  | typeof EXITING
  | typeof EXITED
  | typeof UNMOUNTED;

export type TransitionComponent = Component<TransitionProps>;

/**
 * EnterCallback (and EndCallback) is complicated as the original JS version optionally omits the
 * first (element) parameter depending on whether nodeRef is passed in.
 * So it can technially be either of these:
 * (el: HTMLElement, isAppearing?: boolean) => void
 * (isAppearing?: boolean) => void
 * Typescript seems to get grumpy if we just OR those types so this is a hack...
 */
type EnterCallback = (arg1?: HTMLElement | boolean, arg2?: boolean) => void;
type EndCallback = (
  arg1?: HTMLElement | (() => void),
  arg2?: () => void
) => void;

export type TransitionCallbacks = {
  onEnter?: EnterCallback;
  onEntering?: EnterCallback;
  onEntered?: EnterCallback;
  onExit?: (el: HTMLElement) => void;
  onExiting?: (el: HTMLElement) => void;
  onExited?: (e?: HTMLElement) => void;
};

export type TransitionProps = {
  nodeRef?: HTMLElement;
  children?:
    | JSX.Element
    | ((status: TransitionStatus | null, childProps: any) => JSX.Element);
  in?: boolean;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
  appear?: boolean;
  enter?: boolean;
  exit?: boolean;
  timeout?: number | { appear?: number; enter?: number; exit?: number };
  addEndListener?: EndCallback;
} & TransitionCallbacks;

type Callback = (...args: any[]) => void;
type Cancellable = Callback & { cancel: () => void };

function noop() {}

const defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,

  onEnter: noop,
  onEntering: noop,
  onEntered: noop,

  onExit: noop,
  onExiting: noop,
  onExited: noop,
};

export const Transition = (p: TransitionProps) => {
  const [local, childProps] = splitProps(mergeProps(defaultProps, p), [
    "in",
    "children",
    "mountOnEnter",
    "unmountOnExit",
    "appear",
    "enter",
    "exit",
    "timeout",
    "addEndListener",
    "onEnter",
    "onEntering",
    "onEntered",
    "onExit",
    "onExiting",
    "onExited",
    "nodeRef",
  ]);
  let context = useContext(TransitionGroupContext);
  let childRef: HTMLElement;

  // In the context of a TransitionGroup all enters are really appears
  let appear = context && !context.isMounting ? local.enter : local.appear;

  let initialStatus: TransitionStatus;
  let appearStatus: TransitionStatus | null = null;

  if (local.in) {
    if (appear) {
      initialStatus = EXITED;
      appearStatus = ENTERING;
    } else {
      initialStatus = ENTERED;
    }
  } else {
    if (local.unmountOnExit || local.mountOnEnter) {
      initialStatus = UNMOUNTED;
    } else {
      initialStatus = EXITED;
    }
  }

  const [status, setStatus] = createSignal<TransitionStatus | null>(
    initialStatus
  );
  let nextCallback: Cancellable | null = null;

  const [mounted, setMounted] = createSignal(false);
  const notUnmounted = createMemo(() => status() !== UNMOUNTED);

  onMount(() => {
    // componentDidMount
    updateStatus(true, appearStatus);
    setMounted(true);
  });

  createComputed(
    on(
      () => local.in,
      () => {
        // componentDidUpdate
        if (!mounted()) return;
        const prevStatus = status();

        if (local.in && prevStatus === UNMOUNTED) {
          // prepate to show again
          setStatus(EXITED);
        } 

        let nextStatus: TransitionStatus | null = null;
        if (local.in) {
          if (prevStatus !== ENTERING && prevStatus !== ENTERED) {
            nextStatus = ENTERING;
          }
        } else {
          if (prevStatus === ENTERING || prevStatus === ENTERED) {
            nextStatus = EXITING;
          }
        }

        updateStatus(false, nextStatus);
      }
    )
  );

  onCleanup(() => {
    cancelNextCallback();
  });

  function getTimeouts() {
    const { timeout } = local;
    let exit: number | undefined,
      enter: number | undefined,
      appear: number | undefined;

    if (typeof timeout === "number") {
      exit = enter = appear = timeout;
    } else if (timeout != null) {
      exit = timeout.exit;
      enter = timeout.enter;
      // TODO: remove fallback for next major
      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }
    return { exit, enter, appear };
  }

  function updateStatus(mounting = false, nextStatus: TransitionStatus | null) {
    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      cancelNextCallback();

      if (nextStatus === ENTERING) {
        performEnter(mounting);
      } else {
        performExit();
      }
    } else if (local.unmountOnExit && status() === EXITED) {
      setStatus(UNMOUNTED);
    }
  }

  function performEnter(mounting: boolean) {
    const { enter } = local;
    const appearing = context ? context.isMounting : mounting;
    const [maybeNode, maybeAppearing] = local.nodeRef
      ? [appearing]
      : [childRef, appearing];

    const timeouts = getTimeouts();
    const enterTimeout = appearing ? timeouts.appear : timeouts.enter;
    // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set
    if (!mounting && !enter) {
      safeSetState(ENTERED, () => {
        local.onEntered!(maybeNode);
      });
      return;
    }

    local.onEnter!(maybeNode, maybeAppearing);

    nextFrame(() =>
      safeSetState(ENTERING, () => {
        local.onEntering!(maybeNode, maybeAppearing);

        onTransitionEnd(enterTimeout, () => {
          safeSetState(ENTERED, () => {
            local.onEntered!(maybeNode!, maybeAppearing!);
          });
        });
      })
    );
  }

  function performExit() {
    const { exit } = local;
    const timeouts = getTimeouts();
    const maybeNode = local.nodeRef ? undefined : childRef;

    // no exit animation skip right to EXITED
    if (!exit) {
      safeSetState(EXITED, () => {
        local.onExited!(maybeNode);
      });
      return;
    }

    local.onExit!(maybeNode!);

    nextFrame(() =>
      safeSetState(EXITING, () => {
        local.onExiting!(maybeNode!);

        onTransitionEnd(timeouts.exit, () => {
          safeSetState(EXITED, () => {
            local.onExited!(maybeNode);
          });
          if (local.unmountOnExit) {
            nextFrame(() => {
              setStatus(UNMOUNTED);
            });
          }
        });
      })
    );
  }

  function cancelNextCallback() {
    if (nextCallback !== null) {
      nextCallback?.cancel();
      nextCallback = null;
    }
  }

  function safeSetState(nextState: TransitionStatus, callback: Callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = setNextCallback(callback);
    setStatus(nextState);
    callback();
  }

  function setNextCallback(callback: Callback) {
    let active = true;

    nextCallback = ((...args: any[]) => {
      if (active) {
        active = false;
        nextCallback = null;

        callback(...args);
      }
    }) as unknown as Cancellable;

    nextCallback!.cancel = () => {
      active = false;
    };

    return nextCallback;
  }

  function onTransitionEnd(timeout: number | undefined, handler: Callback) {
    setNextCallback(handler);
    const node = local.nodeRef ? local.nodeRef : childRef;

    const doesNotHaveTimeoutOrListener =
      timeout == null && !local.addEndListener;
    if (!node || doesNotHaveTimeoutOrListener) {
      nextCallback && setTimeout(nextCallback, 0);
      return;
    }

    if (local.addEndListener) {
      const [maybeNode, maybeNextCallback] = local.nodeRef
        ? [nextCallback]
        : [node, nextCallback];
      local.addEndListener(maybeNode!, maybeNextCallback!);
    }

    if (timeout != null && nextCallback) {
      setTimeout(nextCallback, timeout);
    }
  }

  function renderChild() {
    const childRef =
      typeof local.children === "function"
        ? local.children(status(), childProps)
        : children(() => local.children as JSX.Element)();
    return childRef;
  }

  return (
    <TransitionGroupContext.Provider value={null}>
      <Show when={notUnmounted()}>{renderChild()}</Show>
    </TransitionGroupContext.Provider>
  );
};
