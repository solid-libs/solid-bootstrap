import { JSX, mergeProps, splitProps } from "solid-js";
import classNames from "classnames";
import SelectableContext from "../overlays/SelectableContext";
import { SelectCallback } from "../overlays/types";
import { createControlledProp } from "../controlled/createControlledProp";

import { createWithBsPrefix } from "./createWithBsPrefix";
import NavbarBrand from "./NavbarBrand";
import NavbarCollapse from "./NavbarCollapse";
import NavbarToggle from "./NavbarToggle";
import NavbarOffcanvas from "./NavbarOffcanvas";
import { useBootstrapPrefix } from "./ThemeProvider";
import NavbarContext, { NavbarContextType } from "./NavbarContext";
import { BsPrefixProps, BsPrefixRefForwardingComponent } from "./helpers";
import { Dynamic } from "solid-js/web";

const NavbarText = createWithBsPrefix("navbar-text", {
  Component: "span",
});

export interface NavbarProps
  extends BsPrefixProps,
    Omit<JSX.HTMLAttributes<HTMLElement>, "onSelect"> {
  variant?: "light" | "dark";
  expand?: boolean | "sm" | "md" | "lg" | "xl" | "xxl";
  bg?: string;
  fixed?: "top" | "bottom";
  sticky?: "top";
  onToggle?: (expanded: boolean) => void;
  onSelect?: SelectCallback;
  collapseOnSelect?: boolean;
  expanded?: boolean;
  defaultExpanded?: boolean;
}

const defaultProps = {
  as: "nav",
  expand: true,
  variant: "light" as const,
  collapseOnSelect: false,
};

const Navbar: BsPrefixRefForwardingComponent<"nav", NavbarProps> = (
  p: NavbarProps
) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "bsPrefix",
    "expand",
    "variant",
    "bg",
    "fixed",
    "sticky",
    "className",
    "expanded",
    "defaultExpanded",
    "onToggle",
    "onSelect",
    "collapseOnSelect",
  ]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "navbar");
  const [expanded, onToggle] = createControlledProp(
    () => local.expanded,
    () => local.defaultExpanded,
    local.onToggle
  );

  const handleCollapse: SelectCallback = (...args) => {
    local.onSelect?.(...args);
    if (local.collapseOnSelect && expanded) {
      onToggle?.(false);
    }
  };

  const expandClass = () => {
    let expandClass = `${bsPrefix}-expand`;
    if (typeof local.expand === "string")
      expandClass = `${expandClass}-${local.expand}`;
    return expandClass;
  };

  const navbarContext: NavbarContextType = {
    get onToggle() {
      return () => onToggle?.(!expanded);
    },
    bsPrefix,
    get expanded() {
      return !!expanded;
    },
  };

  return (
    <NavbarContext.Provider value={navbarContext}>
      <SelectableContext.Provider value={handleCollapse}>
        <Dynamic
          component={local.as}
          {...props}
          role={
            // will result in some false positives but that seems better
            // than false negatives. strict `undefined` check allows explicit
            // "nulling" of the role if the user really doesn't want one
            props.role === undefined && local.as !== "nav"
              ? "Navigation"
              : props.role
          }
          className={classNames(
            local.className,
            bsPrefix,
            local.expand && expandClass(),
            local.variant && `${bsPrefix}-${local.variant}`,
            local.bg && `bg-${local.bg}`,
            local.sticky && `sticky-${local.sticky}`,
            local.fixed && `fixed-${local.fixed}`
          )}
        />
      </SelectableContext.Provider>
    </NavbarContext.Provider>
  );
};

export default Object.assign(Navbar, {
  Brand: NavbarBrand,
  Collapse: NavbarCollapse,
  Offcanvas: NavbarOffcanvas,
  Text: NavbarText,
  Toggle: NavbarToggle,
});
