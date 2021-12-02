import { Component, For } from "solid-js";
import Alert from "solid-bootstrap/Alert";
import GithubSource from "./GithubSource";
import AlertApi from "./AlertApi";

const AlertDocs: Component = () => {
  return (
    <div class="row gy-4">
      <div>
        <GithubSource name="AlertDocs" />
        <h2>Alerts</h2>
        <p class="lead">
          Provide contextual feedback messages for typical user actions with the
          handful of available and flexible alert messages.
        </p>
        <For
          each={[
            "primary",
            "secondary",
            "success",
            "danger",
            "warning",
            "info",
            "light",
            "dark",
          ]}
        >
          {(variant) => (
            <Alert variant={variant} dismissible transition>
              This is a {variant} alert—check it out!{" "}
            </Alert>
          )}
        </For>
        <Alert variant="success" dismissible transition>
          <Alert.Heading>This is an Alert.Heading</Alert.Heading>
          <p>
            Aww yeah, you successfully read this important alert message. This
            example text is going to run a bit longer so that you can see how
            spacing within an alert works with this kind of content.
          </p>
          <hr />
          <p className="mb-0">
            And here is an <Alert.Link href="#">{"Alert.Link"}</Alert.Link> just
            to show off all the components.
          </p>
        </Alert>
      </div>
      <AlertApi />
    </div>
  );
};

export default AlertDocs;
