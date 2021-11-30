import { Component, For } from "solid-js";
import Badge from "solid-bootstrap/Badge";
import CloseButton from "solid-bootstrap/CloseButton";
import GithubSource from "./GithubSource";

const CloseButtonDocs: Component = () => {
  return (
    <div class="row gy-4">
      <div>
        <GithubSource name="CloseButtonDocs" />
        <h2>Close Button</h2>
        <p class="lead">
          A generic close button for dismissing content such as modals and
          alerts.
        </p>
        <CloseButton />
        <CloseButton disabled />
        <Badge pill bg="secondary">
          Disabled
        </Badge>
      </div>
      <div>
        <h4>Variants</h4>
        <div className="bg-dark p-3 te">
          <CloseButton variant="white" />
          <CloseButton variant="white" disabled />
          <Badge pill bg="secondary">
            Disabled
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default CloseButtonDocs;
