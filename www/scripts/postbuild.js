const path = require("path");
const fs = require("fs-extra");

const docsPath = path.resolve(__dirname, "../../docs/");
const componentsPath = path.resolve(__dirname, "../../docs/components");
// This file is used by build system to copy index.html for each route endpoint
// to workaround limitations of static server like Github pages not supporting SPA routing

function main() {
  fs.copyFileSync(docsPath + "/index.html", docsPath + "/getting-started.html");

  fs.mkdirSync(componentsPath);

  fs.copyFileSync(docsPath + "/index.html", componentsPath + "/alerts.html");
  fs.copyFileSync(docsPath + "/index.html", componentsPath + "/accordion.html");
  fs.copyFileSync(docsPath + "/index.html", componentsPath + "/badge.html");
  fs.copyFileSync(
    docsPath + "/index.html",
    componentsPath + "/breadcrumb.html"
  );
  fs.copyFileSync(docsPath + "/index.html", componentsPath + "/buttons.html");
  fs.copyFileSync(docsPath + "/index.html", componentsPath + "/button.html");
  fs.copyFileSync(docsPath + "/index.html", componentsPath + "/cards.html");
  fs.copyFileSync(docsPath + "/index.html", componentsPath + "/carousel.html");
  fs.copyFileSync(docsPath + "/index.html", componentsPath + "/close.html");
  fs.copyFileSync(docsPath + "/index.html", componentsPath + "/dropdowns.html");
  fs.copyFileSync(docsPath + "/index.html", componentsPath + "/figures.html");
  fs.copyFileSync(docsPath + "/index.html", componentsPath + "/forms.html");
  fs.copyFileSync(docsPath + "/index.html", componentsPath + "/images.html");
  fs.copyFileSync(docsPath + "/index.html", componentsPath + "/input.html");
  fs.copyFileSync(docsPath + "/index.html", componentsPath + "/list.html");
  fs.copyFileSync(docsPath + "/index.html", componentsPath + "/modal.html");
  fs.copyFileSync(docsPath + "/index.html", componentsPath + "/navs.html");
  fs.copyFileSync(docsPath + "/index.html", componentsPath + "/navbar.html");
  fs.copyFileSync(docsPath + "/index.html", componentsPath + "/offcanvas.html");
  fs.copyFileSync(docsPath + "/index.html", componentsPath + "/popovers.html");
  fs.copyFileSync(
    docsPath + "/index.html",
    componentsPath + "/pagination.html"
  );
  fs.copyFileSync(
    docsPath + "/index.html",
    componentsPath + "/placeholder.html"
  );
  fs.copyFileSync(docsPath + "/index.html", componentsPath + "/progress.html");
  fs.copyFileSync(docsPath + "/index.html", componentsPath + "/spinners.html");
  fs.copyFileSync(docsPath + "/index.html", componentsPath + "/table.html");
  fs.copyFileSync(docsPath + "/index.html", componentsPath + "/tooltips.html");
  fs.copyFileSync(docsPath + "/index.html", componentsPath + "/toasts.html");
  fs.copyFileSync(docsPath + "/index.html", componentsPath + "/tabs.html");
  fs.copyFileSync(
    docsPath + "/index.html",
    componentsPath + "/coreDropdown.html"
  );
  fs.copyFileSync(docsPath + "/index.html", componentsPath + "/coreModal.html");
  fs.copyFileSync(
    docsPath + "/index.html",
    componentsPath + "/coreOverlay.html"
  );
}

main();
