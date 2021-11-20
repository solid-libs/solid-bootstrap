// ported from https://github.com/react-bootstrap/react-bootstrap/blob/f11723114d532cfce840417834a73733a8436414/src/AccordionHeader.tsx

import { JSX, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";
import classNames from "classnames";
import { useBootstrapPrefix } from "./ThemeProvider";
import AccordionButton from "./AccordionButton";
import { BsPrefixRefForwardingComponent, BsPrefixProps } from "./helpers";

export interface AccordionHeaderProps
  extends BsPrefixProps,
    JSX.HTMLAttributes<HTMLElement> {}

const AccordionHeader: BsPrefixRefForwardingComponent<
  "h2",
  AccordionHeaderProps
> = (p) => {
  const [local, props] = splitProps(p, [
    "as",
    "bsPrefix",
    "className",
    "children",
    "onClick",
  ]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "accordion-header");

  return (
    <Dynamic
      component={local.as ?? "h2"}
      {...props}
      className={classNames(local.className, bsPrefix)}
    >
      <AccordionButton onClick={local.onClick}>
        {local.children}
      </AccordionButton>
    </Dynamic>
  );
};
export default AccordionHeader;
