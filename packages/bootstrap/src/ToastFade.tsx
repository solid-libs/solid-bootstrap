import Fade, { FadeProps } from "./Fade";
import Transition, { ENTERING, EXITING } from "../../transition/src/Transition";

const fadeStyles = {
  [ENTERING]: "showing",
  [EXITING]: "showing show",
};

const ToastFade = (props: FadeProps) => (
  <Fade {...props} transitionClasses={fadeStyles} />
);

export default ToastFade;
