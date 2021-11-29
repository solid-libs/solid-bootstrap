import { JSX, mergeProps, splitProps } from "solid-js";
import classNames from "classnames";
import Anchor from "solid-bootstrap-core/Anchor";
import { BsPrefixProps, BsPrefixRefForwardingComponent } from "./helpers";
import { Dynamic } from "solid-js/web";

export interface PageItemProps
  extends Omit<JSX.HTMLAttributes<HTMLElement>, "ref">,
    BsPrefixProps {
  disabled?: boolean;
  active?: boolean;
  activeLabel?: string;
  href?: string;
  ref?: JSX.HTMLAttributes<HTMLLIElement>["ref"];
}

const defaultProps = {
  active: false,
  disabled: false,
  activeLabel: "(current)",
};

const PageItem: BsPrefixRefForwardingComponent<"li", PageItemProps> = (
  p: PageItemProps
) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "active",
    "disabled",
    "className",
    "style",
    "activeLabel",
    "children",
    "ref",
  ]);
  return (
    <li
      ref={local.ref}
      style={local.style}
      className={classNames(local.className, "page-item", {
        active: local.active,
        disabled: local.disabled,
      })}
    >
      <Dynamic
        component={local.active || local.disabled ? "span" : Anchor}
        className="page-link"
        disabled={local.disabled}
        {...props}
      >
        {local.children}
        {local.active && local.activeLabel && (
          <span className="visually-hidden">{local.activeLabel}</span>
        )}
      </Dynamic>
    </li>
  );
};

export default PageItem;

function createButton(name: string, defaultValue: JSX.Element, label = name) {
  function Button({ children, ...props }: PageItemProps) {
    return (
      <PageItem {...props}>
        <span aria-hidden="true">{children || defaultValue}</span>
        <span className="visually-hidden">{label}</span>
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
