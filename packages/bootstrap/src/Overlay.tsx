import {Accessor, batch, children, createSignal, JSX, mergeProps, splitProps} from "solid-js";
import {
  Overlay as BaseOverlay,
  OverlayProps as BaseOverlayProps,
  OverlayArrowProps,
  OverlayMetadata,
  OverlayInjectedProps,
} from "solid-bootstrap-core";
import Fade from "./Fade";
import {TransitionType} from "./helpers";
import {Placement, RootCloseEvent} from "./types";
import OverlayContext from "./OverlayContext";

export type OverlayChildren = JSX.Element | ((injected: OverlayInjectedProps) => JSX.Element);

export interface OverlayProps
  extends Omit<BaseOverlayProps, "children" | "transition" | "rootCloseEvent"> {
  children: JSX.Element;
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

const Overlay = (p: OverlayProps /*outerRef*/) => {
  const [local, outerProps] = splitProps(mergeProps(defaultProps, p), [
    "children" /*overlay*/,
    "transition",
    "popperConfig",
    "ref",
  ]);

  const actualTransition = local.transition === true ? Fade : local.transition || undefined;

  const [wrapperProps, setWrapperProps] = createSignal<Accessor<OverlayInjectedProps>>();
  const [arrowProps, setArrowProps] = createSignal<Accessor<Partial<OverlayArrowProps>>>();
  const [metadata, setMetadata] = createSignal<Accessor<OverlayMetadata>>();

  const overlayContext = {
    get wrapperProps() {
      return wrapperProps()?.()!;
    },
    get arrowProps() {
      return arrowProps()?.()!;
    },
    get metadata() {
      return metadata()?.()!;
    },
  };

  return (
    <OverlayContext.Provider value={overlayContext}>
      <BaseOverlay {...outerProps} popperConfig={local.popperConfig} transition={actualTransition}>
        {(wrapperProps, arrowProps, metadata) => {
          batch(() => {
            setWrapperProps(() => wrapperProps);
            setArrowProps(() => arrowProps);
            setMetadata(() => metadata);
          });
          return local.children;
        }}
      </BaseOverlay>
    </OverlayContext.Provider>
  );
};

export default Overlay;
