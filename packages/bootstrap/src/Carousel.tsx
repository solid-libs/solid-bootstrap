import {
  Accessor,
  batch,
  children,
  createComputed,
  createEffect,
  createMemo,
  createSelector,
  createSignal,
  For,
  JSX,
  mergeProps,
  onCleanup,
  splitProps,
} from "solid-js";
import {Anchor, callEventHandler, createControlledProp, resolveClasses} from "solid-bootstrap-core";
import classNames from "./classnames";
import CarouselCaption from "./CarouselCaption";
import CarouselItem, {CarouselItemReturnType} from "./CarouselItem";
import {useBootstrapPrefix, useIsRTL} from "./ThemeProvider";
import transitionEndListener from "./transitionEndListener";
import triggerBrowserReflow from "./triggerBrowserReflow";
import {BsPrefixProps, BsPrefixRefForwardingComponent} from "./helpers";
import {Dynamic} from "solid-js/web";
import TransitionWrapper from "./TransitionWrapper";
import {TransitionStatus} from "solid-react-transition";

export type CarouselVariant = "dark";

export interface CarouselProps
  extends BsPrefixProps,
    Omit<JSX.HTMLAttributes<HTMLElement>, "onSelect" | "ref"> {
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
  ref?: (r: {
    element: () => HTMLElement;
    prev: (event?: any) => void;
    next: (event?: any) => void;
  }) => void;
}

type ItemWithClasses = CarouselItemReturnType & {
  prevClasses: string;
};

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
  prevLabel: "Previous",
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

const Carousel: BsPrefixRefForwardingComponent<"div", CarouselProps> = (p: CarouselProps) => {
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
    local.onSelect,
  );

  const prefix = useBootstrapPrefix(local.bsPrefix, "carousel");
  const isRTL = useIsRTL();
  const resolvedChildren = children(() => local.children);
  const items = createMemo(() => {
    const c = resolvedChildren();
    return (Array.isArray(c) ? c : [c]) as unknown as CarouselItemReturnType[];
  });

  const [nextDirectionRef, setNextDirectionRef] = createSignal<string | null>(null);
  const [direction, setDirection] = createSignal("next");
  const [paused, setPaused] = createSignal(false);
  const [isSliding, setIsSliding] = createSignal(false);
  const [renderedActiveIndex, setRenderedActiveIndex] = createSignal<number>(activeIndex() || 0);

  createComputed(() =>
    batch(() => {
      if (!isSliding() && activeIndex() !== renderedActiveIndex()) {
        if (nextDirectionRef()) {
          setDirection(nextDirectionRef()!);
        } else {
          setDirection((activeIndex() || 0) > renderedActiveIndex() ? "next" : "prev");
        }
        if (local.slide) {
          setIsSliding(true);
        }
        setRenderedActiveIndex(activeIndex() || 0);
      }
    }),
  );

  createEffect(() => {
    if (nextDirectionRef()) {
      setNextDirectionRef(null);
    }
  });

  // Iterate to grab all of the children's interval values
  // (and count them, too)
  const activeChildInterval = createMemo<number | undefined>(() => {
    for (let index = 0; index < items().length; index++) {
      if (index === activeIndex()) {
        const item = items()[index];
        return item.interval;
      }
    }
    return undefined;
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
      nextActiveIndex = items().length - 1;
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
    if (nextActiveIndex >= items().length) {
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
      local.ref({
        get element() {
          return elementRef();
        },
        prev,
        next,
      } as any);
    }
  };

  // This is used in the setInterval, so it should not invalidate.
  const nextWhenVisible = () => {
    if (!document.hidden && isVisible(elementRef()!)) {
      if (isRTL()) {
        prev();
      } else {
        next();
      }
    }
  };

  const slideDirection = createMemo(() => (direction() === "next" ? "start" : "end"));

  createEffect(() => {
    if (local.slide) {
      // These callbacks will be handled by the <Transition> callbacks.
      return;
    }

    local.onSlide?.(renderedActiveIndex(), slideDirection());
    local.onSlid?.(renderedActiveIndex(), slideDirection());
  });

  const orderClassName = createMemo(() => `${prefix}-item-${direction()}`);
  const directionalClassName = createMemo(() => `${prefix}-item-${slideDirection()}`);

  const handleEnter = (node: any) => {
    triggerBrowserReflow(node!);
    local.onSlide?.(renderedActiveIndex(), slideDirection());
  };

  const handleEntered = () => {
    setIsSliding(false);
    local.onSlid?.(renderedActiveIndex(), slideDirection());
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (
      local.keyboard &&
      !/input|textarea/i.test(
        //@ts-ignore
        event.target.tagName,
      )
    ) {
      switch (event.key) {
        case "ArrowLeft":
          event.preventDefault();
          if (isRTL()) {
            next(event);
          } else {
            prev(event);
          }
          return;
        case "ArrowRight":
          event.preventDefault();
          if (isRTL()) {
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
        window.clearTimeout(touchUnpauseTimeout);
      });
    }
    callEventHandler(local.onTouchEnd, event);
  };

  const shouldPlay = createMemo(() => local.interval != null && !paused() && !isSliding());

  const [intervalHandleRef, setIntervalHandleRef] = createSignal<number>();

  createEffect(() => {
    if (!shouldPlay()) {
      return undefined;
    }

    const nextFunc = isRTL() ? prev : next;
    setIntervalHandleRef(
      window.setInterval(
        document.visibilityState ? nextWhenVisible : nextFunc,
        activeChildInterval() ?? local.interval ?? undefined,
      ),
    );

    onCleanup(() => {
      if (intervalHandleRef() !== null) {
        clearInterval(intervalHandleRef());
      }
    });
  });

  const isActive = createSelector(renderedActiveIndex);

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
        local.variant && `${prefix}-${local.variant}`,
      )}
    >
      {local.indicators && (
        <div className={`${prefix}-indicators`}>
          <For each={items()}>
            {(_, index: Accessor<number>) => (
              <button
                type="button"
                data-bs-target="" // Bootstrap requires this in their css.
                aria-label={
                  local.indicatorLabels?.length
                    ? local.indicatorLabels[index()]
                    : `Slide ${index() + 1}`
                }
                className={isActive(index()) ? "active" : undefined}
                onClick={(e) => onSelect?.(index(), e as any)}
                aria-current={isActive(index())}
              />
            )}
          </For>
        </div>
      )}

      <div className={`${prefix}-inner`}>
        <For<ItemWithClasses, JSX.Element> each={items() as ItemWithClasses[]}>
          {(child, index: Accessor<number>) => {
            const el = (child.item as () => HTMLElement)();
            return local.slide ? (
              <TransitionWrapper
                in={isActive(index())}
                onEnter={isActive(index()) ? handleEnter : undefined}
                onEntered={isActive(index()) ? handleEntered : undefined}
                addEndListener={transitionEndListener}
              >
                {
                  ((status: TransitionStatus, innerProps: {ref: (el: HTMLElement) => void}) => {
                    innerProps.ref(el);
                    const newClasses = classNames(
                      isActive(index()) && status !== "entered" && orderClassName(),
                      (status === "entered" || status === "exiting") && "active",
                      (status === "entering" || status === "exiting") && directionalClassName(),
                    );
                    resolveClasses(el, child.prevClasses, newClasses);
                    child.prevClasses = newClasses;
                    return el;
                  }) as unknown as JSX.FunctionElement
                }
              </TransitionWrapper>
            ) : (
              () => {
                createEffect(() => {
                  el.classList.toggle("active", isActive(index()));
                });
                return el;
              }
            );
          }}
        </For>
      </div>

      {local.controls && (
        <>
          {(local.wrap || activeIndex() !== 0) && (
            <Anchor className={`${prefix}-control-prev`} onClick={prev}>
              {local.prevIcon ?? <span aria-hidden="true" className="carousel-control-prev-icon" />}
              {local.prevLabel && <span className="visually-hidden">{local.prevLabel}</span>}
            </Anchor>
          )}
          {(local.wrap || activeIndex() !== items().length - 1) && (
            <Anchor className={`${prefix}-control-next`} onClick={next}>
              {local.nextIcon ?? <span aria-hidden="true" className="carousel-control-next-icon" />}
              {local.nextLabel && <span className="visually-hidden">{local.nextLabel}</span>}
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
