import { createControlledProp } from "./createControlledProp";
import { useSSRSafeId } from "./ssr";

import TabContext, { TabContextType } from "./TabContext";
import SelectableContext from "./SelectableContext";
import { EventKey, SelectCallback } from "./types";
import TabPanel, { TabPanelProps } from "./TabPanel";
import { Component, createMemo, PropsWithChildren } from "solid-js";
import { TransitionComponent } from "../../transition/src/Transition";

export type { TabPanelProps };
export interface TabsProps {
  id?: string;

  /**
   * Sets a default animation strategy for all children `<TabPanel>`s.
   * Use a react-transition-group `<Transition/>` component.
   */
  transition?: TransitionComponent;

  /**
   * Wait until the first "enter" transition to mount tabs (add them to the DOM)
   */
  mountOnEnter?: boolean;

  /**
   * Unmount tabs (remove it from the DOM) when they are no longer visible
   */
  unmountOnExit?: boolean;

  /**
   * A function that takes an `eventKey` and `type` and returns a unique id for
   * child tab `<NavItem>`s and `<TabPane>`s. The function _must_ be a pure
   * function, meaning it should always return the _same_ id for the same set
   * of inputs. The default value requires that an `id` to be set for the
   * `<TabContainer>`.
   *
   * The `type` argument will either be `"tab"` or `"pane"`.
   *
   * @defaultValue (eventKey, type) => `${props.id}-${type}-${eventKey}`
   */
  generateChildId?: (eventKey: EventKey, type: "tab" | "pane") => string;

  /**
   * A callback fired when a tab is selected.
   *
   * @controllable activeKey
   */
  onSelect?: SelectCallback;

  /**
   * The `eventKey` of the currently active tab.
   *
   * @controllable onSelect
   */
  activeKey?: EventKey;

  /**
   * Default value for `eventKey`.
   */
  defaultActiveKey?: EventKey;
}

const Tabs = (props: PropsWithChildren<TabsProps>) => {
  const [activeKey, onSelect] = createControlledProp(
    () => props.activeKey,
    () => props.defaultActiveKey,
    props.onSelect
  );

  const id = useSSRSafeId(props.id);

  const generateChildId = createMemo(
    () =>
      props.generateChildId ||
      ((key: EventKey, type: string) => (id ? `${id}-${type}-${key}` : null))
  );

  const tabContext: TabContextType = {
    get onSelect() {
      return onSelect;
    },
    get activeKey() {
      return activeKey();
    },
    get transition() {
      return props.transition;
    },
    get mountOnEnter() {
      return props.mountOnEnter || false;
    },
    get unmountOnExit() {
      return props.unmountOnExit || false;
    },
    get getControlledId() {
      return (key: EventKey) => generateChildId()(key, "pane");
    },
    get getControllerId() {
      return (key: EventKey) => generateChildId()(key, "tab");
    },
  };

  return (
    <TabContext.Provider value={tabContext}>
      <SelectableContext.Provider value={onSelect || null}>
        {props.children}
      </SelectableContext.Provider>
    </TabContext.Provider>
  );
};

Tabs.Panel = TabPanel;
export default Tabs;
