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
      <Route path="/getting-started" element={<GettingStarted />} />
      <Route path="/components" element={<Components />} />
      <Route path="/*all" element={<Home />} />
    </Routes>
  </Router>
);
export default App;
