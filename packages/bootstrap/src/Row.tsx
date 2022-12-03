import {JSX, mergeProps, splitProps} from "solid-js";
import classNames from "./classnames";
import {useBootstrapPrefix, useBootstrapBreakpoints} from "./ThemeProvider";
import {BsPrefixProps, BsPrefixRefForwardingComponent} from "./helpers";
import {Dynamic} from "solid-js/web";

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
type RowColumns = RowColWidth | {cols?: RowColWidth};

export interface RowProps extends BsPrefixProps, JSX.HTMLAttributes<HTMLElement> {
  xs?: RowColumns;
  sm?: RowColumns;
  md?: RowColumns;
  lg?: RowColumns;
  xl?: RowColumns;
  xxl?: RowColumns;
  [key: string]: any;
}

const defaultProps: Partial<RowProps> = {
  as: "div",
};

const Row: BsPrefixRefForwardingComponent<"div", RowProps> = (p: RowProps) => {
  const breakpoints = useBootstrapBreakpoints();
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "bsPrefix",
    "class",
    ...breakpoints(),
  ]);
  const decoratedBsPrefix = useBootstrapPrefix(local.bsPrefix, "row");
  const sizePrefix = `${decoratedBsPrefix}-cols`;
  const classes: string[] = [];

  breakpoints().forEach((brkPoint) => {
    const propValue = local[brkPoint];
    let cols;
    if (propValue != null && typeof propValue === "object") {
      ({cols} = propValue);
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
      class={classNames(local.class, decoratedBsPrefix, ...classes)}
    />
  );
};

export default Row;
