import { Component, JSX, mergeProps, useContext } from "solid-js";
import TabContext from "./TabContext";
import SelectableContext, { makeEventKey } from "./SelectableContext";
import type { EventKey, DynamicRefForwardingComponent } from "./types";
import NoopTransition from "./NoopTransition";
import { Dynamic } from "solid-js/web";
import {
  TransitionCallbacks,
  TransitionComponent,
} from "../../transition/src/Transition";

export interface TabPanelProps
  extends TransitionCallbacks,
    JSX.HTMLAttributes<HTMLElement> {
  /**
   * Element used to render the component.
   */
  as?: keyof JSX.IntrinsicElements | Component<any>;

  /**
   * A key that associates the `TabPanel` with it's controlling `NavLink`.
   */
  eventKey?: EventKey;

  /**
   * Toggles the active state of the TabPanel, this is generally controlled by `Tabs`.
   */
  active?: boolean;

  /**
   * Use animation when showing or hiding `<TabPanel>`s. Use a react-transition-group
   * `<Transition/>` component.
   */
  transition?: TransitionComponent;

  /**
   * Wait until the first "enter" transition to mount the tab (add it to the DOM)
   */
  mountOnEnter?: boolean;

  /**
   * Unmount the tab (remove it from the DOM) when it is no longer visible
   */
  unmountOnExit?: boolean;
}

export interface useTabPanel extends TabPanelProps {
  id?: any;
  "aria-labelledby"?: any;
}

export interface TabPanelMetadata extends TransitionCallbacks {
  eventKey?: EventKey;
  isActive?: boolean;
  transition?: TransitionComponent;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
}

export function useTabPanel(
  props: TabPanelProps
): readonly [useTabPanel, TabPanelMetadata] {
  const context = useContext(TabContext);

  if (!context)
    return [
      props,
      {
        get eventKey() {
          return props.eventKey;
        },
        get isActive() {
          return props.active;
        },
        get mountOnEnter() {
          return props.mountOnEnter;
        },
        get transition() {
          return props.transition;
        },
        get unmountOnExit() {
          return props.unmountOnExit;
        },
      },
    ];

  const key = makeEventKey(props.eventKey);

  const useTabPanel = mergeProps(props, {
    get id() {
      return context?.getControlledId(props.eventKey!);
    },
    get "aria-labelledby"() {
      return context?.getControllerId(props.eventKey!);
    },
  }) as useTabPanel;

  return [
    useTabPanel,
    {
      get eventKey() {
        return props.eventKey;
      },
      get isActive() {
        return props.active == null && key != null
          ? makeEventKey(context?.activeKey) === key
          : props.active;
      },
      get transition() {
        return props.transition || context?.transition || NoopTransition;
      },
      get mountOnEnter() {
        return props.mountOnEnter != null
          ? props.mountOnEnter
          : context?.mountOnEnter;
      },
      get unmountOnExit() {
        return props.unmountOnExit != null
          ? props.unmountOnExit
          : context?.unmountOnExit;
      },
    },
  ];
}

const TabPanel: DynamicRefForwardingComponent<"div", TabPanelProps> = (
  props: TabPanelProps
) => {
  const [tabPanelProps, other] = useTabPanel(props);

  const Transition = other.transition!;

  // We provide an empty the TabContext so `<Nav>`s in `<TabPanel>`s don't
  // conflict with the top level one.
  return (
    <TabContext.Provider value={null}>
      <SelectableContext.Provider value={null}>
        {/* <Transition
          appear
          onBeforeExit={props.onBeforeExit}
          onExit={props.onExit}
          onAfterExit={props.onAfterExit}
          onBeforeEnter={props.onBeforeEnter}
          onEnter={props.onEnter}
          onAfterEnter={props.onAfterEnter}
        > */}
        <Dynamic
          component={(props.as ?? "div") as "div"}
          {...tabPanelProps}
          role="tabpanel"
          hidden={!other.isActive}
          aria-hidden={!other.isActive}
        />
        {/* </Transition> */}
      </SelectableContext.Provider>
    </TabContext.Provider>
  );
};

export default TabPanel;
