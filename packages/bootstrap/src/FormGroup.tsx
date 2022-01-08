import {createMemo, JSX, mergeProps, splitProps} from "solid-js";
import {Dynamic} from "solid-js/web";
import FormContext from "./FormContext";
import {AsProp, BsPrefixRefForwardingComponent} from "./helpers";

export interface FormGroupProps extends JSX.HTMLAttributes<HTMLElement>, AsProp {
  controlId?: string;
}

const defaultProps = {
  as: "div",
};

const FormGroup: BsPrefixRefForwardingComponent<"div", FormGroupProps> = (p: FormGroupProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), ["as", "controlId"]);
  const context = {
    get controlId() {
      return local.controlId;
    },
  };

  return (
    <FormContext.Provider value={context}>
      <Dynamic component={local.as} {...props}>
        {props.children}
      </Dynamic>
    </FormContext.Provider>
  );
};

export default FormGroup;
