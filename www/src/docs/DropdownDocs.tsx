import { Component } from "solid-js";
import Container from "solid-bootstrap/Container";
import Dropdown from "solid-bootstrap/Dropdown";
import DropdownButton from "solid-bootstrap/DropdownButton";
import Button from "solid-bootstrap/Button";
import ButtonGroup from "solid-bootstrap/ButtonGroup";
import SplitButton from "solid-bootstrap/SplitButton";
import Nav from "solid-bootstrap/Nav";
import Navbar from "solid-bootstrap/Navbar";
import NavDropdown from "solid-bootstrap/NavDropdown";
import { DropDirection } from "solid-bootstrap/DropdownContext";
import Alert from "solid-bootstrap/Alert";
import GithubSource from "./GithubSource";
import DropdownApi from "./DropdownApi";
import { Row } from "solid-bootstrap";

export const DropdownDocs: Component = () => {
  return (
    <div class="row gy-4 pb-5 mb-5">
      <div>
        <GithubSource name="DropdownDocs" />
        <h2>Dropdowns</h2>
        <p class="lead">
          Toggle contextual overlays for displaying lists of links and more with
          the Bootstrap dropdown plugin.
        </p>
        <Dropdown>
          <Dropdown.Toggle variant="success" id="dropdown-basic">
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        <p>
          ...or with simplified <code>DropdownButton</code> component...
        </p>
        <DropdownButton id="dropdown-basic-button" title="Dropdown button">
          <Dropdown.Item eventKey="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
      </div>
      <div>
        {["Primary", "Secondary", "Success", "Info", "Warning", "Danger"].map(
          (variant) => (
            <DropdownButton
              as={ButtonGroup}
              className="me-2"
              key={variant}
              id={`dropdown-variants-${variant}`}
              variant={variant.toLowerCase()}
              title={variant}
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3" active>
                Active Item
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
          )
        )}
      </div>
      <div>
        <h4>Split button dropdowns</h4>
        <Dropdown as={ButtonGroup}>
          <Button variant="success">Split Button</Button>

          <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

          <Dropdown.Menu>
            <Dropdown.Item eventKey="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item eventKey="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div>
        <p>
          ...or with simplified <code>SplitButton</code> component...
        </p>
        {["Primary", "Secondary", "Success", "Info", "Warning", "Danger"].map(
          (variant) => (
            <SplitButton
              id={`dropdown-split-variants-${variant}`}
              className="me-2"
              variant={variant.toLowerCase()}
              title={variant}
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3" active>
                Active Item
              </Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </SplitButton>
          )
        )}
      </div>
      <div>
        <h4>Sizing</h4>
        <div className="mb-2">
          {[DropdownButton, SplitButton].map((DropdownType, idx) => (
            <DropdownType
              as={ButtonGroup}
              className="me-2"
              id={`dropdown-button-drop-${idx}`}
              size="lg"
              title="Drop large"
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownType>
          ))}
        </div>
        <div>
          {[DropdownButton, SplitButton].map((DropdownType, idx) => (
            <DropdownType
              as={ButtonGroup}
              className="me-2"
              id={`dropdown-button-drop-${idx}`}
              size="sm"
              variant="secondary"
              title="Drop small"
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownType>
          ))}
        </div>
      </div>
      <div>
        <h4>Dark dropdowns</h4>
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-button-dark-example1"
            variant="secondary"
          >
            Dropdown Button
          </Dropdown.Toggle>

          <Dropdown.Menu variant="dark">
            <Dropdown.Item eventKey="#/action-1" active>
              Action
            </Dropdown.Item>
            <Dropdown.Item eventKey="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item eventKey="#/action-3">Something else</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item eventKey="#/action-4">Separated link</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <DropdownButton
          id="dropdown-button-dark-example2"
          variant="secondary"
          menuVariant="dark"
          title="Dropdown button"
          className="mt-2"
        >
          <Dropdown.Item eventKey="#/action-1" active>
            Action
          </Dropdown.Item>
          <Dropdown.Item eventKey="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="#/action-3">Something else</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="#/action-4">Separated link</Dropdown.Item>
        </DropdownButton>{" "}
      </div>
      <div>
        <h4>Dropdown in NavBar</h4>
        <Navbar variant="dark" bg="dark" expand="lg">
          <Container fluid>
            <Navbar.Brand href="#">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example">
              <Nav>
                <NavDropdown
                  id="nav-dropdown-dark-example"
                  title="Dropdown"
                  menuVariant="dark"
                >
                  <NavDropdown.Item eventKey="#action/3.1">
                    Action
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item eventKey="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item eventKey="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <h4>Drop directions</h4>
        <div className="mb-2">
          {["up", "down", "start", "end"].map((direction) => (
            <DropdownButton
              as={ButtonGroup}
              className="me-2"
              id={`dropdown-button-drop-${direction}`}
              drop={direction as DropDirection}
              variant="secondary"
              title={` Drop ${direction} `}
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </DropdownButton>
          ))}
        </div>

        <div>
          {["up", "down", "start", "end"].map((direction) => (
            <SplitButton
              id={`dropdown-button-drop-${direction}`}
              className="me-2"
              drop={direction as DropDirection}
              variant="secondary"
              title={`Drop ${direction}`}
            >
              <Dropdown.Item eventKey="1">Action</Dropdown.Item>
              <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
              <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
            </SplitButton>
          ))}
        </div>
      </div>
      <div>
        <h4>Dropdown items</h4>
        <p>
          Historically dropdown menu contents had to be links, but that’s no
          longer the case with v4. Now you can optionally use{" "}
          <code>{"<button>"}</code> elements in your dropdowns instead of just{" "}
          <code>{"<a>"}</code>s.
        </p>
        <p>
          You can also create non-interactive dropdown items with{" "}
          {"<Dropdown.ItemText>"}. Feel free to style further with custom CSS or
          text utilities.
        </p>
        <DropdownButton id="dropdown-item-button" title="Dropdown button">
          <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
          <Dropdown.Item as="button">Action</Dropdown.Item>
          <Dropdown.Item as="button">Another action</Dropdown.Item>
          <Dropdown.Item as="button">Something else</Dropdown.Item>
        </DropdownButton>
      </div>

      <div>
        <h4>Menu alignment</h4>
        <p>
          By default, a dropdown menu is aligned to the left, but you can switch
          it by passing align="end" to a <code>{"<Dropdown>"}</code>,{" "}
          <code>{"<DropdownButton>"}</code>, or <code>{"<SplitButton>"}</code>.
        </p>
        <DropdownButton
          align="end"
          title="Dropdown end"
          id="dropdown-menu-align-end"
        >
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </DropdownButton>
      </div>
      <div>
        <h4>Responsive alignment</h4>
        <p>
          If you want to use responsive menu alignment, pass an object
          containing a breakpoint to the align prop on the{" "}
          <code>{"<DropdownMenu>"}</code>, <code>{"<DropdownButton>"}</code>, or{" "}
          <code>{"<SplitButton>"}</code>. You can specify <code>start</code> or{" "}
          <code>end</code> for the various breakpoints.
        </p>
        <Alert variant="danger">
          Using responsive alignment will disable Popper usage so any dynamic
          positioning features such as flip will not work.
        </Alert>
        <div>
          <DropdownButton
            as={ButtonGroup}
            align={{ lg: "end" }}
            title="Left-aligned but right aligned when large screen"
            id="dropdown-menu-align-responsive-1"
          >
            <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
            <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
          </DropdownButton>
        </div>
        <div className="mt-2">
          <SplitButton
            align={{ lg: "start" }}
            title="Right-aligned but left aligned when large screen"
            id="dropdown-menu-align-responsive-2"
          >
            <Dropdown.Item eventKey="1">Action 1</Dropdown.Item>
            <Dropdown.Item eventKey="2">Action 2</Dropdown.Item>
          </SplitButton>
        </div>
      </div>
      <div className="mt-5 pt-5">
        <h4>Menu headers</h4>
        <Dropdown.Menu show style={{ position: "relative" }}>
          <Dropdown.Header>Dropdown header</Dropdown.Header>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        </Dropdown.Menu>
      </div>
      <div>
        <h4>Menu dividers</h4>
        <Dropdown.Menu show style={{ position: "relative" }}>
          <Dropdown.Item eventKey="1">Action</Dropdown.Item>
          <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
          <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
        </Dropdown.Menu>
      </div>

      <div className="pb-5">
        <h4>AutoClose</h4>
        <Dropdown className="d-inline mx-2">
          <Dropdown.Toggle id="dropdown-autoclose-true">
            Default Dropdown
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="d-inline me-2" autoClose="inside">
          <Dropdown.Toggle id="dropdown-autoclose-inside">
            Clickable Outside
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="d-inline me-2" autoClose="outside">
          <Dropdown.Toggle id="dropdown-autoclose-outside">
            Clickable Inside
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="d-inline me-2" autoClose={false}>
          <Dropdown.Toggle id="dropdown-autoclose-false">
            Manual Close
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            <Dropdown.Item href="#">Menu Item</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>{" "}
      </div>
      <DropdownApi />
    </div>
  );
};

export default DropdownDocs;
