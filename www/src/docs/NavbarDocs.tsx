import { Component } from "solid-js";
import Card from "solid-bootstrap/Card";
import Nav from "solid-bootstrap/Nav";
import Navbar from "solid-bootstrap/Navbar";
import NavDropdown from "solid-bootstrap/NavDropdown";
import Container from "solid-bootstrap/Container";
import Form from "solid-bootstrap/Form";
import FormControl from "solid-bootstrap/FormControl";
import Button from "solid-bootstrap/Button";
import Offcanvas from "solid-bootstrap/Offcanvas";
import GithubSource from "./GithubSource";

export const NavbarDocs: Component = () => {
  return (
    <div class="row gy-4">
      <div>
        <GithubSource name="NavbarDocs" />
        <h2>Navbars</h2>
        <p class="lead">
          A powerful, responsive navigation header, the navbar. Includes support
          for branding, navigation, and more
        </p>
      </div>
      <div>
        <Card>
          <Card.Header>Overview</Card.Header>
          <Card.Body>
            <Navbar bg="light" expand="lg">
              <Container>
                <Navbar.Brand href="#">Solid-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link eventKey="#home">Home</Nav.Link>
                    <Nav.Link eventKey="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
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
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Brand</Card.Header>
          <Card.Body>
            {" "}
            <Navbar bg="light">
              <Container>
                <Navbar.Brand href="#">Brand link</Navbar.Brand>
              </Container>
            </Navbar>
            <br />
            <Navbar bg="light">
              <Container>
                <Navbar.Brand>Brand text</Navbar.Brand>
              </Container>
            </Navbar>
            <br />
            <Navbar bg="dark">
              <Container>
                <Navbar.Brand href="#">
                  <img
                    src="logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Solid Bootstrap logo"
                  />
                </Navbar.Brand>
              </Container>
            </Navbar>
            <br />
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#">
                  <img
                    alt=""
                    src="logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                  />{" "}
                  Solid Bootstrap
                </Navbar.Brand>
              </Container>
            </Navbar>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Text and Non-nav links</Card.Header>
          <Card.Body>
            <Navbar>
              <Container>
                <Navbar.Brand href="#">Navbar with text</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                  <Navbar.Text>
                    Signed in as: <a href="#">Mark Otto</a>
                  </Navbar.Text>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Color schemes</Card.Header>
          <Card.Body>
            {" "}
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link eventKey="#home">Home</Nav.Link>
                  <Nav.Link eventKey="#features">Features</Nav.Link>
                  <Nav.Link eventKey="#pricing">Pricing</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
            <br />
            <Navbar bg="primary" variant="dark">
              <Container>
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link eventKey="#home">Home</Nav.Link>
                  <Nav.Link eventKey="#features">Features</Nav.Link>
                  <Nav.Link eventKey="#pricing">Pricing</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
            <br />
            <Navbar bg="light" variant="light">
              <Container>
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                  <Nav.Link eventKey="#home">Home</Nav.Link>
                  <Nav.Link eventKey="#features">Features</Nav.Link>
                  <Nav.Link eventKey="#pricing">Pricing</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Containers</Card.Header>
          <Card.Body>
            <Container>
              <Navbar expand="lg" variant="light" bg="light">
                <Container>
                  <Navbar.Brand href="#">Navbar</Navbar.Brand>
                </Container>
              </Navbar>
            </Container>
          </Card.Body>
          <Card.Body>
            <Navbar expand="lg" variant="light" bg="light">
              <Container>
                <Navbar.Brand href="#">Navbar</Navbar.Brand>
              </Container>
            </Navbar>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Scrolling</Card.Header>
          <Card.Body>
            <Navbar bg="light" expand="lg">
              <Container fluid>
                <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ "max-height": "100px" }}
                    navbarScroll
                  >
                    <Nav.Link eventKey="#action1">Home</Nav.Link>
                    <Nav.Link eventKey="#action2">Link</Nav.Link>
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                      <NavDropdown.Item eventKey="#action3">
                        Action
                      </NavDropdown.Item>
                      <NavDropdown.Item eventKey="#action4">
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item eventKey="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link eventKey="#" disabled>
                      Link
                    </Nav.Link>
                  </Nav>
                  <Form className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Responsive behaviors</Card.Header>
          <Card.Body>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href="#">Solid-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="me-auto">
                    <Nav.Link eventKey="#features">Features</Nav.Link>
                    <Nav.Link eventKey="#pricing">Pricing</Nav.Link>
                    <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
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
                  <Nav>
                    <Nav.Link eventKey="#deets">More deets</Nav.Link>
                    <Nav.Link eventKey={2} href="#">
                      Dank memes
                    </Nav.Link>
                  </Nav>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Offcanvas</Card.Header>
          <Card.Body>
            <Navbar bg="light" expand={false}>
              <Container fluid>
                <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                  id="offcanvasNavbar"
                  aria-labelledby="offcanvasNavbarLabel"
                  placement="end"
                >
                  <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">
                      Offcanvas
                    </Offcanvas.Title>
                  </Offcanvas.Header>
                  <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                      <Nav.Link eventKey="#action1">Home</Nav.Link>
                      <Nav.Link eventKey="#action2">Link</Nav.Link>
                      <NavDropdown
                        title="Dropdown"
                        id="offcanvasNavbarDropdown"
                      >
                        <NavDropdown.Item eventKey="#action3">
                          Action
                        </NavDropdown.Item>
                        <NavDropdown.Item eventKey="#action4">
                          Another action
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item eventKey="#action5">
                          Something else here
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                      <FormControl
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                      />
                      <Button variant="outline-success">Search</Button>
                    </Form>
                  </Offcanvas.Body>
                </Navbar.Offcanvas>
              </Container>
            </Navbar>
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
      </div>
    </div>
  );
};

export default NavbarDocs;
