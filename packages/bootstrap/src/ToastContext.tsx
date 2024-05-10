import {createContext} from "solid-js";

export interface ToastContextType {
  onClose?: (e?: MouseEvent | KeyboardEvent) => void;
}

const ToastContext = createContext<ToastContextType>();

export default ToastContext;
