import { Component } from "solid-js";
import Button from "solid-bootstrap/Button";
import ButtonGroup from "solid-bootstrap/ButtonGroup";
import ButtonToolbar from "solid-bootstrap/ButtonToolbar";
import InputGroup from "solid-bootstrap/InputGroup";
import FormControl from "solid-bootstrap/FormControl";
import Dropdown from "solid-bootstrap/Dropdown";
import DropdownButton from "solid-bootstrap/DropdownButton";
import GithubSource from "./GithubSource";

const ButtonGroupDocs: Component = () => {
  return (
    <div class="row gy-4 pb-5 mb-5">
      <div>
        <GithubSource name="ButtonGroupDocs" />
        <h2>Button groups</h2>
        <p class="lead">
          Group a series of buttons together on a single line with the button
          group.
        </p>
      </div>
      <div>
        <ButtonGroup aria-label="Basic example">
          <Button variant="secondary">Left</Button>
          <Button variant="secondary">Middle</Button>
          <Button variant="secondary">Right</Button>
        </ButtonGroup>
      </div>
      <div>
        <h4>Button toolbar</h4>
        <ButtonToolbar aria-label="Toolbar with button groups">
          <ButtonGroup className="me-2" aria-label="First group">
            <Button>1</Button> <Button>2</Button> <Button>3</Button>{" "}
            <Button>4</Button>
          </ButtonGroup>
          <ButtonGroup className="me-2" aria-label="Second group">
            <Button>5</Button> <Button>6</Button> <Button>7</Button>
          </ButtonGroup>
          <ButtonGroup aria-label="Third group">
            <Button>8</Button>
          </ButtonGroup>
        </ButtonToolbar>
      </div>
      <div>
        <p>
          Feel free to mix input groups with button groups in your toolbars.
          Similar to the example above, you’ll likely need some utilities though
          to space things properly.
        </p>
        <ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
          <ButtonGroup className="me-2" aria-label="First group">
            <Button variant="secondary">1</Button>{" "}
            <Button variant="secondary">2</Button>{" "}
            <Button variant="secondary">3</Button>{" "}
            <Button variant="secondary">4</Button>
          </ButtonGroup>
          <InputGroup>
            <InputGroup.Text id="btnGroupAddon">@</InputGroup.Text>
            <FormControl
              type="text"
              placeholder="Input group example"
              aria-label="Input group example"
              aria-describedby="btnGroupAddon"
            />
          </InputGroup>
        </ButtonToolbar>

        <ButtonToolbar
          className="justify-content-between"
          aria-label="Toolbar with Button groups"
        >
          <ButtonGroup aria-label="First group">
            <Button variant="secondary">1</Button>{" "}
            <Button variant="secondary">2</Button>{" "}
            <Button variant="secondary">3</Button>{" "}
            <Button variant="secondary">4</Button>
          </ButtonGroup>
          <InputGroup>
            <InputGroup.Text id="btnGroupAddon2">@</InputGroup.Text>
            <FormControl
              type="text"
              placeholder="Input group example"
              aria-label="Input group example"
              aria-describedby="btnGroupAddon2"
            />
          </InputGroup>
        </ButtonToolbar>
      </div>
      <div>
        <h4>Sizing</h4>
        <ButtonGroup size="lg" className="mb-2">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <br />
        <ButtonGroup className="mb-2">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
        <br />
        <ButtonGroup size="sm">
          <Button>Left</Button>
          <Button>Middle</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </div>
      <div>
        <h4>Nesting</h4>
        <ButtonGroup>
          <Button>1</Button>
          <Button>2</Button>

          <DropdownButton
            as={ButtonGroup}
            title="Dropdown"
            id="bg-nested-dropdown"
          >
            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
          </DropdownButton>
        </ButtonGroup>
      </div>
      <div>
        <h4>Vertical variation</h4>
        <ButtonGroup vertical>
          <Button>Button</Button>
          <Button>Button</Button>

          <DropdownButton
            as={ButtonGroup}
            title="Dropdown"
            id="bg-vertical-dropdown-1"
          >
            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
          </DropdownButton>

          <Button>Button</Button>
          <Button>Button</Button>

          <DropdownButton
            as={ButtonGroup}
            title="Dropdown"
            id="bg-vertical-dropdown-2"
          >
            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
          </DropdownButton>

          <DropdownButton
            as={ButtonGroup}
            title="Dropdown"
            id="bg-vertical-dropdown-3"
          >
            <Dropdown.Item eventKey="1">Dropdown link</Dropdown.Item>
            <Dropdown.Item eventKey="2">Dropdown link</Dropdown.Item>
          </DropdownButton>
        </ButtonGroup>
      </div>
    </div>
  );
};

export default ButtonGroupDocs;
