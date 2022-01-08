import {createContext} from "solid-js";

interface ModalContextType {
  onHide: () => void;
}

const ModalContext = createContext<ModalContextType>({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onHide() {},
});

export default ModalContext;
