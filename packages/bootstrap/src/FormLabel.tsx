import { JSX, mergeProps, splitProps, useContext } from "solid-js";
import classNames from "classnames";
import Col, { ColProps } from "./Col";
import FormContext from "./FormContext";
import { useBootstrapPrefix } from "./ThemeProvider";
import { BsPrefixProps, BsPrefixRefForwardingComponent } from "./helpers";
import { Dynamic } from "solid-js/web";

interface FormLabelBaseProps
  extends BsPrefixProps,
    JSX.HTMLAttributes<HTMLElement> {
  htmlFor?: string;
  visuallyHidden?: boolean;
}

export interface FormLabelOwnProps extends FormLabelBaseProps {
  column?: false;
}

export interface FormLabelWithColProps extends FormLabelBaseProps, ColProps {
  column: true | "sm" | "lg";
}

export type FormLabelProps = FormLabelWithColProps | FormLabelOwnProps;

const defaultProps = {
  as: "label",
  column: false,
  visuallyHidden: false,
};

const FormLabel: BsPrefixRefForwardingComponent<"label", FormLabelProps> = (
  p: FormLabelProps
) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "bsPrefix",
    "column",
    "visuallyHidden",
    "className",
    "htmlFor",
  ]);
  const formContext = useContext(FormContext);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "form-label");

  let columnClass = "col-form-label";
  if (typeof local.column === "string")
    columnClass = `${columnClass} ${columnClass}-${local.column}`;

  const classes = () =>
    classNames(
      local.className,
      bsPrefix,
      local.visuallyHidden && "visually-hidden",
      local.column && columnClass
    );

  return !!local.column ? (
    <Col
      as="label"
      className={classes()}
      htmlFor={local.htmlFor || formContext.controlId}
      {...props}
    >
      {props.children}
    </Col>
  ) : (
    <Dynamic
      component={local.as}
      className={classes()}
      htmlFor={local.htmlFor || formContext.controlId}
      {...props}
    >
      {props.children}
    </Dynamic>
  );
};

export default FormLabel;
