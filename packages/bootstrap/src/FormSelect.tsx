import {JSX, mergeProps, splitProps, useContext} from "solid-js";
import classNames from "./classnames";
import {useBootstrapPrefix} from "./ThemeProvider";
import {BsPrefixOnlyProps, BsPrefixRefForwardingComponent} from "./helpers";
import FormContext from "./FormContext";

export interface FormSelectProps
  extends BsPrefixOnlyProps,
    Omit<JSX.SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  htmlSize?: number;
  size?: "sm" | "lg";
  isValid?: boolean;
  isInvalid?: boolean;
}

const defaultProps = {
  isValid: false,
  isInvalid: false,
};

const FormSelect: BsPrefixRefForwardingComponent<"select", FormSelectProps> = (
  p: FormSelectProps,
) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "bsPrefix",
    "size",
    "htmlSize",
    "class",
    "isValid",
    "isInvalid",
    "id",
  ]);
  const formContext = useContext(FormContext);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "form-select");

  return (
    <select
      {...props}
      size={local.htmlSize}
      class={classNames(
        local.class,
        bsPrefix,
        local.size && `${bsPrefix}-${local.size}`,
        local.isValid && `is-valid`,
        local.isInvalid && `is-invalid`,
      )}
      id={local.id || formContext.controlId}
    />
  );
};

export default FormSelect;
