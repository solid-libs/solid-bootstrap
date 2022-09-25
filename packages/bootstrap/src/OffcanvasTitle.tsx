import {createWithBsPrefix} from "./createWithBsPrefix";
import {divWithClass} from "./divWithClass";

const DivStyledAsH5 = divWithClass("h5");

export default createWithBsPrefix("offcanvas-title", {
  Component: DivStyledAsH5,
});
