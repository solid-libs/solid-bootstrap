/* eslint-disable @typescript-eslint/no-use-before-define, react/prop-types */

import activeElement from "dom-helpers/activeElement";
import contains from "dom-helpers/contains";
import canUseDOM from "dom-helpers/canUseDOM";
import listen from "dom-helpers/listen";
import classNames from "./classnames";
import ModalManager from "./ModalManager";
import {TransitionCallbacks} from "solid-react-transition";
import useWindow from "./useWindow";
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
import {Portal} from "solid-js/web";
import useWaitForDOMRef, {DOMContainer} from "./useWaitForDOMRef";

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
  class: string | undefined;
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
  class?: string;
  className?: string;

  /**
   * Set the visibility of the Modal
   */
  show?: boolean;
  /**
   * A DOM element, a `ref` to an element, or function that returns either. The Modal is appended to it's `container` element.
   *
   */
  container?: DOMContainer;
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
   * A `<Transition/>` component used
   * to control animations for the dialog component.
   */
  transition?: ModalTransitionComponent;

  /**
   * A `<Transition/>` component used
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

  ref?: (ref: ModalHandle) => void;
}

export interface ModalProps extends BaseModalProps {
  [other: string]: any;
}

function getManager(window?: Window) {
  if (!manager) manager = new ModalManager({ownerDocument: window?.document});
  return manager;
}

function useModalManager(provided?: ModalManager) {
  const window = useWindow();
  const modalManager = provided || getManager(window);

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

const defaultProps = {
  show: false,
  role: "dialog",
  backdrop: true,
  keyboard: true,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  renderBackdrop: (props: RenderModalBackdropProps) => <div {...props} />,
  onHide: () => {},
};

export const Modal = (p: ModalProps) => {
  const [local, props] = splitProps(
    mergeProps(defaultProps, p),
    // split off local props with rest passed as dialogProps
    [
      "show",
      "role",
      "class",
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
      "onExited",
      "onExiting",
      "onEnter",
      "onEntering",
      "onEntered",
      "ref",
    ],
  );
  const container = useWaitForDOMRef({
    get ref() {
      return local.container;
    },
  });
  const modal = useModalManager(local.manager);

  const [isMounted, setIsMounted] = createSignal(false);
  onMount(() => setIsMounted(true));
  onCleanup(() => setIsMounted(false));

  const [exited, setExited] = createSignal(!local.show);
  let lastFocusRef: HTMLElement | null = null;

  local.ref?.(modal);

  createComputed(
    on(
      () => local.show,
      (show, prevShow) => {
        if (canUseDOM && !prevShow && show) {
          lastFocusRef = activeElement() as HTMLElement;
        }
      },
    ),
  );

  createComputed(() => {
    if (!local.transition && !local.show && !exited()) {
      setExited(true);
    } else if (local.show && exited()) {
      setExited(false);
    }
  });

  const handleShow = () => {
    modal.add();

    removeKeydownListenerRef = listen(document as any, "keydown", handleDocumentKeyDown);

    removeFocusListenerRef = listen(
      document as any,
      "focus",
      // the timeout is necessary b/c this will run before the new modal is mounted
      // and so steals focus from it
      () => setTimeout(handleEnforceFocus),
      true,
    );

    if (local.onShow) {
      local.onShow();
    }

    // autofocus after onShow to not trigger a focus event for previous
    // modals before this one is shown.
    if (local.autoFocus) {
      const currentActiveElement = activeElement(document) as HTMLElement;

      if (modal.dialog && currentActiveElement && !contains(modal.dialog, currentActiveElement)) {
        lastFocusRef = currentActiveElement;
        modal.dialog.focus();
      }
    }
  };

  const handleHide = () => {
    modal.remove();

    removeKeydownListenerRef?.();
    removeFocusListenerRef?.();

    if (local.restoreFocus) {
      // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
      lastFocusRef?.focus?.(local.restoreFocusOptions);
      lastFocusRef = null;
    }
  };

  // TODO: try and combine these effects: https://github.com/react-bootstrap/react-overlays/pull/794#discussion_r409954120

  // Show logic when:
  //  - show is `true` _and_ `container` has resolved
  createEffect(() => {
    if (!local.show || !container?.()) return;
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
    }),
  );

  onCleanup(() => {
    handleHide();
  });

  // --------------------------------

  const handleEnforceFocus = () => {
    if (!local.enforceFocus || !isMounted() || !modal.isTopModal()) {
      return;
    }

    const currentActiveElement = activeElement();

    if (modal.dialog && currentActiveElement && !contains(modal.dialog, currentActiveElement)) {
      modal.dialog.focus();
    }
  };

  const handleBackdropClick: JSX.EventHandler<HTMLElement, MouseEvent> = (e) => {
    if (e.target !== e.currentTarget) {
      return;
    }

    local.onBackdropClick?.(e);

    if (local.backdrop === true) {
      local.onHide?.();
    }
  };

  const handleDocumentKeyDown = (e: KeyboardEvent) => {
    if (local.keyboard && e.keyCode === 27 && modal.isTopModal()) {
      local.onEscapeKeyDown?.(e);

      if (!e.defaultPrevented) {
        local.onHide?.();
      }
    }
  };

  let removeFocusListenerRef: ReturnType<typeof listen>;
  let removeKeydownListenerRef: ReturnType<typeof listen>;

  const handleHidden: TransitionCallbacks["onExited"] = (...args) => {
    setExited(true);
    local.onExited?.(...args);
  };

  const dialogVisible = createMemo(() => !!(local.show || (local.transition && !exited())));

  const dialogProps = mergeProps(
    {
      get role() {
        return local.role as NonNullable<JSX.HTMLAttributes<HTMLDivElement>["role"]>;
      },
      get ref() {
        return modal.setDialogRef;
      },
      // apparently only works on the dialog role element
      get "aria-modal"() {
        return local.role === "dialog" ? true : undefined;
      },
    },
    props,
    {
      get style() {
        return local.style;
      },
      get class() {
        return classNames(local.class, local.className);
      },
      tabIndex: -1,
    },
  );

  const child = children(() => local.children);
  const getChildAsDocument = () => {
    const c = child();
    (c as HTMLElement)?.setAttribute?.("role", "document");
    return c;
  };

  let innerDialog = () =>
    local.renderDialog ? (
      local.renderDialog(dialogProps)
    ) : (
      <div {...dialogProps}>{getChildAsDocument()}</div>
    );

  const Dialog = () => {
    const Transition = local.transition;
    return !Transition ? (
      innerDialog
    ) : (
      <Transition
        appear
        unmountOnExit
        in={!!local.show}
        onExit={local.onExit}
        onExiting={local.onExiting}
        onExited={handleHidden}
        onEnter={local.onEnter}
        onEntering={local.onEntering}
        onEntered={local.onEntered}
      >
        {innerDialog}
      </Transition>
    );
  };

  const Backdrop = () => {
    let backdropElement = null;
    if (local.backdrop) {
      const BackdropTransition = local.backdropTransition;

      backdropElement = local.renderBackdrop({
        ref: modal.setBackdropRef,
        onClick: handleBackdropClick,
      });

      if (BackdropTransition) {
        backdropElement = (
          <BackdropTransition appear in={!!local.show}>
            {backdropElement}
          </BackdropTransition>
        );
      }
    }
    return backdropElement;
  };

  const portalRef = (ref: HTMLDivElement) => {
    ref.style.position = "fixed";
  };

  return (
    <Show when={container() && dialogVisible()}>
      <Portal mount={container()!} ref={portalRef}>
        <Backdrop />
        <Dialog />
      </Portal>
    </Show>
  );
};

export default Object.assign(Modal, {
  Manager: ModalManager,
});
