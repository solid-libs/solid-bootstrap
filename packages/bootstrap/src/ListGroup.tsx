import { JSX, mergeProps, splitProps } from "solid-js";
import classNames from "classnames";
import warning from "warning";
import { createControlledProp } from "solid-bootstrap-core/createControlledProp";
import BaseNav, { NavProps as BaseNavProps } from "solid-bootstrap-core/Nav";
import { EventKey } from "solid-bootstrap-core/types";
import { useBootstrapPrefix } from "./ThemeProvider";
import ListGroupItem from "./ListGroupItem";
import { BsPrefixProps, BsPrefixRefForwardingComponent } from "./helpers";

export interface ListGroupProps extends BsPrefixProps, BaseNavProps {
  variant?: "flush";
  horizontal?: boolean | "sm" | "md" | "lg" | "xl" | "xxl";
  defaultActiveKey?: EventKey;
  numbered?: boolean;
}

const defaultProps = {
  as: "div",
};

const ListGroup: BsPrefixRefForwardingComponent<"div", ListGroupProps> = (
  p: ListGroupProps
) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "activeKey",
    "defaultActiveKey",
    "bsPrefix",
    "className",
    "variant",
    "horizontal",
    "numbered",
    "onSelect",
  ]);

  const [activeKey, onSelect] = createControlledProp(
    () => local.activeKey,
    () => local.defaultActiveKey,
    local.onSelect
  );
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "list-group");

  let horizontalVariant: string | undefined;
  if (local.horizontal) {
    horizontalVariant =
      local.horizontal === true
        ? "horizontal"
        : `horizontal-${local.horizontal}`;
  }

  warning(
    !(local.horizontal && local.variant === "flush"),
    '`variant="flush"` and `horizontal` should not be used together.'
  );

  return (
    <BaseNav
      as={local.as}
      {...props}
      activeKey={activeKey()}
      onSelect={onSelect}
      className={classNames(
        local.className,
        bsPrefix,
        local.variant && `${bsPrefix}-${local.variant}`,
        horizontalVariant && `${bsPrefix}-${horizontalVariant}`,
        local.numbered && `${bsPrefix}-numbered`
      )}
    />
  );
};

export default Object.assign(ListGroup, {
  Item: ListGroupItem,
});
