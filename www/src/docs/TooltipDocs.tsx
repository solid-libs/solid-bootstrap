import { Component, JSX } from "solid-js";
import Card from "../../../packages/bootstrap/src/Card";
import Tooltip from "../../../packages/bootstrap/src/Tooltip";
import Button from "../../../packages/bootstrap/src/Button";
import OverlayTrigger from "../../../packages/bootstrap/src/OverlayTrigger";
import GithubSource from "./GithubSource";

export const TooltipDocs: Component = () => {
  return (
    <div class="row gy-4">
      <div>
        <GithubSource name="TooltipDocs" />
        <h2>Tooltips</h2>
        <p class="lead">
          A tooltip component for a more stylish alternative to that anchor tag
          title attribute.
        </p>
      </div>
      <div>
        <Card>
          <Card.Header>Examples</Card.Header>
          <Card.Body>
            <p>
              Tight pants next level keffiyeh{" "}
              <Link title="Default title" id="t-1">
                you probably
              </Link>{" "}
              haven't heard of them. Farm-to-table seitan, mcsweeney's fixie
              sustainable quinoa 8-bit american apparel{" "}
              <Link id="t-2" title="Another one">
                have a
              </Link>{" "}
              terry richardson vinyl chambray. Beard stumptown, cardigans banh
              mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko
              mcsweeney's cleanse vegan chambray. A really ironic artisan{" "}
              <Link title="Another one here too" id="t-3">
                whatever keytar
              </Link>
              , scenester farm-to-table banksy Austin{" "}
              <Link title="The last tip!" id="t-4">
                twitter handle
              </Link>{" "}
              freegan cred raw denim single-origin coffee viral.
            </p>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>OverlayTrigger (delayed hide)</Card.Header>
          <Card.Body>
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={<Tooltip id="button-tooltip">Simple tooltip</Tooltip>}
            >
              <Button variant="success">Hover me to see</Button>
            </OverlayTrigger>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

const Link = (props: { id: string; children: JSX.Element; title: string }) => (
  <OverlayTrigger overlay={<Tooltip id={props.id}>{props.title}</Tooltip>}>
    <a href="#">{props.children}</a>
  </OverlayTrigger>
);

export default TooltipDocs;
