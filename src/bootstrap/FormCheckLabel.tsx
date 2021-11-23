import { JSX, mergeProps, splitProps, useContext } from "solid-js";
import classNames from "classnames";
import FormContext from "./FormContext";
import { useBootstrapPrefix } from "./ThemeProvider";

import { BsPrefixProps } from "./helpers";

export interface FormCheckLabelProps
  extends JSX.LabelHTMLAttributes<HTMLLabelElement>,
    BsPrefixProps {}

const defaultProps = {};

const FormCheckLabel = (p: FormCheckLabelProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "bsPrefix",
    "className",
    "htmlFor",
  ]);
  const formContext = useContext(FormContext);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "form-check-label");

  return (
    <label // eslint-disable-line jsx-a11y/label-has-associated-control
      {...props}
      htmlFor={local.htmlFor || formContext.controlId}
      className={classNames(local.className, bsPrefix)}
    />
  );
};

export default FormCheckLabel;
