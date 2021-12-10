import { JSX, mergeProps, splitProps } from "solid-js";
import classNames from "./classnames";
import {
  Anchor,
  useNavItem,
  makeEventKey,
  NavItemProps as BaseNavItemProps,
} from "solid-bootstrap-core";
import { useBootstrapPrefix } from "./ThemeProvider";
import { BsPrefixProps, BsPrefixRefForwardingComponent } from "./helpers";
import { Dynamic } from "solid-js/web";

export interface NavLinkProps
  extends BsPrefixProps,
    Omit<BaseNavItemProps, "as"> {}

const defaultProps = {
  as: Anchor,
  disabled: false,
};

const NavLink: BsPrefixRefForwardingComponent<"a", NavLinkProps> = (
  p: NavLinkProps
) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "bsPrefix",
    "className",
    "active",
    "eventKey",
  ]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "nav-link");
  const [navItemProps, meta] = useNavItem(
    mergeProps(
      {
        get key() {
          return makeEventKey(local.eventKey, props.href);
        },
        get active() {
          return local.active;
        },
      },
      props
    )
  );

  return (
    <Dynamic
      component={local.as}
      {...props}
      {...(navItemProps as any)}
      className={classNames(
        local.className,
        bsPrefix,
        props.disabled && "disabled",
        meta.isActive && "active"
      )}
    >
      {props.children}
    </Dynamic>
  );
};

export default NavLink;
