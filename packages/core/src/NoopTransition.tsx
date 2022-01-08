import {ENTERED, TransitionComponent, TransitionProps} from "solid-react-transition";

const NoopTransition: TransitionComponent = (props: TransitionProps) => {
  return typeof props.children === "function" ? props.children(ENTERED, {}) : props.children;
};

export default NoopTransition;
