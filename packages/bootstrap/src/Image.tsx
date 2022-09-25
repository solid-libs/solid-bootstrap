import {JSX, mergeProps, splitProps} from "solid-js";
import classNames from "./classnames";

import {useBootstrapPrefix} from "./ThemeProvider";
import {BsPrefixOnlyProps} from "./helpers";

export interface ImageProps extends BsPrefixOnlyProps, JSX.ImgHTMLAttributes<HTMLImageElement> {
  fluid?: boolean;
  rounded?: boolean;
  roundedCircle?: boolean;
  thumbnail?: boolean;
}

const defaultProps = {
  fluid: false,
  rounded: false,
  roundedCircle: false,
  thumbnail: false,
};

const Image = (p: ImageProps) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "bsPrefix",
    "class",
    "fluid",
    "rounded",
    "roundedCircle",
    "thumbnail",
  ]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "img");
  return (
    <img // eslint-disable-line jsx-a11y/alt-text
      {...props}
      class={classNames(
        local.class,
        local.fluid && `${bsPrefix}-fluid`,
        local.rounded && `rounded`,
        local.roundedCircle && `rounded-circle`,
        local.thumbnail && `${bsPrefix}-thumbnail`,
      )}
    />
  );
};

export default Image;
