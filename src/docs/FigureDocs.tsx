import { Component, For } from "solid-js";
import Figure from "../../packages/bootstrap/src/Figure";

export const FigureDocs: Component = () => {
  return (
    <div class="row gy-4">
      <div>
        <h3>Figures</h3>
        <p class="lead">
          Anytime you need to display a piece of content, like an image with an
          optional caption, consider using a Figure.
        </p>
      </div>
      <div>
        <Figure>
          <Figure.Image
            width={171}
            height={180}
            alt="171x180"
            src="holder.js/171x180"
          />
          <Figure.Caption>
            Nulla vitae elit libero, a pharetra augue mollis interdum.
          </Figure.Caption>
        </Figure>
      </div>
    </div>
  );
};
