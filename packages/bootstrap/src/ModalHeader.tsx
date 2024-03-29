import {JSX, mergeProps, splitProps} from "solid-js";
import classNames from "./classnames";
import {useBootstrapPrefix} from "./ThemeProvider";
import {CloseButtonVariant} from "./CloseButton";
import AbstractModalHeader, {AbstractModalHeaderProps} from "./AbstractModalHeader";
import {BsPrefixOnlyProps} from "./helpers";

export interface ModalHeaderProps extends AbstractModalHeaderProps, BsPrefixOnlyProps {}

const defaultProps = {
  closeLabel: "Close",
  closeButton: false,
};

const ModalHeader = (p: ModalHeaderProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), ["bsPrefix", "class"]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "modal-header");
  return <AbstractModalHeader {...props} class={classNames(local.class, bsPrefix)} />;
};

export default ModalHeader;
