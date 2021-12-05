import { JSX, splitProps } from "solid-js";
import classNames from "classnames";
import { useBootstrapPrefix } from "./ThemeProvider";
import Button, { ButtonProps } from "./Button";

export type ToggleButtonType = "checkbox" | "radio";

export interface ToggleButtonProps
  extends Omit<ButtonProps, "onChange" | "type"> {
  type?: ToggleButtonType;
  name?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: JSX.EventHandlerUnion<HTMLInputElement, Event>;
  value: string | string[] | number;
  inputRef?: (r: HTMLInputElement) => void;
}

const noop = () => undefined;

const ToggleButton = (p: ToggleButtonProps) => {
  const [local, props] = splitProps(p, [
    "bsPrefix",
    "name",
    "className",
    "checked",
    "type",
    "onChange",
    "value",
    "disabled",
    "id",
    "inputRef",
  ]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "btn-check");

  return (
    <>
      <input
        className={bsPrefix}
        name={local.name}
        type={local.type}
        value={local.value}
        ref={local.inputRef}
        autocomplete="off"
        checked={!!local.checked}
        disabled={!!local.disabled}
        onChange={local.onChange || noop}
        id={local.id}
      />
      <Button
        {...props}
        className={classNames(local.className, local.disabled && "disabled")}
        // @ts-ignore
        type={undefined}
        as="label"
        htmlFor={local.id}
      >
        {props.children}
      </Button>
    </>
  );
};

export default ToggleButton;
