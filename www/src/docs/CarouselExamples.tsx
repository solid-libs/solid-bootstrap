import {Carousel} from "solid-bootstrap";
import {createSignal} from "solid-js";
import {Solid1} from "../icons/solid1";
import {Solid2} from "../icons/solid2";
import {Solid3} from "../icons/solid3";

export function ControlledExample() {
  const [index, setIndex] = createSignal(0);

  const handleSelect = (selectedIndex: number, e: Record<string, unknown> | null) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index()} onSelect={handleSelect}>
      <Carousel.Item>
        <div
          className="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
          style={{height: "400px"}}
        >
          <Solid1 />
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
          style={{height: "400px"}}
        >
          <Solid2 />
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="d-block w-100 bg-secondary d-flex justify-content-center align-items-center"
          style={{height: "400px"}}
        >
          <Solid3 />
        </div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
