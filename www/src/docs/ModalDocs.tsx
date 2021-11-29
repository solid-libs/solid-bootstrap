import { Component, createSignal, For } from "solid-js";
import Button from "../../../packages/bootstrap/src/Button";
import Card from "../../../packages/bootstrap/src/Card";
import Modal from "../../../packages/bootstrap/src/Modal";
import Container from "../../../packages/bootstrap/src/Container";
import Row from "../../../packages/bootstrap/src/Row";
import Col from "../../../packages/bootstrap/src/Col";
import { ModalProps } from "../../../packages/core/src";

const booleanSignal = createSignal(false);

export const ModalDocs: Component = () => {
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

  const [fullscreen, setFullscreen] = createSignal<string | null>(null);

  return (
    <div class="row gy-4">
      <div>
        <h3>Modals</h3>
        <div class="head">
          Add dialogs to your site for lightboxes, user notifications, or
          completely custom content.
        </div>
      </div>
      <div>
        <h5>Overview</h5>
        <ul>
          <li>
            Modals are positioned over everything else in the document and
            remove scroll from the <code>{"<body>"}</code> so that modal content
            scrolls instead.
          </li>
          <li>Modals are unmounted when closed.</li>
          <li>
            Bootstrap only supports one modal window at a time. Nested modals
            aren't supported, but if you really need them, the underlying{" "}
            <code>solid-bootstrap/core</code> library can support them if you're
            willing.
          </li>
          <li>
            Modal's "trap" focus in them, ensuring the keyboard navigation
            cycles through the modal, and not the rest of the page.
          </li>
          <li>
            Unlike vanilla Bootstrap, <code>autoFocus</code> works in Modals
            because Solid handles the implementation.
          </li>
        </ul>
      </div>
      <div>
        <Card>
          <Card.Header>Static Markup</Card.Header>
          <Card.Body>
            <Modal.Dialog>
              <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <p>Modal body text goes here.</p>
              </Modal.Body>

              <Modal.Footer>
                <Button variant="secondary">Close</Button>
                <Button variant="primary">Save changes</Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Live demo</Card.Header>
          <Card.Body>
            <Button variant="primary" onClick={handleOpen("live")}>
              Launch demo modal
            </Button>
            <Modal show={show("live")} onHide={handleClose("live")}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Woohoo, you're reading this text in a modal!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose("live")}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose("live")}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>{" "}
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Static backdrop</Card.Header>
          <Card.Body>
            <Button variant="primary" onClick={handleOpen("static")}>
              Launch static backdrop modal
            </Button>
            <Modal
              show={show("static")}
              onHide={handleClose("static")}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                I will not close if you click outside me. Don't even try to
                press escape key.
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose("static")}>
                  Close
                </Button>
                <Button variant="primary">Understood</Button>
              </Modal.Footer>
            </Modal>{" "}
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Without Animation</Card.Header>
          <Card.Body>
            <Button variant="primary" onClick={handleOpen("noanim")}>
              Launch without animation
            </Button>
            <Modal
              show={show("noanim")}
              onHide={handleClose("noanim")}
              animation={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                Woohoo, you're reading this text in a modal!
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose("noanim")}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose("noanim")}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Vertically centered</Card.Header>
          <Card.Body>
            <Button variant="primary" onClick={handleOpen("vertc")}>
              Launch vertically centered modal
            </Button>
            <Modal
              show={show("vertc")}
              onHide={handleClose("vertc")}
              size="lg"
              aria-labelledby="contained-modal-title-vcenter"
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Modal heading
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo
                  odio, dapibus ac facilisis in, egestas eget quam. Morbi leo
                  risus, porta ac consectetur ac, vestibulum at eros.
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={handleClose("vertc")}>Close</Button>
              </Modal.Footer>
            </Modal>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Using the grid</Card.Header>
          <Card.Body>
            <Button variant="primary" onClick={handleOpen("grid")}>
              Launch modal with grid
            </Button>
            <Modal
              show={show("grid")}
              onHide={handleClose("grid")}
              aria-labelledby="contained-modal-title-vcenter"
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                  Modal heading
                </Modal.Title>
              </Modal.Header>
              <Modal.Body className="show-grid">
                <Container>
                  <Row>
                    <Col xs={12} md={8} style={infoStyle}>
                      .col-xs-12 .col-md-8
                    </Col>
                    <Col xs={6} md={4} style={infoStyle}>
                      .col-xs-6 .col-md-4
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={6} md={4} style={infoStyle}>
                      .col-xs-6 .col-md-4
                    </Col>
                    <Col xs={6} md={4} style={infoStyle}>
                      .col-xs-6 .col-md-4
                    </Col>
                    <Col xs={6} md={4} style={infoStyle}>
                      .col-xs-6 .col-md-4
                    </Col>
                  </Row>
                </Container>
              </Modal.Body>
              <Modal.Footer>
                <Button onClick={handleClose("grid")}>Close</Button>
              </Modal.Footer>
            </Modal>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Option sizes</Card.Header>
          <Card.Body>
            <Button onClick={handleOpen("small")}>Small modal</Button>{" "}
            <Button onClick={handleOpen("large")}>Large modal</Button>
            <Modal
              size="sm"
              show={show("small")}
              onHide={handleClose("small")}
              aria-labelledby="example-modal-sizes-title-sm"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                  Small Modal
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>...</Modal.Body>
            </Modal>
            <Modal
              size="lg"
              show={show("large")}
              onHide={handleClose("large")}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                  Large Modal
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>...</Modal.Body>
            </Modal>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Fullscreen Modal</Card.Header>
          <Card.Body>
            {[
              "true",
              "sm-down",
              "md-down",
              "lg-down",
              "xl-down",
              "xxl-down",
            ].map((v, idx) => (
              <Button className="me-2" onClick={() => setFullscreen(v)}>
                Full screen
                {v !== "true" && `below ${v.split("-")[0]}`}
              </Button>
            ))}
            <Modal
              show={!!fullscreen()}
              fullscreen={
                fullscreen() === "true" ||
                (fullscreen() as ModalProps["fullscreen"])
              }
              onHide={() => setFullscreen(null)}
            >
              <Modal.Header closeButton>
                <Modal.Title>Modal</Modal.Title>
              </Modal.Header>
              <Modal.Body>Modal body content</Modal.Body>
            </Modal>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Sizing modals using custom CSS</Card.Header>
          <Card.Body>
            <Button variant="primary" onClick={handleOpen("custom")}>
              Custom Width Modal
            </Button>
            <Modal
              show={show("custom")}
              onHide={handleClose("custom")}
              dialogClassName="modal-90w"
              aria-labelledby="example-custom-modal-styling-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-custom-modal-styling-title">
                  Custom Modal Styling
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>
                  Ipsum molestiae natus adipisci modi eligendi? Debitis amet
                  quae unde commodi aspernatur enim, consectetur. Cumque
                  deleniti temporibus ipsam atque a dolores quisquam quisquam
                  adipisci possimus laboriosam. Quibusdam facilis doloribus
                  debitis! Sit quasi quod accusamus eos quod. Ab quos
                  consequuntur eaque quo rem! Mollitia reiciendis porro quo
                  magni incidunt dolore amet atque facilis ipsum deleniti rem!
                </p>
              </Modal.Body>
            </Modal>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

const infoStyle = {
  "background-color": "#bbeffd",
  border: "1px solid #61dafb",
};

export default ModalDocs;
