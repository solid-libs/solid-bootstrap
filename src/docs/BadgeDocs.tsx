import { Component, For } from "solid-js";
import Badge from "../bootstrap/Badge";

export const BadgeDocs: Component = () => {
  return (
    <div class="row gy-4">
      <div>
        <h3>Badges</h3>
        <p class="lead">
          Badges scale to match the size of the immediate parent element by
          using relative font sizing and em units.
        </p>
      </div>
      <div>
        <h1>
          Example heading <Badge bg="secondary">New</Badge>
        </h1>
        <h2>
          Example heading <Badge bg="secondary">New</Badge>
        </h2>
        <h3>
          Example heading <Badge bg="secondary">New</Badge>
        </h3>
        <h4>
          Example heading <Badge bg="secondary">New</Badge>
        </h4>
        <h5>
          Example heading <Badge bg="secondary">New</Badge>
        </h5>
        <h6>
          Example heading <Badge bg="secondary">New</Badge>
        </h6>
      </div>
      <div>
        {/* <Button variant="primary">
          Profile <Badge bg="secondary">9</Badge>
          <span className="visually-hidden">unread messages</span>
        </Button> */}
      </div>
      <div>
        <h5>Contextual</h5>
        <Badge bg="primary">Primary</Badge>{" "}
        <Badge bg="secondary">Secondary</Badge>{" "}
        <Badge bg="success">Success</Badge> <Badge bg="danger">Danger</Badge>{" "}
        <Badge bg="warning" text="dark">
          Warning
        </Badge>{" "}
        <Badge bg="info">Info</Badge>{" "}
        <Badge bg="light" text="dark">
          Light
        </Badge>{" "}
        <Badge bg="dark">Dark</Badge>
      </div>
      <div>
        <h5>Pills</h5>
        <Badge pill bg="primary">
          Primary
        </Badge>{" "}
        <Badge pill bg="secondary">
          Secondary
        </Badge>{" "}
        <Badge pill bg="success">
          Success
        </Badge>{" "}
        <Badge pill bg="danger">
          Danger
        </Badge>{" "}
        <Badge pill bg="warning" text="dark">
          Warning
        </Badge>{" "}
        <Badge pill bg="info">
          Info
        </Badge>{" "}
        <Badge pill bg="light" text="dark">
          Light
        </Badge>{" "}
        <Badge pill bg="dark">
          Dark
        </Badge>
      </div>
    </div>
  );
};
