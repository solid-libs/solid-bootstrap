import classNames from "classnames";
import { createMemo, JSX, mergeProps, splitProps, useContext } from "solid-js";
import { SelectCallback } from "../overlays/types";
import { createControlledProp } from "../controlled/createControlledProp";
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

const Accordion: BsPrefixRefForwardingComponent<"div", AccordionProps> = (
  p
) => {
  const [local, props] = splitProps(mergeProps({ as: "div" }, p), [
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
      />
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
