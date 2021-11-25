import { createContext } from "solid-js";
import { AlignType } from "./types";

export type DropDirection = "up" | "start" | "end" | "down";

export type DropdownContextValue = {
  align?: AlignType;
  drop?: DropDirection;
  isRTL?: boolean;
};

const DropdownContext = createContext<DropdownContextValue>({});

export default DropdownContext;
