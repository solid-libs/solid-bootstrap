import {mergeProps, splitProps, useContext} from "solid-js";
import classNames from "./classnames";
import {
  Modal as BaseModal,
  ModalProps as BaseModalProps,
  RenderModalBackdropProps,
  RenderModalDialogProps,
} from "solid-bootstrap-core";
import Fade from "./Fade";
import OffcanvasBody from "./OffcanvasBody";
import OffcanvasToggling from "./OffcanvasToggling";
import ModalContext from "./ModalContext";
import NavbarContext from "./NavbarContext";
import OffcanvasHeader from "./OffcanvasHeader";
import OffcanvasTitle from "./OffcanvasTitle";
import {BsPrefixRefForwardingComponent} from "./helpers";
import {useBootstrapPrefix} from "./ThemeProvider";
import {BootstrapModalManager, getSharedManager} from "./BootstrapModalManager";

export type OffcanvasPlacement = "start" | "end" | "top" | "bottom";

export interface OffcanvasProps
  extends Omit<
    BaseModalProps,
    "role" | "renderBackdrop" | "renderDialog" | "transition" | "backdrop" | "backdropTransition"
  > {
  bsPrefix?: string;
  backdropClass?: string;
  backdropClassName?: string;
  scroll?: boolean;
  placement?: OffcanvasPlacement;
}

const defaultProps: Partial<OffcanvasProps> = {
  show: false,
  backdrop: true,
  keyboard: true,
  scroll: false,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  placement: "start",
};

function DialogTransition(props: any) {
  return <OffcanvasToggling {...props}/>;
}

function BackdropTransition(props: any) {
  return <Fade {...props}/>;
}

const Offcanvas: BsPrefixRefForwardingComponent<"div", OffcanvasProps> = (p: OffcanvasProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "bsPrefix",
    "class",
    "className",
    "children",
    "aria-labelledby",
    "placement",
    /*BaseModal props */
    "show",
    "backdrop",
    "keyboard",
    "scroll",
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
    "backdropClass",
    "backdropClassName",
    "manager",
    "ref",
  ]);
  let modalManager: BootstrapModalManager;
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "offcanvas");
  const navbarContext = useContext(NavbarContext);

  const handleHide = () => {
    navbarContext?.onToggle?.();
    local.onHide?.();
  };

  const modalContext = {
    get onHide() {
      return handleHide;
    },
  };

  function getModalManager() {
    if (local.manager) return local.manager;
    if (local.scroll) {
      // Have to use a different modal manager since the shared
      // one handles overflow.
      if (!modalManager)
        modalManager = new BootstrapModalManager({
          handleContainerOverflow: false,
        });
      return modalManager;
    }

    return getSharedManager();
  }

  const handleEnter = (node: any, ...args: any[]) => {
    if (node) node.style.visibility = "visible";
    local.onEnter?.(node, ...args);
  };

  const handleExited = (node: any, ...args: any[]) => {
    if (node) node.style.visibility = "";
    local.onExited?.(...args);
  };

  const renderBackdrop = (backdropProps: RenderModalBackdropProps) => (
    <div {...backdropProps} class={classNames(`${bsPrefix}-backdrop`, local.backdropClass, local.backdropClassName)}>
      {props.children}
    </div>
  );

  const renderDialog = (dialogProps: RenderModalDialogProps) => (
    <div
      // @ts-ignore
      role="dialog"
      {...dialogProps}
      {...props}
      class={classNames(local.class, local.className, bsPrefix, `${bsPrefix}-${local.placement}`)}
      aria-labelledby={local["aria-labelledby"]}
    >
      {local.children}
    </div>
  );

  return (
    <ModalContext.Provider value={modalContext}>
      <BaseModal
        show={local.show}
        ref={local.ref}
        backdrop={local.backdrop}
        container={local.container}
        keyboard={local.keyboard}
        autoFocus={local.autoFocus}
        enforceFocus={local.enforceFocus && !scroll}
        restoreFocus={local.restoreFocus}
        restoreFocusOptions={local.restoreFocusOptions}
        onEscapeKeyDown={local.onEscapeKeyDown}
        onShow={local.onShow}
        onHide={handleHide}
        onEnter={handleEnter}
        onEntering={local.onEntering}
        onEntered={local.onEntered}
        onExit={local.onExit}
        onExiting={local.onExiting}
        onExited={handleExited}
        manager={getModalManager()}
        transition={DialogTransition}
        backdropTransition={BackdropTransition}
        renderBackdrop={renderBackdrop}
        renderDialog={renderDialog}
      />
    </ModalContext.Provider>
  );
};

export default Object.assign(Offcanvas, {
  Body: OffcanvasBody,
  Header: OffcanvasHeader,
  Title: OffcanvasTitle,
});
