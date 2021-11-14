import SelectableContext, { makeEventKey } from "./SelectableContext";
import NavContext from "./NavContext";

import { EventKey, DynamicRefForwardingComponent } from "./types";
import Button from "./Button";
import { dataAttr } from "./DataKey";
import { Dynamic } from "solid-js/web";
import {
  Component,
  createMemo,
  JSX,
  mergeProps,
  splitProps,
  useContext,
} from "solid-js";
import { callEventHandler } from "./utils";

export interface DropdownItemProps extends JSX.HTMLAttributes<HTMLElement> {
  /**
   * Element used to render the component.
   */
  as?: Parameters<typeof Dynamic>[0]["component"];

  /**
   * Highlight the menu item as active.
   */
  active?: boolean;

  /**
   * Disable the menu item, making it unselectable.
   */
  disabled?: boolean;

  /**
   * Value passed to the `onSelect` handler, useful for identifying the selected menu item.
   */
  eventKey?: EventKey;

  /**
   * HTML `href` attribute corresponding to `a.href`.
   */
  href?: string;
}

interface UseDropdownItemOptions {
  key?: EventKey | null;
  href?: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: JSX.EventHandlerUnion<HTMLElement, MouseEvent>;
}

/**
 * Create a dropdown item. Returns a set of props for the dropdown item component
 * including an `onClick` handler that prevents selection when the item is disabled
 */
export function useDropdownItem(options: UseDropdownItemOptions) {
  const onSelectCtx = useContext(SelectableContext);
  const navContext = useContext(NavContext);

  const { activeKey } = navContext || {};
  const eventKey = makeEventKey(options.key, options.href);

  const isActive = createMemo(() =>
    options.active == null && options.key != null
      ? makeEventKey(activeKey) === eventKey
      : options.active
  );

  const handleClick: JSX.EventHandler<HTMLElement, MouseEvent> = (event) => {
    if (options.disabled) return;

    let isPropagationStopped = false;
    const defaultFn = event.stopPropagation;
    event.stopPropagation = () => {
      isPropagationStopped = true;
      defaultFn();
    };

    callEventHandler(options.onClick, event);

    if (onSelectCtx && !isPropagationStopped) {
      onSelectCtx(eventKey, event);
    }
  };

  const props = () => ({
    onClick: handleClick,
    "aria-disabled": options.disabled || undefined,
    "aria-selected": isActive(),
    [dataAttr("dropdown-item")]: "",
  });

  const meta = () => ({});

  return [props, meta] as const;
}

const DropdownItem: DynamicRefForwardingComponent<
  typeof Button,
  DropdownItemProps
> = (p: DropdownItemProps) => {
  const [local, props] = splitProps(
    // merge in prop defaults
    mergeProps({ as: Button }, p),
    // split off local props with rest passed to Dynamic
    ["eventKey", "disabled", "onClick", "active"]
  );

  const [dropdownItemProps] = useDropdownItem({
    key: local.eventKey,
    href: props.href,
    disabled: local.disabled,
    onClick: local.onClick,
    active: local.active,
  });

  return <Dynamic {...props} {...dropdownItemProps()} />;
};

DropdownItem.displayName = "DropdownItem";

export default DropdownItem;
