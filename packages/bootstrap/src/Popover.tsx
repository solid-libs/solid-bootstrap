import {JSX, mergeProps, splitProps, useContext} from "solid-js";
import classNames from "./classnames";
import {OverlayArrowProps} from "solid-bootstrap-core";
import {useBootstrapPrefix} from "./ThemeProvider";
import PopoverHeader from "./PopoverHeader";
import PopoverBody from "./PopoverBody";
import {Placement} from "./types";
import {BsPrefixProps} from "./helpers";
import OverlayContext from "./OverlayContext";

export interface PopoverProps extends JSX.HTMLAttributes<HTMLDivElement>, BsPrefixProps {
  placement?: Placement;
  title?: string;
  arrowProps?: Partial<OverlayArrowProps>;
  body?: boolean;
  popper?: any;
  show?: boolean;
}

const defaultProps: Partial<PopoverProps> = {
  arrowProps: {},
  placement: "right",
};

const Popover = (p: PopoverProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "bsPrefix",
    "placement",
    "class",
    "className",
    "style",
    "children",
    "body",
    "arrowProps",
    "popper",
    "show",
  ]);
  const decoratedBsPrefix = useBootstrapPrefix(local.bsPrefix, "popover");
  const primaryPlacement = () => local.placement?.split("-")?.[0];

  const context = useContext(OverlayContext);

  return (
    <div
      role="tooltip"
      x-placement={primaryPlacement()}
      class={classNames(
        local.class,
        local.className,
        decoratedBsPrefix,
        primaryPlacement() && `bs-popover-auto`,
      )}
      {...props}
      {...context?.wrapperProps}
      style={Object.assign({}, local.style, context?.wrapperProps.style)}
    >
      <div class="popover-arrow" {...local.arrowProps} {...context?.arrowProps} />
      {local.body ? <PopoverBody>{local.children}</PopoverBody> : local.children}
    </div>
  );
};

export default Object.assign(Popover, {
  Header: PopoverHeader,
  Body: PopoverBody,
});
