import { JSX, mergeProps, splitProps } from "solid-js";
import classNames from "classnames";
import { createWithBsPrefix } from "./createWithBsPrefix";
import { useBootstrapPrefix } from "./ThemeProvider";
import FormCheckInput, { FormCheckInputProps } from "./FormCheckInput";
import InputGroupContext from "./InputGroupContext";
import { BsPrefixProps, BsPrefixRefForwardingComponent } from "./helpers";
import { Dynamic } from "solid-js/web";

const InputGroupText = createWithBsPrefix("input-group-text", {
  Component: "span",
});

const InputGroupCheckbox = (props: FormCheckInputProps) => (
  <InputGroupText>
    <FormCheckInput type="checkbox" {...props} />
  </InputGroupText>
);

const InputGroupRadio = (props: FormCheckInputProps) => (
  <InputGroupText>
    <FormCheckInput type="radio" {...props} />
  </InputGroupText>
);

export interface InputGroupProps
  extends BsPrefixProps,
    JSX.HTMLAttributes<HTMLElement> {
  size?: "sm" | "lg";
  hasValidation?: boolean;
}

const defaultProps = {
  as: "div",
};

/**
 *
 * @property {InputGroupText} Text
 * @property {InputGroupRadio} Radio
 * @property {InputGroupCheckbox} Checkbox
 */
const InputGroup: BsPrefixRefForwardingComponent<"div", InputGroupProps> = (
  p: InputGroupProps
) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "bsPrefix",
    "size",
    "hasValidation",
    "className",
  ]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "input-group");

  // Intentionally an empty object. Used in detecting if a dropdown
  // exists under an input group.
  const contextValue = {};

  return (
    <InputGroupContext.Provider value={contextValue}>
      <Dynamic
        component={local.as}
        {...props}
        className={classNames(
          local.className,
          bsPrefix,
          local.size && `${bsPrefix}-${local.size}`,
          local.hasValidation && "has-validation"
        )}
      />
    </InputGroupContext.Provider>
  );
};

export default Object.assign(InputGroup, {
  Text: InputGroupText,
  Radio: InputGroupRadio,
  Checkbox: InputGroupCheckbox,
});
