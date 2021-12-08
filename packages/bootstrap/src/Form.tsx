import { JSX, mergeProps, splitProps } from "solid-js";
import classNames from "./classnames";
import FormCheck from "./FormCheck";
import FormControl from "./FormControl";
import FormFloating from "./FormFloating";
import FormGroup from "./FormGroup";
import FormLabel from "./FormLabel";
import FormRange from "./FormRange";
import FormSelect from "./FormSelect";
import FormText from "./FormText";
import Switch from "./Switch";
import FloatingLabel from "./FloatingLabel";
import { BsPrefixRefForwardingComponent, AsProp } from "./helpers";
import { Dynamic } from "solid-js/web";

export interface FormProps
  extends JSX.FormHTMLAttributes<HTMLFormElement>,
    AsProp {
  validated?: boolean;
}

const defaultProps = {
  as: "form",
};

const Form: BsPrefixRefForwardingComponent<"form", FormProps> = (
  p: FormProps
) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "className",
    "validated",
  ]);
  return (
    <Dynamic
      component={local.as}
      {...props}
      className={classNames(
        local.className,
        local.validated && "was-validated"
      )}
    >
      {props.children}
    </Dynamic>
  );
};

export default Object.assign(Form, {
  Group: FormGroup,
  Control: FormControl,
  Floating: FormFloating,
  Check: FormCheck,
  Switch,
  Label: FormLabel,
  Text: FormText,
  Range: FormRange,
  Select: FormSelect,
  FloatingLabel,
});
