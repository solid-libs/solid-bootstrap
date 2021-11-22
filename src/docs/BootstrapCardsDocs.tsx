import { Component, createEffect, createSignal, For } from "solid-js";
import Button from "../bootstrap/Button";
import Card from "../bootstrap/Card";

export const BootstrapCardsDocs: Component = () => {
  return (
    <div class="row gy-4">
      <div>
        <h3>Cards</h3>
        <p class="lead">
          Bootstrap’s cards provide a flexible and extensible content container
          with multiple variants and options.
        </p>
      </div>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <h5>Content types</h5>
        <Card>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
      </div>
      <div>
        <h5>Title, text, and links</h5>
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              Card Subtitle
            </Card.Subtitle>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </div>
      <div>
        <h5>List Groups</h5>
        {/* <Card style={{ width: "18rem" }}>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card> */}
      </div>
    </div>
  );
};
