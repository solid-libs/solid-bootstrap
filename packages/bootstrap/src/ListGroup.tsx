import {JSX, mergeProps, splitProps} from "solid-js";
import classNames from "./classnames";
import {
  createControlledProp,
  EventKey,
  Nav as BaseNav,
  NavProps as BaseNavProps,
} from "solid-bootstrap-core";
import {useBootstrapPrefix} from "./ThemeProvider";
import ListGroupItem from "./ListGroupItem";
import {BsPrefixProps, BsPrefixRefForwardingComponent} from "./helpers";

export interface ListGroupProps extends BsPrefixProps, BaseNavProps {
  variant?: "flush";
  horizontal?: boolean | string | "sm" | "md" | "lg" | "xl" | "xxl";
  defaultActiveKey?: EventKey;
  numbered?: boolean;
}

const defaultProps = {
  as: "div",
};

const ListGroup: BsPrefixRefForwardingComponent<"div", ListGroupProps> = (p: ListGroupProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "activeKey",
    "defaultActiveKey",
    "bsPrefix",
    "class",
    "className",
    "variant",
    "horizontal",
    "numbered",
    "onSelect",
  ]);

  const [activeKey, onSelect] = createControlledProp(
    () => local.activeKey,
    () => local.defaultActiveKey,
    local.onSelect,
  );
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "list-group");

  let horizontalVariant: string | undefined;
  if (local.horizontal) {
    horizontalVariant = local.horizontal === true ? "horizontal" : `horizontal-${local.horizontal}`;
  }

  return (
    <BaseNav
      as={local.as}
      {...props}
      activeKey={activeKey()}
      onSelect={onSelect}
      class={classNames(
        local.class,
        local.className,
        bsPrefix,
        local.variant && `${bsPrefix}-${local.variant}`,
        horizontalVariant && `${bsPrefix}-${horizontalVariant}`,
        local.numbered && `${bsPrefix}-numbered`,
      )}
    />
  );
};

export default Object.assign(ListGroup, {
  Item: ListGroupItem,
});
