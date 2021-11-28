import { Link } from "solid-app-router";
import { Component } from "solid-js";
import Container from "../../../packages/bootstrap/src/Container";
import Nav from "../../../packages/bootstrap/src/Nav";
import Navbar from "../../../packages/bootstrap/src/Navbar";
import { Bootstrap, Github, SolidBW } from "../icons";

const TopNavbar: Component = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#">
        <img
          alt=""
          src="logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{" "}
        Solid-Bootstrap
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} href="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} href="/getting-started">
            Getting started
          </Nav.Link>
          <Nav.Link as={Link} href="/components">
            Components
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link
            href="https://github.com/solid-libs/solid-bootstrap"
            target="_blank"
            rel="noopener"
          >
            <Github height={24} />
          </Nav.Link>
          <Nav.Link
            eventKey={3}
            href="https://www.solidjs.com/"
            target="_blank"
            rel="noopener"
          >
            <SolidBW height={24} />
          </Nav.Link>
          <Nav.Link
            eventKey={2}
            href="https://getbootstrap.com/"
            target="_blank"
            rel="noopener"
          >
            <Bootstrap height={24} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
export default TopNavbar;
