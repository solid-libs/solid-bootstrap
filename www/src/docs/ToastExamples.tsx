import {createSignal} from "solid-js";

const [show1, setShow1] = createSignal(true);
const [show2, setShow2] = createSignal(true);
const [show3, setShow3] = createSignal(false);
const [position, setPosition] = createSignal<any>("top-start");

export {show1, show2, show3, setShow1, setShow2, setShow3, position, setPosition};
