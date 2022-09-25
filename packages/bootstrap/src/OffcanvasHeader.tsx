import {mergeProps, splitProps} from "solid-js";
import classNames from "./classnames";
import {useBootstrapPrefix} from "./ThemeProvider";
import AbstractModalHeader, {AbstractModalHeaderProps} from "./AbstractModalHeader";
import {BsPrefixOnlyProps} from "./helpers";

export interface OffcanvasHeaderProps extends AbstractModalHeaderProps, BsPrefixOnlyProps {}

const defaultProps: Partial<OffcanvasHeaderProps> = {
  closeLabel: "Close",
  closeButton: false,
};

const OffcanvasHeader = (p: OffcanvasHeaderProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), ["bsPrefix", "class"]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "offcanvas-header");
  return <AbstractModalHeader {...props} class={classNames(local.class, bsPrefix)} />;
};

export default OffcanvasHeader;
