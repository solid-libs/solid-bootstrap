import classnames from "classnames";
import { Link } from "solid-app-router";
import css from "./Home.module.css";

const Home = () => (
  <div class={css.IndexGrey}>
    <div class={classnames(css.MastHead, "mb-4")}>
      <div class={classnames(css.HomeContent, "px-4")}>
        <h1 class={css.HomeHeading}>Solid Bootstrap</h1>
        <p class={classnames(css.HomeSubheading, "lead")}>
          The most popular front-end framework
          <br />
          <strong>Rebuilt</strong> for SolidJS.
        </p>
        <div class={css.ButtonToolbar}>
          <Link
            href="/getting-started"
            role="button"
            tabindex="0"
            class="me-3 px-5 btn btn-outline-light btn-lg"
          >
            Get started
          </Link>
          <Link
            href="/components"
            role="button"
            tabindex="0"
            class="px-5 btn btn-outline-light btn-lg"
          >
            Components
          </Link>
        </div>
        <div class="text-muted mt-3">Current version: 0.1.0</div>
      </div>
    </div>
    <div class="container">
      <div class="row">
        <div class="px-4 py-3 col-md-4">
          <h2>Rebuilt with SolidJS</h2>
          <p>
            Solid-Bootstrap replaces the Bootstrap JavaScript. Each component
            has been carefully ported into a true SolidJS component, without
            unneeded dependencies like jQuery.
          </p>
          <p>
            This library has been ported from React-Bootstrap which is one of
            the most popular and proven UI libraries, making it an excellent
            choice as your SolidJS UI foundation.
          </p>
        </div>
        <div class="px-4 py-3 col-md-4">
          <h2>Bootstrap at its core</h2>
          <p>
            Built with compatibility in mind, we embrace our bootstrap core and
            strive to be compatible with the world's largest UI ecosystem.
          </p>
          <p>
            By relying entirely on the Bootstrap stylesheet, Solid-Bootstrap
            just works with the thousands of Bootstrap themes you already love.
          </p>
          <p></p>
        </div>
        <div class="px-4 py-3 col-md-4">
          <h2>Accessible by default</h2>
          <p>
            The SolidJS component model gives us more control over form and
            function of each component.
          </p>
          <p>
            Each component is implemented with accessibility in mind. The result
            is a set of accessible-by-default components, over what is possible
            from plain Bootstrap.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
