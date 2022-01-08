import {createContext} from "solid-js";

interface CardHeaderContextValue {
  cardHeaderBsPrefix: string;
}

const context = createContext<CardHeaderContextValue | null>(null);

export default context;
