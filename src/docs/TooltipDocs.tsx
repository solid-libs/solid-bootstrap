import { Component } from "solid-js";
import Card from "../../packages/bootstrap/src/Card";
import Tooltip from "../../packages/bootstrap/src/Tooltip";
import Button from "../../packages/bootstrap/src/Button";
import OverlayTrigger from "../../packages/bootstrap/src/OverlayTrigger";

export const TooltipDocs: Component = () => {
  return (
    <div class="row gy-4">
      <div>
        <h3>Tooltips</h3>
        <p class="lead">
          A tooltip component for a more stylish alternative to that anchor tag
          title attribute.
        </p>
      </div>
      <div>
        <Card>
          <Card.Header>Examples</Card.Header>
          <Card.Body>
            {/* <p>
              Tight pants next level keffiyeh{" "}
              <Tooltip>
                <a href="#">you probably</a>
              </Tooltip>{" "}
              haven't heard of them. Farm-to-table seitan, mcsweeney's fixie
              sustainable quinoa 8-bit american apparel <a href="#">have a</a>{" "}
              terry richardson vinyl chambray. Beard stumptown, cardigans banh
              mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko
              mcsweeney's cleanse vegan chambray. A really ironic artisan{" "}
              <a href="#">whatever keytar</a>, scenester farm-to-table banksy
              Austin <a href="#">twitter handle</a> freegan cred raw denim
              single-origin coffee viral.
            </p> */}
          </Card.Body>
        </Card>
        <Card>
          <Card.Header></Card.Header>
          <Card.Body></Card.Body>
        </Card>
        <Card>
          <Card.Header></Card.Header>
          <Card.Body></Card.Body>
        </Card>
        <Card>
          <Card.Header></Card.Header>
          <Card.Body></Card.Body>
        </Card>
        <Card>
          <Card.Header></Card.Header>
          <Card.Body></Card.Body>
        </Card>
      </div>
    </div>
  );
};

// const Link = ({ id, children, title }) => (
//   <OverlayTrigger overlay={<Tooltip id={id}>{title}</Tooltip>}>
//     <a href="#">{children}</a>
//   </OverlayTrigger>
// );
