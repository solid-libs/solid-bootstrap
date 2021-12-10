import { Component } from "solid-js";
import { Card, Container, Col, Row, Image } from "solid-bootstrap";
import { useHolderJSRefresh } from "./utils";
import GithubSource from "./GithubSource";
import ImageApi from "./ImageApi";

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
      <ImageApi />
    </div>
  );
};

export default ImageDocs;
