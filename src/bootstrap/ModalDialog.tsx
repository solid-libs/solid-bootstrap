import { JSX, mergeProps, splitProps } from "solid-js";
import classNames from "classnames";
import { useBootstrapPrefix } from "./ThemeProvider";
import { BsPrefixProps } from "./helpers";

export interface ModalDialogProps
  extends JSX.HTMLAttributes<HTMLDivElement>,
    BsPrefixProps {
  size?: "sm" | "lg" | "xl";
  fullscreen?:
    | true
    | "sm-down"
    | "md-down"
    | "lg-down"
    | "xl-down"
    | "xxl-down";
  centered?: boolean;
  scrollable?: boolean;
  contentClassName?: string;
}

const defaultProps = {};

const ModalDialog = (p: ModalDialogProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "bsPrefix",
    "className",
    "contentClassName",
    "centered",
    "size",
    "fullscreen",
    "children",
    "scrollable",
  ]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "modal");
  const dialogClass = `${bsPrefix}-dialog`;

  const fullScreenClass =
    typeof local.fullscreen === "string"
      ? `${bsPrefix}-fullscreen-${local.fullscreen}`
      : `${bsPrefix}-fullscreen`;

  return (
    <div
      {...props}
      className={classNames(
        dialogClass,
        local.className,
        local.size && `${bsPrefix}-${local.size}`,
        local.centered && `${dialogClass}-centered`,
        local.scrollable && `${dialogClass}-scrollable`,
        local.fullscreen && fullScreenClass
      )}
    >
      <div
        className={classNames(`${bsPrefix}-content`, local.contentClassName)}
      >
        {local.children}
      </div>
    </div>
  );
};

export default ModalDialog;
