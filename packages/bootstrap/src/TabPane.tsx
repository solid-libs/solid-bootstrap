import {JSX, mergeProps, splitProps} from "solid-js";
import classNames from "./classnames";
import {
  EventKey,
  NoopTransition,
  SelectableContext,
  TabContext,
  useTabPanel,
} from "solid-bootstrap-core";
import {useBootstrapPrefix} from "./ThemeProvider";
import {getTabTransitionComponent} from "./getTabTransitionComponent";
import {BsPrefixProps, BsPrefixRefForwardingComponent, TransitionType} from "./helpers";
import {Dynamic} from "solid-js/web";
import {TransitionCallbacks} from "solid-react-transition";

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

const TabPane: BsPrefixRefForwardingComponent<"div", TabPaneProps> = (p: TabPaneProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), ["bsPrefix", "transition"]);
  const [panelProps, meta] = useTabPanel(
    mergeProps(props, {
      get transition() {
        return getTabTransitionComponent(local.transition);
      },
    }),
  );
  const [panelLocal, rest] = splitProps(panelProps, [
    "as",
    "className",
    "mountOnEnter",
    "unmountOnExit",
  ]);
  const prefix = useBootstrapPrefix(local.bsPrefix, "tab-pane");
  const Transition = meta.transition || NoopTransition;

  // We provide an empty the TabContext so `<Nav>`s in `<TabPanel>`s don't
  // conflict with the top level one.
  return (
    <TabContext.Provider value={null}>
      <SelectableContext.Provider value={null}>
        <Transition
          in={meta.isActive}
          onEnter={meta.onEnter}
          onEntering={meta.onEntering}
          onEntered={meta.onEntered}
          onExit={meta.onExit}
          onExiting={meta.onExiting}
          onExited={meta.onExited}
          mountOnEnter={meta.mountOnEnter}
          unmountOnExit={meta.unmountOnExit}
        >
          <Dynamic
            component={panelLocal.as ?? "div"}
            {...rest}
            ref={props.ref}
            className={classNames(panelLocal.className, prefix, meta.isActive && "active")}
          >
            {rest.children}
          </Dynamic>
        </Transition>
      </SelectableContext.Provider>
    </TabContext.Provider>
  );
};

export default TabPane;
