import classNames from "classnames";
import { JSX, mergeProps, splitProps, useContext } from "solid-js";
import { Dynamic } from "solid-js/web";
import { useBootstrapPrefix } from "./ThemeProvider";
import AccordionCollapse from "./AccordionCollapse";
import AccordionItemContext from "./AccordionItemContext";
import { BsPrefixRefForwardingComponent, BsPrefixProps } from "./helpers";

export interface AccordionBodyProps
  extends BsPrefixProps,
    JSX.HTMLAttributes<HTMLElement> {}

const AccordionBody: BsPrefixRefForwardingComponent<"div", AccordionBodyProps> =
  (p) => {
    const [local, props] = splitProps(
      mergeProps(
        {
          as: "div",
        },
        p
      ),
      ["as", "bsPrefix", "className"]
    );
    const bsPrefix = useBootstrapPrefix(local.bsPrefix, "accordion-body");
    const { eventKey } = useContext(AccordionItemContext);

    return (
      <AccordionCollapse eventKey={eventKey}>
        <Dynamic {...props} className={classNames(local.className, bsPrefix)} />
      </AccordionCollapse>
    );
  };

export default AccordionBody;
