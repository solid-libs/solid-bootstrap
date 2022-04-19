import usePopper, {Offset, Placement, UsePopperOptions, UsePopperState} from "./usePopper";
import useRootClose, {RootCloseOptions} from "./useRootClose";
import mergeOptionsWithPopperConfig from "./mergeOptionsWithPopperConfig";
import {
  batch,
  children,
  createComputed,
  createEffect,
  createMemo,
  createSignal,
  JSX,
  mergeProps,
  onCleanup,
  Show,
} from "solid-js";
import {createStore, reconcile} from "solid-js/store";
import {TransitionCallbacks, TransitionComponent} from "solid-react-transition";
import {Portal} from "solid-js/web";
import useWaitForDOMRef, {DOMContainer} from "./useWaitForDOMRef";

export interface OverlayArrowProps extends Record<string, any> {
  ref: (e: HTMLElement) => void;
  style: JSX.CSSProperties;
}

export interface OverlayMetadata {
  show: boolean;
  placement: Placement | undefined;
  popper: UsePopperState | null;
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
  container?: DOMContainer;

  /**
   * A DOM Element, Ref to an element, or function that returns either. The `target` element is where
   * the overlay is positioned relative to.
   */
  target: () => Element | undefined;

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
    wrapperProps: () => OverlayInjectedProps,
    arrowProps: () => Partial<OverlayArrowProps>,
    meta: () => OverlayMetadata,
  ) => JSX.Element;
}

/**
 * Built on top of `Popper.js`, the overlay component is
 * great for custom tooltip overlays.
 */
export const Overlay = (props: OverlayProps) => {
  const [rootElement, attachRef] = createSignal<HTMLElement>();
  const [arrowElement, attachArrowRef] = createSignal<Element>();
  const [exited, setExited] = createSignal(!props.show);

  const container = useWaitForDOMRef({
    get ref() {
      return props.container;
    },
  });

  const [popperOptions, setPopperOptions] = createStore<UsePopperOptions>({});
  const popperVisible = createMemo(() => !!(props.show || (props.transition && !exited())));

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
        }),
      ),
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

  const wrapperProps = createMemo(() => ({
    ...popper()?.attributes.popper,
    style: popper()?.styles.popper as any,
    ref: attachRef,
  }));

  const arrowProps = createMemo(() => ({
    ...popper()?.attributes.arrow,
    style: popper()?.styles.arrow as any,
    ref: attachArrowRef,
  }));

  const metadata = createMemo(() => ({
    popper: popper()!,
    placement: props.placement,
    show: !!props.show,
  }));

  const resolvedChildren = children(() => props.children as JSX.Element);
  const InnerChild = () => <>
    {(resolvedChildren() as unknown as OverlayProps["children"])(wrapperProps, arrowProps, metadata)}
  </>;

  let Transition: TransitionComponent | undefined;
  return (
    <Show when={container() && popperVisible()}>
      <Portal mount={container()!}>
        {(Transition = props.transition) ? (
          <Transition
            appear
            in={props.show}
            onExit={props.onExit}
            onExiting={props.onExiting}
            onExited={handleHidden}
            onEnter={props.onEnter}
            onEntering={props.onEntering}
            onEntered={props.onEntered}
          >
            <InnerChild />
          </Transition>
        ) : (
          <InnerChild />
        )}
      </Portal>
    </Show>
  );
};

Overlay.displayName = "Overlay";

export default Overlay;
