import {JSX, mergeProps, splitProps} from "solid-js";
import classNames from "./classnames";
import {useBootstrapPrefix} from "./ThemeProvider";
import {BsPrefixProps, BsPrefixRefForwardingComponent} from "./helpers";
import {Dynamic} from "solid-js/web";

export interface ButtonGroupProps extends BsPrefixProps, JSX.HTMLAttributes<HTMLElement> {
  size?: "sm" | "lg";
  vertical?: boolean;
}

const defaultProps = {
  as: "div",
  vertical: false,
  role: "group",
};

const ButtonGroup: BsPrefixRefForwardingComponent<"div", ButtonGroupProps> = (
  p: ButtonGroupProps,
) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "bsPrefix",
    "size",
    "vertical",
    "className",
    "as",
  ]);
  const prefix = useBootstrapPrefix(local.bsPrefix, "btn-group");
  let baseClass = prefix;

  if (local.vertical) baseClass = `${prefix}-vertical`;

  return (
    <Dynamic
      component={local.as}
      {...props}
      className={classNames(local.className, baseClass, local.size && `${prefix}-${local.size}`)}
    >
      {props.children}
    </Dynamic>
  );
};
export default ButtonGroup;
