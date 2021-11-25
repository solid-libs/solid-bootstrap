// ported from https://github.com/react-bootstrap/react-bootstrap/blob/f11723114d532cfce840417834a73733a8436414/src/CloseButton.tsx

import { JSX, mergeProps, splitProps } from "solid-js";
import classNames from "classnames";

export type CloseButtonVariant = "white";

export interface CloseButtonProps
  extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: CloseButtonVariant;
}

const defaultProps = {
  "aria-label": "Close",
};

const CloseButton = (p: CloseButtonProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "className",
    "variant",
  ]);

  return (
    <button
      type="button"
      className={classNames(
        "btn-close",
        local.variant && `btn-close-${local.variant}`,
        local.className
      )}
      {...props}
    />
  );
};

export default CloseButton;
