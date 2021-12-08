import { JSX, mergeProps, splitProps } from "solid-js";
import classNames from "./classnames";
import { useBootstrapPrefix } from "./ThemeProvider";
import BreadcrumbItem from "./BreadcrumbItem";
import { BsPrefixProps, BsPrefixRefForwardingComponent } from "./helpers";
import { Dynamic } from "solid-js/web";

export interface BreadcrumbProps
  extends BsPrefixProps,
    JSX.HTMLAttributes<HTMLElement> {
  label?: string;
  listProps?: JSX.OlHTMLAttributes<HTMLOListElement>;
}

const defaultProps = {
  as: "nav",
  label: "breadcrumb",
  listProps: {},
};

const Breadcrumb: BsPrefixRefForwardingComponent<"nav", BreadcrumbProps> = (
  p: BreadcrumbProps
) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "bsPrefix",
    "className",
    "listProps",
    "children",
    "label",
    "as",
  ]);
  const prefix = useBootstrapPrefix(local.bsPrefix, "breadcrumb");

  return (
    <Dynamic
      component={local.as}
      aria-label={local.label}
      className={local.className}
      {...props}
    >
      <ol
        {...local.listProps}
        className={classNames(prefix, local.listProps?.className)}
      >
        {local.children}
      </ol>
    </Dynamic>
  );
};
export default Object.assign(Breadcrumb, {
  Item: BreadcrumbItem,
});
