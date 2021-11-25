import {
  ComponentProps,
  JSX,
  mergeProps,
  splitProps,
  useContext,
} from "solid-js";
import classNames from "classnames";
import { useDropdownToggle } from "../../core/src/DropdownToggle";
import DropdownContext from "../../core/src/DropdownContext";
import Button, { ButtonProps, CommonButtonProps } from "./Button";
import InputGroupContext from "./InputGroupContext";
import { useBootstrapPrefix } from "./ThemeProvider";
import { BsPrefixRefForwardingComponent, ElementType } from "./helpers";
import { Dynamic } from "solid-js/web";

export interface DropdownToggleProps extends Omit<ButtonProps, "as"> {
  as?: ElementType;
  split?: boolean;
  childBsPrefix?: string;
  ref?: (ref: HTMLElement) => void;
}

type DropdownToggleComponent = BsPrefixRefForwardingComponent<
  "button",
  DropdownToggleProps
>;

export type PropsFromToggle = Partial<
  Pick<ComponentProps<DropdownToggleComponent>, CommonButtonProps>
>;

const defaultProps = {
  as: Button,
};

const DropdownToggle: DropdownToggleComponent = (p: DropdownToggleProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "bsPrefix",
    "split",
    "className",
    "childBsPrefix",
    "ref",
  ]);
  const prefix = useBootstrapPrefix(local.bsPrefix, "dropdown-toggle");
  const dropdownContext = useContext(DropdownContext);
  const isInputGroup = useContext(InputGroupContext);

  if (local.childBsPrefix !== undefined) {
    (props as any).bsPrefix = local.childBsPrefix;
  }

  const [toggleProps] = useDropdownToggle();
  const [toggleLocal, toggleOther] = splitProps(toggleProps, ["ref"]);

  const mergedRef = (ref: HTMLButtonElement) => {
    toggleLocal.ref?.(ref);
    local.ref?.(ref);
  };

  // This intentionally forwards size and variant (if set) to the
  // underlying component, to allow it to render size and style variants.
  return (
    <Dynamic
      component={local.as}
      className={classNames(
        local.className,
        prefix,
        local.split && `${prefix}-split`,
        !!isInputGroup && dropdownContext?.show && "show"
      )}
      {...toggleOther}
      {...props}
      ref={mergedRef}
    />
  );
};

export default DropdownToggle;
