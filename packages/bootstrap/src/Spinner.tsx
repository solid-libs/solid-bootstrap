import {JSX, mergeProps, splitProps} from "solid-js";
import classNames from "./classnames";
import {useBootstrapPrefix} from "./ThemeProvider";
import {BsPrefixProps, BsPrefixRefForwardingComponent} from "./helpers";
import {Variant} from "./types";
import {Dynamic} from "solid-js/web";

export interface SpinnerProps extends JSX.HTMLAttributes<HTMLElement>, BsPrefixProps {
  animation: "border" | "grow";
  size?: "sm";
  variant?: Variant;
}

const defaultProps = {
  as: "div",
};

const Spinner: BsPrefixRefForwardingComponent<"div", SpinnerProps> = (p: SpinnerProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "bsPrefix",
    "variant",
    "animation",
    "size",
    "class",
    "className",
  ]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "spinner");
  const bsSpinnerPrefix = `${bsPrefix}-${local.animation}`;

  return (
    <Dynamic
      component={local.as}
      {...props}
      class={classNames(
        local.class,
        local.className,
        bsSpinnerPrefix,
        local.size && `${bsSpinnerPrefix}-${local.size}`,
        local.variant && `text-${local.variant}`,
      )}
    />
  );
};

export default Spinner;
