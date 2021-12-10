import { Container, Col, Row } from "solid-bootstrap";
import SideNav from "./SideNav";
import styles from "./Layout.module.css";
import { Component } from "solid-js";

const Layout: Component = (props) => (
  <Container fluid>
    <Row className="flex-xl-nowrap">
      <Col as={SideNav} xs={12} md={3} xl={2} />
      <Col
        xs={12}
        md={9}
        xl={8}
        as="main"
        id="rb-docs-content"
        className={styles.main}
      >
        {props.children}
      </Col>
    </Row>
  </Container>
);

export default Layout;
