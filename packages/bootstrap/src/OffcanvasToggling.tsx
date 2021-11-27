import { children, JSX, mergeProps, splitProps } from "solid-js";
import classNames from "classnames";
import transitionEndListener from "./transitionEndListener";
import { BsPrefixOnlyProps } from "./helpers";
import { useBootstrapPrefix } from "./ThemeProvider";
import Transition, {
  TransitionCallbacks,
} from "../../transition/src/Transition";

export interface OffcanvasTogglingProps
  extends TransitionCallbacks,
    BsPrefixOnlyProps {
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

// const transitionStyles = {
//   [ENTERING]: 'show',
//   [ENTERED]: 'show',
// };

const OffcanvasToggling = (p: OffcanvasTogglingProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "bsPrefix",
    "className",
    "children",
  ]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "offcanvas");

  return (
    <Transition {...props}>
      {/* original source did stuff with "-toggling" class but that doesn't appear in Bootstrap CSS anywhere?? */}
      {local.children}
    </Transition>
  );
};
export default OffcanvasToggling;
