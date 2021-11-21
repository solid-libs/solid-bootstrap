// ported from https://github.com/react-bootstrap/react-bootstrap/blob/f11723114d532cfce840417834a73733a8436414/src/divWithClassName.tsx

import classNames from "classnames";
import { ComponentProps } from "solid-js";

export const divWithClassName =
  (className: string) => (p: ComponentProps<"div">) => {
    return (
      <div
        {...(console.log("running"), p)}
        className={classNames((p as any).className, className)}
      />
    );
  };

// export default (className: string) => (p: ComponentProps<"div">) => {
//   return null;
//   // return (
//   //   <div
//   //     {...(console.log("running"), p)}
//   //     className={classNames((p as any).className, className)}
//   //   />
//   // );
// };
