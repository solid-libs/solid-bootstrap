import { createSignal } from "solid-js";

const booleanSignal = createSignal(false);

const signals = new Map<string, typeof booleanSignal>();
const signal = (name: string) => {
  if (!signals.has(name)) {
    signals.set(name, createSignal(false));
  }
  return signals.get(name)!;
};
  
export const show = (name: string) => signal(name)[0]();
export const handleOpen = (name: string) => () => signal(name)[1](true);
export const handleClose = (name: string) => () => signal(name)[1](false);

export const backdropOptions = [
  {
    name: "Enable backdrop (default)",
    scroll: false,
    backdrop: true,
  },
  {
    name: "Disable backdrop",
    scroll: false,
    backdrop: false,
  },
  {
    name: "Enable body scrolling",
    scroll: true,
    backdrop: false,
  },
  {
    name: "Enable both scrolling & backdrop",
    scroll: true,
    backdrop: true,
  },
];

