// ported from https://github.com/react-bootstrap/react-bootstrap/blob/f11723114d532cfce840417834a73733a8436414/src/AccordionButton.tsx

import classNames from "classnames";
import { JSX, mergeProps, splitProps, useContext } from "solid-js";
import { Dynamic } from "solid-js/web";
import { callEventHandler } from "../../core/src/utils";
import AccordionContext from "./AccordionContext";
import AccordionItemContext from "./AccordionItemContext";
import { BsPrefixProps, BsPrefixRefForwardingComponent } from "./helpers";
import { useBootstrapPrefix } from "./ThemeProvider";

type EventHandler = JSX.EventHandlerUnion<HTMLBodyElement, Event>;

export interface AccordionButtonProps
  extends JSX.ButtonHTMLAttributes<HTMLButtonElement>,
    BsPrefixProps {}

export function useAccordionButton(
  eventKey: string,
  onClick?: EventHandler
): EventHandler {
  const context = useContext(AccordionContext);

  return (e) => {
    /*
      Compare the event key in context with the given event key.
      If they are the same, then collapse the component.
    */
    const eventKeyPassed =
      eventKey === context.activeEventKey ? null : eventKey;

    if (context.onSelect) context.onSelect(eventKeyPassed, e);
    callEventHandler(onClick, e);
  };
}

const defaultProps = {
  as: "button",
};

const AccordionButton: BsPrefixRefForwardingComponent<
  "button",
  AccordionButtonProps
> = (p) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "bsPrefix",
    "className",
    "onClick",
  ]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "accordion-button");
  const itemContext = useContext(AccordionItemContext);
  const accordionOnClick = useAccordionButton(
    itemContext.eventKey,
    local.onClick
  );
  const accordianContext = useContext(AccordionContext);

  return (
    <Dynamic
      component={local.as}
      onClick={accordionOnClick}
      {...props}
      type={local.as === "button" ? "button" : undefined}
      aria-expanded={itemContext.eventKey === accordianContext.activeEventKey}
      className={classNames(
        local.className,
        bsPrefix,
        itemContext.eventKey !== accordianContext.activeEventKey && "collapsed"
      )}
    />
  );
};
export default AccordionButton;
