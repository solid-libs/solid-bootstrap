import NavContext from "./NavContext";
import SelectableContext, { makeEventKey } from "./SelectableContext";
import { EventKey, DynamicRefForwardingComponent } from "./types";
import Button from "./Button";
import { dataAttr } from "./DataKey";
import { JSX, mergeProps, splitProps, useContext } from "solid-js";
import { Dynamic } from "solid-js/web";
import { callEventHandler } from "./utils";

export interface NavItemProps extends JSX.HTMLAttributes<HTMLElement> {
  /**
   * Highlight the NavItem as active.
   */
  active?: boolean;

  /**
   * Element used to render the component.
   */
  as?: Parameters<typeof Dynamic>[0]["component"];

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
  // {
  //   key,
  //   onClick,
  //   active,
  //   id,
  //   role,
  //   disabled,
  // }

  const parentOnSelect = useContext(SelectableContext);
  const navContext = useContext(NavContext);

  let isActive = options.active;
  const props = { role: options.role } as any;

  if (navContext) {
    if (!options.role && navContext.role === "tablist") props.role = "tab";

    const contextControllerId = navContext.getControllerId(options.key!);
    const contextControlledId = navContext.getControlledId(options.key!);

    // @ts-ignore
    props[dataAttr("event-key")] = key;

    props.id = contextControllerId || options.id;
    props["aria-controls"] = contextControlledId;

    isActive =
      options.active == null && options.key != null
        ? navContext.activeKey === options.key
        : options.active;
  }

  if (props.role === "tab") {
    if (options.disabled) {
      props.tabIndex = -1;
      props["aria-disabled"] = true;
    }
    if (isActive) {
      props["aria-selected"] = isActive;
    } else {
      props.tabIndex = -1;
    }
  }

  props.onClick = (e: MouseEvent) => {
    if (options.disabled) return;

    let result = callEventHandler(options.onClick, e);

    if (options.key == null) {
      return;
    }

    if (parentOnSelect && !result.isPropagationStopped) {
      parentOnSelect(options.key, e);
    }
  };

  return [props, { isActive }] as const;
}

const NavItem: DynamicRefForwardingComponent<typeof Button, NavItemProps> = (
  p
) => {
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
      options
    )
  );

  // @ts-ignore
  props[dataAttr("active")] = meta.isActive;

  return <Dynamic as={local.as} {...options} {...props} />;
};
NavItem.displayName = "NavItem";

export default NavItem;
