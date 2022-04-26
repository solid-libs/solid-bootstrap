// ported from https://github.com/react-bootstrap/react-bootstrap/blob/f11723114d532cfce840417834a73733a8436414/src/divWithClassName.tsx

import classNames from "./classnames";
import {ComponentProps} from "solid-js";

export const divWithClassName = (className: string) => (p: ComponentProps<"div">) => {
  return (
    <div {...p} class={classNames((p as any).class, (p as any).className, className)}/>
  );
};
