import {  createSignal } from "solid-js";

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

const [fullscreen1, setFullscreen1] = createSignal<string | null>(null);
export const fullscreen = fullscreen1;
export const setFullscreen = setFullscreen1

export const infoStyle = {
  "background-color": "#bbeffd",
  border: "1px solid #61dafb",
}

