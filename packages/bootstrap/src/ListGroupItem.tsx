import {createMemo, JSX, mergeProps, splitProps} from "solid-js";
import classNames from "./classnames";
import {makeEventKey, useNavItem, NavItemProps as BaseNavItemProps} from "solid-bootstrap-core";
import {useBootstrapPrefix} from "./ThemeProvider";
import {BsPrefixProps, BsPrefixRefForwardingComponent} from "./helpers";
import {Variant} from "./types";
import {Dynamic} from "solid-js/web";

export interface ListGroupItemProps extends Omit<BaseNavItemProps, "onSelect">, BsPrefixProps {
  action?: boolean;
  onClick?: JSX.EventHandlerUnion<HTMLElement, MouseEvent>;
  variant?: Variant;
}

const defaultProps = {};

const ListGroupItem: BsPrefixRefForwardingComponent<"a", ListGroupItemProps> = (
  p: ListGroupItemProps,
) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "bsPrefix",
    "active",
    "disabled",
    "eventKey",
    "class",
    "className",
    "variant",
    "action",
  ]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "list-group-item");
  const [navItemProps, meta] = useNavItem(
    mergeProps(
      {
        get key() {
          return makeEventKey(local.eventKey, props.href);
        },
        get active() {
          return local.active;
        },
      },
      props,
    ),
  );

  const handleClick = createMemo(() => (event: MouseEvent) => {
    if (local.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    navItemProps.onClick(event);
  });

  const disabledProps = () =>
    local.disabled && props.tabIndex === undefined
      ? {
          tabIndex: -1,
          ["aria-disabled"]: true,
        }
      : {};

  return (
    <Dynamic
      component={local.as || (local.action ? (props.href ? "a" : "button") : "div")}
      {...props}
      {...navItemProps}
      {...disabledProps()}
      onClick={handleClick()}
      class={classNames(
        local.class,
        local.className,
        bsPrefix,
        meta.isActive && "active",
        local.disabled && "disabled",
        local.variant && `${bsPrefix}-${local.variant}`,
        local.action && `${bsPrefix}-action`,
      )}
    />
  );
};

export default ListGroupItem;
