import { TransitionComponent } from "../../core/src/types";
import Fade from "./Fade";
import { TransitionType } from "./helpers";

export function getTabTransitionComponent(
  transition?: TransitionType
): TransitionComponent | undefined {
  if (typeof transition === "boolean") {
    return transition ? Fade : undefined;
  }

  return transition;
}
