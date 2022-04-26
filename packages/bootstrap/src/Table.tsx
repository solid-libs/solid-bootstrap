import {JSX, mergeProps, splitProps} from "solid-js";
import classNames from "./classnames";
import {useBootstrapPrefix} from "./ThemeProvider";

import {BsPrefixOnlyProps} from "./helpers";

export interface TableProps extends BsPrefixOnlyProps, JSX.HTMLAttributes<HTMLTableElement> {
  striped?: boolean;
  bordered?: boolean;
  borderless?: boolean;
  hover?: boolean;
  size?: string;
  variant?: string;
  responsive?: boolean | string;
}

const defaultProps = {};

const Table = (p: TableProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "bsPrefix",
    "class",
    "className",
    "striped",
    "bordered",
    "borderless",
    "hover",
    "size",
    "variant",
    "responsive",
  ]);
  const decoratedBsPrefix = useBootstrapPrefix(local.bsPrefix, "table");
  const classes = () =>
    classNames(
      local.class,
      local.className,
      decoratedBsPrefix,
      local.variant && `${decoratedBsPrefix}-${local.variant}`,
      local.size && `${decoratedBsPrefix}-${local.size}`,
      local.striped && `${decoratedBsPrefix}-striped`,
      local.bordered && `${decoratedBsPrefix}-bordered`,
      local.borderless && `${decoratedBsPrefix}-borderless`,
      local.hover && `${decoratedBsPrefix}-hover`,
    );

  const table = () => (
    <table {...props} class={classes()}/>
  );
  if (local.responsive) {
    let responsiveClass = `${decoratedBsPrefix}-responsive`;
    if (typeof local.responsive === "string") {
      responsiveClass = `${responsiveClass}-${local.responsive}`;
    }
    return <div class={responsiveClass}>{table}</div>;
  }

  return table;
};

export default Table;
