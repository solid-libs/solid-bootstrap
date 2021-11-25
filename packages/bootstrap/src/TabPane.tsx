import { JSX, mergeProps, splitProps } from "solid-js";
import classNames from "classnames";
import NoopTransition from "../../core/src/NoopTransition";
import SelectableContext from "../../core/src/SelectableContext";
import TabContext from "../../core/src/TabContext";
import { useTabPanel } from "../../core/src/TabPanel";
import { EventKey, TransitionCallbacks } from "../../core/src/types";
import { useBootstrapPrefix } from "./ThemeProvider";
import { getTabTransitionComponent } from "./getTabTransitionComponent";
import {
  BsPrefixProps,
  BsPrefixRefForwardingComponent,
  TransitionType,
} from "./helpers";
import { Dynamic } from "solid-js/web";

export interface TabPaneProps
  extends TransitionCallbacks,
    BsPrefixProps,
    JSX.HTMLAttributes<HTMLElement> {
  eventKey?: EventKey;
  active?: boolean;
  transition?: TransitionType;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
}

const defaultProps = {};

const TabPane: BsPrefixRefForwardingComponent<"div", TabPaneProps> = (
  p: TabPaneProps
) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "bsPrefix",
    "transition",
  ]);
  const [
    // {
    //   className,
    //   // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    //   as: Component = "div",
    //   ...rest
    // },
    // {
    //   isActive,
    //   onEnter,
    //   onEntering,
    //   onEntered,
    //   onExit,
    //   onExiting,
    //   onExited,
    //   mountOnEnter,
    //   unmountOnExit,
    //   transition: Transition = NoopTransition,
    // },
    panelProps,
    meta,
  ] = useTabPanel(
    mergeProps(props, {
      get transition() {
        return getTabTransitionComponent(local.transition);
      },
    })
  );
  const [panelLocal, rest] = splitProps(panelProps, ["as", "className"]);
  const prefix = useBootstrapPrefix(local.bsPrefix, "tab-pane");

  // We provide an empty the TabContext so `<Nav>`s in `<TabPanel>`s don't
  // conflict with the top level one.
  return (
    <TabContext.Provider value={null}>
      <SelectableContext.Provider value={null}>
        {/* <Transition
          in={isActive}
          onEnter={onEnter}
          onEntering={onEntering}
          onEntered={onEntered}
          onExit={onExit}
          onExiting={onExiting}
          onExited={onExited}
          mountOnEnter={mountOnEnter}
          unmountOnExit={unmountOnExit as any}
        > */}
        <Dynamic
          component={panelLocal.as ?? "div"}
          {...rest}
          ref={props.ref}
          className={classNames(
            panelLocal.className,
            prefix,
            meta.isActive && "active"
          )}
        />
        {/* </Transition> */}
      </SelectableContext.Provider>
    </TabContext.Provider>
  );
};

export default TabPane;
