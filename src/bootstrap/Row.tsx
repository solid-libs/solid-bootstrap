import { JSX, mergeProps, splitProps } from "solid-js";
import classNames from "classnames";
import { useBootstrapPrefix } from "./ThemeProvider";
import { BsPrefixProps, BsPrefixRefForwardingComponent } from "./helpers";
import { Dynamic } from "solid-js/web";

type RowColWidth =
  | number
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "auto";
type RowColumns = RowColWidth | { cols?: RowColWidth };

export interface RowProps
  extends BsPrefixProps,
    JSX.HTMLAttributes<HTMLElement> {
  xs?: RowColumns;
  sm?: RowColumns;
  md?: RowColumns;
  lg?: RowColumns;
  xl?: RowColumns;
  xxl?: RowColumns;
}

const DEVICE_SIZES = ["xxl", "xl", "lg", "md", "sm", "xs"] as const;

const defaultProps = {
  as: "div",
};

const Row: BsPrefixRefForwardingComponent<"div", RowProps> = (p: RowProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "bsPrefix",
    "className",
  ]);
  const decoratedBsPrefix = useBootstrapPrefix(local.bsPrefix, "row");
  const sizePrefix = `${decoratedBsPrefix}-cols`;
  const classes: string[] = [];

  DEVICE_SIZES.forEach((brkPoint) => {
    const propValue = props[brkPoint];
    delete props[brkPoint];

    let cols;
    if (propValue != null && typeof propValue === "object") {
      ({ cols } = propValue);
    } else {
      cols = propValue;
    }

    const infix = brkPoint !== "xs" ? `-${brkPoint}` : "";

    if (cols != null) classes.push(`${sizePrefix}${infix}-${cols}`);
  });

  return (
    <Dynamic
      component={local.as}
      {...props}
      className={classNames(local.className, decoratedBsPrefix, ...classes)}
    />
  );
};

export default Row;
