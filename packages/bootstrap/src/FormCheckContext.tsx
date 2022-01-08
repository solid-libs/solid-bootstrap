import {createContext} from "solid-js";

const FormCheckContext = createContext<{setHasFormCheckLabel: (value: boolean) => void}>();

export default FormCheckContext;
