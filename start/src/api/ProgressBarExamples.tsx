import {createSignal, onCleanup} from "solid-js";
import {isServer} from "solid-js/web";

const [value, setValue] = createSignal(5);

if (!isServer) {
  const interval = window.setInterval(() => {
    setValue(value() < 100 ? value() + 5 : 0);
  }, 1000);
  // onCleanup(() => window.clearInterval(interval));
}

export {value};
