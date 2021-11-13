import { Component } from "solid-js";
import { ModalDocs } from "./docs/ModalDocs";
import { OverlayDocs } from "./docs/OverlayDocs";

const App: Component = () => {
  function showModalClick() {}

  return (
    <div class="container">
      <div class="row gy-5">
        <h1 class="display-4">Solid-Overlays</h1>
        <OverlayDocs />
        <ModalDocs />
      </div>
    </div>
  );
};

export default App;
