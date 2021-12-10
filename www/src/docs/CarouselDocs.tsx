import { Component, createSignal } from "solid-js";
import { Card, Carousel } from "solid-bootstrap";
import GithubSource from "./GithubSource";
import CarouselApi from "./CarouselApi";
import { Solid1 } from "../icons/solid1";
import { Solid2 } from "../icons/solid2";
import { Solid3 } from "../icons/solid3";

const CarouselDocs: Component = () => {
  const [index, setIndex] = createSignal(0);

  const handleSelect = (
    selectedIndex: number,
    e: Record<string, unknown> | null
  ) => {
    setIndex(selectedIndex);
  };
  return (
    <div class="row gy-4">
      <div>
        <GithubSource name="CarouselDocs" />
        <h2>Carousels</h2>
        <p class="lead">
          A slideshow component for cycling through elements—images or slides of
          text—like a carousel.
        </p>
        <Card>
          <Card.Header>Example</Card.Header>
          <Card.Body>
            <p>
              Carousels don’t automatically normalize slide dimensions. As such,
              you may need to use additional utilities or custom styles to
              appropriately size content. While carousels support previous/next
              controls and indicators, they’re not explicitly required. Add and
              customize as you see fit.
            </p>
            <Carousel>
              <Carousel.Item>
                <div
                  className="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
                  style={{ height: "400px" }}
                >
                  <Solid1 />
                </div>
                <Carousel.Caption>
                  <h2>First slide label</h2>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div
                  className="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
                  style={{ height: "400px" }}
                >
                  <Solid2 />
                </div>

                <Carousel.Caption>
                  <h2>Second slide label</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div
                  className="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
                  style={{ height: "400px" }}
                >
                  <Solid3 style={{ height: "150px" }} />
                </div>

                <Carousel.Caption>
                  <h2>Third slide label</h2>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Controlled</Card.Header>
          <Card.Body>
            <p>
              You can also control the Carousel state, via the activeIndex prop
              and onSelect handler.
            </p>
            <Carousel activeIndex={index()} onSelect={handleSelect}>
              <Carousel.Item>
                <div
                  className="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
                  style={{ height: "400px" }}
                >
                  <Solid1 />
                </div>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div
                  className="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
                  style={{ height: "400px" }}
                >
                  <Solid2 />
                </div>
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div
                  className="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
                  style={{ height: "400px" }}
                >
                  <Solid3 />
                </div>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>{" "}
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Crossfade</Card.Header>
          <Card.Body>
            <p>
              Add the <code>fade</code> prop to your carousel to animate slides
              with a fade transition instead of a slide.
            </p>
            <Carousel fade>
              <Carousel.Item>
                <div
                  className="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
                  style={{ height: "400px" }}
                >
                  <Solid1 />
                </div>
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div
                  className="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
                  style={{ height: "400px" }}
                >
                  <Solid2 />
                </div>
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <div
                  className="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
                  style={{ height: "400px" }}
                >
                  <Solid3 />
                </div>
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>{" "}
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Individual Item Intervals</Card.Header>
          <Card.Body>
            <p>
              You can specify individual intervals for each carousel item via
              the <code>interval</code> prop.
            </p>
            <Carousel>
              <Carousel.Item interval={1000}>
                <div
                  className="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
                  style={{ height: "400px" }}
                >
                  <Solid1 />
                </div>
                <Carousel.Caption>
                  <h3>First slide label (1 sec)</h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <div
                  className="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
                  style={{ height: "400px" }}
                >
                  <Solid2 />
                </div>
                <Carousel.Caption>
                  <h3>Second slide label (2 secs)</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <div
                  className="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
                  style={{ height: "400px" }}
                >
                  <Solid3 />
                </div>
                <Carousel.Caption>
                  <h3>Third slide label (3 secs)</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>{" "}
          </Card.Body>
        </Card>
      </div>
      <CarouselApi />
    </div>
  );
};

export default CarouselDocs;
