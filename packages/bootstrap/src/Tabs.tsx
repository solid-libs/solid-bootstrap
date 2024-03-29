import {JSX, mergeProps, splitProps, children, createMemo, For} from "solid-js";
import {
  createControlledProp,
  EventKey,
  Tabs as BaseTabs,
  TabsProps as BaseTabsProps,
} from "solid-bootstrap-core";
import Nav from "./Nav";
import NavLink from "./NavLink";
import NavItem from "./NavItem";
import TabContent from "./TabContent";
import TabPane from "./TabPane";
import {getTabTransitionComponent} from "./getTabTransitionComponent";
import {TransitionType} from "./helpers";
import {TabProps} from "./Tab";

export interface TabsProps
  extends Omit<BaseTabsProps, "transition">,
    Omit<JSX.HTMLAttributes<HTMLElement>, "onSelect"> {
  variant?: "tabs" | "pills";
  transition?: TransitionType;
}

const defaultProps: Partial<TabsProps> = {
  variant: "tabs",
  mountOnEnter: false,
  unmountOnExit: false,
};

function getDefaultActiveKey(tabs: TabProps[]) {
  let defaultActiveKey: EventKey | undefined = undefined;
  tabs.forEach((tab) => {
    if (defaultActiveKey == null) {
      defaultActiveKey = tab.eventKey;
    }
  });
  return defaultActiveKey;
}

function RenderTab(props: TabProps) {
  if (props.title == null) {
    return null;
  }

  return (
    <NavItem as="li" role="presentation">
      <NavLink
        as="button"
        type="button"
        eventKey={props.eventKey}
        disabled={props.disabled}
        id={props.id}
        class={props.tabClass}
        {...(props.tabAttrs || {})}
      >
        {props.title}
      </NavLink>
    </NavItem>
  );
}

const Tabs = (p: TabsProps) => {
  const tabsAccessor = children(() => p.children);
  const tabs = createMemo<TabProps[]>(() => {
    const t = tabsAccessor();
    return (Array.isArray(t) ? t : [t]) as unknown[] as TabProps[];
  });

  const [local, props] = splitProps(
    mergeProps(
      {
        get activeKey() {
          return getDefaultActiveKey(tabs());
        },
      },
      defaultProps,
      p,
    ),
    [
      "id",
      "onSelect",
      "transition",
      "mountOnEnter",
      "unmountOnExit",
      "children",
      "activeKey",
      "defaultActiveKey",
      "mountOnEnter",
    ],
  );
  const [activeKey, onSelect] = createControlledProp(
    () => p.activeKey,
    () => p.defaultActiveKey ?? local.defaultActiveKey,
    local.onSelect,
  );

  return (
    <BaseTabs
      id={local.id}
      activeKey={activeKey()}
      onSelect={onSelect}
      transition={getTabTransitionComponent(local.transition)}
      mountOnEnter={local.mountOnEnter}
      unmountOnExit={local.unmountOnExit}
    >
      <Nav {...props} role="tablist" as="ul">
        <For each={tabs()}>{(tabProps) => <RenderTab {...tabProps} />}</For>
      </Nav>

      <TabContent>
        <For each={tabs()}>
          {(tabProps) => {
            const [_, childProps] = splitProps(tabProps, [
              "title",
              "disabled",
              "tabClass",
              "tabAttrs",
            ]);

            return <TabPane {...childProps} />;
          }}
        </For>
      </TabContent>
    </BaseTabs>
  );
};

export default Tabs;
