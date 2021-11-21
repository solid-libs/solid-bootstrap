import {
  children,
  createEffect,
  createMemo,
  createSignal,
  JSX,
  mergeProps,
  Show,
  splitProps,
} from "solid-js";
import css from "dom-helpers/css";
import { Transition } from "../Transition/Transition";
import { TransitionCallbacks } from "../overlays/types";
import createChainedFunction from "./createChainedFunction";
import triggerBrowserReflow from "./triggerBrowserReflow";

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

const MARGINS: { [d in Dimension]: string[] } = {
  height: ["marginTop", "marginBottom"],
  width: ["marginLeft", "marginRight"],
};

function getDefaultDimensionValue(
  dimension: Dimension,
  elem: HTMLElement
): number {
  const offset = `offset${dimension[0].toUpperCase()}${dimension.slice(
    1
  )}` as keyof HTMLElement;
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
    "in",
    "onEnter",
    "onBeforeEnter",
    "onAfterEnter",
    "onExit",
    "onBeforeExit",
    "className",
    "children",
    "dimension",
    "getDimensionValue",
  ]);

  /* Compute dimension */
  const computedDimension = () =>
    typeof local.dimension === "function"
      ? local.dimension()
      : (local.dimension as Dimension);

  /* -- Expanding -- */
  const handleEnter = (elem: Element) => {
    console.log("handleEnter");
    (elem as HTMLElement).style[computedDimension()] = "0";
    local.onBeforeEnter?.(elem);
  };

  const handleEntering = (elem: Element, done: () => void) => {
    console.log("handleEntering");
    const scroll =
      `scroll${computedDimension()[0].toUpperCase()}${computedDimension().slice(
        1
      )}` as keyof HTMLElement;
    (elem as HTMLElement).style[computedDimension()] = `${
      (elem as HTMLElement)[scroll]
    }px`;
    local.onEnter?.(elem, done);
    done();
  };

  const handleEntered = (elem: Element) => {
    console.log("handleEntered");
    // @ts-ignore
    elem.style[computedDimension()] = null;
    local.onAfterEnter?.(elem);
  };

  /* -- Collapsing -- */
  const handleExit = (elem: Element) => {
    console.log("handleExit");
    (elem as HTMLElement).style[
      computedDimension()
    ] = `${local.getDimensionValue!(
      computedDimension(),
      elem as HTMLElement
    )}px`;
    // @ts-ignore
    triggerBrowserReflow(elem);
    local.onBeforeExit?.(elem);
  };

  const handleExiting = (elem: Element, done: () => void) => {
    console.log("handleExiting");
    // @ts-ignore
    elem.style[computedDimension()] = null;
    local.onExit?.(elem, done);
    done();
  };

  createEffect(() => {
    console.log("local.in", local.in);
  });

  return (
    <Transition
      // addEndListener={transitionEndListener}
      // {...props}
      enterActiveClass="collapse"
      enterClass="collapsing"
      enterToClass="collapse show"
      exitActiveClass="collapse"
      exitClass="collapsing"
      exitToClass="collapse"
      aria-expanded={props.role ? local.in : null}
      onBeforeEnter={handleEnter}
      onEnter={handleEntering}
      onAfterEnter={handleEntered}
      onBeforeExit={handleExit}
      onExit={handleExiting}
      // childRef={(local.children as any).ref}
    >
      <Show when={local.in}>{local.children}</Show>
      {/* {(state: TransitionStatus, innerProps: Record<string, unknown>) =>
        React.cloneElement(local.children, {
          ...innerProps,
          className: classNames(
            local.className,
            children.props.className,
            collapseStyles[state],
            computedDimension() === "width" && "collapse-horizontal"
          ),
        })
      } */}
    </Transition>
  );
};
export default Collapse;
