// ported from https://github.com/react-bootstrap/react-bootstrap/blob/f11723114d532cfce840417834a73733a8436414/src/AccordionButton.tsx

import classNames from "./classnames";
import {JSX, mergeProps, splitProps, useContext} from "solid-js";
import {Dynamic} from "solid-js/web";
import {callEventHandler} from "solid-bootstrap-core";
import AccordionContext, {isAccordionItemSelected, AccordionEventKey} from "./AccordionContext";
import AccordionItemContext from "./AccordionItemContext";
import {BsPrefixProps, BsPrefixRefForwardingComponent} from "./helpers";
import {useBootstrapPrefix} from "./ThemeProvider";

type EventHandler = JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent>;

export interface AccordionButtonProps
  extends JSX.ButtonHTMLAttributes<HTMLButtonElement>,
    BsPrefixProps {}

export function useAccordionButton(eventKey: string, onClick?: EventHandler): EventHandler {
  const context = useContext(AccordionContext);

  return (e) => {
    /*
      Compare the event key in context with the given event key.
      If they are the same, then collapse the component.
    */
    let eventKeyPassed: AccordionEventKey = eventKey === context.activeEventKey ? null : eventKey;
    if (context.alwaysOpen) {
      if (Array.isArray(context.activeEventKey)) {
        if (context.activeEventKey.includes(eventKey)) {
          eventKeyPassed = context.activeEventKey.filter((k) => k !== eventKey);
        } else {
          eventKeyPassed = [...context.activeEventKey, eventKey];
        }
      } else {
        // activeEventKey is undefined.
        eventKeyPassed = [eventKey];
      }
    }

    context.onSelect?.(eventKeyPassed, e);
    callEventHandler(onClick, e);
  };
}

const defaultProps: Partial<AccordionButtonProps> = {
  as: "button",
};

const AccordionButton: BsPrefixRefForwardingComponent<"button", AccordionButtonProps> = (p) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "bsPrefix",
    "class",
    "onClick",
  ]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "accordion-button");
  const itemContext = useContext(AccordionItemContext);
  const accordionOnClick = useAccordionButton(itemContext.eventKey, local.onClick);
  const accordionContext = useContext(AccordionContext);

  return (
    <Dynamic
      component={local.as}
      onClick={accordionOnClick}
      {...props}
      type={local.as === "button" ? "button" : undefined}
      aria-expanded={itemContext.eventKey === accordionContext.activeEventKey}
      class={classNames(
        local.class,
        bsPrefix,
        !isAccordionItemSelected(accordionContext.activeEventKey, itemContext.eventKey) &&
          "collapsed",
      )}
    />
  );
};
export default AccordionButton;
