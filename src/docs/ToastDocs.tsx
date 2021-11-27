import { Component, createSignal } from "solid-js";
import Card from "../../packages/bootstrap/src/Card";
import Toast from "../../packages/bootstrap/src/Toast";
import ToastContainer, {
  ToastPosition,
} from "../../packages/bootstrap/src/ToastContainer";
import Button from "../../packages/bootstrap/src/Button";
import Col from "../../packages/bootstrap/src/Col";
import Row from "../../packages/bootstrap/src/Row";
import Form from "../../packages/bootstrap/src/Form";

export const ToastDocs: Component = () => {
  const [show1, setShow1] = createSignal(true);
  const [show2, setShow2] = createSignal(true);
  const [show3, setShow3] = createSignal(false);
  const [position, setPosition] = createSignal<ToastPosition>("top-start");

  return (
    <div class="row gy-4">
      <div>
        <h3>Toasts</h3>
        <p class="lead">
          Push notifications to your visitors with a toast, a lightweight and
          easily customizable alert message.
        </p>
      </div>
      <div>
        <Card>
          <Card.Header>Examples</Card.Header>
          <Card.Body>
            <Toast>
              <Toast.Header>
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded me-2"
                  alt=""
                />
                <strong className="me-auto">Bootstrap</strong>
                <small>11 mins ago</small>
              </Toast.Header>
              <Toast.Body>Hello, world! This is a toast message.</Toast.Body>
            </Toast>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Dismissible</Card.Header>
          <Card.Body>
            <Row>
              <Col md={6} className="mb-2">
                <Button onClick={() => setShow1((s) => !s)} className="mb-2">
                  Toggle Toast <strong>with</strong> Animation
                </Button>
                <Toast show={show1()} onClose={() => setShow1(false)}>
                  <Toast.Header>
                    <img
                      src="holder.js/20x20?text=%20"
                      className="rounded me-2"
                      alt=""
                    />
                    <strong className="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                  </Toast.Header>
                  <Toast.Body>
                    Woohoo, you're reading this text in a Toast!
                  </Toast.Body>
                </Toast>
              </Col>
              <Col md={6} className="mb-2">
                <Button onClick={() => setShow2((s) => !s)} className="mb-2">
                  Toggle Toast <strong>without</strong> Animation
                </Button>
                <Toast
                  show={show2()}
                  onClose={() => setShow2(false)}
                  animation={false}
                >
                  <Toast.Header>
                    <img
                      src="holder.js/20x20?text=%20"
                      className="rounded me-2"
                      alt=""
                    />
                    <strong className="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                  </Toast.Header>
                  <Toast.Body>
                    Woohoo, you're reading this text in a Toast!
                  </Toast.Body>
                </Toast>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Stacking</Card.Header>
          <Card.Body>
            <ToastContainer>
              <Toast>
                <Toast.Header>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                  />
                  <strong className="me-auto">Bootstrap</strong>
                  <small className="text-muted">just now</small>
                </Toast.Header>
                <Toast.Body>See? Just like this.</Toast.Body>
              </Toast>
              <Toast>
                <Toast.Header>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                  />
                  <strong className="me-auto">Bootstrap</strong>
                  <small className="text-muted">2 seconds ago</small>
                </Toast.Header>
                <Toast.Body>
                  Heads up, toasts will stack automatically
                </Toast.Body>
              </Toast>
            </ToastContainer>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Placement</Card.Header>
          <Card.Body>
            <div className="mb-3">
              <label htmlFor="selectToastPlacement">Toast position</label>
              <Form.Select
                id="selectToastPlacement"
                className="mt-2"
                onChange={(e) =>
                  setPosition(e.currentTarget.value as ToastPosition)
                }
              >
                {[
                  "top-start",
                  "top-center",
                  "top-end",
                  "middle-start",
                  "middle-center",
                  "middle-end",
                  "bottom-start",
                  "bottom-center",
                  "bottom-end",
                ].map((p) => (
                  <option value={p}>{p}</option>
                ))}
              </Form.Select>
            </div>
            <div
              aria-live="polite"
              aria-atomic="true"
              className="bg-dark position-relative"
              style={{ "min-height": "240px" }}
            >
              <ToastContainer className="p-3" position={position()}>
                <Toast>
                  <Toast.Header closeButton={false}>
                    <img
                      src="holder.js/20x20?text=%20"
                      className="rounded me-2"
                      alt=""
                    />
                    <strong className="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                  </Toast.Header>
                  <Toast.Body>
                    Hello, world! This is a toast message.
                  </Toast.Body>
                </Toast>
              </ToastContainer>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Wrapping element to stack</Card.Header>
          <Card.Body>
            <div
              aria-live="polite"
              aria-atomic="true"
              className="bg-dark position-relative"
              style={{ "min-height": "240px" }}
            >
              <ToastContainer position="top-end" className="p-3">
                <Toast>
                  <Toast.Header>
                    <img
                      src="holder.js/20x20?text=%20"
                      className="rounded me-2"
                      alt=""
                    />
                    <strong className="me-auto">Bootstrap</strong>
                    <small className="text-muted">just now</small>
                  </Toast.Header>
                  <Toast.Body>See? Just like this.</Toast.Body>
                </Toast>
                <Toast>
                  <Toast.Header>
                    <img
                      src="holder.js/20x20?text=%20"
                      className="rounded me-2"
                      alt=""
                    />
                    <strong className="me-auto">Bootstrap</strong>
                    <small className="text-muted">2 seconds ago</small>
                  </Toast.Header>
                  <Toast.Body>
                    Heads up, toasts will stack automatically
                  </Toast.Body>
                </Toast>
              </ToastContainer>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Autohide (3000 ms)</Card.Header>
          <Card.Body>
            <Row>
              <Col xs={6}>
                <Toast
                  onClose={() => setShow3(false)}
                  show={show3()}
                  delay={3000}
                  autohide
                >
                  <Toast.Header>
                    <img
                      src="holder.js/20x20?text=%20"
                      className="rounded me-2"
                      alt=""
                    />
                    <strong className="me-auto">Bootstrap</strong>
                    <small>11 mins ago</small>
                  </Toast.Header>
                  <Toast.Body>
                    Woohoo, you're reading this text in a Toast!
                  </Toast.Body>
                </Toast>
              </Col>
              <Col xs={6}>
                <Button onClick={() => setShow3(true)}>Show Toast</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Contextual variations</Card.Header>
          <Card.Body>
            {[
              "Primary",
              "Secondary",
              "Success",
              "Danger",
              "Warning",
              "Info",
              "Light",
              "Dark",
            ].map((variant, idx) => (
              <Toast className="d-inline-block m-1" bg={variant.toLowerCase()}>
                <Toast.Header>
                  <img
                    src="holder.js/20x20?text=%20"
                    className="rounded me-2"
                    alt=""
                  />
                  <strong className="me-auto">Bootstrap</strong>
                  <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body className={variant === "Dark" ? "text-white" : ""}>
                  Hello, world! This is a toast message.
                </Toast.Body>
              </Toast>
            ))}
          </Card.Body>
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
