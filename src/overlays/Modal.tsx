/* eslint-disable @typescript-eslint/no-use-before-define, react/prop-types */

import activeElement from "dom-helpers/activeElement";
import contains from "dom-helpers/contains";
import canUseDOM from "dom-helpers/canUseDOM";
import listen from "dom-helpers/listen";
import ModalManager from "./ModalManager";
import { TransitionCallbacks } from "./types";
import {
  children,
  Component,
  createComputed,
  createEffect,
  createSignal,
  JSX,
  mergeProps,
  on,
  onCleanup,
  onMount,
  splitProps,
  Show,
  createMemo,
} from "solid-js";
import { Portal } from "solid-js/web";

let manager: ModalManager;

export type ModalTransitionComponent = Component<
  {
    in: boolean;
    appear?: boolean;
    unmountOnExit?: boolean;
  } & TransitionCallbacks
>;

export interface RenderModalDialogProps {
  style: JSX.CSSProperties | undefined;
  className: string | undefined;
  tabIndex: number;
  role: string;
  ref: (e: HTMLElement) => void;
  "aria-modal": boolean | undefined;
}

export interface RenderModalBackdropProps {
  ref: (e: HTMLElement) => void;
  onClick: JSX.EventHandler<HTMLElement, MouseEvent>;
}

/*
  Modal props are split into a version with and without index signature so that you can fully use them in another projects
  This is due to Typescript not playing well with index singatures e.g. when using Omit
*/
export interface BaseModalProps extends TransitionCallbacks {
  children?: JSX.Element;
  role?: string;
  style?: JSX.CSSProperties;
  className?: string;

  /**
   * Set the visibility of the Modal
   */
  show?: boolean;
  /**
   * A DOM element, a `ref` to an element, or function that returns either. The Modal is appended to it's `container` element.
   *
   */
  container?: () => HTMLElement | undefined;
  /**
   * A callback fired when the Modal is opening.
   */
  onShow?: () => void;
  /**
   * A callback fired when either the backdrop is clicked, or the escape key is pressed.
   *
   * The `onHide` callback only signals intent from the Modal,
   * you must actually set the `show` prop to `false` for the Modal to close.
   */
  onHide?: () => void;

  /**
   * A ModalManager instance used to track and manage the state of open
   * Modals. Useful when customizing how modals interact within a container
   */
  manager?: ModalManager;

  /**
   * Include a backdrop component. A `static`backdrop
   * will not trigger a Modal onHide when clicked.
   */
  backdrop?: true | false | "static";

  /**
   * A function that returns the dialog component. Useful for custom
   * rendering. **Note:** the component should make sure to apply the provided ref.
   *
   * ```js static
   * renderDialog={props => <MyDialog {...props} />}
   * ```
   */
  renderDialog?: (props: RenderModalDialogProps) => JSX.Element;
  /**
   * A function that returns a backdrop component. Useful for custom
   * backdrop rendering.
   *
   * ```js
   *  renderBackdrop={props => <MyBackdrop {...props} />}
   * ```
   */
  renderBackdrop?: (props: RenderModalBackdropProps) => JSX.Element;
  /**
   * A callback fired when the escape key, if specified in `keyboard`, is pressed.
   *
   * If preventDefault() is called on the keyboard event, closing the modal will be cancelled.
   */
  onEscapeKeyDown?: (e: KeyboardEvent) => void;
  /**
   * A callback fired when the backdrop, if specified, is clicked.
   */
  onBackdropClick?: JSX.EventHandler<HTMLElement, MouseEvent>;

  /**
   * Close the modal when escape key is pressed
   */
  keyboard?: boolean;

  /**
   * A `react-transition-group` `<Transition/>` component used
   * to control animations for the dialog component.
   */
  transition?: ModalTransitionComponent;

  /**
   * A `react-transition-group` `<Transition/>` component used
   * to control animations for the backdrop components.
   */
  backdropTransition?: ModalTransitionComponent;
  /**
   * When `true` The modal will automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes. This also
   * works correctly with any Modal children that have the `autoFocus` prop.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  autoFocus?: boolean;
  /**
   * When `true` The modal will prevent focus from leaving the Modal while open.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  enforceFocus?: boolean;

  /**
   * When `true` The modal will restore focus to previously focused element once
   * modal is hidden
   */
  restoreFocus?: boolean;

  /**
   * Options passed to focus function when `restoreFocus` is set to `true`
   *
   * @link  https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#Parameters
   */
  restoreFocusOptions?: {
    preventScroll: boolean;
  };
}

export interface ModalProps extends BaseModalProps {
  [other: string]: any;
}

function getManager() {
  if (!manager) manager = new ModalManager();
  return manager;
}

function useModalManager(provided?: ModalManager) {
  const modalManager = provided || getManager();

  const modal = {
    dialog: null as any as HTMLElement,
    backdrop: null as any as HTMLElement,
  };

  return Object.assign(modal, {
    add: () => modalManager.add(modal),

    remove: () => modalManager.remove(modal),

    isTopModal: () => modalManager.isTopModal(modal),

    setDialogRef: (ref: HTMLElement | null) => {
      modal.dialog = ref!;
    },

    setBackdropRef: (ref: HTMLElement | null) => {
      modal.backdrop = ref!;
    },
  });
}

export interface ModalHandle {
  dialog: HTMLElement | null;
  backdrop: HTMLElement | null;
}

const Modal = (p: ModalProps) => {
  const [props, rest] = splitProps(
    // merge in prop defaults
    mergeProps(
      {
        container: () => document.body,
        show: false,
        role: "dialog",
        backdrop: true,
        keyboard: true,
        autoFocus: true,
        enforceFocus: true,
        restoreFocus: true,
        renderBackdrop: (props: RenderModalBackdropProps) => <div {...props} />,
        onHide: () => {},
      },
      p
    ),
    // split off local props with rest passed as dialogProps
    [
      "show",
      "role",
      "className",
      "style",
      "children",
      "backdrop",
      "keyboard",
      "onBackdropClick",
      "onEscapeKeyDown",
      "transition",
      "backdropTransition",
      "autoFocus",
      "enforceFocus",
      "restoreFocus",
      "restoreFocusOptions",
      "renderDialog",
      "renderBackdrop",
      "manager",
      "container",
      "onShow",
      "onHide",
      "onExit",
      "onAfterExit",
      "onBeforeExit",
      "onEnter",
      "onBeforeEnter",
      "onAfterEnter",
    ]
  );
  const container = props.container;
  const modal = useModalManager(props.manager);

  const [isMounted, setIsMounted] = createSignal(false);
  onMount(() => setIsMounted(true));
  onCleanup(() => setIsMounted(false));

  const [exited, setExited] = createSignal(!props.show);
  const [lastFocusRef, setLastFocusRef] = createSignal<HTMLElement | null>(
    null
  );
  // useImperativeHandle(ref, () => modal, [modal]);

  createComputed(
    on(
      () => props.show,
      (show, prevShow) => {
        if (canUseDOM && !prevShow && show) {
          setLastFocusRef(activeElement() as HTMLElement);
        }
      }
    )
  );

  createComputed(() => {
    if (props.show) {
      if (exited()) setExited(false);
    } else if (!props.transition && !exited()) {
      setExited(true);
    }
  });

  const handleShow = () => {
    modal.add();

    setRemoveKeydownListenerRef(() =>
      listen(document as any, "keydown", handleDocumentKeyDown)
    );

    setRemoveFocusListenerRef(() =>
      listen(
        document as any,
        "focus",
        // the timeout is necessary b/c this will run before the new modal is mounted
        // and so steals focus from it
        () => setTimeout(handleEnforceFocus),
        true
      )
    );

    if (props.onShow) {
      props.onShow();
    }

    // autofocus after onShow to not trigger a focus event for previous
    // modals before this one is shown.
    if (props.autoFocus) {
      const currentActiveElement = activeElement(document) as HTMLElement;

      if (
        modal.dialog &&
        currentActiveElement &&
        !contains(modal.dialog, currentActiveElement)
      ) {
        setLastFocusRef(currentActiveElement);
        modal.dialog.focus();
      }
    }
  };

  const handleHide = () => {
    modal.remove();

    removeKeydownListenerRef?.();
    removeFocusListenerRef?.();

    if (props.restoreFocus) {
      // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
      lastFocusRef()?.focus?.(props.restoreFocusOptions);
      setLastFocusRef(null);
    }
  };

  // TODO: try and combine these effects: https://github.com/react-bootstrap/react-overlays/pull/794#discussion_r409954120

  // Show logic when:
  //  - show is `true` _and_ `container` has resolved
  createEffect(() => {
    if (!props.show || !container?.()) return;
    handleShow();
  });

  // Hide cleanup logic when:
  //  - `exited` switches to true
  //  - component unmounts;
  createEffect(
    on(exited, (exited, prev) => {
      if (exited && !(prev ?? exited)) {
        handleHide();
      }
    })
  );

  onCleanup(() => {
    handleHide();
  });

  // --------------------------------

  const handleEnforceFocus = () => {
    if (!props.enforceFocus || !isMounted() || !modal.isTopModal()) {
      return;
    }

    const currentActiveElement = activeElement();

    if (
      modal.dialog &&
      currentActiveElement &&
      !contains(modal.dialog, currentActiveElement)
    ) {
      modal.dialog.focus();
    }
  };

  const handleBackdropClick: JSX.EventHandler<HTMLElement, MouseEvent> = (
    e
  ) => {
    if (e.target !== e.currentTarget) {
      return;
    }

    props.onBackdropClick?.(e);

    if (props.backdrop === true) {
      props.onHide?.();
    }
  };

  const handleDocumentKeyDown = (e: KeyboardEvent) => {
    if (props.keyboard && e.keyCode === 27 && modal.isTopModal()) {
      props.onEscapeKeyDown?.(e);

      if (!e.defaultPrevented) {
        props.onHide?.();
      }
    }
  };

  const [removeFocusListenerRef, setRemoveFocusListenerRef] =
    createSignal<ReturnType<typeof listen>>();
  const [removeKeydownListenerRef, setRemoveKeydownListenerRef] =
    createSignal<ReturnType<typeof listen>>();

  const handleHidden: TransitionCallbacks["onAfterExit"] = (...args) => {
    setExited(true);
    props.onAfterExit?.(...args);
  };

  const Transition = props.transition;
  const dialogVisible = createMemo(
    () => !!(props.show || (props.transition && !exited()))
  );

  const dialogProps = {
    role: props.role as NonNullable<JSX.HTMLAttributes<HTMLDivElement>["role"]>,
    ref: modal.setDialogRef,
    // apparently only works on the dialog role element
    "aria-modal": props.role === "dialog" ? true : undefined,
    ...rest,
    style: props.style,
    className: props.className,
    tabIndex: -1,
  };

  const getChildAsDocument = () => {
    const child = children(() => props.children);
    (child() as HTMLElement)?.setAttribute?.("role", "document");
    return child();
  };

  let innerDialog = () =>
    props.renderDialog ? (
      props.renderDialog(dialogProps)
    ) : (
      <div {...dialogProps}>{getChildAsDocument}</div>
    );

  const dialog = !Transition
    ? innerDialog
    : () => (
        <Transition
          appear
          unmountOnExit
          in={!!props.show}
          onBeforeExit={props.onBeforeExit}
          onExit={props.onExit}
          onAfterExit={handleHidden}
          onBeforeEnter={props.onBeforeEnter}
          onEnter={props.onEnter}
          onAfterEnter={props.onAfterEnter}
        >
          {props.show && innerDialog}
        </Transition>
      );

  let backdropElement = null;
  if (props.backdrop) {
    const BackdropTransition = props.backdropTransition;

    backdropElement = props.renderBackdrop({
      ref: modal.setBackdropRef,
      onClick: handleBackdropClick,
    });

    if (BackdropTransition) {
      backdropElement = (
        <BackdropTransition appear in={!!props.show}>
          {backdropElement}
        </BackdropTransition>
      );
    }
  }

  const portalRef = (ref: HTMLDivElement) => {
    ref.style.position = "fixed";
  };

  return (
    <Show when={props.container() && dialogVisible()}>
      <Portal mount={props.container?.()} ref={portalRef}>
        {backdropElement}
        {dialog}
      </Portal>
    </Show>
  );
};

Modal.displayName = "Modal";

export default Object.assign(Modal, {
  Manager: ModalManager,
});
