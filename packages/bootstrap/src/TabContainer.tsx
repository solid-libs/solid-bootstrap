import { mergeProps, PropsWithChildren, splitProps } from "solid-js";
import Tabs, { TabsProps } from "../../core/src/Tabs";
import { getTabTransitionComponent } from "./getTabTransitionComponent";
import { TransitionType } from "./helpers";

export interface TabContainerProps extends Omit<TabsProps, "transition"> {
  transition?: TransitionType;
}

const defaultProps = {};

const TabContainer = (p: PropsWithChildren<TabContainerProps>) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "transition",
  ]);

  return (
    <Tabs {...props} transition={getTabTransitionComponent(local.transition)} />
  );
};

export default TabContainer;
