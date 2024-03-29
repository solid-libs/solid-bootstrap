import {JSX, mergeProps, splitProps} from "solid-js";
import classNames from "./classnames";
import FormGroup, {FormGroupProps} from "./FormGroup";
import {BsPrefixProps, BsPrefixRefForwardingComponent} from "./helpers";
import {useBootstrapPrefix} from "./ThemeProvider";

export interface FloatingLabelProps extends FormGroupProps, BsPrefixProps {
  controlId?: string;
  label: JSX.Element;
}

const defaultProps: Partial<FloatingLabelProps> = {};

const FloatingLabel: BsPrefixRefForwardingComponent<"div", FloatingLabelProps> = (
  p: FloatingLabelProps,
) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "bsPrefix",
    "class",
    "children",
    "controlId",
    "label",
  ]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "form-floating");

  return (
    <FormGroup class={classNames(local.class, bsPrefix)} controlId={local.controlId} {...props}>
      {local.children}
      <label for={local.controlId}>{local.label}</label>
    </FormGroup>
  );
};

export default FloatingLabel;
