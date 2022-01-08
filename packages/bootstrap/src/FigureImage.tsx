import {mergeProps, splitProps} from "solid-js";
import classNames from "./classnames";
import Image, {ImageProps} from "./Image";

const defaultProps = {fluid: true};

const FigureImage = (p: ImageProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), ["className"]);
  return (
    <Image {...props} className={classNames(local.className, "figure-img")}>
      {props.children}
    </Image>
  );
};

export default FigureImage;
