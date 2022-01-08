import {JSX, mergeProps, splitProps} from "solid-js";
import {BsPrefixRefForwardingComponent} from "./helpers";
import Button from "./Button";
import usePlaceholder, {UsePlaceholderProps} from "./usePlaceholder";
import {ButtonVariant} from "./types";

export interface PlaceholderButtonProps extends UsePlaceholderProps {
  variant?: ButtonVariant;
}

const PlaceholderButton: BsPrefixRefForwardingComponent<"button", PlaceholderButtonProps> = (
  props: PlaceholderButtonProps,
) => {
  return (
    <Button {...usePlaceholder(props)} disabled tabIndex={-1}>
      {props.children}
    </Button>
  );
};

export default PlaceholderButton;
