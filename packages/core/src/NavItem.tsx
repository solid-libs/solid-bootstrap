import NavContext from "./NavContext";
import SelectableContext, {makeEventKey} from "./SelectableContext";
import {EventKey, DynamicRefForwardingComponent} from "./types";
import Button from "./Button";
import {dataAttr} from "./DataKey";
import {Component, createMemo, JSX, mergeProps, splitProps, useContext} from "solid-js";
import {Dynamic} from "solid-js/web";
import {callEventHandler} from "./utils";

export interface NavItemProps extends JSX.HTMLAttributes<HTMLElement> {
  /**
   * Highlight the NavItem as active.
   */
  active?: boolean;

  /**
   * Element used to render the component.
   */
  as?: keyof JSX.IntrinsicElements | Component<any>;

  /**
   * Disable the NavItem, making it unselectable.
   */
  disabled?: boolean;

  /**
   * Value passed to the `onSelect` handler, useful for identifying the selected NavItem.
   */
  eventKey?: EventKey;

  /**
   * HTML `href` attribute corresponding to `a.href`.
   */
  href?: string;
}

export interface UseNavItemOptions {
  key?: string | null;
  onClick?: JSX.EventHandlerUnion<any, MouseEvent>;
  active?: boolean;
  disabled?: boolean;
  id?: string;
  role?: string;
}

export function useNavItem(options: UseNavItemOptions) {
  const parentOnSelect = useContext(SelectableContext);
  const navContext = useContext(NavContext);

  const isActive = createMemo(() =>
    options.active == null && options.key != null
      ? navContext?.activeKey === options.key
      : options.active,
  );

  const role = createMemo(() =>
    navContext && !options.role && navContext.role === "tablist" ? "tab" : options.role,
  );

  const onClick = createMemo(() => (e: MouseEvent) => {
    if (options.disabled) return;

    let result = callEventHandler(options.onClick, e);

    if (options.key == null) {
      return;
    }

    if (parentOnSelect && !result.isPropagationStopped) {
      parentOnSelect(options.key, e);
    }
  });

  const props = {
    get role() {
      return role();
    },
    get [dataAttr("event-key")]() {
      return navContext ? options.key : undefined;
    },
    get id() {
      return navContext ? navContext.getControllerId(options.key!) : undefined;
    },
    get tabIndex() {
      return role() === "tab" && (options.disabled || !isActive()) ? -1 : undefined;
    },
    get ["aria-controls"]() {
      return navContext ? navContext.getControlledId(options.key!) : undefined;
    },
    get ["aria-disabled"]() {
      return role() === "tab" && options.disabled ? true : undefined;
    },
    get ["aria-selected"]() {
      return role() === "tab" && isActive() ? true : undefined;
    },
    get onClick() {
      return onClick();
    },
  };

  const meta = {
    get isActive() {
      return isActive();
    },
  };

  return [props, meta] as const;
}

const NavItem: DynamicRefForwardingComponent<typeof Button, NavItemProps> = (p) => {
  const [local, options] = splitProps(p, ["as", "active", "eventKey"]);
  const [props, meta] = useNavItem(
    mergeProps(
      {
        get active() {
          return p.active;
        },
        get key() {
          return makeEventKey(p.eventKey, p.href);
        },
      },
      options,
    ),
  );

  // @ts-ignore
  props[dataAttr("active")] = meta.isActive;

  return (
    <Dynamic as={local.as} {...options} {...props}>
      {options.children}
    </Dynamic>
  );
};
NavItem.displayName = "NavItem";

export default NavItem;
