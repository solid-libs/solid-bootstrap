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

export interface DropdownItemProps<T> extends JSX.HTMLAttributes<T> {
  /**
   * Element used to render the component.
   */
  as?: keyof JSX.IntrinsicElements | Component<any>;

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

    let result = callEventHandler(options.onClick, event);

    if (onSelectCtx && !result.isPropagationStopped) {
      onSelectCtx(eventKey, event);
    }
  };

  return [
    {
      onClick: handleClick,
      get "aria-disabled"() {
        return options.disabled || undefined;
      },
      get "aria-selected"() {
        return isActive();
      },
      [dataAttr("dropdown-item")]: "",
    },
    {
      get isActive() {
        return isActive();
      },
    },
  ] as const;
}

const DropdownItem: DynamicRefForwardingComponent<
  typeof Button,
  DropdownItemProps<HTMLButtonElement>
> = (p: DropdownItemProps<HTMLButtonElement>) => {
  const [local, props] = splitProps(
    // merge in prop defaults
    mergeProps({ as: Button }, p),
    // split off local props with rest passed to Dynamic
    ["eventKey", "disabled", "onClick", "active", "as"]
  );

  const [dropdownItemProps] = useDropdownItem({
    get key() {
      return local.eventKey;
    },
    get href() {
      return props.href;
    },
    get disabled() {
      return local.disabled;
    },
    get onClick() {
      return local.onClick as any;
    },
    get active() {
      return local.active;
    },
  });

  return <Dynamic component={local.as} {...props} {...dropdownItemProps} />;
};

DropdownItem.displayName = "DropdownItem";

export default DropdownItem;
