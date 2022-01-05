import { createSignal, createEffect, For } from "solid-js";
import { Button, ButtonGroup, ToggleButton } from "solid-bootstrap";

export function LoadingButton() {
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


export function ToggleButtonExample() {
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
