import { Component, createSignal, For } from "solid-js";
import Alert from "../../../packages/bootstrap/src/Alert";
import Button from "../../../packages/bootstrap/src/Button";
import Card from "../../../packages/bootstrap/src/Card";
import Form from "../../../packages/bootstrap/src/Form";
import Col from "../../../packages/bootstrap/src/Col";
import InputGroup from "../../../packages/bootstrap/src/InputGroup";
import Row from "../../../packages/bootstrap/src/Row";
import FloatingLabel from "../../../packages/bootstrap/src/FloatingLabel";
import { FormCheckType } from "../../../packages/bootstrap/src/FormCheck";

export const FormDocs: Component = () => {
  const [validated, setValidated] = createSignal(false);

  const handleSubmit = (event: SubmitEvent) => {
    const form = event.currentTarget;
    if ((form as HTMLFormElement).checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div class="row gy-4">
      <div>
        <h3>Forms</h3>
        <p class="lead">
          The <code>{"<FormControl>"}</code> component renders a form control
          with Bootstrap styling. The <code>{"<FormGroup>"}</code> component
          wraps a form control with proper spacing, along with support for a
          label, help text, and validation state. To ensure accessibility, set
          controlId on <code>{"<FormGroup>"}</code>, and use{" "}
          <code>{"<FormLabel>"}</code> for the label.
        </p>
      </div>
      <div>
        <Card body>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Card>
      </div>
      <div>
        <h5>Form controls</h5>
        <Card body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Card>
      </div>
      <div>
        <h5>Sizing</h5>
        <Card body>
          <>
            <Form.Control size="lg" type="text" placeholder="Large text" />
            <br />
            <Form.Control type="text" placeholder="Normal text" />
            <br />
            <Form.Control size="sm" type="text" placeholder="Small text" />
          </>
        </Card>
      </div>
      <div>
        <h5>Readonly</h5>
        <Card body>
          <Form.Control
            type="text"
            placeholder="Readonly input here..."
            readOnly
          />
        </Card>
      </div>
      <div>
        <h5>Readonly plain text</h5>
        <Card body>
          <Form>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control plaintext readOnly value="email@example.com" />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control type="password" placeholder="Password" />
              </Col>
            </Form.Group>
          </Form>
        </Card>
      </div>
      <div>
        <h5>File input</h5>
        <Card body>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Default file input example</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
          <Form.Group controlId="formFileMultiple" className="mb-3">
            <Form.Label>Multiple files input example</Form.Label>
            <Form.Control type="file" multiple />
          </Form.Group>
          <Form.Group controlId="formFileDisabled" className="mb-3">
            <Form.Label>Disabled file input example</Form.Label>
            <Form.Control type="file" disabled />
          </Form.Group>
          <Form.Group controlId="formFileSm" className="mb-3">
            <Form.Label>Small file input example</Form.Label>
            <Form.Control type="file" size="sm" />
          </Form.Group>
          <Form.Group controlId="formFileLg" className="mb-3">
            <Form.Label>Large file input example</Form.Label>
            <Form.Control type="file" size="lg" />
          </Form.Group>
        </Card>
      </div>
      <div>
        <h5>Color</h5>
        <Card body>
          {" "}
          <Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
          <Form.Control
            type="color"
            id="exampleColorInput"
            value="#563d7c"
            title="Choose your color"
          />
        </Card>
      </div>
      <div>
        <h5>Checkboxes and Radios</h5>
        <Card>
          <Card.Header>Stacked</Card.Header>
          <Card.Body>
            <Form>
              {["checkbox", "radio"].map((type) => (
                <div className="mb-3">
                  <Form.Check
                    type={type as FormCheckType}
                    id={`default-${type}`}
                    label={`default ${type}`}
                  />

                  <Form.Check
                    disabled
                    type={type as FormCheckType}
                    label={`disabled ${type}`}
                    id={`disabled-default-${type}`}
                  />
                </div>
              ))}
            </Form>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Inline</Card.Header>
          <Card.Body>
            <Form>
              {["checkbox", "radio"].map((type) => (
                <div className="mb-3">
                  <Form.Check
                    inline
                    label="1"
                    name="group1"
                    type={type as FormCheckType}
                    id={`inline-${type}-1`}
                  />
                  <Form.Check
                    inline
                    label="2"
                    name="group1"
                    type={type as FormCheckType}
                    id={`inline-${type}-2`}
                  />
                  <Form.Check
                    inline
                    disabled
                    label="3 (disabled)"
                    type={type as FormCheckType}
                    id={`inline-${type}-3`}
                  />
                </div>
              ))}
            </Form>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Without labels</Card.Header>
          <Card.Body>
            <Form.Check aria-label="option 1" />
            <Form.Check type="radio" aria-label="radio 1" />
          </Card.Body>
        </Card>
      </div>
      <div>
        <h5>Customizing FormCheck rendering</h5>
        <Card body>
          <Form>
            {["checkbox", "radio"].map((type) => (
              <div className="mb-3">
                <Form.Check
                  type={type as FormCheckType}
                  id={`check-api-${type}`}
                >
                  <Form.Check.Input type={type as any} isValid />
                  <Form.Check.Label>{`Custom api ${type}`}</Form.Check.Label>
                  <Form.Control.Feedback type="valid">
                    You did it!
                  </Form.Control.Feedback>
                </Form.Check>
              </div>
            ))}
          </Form>
        </Card>
      </div>
      <div>
        <h5>Range</h5>
        <Card body>
          <Form.Label>Range</Form.Label>
          <Form.Range />
        </Card>
      </div>
      <div>
        <h5>Select</h5>
        <Card body>
          <Form.Select aria-label="Default select example">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Card>
      </div>
      <div>
        <h5>Sizing</h5>
        <Card body>
          <Form.Select size="lg">
            <option>Large select</option>
          </Form.Select>
          <br />
          <Form.Select>
            <option>Default select</option>
          </Form.Select>
          <br />
          <Form.Select size="sm">
            <option>Small select</option>
          </Form.Select>{" "}
        </Card>
      </div>
      <div>
        <h5>Floating labels</h5>
        <Card>
          <Card.Header>Inputs</Card.Header>
          <Card.Body>
            <FloatingLabel
              controlId="floatingInput"
              label="Email address"
              className="mb-3"
            >
              <Form.Control type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
              <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Textareas</Card.Header>
          <Card.Body>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Comments"
              className="mb-3"
            >
              <Form.Control as="textarea" placeholder="Leave a comment here" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingTextarea2" label="Comments">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>{" "}
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Selects</Card.Header>
          <Card.Body>
            <FloatingLabel
              controlId="floatingSelect"
              label="Works with selects"
            >
              <Form.Select aria-label="Floating label select example">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </FloatingLabel>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Layout</Card.Header>
          <Card.Body>
            <Row className="g-2">
              <Col md>
                <FloatingLabel
                  controlId="floatingInputGrid"
                  label="Email address"
                >
                  <Form.Control type="email" placeholder="name@example.com" />
                </FloatingLabel>
              </Col>
              <Col md>
                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Works with selects"
                >
                  <Form.Select aria-label="Floating label select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </FloatingLabel>
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Customizing rendering</Card.Header>
          <Card.Body>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="email"
                placeholder="name@example.com"
              />
              <label htmlFor="floatingInputCustom">Email address</label>
            </Form.Floating>
            <Form.Floating>
              <Form.Control
                id="floatingPasswordCustom"
                type="password"
                placeholder="Password"
              />
              <label htmlFor="floatingPasswordCustom">Password</label>
            </Form.Floating>
          </Card.Body>
        </Card>
      </div>
      <div>
        <h5>Layout</h5>
        <Card>
          <Card.Header>Form groups</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Form grid</Card.Header>
          <Card.Body>
            <Form>
              <Row>
                <Col>
                  <Form.Control placeholder="First name" />
                </Col>
                <Col>
                  <Form.Control placeholder="Last name" />
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>More complex layout</Card.Header>
          <Card.Body>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select value="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Horizontal form</Card.Header>
          <Card.Body>
            <Form>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalEmail"
              >
                <Form.Label column sm={2}>
                  Email
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="email" placeholder="Email" />
                </Col>
              </Form.Group>

              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalPassword"
              >
                <Form.Label column sm={2}>
                  Password
                </Form.Label>
                <Col sm={10}>
                  <Form.Control type="password" placeholder="Password" />
                </Col>
              </Form.Group>
              <fieldset>
                <Form.Group as={Row} className="mb-3">
                  <Form.Label as="legend" column sm={2}>
                    Radios
                  </Form.Label>
                  <Col sm={10}>
                    <Form.Check
                      type="radio"
                      label="first radio"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios1"
                    />
                    <Form.Check
                      type="radio"
                      label="second radio"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios2"
                    />
                    <Form.Check
                      type="radio"
                      label="third radio"
                      name="formHorizontalRadios"
                      id="formHorizontalRadios3"
                    />
                  </Col>
                </Form.Group>
              </fieldset>
              <Form.Group
                as={Row}
                className="mb-3"
                controlId="formHorizontalCheck"
              >
                <Col sm={{ span: 10, offset: 2 }}>
                  <Form.Check label="Remember me" />
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3">
                <Col sm={{ span: 10, offset: 2 }}>
                  <Button type="submit">Sign in</Button>
                </Col>
              </Form.Group>
            </Form>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Horizontal form label sizing</Card.Header>
          <Card.Body>
            <Row>
              <Form.Label column="lg" lg={2}>
                Large Text
              </Form.Label>
              <Col>
                <Form.Control size="lg" type="text" placeholder="Large text" />
              </Col>
            </Row>
            <br />
            <Row>
              <Form.Label column lg={2}>
                Normal Text
              </Form.Label>
              <Col>
                <Form.Control type="text" placeholder="Normal text" />
              </Col>
            </Row>
            <br />
            <Row>
              <Form.Label column="sm" lg={2}>
                Small Text
              </Form.Label>
              <Col>
                <Form.Control size="sm" type="text" placeholder="Small text" />
              </Col>
            </Row>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Column sizing</Card.Header>
          <Card.Body>
            <Form>
              <Row>
                <Col xs={7}>
                  <Form.Control placeholder="City" />
                </Col>
                <Col>
                  <Form.Control placeholder="State" />
                </Col>
                <Col>
                  <Form.Control placeholder="Zip" />
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Auto-sizing</Card.Header>
          <Card.Body>
            <Form>
              <Row className="align-items-center">
                <Col xs="auto">
                  <Form.Label htmlFor="inlineFormInput" visuallyHidden>
                    Name
                  </Form.Label>
                  <Form.Control
                    className="mb-2"
                    id="inlineFormInput"
                    placeholder="Jane Doe"
                  />
                </Col>
                <Col xs="auto">
                  <Form.Label htmlFor="inlineFormInputGroup" visuallyHidden>
                    Username
                  </Form.Label>
                  <InputGroup className="mb-2">
                    <InputGroup.Text>@</InputGroup.Text>
                    <Form.Control
                      id="inlineFormInputGroup"
                      placeholder="Username"
                    />
                  </InputGroup>
                </Col>
                <Col xs="auto">
                  <Form.Check
                    type="checkbox"
                    id="autoSizingCheck"
                    className="mb-2"
                    label="Remember me"
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit" className="mb-2">
                    Submit
                  </Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Remixed with size-specific column classes</Card.Header>
          <Card.Body>
            <Form>
              <Row className="align-items-center">
                <Col sm={3} className="my-1">
                  <Form.Label htmlFor="inlineFormInputName" visuallyHidden>
                    Name
                  </Form.Label>
                  <Form.Control
                    id="inlineFormInputName"
                    placeholder="Jane Doe"
                  />
                </Col>
                <Col sm={3} className="my-1">
                  <Form.Label
                    htmlFor="inlineFormInputGroupUsername"
                    visuallyHidden
                  >
                    Username
                  </Form.Label>
                  <InputGroup>
                    <InputGroup.Text>@</InputGroup.Text>
                    <Form.Control
                      id="inlineFormInputGroupUsername"
                      placeholder="Username"
                    />
                  </InputGroup>
                </Col>
                <Col xs="auto" className="my-1">
                  <Form.Check
                    type="checkbox"
                    id="autoSizingCheck2"
                    label="Remember me"
                  />
                </Col>
                <Col xs="auto" className="my-1">
                  <Button type="submit">Submit</Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>And custom form controls are supported</Card.Header>
          <Card.Body>
            <Form>
              <Row className="align-items-center">
                <Col xs="auto" className="my-1">
                  <Form.Label
                    className="me-sm-2"
                    htmlFor="inlineFormCustomSelect"
                    visuallyHidden
                  >
                    Preference
                  </Form.Label>
                  <Form.Select className="me-sm-2" id="inlineFormCustomSelect">
                    <option value="0">Choose...</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col xs="auto" className="my-1">
                  <Form.Check
                    type="checkbox"
                    id="customControlAutosizing"
                    label="Remember my preference"
                  />
                </Col>
                <Col xs="auto" className="my-1">
                  <Button type="submit">Submit</Button>
                </Col>
              </Row>
            </Form>
          </Card.Body>
        </Card>
      </div>
      <div>
        <h5>Help text</h5>
        <p>
          Block-level help text in forms can be created using{" "}
          <code>{"<Form.Text>"}</code>. Inline help text can be flexibly
          implemented using any inline HTML element and utility classes
          like.text-muted.
        </p>
        <Alert variant="warning">
          <Alert.Heading>
            Associating help text with form controls
          </Alert.Heading>
          <p>
            Help text should be explicitly associated with the form control it
            relates to using the aria-describedby attribute. This will ensure
            that assistive technologies—such as screen readers—will announce
            this help text when the user focuses or enters the control.
          </p>
        </Alert>
        <p>
          Help text below inputs can be styled with <code>{"<Form.Text>"}</code>
          . This component includes display: block and adds some top margin for
          easy spacing from the inputs above.
        </p>
        <Card>
          <Card.Body>
            <Form.Label htmlFor="inputPassword5">Password</Form.Label>
            <Form.Control
              type="password"
              id="inputPassword5"
              aria-describedby="passwordHelpBlock"
            />
            <Form.Text id="passwordHelpBlock" muted>
              Your password must be 8-20 characters long, contain letters and
              numbers, and must not contain spaces, special characters, or
              emoji.
            </Form.Text>
          </Card.Body>
        </Card>
      </div>
      <div>
        <h5>Disabled forms</h5>
        <Card>
          <Card.Body>
            <>
              <Form.Group className="mb-3">
                <Form.Label>Disabled input</Form.Label>
                <Form.Control placeholder="Disabled input" disabled />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Disabled select menu</Form.Label>
                <Form.Select disabled>
                  <option>Disabled select</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Check type="checkbox" label="Can't check this" disabled />
              </Form.Group>
            </>
          </Card.Body>
        </Card>
        <Card>
          <Card.Header>Disabled fieldset</Card.Header>
          <Card.Body>
            <Form>
              <fieldset>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledTextInput">
                    Disabled input
                  </Form.Label>
                  <Form.Control
                    id="disabledTextInput"
                    placeholder="Disabled input"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label htmlFor="disabledSelect">
                    Disabled select menu
                  </Form.Label>
                  <Form.Select id="disabledSelect">
                    <option>Disabled select</option>
                  </Form.Select>
                </Form.Group>
              </fieldset>
              <fieldset disabled>
                <Form.Group className="mb-3">
                  <Form.Check
                    type="checkbox"
                    id="disabledFieldsetCheck"
                    label="Can't check this"
                  />
                </Form.Group>
                <Button type="submit">Submit</Button>
              </fieldset>
            </Form>
          </Card.Body>
        </Card>
        <Alert variant="warning">
          <Alert.Heading>Caveat with anchors</Alert.Heading>
          <p>
            By default, browsers will treat all native form controls (
            <code>{"<input>"}</code>, <code>{"<select>"}</code> and{" "}
            <code>{"<button>"}</code> elements) inside a{" "}
            <code>{"<fieldset disabled>"}</code> as disabled, preventing both
            keyboard and mouse interactions on them. However, if your form also
            includes <code>{'<a ... class="btn btn-*">'}</code> elements, these
            will only be given a style of pointer-events: none. As noted in the
            section about disabled state for buttons (and specifically in the
            sub-section for anchor elements), this CSS property is not yet
            standardized and isn’t fully supported in Internet Explorer 10, and
            won’t prevent keyboard users from being able to focus or activate
            these links. So to be safe, use custom JavaScript to disable such
            links.
          </p>
        </Alert>
        <Alert variant="danger">
          <Alert.Heading>Cross-browser compatibility</Alert.Heading>
          <p>
            While Bootstrap will apply these styles in all browsers, Internet
            Explorer 11 and below don’t fully support the disabled attribute on
            a <code>{"<fieldset>"}</code>. Use custom JavaScript to disable the
            fieldset in these browsers.
          </p>
        </Alert>
      </div>
      <div>
        <h5>Validation</h5>
        <Card>
          <Card.Header>Inline</Card.Header>
          <Card.Body>
            <Form noValidate validated={validated()} onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                  <Form.Label>First name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="First name"
                    value="Mark"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom02">
                  <Form.Label>Last name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Last name"
                    value="Otto"
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group>
                <Form.Group
                  as={Col}
                  md="4"
                  controlId="validationCustomUsername"
                >
                  <Form.Label>Username</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="Username"
                      aria-describedby="inputGroupPrepend"
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Please choose a username.
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
              </Row>
              <Row className="mb-3">
                <Form.Group as={Col} md="6" controlId="validationCustom03">
                  <Form.Label>City</Form.Label>
                  <Form.Control type="text" placeholder="City" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid city.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom04">
                  <Form.Label>State</Form.Label>
                  <Form.Control type="text" placeholder="State" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid state.
                  </Form.Control.Feedback>
                </Form.Group>
                <Form.Group as={Col} md="3" controlId="validationCustom05">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control type="text" placeholder="Zip" required />
                  <Form.Control.Feedback type="invalid">
                    Please provide a valid zip.
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Form.Group className="mb-3">
                <Form.Check
                  required
                  label="Agree to terms and conditions"
                  feedback="You must agree before submitting."
                  feedbackType="invalid"
                />
              </Form.Group>
              <Button type="submit">Submit form</Button>
            </Form>
          </Card.Body>
        </Card>
        <Alert variant="info">
          <Alert.Heading>
            Form libraries and server-rendered styles
          </Alert.Heading>
          <p>
            It's often beneficial to handle form validation via a library. In
            those cases, <code>isValid</code> and <code>isInvalid</code> props
            can be added to form controls to manually apply validation styles.
          </p>
        </Alert>
        <Card>
          <Card.Header>Input group validation</Card.Header>
          <Card.Body>
            <InputGroup hasValidation>
              <InputGroup.Text>@</InputGroup.Text>
              <Form.Control type="text" required isInvalid />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Card.Body>
        </Card>
      </div>
      <div>
        <h5>Custom form components</h5>
        <Card>
          <Card.Header>Switches</Card.Header>
          <Card.Body>
            <Form>
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Check this switch"
              />
              <Form.Check
                disabled
                type="switch"
                label="disabled switch"
                id="disabled-custom-switch"
              />
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};
