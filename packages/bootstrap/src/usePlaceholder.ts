import classNames from "./classnames";
import {useBootstrapPrefix} from "./ThemeProvider";
import {useCol, ColProps} from "./Col";
import {Variant} from "./types";

export type PlaceholderAnimation = "glow" | "wave";
export type PlaceholderSize = "xs" | "sm" | "lg";

export interface UsePlaceholderProps extends Omit<ColProps, "as"> {
  animation?: PlaceholderAnimation;
  bg?: Variant;
  size?: PlaceholderSize;
}

export default function usePlaceholder({
  animation,
  bg,
  bsPrefix,
  size,
  ...props
}: UsePlaceholderProps) {
  bsPrefix = useBootstrapPrefix(bsPrefix, "placeholder");
  const [{class: class_, className, ...colProps}] = useCol(props);

  return {
    ...colProps,
    class: classNames(
      class_,
      className,
      animation ? `${bsPrefix}-${animation}` : bsPrefix,
      size && `${bsPrefix}-${size}`,
      bg && `bg-${bg}`,
    ),
  };
}
