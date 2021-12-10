import { Component } from "solid-js";
import { Badge, CloseButton } from "solid-bootstrap";
import GithubSource from "./GithubSource";
import CloseButtonApi from "./CloseButtonApi";

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
      <CloseButtonApi />
    </div>
  );
};

export default CloseButtonDocs;
