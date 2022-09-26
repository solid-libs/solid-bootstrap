import qsa from "dom-helpers/querySelectorAll";
import NavContext from "./NavContext";
import SelectableContext, {makeEventKey} from "./SelectableContext";
import TabContext from "./TabContext";
import {EventKey, SelectCallback} from "./types";
import {dataAttr, dataProp} from "./DataKey";
import NavItem, {UseNavItemOptions, NavItemProps} from "./NavItem";
import {
  createEffect,
  createSignal,
  JSX,
  mergeProps,
  splitProps,
  useContext,
  ValidComponent,
} from "solid-js";
import {Dynamic} from "solid-js/web";
import {callEventHandler} from "./utils";

export type {UseNavItemOptions, NavItemProps};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = (e?: any) => "";

export interface NavProps extends Omit<JSX.HTMLAttributes<HTMLElement>, "onSelect"> {
  /**
   * Key for the currently active NavItem.
   */
  activeKey?: EventKey;

  /**
   * Element used to render the component.
   */
  as?: ValidComponent;

  /**
   * A callback fired when a NavItem has been selected.
   */
  onSelect?: SelectCallback;
}

const EVENT_KEY_ATTR = dataAttr("event-key");

const defaultProps = {
  as: "div",
};

export const Nav = (p: NavProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "onSelect",
    "activeKey",
    "role",
    "onKeyDown",
  ]);

  // and don't want to reset the set in the effect
  const [needsRefocusRef, setNeedsRefocusRef] = createSignal(false);
  const [listNode, setListNode] = createSignal<HTMLElement | null>(null);
  const parentOnSelect = useContext(SelectableContext);
  const tabContext = useContext(TabContext);

  const getNextActiveTab = (offset: number) => {
    const currentListNode = listNode();
    if (!currentListNode) return null;

    const items = qsa(currentListNode, `[${EVENT_KEY_ATTR}]:not([aria-disabled=true])`);

    const activeChild = currentListNode.querySelector<HTMLElement>("[aria-selected=true]");
    if (!activeChild || activeChild !== document.activeElement) return null;

    const index = items.indexOf(activeChild);
    if (index === -1) return null;

    let nextIndex = index + offset;
    if (nextIndex >= items.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = items.length - 1;
    return items[nextIndex];
  };

  const handleSelect = (key: string | null, event: Event) => {
    if (key == null) return;
    local.onSelect?.(key, event);
    parentOnSelect?.(key, event);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    callEventHandler(local.onKeyDown, event);

    if (!tabContext) {
      return;
    }

    let nextActiveChild;
    switch (event.key) {
      case "ArrowLeft":
      case "ArrowUp":
        nextActiveChild = getNextActiveTab(-1);
        break;
      case "ArrowRight":
      case "ArrowDown":
        nextActiveChild = getNextActiveTab(1);
        break;
      default:
        return;
    }
    if (!nextActiveChild) return;

    event.preventDefault();

    handleSelect(nextActiveChild.dataset[dataProp("EventKey")] || null, event);

    setNeedsRefocusRef(true);
  };

  createEffect(() => {
    if (listNode() && needsRefocusRef()) {
      const activeChild = listNode()!.querySelector<HTMLElement>(
        `[${EVENT_KEY_ATTR}][aria-selected=true]`,
      );

      activeChild?.focus();
    }

    setNeedsRefocusRef(false);
  });

  const mergedRef = (r: any) => {
    setListNode(r);
    if (typeof props.ref === "function") {
      props.ref(r);
    }
  };

  const activeKey = () => makeEventKey(tabContext?.activeKey ?? local.activeKey);

  const getRole = () => {
    return local.role || (tabContext ? "tablist" : undefined);
  };

  return (
    <SelectableContext.Provider value={handleSelect}>
      <NavContext.Provider
        value={{
          get role() {
            return getRole();
          }, // used by NavLink to determine it's role
          get activeKey() {
            return activeKey();
          },
          get getControlledId() {
            return tabContext?.getControlledId || noop;
          },
          get getControllerId() {
            return tabContext?.getControllerId || noop;
          },
        }}
      >
        <Dynamic
          component={local.as}
          data-active-key={activeKey()}
          {...props}
          onKeyDown={handleKeyDown}
          ref={mergedRef}
          role={getRole()}
        />
      </NavContext.Provider>
    </SelectableContext.Provider>
  );
};

export default Object.assign(Nav, {Item: NavItem});
