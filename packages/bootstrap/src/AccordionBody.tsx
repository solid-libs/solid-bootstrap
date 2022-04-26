// ported from https://github.com/react-bootstrap/react-bootstrap/blob/f11723114d532cfce840417834a73733a8436414/src/AccordionBody.tsx

import classNames from "./classnames";
import {JSX, mergeProps, splitProps, useContext} from "solid-js";
import {Dynamic} from "solid-js/web";
import {useBootstrapPrefix} from "./ThemeProvider";
import AccordionCollapse from "./AccordionCollapse";
import AccordionItemContext from "./AccordionItemContext";
import {BsPrefixRefForwardingComponent, BsPrefixProps} from "./helpers";

export interface AccordionBodyProps extends BsPrefixProps, JSX.HTMLAttributes<HTMLElement> {}

const defaultProps: Partial<AccordionBodyProps> = {
  as: "div",
};

const AccordionBody: BsPrefixRefForwardingComponent<"div", AccordionBodyProps> = (p) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "bsPrefix",
    "class",
    "className"
  ]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "accordion-body");
  const context = useContext(AccordionItemContext);

  return (
    <AccordionCollapse eventKey={context.eventKey}>
      <Dynamic component={local.as} {...props} class={classNames(local.class, local.className, bsPrefix)}/>
    </AccordionCollapse>
  );
};

export default AccordionBody;
