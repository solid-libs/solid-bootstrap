import { Component } from "solid-js";
import Card from "../../../packages/bootstrap/src/Card";
import Button from "../../../packages/bootstrap/src/Button";
import Form from "../../../packages/bootstrap/src/Form";
import Stack from "../../../packages/bootstrap/src/Stack";
import "./styles.css";
import GithubSource from "./GithubSource";

export const LayoutStackDocs: Component = () => {
  return (
    <div class="row gy-4">
      <div>
        <GithubSource name="LayoutStackDocs" />
        <h3>Stacks</h3>
        <p class="lead">
          Shorthand helpers that build on top of our flexbox utilities to make
          component layout faster and easier than ever
        </p>
      </div>
      <div className="show-grid">
        <Card>
          <Card.Header>Vertical</Card.Header>
          <Card.Body>
            <Stack gap={3}>
              <div className="bg-light border">First item</div>
              <div className="bg-light border">Second item</div>
              <div className="bg-light border">Third item</div>
            </Stack>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Horizontal</Card.Header>
          <Card.Body>
            <Stack direction="horizontal" gap={3}>
              <div className="bg-light border">First item</div>
              <div className="bg-light border">Second item</div>
              <div className="bg-light border">Third item</div>
            </Stack>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Horizontal .ms-auto</Card.Header>
          <Card.Body>
            <Stack direction="horizontal" gap={3}>
              <div className="bg-light border">First item</div>
              <div className="bg-light border ms-auto">Second item</div>
              <div className="bg-light border">Third item</div>
            </Stack>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Horizontal with vertical rules</Card.Header>
          <Card.Body>
            <Stack direction="horizontal" gap={3}>
              <div className="bg-light border">First item</div>
              <div className="vr" />
              <div className="bg-light border">Second item</div>
              <div className="vr" />
              <div className="bg-light border">Third item</div>
            </Stack>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Stack Buttons</Card.Header>
          <Card.Body>
            <Stack gap={2} className="col-md-5 mx-auto">
              <Button variant="secondary">Save changes</Button>
              <Button variant="outline-secondary">Cancel</Button>
            </Stack>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Inline form</Card.Header>
          <Card.Body>
            <Stack direction="horizontal" gap={3}>
              <Form.Control
                className="me-auto"
                placeholder="Add your item here..."
              />
              <Button variant="secondary">Submit</Button>
              <div className="vr" />
              <Button variant="outline-danger">Reset</Button>
            </Stack>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default LayoutStackDocs;
