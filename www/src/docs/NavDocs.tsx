import { Component } from "solid-js";
import Card from "../../../packages/bootstrap/src/Card";
import Nav from "../../../packages/bootstrap/src/Nav";
import NavDropdown from "../../../packages/bootstrap/src/NavDropdown";
import GithubSource from "./GithubSource";

export const NavDocs: Component = () => {
  return (
    <div class="row gy-4">
      <div>
        <GithubSource name="NavDocs" />
        <h3>Navs</h3>
        <p class="lead">
          Navigation bits in Bootstrap all share a general Nav component and
          styles. Swap variants to switch between each style. The base Nav
          component is built with flexbox and provide a strong foundation for
          building all types of navigation components.
        </p>
      </div>
      <div>
        <Card>
          <Card.Header>Base Nav</Card.Header>
          <Card.Body>
            <Nav
              activeKey="/home"
              onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
              <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                  Disabled
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Alignment and orientation</Card.Header>
          <Card.Body>
            <Nav className="justify-content-center" activeKey="/home">
              <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                  Disabled
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <p className="text-center mt-4 mb-4">Or right-aligned</p>
            <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                  Disabled
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Vertical</Card.Header>
          <Card.Body>
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="/home">Active</Nav.Link>
              <Nav.Link eventKey="link-1">Link</Nav.Link>
              <Nav.Link eventKey="link-2">Link</Nav.Link>
              <Nav.Link eventKey="disabled" disabled>
                Disabled
              </Nav.Link>
            </Nav>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Tabs</Card.Header>
          <Card.Body>
            <Nav variant="tabs" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Option 2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                  Disabled
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Pills</Card.Header>
          <Card.Body>
            <Nav variant="pills" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Option 2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                  Disabled
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Fill and justify</Card.Header>
          <Card.Body>
            <Nav fill variant="tabs" defaultActiveKey="/home">
              <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Loooonger NavLink</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                  Disabled
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Dropdowns</Card.Header>
          <Card.Body>
            <Nav
              variant="pills"
              activeKey="1"
              onSelect={(eventKey) => alert(`selected ${eventKey}`)}
            >
              <Nav.Item>
                <Nav.Link eventKey="1" href="#/home">
                  NavLink 1 content
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="2" title="Item">
                  NavLink 2 content
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="3" disabled>
                  NavLink 3 content
                </Nav.Link>
              </Nav.Item>
              <NavDropdown title="Dropdown" id="nav-dropdown">
                <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                <NavDropdown.Item eventKey="4.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item eventKey="4.3">
                  Something else here
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item eventKey="4.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default NavDocs;
