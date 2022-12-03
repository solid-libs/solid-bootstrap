import {Container, Col, Row} from "solid-bootstrap";
import SideNav from "./SideNav";
import styles from "./Layout.module.css";
import {ParentProps} from "solid-js";

const Layout = (props: ParentProps) => (
  <Container fluid>
    <Row class="flex-xl-nowrap">
      <Col as={SideNav} xs={12} md={3} xl={2} />
      <Col xs={12} md={9} xl={8} as="main" id="rb-docs-content" class={styles.main}>
        {props.children}
      </Col>
    </Row>
  </Container>
);

export default Layout;
