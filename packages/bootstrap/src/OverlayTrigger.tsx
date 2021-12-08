import { children, createSignal, JSX, mergeProps, splitProps } from "solid-js";
import { isServer } from "solid-js/web";
import contains from "dom-helpers/contains";
import { createControlledProp } from "solid-bootstrap-core/createControlledProp";
import Overlay, { OverlayProps } from "./Overlay";

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
  children: JSX.Element;
  trigger?: OverlayTriggerType | OverlayTriggerType[];
  delay?: OverlayDelay;
  show?: boolean;
  defaultShow?: boolean;
  onToggle?: (nextShow: boolean) => void;
  flip?: boolean;
  overlay: JSX.Element;

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
  handler: (...args: [Event, ...any[]]) => any,
  args: [Event, ...any[]],
  relatedNative: "fromElement" | "toElement"
) {
  const [e] = args;
  const target = e.currentTarget;
  const related = (e as MouseEvent).relatedTarget;

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

function OverlayTrigger(p: OverlayTriggerProps) {
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
  let [triggerNodeRef, setTriggerNodeRef] = createSignal<Element | undefined>();
  const mergedRef = (r: Element | undefined) => {
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
  };

  const handleBlur = (...args: any[]) => {
    handleHide();
  };

  const handleClick = (...args: any[]) => {
    setShow(!show());
  };

  const handleMouseOver = (...args: [Event, ...any[]]) => {
    handleMouseOverOut(handleShow, args, "fromElement");
  };

  const handleMouseOut = (...args: [Event, ...any[]]) => {
    handleMouseOverOut(handleHide, args, "toElement");
  };

  const addListeners = (el: Element) => {
    const triggers: string[] =
      local.trigger == null ? [] : [].concat(local.trigger as any);
    if (triggers.indexOf("click") !== -1) {
      el.addEventListener("click", handleClick);
    }
    if (triggers.indexOf("focus") !== -1) {
      el.addEventListener("focus", handleFocus);
      el.addEventListener("blur", handleBlur);
    }
    if (triggers.indexOf("hover") !== -1) {
      el.addEventListener("mouseover", handleMouseOver);
      el.addEventListener("mouseout", handleMouseOut);
    }
    // no need to cleanup as element will be removed anyway
  };

  let resolvedChildren = children(() => local.children);

  let Target = () => {
    let el = resolvedChildren() as Element;
    while (typeof el === "function") el = (el as Function)();
    mergedRef(el);
    if (!isServer) {
      addListeners(el);
    }
    return el;
  };

  return (
    <>
      <Target />
      <Overlay
        {...props}
        show={show()}
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
