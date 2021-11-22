import { JSX, mergeProps, Show, splitProps, useContext } from "solid-js";
import classNames from "classnames";
import {
  useDropdownMenu,
  UseDropdownMenuOptions,
} from "../overlays/DropdownMenu";
import { SelectCallback } from "../overlays/types";
import warning from "warning";
import DropdownContext, { DropDirection } from "./DropdownContext";
import InputGroupContext from "./InputGroupContext";
import NavbarContext from "./NavbarContext";
import { useBootstrapPrefix } from "./ThemeProvider";
import { BsPrefixProps, BsPrefixRefForwardingComponent } from "./helpers";
import { AlignType, AlignDirection, Placement } from "./types";
import { OffsetValue } from "../overlays/usePopper";
import { Dynamic } from "solid-js/web";

export type DropdownMenuVariant = "dark" | string;

export interface DropdownMenuProps
  extends BsPrefixProps,
    Omit<JSX.HTMLAttributes<HTMLElement>, "onSelect"> {
  show?: boolean;
  renderOnMount?: boolean;
  flip?: boolean;
  align?: AlignType;
  onSelect?: SelectCallback;
  ref?: (ref: HTMLElement) => void;
  rootCloseEvent?: "click" | "mousedown";
  popperConfig?: UseDropdownMenuOptions["popperConfig"];
  variant?: DropdownMenuVariant;
}

const defaultProps: Partial<DropdownMenuProps> = {
  as: "div",
  flip: true,
};

export function getDropdownMenuPlacement(
  alignEnd: boolean,
  dropDirection?: DropDirection,
  isRTL?: boolean
) {
  const topStart = isRTL ? "top-end" : "top-start";
  const topEnd = isRTL ? "top-start" : "top-end";
  const bottomStart = isRTL ? "bottom-end" : "bottom-start";
  const bottomEnd = isRTL ? "bottom-start" : "bottom-end";
  const leftStart = isRTL ? "right-start" : "left-start";
  const leftEnd = isRTL ? "right-end" : "left-end";
  const rightStart = isRTL ? "left-start" : "right-start";
  const rightEnd = isRTL ? "left-end" : "right-end";

  let placement: Placement = alignEnd ? bottomEnd : bottomStart;
  if (dropDirection === "up") placement = alignEnd ? topEnd : topStart;
  else if (dropDirection === "end")
    placement = alignEnd ? rightEnd : rightStart;
  else if (dropDirection === "start")
    placement = alignEnd ? leftEnd : leftStart;
  return placement;
}

const DropdownMenu: BsPrefixRefForwardingComponent<"div", DropdownMenuProps> = (
  p: DropdownMenuProps
) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "bsPrefix",
    "className",
    "align",
    "rootCloseEvent",
    "flip",
    "show",
    "renderOnMount",
    "popperConfig",
    "ref",
    "variant",
  ]);
  let alignEnd = false;
  const isNavbar = useContext(NavbarContext);
  const prefix = useBootstrapPrefix(local.bsPrefix, "dropdown-menu");
  const dropdownContext = useContext(DropdownContext);
  const align = local.align || dropdownContext.align;
  const isInputGroup = useContext(InputGroupContext);

  const alignClasses: string[] = [];
  if (align) {
    if (typeof align === "object") {
      const keys = Object.keys(align);

      warning(
        keys.length === 1,
        "There should only be 1 breakpoint when passing an object to `align`"
      );

      if (keys.length) {
        const brkPoint = keys[0];
        // @ts-ignore
        const direction: AlignDirection = align[brkPoint];

        // .dropdown-menu-end is required for responsively aligning
        // left in addition to align left classes.
        alignEnd = direction === "start";
        alignClasses.push(`${prefix}-${brkPoint}-${direction}`);
      }
    } else if (align === "end") {
      alignEnd = true;
    }
  }

  const [menuProps, menuMeta] = useDropdownMenu({
    get flip() {
      return local.flip;
    },
    get rootCloseEvent() {
      return local.rootCloseEvent;
    },
    get show() {
      return local.show;
    },
    get usePopper() {
      return !isNavbar && alignClasses.length === 0;
    },
    get offset() {
      return [0, 2] as OffsetValue;
    },
    get popperConfig() {
      return local.popperConfig;
    },
    get placement() {
      return getDropdownMenuPlacement(
        alignEnd,
        dropdownContext.drop,
        dropdownContext.isRTL
      );
    },
  });

  const mergedRef = (ref: HTMLButtonElement) => {
    menuProps.ref?.(ref);
    local.ref?.(ref);
  };

  // createEffect(() => {
  //   // Popper's initial position for the menu is incorrect when
  //   // renderOnMount=true. Need to call update() to correct it.
  //   if (menuMeta.show) menuMeta.popper?.update();
  // });

  const extendedMenuProps = mergeProps(
    menuProps,
    // For custom components provide additional, non-DOM, props;
    typeof local.as !== "string"
      ? {
          get show() {
            return menuMeta.show;
          },
          get close() {
            return () => menuMeta.toggle?.(false);
          },
          get align() {
            return align;
          },
        }
      : {}
  );

  // we don't need the default popper style,
  // menus are display: none when not shown.
  const style = () =>
    menuMeta.popper?.placement
      ? { ...(props.style as JSX.CSSProperties), ...menuProps.style }
      : props.style;

  return (
    <Show when={menuMeta.hasShown || local.renderOnMount || isInputGroup}>
      <Dynamic
        component={local.as}
        {...props}
        {...extendedMenuProps}
        ref={mergedRef}
        style={style()}
        {...(alignClasses.length || isNavbar
          ? {
              "data-bs-popper": "static",
            }
          : {})}
        className={classNames(
          local.className,
          prefix,
          menuMeta.show && "show",
          alignEnd && `${prefix}-end`,
          local.variant && `${prefix}-${local.variant}`,
          ...alignClasses
        )}
      />
    </Show>
  );
};

export default DropdownMenu;
