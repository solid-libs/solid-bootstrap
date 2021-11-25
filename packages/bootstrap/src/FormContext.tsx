import { createContext } from "solid-js";

// TODO
interface FormContextType {
  controlId?: any;
}

const FormContext = createContext<FormContextType>({});

export default FormContext;
