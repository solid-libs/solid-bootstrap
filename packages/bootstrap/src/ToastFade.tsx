import Fade, {FadeProps} from "./Fade";
import {ENTERING, EXITING} from "solid-react-transition";

const fadeStyles = {
  [ENTERING]: "showing",
  [EXITING]: "",
};

const ToastFade = (props: FadeProps) => <Fade {...props} transitionClasses={fadeStyles} />;

export default ToastFade;
