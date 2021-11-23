import { Component, For } from "solid-js";
import Badge from "../bootstrap/Badge";
import CloseButton from "../bootstrap/CloseButton";

export const DropdownDocs: Component = () => {
  return (
    <div class="row gy-4">
      <div>
        <h3>Dropdowns</h3>
        <p class="lead">
          Toggle contextual overlays for displaying lists of links and more with
          the Bootstrap dropdown plugin.
        </p>
      </div>
      <div>
        <h5>Variants</h5>
        <div className="bg-dark p-3 te"></div>
      </div>
    </div>
  );
};
