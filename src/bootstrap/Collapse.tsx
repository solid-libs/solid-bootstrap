import {
  children,
  createMemo,
  JSX,
  mergeProps,
  splitProps,
  useContext,
} from "solid-js";
import classNames from "classnames";
import css from "dom-helpers/css";
import { Transition } from "solid-transition-group";
import { TransitionCallbacks } from "../overlays/types";
import transitionEndListener from "./transitionEndListener";
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

const Collapse = (p: CollapseProps) => {
  const [local, props] = splitProps(
    mergeProps(
      {
        // defaults
        in: false,
        dimension: "height",
        timeout: 300,
        mountOnEnter: false,
        unmountOnExit: false,
        appear: false,
        getDimensionValue: getDefaultDimensionValue,
      } as CollapseProps,
      p
    ),
    // split for local use
    [
      "onEnter",
      "onBeforeEnter",
      "onAfterEnter",
      "onExit",
      "onBeforeExit",
      "className",
      "children",
      "dimension",
      "getDimensionValue",
    ]
  );
  const resolved = children(() => local.children);

  /* Compute dimension */
  const computedDimension = () =>
    typeof local.dimension === "function"
      ? local.dimension()
      : (local.dimension as Dimension);

  /* -- Expanding -- */
  const handleEnter = createMemo(() =>
    createChainedFunction((elem: HTMLElement) => {
      elem.style[computedDimension()] = "0";
    }, local.onBeforeEnter)
  );

  const handleEntering = createMemo(() =>
    createChainedFunction((elem: HTMLElement) => {
      const scroll =
        `scroll${computedDimension()[0].toUpperCase()}${computedDimension().slice(
          1
        )}` as keyof HTMLElement;
      elem.style[computedDimension()] = `${elem[scroll]}px`;
    }, local.onEnter)
  );

  const handleEntered = createMemo(() =>
    createChainedFunction((elem: HTMLElement) => {
      // @ts-ignore
      elem.style[computedDimension()] = null;
    }, local.onAfterEnter)
  );

  /* -- Collapsing -- */
  const handleExit = createMemo(() =>
    createChainedFunction((elem: HTMLElement) => {
      elem.style[computedDimension()] = `${local.getDimensionValue!(
        computedDimension(),
        elem
      )}px`;
      triggerBrowserReflow(elem);
    }, local.onBeforeExit)
  );
  const handleExiting = createMemo(() =>
    createChainedFunction((elem: HTMLElement) => {
      // @ts-ignore
      elem.style[computedDimension()] = null;
    }, local.onExit)
  );

  return (
    <Transition
      // addEndListener={transitionEndListener}
      enterActiveClass="collapse"
      enterClass="collapsing"
      enterToClass="collapse show"
      exitActiveClass="collapse show"
      exitClass="collapsing"
      exitToClass="collapse"
      {...props}
      aria-expanded={props.role ? props.in : null}
      // onEnter={handleEnter}
      // onEntering={handleEntering}
      // onEntered={handleEntered}
      // onExit={handleExit}
      // onExiting={handleExiting}
      // childRef={(local.children as any).ref}
    >
      {local.children}
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
