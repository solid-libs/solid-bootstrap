import { createSignal, JSX, mergeProps, splitProps } from "solid-js";
import contains from "dom-helpers/contains";
import warning from "warning";
import { createControlledProp } from "../core/createControlledProp";
import Overlay, { OverlayChildren, OverlayProps } from "./Overlay";

export type OverlayTriggerType = "hover" | "click" | "focus";

export type OverlayDelay = number | { show: number; hide: number };

export type OverlayInjectedProps = {
  onFocus?: (...args: any[]) => any;
};

export type OverlayTriggerRenderProps = OverlayInjectedProps & {
  ref: (ref: any) => void;
};

export interface OverlayTriggerProps
  extends Omit<OverlayProps, "children" | "target"> {
  children: JSX.Element | ((props: OverlayTriggerRenderProps) => JSX.Element);
  trigger?: OverlayTriggerType | OverlayTriggerType[];
  delay?: OverlayDelay;
  show?: boolean;
  defaultShow?: boolean;
  onToggle?: (nextShow: boolean) => void;
  flip?: boolean;
  overlay: OverlayChildren;

  target?: never;
  onHide?: never;
}

function normalizeDelay(delay?: OverlayDelay) {
  return delay && typeof delay === "object"
    ? delay
    : {
        show: delay,
        hide: delay,
      };
}

// Simple implementation of mouseEnter and mouseLeave.
// React's built version is broken: https://github.com/facebook/react/issues/4251
// for cases when the trigger is disabled and mouseOut/Over can cause flicker
// moving from one child element to another.
function handleMouseOverOut(
  // eslint-disable-next-line @typescript-eslint/no-shadow
  handler: (...args: [MouseEvent, ...any[]]) => any,
  args: [MouseEvent, ...any[]],
  relatedNative: "fromElement" | "toElement"
) {
  const [e] = args;
  const target = e.currentTarget;
  const related = e.relatedTarget;

  if (
    (!related || related !== target) &&
    !contains(target as Element, related as Element)
  ) {
    handler(...args);
  }
}

const defaultProps = {
  defaultShow: false,
  trigger: ["hover", "focus"],
  popperConfig: {},
};

function OverlayTrigger(
  p: OverlayTriggerProps
  // trigger,
  // overlay,
  // children,
  // popperConfig = {},
  // show: propsShow,
  // defaultShow = false,
  // onToggle,
  // delay: propsDelay,
  // placement,
  // flip = placement && placement.indexOf("auto") !== -1,
  // ...props
) {
  const [local, props] = splitProps(
    mergeProps(
      defaultProps,
      {
        flip: p.placement && p.placement.indexOf("auto") !== -1,
      },
      p
    ),
    [
      "trigger",
      "overlay",
      "children",
      "popperConfig",
      "show",
      "defaultShow",
      "onToggle",
      "delay",
      "placement",
      "flip",
    ]
  );
  let [triggerNodeRef, setTriggerNodeRef] = createSignal<
    HTMLElement | undefined
  >();
  const mergedRef = (r: HTMLElement | undefined) => {
    setTriggerNodeRef(r);
    (local.children as any).ref?.(r);
  };
  let timeout: number;
  let hoverStateRef: string = "";

  const [show, setShow] = createControlledProp(
    () => local.show,
    () => local.defaultShow,
    local.onToggle
  );

  const delay = normalizeDelay(local.delay);

  // const { onFocus, onBlur, onClick } =
  //   typeof children !== "function"
  //     ? React.Children.only(children).props
  //     : ({} as any);

  const handleShow = () => {
    window.clearTimeout(timeout);
    hoverStateRef = "show";

    if (!delay.show) {
      setShow(true);
      return;
    }

    timeout = window.setTimeout(() => {
      if (hoverStateRef === "show") setShow(true);
    }, delay.show);
  };

  const handleHide = () => {
    window.clearTimeout(timeout);
    hoverStateRef = "hide";

    if (!delay.hide) {
      setShow(false);
      return;
    }

    timeout = window.setTimeout(() => {
      if (hoverStateRef === "hide") setShow(false);
    }, delay.hide);
  };

  const handleFocus = (...args: any[]) => {
    handleShow();
    // onFocus?.(...args);
  };

  const handleBlur = (...args: any[]) => {
    handleHide();
    // onBlur?.(...args);
  };

  const handleClick = (...args: any[]) => {
    setShow(!show);
    // onClick?.(...args);
  };

  const handleMouseOver = (...args: [MouseEvent, ...any[]]) => {
    handleMouseOverOut(handleShow, args, "fromElement");
  };

  const handleMouseOut = (...args: [MouseEvent, ...any[]]) => {
    handleMouseOverOut(handleHide, args, "toElement");
  };

  const triggers: string[] =
    local.trigger == null ? [] : [].concat(local.trigger as any);
  const triggerProps: any = {
    ref: mergedRef,
  };

  if (triggers.indexOf("click") !== -1) {
    triggerProps.onClick = handleClick;
  }

  if (triggers.indexOf("focus") !== -1) {
    triggerProps.onFocus = handleFocus;
    triggerProps.onBlur = handleBlur;
  }

  if (triggers.indexOf("hover") !== -1) {
    warning(
      triggers.length > 1,
      '[react-bootstrap] Specifying only the `"hover"` trigger limits the visibility of the overlay to just mouse users. Consider also including the `"focus"` trigger so that touch and keyboard only users can see the overlay as well.'
    );
    triggerProps.onMouseOver = handleMouseOver;
    triggerProps.onMouseOut = handleMouseOut;
  }

  return (
    <>
      {
        typeof local.children === "function"
          ? local.children(triggerProps)
          : local.children /*cloneElement(children, triggerProps)*/
      }
      <Overlay
        {...props}
        show={local.show}
        onHide={handleHide}
        flip={local.flip}
        placement={local.placement}
        popperConfig={local.popperConfig}
        target={triggerNodeRef}
      >
        {local.overlay}
      </Overlay>
    </>
  );
}

export default OverlayTrigger;
