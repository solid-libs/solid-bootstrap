import {JSX, children} from "solid-js";
import {ENTERED, TransitionComponent, TransitionProps} from "solid-react-transition";

export const NoopTransition: TransitionComponent = (props: TransitionProps) => {
  const resolvedChildren = children(() => props.children as JSX.Element);
  const callChild = () => {
    const c = resolvedChildren() as TransitionProps["children"];
    return typeof c === "function" ? c(ENTERED, {}) : c;
  }
  return <>{callChild()}</>;
};

export default NoopTransition;
