import {JSX, mergeProps, splitProps} from "solid-js";
import classNames from "./classnames";

import {useBootstrapPrefix} from "./ThemeProvider";
import {BsPrefixProps, BsPrefixRefForwardingComponent} from "./helpers";
import {Dynamic} from "solid-js/web";

export interface ContainerProps extends BsPrefixProps, JSX.HTMLAttributes<HTMLElement> {
  fluid?: boolean | string | "sm" | "md" | "lg" | "xl" | "xxl";
}

const defaultProps = {
  as: "div",
  fluid: false,
};

const Container: BsPrefixRefForwardingComponent<"div", ContainerProps> = (p: ContainerProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "bsPrefix",
    "fluid",
    "className",
  ]);
  const prefix = useBootstrapPrefix(local.bsPrefix, "container");
  const suffix = typeof local.fluid === "string" ? `-${local.fluid}` : "-fluid";
  return (
    <Dynamic
      component={local.as}
      {...props}
      className={classNames(local.className, local.fluid ? `${prefix}${suffix}` : prefix)}
    />
  );
};

export default Container;
