import { JSX, mergeProps, splitProps } from "solid-js";
import classNames from "./classnames";
import FormGroup, { FormGroupProps } from "./FormGroup";
import { BsPrefixProps, BsPrefixRefForwardingComponent } from "./helpers";
import { useBootstrapPrefix } from "./ThemeProvider";

export interface FloatingLabelProps extends FormGroupProps, BsPrefixProps {
  controlId?: string;
  label: JSX.Element;
}

const defaultProps = {};

const FloatingLabel: BsPrefixRefForwardingComponent<"div", FloatingLabelProps> =
  (p: FloatingLabelProps) => {
    const [local, props] = splitProps(mergeProps(defaultProps, p), [
      "bsPrefix",
      "className",
      "children",
      "controlId",
      "label",
    ]);
    const bsPrefix = useBootstrapPrefix(local.bsPrefix, "form-floating");

    return (
      <FormGroup
        className={classNames(local.className, bsPrefix)}
        controlId={local.controlId}
        {...props}
      >
        {local.children}
        <label htmlFor={local.controlId}>{local.label}</label>
      </FormGroup>
    );
  };

export default FloatingLabel;
