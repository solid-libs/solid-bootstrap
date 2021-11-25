import { Component, For } from "solid-js";
import Button from "../bootstrap/Button";
import Card from "../bootstrap/Card";
import Placeholder from "../bootstrap/Placeholder";

export const PlaceholderDocs: Component = () => {
  return (
    <div class="row gy-4">
      <div>
        <h3>Placeholders</h3>
        <p class="lead">
          Use loading placeholders (otherwise known as "skeletons") for your
          components or pages to indicate something may still be loading
        </p>
      </div>
      <div>
        <Card>
          <Card.Header>Examples</Card.Header>
          <Card.Body>
            <div className="d-flex justify-content-around">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Card.Title>Card Title</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>

              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                  <Placeholder as={Card.Title} animation="glow">
                    <Placeholder xs={6} />
                  </Placeholder>
                  <Placeholder as={Card.Text} animation="glow">
                    <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
                    <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
                    <Placeholder xs={8} />
                  </Placeholder>
                  <Placeholder.Button variant="primary" xs={6} />
                </Card.Body>
              </Card>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Width</Card.Header>
          <Card.Body>
            <Placeholder xs={6} />
            <Placeholder className="w-75" />{" "}
            <Placeholder style={{ width: "25%" }} />
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Color</Card.Header>
          <Card.Body>
            <Placeholder xs={12} />
            <Placeholder xs={12} bg="primary" />
            <Placeholder xs={12} bg="secondary" />
            <Placeholder xs={12} bg="success" />
            <Placeholder xs={12} bg="danger" />
            <Placeholder xs={12} bg="warning" />
            <Placeholder xs={12} bg="info" />
            <Placeholder xs={12} bg="light" />
            <Placeholder xs={12} bg="dark" />
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Sizing</Card.Header>
          <Card.Body>
            <Placeholder xs={12} size="lg" />
            <Placeholder xs={12} />
            <Placeholder xs={12} size="sm" />
            <Placeholder xs={12} size="xs" />
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Animation</Card.Header>
          <Card.Body>
            <Placeholder as="p" animation="glow">
              <Placeholder xs={12} />
            </Placeholder>
            <Placeholder as="p" animation="wave">
              <Placeholder xs={12} />
            </Placeholder>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
