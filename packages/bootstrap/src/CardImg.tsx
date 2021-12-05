import { JSX, mergeProps, splitProps } from "solid-js";
import classNames from "classnames";
import { useBootstrapPrefix } from "./ThemeProvider";
import { BsPrefixProps, BsPrefixRefForwardingComponent } from "./helpers";
import { Dynamic } from "solid-js/web";

export interface CardImgProps
  extends BsPrefixProps,
    JSX.ImgHTMLAttributes<HTMLImageElement> {
  variant?: "top" | "bottom";
}

const defaultProps = {
  as: "img",
};

const CardImg: BsPrefixRefForwardingComponent<"img", CardImgProps> = (
  p: CardImgProps
) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "bsPrefix",
    "className",
    "variant",
  ]);
  const prefix = useBootstrapPrefix(local.bsPrefix, "card-img");

  return (
    <Dynamic
      component={local.as}
      className={classNames(
        local.variant ? `${prefix}-${local.variant}` : prefix,
        local.className
      )}
      {...props}
    >
      {props.children}
    </Dynamic>
  );
};

export default CardImg;
