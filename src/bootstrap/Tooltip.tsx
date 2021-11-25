import { JSX, mergeProps, splitProps } from "solid-js";
import classNames from "classnames";
import { OverlayArrowProps } from "../core/Overlay";
import { useBootstrapPrefix, useIsRTL } from "./ThemeProvider";
import { Placement } from "./types";
import { BsPrefixProps, getOverlayDirection } from "./helpers";

export interface TooltipProps
  extends JSX.HTMLAttributes<HTMLDivElement>,
    BsPrefixProps {
  placement?: Placement;
  arrowProps?: Partial<OverlayArrowProps>;
  show?: boolean;
  popper?: any;
}

const defaultProps = {
  placement: "right",
};

const Tooltip = (p: TooltipProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "bsPrefix",
    "placement",
    "className",
    "style",
    "children",
    "arrowProps",
    "popper",
    "show",
  ]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "tooltip");
  const isRTL = useIsRTL();

  const [primaryPlacement] = local.placement?.split("-") || [];
  const bsDirection = getOverlayDirection(primaryPlacement, isRTL);

  return (
    <div
      style={local.style}
      role="tooltip"
      x-placement={primaryPlacement}
      className={classNames(
        local.className,
        bsPrefix,
        `bs-tooltip-${bsDirection}`
      )}
      {...props}
    >
      <div className="tooltip-arrow" {...local.arrowProps} />
      <div className={`${bsPrefix}-inner`}>{local.children}</div>
    </div>
  );
};

export default Tooltip;
