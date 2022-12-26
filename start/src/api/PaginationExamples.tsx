import {For} from "solid-js";
import {Pagination} from "solid-bootstrap";

let active = 2;

export const items = () => (
  <For each={new Array(5)}>
    {(_, index) => <Pagination.Item active={index() + 1 === active}>{index() + 1}</Pagination.Item>}
  </For>
);
