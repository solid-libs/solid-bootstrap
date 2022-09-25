import {JSX, mergeProps, splitProps, useContext} from "solid-js";
import classNames from "./classnames";
import FormContext from "./FormContext";
import {useBootstrapPrefix} from "./ThemeProvider";
import {BsPrefixProps, BsPrefixRefForwardingComponent} from "./helpers";
import {Dynamic} from "solid-js/web";

type FormCheckInputType = "checkbox" | "radio";

export interface FormCheckInputProps
  extends BsPrefixProps,
    JSX.InputHTMLAttributes<HTMLInputElement> {
  type?: FormCheckInputType;
  isValid?: boolean;
  isInvalid?: boolean;
}

const defaultProps = {
  as: "input",
  type: "checkbox",
  isValid: false,
  isInvalid: false,
};

const FormCheckInput: BsPrefixRefForwardingComponent<"input", FormCheckInputProps> = (
  p: FormCheckInputProps,
) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "id",
    "bsPrefix",
    "class",
    "type",
    "isValid",
    "isInvalid",
  ]);

  const formContext = useContext(FormContext);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "form-check-input");

  return (
    <Dynamic
      component={local.as}
      {...props}
      type={local.type}
      id={local.id || formContext.controlId}
      class={classNames(
        local.class,
        bsPrefix,
        local.isValid && "is-valid",
        local.isInvalid && "is-invalid",
      )}
    />
  );
};
export default FormCheckInput;
