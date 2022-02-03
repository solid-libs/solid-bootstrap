import {Component, createSignal, mergeProps, onCleanup, splitProps} from "solid-js";
import classNames from "./classnames";
import addEventListener from "dom-helpers/addEventListener";
import canUseDOM from "dom-helpers/canUseDOM";
import ownerDocument from "dom-helpers/ownerDocument";
import removeEventListener from "dom-helpers/removeEventListener";
import getScrollbarSize from "dom-helpers/scrollbarSize";
import transitionEnd from "dom-helpers/transitionEnd";
import {
  Modal as BaseModal,
  ModalHandle,
  ModalInstance,
  ModalProps as BaseModalProps,
} from "solid-bootstrap-core";
import {getSharedManager} from "./BootstrapModalManager";
import Fade, {FadeProps} from "./Fade";
import ModalBody from "./ModalBody";
import ModalContext from "./ModalContext";
import ModalDialog from "./ModalDialog";
import ModalFooter from "./ModalFooter";
import ModalHeader from "./ModalHeader";
import ModalTitle from "./ModalTitle";
import {BsPrefixRefForwardingComponent} from "./helpers";
import {useBootstrapPrefix, useIsRTL} from "./ThemeProvider";
import {Dynamic, isServer} from "solid-js/web";

export interface ModalProps
  extends Omit<
    BaseModalProps,
    "role" | "renderBackdrop" | "renderDialog" | "transition" | "backdropTransition" | "children"
  > {
  size?: "sm" | "lg" | "xl";
  fullscreen?: true | "sm-down" | "md-down" | "lg-down" | "xl-down" | "xxl-down";
  bsPrefix?: string;
  centered?: boolean;
  backdropClassName?: string;
  animation?: boolean;
  dialogClassName?: string;
  contentClassName?: string;
  dialogAs?: Component;
  scrollable?: boolean;
  [other: string]: any;
}

const defaultProps: Partial<ModalProps> = {
  show: false,
  backdrop: true,
  keyboard: true,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  animation: true,
  dialogAs: ModalDialog,
};

/* eslint-disable no-use-before-define, react/no-multi-comp */
function DialogTransition(props: FadeProps) {
  return (
    <Fade {...props} timeout={undefined}>
      {props.children}
    </Fade>
  );
}

function BackdropTransition(props: FadeProps) {
  return (
    <Fade {...props} timeout={undefined}>
      {props.children}
    </Fade>
  );
}

/* eslint-enable no-use-before-define */
const Modal: BsPrefixRefForwardingComponent<"div", ModalProps> = (p: ModalProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "bsPrefix",
    "className",
    "style",
    "dialogClassName",
    "contentClassName",
    "children",
    "dialogAs",
    "aria-labelledby",
    /* BaseModal props */
    "show",
    "animation",
    "backdrop",
    "keyboard",
    "onEscapeKeyDown",
    "onShow",
    "onHide",
    "container",
    "autoFocus",
    "enforceFocus",
    "restoreFocus",
    "restoreFocusOptions",
    "onEntered",
    "onExit",
    "onExiting",
    "onEnter",
    "onEntering",
    "onExited",
    "backdropClassName",
    "manager",
  ]);
  const [modalStyle, setStyle] = createSignal({});
  const [animateStaticModal, setAnimateStaticModal] = createSignal(false);
  let waitingForMouseUpRef = false;
  let ignoreBackdropClickRef = false;
  let removeStaticModalAnimationRef: (() => void) | null = null;
  let modal: ModalHandle;
  const isRTL = useIsRTL();
  const mergedRef = (ref: ModalHandle) => {
    modal = ref;
    props.ref?.(ref);
  };
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "modal");

  const modalContext = {
    get onHide() {
      return local.onHide;
    },
  };

  function getModalManager() {
    if (local.manager) return local.manager;
    return getSharedManager({isRTL});
  }

  function updateDialogStyle(node: Element) {
    if (!canUseDOM) return;

    const containerIsOverflowing = getModalManager().getScrollbarWidth() > 0;

    const modalIsOverflowing = node.scrollHeight > ownerDocument(node).documentElement.clientHeight;

    setStyle({
      paddingRight: containerIsOverflowing && !modalIsOverflowing ? getScrollbarSize() : undefined,
      paddingLeft: !containerIsOverflowing && modalIsOverflowing ? getScrollbarSize() : undefined,
    });
  }

  const handleWindowResize = () => {
    if (modal) {
      updateDialogStyle(modal.dialog!);
    }
  };

  onCleanup(() => {
    removeEventListener(window as any, "resize", handleWindowResize);
    removeStaticModalAnimationRef?.();
  });

  // We prevent the modal from closing during a drag by detecting where the
  // the click originates from. If it starts in the modal and then ends outside
  // don't close.
  const handleDialogMouseDown = () => {
    waitingForMouseUpRef = true;
  };

  const handleMouseUp = (e: any) => {
    if (waitingForMouseUpRef && modal && e.target === modal.dialog) {
      ignoreBackdropClickRef = true;
    }
    waitingForMouseUpRef = false;
  };

  const handleStaticModalAnimation = () => {
    setAnimateStaticModal(true);
    removeStaticModalAnimationRef = transitionEnd(modal!.dialog as any, () => {
      setAnimateStaticModal(false);
    });
  };

  const handleStaticBackdropClick = (e: any) => {
    if (e.target !== e.currentTarget) {
      return;
    }

    handleStaticModalAnimation();
  };

  const handleClick = (e: any) => {
    if (local.backdrop === "static") {
      handleStaticBackdropClick(e);
      return;
    }

    if (ignoreBackdropClickRef || e.target !== e.currentTarget) {
      ignoreBackdropClickRef = false;
      return;
    }

    local.onHide?.();
  };

  const handleEscapeKeyDown = (e: any) => {
    if (!local.keyboard && local.backdrop === "static") {
      // Call preventDefault to stop modal from closing in restart ui,
      // then play our animation.
      e.preventDefault();
      handleStaticModalAnimation();
    } else if (local.keyboard && local.onEscapeKeyDown) {
      local.onEscapeKeyDown(e);
    }
  };

  const handleEnter: BaseModalProps["onEnter"] = (node?: any, ...args) => {
    if (node) {
      // @ts-ignore
      node.style.display = "block";
      updateDialogStyle(node);
    }

    local.onEnter?.(node, ...args);
  };

  const handleExit: BaseModalProps["onExit"] = (...args) => {
    removeStaticModalAnimationRef?.();
    local.onExit?.(...args);
  };

  const handleEntering: BaseModalProps["onEntering"] = (...args) => {
    local.onEntering?.(...args);

    if (!isServer) {
      // FIXME: This should work even when animation is disabled.
      addEventListener(window as any, "resize", handleWindowResize);
    }
  };

  const handleExited: BaseModalProps["onExited"] = (node?: any) => {
    if (node) node.style.display = ""; // RHL removes it sometimes
    local.onExited?.(node);

    if (!isServer) {
      // FIXME: This should work even when animation is disabled.
      removeEventListener(window as any, "resize", handleWindowResize);
    }
  };

  const renderBackdrop = (backdropProps: any) => (
    <div
      {...backdropProps}
      className={classNames(
        `${bsPrefix}-backdrop`,
        local.backdropClassName,
        !local.animation && "show",
      )}
    >
      {backdropProps.children}
    </div>
  );

  const baseModalStyle = () => {
    let s = {...local.style, ...modalStyle()};

    // Sets `display` always block when `animation` is false
    if (!local.animation) {
      s.display = "block";
    }
    return s;
  };

  const renderDialog = (dialogProps: any) => (
    <div
      role="dialog"
      {...dialogProps}
      style={baseModalStyle()}
      className={classNames(
        local.className,
        bsPrefix,
        animateStaticModal() && `${bsPrefix}-static`,
      )}
      onClick={local.backdrop ? handleClick : undefined}
      onMouseUp={handleMouseUp}
      aria-labelledby={local["aria-labelledby"]}
    >
      <Dynamic
        component={local.dialogAs as typeof ModalDialog}
        {...props}
        onMouseDown={handleDialogMouseDown}
        className={local.dialogClassName}
        contentClassName={local.contentClassName}
      >
        {local.children}
      </Dynamic>
    </div>
  );

  return (
    <ModalContext.Provider value={modalContext}>
      <BaseModal
        show={local.show}
        ref={mergedRef}
        backdrop={local.backdrop}
        container={local.container}
        keyboard // Always set true - see handleEscapeKeyDown
        autoFocus={local.autoFocus}
        enforceFocus={local.enforceFocus}
        restoreFocus={local.restoreFocus}
        restoreFocusOptions={local.restoreFocusOptions}
        onEscapeKeyDown={handleEscapeKeyDown}
        onShow={local.onShow}
        onHide={local.onHide}
        onEnter={handleEnter}
        onEntering={handleEntering}
        onEntered={local.onEntered}
        onExit={handleExit}
        onExiting={local.onExiting}
        onExited={handleExited}
        manager={getModalManager()}
        transition={local.animation ? DialogTransition : undefined}
        backdropTransition={local.animation ? BackdropTransition : undefined}
        renderBackdrop={renderBackdrop}
        renderDialog={renderDialog}
      />
    </ModalContext.Provider>
  );
};

export default Object.assign(Modal, {
  Body: ModalBody,
  Header: ModalHeader,
  Title: ModalTitle,
  Footer: ModalFooter,
  Dialog: ModalDialog,
  TRANSITION_DURATION: 300,
  BACKDROP_TRANSITION_DURATION: 150,
});
