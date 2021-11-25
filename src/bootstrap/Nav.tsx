import { JSX, mergeProps, splitProps, useContext } from "solid-js";
import classNames from "classnames";
import { createControlledProp } from "../core/createControlledProp";
import BaseNav, { NavProps as BaseNavProps } from "../core/Nav";
import { EventKey } from "../core/types";
import { useBootstrapPrefix } from "./ThemeProvider";
import NavbarContext from "./NavbarContext";
import CardHeaderContext from "./CardHeaderContext";
import NavItem from "./NavItem";
import NavLink from "./NavLink";
import { BsPrefixProps, BsPrefixRefForwardingComponent } from "./helpers";

export interface NavProps extends BsPrefixProps, BaseNavProps {
  navbarBsPrefix?: string;
  cardHeaderBsPrefix?: string;
  variant?: "tabs" | "pills";
  defaultActiveKey?: EventKey;
  fill?: boolean;
  justify?: boolean;
  navbar?: boolean;
  navbarScroll?: boolean;
}

const defaultProps = {
  as: "div",
  justify: false,
  fill: false,
};

const Nav: BsPrefixRefForwardingComponent<"div", NavProps> = (p: NavProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "activeKey",
    "defaultActiveKey",
    "bsPrefix",
    "variant",
    "fill",
    "justify",
    "navbar",
    "navbarScroll",
    "className",
    "onSelect",
  ]);

  const [activeKey, onSelect] = createControlledProp(
    () => local.activeKey,
    () => local.defaultActiveKey,
    local.onSelect
  );
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "nav");

  let navbarBsPrefix;
  let cardHeaderBsPrefix;
  let isNavbar = false;

  const navbarContext = useContext(NavbarContext);
  const cardHeaderContext = useContext(CardHeaderContext);

  if (navbarContext) {
    navbarBsPrefix = navbarContext.bsPrefix;
    isNavbar = local.navbar == null ? true : local.navbar;
  } else if (cardHeaderContext) {
    ({ cardHeaderBsPrefix } = cardHeaderContext);
  }

  return (
    <BaseNav
      as={local.as}
      activeKey={activeKey()}
      onSelect={onSelect}
      className={classNames(local.className, {
        [bsPrefix]: !isNavbar,
        [`${navbarBsPrefix}-nav`]: isNavbar,
        [`${navbarBsPrefix}-nav-scroll`]: isNavbar && local.navbarScroll,
        [`${cardHeaderBsPrefix}-${local.variant}`]: !!cardHeaderBsPrefix,
        [`${bsPrefix}-${local.variant}`]: !!local.variant,
        [`${bsPrefix}-fill`]: local.fill,
        [`${bsPrefix}-justified`]: local.justify,
      })}
      {...props}
    />
  );
};

export default Object.assign(Nav, {
  Item: NavItem,
  Link: NavLink,
});
