import { Route, Router, Routes } from "solid-app-router";
import { Component } from "solid-js";
import Container from "../../packages/bootstrap/src/Container";
import TopNavbar from "./layout/TopNavbar";
import Components from "./pages/Components";
import GettingStarted from "./pages/GettingStarted";
import Home from "./pages/Home";

const App: Component = () => (
  <Router>
    <TopNavbar />
    <Routes>
      <Route path="/components" element={<Components />} />
      <Route path="/getting-started" element={<GettingStarted />} />
      <Route path="/solid-bootstrap/components" element={<Components />} />
      <Route
        path="/solid-bootstrap/getting-started"
        element={<GettingStarted />}
      />
      <Route path="/*all" element={<Home />} />
    </Routes>
  </Router>
);
export default App;
