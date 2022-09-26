// ported from https://github.com/react-bootstrap/react-bootstrap/blob/f11723114d532cfce840417834a73733a8436414/src/createWithBsPrefix.tsx

import classNames from "./classnames";
import {useBootstrapPrefix} from "./ThemeProvider";
import {BsPrefixRefForwardingComponent} from "./helpers";
import {Component, ComponentProps, JSX, mergeProps, splitProps, ValidComponent} from "solid-js";
import {Dynamic} from "solid-js/web";

interface BsPrefixOptions<As extends ValidComponent = "div"> {
  Component?: As;
  defaultProps?: Partial<ComponentProps<As>>;
}

// TODO: emstricten & fix the typing here! `createWithBsPrefix<TElementType>...`
export function createWithBsPrefix<As extends ValidComponent = "div">(
  prefix: string,
  {Component, defaultProps = {}}: BsPrefixOptions<As> = {},
): BsPrefixRefForwardingComponent<As> {
  const BsComponent = (p: any) => {
    const [local, props] = splitProps(mergeProps({as: Component}, defaultProps, p), [
      "class",
      "bsPrefix",
      "as",
    ]);

    const resolvedPrefix = useBootstrapPrefix(local.bsPrefix, prefix);
    return (
      <Dynamic
        component={local.as || "div"}
        class={classNames(local.class, resolvedPrefix)}
        {...props}
      />
    );
  };
  return BsComponent as any;
}
