import { JSX, mergeProps, splitProps, useContext } from "solid-js";
import classNames from "classnames";
import { useBootstrapPrefix } from "./ThemeProvider";
import CloseButton, { CloseButtonVariant } from "./CloseButton";
import ToastContext from "./ToastContext";
import { BsPrefixOnlyProps } from "./helpers";

export interface ToastHeaderProps
  extends BsPrefixOnlyProps,
    JSX.HTMLAttributes<HTMLDivElement> {
  closeLabel?: string;
  closeVariant?: CloseButtonVariant;
  closeButton?: boolean;
}

const defaultProps = {
  closeLabel: "Close",
  closeButton: true,
};

const ToastHeader = (p: ToastHeaderProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "bsPrefix",
    "closeLabel",
    "closeVariant",
    "closeButton",
    "className",
    "children",
  ]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "toast-header");
  const context = useContext(ToastContext);

  const handleClick = (e: MouseEvent) => {
    context?.onClose?.(e);
  };

  return (
    <div {...props} className={classNames(bsPrefix, local.className)}>
      {local.children}

      {local.closeButton && (
        <CloseButton
          aria-label={local.closeLabel}
          variant={local.closeVariant}
          onClick={handleClick}
          data-dismiss="toast"
        />
      )}
    </div>
  );
};

export default ToastHeader;
