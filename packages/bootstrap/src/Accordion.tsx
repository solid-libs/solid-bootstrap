// ported from https://github.com/react-bootstrap/react-bootstrap/blob/f11723114d532cfce840417834a73733a8436414/src/Accordion.tsx

import classNames from "classnames";
import { JSX, mergeProps, splitProps } from "solid-js";
import { SelectCallback } from "solid-bootstrap-core/types";
import { createControlledProp } from "solid-bootstrap-core/createControlledProp";
import { useBootstrapPrefix } from "./ThemeProvider";
import AccordionBody from "./AccordionBody";
import AccordionButton from "./AccordionButton";
import AccordionCollapse from "./AccordionCollapse";
import AccordionContext from "./AccordionContext";
import AccordionHeader from "./AccordionHeader";
import AccordionItem from "./AccordionItem";
import { BsPrefixProps, BsPrefixRefForwardingComponent } from "./helpers";
import { Dynamic } from "solid-js/web";

export interface AccordionProps
  extends Omit<JSX.HTMLAttributes<HTMLElement>, "onSelect">,
    BsPrefixProps {
  activeKey?: string;
  defaultActiveKey?: string;
  onSelect?: SelectCallback;
  flush?: boolean;
}

const defaultProps = {
  as: "div",
};

const Accordion: BsPrefixRefForwardingComponent<"div", AccordionProps> = (
  p
) => {
  const [local, props] = splitProps(mergeProps(defaultProps, p), [
    "as",
    "activeKey",
    "bsPrefix",
    "className",
    "defaultActiveKey",
    "onSelect",
    "flush",
  ]);

  const [activeKey, onSelect] = createControlledProp(
    () => local.activeKey,
    () => local.defaultActiveKey,
    local.onSelect
  );

  const prefix = useBootstrapPrefix(local.bsPrefix, "accordion");
  const contextValue = {
    get activeEventKey() {
      return activeKey();
    },
    get onSelect() {
      return onSelect;
    },
  };

  return (
    <AccordionContext.Provider value={contextValue}>
      <Dynamic
        component={local.as}
        {...props}
        className={classNames(
          local.className,
          prefix,
          local.flush && `${prefix}-flush`
        )}
      >
        {props.children}
      </Dynamic>
    </AccordionContext.Provider>
  );
};

export default Object.assign(Accordion, {
  Button: AccordionButton,
  Collapse: AccordionCollapse,
  Item: AccordionItem,
  Header: AccordionHeader,
  Body: AccordionBody,
});
