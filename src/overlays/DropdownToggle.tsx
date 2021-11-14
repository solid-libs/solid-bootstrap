import { useSSRSafeId } from "./ssr";
import DropdownContext, { DropdownContextValue } from "./DropdownContext";
import { Accessor, createEffect, JSX, mergeProps, useContext } from "solid-js";

export const isRoleMenu = (el: HTMLElement) =>
  el.getAttribute("role")?.toLowerCase() === "menu";

export interface UseDropdownToggleProps {
  id: string;
  ref: DropdownContextValue["setToggle"];
  onClick: JSX.EventHandler<HTMLElement, MouseEvent>;
  "aria-expanded": boolean;
  "aria-haspopup"?: true;
}

export interface UseDropdownToggleMetadata {
  show: DropdownContextValue["show"];
  toggle: DropdownContextValue["toggle"];
}

const noop = () => {};

/**
 * Wires up Dropdown toggle functionality, returning a set a props to attach
 * to the element that functions as the dropdown toggle (generally a button).
 *
 * @memberOf Dropdown
 */
export function useDropdownToggle(): [
  Accessor<UseDropdownToggleProps>,
  Accessor<UseDropdownToggleMetadata>
] {
  const id = useSSRSafeId();
  const context = mergeProps(
    {
      show: false,
      toggle: noop,
    },
    useContext(DropdownContext)
  );

  const handleClick: JSX.EventHandler<HTMLElement, MouseEvent> = (e) => {
    context.toggle(!context.show, e);
  };

  const props: Accessor<UseDropdownToggleProps> = () => ({
    id,
    ref: context.setToggle || noop,
    onClick: handleClick,
    "aria-expanded": !!context.show,
    "aria-haspopup":
      context.menuElement && isRoleMenu(context.menuElement) ? true : undefined,
  });

  const meta: Accessor<UseDropdownToggleMetadata> = () => ({
    show: context.show,
    toggle: context.toggle,
  });

  return [props, meta];
}

export interface DropdownToggleProps {
  /**
   * A render prop that returns a Toggle element. The `props`
   * argument should spread through to **a component that can accept a ref**. Use
   * the `onToggle` argument to toggle the menu open or closed
   *
   * @type {Function ({
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     aria-haspopup: true
   *     aria-expanded: boolean
   *   },
   *   meta: {
   *     show: boolean,
   *     toggle: (show: boolean) => void,
   *   }
   * }) => React.Element}
   */
  children: (
    props: UseDropdownToggleProps,
    meta: UseDropdownToggleMetadata
  ) => JSX.Element;
}

/**
 * Also exported as `<Dropdown.Toggle>` from `Dropdown`.
 *
 * @displayName DropdownToggle
 * @memberOf Dropdown
 */
function DropdownToggle({ children }: DropdownToggleProps) {
  const [props, meta] = useDropdownToggle();

  return <>{children(props(), meta())}</>;
}

DropdownToggle.displayName = "DropdownToggle";

/** @component */
export default DropdownToggle;
