import {JSX, mergeProps, splitProps, useContext} from "solid-js";
import classNames from "./classnames";
import {OverlayArrowProps} from "solid-bootstrap-core";
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
    "className",
    "style",
    "children",
    "arrowProps",
    "popper",
    "show",
  ]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "tooltip");
  const primaryPlacement = () => local.placement?.split("-")?.[0];

  const context = useContext(OverlayContext);
  return (
    <div
      role="tooltip"
      x-placement={primaryPlacement()}
      class={classNames(local.class, local.className, bsPrefix, `bs-tooltip-auto`)}
      {...props}
      {...context?.wrapperProps}
      style={Object.assign({}, local.style, context?.wrapperProps.style)}
    >
      <div class="tooltip-arrow" {...context?.arrowProps}/>
      <div class={`${bsPrefix}-inner`}>{local.children}</div>
    </div>
  );
};

export default Tooltip;
