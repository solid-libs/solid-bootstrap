// Copies index.html for each route endpoint to workaround limitations
// of static server like Github pages not supporting SPA routing

const path = require("path");
const fs = require("fs-extra");

const docsPath = path.resolve(__dirname, "../../docs/");
const componentsPath = path.join(docsPath, "components");
const corePath = path.join(docsPath, "core");
const layoutPath = path.join(docsPath, "layout");

function main() {
  const source = docsPath + "/index.html";
  // Root routes
  fs.copyFileSync(source, path.join(docsPath, "getting-started.html"));

  // Component routes
  fs.mkdirSync(componentsPath);
  [
    "alerts",
    "accordion",
    "badge",
    "breadcrumb",
    "buttons",
    "button-group",
    "cards",
    "carousel",
    "close-button",
    "dropdowns",
    "figures",
    "forms",
    "images",
    "input-group",
    "list-group",
    "modal",
    "navs",
    "navbar",
    "offcanvas",
    "popovers",
    "pagination",
    "placeholder",
    "progress",
    "spinners",
    "table",
    "tooltips",
    "toasts",
    "tabs",
  ].forEach((dest) => {
    fs.copyFileSync(source, path.join(componentsPath, `${dest}.html`));
  });

  // Core routes
  fs.mkdirSync(corePath);
  [
    "overview",
    "dropdowns",
    "modal",
    "overlays",
  ].forEach((dest) => {
    fs.copyFileSync(source, path.join(corePath, `${dest}.html`));
  });

  // Layout routes
  fs.mkdirSync(layoutPath);
  [
    "grid",
    "stack",
  ].forEach((dest) => {
    fs.copyFileSync(source, path.join(layoutPath, `${dest}.html`));
  });
}

main();
