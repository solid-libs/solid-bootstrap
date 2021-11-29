import { JSX, mergeProps, splitProps } from "solid-js";
import { ButtonType } from "solid-bootstrap-core/Button";
import Button from "./Button";
import ButtonGroup from "./ButtonGroup";
import Dropdown, { DropdownProps } from "./Dropdown";
import { PropsFromToggle } from "./DropdownToggle";
import { BsPrefixProps } from "./helpers";

export interface SplitButtonProps
  extends Omit<DropdownProps, "title">,
    PropsFromToggle,
    BsPrefixProps {
  menuRole?: DropdownProps["role"];
  renderMenuOnMount?: boolean;
  rootCloseEvent?: "click" | "mousedown";
  target?: string;
  title: JSX.Element;
  toggleLabel?: string;
  type?: ButtonType;
}

const defaultProps: Partial<SplitButtonProps> = {
  toggleLabel: "Toggle dropdown",
  type: "button",
};

/**
 * A convenience component for simple or general use split button dropdowns. Renders a
 * `ButtonGroup` containing a `Button` and a `Button` toggle for the `Dropdown`. All `children`
 * are passed directly to the default `Dropdown.Menu`. This component accepts all of [`Dropdown`'s
 * props](#dropdown-props).
 *
 * _All unknown props are passed through to the `Dropdown` component._
 * The Button `variant`, `size` and `bsPrefix` props are passed to the button and toggle,
 * and menu-related props are passed to the `Dropdown.Menu`
 */
const SplitButton = (p: SplitButtonProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "id",
    "bsPrefix",
    "size",
    "variant",
    "title",
    "type",
    "toggleLabel",
    "children",
    "onClick",
    "href",
    "target",
    "menuRole",
    "renderMenuOnMount",
    "rootCloseEvent",
  ]);

  return (
    <Dropdown {...props} as={ButtonGroup}>
      <Button
        size={local.size}
        variant={local.variant}
        disabled={props.disabled}
        bsPrefix={local.bsPrefix}
        href={local.href}
        target={local.target}
        onClick={local.onClick}
        type={local.type}
      >
        {local.title}
      </Button>
      <Dropdown.Toggle
        split
        id={local.id}
        size={local.size}
        variant={local.variant}
        disabled={props.disabled}
        childBsPrefix={local.bsPrefix}
      >
        <span className="visually-hidden">{local.toggleLabel}</span>
      </Dropdown.Toggle>

      <Dropdown.Menu
        role={local.menuRole}
        renderOnMount={local.renderMenuOnMount}
        rootCloseEvent={local.rootCloseEvent}
      >
        {local.children}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default SplitButton;
