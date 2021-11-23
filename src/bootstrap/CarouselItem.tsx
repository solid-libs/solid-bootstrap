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

const defaultProps = {
  as: "div",
};

const CarouselItem: BsPrefixRefForwardingComponent<"div", CarouselItemProps> = (
  p: CarouselItemProps
) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "bsPrefix",
    "className",
  ]);
  return (
    <Dynamic
      component={local.as}
      {...props}
      className={classNames(
        local.className,
        useBootstrapPrefix(local.bsPrefix, "carousel-item")
      )}
    />
  );
};

export default CarouselItem;
