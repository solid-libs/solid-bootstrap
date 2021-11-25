import { Component, For } from "solid-js";
import Carousel from "../../packages/bootstrap/src/Carousel";

export const CarouselDocs: Component = () => {
  return (
    <div class="row gy-4">
      <div>
        <h3>Carousels</h3>
        <p class="lead">
          A slideshow component for cycling through elements—images or slides of
          text—like a carousel.
        </p>
        <Carousel>
          <Carousel.Item>
            <div
              className="d-block w-100 bg-secondary"
              style={{ height: "400px" }}
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="d-block w-100 bg-secondary"
              style={{ height: "400px" }}
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div
              className="d-block w-100 bg-secondary"
              style={{ height: "400px" }}
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
};
