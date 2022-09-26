import NavContext from "./NavContext";
import SelectableContext, {makeEventKey} from "./SelectableContext";
import {EventKey} from "./types";
import Button from "./Button";
import {dataAttr} from "./DataKey";
import {createMemo, JSX, mergeProps, splitProps, useContext, ValidComponent} from "solid-js";
import {Dynamic} from "solid-js/web";
import {callEventHandler} from "./utils";
import TabContext from "./TabContext";

export interface NavItemProps extends JSX.HTMLAttributes<HTMLElement> {
  /**
   * Highlight the NavItem as active.
   */
  active?: boolean;

  /**
   * Element used to render the component.
   */
  as?: ValidComponent;

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
  const tabContext = useContext(TabContext);

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
      /**
       * Simplified scenario for `mountOnEnter`.
       *
       * While it would make sense to keep 'aria-controls' for tabs that have been mounted at least
       * once, it would also complicate the code quite a bit, for very little gain.
       * The following implementation is probably good enough.
       *
       * @see https://github.com/react-restart/ui/pull/40#issuecomment-1009971561
       */
      return isActive() || (!tabContext?.unmountOnExit && !tabContext?.mountOnEnter)
        ? navContext
          ? navContext.getControlledId(options.key!)
          : undefined
        : undefined;
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

const defaultProps = {
  as: Button,
};

export const NavItem = (p: NavItemProps) => {
  const [local, options] = splitProps(mergeProps(defaultProps, p), ["as", "active", "eventKey"]);
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

  return <Dynamic component={local.as} {...options} {...props} />;
};

export default NavItem;
