import {JSX, mergeProps, splitProps} from "solid-js";
import classNames from "./classnames";
import {useBootstrapPrefix} from "./ThemeProvider";
import {BsPrefixProps} from "./helpers";

export interface ButtonToolbarProps extends BsPrefixProps, JSX.HTMLAttributes<HTMLDivElement> {}

const defaultProps: Partial<ButtonToolbarProps> = {
  role: "toolbar",
};

const ButtonToolbar = (p: ButtonToolbarProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), ["bsPrefix", "class"]);
  const prefix = useBootstrapPrefix(local.bsPrefix, "btn-toolbar");

  return <div {...props} class={classNames(local.class, prefix)} />;
};
export default ButtonToolbar;
