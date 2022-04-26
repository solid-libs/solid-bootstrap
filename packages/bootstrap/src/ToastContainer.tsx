import {JSX, mergeProps, splitProps} from "solid-js";
import classNames from "./classnames";
import {useBootstrapPrefix} from "./ThemeProvider";
import {BsPrefixProps, BsPrefixRefForwardingComponent} from "./helpers";
import {Dynamic} from "solid-js/web";

export type ToastPosition =
  | "top-start"
  | "top-center"
  | "top-end"
  | "middle-start"
  | "middle-center"
  | "middle-end"
  | "bottom-start"
  | "bottom-center"
  | "bottom-end";

export interface ToastContainerProps extends BsPrefixProps, JSX.HTMLAttributes<HTMLElement> {
  position?: ToastPosition;
}

const positionClasses = {
  "top-start": "top-0 start-0",
  "top-center": "top-0 start-50 translate-middle-x",
  "top-end": "top-0 end-0",
  "middle-start": "top-50 start-0 translate-middle-y",
  "middle-center": "top-50 start-50 translate-middle",
  "middle-end": "top-50 end-0 translate-middle-y",
  "bottom-start": "bottom-0 start-0",
  "bottom-center": "bottom-0 start-50 translate-middle-x",
  "bottom-end": "bottom-0 end-0",
};

const defaultProps = {
  as: "div",
};

const ToastContainer: BsPrefixRefForwardingComponent<"div", ToastContainerProps> = (
  p: ToastContainerProps,
) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "bsPrefix",
    "position",
    "class",
    "className",
  ]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "toast-container");

  return (
    <Dynamic
      component={local.as}
      {...props}
      class={classNames(
        bsPrefix,
        local.position && `position-absolute ${positionClasses[local.position]}`,
        local.class,
        local.className,
      )}
    />
  );
};

export default ToastContainer;
