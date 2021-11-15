import { useSSRSafeId } from "./ssr";
import DropdownContext, { DropdownContextValue } from "./DropdownContext";
import {
  Accessor,
  createComputed,
  createDeferred,
  createEffect,
  JSX,
  mergeProps,
  useContext,
} from "solid-js";
import { createStore, reconcile } from "solid-js/store";

export const isRoleMenu = (el: HTMLElement) =>
  el.getAttribute("role")?.toLowerCase() === "menu";

export interface UseDropdownToggleProps {
  id: string;
  ref: DropdownContextValue["setToggle"];
  onClick: JSX.EventHandler<HTMLElement, MouseEvent>;
  "aria-expanded": boolean;
  "aria-haspopup": true | undefined;
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
  UseDropdownToggleProps,
  UseDropdownToggleMetadata
] {
  const id = useSSRSafeId();
  const context = useContext(DropdownContext)!;
  createComputed(() => {
    Object.keys(context!);
    console.log("useDropdownToggle context", context, { ...context });
  });

  const handleClick: JSX.EventHandler<HTMLElement, MouseEvent> = (e) => {
    console.log("clicked");
    context.toggle(!context.show, e);
  };

  const [toggleProps, setToggleProps] = createStore({
    id,
    ref: context.setToggle || noop,
    onClick: handleClick,
    "aria-expanded": !!context.show,
    "aria-haspopup": (context.menuElement && isRoleMenu(context.menuElement)
      ? true
      : undefined) as UseDropdownToggleProps["aria-haspopup"],
  } as UseDropdownToggleProps);

  createComputed(() => {
    setToggleProps(
      reconcile({
        id,
        ref: context.setToggle || noop,
        onClick: handleClick,
        "aria-expanded": !!context.show,
        "aria-haspopup": (context.menuElement && isRoleMenu(context.menuElement)
          ? true
          : undefined) as UseDropdownToggleProps["aria-haspopup"],
      })
    );
  });
  console.log("toggleProps", { toggleProps, ...toggleProps });

  const [metadata, setMetadata] = createStore({} as UseDropdownToggleMetadata);
  createEffect(() => {
    setMetadata(
      reconcile({
        show: context.show,
        toggle: context.toggle,
      })
    );
  });

  return [toggleProps, metadata];
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

  return <>{children(props, meta)}</>;
}

DropdownToggle.displayName = "DropdownToggle";

/** @component */
export default DropdownToggle;
