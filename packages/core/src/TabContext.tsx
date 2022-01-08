import {createContext} from "solid-js";
import {TransitionComponent} from "solid-react-transition";
import {EventKey, SelectCallback} from "./types";

export interface TabContextType {
  onSelect: SelectCallback;
  activeKey?: EventKey;
  transition?: TransitionComponent;
  mountOnEnter: boolean;
  unmountOnExit: boolean;
  getControlledId: (key: EventKey) => any;
  getControllerId: (key: EventKey) => any;
}

const TabContext = createContext<TabContextType | null>(null);

export default TabContext;
