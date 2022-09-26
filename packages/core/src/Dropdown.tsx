import qsa from "dom-helpers/querySelectorAll";
import addEventListener from "dom-helpers/addEventListener";

import DropdownContext, {DropdownContextValue} from "./DropdownContext";
import DropdownMenu, {
  DropdownMenuProps,
  UseDropdownMenuMetadata,
  UseDropdownMenuOptions,
} from "./DropdownMenu";
import DropdownToggle, {
  DropdownToggleProps,
  UseDropdownToggleMetadata,
  isRoleMenu,
} from "./DropdownToggle";
import DropdownItem, {DropdownItemProps} from "./DropdownItem";
import SelectableContext from "./SelectableContext";
import {SelectCallback} from "./types";
import {dataAttr} from "./DataKey";
import {Placement} from "./usePopper";
import useWindow from "./useWindow";
import {createEffect, createSignal, JSX, mergeProps, onCleanup, useContext} from "solid-js";
import {createControlledProp} from "./createControlledProp";
import {callEventHandler} from "./utils";
import {isServer} from "solid-js/web";

export type {
  DropdownMenuProps,
  UseDropdownMenuMetadata,
  UseDropdownMenuOptions,
  DropdownToggleProps,
  UseDropdownToggleMetadata,
  DropdownItemProps,
};

export interface DropdownInjectedProps {
  onKeyDown: JSX.EventHandler<HTMLElement, KeyboardEvent>;
}

export type ToggleEvent = KeyboardEvent | MouseEvent;

export interface DropdownToggleMetadata {
  source: string | undefined;
  originalEvent: ToggleEvent | undefined;
}

export interface DropdownProps {
  /**
   * The PopperJS placement for positioning the Dropdown menu in relation to
   * its Toggle.
   *
   * @default 'bottom-start'
   */
  placement?: Placement;

  /**
   * Sets the initial visibility of the Dropdown.
   */
  defaultShow?: boolean;

  /**
   * Whether or not the Dropdown is visible.
   *
   * @controllable onToggle
   */
  show?: boolean;

  /**
   * A callback fired when a DropdownItem has been selected.
   */
  onSelect?: SelectCallback;

  /**
   * A callback fired when the Dropdown wishes to change visibility. Called with
   * the requested `show` value, the DOM event, and the source that fired it:
   * `'click'`,`'keydown'`,`'rootClose'`, or `'select'`.
   *
   * ```ts static
   * function(
   *   nextShow: boolean,
   *   meta: ToggleMetadata,
   * ): void
   * ```
   *
   * @controllable show
   */
  onToggle?: (nextShow: boolean, meta: DropdownToggleMetadata) => void;

  /**
   * A css selector string that will return __focusable__ menu items.
   * Selectors should be relative to the menu component:
   * e.g. ` > li:not('.disabled')`
   */
  itemSelector?: string;

  /**
   * Controls the focus behavior for when the Dropdown is opened. Set to
   * `true` to always focus the first menu item, `keyboard` to focus only when
   * navigating via the keyboard, or `false` to disable completely
   *
   * The Default behavior is `false` **unless** the Menu has a `role="menu"`
   * where it will default to `keyboard` to match the recommended [ARIA Authoring
   * practices](https://www.w3.org/TR/wai-aria-practices-1.1/#menubutton).
   */
  focusFirstItemOnShow?: boolean | "keyboard";

  /**
   * A render prop that returns the root dropdown element. The `props`
   * argument should spread through to an element containing _both_ the
   * menu and toggle in order to handle keyboard events for focus management.
   *
   * @type {Function ({
   *   props: {
   *     onKeyDown: (SyntheticEvent) => void,
   *   },
   * }) => Element}
   */
  children: JSX.Element;
}

/**
 * @displayName Dropdown
 * @public
 */
export function Dropdown(p: DropdownProps) {
  // merge in props defaults
  const props = mergeProps(
    {
      itemSelector: `* [${dataAttr("dropdown-item")}]`,
      placement: "bottom-start" as Placement,
    },
    p,
  );

  const window = useWindow();
  const [show, onToggle] = createControlledProp(
    () => props.show,
    () => props.defaultShow!,
    props.onToggle,
  );

  const [menuRef, setMenu] = createSignal<HTMLElement | null>();
  const [toggleRef, setToggle] = createSignal<HTMLElement | null>();

  const [lastSourceEvent, setLastSourceEvent] = createSignal<string | null>(null);
  const onSelectCtx = useContext(SelectableContext);

  const focusInDropdown = () => menuRef()?.contains(menuRef()!.ownerDocument.activeElement);

  const toggle = (
    nextShow: boolean,
    event: Event | undefined,
    source: string | undefined = event?.type,
  ) => {
    onToggle(nextShow, {originalEvent: event as ToggleEvent, source});
  };

  const handleSelect: SelectCallback = (key: string | null, event: Event) => {
    let result = callEventHandler((event) => {
      props.onSelect?.(key, event);
      toggle(false, event, "select");
    }, event);

    if (!result.isPropagationStopped) {
      onSelectCtx?.(key, event);
    }
  };

  const context: DropdownContextValue = {
    toggle,
    setMenu,
    setToggle,
    get placement() {
      return props.placement;
    },
    get show() {
      return show()!;
    },
    get menuElement() {
      return menuRef()!;
    },
    get toggleElement() {
      return toggleRef()!;
    },
  };

  const focusToggle = () => {
    const ref: any = toggleRef();
    if (ref && ref.focus) {
      ref.focus();
    }
  };

  const maybeFocusFirst = () => {
    const type = lastSourceEvent();
    setLastSourceEvent(null);
    let focusType = props.focusFirstItemOnShow;

    if (focusType == null) {
      focusType = menuRef() && isRoleMenu(menuRef()!) ? "keyboard" : false;
    }

    if (focusType === false || (focusType === "keyboard" && !/^key.+$/.test(type!))) {
      return;
    }

    const first = qsa(menuRef()!, props.itemSelector)[0];
    if (first && first.focus) first.focus();
  };

  createEffect(() => {
    if (show()) {
      maybeFocusFirst();
    } else if (focusInDropdown()) {
      focusToggle();
    }
  });

  const getNextFocusedChild = (current: HTMLElement, offset: number) => {
    if (!menuRef()) return null;

    const items = qsa(menuRef()!, props.itemSelector);

    let index = items.indexOf(current) + offset;
    index = Math.max(0, Math.min(index, items.length));

    return items[index];
  };

  const keydownHandler = (event: KeyboardEvent) => {
    const {key} = event;
    const target = event.target as HTMLElement;

    const fromMenu = menuRef()?.contains(target);
    const fromToggle = toggleRef()?.contains(target);

    // Second only to https://github.com/twbs/bootstrap/blob/8cfbf6933b8a0146ac3fbc369f19e520bd1ebdac/js/src/dropdown.js#L400
    // in inscrutability
    const isInput = /input|textarea/i.test(target.tagName);
    if (
      isInput &&
      (key === " " ||
        (key !== "Escape" && fromMenu) ||
        (key === "Escape" && (target as HTMLInputElement).type === "search"))
    ) {
      return;
    }

    if (!fromMenu && !fromToggle) {
      return;
    }

    if (key === "Tab" && (!menuRef() || !show)) {
      return;
    }

    setLastSourceEvent(event.type);
    const meta = {originalEvent: event, source: event.type};
    switch (key) {
      case "ArrowUp": {
        const next = getNextFocusedChild(target, -1);
        if (next && next.focus) next.focus();
        event.preventDefault();

        return;
      }
      case "ArrowDown":
        event.preventDefault();
        if (!show) {
          onToggle(true, meta);
        } else {
          const next = getNextFocusedChild(target, 1);
          if (next && next.focus) next.focus();
        }
        return;
      case "Tab":
        // on keydown the target is the element being tabbed FROM, we need that
        // to know if this event is relevant to this dropdown (e.g. in this menu).
        // On `keyup` the target is the element being tagged TO which we use to check
        // if focus has left the menu
        if (!isServer) {
          addEventListener(
            target.ownerDocument as any,
            "keyup",
            (e) => {
              if ((e.key === "Tab" && !e.target) || !menuRef()?.contains(e.target as HTMLElement)) {
                onToggle(false, meta);
              }
            },
            {once: true},
          );
        }
        break;
      case "Escape":
        if (key === "Escape") {
          event.preventDefault();
          event.stopPropagation();
        }

        onToggle(false, meta);
        focusToggle();
        break;
      default:
    }
  };

  if (!isServer) {
    window!.document.addEventListener("keydown", keydownHandler);
    onCleanup(() => window!.document.removeEventListener("keydown", keydownHandler));
  }

  return (
    <SelectableContext.Provider value={handleSelect}>
      <DropdownContext.Provider value={context}>{props.children}</DropdownContext.Provider>
    </SelectableContext.Provider>
  );
}

Dropdown.Menu = DropdownMenu;
Dropdown.Toggle = DropdownToggle;
Dropdown.Item = DropdownItem;

export default Dropdown;
