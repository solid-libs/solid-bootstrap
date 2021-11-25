import { createContext } from "solid-js";

export interface ToastContextType {
  onClose?: (e?: MouseEvent | KeyboardEvent) => void;
}

const ToastContext = createContext<ToastContextType>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose() {},
});

export default ToastContext;
