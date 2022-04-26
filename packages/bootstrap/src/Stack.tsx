import {JSX, mergeProps, splitProps} from "solid-js";
import classNames from "./classnames";
import {useBootstrapPrefix, useBootstrapBreakpoints} from "./ThemeProvider";
import {BsPrefixProps, BsPrefixRefForwardingComponent} from "./helpers";
import {GapValue} from "./types";
import createUtilityClassName, {ResponsiveUtilityValue} from "./createUtilityClasses";
import {Dynamic} from "solid-js/web";

export type StackDirection = "horizontal" | "vertical";

export interface StackProps extends BsPrefixProps, JSX.HTMLAttributes<HTMLElement> {
  direction?: StackDirection;
  gap?: ResponsiveUtilityValue<GapValue>;
}

const defaultProps = {
  as: "div",
};

const Stack: BsPrefixRefForwardingComponent<"span", StackProps> = (p: StackProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "bsPrefix",
    "class",
    "className",
    "direction",
    "gap",
  ]);
  const bsPrefix = useBootstrapPrefix(
    local.bsPrefix,
    local.direction === "horizontal" ? "hstack" : "vstack",
  );
  const breakpoints = useBootstrapBreakpoints();

  return (
    <Dynamic
      component={local.as}
      {...props}
      class={classNames(
        local.class,
        local.className,
        bsPrefix,
        ...createUtilityClassName({
          gap: local.gap,
          breakpoints: breakpoints(),
        }),
      )}
    />
  );
};

export default Stack;
