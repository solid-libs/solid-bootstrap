import {
  createEffect,
  createMemo,
  getOwner,
  JSX,
  mergeProps,
  onCleanup,
  Owner,
  runWithOwner,
  Show,
  splitProps,
} from "solid-js";
import classNames from "./classnames";

import ToastFade from "./ToastFade";
import ToastHeader from "./ToastHeader";
import ToastBody from "./ToastBody";
import {useBootstrapPrefix} from "./ThemeProvider";
import ToastContext from "./ToastContext";
import {BsPrefixProps, BsPrefixRefForwardingComponent} from "./helpers";
import {Variant} from "./types";

export interface ToastProps extends BsPrefixProps, JSX.HTMLAttributes<HTMLDivElement> {
  animation?: boolean;
  autohide?: boolean;
  delay?: number;
  onClose?: (e?: MouseEvent | KeyboardEvent) => void;
  show?: boolean;
  transition?: typeof ToastFade;
  bg?: Variant;
}

const defaultProps: Partial<ToastProps> = {
  transition: ToastFade,
  show: true,
  animation: true,
  delay: 5000,
  autohide: false,
};

const Toast: BsPrefixRefForwardingComponent<"div", ToastProps> = (p: ToastProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "bsPrefix",
    "class",
    "transition",
    "show",
    "animation",
    "delay",
    "autohide",
    "onClose",
    "bg",
  ]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "toast");
  let owner: Owner;

  // We use refs for these, because we don't want to restart the autohide
  // timer in case these values change.
  let delayRef = local.delay;
  let onCloseRef = local.onClose;

  createEffect(() => {
    delayRef = local.delay;
    onCloseRef = local.onClose;
  });

  let autohideTimeout: number;
  const autohideToast = createMemo(() => !!(local.autohide && local.show));

  const autohideFunc = createMemo(() => () => {
    if (autohideToast()) {
      onCloseRef?.();
    }
  });

  createEffect(() => {
    // Only reset timer if show or autohide changes.
    if (autohideToast()) {
      window.clearTimeout(autohideTimeout);
      autohideTimeout = window.setTimeout(autohideFunc(), delayRef);
    }
  });

  onCleanup(() => {
    window.clearTimeout(autohideTimeout);
  });

  const toastContext = {
    get onClose() {
      return local.onClose;
    },
  };

  const hasAnimation = !!(local.transition! && local.animation);
  const Transition = local.transition!;

  const ToastInner = () =>
    runWithOwner(owner, () => (
      <div
        {...props}
        class={classNames(
          bsPrefix,
          local.class,
          local.bg && `bg-${local.bg}`,
          !hasAnimation && (local.show ? "show" : "hide"),
        )}
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      />
    ));

  return (
    <ToastContext.Provider value={toastContext}>
      {() => {
        owner = getOwner()!;
        return (
          <Show when={hasAnimation && local.transition} fallback={<ToastInner />}>
            <Transition appear in={local.show} unmountOnExit>
              <ToastInner />
            </Transition>
          </Show>
        );
      }}
    </ToastContext.Provider>
  );
};

export default Object.assign(Toast, {
  Body: ToastBody,
  Header: ToastHeader,
});
