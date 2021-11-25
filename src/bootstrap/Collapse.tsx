// ported from https://github.com/react-bootstrap/react-bootstrap/blob/f11723114d532cfce840417834a73733a8436414/src/Collapse.tsx

import { createEffect, JSX, mergeProps, Show, splitProps } from "solid-js";
import css from "dom-helpers/css";
import { Transition } from "solid-transition-group";
import { TransitionCallbacks } from "../core/types";
import triggerBrowserReflow from "./triggerBrowserReflow";

type Dimension = "height" | "width";

export interface CollapseProps
  extends TransitionCallbacks,
    Pick<JSX.HTMLAttributes<HTMLElement>, "role"> {
  className?: string;
  in?: boolean;
  // mountOnEnter?: boolean;
  // unmountOnExit?: boolean;
  appear?: boolean;
  // timeout?: number;
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
  // timeout: 300,
  // mountOnEnter: false,
  // unmountOnExit: false,
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
  const handleBeforeEnter = (elem: Element) => {
    (elem as HTMLElement).style[computedDimension()] = "0";
    local.onBeforeEnter?.(elem);
  };

  const handleOnEnter = (elem: Element) => {
    const scroll =
      `scroll${computedDimension()[0].toUpperCase()}${computedDimension().slice(
        1
      )}` as keyof HTMLElement;
    (elem as HTMLElement).style[computedDimension()] = `${
      (elem as HTMLElement)[scroll]
    }px`;
    local.onEnter?.(elem, () => {});
  };

  const handleAfterEnter = (elem: Element) => {
    // @ts-ignore
    elem.style[computedDimension()] = null;
    local.onAfterEnter?.(elem);
  };

  /* -- Collapsing -- */
  const handleBeforeExit = (elem: Element) => {
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

  const handleOnExit = (elem: Element) => {
    // @ts-ignore
    elem.style[computedDimension()] = null;
    local.onExit?.(elem, () => {});
  };

  return (
    <Transition
      {...props}
      aria-expanded={props.role ? local.in : null}
      enterActiveClass="collapsing"
      enterClass="collapsing"
      enterToClass="collapsing"
      exitActiveClass="collapsing"
      exitClass="collapsing"
      exitToClass="collapsing"
      onBeforeEnter={handleBeforeEnter}
      onEnter={handleOnEnter}
      onAfterEnter={handleAfterEnter}
      onBeforeExit={handleBeforeExit}
      onExit={handleOnExit}
    >
      <Show when={local.in}>{local.children}</Show>
    </Transition>
  );
};
export default Collapse;
