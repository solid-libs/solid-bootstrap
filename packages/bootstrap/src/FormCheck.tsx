import {createMemo, createSignal, JSX, mergeProps, splitProps, useContext} from "solid-js";
import classNames from "./classnames";
import Feedback, {FeedbackType} from "./Feedback";
import FormCheckInput from "./FormCheckInput";
import FormCheckLabel from "./FormCheckLabel";
import FormContext from "./FormContext";
import {useBootstrapPrefix} from "./ThemeProvider";
import {BsPrefixProps, BsPrefixRefForwardingComponent} from "./helpers";
import FormCheckContext from "./FormCheckContext";

export type FormCheckType = "checkbox" | "radio" | "switch";

export interface FormCheckProps extends BsPrefixProps, JSX.InputHTMLAttributes<HTMLInputElement> {
  inline?: boolean;
  disabled?: boolean;
  label?: JSX.Element;
  type?: FormCheckType;
  isValid?: boolean;
  isInvalid?: boolean;
  feedbackTooltip?: boolean;
  feedback?: JSX.Element;
  feedbackType?: FeedbackType;
  bsSwitchPrefix?: string;
}

const defaultProps = {
  as: "input",
  title: "",
  type: "checkbox",
  inline: false,
  disabled: false,
  isValid: false,
  isInvalid: false,
  feedbackTooltip: false,
};

const FormCheck: BsPrefixRefForwardingComponent<"input", FormCheckProps> = (p: FormCheckProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "id",
    "bsPrefix",
    "bsSwitchPrefix",
    "inline",
    "disabled",
    "isValid",
    "isInvalid",
    "feedbackTooltip",
    "feedback",
    "feedbackType",
    "className",
    "style",
    "title",
    "type",
    "label",
    "children",
  ]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "form-check");
  const bsSwitchPrefix = useBootstrapPrefix(local.bsSwitchPrefix, "form-switch");
  const [hasFormCheckLabel, setHasFormCheckLabel] = createSignal(false);

  const formContext = useContext(FormContext);
  const innerFormContext = {
    get controlId() {
      return local.id || formContext.controlId;
    },
  };
  const hasLabel = createMemo(
    () => (local.label != null && local.label !== false && !local.children) || hasFormCheckLabel(),
  );

  return (
    <FormContext.Provider value={innerFormContext}>
      <FormCheckContext.Provider value={{setHasFormCheckLabel}}>
        <div
          style={local.style}
          className={classNames(
            local.className,
            hasLabel() && bsPrefix,
            local.inline && `${bsPrefix}-inline`,
            local.type === "switch" && bsSwitchPrefix,
          )}
        >
          {local.children || (
            <>
              <FormCheckInput
                {...props}
                type={local.type === "switch" ? "checkbox" : local.type}
                isValid={local.isValid}
                isInvalid={local.isInvalid}
                disabled={local.disabled}
                as={local.as}
              />
              {hasLabel() && <FormCheckLabel title={local.title}>{local.label}</FormCheckLabel>}
              {local.feedback && (
                <Feedback type={local.feedbackType} tooltip={local.feedbackTooltip}>
                  {local.feedback}
                </Feedback>
              )}
            </>
          )}
        </div>
      </FormCheckContext.Provider>
    </FormContext.Provider>
  );
};

export default Object.assign(FormCheck, {
  Input: FormCheckInput,
  Label: FormCheckLabel,
});
