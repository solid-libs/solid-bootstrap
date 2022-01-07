import { JSX } from "solid-js";
import { OverlayTrigger, Tooltip } from "solid-bootstrap";

export const Link = (props: { id: string; children: JSX.Element; title: string }) => (
  <OverlayTrigger overlay={<Tooltip id={props.id}>{props.title}</Tooltip>}>
    <a href="#">{props.children}</a>
  </OverlayTrigger>
);
