import {createContext} from "solid-js";

export type TransitionGroupContextType = {
  isMounting: boolean;
};

export const TransitionGroupContext =
  createContext<TransitionGroupContextType | null>(null);

export default TransitionGroupContext;
