import { Component } from "solid-js";
import Card from "solid-bootstrap/Card";
import Button from "solid-bootstrap/Button";
import Spinner from "solid-bootstrap/Spinner";
import GithubSource from "./GithubSource";

export const SpinnerDocs: Component = () => {
  return (
    <div class="row gy-4">
      <div>
        <GithubSource name="SpinnerDocs" />
        <h2>Spinners</h2>
        <p class="lead">
          Spinners can be used to show the loading state in your projects.
        </p>
      </div>
      <div>
        <Card>
          <Card.Header>Border Spinner</Card.Header>
          <Card.Body>
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Grow Spinner</Card.Header>
          <Card.Body>
            <Spinner animation="grow" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Variants</Card.Header>
          <Card.Body>
            <Spinner animation="border" variant="primary" />
            <Spinner animation="border" variant="secondary" />
            <Spinner animation="border" variant="success" />
            <Spinner animation="border" variant="danger" />
            <Spinner animation="border" variant="warning" />
            <Spinner animation="border" variant="info" />
            <Spinner animation="border" variant="light" />
            <Spinner animation="border" variant="dark" />
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="light" />
            <Spinner animation="grow" variant="dark" />
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Sizing</Card.Header>
          <Card.Body>
            <Spinner animation="border" size="sm" />
            <Spinner animation="border" />
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" />
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Buttons</Card.Header>
          <Card.Body>
            {" "}
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="visually-hidden">Loading...</span>
            </Button>{" "}
            <Button variant="primary" disabled>
              <Spinner
                as="span"
                animation="grow"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              Loading...
            </Button>
          </Card.Body>
        </Card>
        <p>
          To ensure the maximum accessibility for spinner components it is
          recommended you provide a relevant ARIA role property, and include
          screenreader-only readable text representation of the spinner's
          meaning inside the component using Bootstrap's visually-hidden class.
        </p>
      </div>
    </div>
  );
};

export default SpinnerDocs;
