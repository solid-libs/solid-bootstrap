import { Component } from "solid-js";
import Card from "solid-bootstrap/Card";
import Container from "solid-bootstrap/Container";
import Col from "solid-bootstrap/Col";
import Row from "solid-bootstrap/Row";
import Image from "solid-bootstrap/Image";
import { useHolderJSRefresh } from "./utils";
import GithubSource from "./GithubSource";

export const ImageDocs: Component = () => {
  useHolderJSRefresh();
  return (
    <div class="row gy-4">
      <div>
        <GithubSource name="ImageDocs" />
        <h2>Images</h2>
      </div>
      <div>
        <Card>
          <Card.Header>Shape</Card.Header>
          <Card.Body>
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <Image src="holder.js/171x180" rounded />
                </Col>
                <Col xs={6} md={4}>
                  <Image src="holder.js/171x180" roundedCircle />
                </Col>
                <Col xs={6} md={4}>
                  <Image src="holder.js/171x180" thumbnail />
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Fluid</Card.Header>
          <Card.Body>
            <Image src="holder.js/100px250" fluid />
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ImageDocs;
