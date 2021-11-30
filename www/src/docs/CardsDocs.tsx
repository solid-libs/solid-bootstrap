import { Component } from "solid-js";
import Button from "../../../packages/bootstrap/src/Button";
import Card from "../../../packages/bootstrap/src/Card";
import CardGroup from "../../../packages/bootstrap/src/CardGroup";
import ListGroup from "../../../packages/bootstrap/src/ListGroup";
import Nav from "../../../packages/bootstrap/src/Nav";
import Row from "../../../packages/bootstrap/src/Row";
import Col from "../../../packages/bootstrap/src/Col";
import { useHolderJSRefresh } from "./utils";
import GithubSource from "./GithubSource";

const CardsDocs: Component = () => {
  useHolderJSRefresh();
  return (
    <div class="row gy-4">
      <div>
        <GithubSource name="CardsDocs" />
        <h2>Cards</h2>
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
        <h4>Content types</h4>
        <Card>
          <Card.Body>This is some text within a card body.</Card.Body>
        </Card>
      </div>
      <div>
        <h4>Title, text, and links</h4>
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
        <h4>List Groups</h4>
        <Card style={{ width: "18rem" }}>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Header>Featured</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
      <div>
        <h4>Header and Footer</h4>
        <Card>
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card>
          <Card.Header>Quote</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.{" "}
              </p>
              <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </div>
      <div>
        <h4>Images</h4>
        <Card>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
        <Card>
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <Card.Img variant="bottom" src="holder.js/100px180" />
        </Card>
      </div>
      <div>
        <h4>Image overlays</h4>
        <Card>
          <Card.Img src="holder.js/100px270" alt="Card image" />
          <Card.ImgOverlay className="text-light">
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
      <div>
        <h4>Navigation</h4>
        <Card>
          <Card.Header>
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link eventKey="#first">Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="#link">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="#disabled" disabled>
                  Disabled
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <Card>
          <Card.Header>
            <Nav variant="pills" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link eventKey="#first">Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="#link">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="#disabled" disabled>
                  Disabled
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
      <div>
        <h4>Background color</h4>
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
          <Card
            bg={variant.toLowerCase()}
            text={variant.toLowerCase() === "light" ? "dark" : "white"}
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>{variant} Card Title </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      <div>
        <h4>Border color</h4>
        <Card border="primary" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Primary Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card border="secondary" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Secondary Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card border="success" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Success Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card border="danger" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Danger Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card border="warning" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Warning Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card border="info" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Info Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card border="dark" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Dark Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />

        <Card border="light" style={{ width: "18rem" }}>
          <Card.Header>Header</Card.Header>
          <Card.Body>
            <Card.Title>Light Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
        <br />
      </div>
      <div>
        <h4>Card Groups</h4>
        <CardGroup>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to
                additional content.{" "}
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="holder.js/100px160" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </div>
      <div>
        <h4>Grid cards</h4>
        <Row xs={1} md={2} className="g-4">
          {Array.from({ length: 4 }).map((_, idx) => (
            <Col>
              <Card>
                <Card.Img variant="top" src="holder.js/100px160" />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};
export default CardsDocs;
