// ported from https://github.com/react-bootstrap/react-bootstrap/blob/f11723114d532cfce840417834a73733a8436414/src/AccordionContext.ts

import {createContext} from "solid-js";

export interface AccordionItemContextValue {
  eventKey: string;
}

const context = createContext<AccordionItemContextValue>({
  eventKey: "",
});

export default context;
