import { JSX, mergeProps, splitProps } from "solid-js";
import classNames from "classnames";
import { OverlayArrowProps } from "../overlays/Overlay";
import { useBootstrapPrefix, useIsRTL } from "./ThemeProvider";
import PopoverHeader from "./PopoverHeader";
import PopoverBody from "./PopoverBody";
import { Placement } from "./types";
import { BsPrefixProps, getOverlayDirection } from "./helpers";

export interface PopoverProps
  extends JSX.HTMLAttributes<HTMLDivElement>,
    BsPrefixProps {
  placement?: Placement;
  title?: string;
  arrowProps?: Partial<OverlayArrowProps>;
  body?: boolean;
  popper?: any;
  show?: boolean;
}

const defaultProps: Partial<PopoverProps> = {
  placement: "right",
};

const Popover = (p: PopoverProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "bsPrefix",
    "placement",
    "className",
    "style",
    "children",
    "body",
    "arrowProps",
    "popper",
    "show",
  ]);
  const decoratedBsPrefix = useBootstrapPrefix(local.bsPrefix, "popover");
  const isRTL = useIsRTL();
  const [primaryPlacement] = local.placement?.split("-") || [];
  const bsDirection = getOverlayDirection(primaryPlacement, isRTL);

  return (
    <div
      role="tooltip"
      style={local.style}
      x-placement={primaryPlacement}
      className={classNames(
        local.className,
        decoratedBsPrefix,
        primaryPlacement && `bs-popover-${bsDirection}`
      )}
      {...props}
    >
      <div className="popover-arrow" {...local.arrowProps} />
      {local.body ? (
        <PopoverBody>{local.children}</PopoverBody>
      ) : (
        local.children
      )}
    </div>
  );
};

export default Object.assign(Popover, {
  Header: PopoverHeader,
  Body: PopoverBody,

  // Default popover offset.
  // https://github.com/twbs/bootstrap/blob/5c32767e0e0dbac2d934bcdee03719a65d3f1187/js/src/popover.js#L28
  POPPER_OFFSET: [0, 8] as const,
});
