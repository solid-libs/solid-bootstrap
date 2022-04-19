import {Component, JSX, mergeProps, splitProps, useContext} from "solid-js";
import TabContext from "./TabContext";
import SelectableContext, {makeEventKey} from "./SelectableContext";
import type {EventKey, DynamicRefForwardingComponent} from "./types";
import NoopTransition from "./NoopTransition";
import {Dynamic} from "solid-js/web";
import {TransitionCallbacks, TransitionComponent} from "solid-react-transition";

export interface TabPanelProps extends TransitionCallbacks, JSX.HTMLAttributes<HTMLElement> {
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

const defaultProps = {
  role: "tabpanel",
};

export function useTabPanel(p: TabPanelProps): readonly [useTabPanel, TabPanelMetadata] {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "active",
    "eventKey",
    "mountOnEnter",
    "transition",
    "unmountOnExit",
  ]);

  const context = useContext(TabContext);

  if (!context)
    return [
      props,
      {
        get eventKey() {
          return local.eventKey;
        },
        get isActive() {
          return local.active;
        },
        get mountOnEnter() {
          return local.mountOnEnter;
        },
        get transition() {
          return local.transition;
        },
        get unmountOnExit() {
          return local.unmountOnExit;
        },
      },
    ];

  const key = makeEventKey(local.eventKey);

  const useTabPanel = mergeProps(props, {
    get id() {
      return context?.getControlledId(local.eventKey!);
    },
    get "aria-labelledby"() {
      return context?.getControllerId(local.eventKey!);
    },
  }) as useTabPanel;

  return [
    useTabPanel,
    {
      get eventKey() {
        return local.eventKey;
      },
      get isActive() {
        return local.active == null && key != null
          ? makeEventKey(context?.activeKey) === key
          : local.active;
      },
      get transition() {
        return local.transition || context?.transition || NoopTransition;
      },
      get mountOnEnter() {
        return local.mountOnEnter != null ? local.mountOnEnter : context?.mountOnEnter;
      },
      get unmountOnExit() {
        return local.unmountOnExit != null ? local.unmountOnExit : context?.unmountOnExit;
      },
    },
  ];
}

export const TabPanel: DynamicRefForwardingComponent<"div", TabPanelProps> = (props: TabPanelProps) => {
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
