// ported from https://github.com/react-bootstrap/react-bootstrap/blob/f11723114d532cfce840417834a73733a8436414/src/Alert.tsx

import { JSX, mergeProps, Show, splitProps } from "solid-js";
import classNames from "./classnames";
import { createControlledProp } from "solid-bootstrap-core/createControlledProp";
import Anchor from "solid-bootstrap-core/Anchor";
import { useBootstrapPrefix } from "./ThemeProvider";
import Fade from "./Fade";
import CloseButton, { CloseButtonVariant } from "./CloseButton";
import { Variant } from "./types";
import { divWithClassName } from "./divWithClassName";
import { createWithBsPrefix } from "./createWithBsPrefix";
import { TransitionType } from "./helpers";

export interface AlertProps extends JSX.HTMLAttributes<HTMLDivElement> {
  bsPrefix?: string;
  variant?: Variant;
  dismissible?: boolean;
  defaultShow?: boolean;
  show?: boolean;
  onClose?: (a: any, b: any) => void;
  closeLabel?: string;
  closeVariant?: CloseButtonVariant;
  transition?: TransitionType;
}

const DivStyledAsH4 = divWithClassName("h4");

const AlertHeading = createWithBsPrefix("alert-heading", {
  Component: DivStyledAsH4,
});

const AlertLink = createWithBsPrefix("alert-link", {
  Component: Anchor,
});

const defaultProps = {
  variant: "primary",
  defaultShow: true,
  transition: Fade,
  closeLabel: "Close alert",
};

const Alert = (uncontrolledProps: AlertProps) => {
  const [local, props] = splitProps(
    mergeProps(defaultProps, uncontrolledProps),
    [
      "bsPrefix",
      "children",
      "defaultShow",
      "show",
      "closeLabel",
      "closeVariant",
      "className",
      "children",
      "variant",
      "onClose",
      "dismissible",
      "transition",
    ]
  );

  const [show, onClose] = createControlledProp(
    () => local.show,
    () => local.defaultShow,
    local.onClose
  );

  const prefix = useBootstrapPrefix(local.bsPrefix, "alert");
  const handleClose = (e: any) => {
    if (onClose) {
      onClose(false, e);
    }
  };
  const Transition = local.transition === true ? Fade : local.transition;

  const alert = () => (
    <div
      role="alert"
      {...(!Transition ? props : {})}
      className={classNames(
        local.className,
        prefix,
        local.variant && `${prefix}-${local.variant}`,
        local.dismissible && `${prefix}-dismissible`
      )}
    >
      {local.dismissible && (
        <CloseButton
          onClick={handleClose}
          aria-label={local.closeLabel}
          variant={local.closeVariant}
        />
      )}
      {local.children}
    </div>
  );

  return (
    <Show when={!!Transition} fallback={local.show ? alert : null}>
      <Transition unmountOnExit {...props} ref={undefined} in={show()}>
        {alert}
      </Transition>
    </Show>
  );
};
export default Object.assign(Alert, {
  Link: AlertLink,
  Heading: AlertHeading,
});
