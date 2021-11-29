import Fade, { FadeProps } from "./Fade";
import Transition, { ENTERING, EXITING } from "solid-react-transition";

const fadeStyles = {
  [ENTERING]: "showing",
  [EXITING]: "showing show",
};

const ToastFade = (props: FadeProps) => (
  <Fade {...props} transitionClasses={fadeStyles} />
);

export default ToastFade;
