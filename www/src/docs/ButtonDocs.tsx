import { Component, createEffect, createSignal, For } from "solid-js";
import Button from "../../../packages/bootstrap/src/Button";
import ButtonGroup from "../../../packages/bootstrap/src/ButtonGroup";
import ToggleButton from "../../../packages/bootstrap/src/ToggleButton";

const ButtonDocs: Component = () => {
  return (
    <div class="row gy-4">
      <div>
        <h3>Buttons</h3>
        <p class="lead">
          Custom button styles for actions in forms, dialogs, and more with
          support for multiple sizes, states, and more.
        </p>
      </div>
      <div>
        <Button variant="primary">Primary</Button>{" "}
        <Button variant="secondary">Secondary</Button>{" "}
        <Button variant="success">Success</Button>{" "}
        <Button variant="warning">Warning</Button>{" "}
        <Button variant="danger">Danger</Button>{" "}
        <Button variant="info">Info</Button>{" "}
        <Button variant="light">Light</Button>{" "}
        <Button variant="dark">Dark</Button>{" "}
        <Button variant="link">Link</Button>
      </div>
      <div></div>
      <div>
        <h5>Outline buttons</h5>
        <Button variant="outline-primary">Primary</Button>{" "}
        <Button variant="outline-secondary">Secondary</Button>{" "}
        <Button variant="outline-success">Success</Button>{" "}
        <Button variant="outline-warning">Warning</Button>{" "}
        <Button variant="outline-danger">Danger</Button>{" "}
        <Button variant="outline-info">Info</Button>{" "}
        <Button variant="outline-light">Light</Button>{" "}
        <Button variant="outline-dark">Dark</Button>
      </div>
      <div>
        <h5>Button tags</h5>
        <Button href="#">Link</Button> <Button type="submit">Button</Button>{" "}
        <Button as="input" type="button" value="Input" />{" "}
        <Button as="input" type="submit" value="Submit" />{" "}
        <Button as="input" type="reset" value="Reset" />
      </div>
      <div>
        <h5>Sizes</h5>
        <div className="mb-2">
          <Button variant="primary" size="lg">
            Large button
          </Button>{" "}
          <Button variant="secondary" size="lg">
            Large button
          </Button>
        </div>
        <div>
          <Button variant="primary" size="sm">
            Small button
          </Button>{" "}
          <Button variant="secondary" size="sm">
            Small button
          </Button>
        </div>
      </div>
      <div>
        <h5>Button loading state</h5>
        <LoadingButton />
      </div>
      <div>
        <h5>Checkbox / Radio</h5>
        <ToggleButtonExample />
      </div>
    </div>
  );
};

function LoadingButton() {
  const [isLoading, setLoading] = createSignal(false);

  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }

  createEffect(() => {
    if (isLoading()) {
      simulateNetworkRequest().then(() => {
        setLoading(false);
      });
    }
  });

  const handleClick = () => setLoading(true);

  return (
    <Button
      variant="primary"
      disabled={isLoading()}
      onClick={!isLoading() ? handleClick : undefined}
    >
      {isLoading() ? "Loading…" : "Click to load"}
    </Button>
  );
}

function ToggleButtonExample() {
  const [checked, setChecked] = createSignal(false);
  const [radioValue, setRadioValue] = createSignal("1");

  const radios = [
    { name: "Active", value: "1" },
    { name: "Radio", value: "2" },
    { name: "Radio", value: "3" },
  ];

  return (
    <>
      <ButtonGroup className="mb-2">
        <ToggleButton
          id="toggle-check"
          type="checkbox"
          variant="secondary"
          checked={checked()}
          value="1"
          onChange={(e: any) => setChecked(e.currentTarget.checked)}
        >
          Checked
        </ToggleButton>
      </ButtonGroup>
      <br />
      <ButtonGroup className="mb-2">
        <For each={radios}>
          {(radio, idx) => (
            <ToggleButton
              id={`radio-${idx()}`}
              type="radio"
              variant="secondary"
              name="radio"
              value={radio.value}
              checked={radioValue() === radio.value}
              onChange={(e: any) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          )}
        </For>
      </ButtonGroup>
      <br />
      <ToggleButton
        className="mb-2"
        id="toggle-check"
        type="checkbox"
        variant="outline-primary"
        checked={checked()}
        value="1"
        onChange={(e: any) => setChecked(e.currentTarget.checked)}
      >
        Checked
      </ToggleButton>
      <br />
      <ButtonGroup>
        <For each={radios}>
          {(radio, idx) => (
            <ToggleButton
              id={`radio2-${idx()}`}
              type="radio"
              variant={idx() % 2 ? "outline-success" : "outline-danger"}
              name="radio2"
              value={radio.value}
              checked={radioValue() === radio.value}
              onChange={(e: any) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          )}
        </For>
      </ButtonGroup>
    </>
  );
}

export default ButtonDocs;
