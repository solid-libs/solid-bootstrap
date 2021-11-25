import { JSX, mergeProps, splitProps } from "solid-js";
import Dropdown, { DropdownProps } from "./Dropdown";
import DropdownToggle, { PropsFromToggle } from "./DropdownToggle";
import DropdownMenu, { DropdownMenuVariant } from "./DropdownMenu";
import { BsPrefixProps, BsPrefixRefForwardingComponent } from "./helpers";

export interface DropdownButtonProps
  extends Omit<DropdownProps, "title">,
    PropsFromToggle,
    BsPrefixProps {
  title: JSX.Element;
  menuRole?: DropdownProps["role"];
  renderMenuOnMount?: boolean;
  rootCloseEvent?: "click" | "mousedown";
  menuVariant?: DropdownMenuVariant;
}

const defaultProps = {};

/**
 * A convenience component for simple or general use dropdowns. Renders a `Button` toggle and all `children`
 * are passed directly to the default `Dropdown.Menu`. This component accepts all of
 * [`Dropdown`'s props](#dropdown-props).
 *
 * _All unknown props are passed through to the `Dropdown` component._ Only
 * the Button `variant`, `size` and `bsPrefix` props are passed to the toggle,
 * along with menu-related props are passed to the `Dropdown.Menu`
 */
const DropdownButton: BsPrefixRefForwardingComponent<
  "div",
  DropdownButtonProps
> = (p: DropdownButtonProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "title",
    "children",
    "bsPrefix",
    "rootCloseEvent",
    "variant",
    "size",
    "menuRole",
    "renderMenuOnMount",
    "disabled",
    "href",
    "id",
    "menuVariant",
  ]);

  return (
    <Dropdown {...props}>
      <DropdownToggle
        id={local.id}
        href={local.href}
        size={local.size}
        variant={local.variant}
        disabled={local.disabled}
        childBsPrefix={local.bsPrefix}
      >
        {local.title}
      </DropdownToggle>
      <DropdownMenu
        role={local.menuRole}
        renderOnMount={local.renderMenuOnMount}
        rootCloseEvent={local.rootCloseEvent}
        variant={local.menuVariant}
      >
        {local.children}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropdownButton;
