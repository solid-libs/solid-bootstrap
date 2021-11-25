import { Component, JSX, mergeProps, splitProps } from "solid-js";
import classNames from "classnames";
import BaseOverlay, {
  OverlayProps as BaseOverlayProps,
  OverlayArrowProps,
} from "../core/Overlay";
import useOverlayOffset from "./useOverlayOffset";
import Fade from "./Fade";
import { TransitionType } from "./helpers";
import { Placement, RootCloseEvent } from "./types";

export interface OverlayInjectedProps {
  ref: (ref: HTMLElement) => void;
  style: JSX.CSSProperties;
  "aria-labelledby"?: string;

  arrowProps: Partial<OverlayArrowProps>;

  show: boolean;
  placement: Placement | undefined;
  popper: {
    state: any;
    outOfBoundaries: boolean;
    placement: Placement | undefined;
    scheduleUpdate?: () => void;
  };
  [prop: string]: any;
}

export type OverlayChildren =
  | Component<OverlayInjectedProps>
  | ((injected: OverlayInjectedProps) => JSX.Element);

export interface OverlayProps
  extends Omit<BaseOverlayProps, "children" | "transition" | "rootCloseEvent"> {
  children: OverlayChildren;
  transition?: TransitionType;
  placement?: Placement;
  rootCloseEvent?: RootCloseEvent;
  ref?: (ref: HTMLElement) => void;
}

const defaultProps: Partial<OverlayProps> = {
  transition: Fade,
  rootClose: false,
  show: false,
  placement: "top",
  popperConfig: {},
};

// function wrapRefs(props: OverlayInjectedProps, arrowProps: OverlayArrowProps) {
//   const { ref } = props;
//   const { ref: aRef } = arrowProps;

//   props.ref = ref.__wrapped || (ref.__wrapped = (r) => ref(safeFindDOMNode(r)));
//   arrowProps.ref =
//     aRef.__wrapped || (aRef.__wrapped = (r) => aRef(safeFindDOMNode(r)));
// }

const Overlay = (p: OverlayProps /*outerRef*/) => {
  const [local, outerProps] = splitProps(mergeProps(defaultProps, p), [
    "children" /*overlay*/,
    "transition",
    "popperConfig",
    "ref",
  ]);
  const popperRef = {};
  const [ref, modifiers] = useOverlayOffset();
  const mergedRef = (r: any) => {
    ref(r);
    if (typeof local.ref === "function") {
      local.ref(r);
    }
  };

  const actualTransition =
    local.transition === true ? Fade : local.transition || undefined;

  return (
    <BaseOverlay
      {...outerProps}
      ref={mergedRef}
      popperConfig={{
        ...local.popperConfig,
        modifiers: modifiers().concat(local.popperConfig?.modifiers || []),
      }}
      transition={actualTransition}
    >
      {(
        overlayProps,
        meta /*{ arrowProps, placement, popper: popperObj, show }*/
      ) => {
        // wrapRefs(overlayProps(), meta().arrowProps);
        const popper = Object.assign(popperRef, {
          state: meta().popper?.state,
          scheduleUpdate: meta().popper?.update,
          placement: meta().placement,
          outOfBoundaries:
            meta().popper?.state?.modifiersData.hide?.isReferenceHidden ||
            false,
        });

        if (typeof local.children === "function")
          return local.children(
            mergeProps(overlayProps(), {
              get placement() {
                return meta().placement;
              },
              get show() {
                return meta().show;
              },
              ...(!local.transition && meta().show && { className: "show" }),
              popper,
              get arrowProps() {
                return meta().arrowProps;
              },
            })
          );

        return local.children;
        // how to do this - perhaps conver to context?
        // return React.cloneElement(overlay as React.ReactElement, {
        //   ...overlayProps,
        //   placement,
        //   arrowProps,
        //   popper,
        //   className: classNames(
        //     (overlay as React.ReactElement).props.className,
        //     !transition && show && "show"
        //   ),
        //   style: {
        //     ...(overlay as React.ReactElement).props.style,
        //     ...overlayProps.style,
        //   },
        // });
      }}
    </BaseOverlay>
  );
};

export default Overlay;
