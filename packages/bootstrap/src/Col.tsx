import {JSX, mergeProps, splitProps} from "solid-js";
import classNames from "./classnames";
import {useBootstrapPrefix, useBootstrapBreakpoints} from "./ThemeProvider";
import {BsPrefixProps, BsPrefixRefForwardingComponent, ElementType} from "./helpers";
import {Dynamic} from "solid-js/web";

type NumberAttr = number | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";

type ColOrderNumber = number | "1" | "2" | "3" | "4" | "5";
type ColOrder = ColOrderNumber | "first" | "last";
type ColSize = boolean | "auto" | NumberAttr;
type ColSpec = ColSize | {span?: ColSize; offset?: NumberAttr; order?: ColOrder};

export interface ColProps extends BsPrefixProps, JSX.HTMLAttributes<HTMLElement> {
  xs?: ColSpec;
  sm?: ColSpec;
  md?: ColSpec;
  lg?: ColSpec;
  xl?: ColSpec;
  xxl?: ColSpec;
  [key: string]: any;
}

const DEVICE_SIZES = ["xxl", "xl", "lg", "md", "sm", "xs"] as const;

export interface UseColMetadata {
  as?: ElementType;
  bsPrefix: string;
  spans: string[];
}

export function useCol(o: ColProps): [any, UseColMetadata] {
  const [local, props] = splitProps(o, [
    "as",
    "bsPrefix",
    "class",
    "className"
  ]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "col");
  const breakpoints = useBootstrapBreakpoints();

  const spans: string[] = [];
  const classes: string[] = [];

  breakpoints().forEach((brkPoint) => {
    const propValue = props[brkPoint];

    let span: ColSize | undefined;
    let offset: NumberAttr | undefined;
    let order: ColOrder | undefined;

    if (typeof propValue === "object" && propValue != null) {
      ({span, offset, order} = propValue);
    } else {
      span = propValue;
    }

    const infix = brkPoint !== "xs" ? `-${brkPoint}` : "";

    if (span) spans.push(span === true ? `${bsPrefix}${infix}` : `${bsPrefix}${infix}-${span}`);

    if (order != null) classes.push(`order${infix}-${order}`);
    if (offset != null) classes.push(`offset${infix}-${offset}`);
  });

  const [_, cleanedProps] = splitProps(props, DEVICE_SIZES as any);

  return [
    mergeProps(cleanedProps, {
      get class() {
        return classNames(local.class, local.className, ...spans, ...classes);
      },
    }),
    {
      get as() {
        return local.as;
      },
      get bsPrefix() {
        return bsPrefix;
      },
      get spans() {
        return spans;
      },
    },
  ];
}

const Col: BsPrefixRefForwardingComponent<"div", ColProps> = (p: ColProps) => {
  const [useProps, meta] = useCol(p);
  const [local, colProps] = splitProps(useProps, ["class", "className"]);

  return (
    <Dynamic
      component={meta.as ?? "div"}
      {...colProps}
      class={classNames(local.class, local.className, !meta.spans.length && meta.bsPrefix)}
    />
  );
};

export default Col;
