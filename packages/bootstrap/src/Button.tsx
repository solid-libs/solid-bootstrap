import {mergeProps, splitProps} from "solid-js";
import classNames from "./classnames";
import {useButtonProps, ButtonProps as BaseButtonProps} from "solid-bootstrap-core";
import {useBootstrapPrefix} from "./ThemeProvider";
import {BsPrefixProps, BsPrefixRefForwardingComponent} from "./helpers";
import {ButtonVariant} from "./types";
import {Dynamic} from "solid-js/web";

export interface ButtonProps extends BaseButtonProps, Omit<BsPrefixProps, "as"> {
  active?: boolean;
  variant?: ButtonVariant;
  size?: "sm" | "lg";
}

export type CommonButtonProps = "href" | "size" | "variant" | "disabled";

const defaultProps: Partial<ButtonProps> = {
  variant: "primary",
  active: false,
  disabled: false,
};

const Button: BsPrefixRefForwardingComponent<"button", ButtonProps> = (p: ButtonProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "bsPrefix",
    "children",
    "variant",
    "size",
    "active",
    "class",
  ]);
  const prefix = useBootstrapPrefix(local.bsPrefix, "btn");
  const [buttonProps, {tagName}] = useButtonProps({
    tagName: local.as,
    ...props,
  });

  return (
    <Dynamic
      component={tagName}
      {...buttonProps}
      {...props}
      class={classNames(
        local.class,
        prefix,
        local.active && "active",
        local.variant && `${prefix}-${local.variant}`,
        local.size && `${prefix}-${local.size}`,
        props.href && props.disabled && "disabled",
      )}
    >
      {local.children}
    </Dynamic>
  );
};

export default Button;
