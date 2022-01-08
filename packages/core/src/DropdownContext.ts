import {createContext} from "solid-js";
import type {Placement} from "./usePopper";

export type DropdownContextValue = {
  toggle: (nextShow: boolean, event?: Event) => void;
  menuElement: HTMLElement | null;
  toggleElement: HTMLElement | null;
  setMenu: (ref: HTMLElement | null) => void;
  setToggle: (ref: HTMLElement | null) => void;

  show: boolean;
  placement: Placement;
};

const DropdownContext = createContext<DropdownContextValue | null>(null);

export default DropdownContext;
