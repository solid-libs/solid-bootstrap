import {JSX, mergeProps, splitProps} from "solid-js";
import {BsPrefixProps, BsPrefixRefForwardingComponent} from "./helpers";
import usePlaceholder, {UsePlaceholderProps} from "./usePlaceholder";
import PlaceholderButton from "./PlaceholderButton";
import {Dynamic} from "solid-js/web";

export interface PlaceholderProps extends UsePlaceholderProps, BsPrefixProps {}

const defaultProps = {
  as: "span",
};
const Placeholder: BsPrefixRefForwardingComponent<"span", PlaceholderProps> = (
  p: PlaceholderProps,
) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), ["as"]);
  return (
    <Dynamic component={local.as} {...usePlaceholder(props)}>
      {props.children}
    </Dynamic>
  );
};

export default Object.assign(Placeholder, {
  Button: PlaceholderButton,
});
