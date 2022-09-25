import {JSX, mergeProps, splitProps, useContext} from "solid-js";
import classNames from "./classnames";
import {useBootstrapPrefix} from "./ThemeProvider";
import {BsPrefixOnlyProps} from "./helpers";
import FormContext from "./FormContext";

export interface FormRangeProps
  extends BsPrefixOnlyProps,
    Omit<JSX.InputHTMLAttributes<HTMLInputElement>, "type"> {}

const defaultProps = {
  as: "img",
};

const FormRange = (p: FormRangeProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), ["bsPrefix", "class", "id"]);
  const formContext = useContext(FormContext);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "form-range");

  return (
    <input
      {...props}
      type="range"
      class={classNames(local.class, bsPrefix)}
      id={local.id || formContext.controlId}
    />
  );
};

export default FormRange;
