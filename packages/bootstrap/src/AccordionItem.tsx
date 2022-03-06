// Ported from https://github.com/react-bootstrap/react-bootstrap/blob/f11723114d532cfce840417834a73733a8436414/src/AccordionItem.tsx

import {JSX, mergeProps, splitProps} from "solid-js";
import {Dynamic} from "solid-js/web";
import classNames from "./classnames";
import {useBootstrapPrefix} from "./ThemeProvider";
import AccordionItemContext, {AccordionItemContextValue} from "./AccordionItemContext";
import {BsPrefixRefForwardingComponent, BsPrefixProps} from "./helpers";

export interface AccordionItemProps extends BsPrefixProps, JSX.HTMLAttributes<HTMLElement> {
  eventKey: string;
}

const defaultProps: Partial<AccordionItemProps> = {
  as: "div",
};

const AccordionItem: BsPrefixRefForwardingComponent<"div", AccordionItemProps> = (p) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "bsPrefix",
    "className",
    "eventKey",
  ]);
  const bsPrefix = useBootstrapPrefix(local.bsPrefix, "accordion-item");
  const contextValue: AccordionItemContextValue = {
    get eventKey() {
      return local.eventKey!;
    },
  };

  return (
    <AccordionItemContext.Provider value={contextValue}>
      <Dynamic component={local.as} {...props} className={classNames(local.className, bsPrefix)}>
        {props.children}
      </Dynamic>
    </AccordionItemContext.Provider>
  );
};

export default AccordionItem;
