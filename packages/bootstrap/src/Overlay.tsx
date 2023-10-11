import {JSX, mergeProps, splitProps} from "solid-js";
import {
  Overlay as BaseOverlay,
  OverlayProps as BaseOverlayProps,
  OverlayInjectedProps,
} from "solid-bootstrap-core";
import Fade from "./Fade";
import {TransitionType} from "./helpers";
import {Placement, RootCloseEvent} from "./types";

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
    "ref",
  ]);
  const actualTransition = local.transition === true ? Fade : local.transition || undefined;

  return (
    <BaseOverlay {...outerProps} transition={actualTransition}>
      {local.children}
    </BaseOverlay>
  );
};

export default Overlay;
