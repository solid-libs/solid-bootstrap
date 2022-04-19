// ported from https://github.com/react-bootstrap/react-bootstrap/blob/f11723114d532cfce840417834a73733a8436414/src/Collapse.tsx

import {children, JSX, mergeProps, splitProps} from "solid-js";
import css from "dom-helpers/css";
import {
  TransitionStatus,
  ENTERED,
  ENTERING,
  EXITED,
  EXITING,
  TransitionCallbacks,
  UNMOUNTED,
} from "solid-react-transition";
import triggerBrowserReflow from "./triggerBrowserReflow";
import transitionEndListener from "./transitionEndListener";
import TransitionWrapper from "./TransitionWrapper";
import classNames from "./classnames";
import {resolveClasses} from "solid-bootstrap-core";

type Dimension = "height" | "width";

export interface CollapseProps
  extends TransitionCallbacks,
    Pick<JSX.HTMLAttributes<HTMLElement>, "role"> {
  className?: string;
  in?: boolean;
  mountOnEnter?: boolean;
  unmountOnExit?: boolean;
  appear?: boolean;
  timeout?: number;
  dimension?: Dimension | (() => Dimension);
  getDimensionValue?: (dimension: Dimension, element: HTMLElement) => number;
  children: JSX.Element;
}

const MARGINS: {[d in Dimension]: string[]} = {
  height: ["marginTop", "marginBottom"],
  width: ["marginLeft", "marginRight"],
};

function getDefaultDimensionValue(dimension: Dimension, elem: HTMLElement): number {
  const offset = `offset${dimension[0].toUpperCase()}${dimension.slice(1)}` as keyof HTMLElement;
  const value = elem[offset] as number;
  const margins = MARGINS[dimension];

  return (
    value +
    // @ts-ignore
    parseInt(css(elem, margins[0]), 10) +
    // @ts-ignore
    parseInt(css(elem, margins[1]), 10)
  );
}

const collapseStyles = {
  [EXITED]: "collapse",
  [EXITING]: "collapsing",
  [ENTERING]: "collapsing",
  [ENTERED]: "collapse show",
  [UNMOUNTED]: "",
};

const defaultProps: Partial<CollapseProps> = {
  in: false,
  dimension: "height",
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  getDimensionValue: getDefaultDimensionValue,
};

const Collapse = (p: CollapseProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "onEnter",
    "onEntering",
    "onEntered",
    "onExit",
    "onExiting",
    "className",
    "children",
    "dimension",
    "getDimensionValue",
  ]);

  /* Compute dimension */
  const computedDimension = () =>
    typeof local.dimension === "function" ? local.dimension() : (local.dimension as Dimension);

  /* -- Expanding -- */
  const handleEnter = (elem?: any) => {
    (elem as HTMLElement).style[computedDimension()] = "0";
    local.onEnter?.(elem as HTMLElement);
  };

  const handleEntering = (elem: any) => {
    const scroll = `scroll${computedDimension()[0].toUpperCase()}${computedDimension().slice(
      1,
    )}` as keyof HTMLElement;
    (elem as HTMLElement).style[computedDimension()] = `${(elem as HTMLElement)[scroll]}px`;
    local.onEntering?.(elem as HTMLElement);
  };

  const handleEntered = (elem: any) => {
    // @ts-ignore
    elem.style[computedDimension()] = null;
    local.onEntered?.(elem as HTMLElement);
  };

  /* -- Collapsing -- */
  const handleExit = (elem: Element) => {
    (elem as HTMLElement).style[computedDimension()] = `${local.getDimensionValue!(
      computedDimension(),
      elem as HTMLElement,
    )}px`;
    // @ts-ignore
    triggerBrowserReflow(elem);
    local.onExit?.(elem as HTMLElement);
  };

  const handleExiting = (elem: Element) => {
    // @ts-ignore
    elem.style[computedDimension()] = null;
    local.onExiting?.(elem as HTMLElement);
  };

  const resolvedChildren = children(() => local.children);
  let prevClasses: string;

  return (
    <TransitionWrapper
      addEndListener={transitionEndListener}
      {...props}
      aria-expanded={props.role ? props.in : null}
      onEnter={handleEnter}
      onEntering={handleEntering}
      onEntered={handleEntered}
      onExit={handleExit}
      onExiting={handleExiting}
    >
      {
        ((state: TransitionStatus, innerProps: {ref: (el: HTMLElement) => void}) => {
          const el = resolvedChildren() as HTMLElement;
          innerProps.ref(el);
          const newClasses = classNames(
            local.className,
            collapseStyles[state],
            computedDimension() === "width" && "collapse-horizontal",
          );
          resolveClasses(el, prevClasses, newClasses);
          prevClasses = newClasses;
          return el;
        }) as unknown as JSX.FunctionElement
      }
    </TransitionWrapper>
  );
};
export default Collapse;
