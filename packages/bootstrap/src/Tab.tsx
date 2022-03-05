import {JSX} from "solid-js";
import TabContainer from "./TabContainer";
import TabContent from "./TabContent";
import TabPane, {TabPaneProps} from "./TabPane";

export interface TabProps extends Omit<TabPaneProps, "title"> {
  title: JSX.Element;
  disabled?: boolean;
  tabClassName?: string;
  tabAttrs?: Record<string, any>;
}

const Tab = (props: TabProps) => {
  // special return value expected by Tabs
  return props as unknown as JSX.Element;
};

export default Object.assign(Tab, {
  Container: TabContainer,
  Content: TabContent,
  Pane: TabPane,
});
