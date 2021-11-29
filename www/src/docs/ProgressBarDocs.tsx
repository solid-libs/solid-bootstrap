import { Component, createSignal, For, onCleanup } from "solid-js";
import Card from "../../../packages/bootstrap/src/Card";
import ProgressBar from "../../../packages/bootstrap/src/ProgressBar";
import GithubSource from "./GithubSource";

export const ProgressBarDocs: Component = () => {
  const [value, setValue] = createSignal(5);

  const interval = window.setInterval(() => {
    setValue(value() < 100 ? value() + 5 : 0);
  }, 1000);
  onCleanup(() => window.clearInterval(interval));

  return (
    <div class="row gy-4">
      <div>
        <GithubSource name="ProgressBarDocs" />
        <h3>Progress bars </h3>
        <p class="lead">
          Provide up-to-date feedback on the progress of a workflow or action
          with simple yet flexible progress bars.
        </p>
      </div>
      <div>
        <Card>
          <Card.Header>Default</Card.Header>
          <Card.Body>
            <ProgressBar now={60} />
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>With label</Card.Header>
          <Card.Body>
            <ProgressBar now={60} label={`${60}%`} />
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Screenreader only label</Card.Header>
          <Card.Body>
            <ProgressBar now={60} label={`${60}%`} visuallyHidden />
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Contextual alternatives</Card.Header>
          <Card.Body>
            <ProgressBar variant="success" now={40} />
            <ProgressBar variant="info" now={20} />
            <ProgressBar variant="warning" now={60} />
            <ProgressBar variant="danger" now={80} />
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Striped</Card.Header>
          <Card.Body>
            <ProgressBar striped variant="success" now={40} />
            <ProgressBar striped variant="info" now={20} />
            <ProgressBar striped variant="warning" now={60} />
            <ProgressBar striped variant="danger" now={80} />
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Animated</Card.Header>
          <Card.Body>
            <ProgressBar animated now={value()} label={`${value()}%`} />
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Stacked</Card.Header>
          <Card.Body>
            <ProgressBar>
              <ProgressBar striped variant="success" now={35} />
              <ProgressBar variant="warning" now={20} />
              <ProgressBar striped variant="danger" now={10} />
            </ProgressBar>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ProgressBarDocs;
