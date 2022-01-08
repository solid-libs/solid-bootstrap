import {JSX, mergeProps, splitProps} from "solid-js";
import classNames from "./classnames";

import {useBootstrapPrefix} from "./ThemeProvider";
import Dropdown, {DropdownProps} from "./Dropdown";
import {DropdownMenuVariant} from "./DropdownMenu";
import NavLink from "./NavLink";
import {BsPrefixRefForwardingComponent} from "./helpers";

export interface NavDropdownProps extends Omit<DropdownProps, "title"> {
  title: JSX.Element;
  disabled?: boolean;
  active?: boolean;
  menuRole?: DropdownProps["role"];
  renderMenuOnMount?: boolean;
  rootCloseEvent?: "click" | "mousedown";
  menuVariant?: DropdownMenuVariant;
}

const defaultProps = {};

const NavDropdown: BsPrefixRefForwardingComponent<"div", NavDropdownProps> = (
  p: NavDropdownProps,
) => {
  /* NavItem has no additional logic, it's purely presentational. Can set nav item class here to support "as" */
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "id",
    "title",
    "children",
    "bsPrefix",
    "className",
    "rootCloseEvent",
    "menuRole",
    "disabled",
    "active",
    "renderMenuOnMount",
    "menuVariant",
  ]);
  const navItemPrefix = useBootstrapPrefix(undefined, "nav-item");

  return (
    <Dropdown {...props} className={classNames(local.className, navItemPrefix)}>
      <Dropdown.Toggle
        id={local.id}
        eventKey={null}
        active={local.active}
        disabled={local.disabled}
        childBsPrefix={local.bsPrefix}
        as={NavLink}
      >
        {local.title}
      </Dropdown.Toggle>

      <Dropdown.Menu
        role={local.menuRole}
        renderOnMount={local.renderMenuOnMount}
        rootCloseEvent={local.rootCloseEvent}
        variant={local.menuVariant}
      >
        {local.children}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Object.assign(NavDropdown, {
  Item: Dropdown.Item,
  ItemText: Dropdown.ItemText,
  Divider: Dropdown.Divider,
  Header: Dropdown.Header,
});
