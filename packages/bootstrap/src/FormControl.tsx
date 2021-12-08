import { JSX, mergeProps, splitProps, useContext } from "solid-js";
import classNames from "./classnames";
import Feedback from "./Feedback";
import FormContext from "./FormContext";
import { useBootstrapPrefix } from "./ThemeProvider";
import { BsPrefixProps, BsPrefixRefForwardingComponent } from "./helpers";
import { Dynamic } from "solid-js/web";

type FormControlElement = HTMLInputElement | HTMLTextAreaElement;

export interface FormControlProps
  extends BsPrefixProps,
    JSX.HTMLAttributes<FormControlElement> {
  htmlSize?: number;
  size?: "sm" | "lg";
  plaintext?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  value?: string | string[] | number;
  type?: string;
  isValid?: boolean;
  isInvalid?: boolean;
}

const defaultProps = {
  as: "input",
  isValid: false,
  isInvalid: false,
};

const FormControl: BsPrefixRefForwardingComponent<"input", FormControlProps> = (
  p: FormControlProps
) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "bsPrefix",
    "type",
    "size",
    "htmlSize",
    "id",
    "className",
    "isValid",
    "isInvalid",
    "plaintext",
    "readOnly",
  ]);
  const formContext = useContext(FormContext);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "form-control");

  const classes = () => {
    let classes;
    if (local.plaintext) {
      classes = { [`${bsPrefix}-plaintext`]: true };
    } else {
      classes = {
        [bsPrefix]: true,
        [`${bsPrefix}-${local.size}`]: local.size,
      };
    }
    return classes;
  };

  return (
    <Dynamic
      component={local.as}
      {...props}
      type={local.type}
      size={local.htmlSize}
      readOnly={local.readOnly}
      id={local.id || formContext.controlId}
      className={classNames(
        local.className,
        classes(),
        local.isValid && `is-valid`,
        local.isInvalid && `is-invalid`,
        local.type === "color" && `${bsPrefix}-color`
      )}
    >
      {props.children}
    </Dynamic>
  );
};

export default Object.assign(FormControl, { Feedback });
