import {JSX, mergeProps, splitProps} from "solid-js";
import classNames from "./classnames";
import {Anchor} from "solid-bootstrap-core";
import {BsPrefixProps, BsPrefixRefForwardingComponent} from "./helpers";
import {Dynamic} from "solid-js/web";

export interface PageItemProps extends Omit<JSX.HTMLAttributes<HTMLElement>, "ref">, BsPrefixProps {
  disabled?: boolean;
  active?: boolean;
  activeLabel?: string;
  href?: string;
  ref?: JSX.HTMLAttributes<HTMLLIElement>["ref"];
}

const defaultProps: Partial<PageItemProps> = {
  active: false,
  disabled: false,
  activeLabel: "(current)",
};

const PageItem: BsPrefixRefForwardingComponent<"li", PageItemProps> = (p: PageItemProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "active",
    "disabled",
    "class",
    "style",
    "activeLabel",
    "children",
    "ref",
  ]);
  return (
    <li
      ref={local.ref}
      style={local.style}
      class={classNames(local.class, "page-item", {
        active: local.active,
        disabled: local.disabled,
      })}
    >
      <Dynamic
        component={local.active || local.disabled ? "span" : Anchor}
        class="page-link"
        disabled={local.disabled}
        {...props}
      >
        {local.children}
        {local.active && local.activeLabel && (
          <span class="visually-hidden">{local.activeLabel}</span>
        )}
      </Dynamic>
    </li>
  );
};

export default PageItem;

function createButton(name: string, defaultValue: JSX.Element, label = name) {
  function Button({children, ...props}: PageItemProps) {
    return (
      <PageItem {...props}>
        <span aria-hidden="true">{children || defaultValue}</span>
        <span class="visually-hidden">{label}</span>
      </PageItem>
    );
  }

  Button.displayName = name;

  return Button;
}

export const First = createButton("First", "«");
export const Prev = createButton("Prev", "‹", "Previous");
export const Ellipsis = createButton("Ellipsis", "…", "More");
export const Next = createButton("Next", "›");
export const Last = createButton("Last", "»");
