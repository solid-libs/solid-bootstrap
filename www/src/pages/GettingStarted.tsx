import Card from "solid-bootstrap/Card";

const GettingStarted = () => (
  <div
    class="container mb-5 overflow-hidden mt-5"
    style={{ "padding-bottom": "200px" }}
  >
    <div class="row gy-5">
      <div>
        <h3>Overview</h3>
        <p class="lead">
          Solid-Bootstrap is a port of{" "}
          <a href="https://react-bootstrap.github.io/" target="_blank">
            React-Bootstrap
          </a>{" "}
          for{" "}
          <a href="https://www.solidjs.com/" target="_blank">
            SolidJS
          </a>
          .
        </p>
        <p>
          This is a complete implementation of the Bootstrap components using
          SolidJS. It has no dependency on either bootstrap.js or jQuery. If you
          have SolidJS setup and Solid-Bootstrap installed, you have everything
          you need.
        </p>
      </div>
      <div>
        <h3>Installation</h3>
        <ol>
          <li>
            Create a new SolidJS website per{" "}
            <a href="https://www.solidjs.com/guide" target="_blank">
              Solid's documentation
            </a>
            .
          </li>
          <li>
            Add the Bootstrap CSS to <code>index.html</code> per{" "}
            <a
              href="https://getbootstrap.com/docs/5.0/getting-started/introduction/"
              target="_blank"
            >
              Bootstrap's documentation
            </a>
            .
          </li>
          <li>
            Install <code>solid-bootstrap</code> with <code>npm</code>,{" "}
            <code>yarn</code>, <code>pnpm</code>, etc...
          </li>
        </ol>

        <Card>
          <Card.Body>
            <pre className="mb-0">
              <code>{"> npm install solid-bootstrap"}</code>
            </pre>
          </Card.Body>
        </Card>
      </div>
      <div>
        <h3>Porting approach</h3>
        <p class="lead">
          We have changed as little as possible while porting this code.
        </p>
        Principles:
        <ul>
          <li>
            The goal is to capture all of the proven behaviour of{" "}
            <a
              href="https://react-bootstrap.github.io/components/alerts"
              target="_blank"
            >
              <code>React-Bootstrap</code>
            </a>
            ,{" "}
            <a href="https://github.com/react-restart/ui" target="_blank">
              <code>@restart/ui</code>
            </a>{" "}
            (core) and related projects.
          </li>
          <li>Keep the source file structure the same.</li>
          <li>
            Keep the source code as similar as possible to enable future commits
            to the original projects to also be pulled into this project.
          </li>
          <li>
            Enable validation of the porting approach using a side-by-side
            comparison between the ported SolidJS code and the original
            implementation.
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default GettingStarted;
