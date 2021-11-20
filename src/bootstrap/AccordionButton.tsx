import classNames from "classnames";
import { JSX, mergeProps, splitProps, useContext } from "solid-js";
import { Dynamic } from "solid-js/web";
import { callEventHandler } from "../overlays/utils";
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
  const { activeEventKey, onSelect } = useContext(AccordionContext);

  return (e) => {
    /*
      Compare the event key in context with the given event key.
      If they are the same, then collapse the component.
    */
    const eventKeyPassed = eventKey === activeEventKey ? null : eventKey;

    if (onSelect) onSelect(eventKeyPassed, e);
    callEventHandler(onClick, e);
  };
}

const AccordionButton: BsPrefixRefForwardingComponent<
  "div",
  AccordionButtonProps
> = (p) => {
  const [local, props] = splitProps(
    mergeProps(
      {
        as: "button",
      },
      p
    ),
    ["as", "bsPrefix", "className", "onClick"]
  );
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "accordion-button");
  const { eventKey } = useContext(AccordionItemContext);
  const accordionOnClick = useAccordionButton(eventKey, local.onClick);
  const { activeEventKey } = useContext(AccordionContext);

  return (
    <Dynamic
      component={local.as}
      onClick={accordionOnClick}
      {...props}
      type={local.as === "button" ? "button" : undefined}
      aria-expanded={eventKey === activeEventKey}
      className={classNames(
        local.className,
        bsPrefix,
        eventKey !== activeEventKey && "collapsed"
      )}
    />
  );
};
export default AccordionButton;
