import {JSX, mergeProps, splitProps} from "solid-js";
import classNames from "./classnames";
import {useBootstrapPrefix} from "./ThemeProvider";
import {BsPrefixProps, BsPrefixRefForwardingComponent} from "./helpers";
import {Color, Variant} from "./types";
import {Dynamic} from "solid-js/web";

export interface BadgeProps extends BsPrefixProps, JSX.HTMLAttributes<HTMLElement> {
  bg?: Variant;
  pill?: boolean;
  text?: Color;
}

const defaultProps = {
  as: "span",
  bg: "primary",
  pill: false,
};

const Badge: BsPrefixRefForwardingComponent<"span", BadgeProps> = (p: BadgeProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "bsPrefix",
    "bg",
    "pill",
    "text",
    "class",
  ]);

  const prefix = useBootstrapPrefix(local.bsPrefix, "badge");
  return (
    <Dynamic
      component={local.as}
      {...props}
      class={classNames(
        local.class,
        prefix,
        local.pill && `rounded-pill`,
        local.text && `text-${local.text}`,
        local.bg && `bg-${local.bg}`,
      )}
    />
  );
};
export default Badge;
