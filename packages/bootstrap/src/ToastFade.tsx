import Fade, {FadeProps} from "./Fade";
import {ENTERING, EXITING} from "solid-react-transition";

const fadeStyles = {
  [ENTERING]: "showing",
  [EXITING]: "showing show",
};

const ToastFade = (props: FadeProps) => (
  <Fade {...props} transitionClasses={fadeStyles}>
    {props.children}
  </Fade>
);

export default ToastFade;
