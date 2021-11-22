import { JSX, mergeProps, splitProps } from "solid-js";
import classNames from "classnames";
import { useBootstrapPrefix } from "./ThemeProvider";
import {
  BsPrefixProps,
  BsPrefixRefForwardingComponent,
  ElementType,
} from "./helpers";
import { Dynamic } from "solid-js/web";

type NumberAttr =
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
  | "12";

type ColOrderNumber = number | "1" | "2" | "3" | "4" | "5";
type ColOrder = ColOrderNumber | "first" | "last";
type ColSize = boolean | "auto" | NumberAttr;
type ColSpec =
  | ColSize
  | { span?: ColSize; offset?: NumberAttr; order?: ColOrder };

export interface ColProps
  extends BsPrefixProps,
    JSX.HTMLAttributes<HTMLElement> {
  xs?: ColSpec;
  sm?: ColSpec;
  md?: ColSpec;
  lg?: ColSpec;
  xl?: ColSpec;
  xxl?: ColSpec;
}

const DEVICE_SIZES = ["xxl", "xl", "lg", "md", "sm", "xs"] as const;

export interface UseColMetadata {
  as?: ElementType;
  bsPrefix: string;
  spans: string[];
}

export function useCol(o: ColProps): [any, UseColMetadata] {
  const [local, props] = splitProps(o, ["as", "bsPrefix", "className"]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "col");

  const spans: string[] = [];
  const classes: string[] = [];

  DEVICE_SIZES.forEach((brkPoint) => {
    const propValue = props[brkPoint];
    delete props[brkPoint];

    let span: ColSize | undefined;
    let offset: NumberAttr | undefined;
    let order: ColOrder | undefined;

    if (typeof propValue === "object" && propValue != null) {
      ({ span, offset, order } = propValue);
    } else {
      span = propValue;
    }

    const infix = brkPoint !== "xs" ? `-${brkPoint}` : "";

    if (span)
      spans.push(
        span === true ? `${bsPrefix}${infix}` : `${bsPrefix}${infix}-${span}`
      );

    if (order != null) classes.push(`order${infix}-${order}`);
    if (offset != null) classes.push(`offset${infix}-${offset}`);
  });

  return [
    mergeProps(props, {
      className: classNames(local.className, ...spans, ...classes),
    }),
    {
      get as() {
        return local.as;
      },
      get bsPrefix() {
        return local.bsPrefix!;
      },
      get spans() {
        return spans;
      },
    },
  ];
}

const Col: BsPrefixRefForwardingComponent<"div", ColProps> = (
  props: ColProps
) => {
  const [{ className, ...colProps }, { as = "div", bsPrefix, spans }] =
    useCol(props);

  return (
    <Dynamic
      component={as}
      {...colProps}
      className={classNames(className, !spans.length && bsPrefix)}
    />
  );
};

export default Col;
