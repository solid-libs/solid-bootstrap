import {
  Accessor,
  children,
  createComputed,
  createEffect,
  createMemo,
  createSignal,
  For,
  JSX,
  mergeProps,
  onCleanup,
  splitProps,
} from "solid-js";
import Anchor from "../core/Anchor";
import classNames from "classnames";
import { createControlledProp } from "../core/createControlledProp";
import CarouselCaption from "./CarouselCaption";
import CarouselItem from "./CarouselItem";
// import { map, forEach } from './ElementChildren';
import { useBootstrapPrefix, useIsRTL } from "./ThemeProvider";
import transitionEndListener from "./transitionEndListener";
import triggerBrowserReflow from "./triggerBrowserReflow";
import { BsPrefixProps, BsPrefixRefForwardingComponent } from "./helpers";
import { callEventHandler } from "../core/utils";
import { Dynamic } from "solid-js/web";
import { Transition } from "solid-transition-group";

export type CarouselVariant = "dark";

export interface CarouselProps
  extends BsPrefixProps,
    Omit<JSX.HTMLAttributes<HTMLElement>, "onSelect"> {
  slide?: boolean;
  fade?: boolean;
  controls?: boolean;
  indicators?: boolean;
  indicatorLabels?: string[];
  activeIndex?: number;
  onSelect?: (eventKey: number, event: Record<string, unknown> | null) => void;
  defaultActiveIndex?: number;
  onSlide?: (eventKey: number, direction: "start" | "end") => void;
  onSlid?: (eventKey: number, direction: "start" | "end") => void;
  interval?: number | null;
  keyboard?: boolean;
  pause?: "hover" | false;
  wrap?: boolean;
  touch?: boolean;
  prevIcon?: JSX.Element;
  prevLabel?: JSX.Element;
  nextIcon?: JSX.Element;
  nextLabel?: JSX.Element;
  variant?: CarouselVariant;
}

const SWIPE_THRESHOLD = 40;

const defaultProps = {
  as: "div",
  slide: true,
  fade: false,
  controls: true,
  indicators: true,
  indicatorLabels: [],
  defaultActiveIndex: 0,
  interval: 5000,
  keyboard: true,
  pause: "hover" as CarouselProps["pause"],
  wrap: true,
  touch: true,

  prevIcon: <span aria-hidden="true" className="carousel-control-prev-icon" />,
  prevLabel: "Previous",

  nextIcon: <span aria-hidden="true" className="carousel-control-next-icon" />,
  nextLabel: "Next",
};

function isVisible(element: HTMLElement) {
  if (
    !element ||
    !element.style ||
    !element.parentNode ||
    // @ts-ignore
    !element.parentNode.style
  ) {
    return false;
  }

  const elementStyle = getComputedStyle(element);

  return (
    elementStyle.display !== "none" &&
    elementStyle.visibility !== "hidden" &&
    getComputedStyle(element.parentNode as HTMLElement).display !== "none"
  );
}

const Carousel: BsPrefixRefForwardingComponent<"div", CarouselProps> = (
  p: CarouselProps
) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "bsPrefix",
    "slide",
    "fade",
    "controls",
    "indicators",
    "indicatorLabels",
    "activeIndex",
    "defaultActiveIndex",
    "onSelect",
    "onSlide",
    "onSlid",
    "interval",
    "keyboard",
    "onKeyDown",
    "pause",
    "onMouseOver",
    "onMouseOut",
    "wrap",
    "touch",
    "onTouchStart",
    "onTouchMove",
    "onTouchEnd",
    "prevIcon",
    "prevLabel",
    "nextIcon",
    "nextLabel",
    "variant",
    "className",
    "children",
    "ref",
  ]);

  const [activeIndex, onSelect] = createControlledProp(
    () => local.activeIndex,
    () => local.defaultActiveIndex,
    local.onSelect
  );

  const prefix = useBootstrapPrefix(local.bsPrefix, "carousel");
  const isRTL = useIsRTL();
  const childArray = createMemo(() => {
    const resolvedChildren = children(() => local.children);
    return [...(resolvedChildren() as Element[])];
  });

  const [nextDirectionRef, setNextDirectionRef] = createSignal<string | null>(
    null
  );
  const [direction, setDirection] = createSignal("next");
  const [paused, setPaused] = createSignal(false);
  const [isSliding, setIsSliding] = createSignal(false);
  const [renderedActiveIndex, setRenderedActiveIndex] = createSignal<number>(
    activeIndex() || 0
  );

  createEffect(() => {
    if (!isSliding() && activeIndex() !== renderedActiveIndex()) {
      if (nextDirectionRef()) {
        setDirection(nextDirectionRef()!);
      } else {
        setDirection(
          (activeIndex() || 0) > renderedActiveIndex() ? "next" : "prev"
        );
      }

      // if (local.slide) {
      //   setIsSliding(true);
      // }

      setRenderedActiveIndex(activeIndex() || 0);
    }
  });

  createEffect(() => {
    if (nextDirectionRef()) {
      setNextDirectionRef(null);
    }
  });

  let numChildren = 0;
  let activeChildInterval: number | undefined;

  // Iterate to grab all of the children's interval values
  // (and count them, too)
  createComputed(() => {
    numChildren = 0;
    for (let index = 0; index < childArray().length; index++) {
      ++numChildren;
      if (index === activeIndex()) {
        // @ts-ignore
        activeChildInterval = childArray()[index]["interval"] as
          | number
          | undefined;
      }
    }
  });

  const prev = (event?: any) => {
    if (isSliding()) {
      return;
    }

    let nextActiveIndex = renderedActiveIndex() - 1;
    if (nextActiveIndex < 0) {
      if (!local.wrap) {
        return;
      }

      nextActiveIndex = numChildren - 1;
    }

    setNextDirectionRef("prev");
    onSelect?.(nextActiveIndex, event);
  };
  // This is used in the setInterval, so it should not invalidate.
  const next = (event?: any) => {
    if (isSliding()) {
      return;
    }

    let nextActiveIndex = renderedActiveIndex() + 1;
    if (nextActiveIndex >= numChildren) {
      if (!local.wrap) {
        return;
      }

      nextActiveIndex = 0;
    }

    setNextDirectionRef("next");

    onSelect?.(nextActiveIndex, event);
  };

  const [elementRef, setElementRef] = createSignal<HTMLElement>();
  const mergedRef = (ref: HTMLElement) => {
    setElementRef(ref);
    if (typeof local.ref === "function") {
      local.ref(ref);
    }
  };

  // This is used in the setInterval, so it should not invalidate.
  const nextWhenVisible = () => {
    if (!document.hidden && isVisible(elementRef()!)) {
      if (isRTL) {
        prev();
      } else {
        next();
      }
    }
  };

  const slideDirection = direction() === "next" ? "start" : "end";

  createEffect(() => {
    if (local.slide) {
      // These callbacks will be handled by the <Transition> callbacks.
      return;
    }

    local.onSlide?.(renderedActiveIndex(), slideDirection);
    local.onSlid?.(renderedActiveIndex(), slideDirection);
  });

  const orderClassName = `${prefix}-item-${direction()}`;
  const directionalClassName = `${prefix}-item-${slideDirection}`;

  const handleEnter = (node: HTMLElement) => {
    triggerBrowserReflow(node);

    local.onSlide?.(renderedActiveIndex(), slideDirection);
  };

  const handleEntered = () => {
    setIsSliding(false);

    local.onSlid?.(renderedActiveIndex(), slideDirection);
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (
      local.keyboard &&
      !/input|textarea/i.test(
        //@ts-ignore
        event.target.tagName
      )
    ) {
      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          if (isRTL) {
            next(event);
          } else {
            prev(event);
          }
          return;
        case "ArrowRight":
          event.preventDefault();
          if (isRTL) {
            prev(event);
          } else {
            next(event);
          }
          return;
        default:
      }
    }

    callEventHandler(local.onKeyDown, event);
  };

  const handleMouseOver = (event: Event) => {
    if (local.pause === "hover") {
      setPaused(true);
    }

    callEventHandler(local.onMouseOver, event);
  };

  const handleMouseOut = (event: Event) => {
    setPaused(false);

    callEventHandler(local.onMouseOut, event);
  };

  let touchStartXRef: number;
  let touchDeltaXRef: number;

  const handleTouchStart = (event: TouchEvent) => {
    touchStartXRef = event.touches[0].clientX;
    touchDeltaXRef = 0;

    if (local.pause === "hover") {
      setPaused(true);
    }

    callEventHandler(local.onTouchStart, event);
  };

  const handleTouchMove = (event: TouchEvent) => {
    if (event.touches && event.touches.length > 1) {
      touchDeltaXRef = 0;
    } else {
      touchDeltaXRef = event.touches[0].clientX - touchStartXRef;
    }

    callEventHandler(local.onTouchMove, event);
  };

  const handleTouchEnd = (event: TouchEvent) => {
    if (local.touch) {
      const touchDeltaX = touchDeltaXRef;

      if (Math.abs(touchDeltaX) > SWIPE_THRESHOLD) {
        if (touchDeltaX > 0) {
          prev(event);
        } else {
          next(event);
        }
      }
    }

    if (local.pause === "hover") {
      let touchUnpauseTimeout = window.setTimeout(() => {
        setPaused(false);
      }, local.interval);

      onCleanup(() => {
        if (touchUnpauseTimeout != null) {
          window.clearTimeout(touchUnpauseTimeout);
        }
      });
    }

    callEventHandler(local.onTouchEnd, event);
  };

  const shouldPlay = local.interval != null && !paused() && !isSliding();

  const [intervalHandleRef, setIntervalHandleRef] = createSignal<number>();

  createEffect(() => {
    if (!shouldPlay) {
      return undefined;
    }

    const nextFunc = isRTL ? prev : next;
    setIntervalHandleRef(
      window.setInterval(
        document.visibilityState ? nextWhenVisible : nextFunc,
        activeChildInterval ?? local.interval ?? undefined
      )
    );

    onCleanup(() => {
      if (intervalHandleRef() !== null) {
        clearInterval(intervalHandleRef());
      }
    });
  });

  // add effect to each child to update classes
  createEffect(() => {
    for (let index = 0; index < childArray().length; index++) {
      childArray()[index].classList.add("active");
      // createEffect(() => {
      //   if (index === renderedActiveIndex()) {
      //     childArray()[index].classList.add("active");
      //   } else {
      //     childArray()[index].classList.remove("active");
      //   }
      // });
    }
  });

  return (
    <Dynamic
      component={local.as}
      ref={mergedRef}
      {...props}
      onKeyDown={handleKeyDown}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className={classNames(
        local.className,
        prefix,
        local.slide && "slide",
        local.fade && `${prefix}-fade`,
        local.variant && `${prefix}-${local.variant}`
      )}
    >
      {local.indicators && (
        <div className={`${prefix}-indicators`}>
          <For each={childArray()}>
            {(_, index: Accessor<number>) => (
              <button
                type="button"
                data-bs-target="" // Bootstrap requires this in their css.
                aria-label={
                  local.indicatorLabels?.length
                    ? local.indicatorLabels[index()]
                    : `Slide ${index() + 1}`
                }
                className={
                  index() === renderedActiveIndex() ? "active" : undefined
                }
                onClick={(e) => onSelect?.(index(), e as any)}
                aria-current={index() === renderedActiveIndex()}
              />
            )}
          </For>
        </div>
      )}

      <div className={`${prefix}-inner`}>
        <For each={childArray()}>
          {(child, index: Accessor<number>) => {
            return local.slide ? (
              <Transition
                // enterActiveClass={orderClassName}
                enterClass={"carousel-item-end"}
                // enterToClass={directionalClassName}
                // exitActiveClass={directionalClassName}
                // exitClass={orderClassName}
                exitToClass={directionalClassName}
              >
                {index() === renderedActiveIndex() && child}
              </Transition>
            ) : (
              child
            );
          }}
        </For>
      </div>

      {local.controls && (
        <>
          {(local.wrap || activeIndex() !== 0) && (
            <Anchor className={`${prefix}-control-prev`} onClick={prev}>
              {local.prevIcon}
              {local.prevLabel && (
                <span className="visually-hidden">{local.prevLabel}</span>
              )}
            </Anchor>
          )}
          {(local.wrap || activeIndex() !== numChildren - 1) && (
            <Anchor className={`${prefix}-control-next`} onClick={next}>
              {local.nextIcon}
              {local.nextLabel && (
                <span className="visually-hidden">{local.nextLabel}</span>
              )}
            </Anchor>
          )}
        </>
      )}
    </Dynamic>
  );
};

export default Object.assign(Carousel, {
  Caption: CarouselCaption,
  Item: CarouselItem,
});
