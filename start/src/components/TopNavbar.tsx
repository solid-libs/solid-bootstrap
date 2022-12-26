import {Component} from "solid-js";
import {Container, Nav, Navbar} from "solid-bootstrap";
import {Bootstrap, Github, SolidBW} from "../icons";
import styles from "./TopNavbar.module.css";
import {A} from "solid-start";
import {Dynamic} from "solid-js/web";

const baseUrl = import.meta.env.BASE_URL;

const TopNavbar: Component = () => (
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" class={styles.Navbar}>
    <Container>
      <Navbar.Brand as={A} href="/">
        <img
          alt=""
          src={baseUrl + "logo.svg"}
          width="30"
          height="30"
          class="d-inline-block align-top"
        />{" "}
        Solid-Bootstrap
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav class="me-auto">
          <Nav.Link as={A} href="/">
            Home
          </Nav.Link>
          <Nav.Link as={A} href="/getting-started">
            Getting started
          </Nav.Link>
          <Nav.Link as={A} href="/components/accordion">
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
          <Nav.Link eventKey={3} href="https://www.solidjs.com/" target="_blank" rel="noopener">
            <SolidBW height={24} />
          </Nav.Link>
          <Nav.Link eventKey={2} href="https://getbootstrap.com/" target="_blank" rel="noopener">
            <Bootstrap height={24} />
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);
export default TopNavbar;
