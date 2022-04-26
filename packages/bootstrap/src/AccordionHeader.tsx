// ported from https://github.com/react-bootstrap/react-bootstrap/blob/f11723114d532cfce840417834a73733a8436414/src/AccordionHeader.tsx

import {JSX, mergeProps, splitProps} from "solid-js";
import {Dynamic} from "solid-js/web";
import classNames from "./classnames";
import {useBootstrapPrefix} from "./ThemeProvider";
import AccordionButton from "./AccordionButton";
import {BsPrefixRefForwardingComponent, BsPrefixProps} from "./helpers";

export interface AccordionHeaderProps extends BsPrefixProps, JSX.HTMLAttributes<HTMLElement> {}

const defaultProps: Partial<AccordionHeaderProps> = {
  as: "h2",
};

const AccordionHeader: BsPrefixRefForwardingComponent<"h2", AccordionHeaderProps> = (p) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "bsPrefix",
    "class",
    "className",
    "children",
    "onClick",
  ]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "accordion-header");

  return (
    <Dynamic component={local.as} {...props} class={classNames(local.class, local.className, bsPrefix)}>
      <AccordionButton onClick={local.onClick}>{local.children}</AccordionButton>
    </Dynamic>
  );
};
export default AccordionHeader;
