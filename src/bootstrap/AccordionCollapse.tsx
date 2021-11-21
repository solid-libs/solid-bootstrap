import classNames from "classnames";
import { mergeProps, splitProps, useContext } from "solid-js";
import { Dynamic } from "solid-js/web";
import { useBootstrapPrefix } from "./ThemeProvider";
import Collapse, { CollapseProps } from "./Collapse";
import AccordionContext from "./AccordionContext";
import { BsPrefixRefForwardingComponent, BsPrefixProps } from "./helpers";

export interface AccordionCollapseProps extends BsPrefixProps, CollapseProps {
  eventKey: string;
}

const defaultProps = {
  as: "div",
};

const AccordionCollapse: BsPrefixRefForwardingComponent<
  "div",
  AccordionCollapseProps
> = (p) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "bsPrefix",
    "className",
    "children",
    "eventKey",
  ]);
  const context = useContext(AccordionContext);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "accordion-collapse");

  return (
    <Collapse in={context.activeEventKey === local.eventKey} {...props}>
      <Dynamic
        component={local.as}
        className={classNames(local.className, bsPrefix)}
      >
        {local.children}
      </Dynamic>
    </Collapse>
  );
};

export default AccordionCollapse;
