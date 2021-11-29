import { Component, For } from "solid-js";
import Button from "../../../packages/bootstrap/src/Button";
import Card from "../../../packages/bootstrap/src/Card";
import Dropdown from "../../../packages/bootstrap/src/Dropdown";
import DropdownButton from "../../../packages/bootstrap/src/DropdownButton";
import InputGroup from "../../../packages/bootstrap/src/InputGroup";
import Form from "../../../packages/bootstrap/src/Form";
import FormControl from "../../../packages/bootstrap/src/FormControl";
import SplitButton from "../../../packages/bootstrap/src/SplitButton";

export const InputGroupDocs: Component = () => {
  return (
    <div class="row gy-4">
      <div>
        <h3>InputGroup</h3>
        <p class="lead">
          Place one add-on or button on either side of an input. You may also
          place one on both sides of an input. Remember to place{" "}
          <code>{"<label>"}</code>s outside the input group.
        </p>
        <Card>
          <Card.Body>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <FormControl
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
            </InputGroup>

            <Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon3">
                https://example.com/users/
              </InputGroup.Text>
              <FormControl id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Text>$</InputGroup.Text>
              <FormControl aria-label="Amount (to the nearest dollar)" />
              <InputGroup.Text>.00</InputGroup.Text>
            </InputGroup>

            <InputGroup>
              <InputGroup.Text>With textarea</InputGroup.Text>
              <FormControl as="textarea" aria-label="With textarea" />
            </InputGroup>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Sizing</Card.Header>
          <Card.Body>
            <InputGroup size="sm" className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
              <FormControl
                aria-label="Small"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
            <br />
            <InputGroup className="mb-3">
              <InputGroup.Text id="inputGroup-sizing-default">
                Default
              </InputGroup.Text>
              <FormControl
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
            <br />
            <InputGroup size="lg">
              <InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
              <FormControl
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
              />
            </InputGroup>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Checkboxes and radios</Card.Header>
          <Card.Body>
            <InputGroup className="mb-3">
              <InputGroup.Checkbox aria-label="Checkbox for following text input" />
              <FormControl aria-label="Text input with checkbox" />
            </InputGroup>
            <InputGroup>
              <InputGroup.Radio aria-label="Radio button for following text input" />
              <FormControl aria-label="Text input with radio button" />
            </InputGroup>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Multiple inputs</Card.Header>
          <Card.Body>
            <InputGroup className="mb-3">
              <InputGroup.Text>First and last name</InputGroup.Text>
              <FormControl aria-label="First name" />
              <FormControl aria-label="Last name" />
            </InputGroup>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Multiple addons</Card.Header>
          <Card.Body>
            <InputGroup className="mb-3">
              <InputGroup.Text>$</InputGroup.Text>
              <InputGroup.Text>0.00</InputGroup.Text>
              <FormControl aria-label="Dollar amount (with dot and two decimal places)" />
            </InputGroup>
            <InputGroup>
              <FormControl aria-label="Dollar amount (with dot and two decimal places)" />
              <InputGroup.Text>$</InputGroup.Text>
              <InputGroup.Text>0.00</InputGroup.Text>
            </InputGroup>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Button addons</Card.Header>
          <Card.Body>
            {" "}
            <InputGroup className="mb-3">
              <Button variant="outline-secondary" id="button-addon1">
                Button
              </Button>
              <FormControl
                aria-label="Example text with button addon"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="outline-secondary" id="button-addon2">
                Button
              </Button>
            </InputGroup>
            <InputGroup className="mb-3">
              <Button variant="outline-secondary">Button</Button>
              <Button variant="outline-secondary">Button</Button>
              <FormControl aria-label="Example text with two button addons" />
            </InputGroup>
            <InputGroup>
              <FormControl
                placeholder="Recipient's username"
                aria-label="Recipient's username with two button addons"
              />
              <Button variant="outline-secondary">Button</Button>
              <Button variant="outline-secondary">Button</Button>
            </InputGroup>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Buttons with Dropdowns</Card.Header>
          <Card.Body>
            <InputGroup className="mb-3">
              <DropdownButton
                variant="outline-secondary"
                title="Dropdown"
                id="input-group-dropdown-1"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </DropdownButton>
              <FormControl aria-label="Text input with dropdown button" />
            </InputGroup>

            <InputGroup className="mb-3">
              <FormControl aria-label="Text input with dropdown button" />

              <DropdownButton
                variant="outline-secondary"
                title="Dropdown"
                id="input-group-dropdown-2"
                align="end"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </DropdownButton>
            </InputGroup>

            <InputGroup>
              <DropdownButton
                variant="outline-secondary"
                title="Dropdown"
                id="input-group-dropdown-3"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </DropdownButton>
              <FormControl aria-label="Text input with 2 dropdown buttons" />
              <DropdownButton
                variant="outline-secondary"
                title="Dropdown"
                id="input-group-dropdown-4"
                align="end"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </DropdownButton>
            </InputGroup>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Segmented buttons</Card.Header>
          <Card.Body>
            {" "}
            <InputGroup className="mb-3">
              <SplitButton
                variant="outline-secondary"
                title="Action"
                id="segmented-button-dropdown-1"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </SplitButton>
              <FormControl aria-label="Text input with dropdown button" />
            </InputGroup>
            <InputGroup className="mb-3">
              <FormControl aria-label="Text input with dropdown button" />
              <SplitButton
                variant="outline-secondary"
                title="Action"
                id="segmented-button-dropdown-2"
                align="end"
              >
                <Dropdown.Item href="#">Action</Dropdown.Item>
                <Dropdown.Item href="#">Another action</Dropdown.Item>
                <Dropdown.Item href="#">Something else here</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Separated link</Dropdown.Item>
              </SplitButton>
            </InputGroup>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default InputGroupDocs;
