import { JSX, mergeProps, splitProps, useContext } from "solid-js";
import classNames from "classnames";
import BaseDropdown, {
  DropdownProps as BaseDropdownProps,
  ToggleMetadata,
} from "solid-bootstrap-core/Dropdown";
import { createControlledProp } from "solid-bootstrap-core/createControlledProp";
import DropdownContext, { DropDirection } from "./DropdownContext";
import DropdownItem from "./DropdownItem";
import DropdownMenu, { getDropdownMenuPlacement } from "./DropdownMenu";
import DropdownToggle from "./DropdownToggle";
import InputGroupContext from "./InputGroupContext";
import { useBootstrapPrefix, useIsRTL } from "./ThemeProvider";
import { createWithBsPrefix } from "./createWithBsPrefix";
import { BsPrefixProps, BsPrefixRefForwardingComponent } from "./helpers";
import { AlignType } from "./types";
import { Dynamic } from "solid-js/web";

const DropdownHeader = createWithBsPrefix("dropdown-header", {
  defaultProps: { role: "heading" },
});
const DropdownDivider = createWithBsPrefix("dropdown-divider", {
  Component: "hr",
  defaultProps: { role: "separator" },
});
const DropdownItemText = createWithBsPrefix("dropdown-item-text", {
  Component: "span",
});

export interface DropdownProps
  extends BaseDropdownProps,
    BsPrefixProps,
    Omit<JSX.HTMLAttributes<HTMLElement>, "onSelect" | "children"> {
  drop?: DropDirection;
  align?: AlignType;
  flip?: boolean;
  focusFirstItemOnShow?: boolean | "keyboard";
  navbar?: boolean;
  autoClose?: boolean | "outside" | "inside";
}

const defaultProps: Partial<DropdownProps> = {
  as: "div",
  navbar: false,
  align: "start",
  autoClose: true,
};

const Dropdown: BsPrefixRefForwardingComponent<"div", DropdownProps> = (p) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "bsPrefix",
    "drop",
    "show",
    "defaultShow",
    "className",
    "align",
    "onSelect",
    "onToggle",
    "focusFirstItemOnShow",
    "navbar",
    "autoClose",
  ]);
  const [show, onToggle] = createControlledProp(
    () => local.show,
    () => local.defaultShow,
    local.onToggle
  );
  const isInputGroup = useContext(InputGroupContext);
  const prefix = useBootstrapPrefix(local.bsPrefix, "dropdown");
  const isRTL = useIsRTL();

  const isClosingPermitted = (source: string): boolean => {
    // autoClose=false only permits close on button click
    if (local.autoClose === false) return source === "click";

    // autoClose=inside doesn't permit close on rootClose
    if (local.autoClose === "inside") return source !== "rootClose";

    // autoClose=outside doesn't permit close on select
    if (local.autoClose === "outside") return source !== "select";

    return true;
  };

  const handleToggle = (nextShow: boolean, meta: ToggleMetadata) => {
    if (
      // null option below is for "bug?" in Solid returning null instead of document
      (meta.originalEvent!.currentTarget === document ||
        meta.originalEvent!.currentTarget === null) &&
      (meta.source !== "keydown" ||
        (meta.originalEvent as any).key === "Escape")
    ) {
      meta.source = "rootClose";
    }
    if (isClosingPermitted(meta.source!)) onToggle?.(nextShow, meta);
  };

  const alignEnd = local.align === "end";
  const placement = getDropdownMenuPlacement(alignEnd, local.drop, isRTL);

  const contextValue = {
    get align() {
      return local.align;
    },
    get drop() {
      return local.drop;
    },
    get isRTL() {
      return isRTL;
    },
  };

  return (
    <DropdownContext.Provider value={contextValue}>
      <BaseDropdown
        placement={placement}
        show={show()}
        onSelect={local.onSelect}
        onToggle={handleToggle}
        focusFirstItemOnShow={local.focusFirstItemOnShow}
        itemSelector={`.${prefix}-item:not(.disabled):not(:disabled)`}
      >
        {isInputGroup ? (
          props.children
        ) : (
          <Dynamic
            component={local.as}
            {...props}
            className={classNames(
              local.className,
              show() && "show",
              (!local.drop || local.drop === "down") && prefix,
              local.drop === "up" && "dropup",
              local.drop === "end" && "dropend",
              local.drop === "start" && "dropstart"
            )}
          />
        )}
      </BaseDropdown>
    </DropdownContext.Provider>
  );
};

export default Object.assign(Dropdown, {
  Toggle: DropdownToggle,
  Menu: DropdownMenu,
  Item: DropdownItem,
  ItemText: DropdownItemText,
  Divider: DropdownDivider,
  Header: DropdownHeader,
});
