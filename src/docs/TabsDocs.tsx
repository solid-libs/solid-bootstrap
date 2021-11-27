import { Component } from "solid-js";
import Card from "../../packages/bootstrap/src/Card";
import Tabs from "../../packages/bootstrap/src/Tabs";
import Tab from "../../packages/bootstrap/src/Tab";
import Sonnet from "./Sonnet";

export const TabsDocs: Component = () => {
  return (
    <div class="row gy-4">
      <div>
        <h3>Tabbed components</h3>
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
          <Card.Header></Card.Header>
          <Card.Body></Card.Body>
        </Card>
        <Card>
          <Card.Header></Card.Header>
          <Card.Body></Card.Body>
        </Card>
        <Card>
          <Card.Header></Card.Header>
          <Card.Body></Card.Body>
        </Card>
      </div>
    </div>
  );
};
