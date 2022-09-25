import {children, JSX, mergeProps, splitProps} from "solid-js";
import classNames from "./classnames";
import {
  TransitionCallbacks,
  TransitionStatus,
  ENTERED,
  ENTERING,
  EXITING,
} from "solid-react-transition";
import transitionEndListener from "./transitionEndListener";
import {BsPrefixOnlyProps} from "./helpers";
import TransitionWrapper from "./TransitionWrapper";
import {useBootstrapPrefix} from "./ThemeProvider";
import {resolveClasses} from "solid-bootstrap-core";

export interface OffcanvasTogglingProps extends TransitionCallbacks, BsPrefixOnlyProps {
  class?: string;
  in?: boolean;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
  appear?: boolean;
  timeout?: number;
  children: JSX.Element;
}

const defaultProps: Partial<OffcanvasTogglingProps> = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
};

const transitionStyles = {
  [ENTERING]: "show",
  [ENTERED]: "show",
};

const OffcanvasToggling = (p: OffcanvasTogglingProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), ["bsPrefix", "class", "children"]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "offcanvas");

  const resolvedChildren = children(() => local.children);
  let prevClasses: string;

  return (
    <TransitionWrapper addEndListener={transitionEndListener} {...props}>
      {
        ((status: TransitionStatus, innerProps: {ref: (el: HTMLElement) => void}) => {
          const el = resolvedChildren() as HTMLElement;
          innerProps.ref(el);
          const newClasses = classNames(
            local.class,
            (status === ENTERING || status === EXITING) && `${bsPrefix}-toggling`,
            // @ts-ignore
            transitionStyles[status],
          );
          resolveClasses(el, prevClasses, newClasses);
          prevClasses = newClasses;
          return el;
        }) as unknown as JSX.FunctionElement
      }
    </TransitionWrapper>
  );
};

export default OffcanvasToggling;
