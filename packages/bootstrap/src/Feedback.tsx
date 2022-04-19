import {JSX, mergeProps, splitProps} from "solid-js";
import classNames from "./classnames";
import {AsProp, BsPrefixRefForwardingComponent} from "./helpers";
import {Dynamic} from "solid-js/web";

export type FeedbackType = "valid" | "invalid";

export interface FeedbackProps extends AsProp, JSX.HTMLAttributes<HTMLElement> {
  // I think this is because we use BsPrefixRefForwardingComponent below
  // which includes bsPrefix.
  bsPrefix?: never;
  type?: FeedbackType;
  tooltip?: boolean;
}

const defaultProps = {
  as: "div",
  type: "valid",
  tooltip: false,
};

const Feedback: BsPrefixRefForwardingComponent<"div", FeedbackProps> = (p: FeedbackProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "className",
    "type",
    "tooltip",
  ]);
  return (
    <Dynamic
      component={local.as}
      {...props}
      className={classNames(
        local.className,
        `${local.type}-${local.tooltip ? "tooltip" : "feedback"}`,
      )}
    />
  );
};

export default Feedback;
