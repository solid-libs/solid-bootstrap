import {mergeProps, splitProps} from "solid-js";
import classNames from "./classnames";
import Image, {ImageProps} from "./Image";

const defaultProps = {fluid: true};

const FigureImage = (p: ImageProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), ["class"]);
  return <Image {...props} class={classNames(local.class, "figure-img")} />;
};

export default FigureImage;
