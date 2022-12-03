// ported from https://github.com/react-bootstrap/react-bootstrap/blob/f11723114d532cfce840417834a73733a8436414/src/AccordionCollapse.tsx

import classNames from "./classnames";
import {mergeProps, splitProps, useContext} from "solid-js";
import {Dynamic} from "solid-js/web";
import {useBootstrapPrefix} from "./ThemeProvider";
import Collapse, {CollapseProps} from "./Collapse";
import AccordionContext, {isAccordionItemSelected} from "./AccordionContext";
import {BsPrefixRefForwardingComponent, BsPrefixProps} from "./helpers";

export interface AccordionCollapseProps extends BsPrefixProps, CollapseProps {
  eventKey: string;
}

const defaultProps: Partial<AccordionCollapseProps> = {
  as: "div",
};

const AccordionCollapse: BsPrefixRefForwardingComponent<"div", AccordionCollapseProps> = (
  p: AccordionCollapseProps,
) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "bsPrefix",
    "class",
    "children",
    "eventKey",
  ]);
  const context = useContext(AccordionContext);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "accordion-collapse");

  return (
    <Collapse in={isAccordionItemSelected(context.activeEventKey, local.eventKey!)} {...props}>
      <Dynamic component={local.as} class={classNames(local.class, bsPrefix)}>
        {local.children}
      </Dynamic>
    </Collapse>
  );
};

export default AccordionCollapse;
