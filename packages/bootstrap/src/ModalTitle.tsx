import {createWithBsPrefix} from "./createWithBsPrefix";
import {divWithClass} from "./divWithClass";

const DivStyledAsH4 = divWithClass("h4");

export default createWithBsPrefix("modal-title", {Component: DivStyledAsH4});
