import {JSX, mergeProps, splitProps} from "solid-js";
import classNames from "./classnames";
import {useBootstrapPrefix} from "./ThemeProvider";
import {BsPrefixProps} from "./helpers";

export interface ModalDialogProps extends JSX.HTMLAttributes<HTMLDivElement>, BsPrefixProps {
  size?: "sm" | "lg" | "xl";
  fullscreen?: true | string | "sm-down" | "md-down" | "lg-down" | "xl-down" | "xxl-down";
  centered?: boolean;
  scrollable?: boolean;
  contentClass?: string;
}

const defaultProps: Partial<ModalDialogProps> = {};

const ModalDialog = (p: ModalDialogProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "bsPrefix",
    "class",
    "contentClass",
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
      class={classNames(
        dialogClass,
        local.class,
        local.size && `${bsPrefix}-${local.size}`,
        local.centered && `${dialogClass}-centered`,
        local.scrollable && `${dialogClass}-scrollable`,
        local.fullscreen && fullScreenClass,
      )}
    >
      <div class={classNames(`${bsPrefix}-content`, local.contentClass, local.contentClass)}>
        {local.children}
      </div>
    </div>
  );
};

export default ModalDialog;
