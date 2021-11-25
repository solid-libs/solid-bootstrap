import { JSX, mergeProps, splitProps } from "solid-js";
import classNames from "classnames";
import BaseDropdownItem, {
  useDropdownItem,
  DropdownItemProps as BaseDropdownItemProps,
} from "../core/DropdownItem";
import Anchor, { AnchorProps } from "../core/Anchor";
import { useBootstrapPrefix } from "./ThemeProvider";
import { BsPrefixProps, BsPrefixRefForwardingComponent } from "./helpers";
import { Dynamic } from "solid-js/web";

export interface DropdownItemProps
  extends BaseDropdownItemProps<HTMLElement>,
    BsPrefixProps {}

const defaultProps = {
  as: Anchor,
  disabled: false,
};

const DropdownItem: BsPrefixRefForwardingComponent<
  typeof BaseDropdownItem,
  DropdownItemProps
> = (p: DropdownItemProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "bsPrefix",
    "className",
    "eventKey",
    "disabled",
    "onClick",
    "active",
  ]);
  const prefix = useBootstrapPrefix(local.bsPrefix, "dropdown-item");
  const [dropdownItemProps, meta] = useDropdownItem({
    get key() {
      return local.eventKey;
    },
    get href() {
      return props.href;
    },
    get disabled() {
      return local.disabled;
    },
    get onClick() {
      return local.onClick;
    },
    get active() {
      return local.active;
    },
  });

  return (
    <Dynamic
      component={local.as}
      {...(props as AnchorProps)}
      {...dropdownItemProps}
      className={classNames(
        local.className,
        prefix,
        meta.isActive && "active",
        local.disabled && "disabled"
      )}
    />
  );
};

export default DropdownItem;
