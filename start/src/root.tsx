// @refresh reload
import {Suspense} from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Link,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import TopNavbar from "./components/TopNavbar";
import "./root.css";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>SolidStart - Solid-Bootstrap</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
        <Link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
          crossorigin="anonymous"
        />
        <Link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/github-dark.min.css"
        />
      </Head>
      <Body>
        <ErrorBoundary>
          <TopNavbar />
          <Suspense>
            <Routes>
              <FileRoutes />
            </Routes>
          </Suspense>
        </ErrorBoundary>
        <Scripts />
        <script src="https://unpkg.com/holderjs@2.9.9/holder.js"></script>
        <script>
          {`
          Holder.addTheme("gray", {
            bg: "#373940",
            fg: "#948F84",
            fontweight: "normal",
          });
        `}
        </script>
      </Body>
    </Html>
  );
}

