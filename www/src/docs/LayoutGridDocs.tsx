import { Component, createSignal } from "solid-js";
import Card from "../../../packages/bootstrap/src/Card";
import Container from "../../../packages/bootstrap/src/Container";
import Col from "../../../packages/bootstrap/src/Col";
import Row from "../../../packages/bootstrap/src/Row";
import "./styles.css";

export const LayoutGridDocs: Component = () => {
  return (
    <div class="row gy-4">
      <div>
        <h3>Grid system</h3>
        <p class="lead">
          Bootstrap’s grid system uses a series of containers, rows, and columns
          to layout and align content. It’s built with flexbox and is fully
          responsive. Below is an example and an in-depth look at how the grid
          comes together.
        </p>
      </div>
      <div className="show-grid">
        <Card>
          <Card.Header>Container</Card.Header>
          <Card.Body>
            <Container>
              <Row>
                <Col>1 of 1</Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Fluid Container</Card.Header>
          <Card.Body>
            <Container fluid>
              <Row>
                <Col>1 of 1</Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Fluid Container with breakpoint</Card.Header>
          <Card.Body>
            <Container fluid="md">
              <Row>
                <Col>1 of 1</Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Auto-layout columns</Card.Header>
          <Card.Body>
            <Container>
              <Row>
                <Col>1 of 2</Col>
                <Col>2 of 2</Col>
              </Row>
              <Row>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Setting one column width</Card.Header>
          <Card.Body>
            <Container>
              <Row>
                <Col>1 of 3</Col>
                <Col xs={6}>2 of 3 (wider)</Col>
                <Col>3 of 3</Col>
              </Row>
              <Row>
                <Col>1 of 3</Col>
                <Col xs={5}>2 of 3 (wider)</Col>
                <Col>3 of 3</Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Variable width content</Card.Header>
          <Card.Body>
            <Container>
              <Row className="justify-content-md-center">
                <Col xs lg="2">
                  1 of 3
                </Col>
                <Col md="auto">Variable width content</Col>
                <Col xs lg="2">
                  3 of 3
                </Col>
              </Row>
              <Row>
                <Col>1 of 3</Col>
                <Col md="auto">Variable width content</Col>
                <Col xs lg="2">
                  3 of 3
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Responsive grids</Card.Header>
          <Card.Body>
            <Container>
              <Row>
                <Col sm={8}>sm=8</Col>
                <Col sm={4}>sm=4</Col>
              </Row>
              <Row>
                <Col sm>sm=true</Col>
                <Col sm>sm=true</Col>
                <Col sm>sm=true</Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Mix and Match</Card.Header>
          <Card.Body>
            <Container>
              {/* Stack the columns on mobile by making one full-width and the other half-width */}
              <Row>
                <Col xs={12} md={8}>
                  xs=12 md=8
                </Col>
                <Col xs={6} md={4}>
                  xs=6 md=4
                </Col>
              </Row>

              {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
              <Row>
                <Col xs={6} md={4}>
                  xs=6 md=4
                </Col>
                <Col xs={6} md={4}>
                  xs=6 md=4
                </Col>
                <Col xs={6} md={4}>
                  xs=6 md=4
                </Col>
              </Row>

              {/* Columns are always 50% wide, on mobile and desktop */}
              <Row>
                <Col xs={6}>xs=6</Col>
                <Col xs={6}>xs=6</Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Col order (1-5)</Card.Header>
          <Card.Body>
            <Container>
              <Row>
                <Col xs>First, but unordered</Col>
                <Col xs={{ order: 5 }}>Second, but last</Col>
                <Col xs={{ order: 1 }}>Third, but second</Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Col order (first, last)</Card.Header>
          <Card.Body>
            <Container>
              <Row>
                <Col xs={{ order: "last" }}>First, but last</Col>
                <Col xs>Second, but unordered</Col>
                <Col xs={{ order: "first" }}>Third, but first</Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Offset columns</Card.Header>
          <Card.Body>
            <Container>
              <Row>
                <Col md={4}>md=4</Col>
                <Col
                  md={{ span: 4, offset: 4 }}
                >{`md={{ span: 4, offset: 4 }}`}</Col>
              </Row>
              <Row>
                <Col
                  md={{ span: 3, offset: 3 }}
                >{`md={{ span: 3, offset: 3 }}`}</Col>
                <Col
                  md={{ span: 3, offset: 3 }}
                >{`md={{ span: 3, offset: 3 }}`}</Col>
              </Row>
              <Row>
                <Col
                  md={{ span: 6, offset: 3 }}
                >{`md={{ span: 6, offset: 3 }}`}</Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Setting column widths in Row</Card.Header>
          <Card.Body>
            <Container>
              <Row xs={2} md={4} lg={6}>
                <Col>1 of 2</Col>
                <Col>2 of 2</Col>
              </Row>
              <Row xs={1} md={2}>
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
              </Row>
              <Row xs="auto">
                <Col>1 of 3</Col>
                <Col>2 of 3</Col>
                <Col>3 of 3</Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default LayoutGridDocs;
