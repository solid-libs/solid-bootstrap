import classNames from "classnames";
import { JSX, splitProps, useContext } from "solid-js";
import { Dynamic } from "solid-js/web";
import { Transition } from "solid-transition-group";
import { useBootstrapPrefix } from "./ThemeProvider";
import Collapse, { CollapseProps } from "./Collapse";
import AccordionContext from "./AccordionContext";
import { BsPrefixRefForwardingComponent, BsPrefixProps } from "./helpers";

export interface AccordionCollapseProps extends BsPrefixProps, CollapseProps {
  eventKey: string;
}

const AccordionCollapse: BsPrefixRefForwardingComponent<
  "div",
  AccordionCollapseProps
> = (p) => {
  const [local, props] = splitProps(p, [
    "as",
    "bsPrefix",
    "className",
    "children",
    "eventKey",
  ]);
  const { activeEventKey } = useContext(AccordionContext);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "accordion-collapse");

  return (
    <Collapse
      in={activeEventKey === local.eventKey}
      {...props}
      className={classNames(local.className, bsPrefix)}
    >
      <Dynamic component={local.as ?? "div"}>{local.children}</Dynamic>
    </Collapse>
  );
};

export default AccordionCollapse;
