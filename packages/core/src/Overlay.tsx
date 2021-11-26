import usePopper, {
  Offset,
  Placement,
  UsePopperOptions,
  UsePopperState,
} from "./usePopper";
import useRootClose, { RootCloseOptions } from "./useRootClose";
import mergeOptionsWithPopperConfig from "./mergeOptionsWithPopperConfig";
import {
  createComputed,
  createEffect,
  createMemo,
  createSignal,
  JSX,
  Show,
} from "solid-js";
import { createStore, reconcile } from "solid-js/store";
import {
  TransitionCallbacks,
  TransitionComponent,
} from "../../transition/src/Transition";
import { Portal } from "solid-js/web";

export interface OverlayArrowProps extends Record<string, any> {
  ref: (e: HTMLElement) => void;
  style: JSX.CSSProperties;
}

export interface OverlayMetadata {
  show: boolean;
  placement: Placement | undefined;
  popper: UsePopperState | null;
  arrowProps: Partial<OverlayArrowProps>;
}

export interface OverlayInjectedProps extends Record<string, any> {
  ref: (e: HTMLElement) => void;
  style: JSX.CSSProperties;
  "aria-labelledby"?: string;
}

export interface OverlayProps extends TransitionCallbacks {
  /**
   * Enables the Popper.js `flip` modifier, allowing the Overlay to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */
  flip?: boolean;

  /** Specify where the overlay element is positioned in relation to the target element */
  placement?: Placement;

  /**
   * Control offset of the overlay to the reference element.
   * A convenience shortcut to setting `popperConfig.modfiers.offset`
   */
  offset?: Offset;

  /**
   * Control how much space there is between the edge of the boundary element and overlay.
   * A convenience shortcut to setting `popperConfig.modfiers.preventOverflow.padding`
   */
  containerPadding?: number;

  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig?: Omit<UsePopperOptions, "placement">;

  /**
   * A DOM Element, Ref to an element, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: () => HTMLElement | undefined;

  /**
   * A DOM Element, Ref to an element, or function that returns either. The `target` element is where
   * the overlay is positioned relative to.
   */
  target: () => HTMLElement | undefined;

  /**
   * Set the visibility of the Overlay
   */
  show?: boolean;

  /**
   * A  `<Transition/>` component
   * used to animate the overlay as it changes visibility.
   */
  transition?: TransitionComponent;

  /**
   * A Callback fired by the Overlay when it wishes to be hidden.
   *
   * __required__ when `rootClose` is `true`.
   *
   * @type func
   */
  onHide?: (e: Event) => void;

  /**
   * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
   */
  rootClose?: boolean;

  /**
   * Specify disabled for disable RootCloseWrapper
   */
  rootCloseDisabled?: boolean;

  /**
   * Specify event for toggling overlay
   */
  rootCloseEvent?: RootCloseOptions["clickTrigger"];

  /**
   * A render prop that returns an overlay element.
   */
  children: (
    props: () => OverlayInjectedProps,
    meta: () => OverlayMetadata
  ) => JSX.Element;
}

/**
 * Built on top of `Popper.js`, the overlay component is
 * great for custom tooltip overlays.
 */
const Overlay = (props: OverlayProps) => {
  const [rootElement, attachRef] = createSignal<HTMLElement>();
  const [arrowElement, attachArrowRef] = createSignal<Element>();
  const [exited, setExited] = createSignal(!props.show);
  const [popperOptions, setPopperOptions] = createStore<UsePopperOptions>({});
  const Transition = props.transition!;
  const popperVisible = createMemo(
    () => !!(props.show || (props.transition && !exited()))
  );

  /** sync popper options with props */
  createComputed(() => {
    setPopperOptions(
      reconcile(
        mergeOptionsWithPopperConfig({
          enabled: popperVisible(),
          placement: props.placement,
          enableEvents: popperVisible(),
          containerPadding: props.containerPadding || 5,
          flip: props.flip,
          offset: props.offset,
          arrowElement: arrowElement(),
          popperConfig: props.popperConfig ?? {},
        })
      )
    );
  });

  const popper = usePopper(props.target, rootElement, popperOptions);

  createComputed(() => {
    if (props.show) {
      if (exited()) setExited(false);
    } else if (!props.transition && !exited()) {
      setExited(true);
    }
  });

  const handleHidden: TransitionCallbacks["onExited"] = (...args) => {
    setExited(true);

    if (props.onExited) {
      props.onExited(...args);
    }
  };

  createEffect(() => {
    if (rootElement()) {
      useRootClose(rootElement, props.onHide!, {
        get disabled() {
          return !props.rootClose || props.rootCloseDisabled || !props.show;
        },
        get clickTrigger() {
          return props.rootCloseEvent;
        },
      });
    }
  });

  const innerChild = () =>
    props.children(
      () => ({
        ...popper()?.attributes.popper,
        style: popper()?.styles.popper as any,
        ref: attachRef,
      }),
      () => ({
        popper: popper()!,
        placement: props.placement,
        show: !!props.show,
        arrowProps: {
          ...popper()?.attributes.arrow,
          style: popper()?.styles.arrow as any,
          ref: attachArrowRef,
        },
      })
    );

  const child = !Transition
    ? innerChild
    : () => (
        <Transition
          appear
          onExit={props.onExit}
          onExiting={props.onExiting}
          onExited={handleHidden}
          onEnter={props.onEnter}
          onEntering={props.onEntering}
          onEntered={props.onEntered}
        >
          {props.show && innerChild}
        </Transition>
      );

  const portalRef = (ref: HTMLDivElement) => {
    ref.style.position = "fixed";
  };

  return (
    <Show when={props.container() && popperVisible()}>
      <Portal mount={props.container()} ref={portalRef}>
        {child}
      </Portal>
    </Show>
  );
};

Overlay.displayName = "Overlay";

export default Overlay;
