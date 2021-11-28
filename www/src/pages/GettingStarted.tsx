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
          <a href="https://react-bootstrap.github.io/">React-Bootstrap</a> for{" "}
          <a href="https://www.solidjs.com/">SolidJS</a>.
        </p>
        <p>
          This is a complete implementation of the Bootstrap components using
          SolidJS. It has no dependency on either bootstrap.js or jQuery. If you
          have SolidJS setup and Solid-Bootstrap installed, you have everything
          you need.
        </p>
        <p>
          Refer to the original{" "}
          <a href="https://react-bootstrap.github.io/components/alerts">
            React Bootstrap
          </a>{" "}
          documentation to supplement this page.
        </p>
        <p>
          <a
            href="https://github.com/solid-libs/solid-bootstrap"
            target="_blank"
          >
            The Github repo for Solid-Bootstrap is here
          </a>
        </p>
      </div>
      <div>
        <h3>Installation</h3>
        <p>
          We're just getting things set up at the moment. We'll have an npm
          install for you over the next couple of weeks.
        </p>
        <p>
          If you're keen to get started before then, feel free to clone our{" "}
          <a
            href="https://github.com/solid-libs/solid-bootstrap"
            target="_blank"
          >
            Github repo
          </a>
          . You'll find all the components in the <code>packages</code> folder
          and examples are in the source for these docs in the <code>www</code>{" "}
          folder.
        </p>
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
            <a href="https://github.com/react-bootstrap/react-bootstrap">
              <code>React-Bootstrap</code>
            </a>
            ,{" "}
            <a href="https://github.com/react-restart/ui">
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
      <div>
        <h3>Known Issues</h3>
        <ul>
          <li>none</li>
        </ul>
      </div>
    </div>
  </div>
);

export default GettingStarted;
