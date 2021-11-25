import { Component, For } from "solid-js";
import Badge from "../../packages/bootstrap/src/Badge";
import CloseButton from "../../packages/bootstrap/src/CloseButton";

export const CloseButtonDocs: Component = () => {
  return (
    <div class="row gy-4">
      <div>
        <h3>Close Button</h3>
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
        <h5>Variants</h5>
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
