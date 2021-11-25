import { TransitionProps } from "./types";

function NoopTransition(props: TransitionProps) {
  return props.children;
}

export default NoopTransition;
