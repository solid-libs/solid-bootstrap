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
  className?: string;
  in?: boolean;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
  appear?: boolean;
  timeout?: number;
  children: JSX.Element;
}

const defaultProps = {
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
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "bsPrefix",
    "className",
    "children",
  ]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "offcanvas");

  let child = children(() => local.children);
  let prevClasses: string;

  return (
    <TransitionWrapper addEndListener={transitionEndListener} {...props}>
      {
        ((status: TransitionStatus, innerProps: {ref: (el: HTMLElement) => void}) => {
          const el = child() as HTMLElement;
          innerProps.ref(el);
          const newClasses = classNames(
            local.className,
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
