import { JSX, mergeProps, splitProps } from "solid-js";
import classNames from "classnames";

import { useBootstrapPrefix } from "./ThemeProvider";
import PageItem, { Ellipsis, First, Last, Next, Prev } from "./PageItem";
import { BsPrefixProps } from "./helpers";

type PaginationSize = "sm" | "lg";

export interface PaginationProps
  extends BsPrefixProps,
    JSX.HTMLAttributes<HTMLUListElement> {
  size?: "sm" | "lg";
}

const defaultProps = {};

/**
 * @property {PageItem} Item
 * @property {PageItem} First
 * @property {PageItem} Prev
 * @property {PageItem} Ellipsis
 * @property {PageItem} Next
 * @property {PageItem} Last
 */
const Pagination = (p: PaginationProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "bsPrefix",
    "className",
    "size",
  ]);
  const decoratedBsPrefix = useBootstrapPrefix(local.bsPrefix, "pagination");
  return (
    <ul
      {...props}
      className={classNames(
        local.className,
        decoratedBsPrefix,
        local.size && `${decoratedBsPrefix}-${local.size}`
      )}
    />
  );
};

export default Object.assign(Pagination, {
  First,
  Prev,
  Ellipsis,
  Item: PageItem,
  Next,
  Last,
});
