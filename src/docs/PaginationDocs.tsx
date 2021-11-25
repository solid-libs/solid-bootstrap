import { Component, For } from "solid-js";
import Card from "../../packages/bootstrap/src/Card";
import Pagination from "../../packages/bootstrap/src/Pagination";

export const PaginationDocs: Component = () => {
  let active = 2;

  const items = () => (
    <For each={new Array(5)}>
      {(_, index) => (
        <Pagination.Item active={index() + 1 === active}>
          {index() + 1}
        </Pagination.Item>
      )}
    </For>
  );

  return (
    <div class="row gy-4">
      <div>
        <h3>Pagination</h3>
        <p class="lead">
          A set of presentational components for building pagination UI.
        </p>
      </div>
      <div>
        <Card>
          <Card.Header>Examples</Card.Header>
          <Card.Body>
            <div>
              <Pagination>{items}</Pagination>
              <br />

              <Pagination size="lg">{items}</Pagination>
              <br />

              <Pagination size="sm">{items}</Pagination>
            </div>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>More options</Card.Header>
          <Card.Body>
            <Pagination>
              <Pagination.First />
              <Pagination.Prev />
              <Pagination.Item>{1}</Pagination.Item>
              <Pagination.Ellipsis />

              <Pagination.Item>{10}</Pagination.Item>
              <Pagination.Item>{11}</Pagination.Item>
              <Pagination.Item active>{12}</Pagination.Item>
              <Pagination.Item>{13}</Pagination.Item>
              <Pagination.Item disabled>{14}</Pagination.Item>

              <Pagination.Ellipsis />
              <Pagination.Item>{20}</Pagination.Item>
              <Pagination.Next />
              <Pagination.Last />
            </Pagination>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
