import {JSX, mergeProps, splitProps, useContext} from "solid-js";
import classNames from "./classnames";

import {useBootstrapPrefix} from "./ThemeProvider";
import NavbarContext from "./NavbarContext";
import {BsPrefixProps, BsPrefixRefForwardingComponent} from "./helpers";
import {callEventHandler} from "solid-bootstrap-core";
import {Dynamic} from "solid-js/web";

export interface NavbarToggleProps extends BsPrefixProps, JSX.HTMLAttributes<HTMLElement> {
  label?: string;
}

const defaultProps = {
  as: "button",
  label: "Toggle navigation",
};

const NavbarToggle: BsPrefixRefForwardingComponent<"button", NavbarToggleProps> = (
  p: NavbarToggleProps,
) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "bsPrefix",
    "class",
    "className",
    "children",
    "label",
    "onClick",
  ]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "navbar-toggler");

  const context = useContext(NavbarContext);

  const handleClick = (e: MouseEvent) => {
    callEventHandler(local.onClick, e);
    context?.onToggle?.();
  };

  if (local.as === "button") {
    (props as any).type = "button";
  }

  return (
    <Dynamic
      component={local.as}
      {...props}
      type={local.as === "button" ? "button" : undefined}
      onClick={handleClick}
      aria-label={local.label}
      class={classNames(local.class, local.className, bsPrefix, !context?.expanded && "collapsed")}
    >
      {local.children || <span class={`${bsPrefix}-icon`} />}
    </Dynamic>
  );
};

export default NavbarToggle;
