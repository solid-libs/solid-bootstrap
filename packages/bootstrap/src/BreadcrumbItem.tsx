import { JSX, mergeProps, splitProps } from "solid-js";
import classNames from "classnames";
import Anchor from "./Anchor";
import { useBootstrapPrefix } from "./ThemeProvider";
import {
  BsPrefixProps,
  BsPrefixRefForwardingComponent,
  ElementType,
} from "./helpers";
import { Dynamic } from "solid-js/web";

export interface BreadcrumbItemProps
  extends BsPrefixProps,
    Omit<JSX.HTMLAttributes<HTMLElement>, "title"> {
  active?: boolean;
  href?: string;
  linkAs?: ElementType;
  target?: string;
  title?: string;
  linkProps?: Record<string, any>; // the generic is to much work here
}

const defaultProps = {
  as: "li",
  active: false,
  linkAs: Anchor,
  linkProps: {},
};

const BreadcrumbItem: BsPrefixRefForwardingComponent<
  "li",
  BreadcrumbItemProps
> = (p: BreadcrumbItemProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "bsPrefix",
    "active",
    "children",
    "className",
    "as",
    "linkAs",
    "linkProps",
    "href",
    "title",
    "target",
  ]);
  const prefix = useBootstrapPrefix(local.bsPrefix, "breadcrumb-item");

  return (
    <Dynamic
      component={local.as}
      {...props}
      className={classNames(prefix, local.className, { active: local.active })}
      aria-current={local.active ? "page" : undefined}
    >
      {local.active ? (
        local.children
      ) : (
        <Dynamic
          component={local.linkAs}
          {...local.linkProps}
          href={local.href}
          title={local.title}
          target={local.target}
        >
          {local.children}
        </Dynamic>
      )}
    </Dynamic>
  );
};
export default BreadcrumbItem;
