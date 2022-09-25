import {JSX, mergeProps, splitProps, useContext} from "solid-js";
import classNames from "./classnames";
import FormContext from "./FormContext";
import {useBootstrapPrefix} from "./ThemeProvider";

import {BsPrefixProps} from "./helpers";
import FormCheckContext from "./FormCheckContext";

export interface FormCheckLabelProps
  extends JSX.LabelHTMLAttributes<HTMLLabelElement>,
    BsPrefixProps {}

const defaultProps = {};

const FormCheckLabel = (p: FormCheckLabelProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), ["bsPrefix", "class", "for"]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "form-check-label");
  const formContext = useContext(FormContext);
  const formCheckContext = useContext(FormCheckContext);
  formCheckContext?.setHasFormCheckLabel?.(true);

  return (
    <label // eslint-disable-line jsx-a11y/label-has-associated-control
      {...props}
      for={local.for || formContext.controlId}
      class={classNames(local.class, bsPrefix)}
    />
  );
};

export default FormCheckLabel;
