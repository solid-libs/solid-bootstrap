import {JSX, mergeProps, splitProps, useContext} from "solid-js";
import classNames from "./classnames";
import {OverlayArrowProps, OverlayInjectedProps} from "solid-bootstrap-core";
import {useBootstrapPrefix} from "./ThemeProvider";
import {Placement} from "./types";
import {BsPrefixProps} from "./helpers";
import OverlayContext from "./OverlayContext";

export interface TooltipProps extends JSX.HTMLAttributes<HTMLDivElement>, BsPrefixProps {
  placement?: Placement;
  arrowProps?: Partial<OverlayArrowProps>;
  show?: boolean;
  popper?: any;
}

const defaultProps = {
  arrowProps: {},
  placement: "right",
};

const Tooltip = (p: TooltipProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "bsPrefix",
    "placement",
    "class",
    "style",
    "children",
    "arrowProps",
    "popper",
    "show",
  ]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "tooltip");
  const context = useContext(OverlayContext);
  const primaryPlacement = () => (context?.metadata?.placement || local.placement)?.split("-")?.[0];

  return (
    <div
      role="tooltip"
      x-placement={primaryPlacement()}
      class={classNames(local.class, bsPrefix, `bs-tooltip-auto`)}
      {...props}
      {...context?.wrapperProps}
      style={Object.assign({}, local.style, context?.wrapperProps.style)}
    >
      <div class="tooltip-arrow" {...local.arrowProps} {...context?.arrowProps} />
      <div class={`${bsPrefix}-inner`}>{local.children}</div>
    </div>
  );
};

export default Tooltip;
