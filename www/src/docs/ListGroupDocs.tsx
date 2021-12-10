import { Component } from "solid-js";
import { Badge, Card, Tab, Row, Col, ListGroup } from "solid-bootstrap";
import GithubSource from "./GithubSource";
import ListGroupApi from "./ListGroupApi";

export const ListGroupDocs: Component = () => {
  function alertClicked() {
    alert("You clicked the third ListGroupItem");
  }

  return (
    <div class="row gy-4">
      <div>
        <GithubSource name="ListGroupDocs" />
        <h2>List groups</h2>
      </div>
      <div>
        <Card>
          <Card.Header>Basic Example</Card.Header>
          <Card.Body>
            <ListGroup>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Active items</Card.Header>
          <Card.Body>
            <ListGroup as="ul">
              <ListGroup.Item as="li" active>
                Cras justo odio
              </ListGroup.Item>
              <ListGroup.Item as="li">Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item as="li" disabled>
                Morbi leo risus
              </ListGroup.Item>
              <ListGroup.Item as="li">Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Disabled items</Card.Header>
          <Card.Body>
            <ListGroup>
              <ListGroup.Item disabled>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Actionable items</Card.Header>
          <Card.Body>
            <ListGroup defaultActiveKey="#link1">
              <ListGroup.Item action eventKey="#link1">
                Link 1
              </ListGroup.Item>
              <ListGroup.Item action eventKey="#link2" disabled>
                Link 2
              </ListGroup.Item>
              <ListGroup.Item action onClick={alertClicked}>
                This one is a button
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Flush</Card.Header>
          <Card.Body>
            <ListGroup variant="flush">
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Numbered</Card.Header>
          <Card.Body>
            <ListGroup as="ol" numbered>
              <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
              <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
              <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Custom content</Card.Header>
          <Card.Body class="col-md-4">
            <ListGroup as="ol" numbered>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>
                  Cras justo odio
                </div>
                <Badge bg="primary" pill>
                  14
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>
                  Cras justo odio
                </div>
                <Badge bg="primary" pill>
                  14
                </Badge>
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="d-flex justify-content-between align-items-start"
              >
                <div className="ms-2 me-auto">
                  <div className="fw-bold">Subheading</div>
                  Cras justo odio
                </div>
                <Badge bg="primary" pill>
                  14
                </Badge>
              </ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Horizontal</Card.Header>
          <Card.Body>
            <ListGroup horizontal>
              <ListGroup.Item>This</ListGroup.Item>
              <ListGroup.Item>ListGroup</ListGroup.Item>
              <ListGroup.Item>renders</ListGroup.Item>
              <ListGroup.Item>horizontally!</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Horizontal responsive with breakpoints</Card.Header>
          <Card.Body>
            {["sm", "md", "lg", "xl", "xxl"].map((breakpoint, idx) => (
              <ListGroup horizontal={breakpoint as any} className="my-2">
                <ListGroup.Item>This ListGroup</ListGroup.Item>
                <ListGroup.Item>renders horizontally</ListGroup.Item>
                <ListGroup.Item>on {breakpoint}</ListGroup.Item>
                <ListGroup.Item>and above!</ListGroup.Item>
              </ListGroup>
            ))}
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Contextual classes</Card.Header>
          <Card.Body>
            <ListGroup>
              <ListGroup.Item>No style</ListGroup.Item>
              <ListGroup.Item variant="primary">Primary</ListGroup.Item>
              <ListGroup.Item variant="secondary">Secondary</ListGroup.Item>
              <ListGroup.Item variant="success">Success</ListGroup.Item>
              <ListGroup.Item variant="danger">Danger</ListGroup.Item>
              <ListGroup.Item variant="warning">Warning</ListGroup.Item>
              <ListGroup.Item variant="info">Info</ListGroup.Item>
              <ListGroup.Item variant="light">Light</ListGroup.Item>
              <ListGroup.Item variant="dark">Dark</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Tabbed Interfaces</Card.Header>
          <Card.Body>
            <Tab.Container
              id="list-group-tabs-example"
              defaultActiveKey="#link1"
            >
              <Row>
                <Col sm={4}>
                  <ListGroup>
                    <ListGroup.Item action eventKey="#link1">
                      Link 1
                    </ListGroup.Item>
                    <ListGroup.Item action eventKey="#link2">
                      Link 2
                    </ListGroup.Item>
                  </ListGroup>
                </Col>
                <Col sm={8}>
                  <Tab.Content>
                    <Tab.Pane eventKey="#link1">Pane 1 content</Tab.Pane>
                    <Tab.Pane eventKey="#link2">Pane 2 content</Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Card.Body>
        </Card>
      </div>
      <ListGroupApi />
    </div>
  );
};

export default ListGroupDocs;
