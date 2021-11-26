import { JSX, mergeProps, splitProps } from "solid-js";
import classNames from "classnames";
import { useBootstrapPrefix } from "./ThemeProvider";
import { BsPrefixProps, BsPrefixRefForwardingComponent } from "./helpers";
import { Dynamic } from "solid-js/web";

export interface CarouselItemProps
  extends BsPrefixProps,
    JSX.HTMLAttributes<HTMLElement> {
  interval?: number;
}

export type CarouselItemReturnType = ReturnType<typeof CarouselItem>;

const defaultProps = {
  as: "div",
};

const CarouselItem = (p: CarouselItemProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "bsPrefix",
    "className",
    "interval",
  ]);
  // custom response to allow <Carousel /> to access interval
  return {
    item: (
      <Dynamic
        component={local.as}
        {...props}
        className={classNames(
          local.className,
          useBootstrapPrefix(local.bsPrefix, "carousel-item")
        )}
      />
    ),
    interval: local.interval,
  };
};

export default CarouselItem;
