// ported from https://github.com/react-bootstrap/react-bootstrap/blob/f11723114d532cfce840417834a73733a8436414/src/Fade.tsx

import { JSX, mergeProps, Show, splitProps } from "solid-js";
import { Transition } from "solid-transition-group";
import { TransitionCallbacks } from "../overlays/types";

export interface FadeProps extends TransitionCallbacks {
  className?: string;
  in?: boolean;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
  appear?: boolean;
  timeout?: number;
  children: JSX.Element;
  transitionClasses?: Record<string, string>;
}

const defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
};

const Fade = (p: FadeProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "in",
    "className",
    "children",
  ]);

  return (
    <Transition
      enterActiveClass="fade"
      enterClass="fade"
      enterToClass="fade"
      exitActiveClass="fade"
      exitClass="fade"
      exitToClass="fade"
      {...props}
    >
      <Show when={local.in}>{local.children}</Show>
    </Transition>
  );
};
export default Fade;
