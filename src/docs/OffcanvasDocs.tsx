import { Component, createSignal, For } from "solid-js";
import Button from "../../packages/bootstrap/src/Button";
import Card from "../../packages/bootstrap/src/Card";
import Offcanvas from "../../packages/bootstrap/src/Offcanvas";

const booleanSignal = createSignal(false);

export const OffcanvasDocs: Component = () => {
  const signals = new Map<string, typeof booleanSignal>();
  const signal = (name: string) => {
    if (!signals.has(name)) {
      signals.set(name, createSignal(false));
    }
    return signals.get(name)!;
  };
  const show = (name: string) => signal(name)[0]();
  const handleOpen = (name: string) => () => signal(name)[1](true);
  const handleClose = (name: string) => () => signal(name)[1](false);

  return (
    <div class="row gy-4">
      <div>
        <h3>Offcanvas</h3>
        <p class="lead">
          Build hidden sidebars into your project for navigation, shopping
          carts, and more.
        </p>
      </div>
      <div>
        <Card>
          <Card.Header>Basic Example</Card.Header>
          <Card.Body>
            <Button variant="primary" onClick={handleOpen("basic")}>
              Launch
            </Button>

            <Offcanvas show={show("basic")} onHide={handleClose("basic")}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                Some text as placeholder. In real life you can have the elements
                you have chosen. Like, text, images, lists, etc.
              </Offcanvas.Body>
            </Offcanvas>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Placement</Card.Header>
          <Card.Body>
            {["start", "end", "top", "bottom"].map((placement, idx) => (
              <span>
                <Button
                  variant="primary"
                  onClick={handleOpen(placement)}
                  className="me-2"
                >
                  {placement}
                </Button>
                <Offcanvas
                  show={show(placement)}
                  onHide={handleClose(placement)}
                  placement={placement as any}
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                  </Offcanvas.Body>
                </Offcanvas>
              </span>
            ))}
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Backdrop</Card.Header>
          <Card.Body>
            {" "}
            {backdropOptions.map((options) => (
              <span>
                <Button
                  variant="primary"
                  onClick={handleOpen(options.name)}
                  className="me-2"
                >
                  {options.name}
                </Button>
                <Offcanvas
                  show={show(options.name)}
                  onHide={handleClose(options.name)}
                  {...options}
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    Some text as placeholder. In real life you can have the
                    elements you have chosen. Like, text, images, lists, etc.
                  </Offcanvas.Body>
                </Offcanvas>
              </span>
            ))}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

const backdropOptions = [
  {
    name: "Enable backdrop (default)",
    scroll: false,
    backdrop: true,
  },
  {
    name: "Disable backdrop",
    scroll: false,
    backdrop: false,
  },
  {
    name: "Enable body scrolling",
    scroll: true,
    backdrop: false,
  },
  {
    name: "Enable both scrolling & backdrop",
    scroll: true,
    backdrop: true,
  },
];
