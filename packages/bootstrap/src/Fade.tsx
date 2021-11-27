// ported from https://github.com/react-bootstrap/react-bootstrap/blob/f11723114d532cfce840417834a73733a8436414/src/Fade.tsx

import { children, JSX, mergeProps, splitProps } from "solid-js";
import {
  TransitionStatus,
  ENTERED,
  ENTERING,
  TransitionCallbacks,
  TransitionComponent,
} from "../../transition/src/Transition";
import TransitionWrapper from "./TransitionWrapper";
import transitionEndListener from "./transitionEndListener";
import triggerBrowserReflow from "./triggerBrowserReflow";
import classNames from "classnames";
import { resolveClasses } from "../../core/src/utils";

export interface FadeProps extends TransitionCallbacks {
  className?: string;
  in?: boolean;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
  appear?: boolean;
  timeout?: number | { appear?: number; enter?: number; exit?: number };
  children?: JSX.Element;
  transitionClasses?: Record<string, string>;
}

const defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
};

const fadeStyles = {
  [ENTERING]: "show",
  [ENTERED]: "show",
};

const Fade = (p: FadeProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "className",
    "children",
    "transitionClasses",
  ]);

  const handleEnter = (node: HTMLElement, isAppearing?: boolean) => {
    triggerBrowserReflow(node);
    props.onEnter?.(node, isAppearing);
  };

  let child = children(() => local.children);
  let prevClasses: string;

  return (
    <TransitionWrapper
      addEndListener={transitionEndListener}
      onEnter={handleEnter}
      {...props}
    >
      {
        ((
          status: TransitionStatus,
          innerProps: { ref: (el: HTMLElement) => void }
        ) => {
          const el = child() as HTMLElement;
          innerProps.ref(el);
          const newClasses = classNames(
            "fade",
            local.className,
            // @ts-ignore
            fadeStyles?.[status],
            local.transitionClasses?.[status]
          );
          resolveClasses(el, prevClasses, newClasses);
          prevClasses = newClasses;
          return el;
        }) as unknown as JSX.FunctionElement
      }
    </TransitionWrapper>
  );
};
export default Fade;
