import { Component } from "solid-js";
import { Card, Col, Nav, Row, Tab, Tabs } from "solid-bootstrap";
import Sonnet from "./Sonnet";
import GithubSource from "./GithubSource";
import TabsApi from "./TabsApi";

export const TabsDocs: Component = () => {
  return (
    <div class="row gy-4">
      <div>
        <GithubSource name="TabsDocs" />
        <h2>Tabbed components</h2>
        <p class="lead">Dynamic tabbed interfaces.</p>
      </div>
      <div>
        <Card>
          <Card.Header>Examples</Card.Header>
          <Card.Body>
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="home" title="Home">
                <Sonnet />
              </Tab>
              <Tab eventKey="profile" title="Profile">
                <Sonnet />
              </Tab>
              <Tab eventKey="contact" title="Contact" disabled>
                <Sonnet />
              </Tab>
            </Tabs>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Custom Tab Layout</Card.Header>
          <Card.Body>
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Row>
                <Col sm={3}>
                  <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Col>
                <Col sm={9}>
                  <Tab.Content>
                    <Tab.Pane eventKey="first">
                      <Sonnet />
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Sonnet />
                    </Tab.Pane>
                  </Tab.Content>
                </Col>
              </Row>
            </Tab.Container>
          </Card.Body>
        </Card>
      </div>
      <TabsApi />
    </div>
  );
};

export default TabsDocs;
