import startCase from "lodash/startCase";
import classNames from "classnames";
import { Component, ComponentProps, createMemo, createSignal } from "solid-js";
import Collapse from "../../../packages/bootstrap/src/Collapse";
import styles from "./SideNav.module.css";
import Button from "../../../packages/bootstrap/src/Button";
import Nav from "../../../packages/bootstrap/src/Nav";
import { useLocation } from "solid-app-router";

const layout = ["grid", "stack"];

const components = [
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
  "input-group",
  "images",
  "list-group",
  "modal",
  "navs",
  "navbar",
  "offcanvas",
  "pagination",
  "placeholder",
  "popovers",
  "progress",
  "spinners",
  "table",
  "tabs",
  "tooltips",
  "toasts",
];

const core = ["overview", "dropdowns", "modal", "overlays"];

const utilities = ["transitions", "ratio", "restart-ui"];

const nameOverrides = {
  "why-react-bootstrap": "Why React-Bootstrap",
  rtl: "RTL",
  "restart-ui": "@restart/ui",
  "server-side-rendering": "Server-side Rendering",
};

const MenuButton = (props: ComponentProps<typeof Button>) => (
  <Button
    {...props}
    className={classNames(
      props.className,
      styles.MenuButton,
      "p-0 d-md-none ms-auto"
    )}
  />
);

const SidePanel = (props: ComponentProps<"div">) => (
  <div
    {...props}
    className={classNames(
      props.className,
      styles.SidePanel,
      "d-flex flex-column"
    )}
  />
);

const OverflowWrapper = (props: ComponentProps<"div">) => (
  <div
    {...props}
    className={classNames(props.className, styles.OverflowWrapper)}
  />
);

const TableOfContents = (props: ComponentProps<"nav">) => (
  <nav
    {...props}
    className={classNames(props.className, styles.TableOfContents, "pt-2 pb-4")}
  />
);

const TocLink = (props: ComponentProps<typeof Nav.Link>) => (
  <Nav.Link
    {...props}
    className={classNames(props.className, styles.TocLink)}
  />
);

const TocSubLink = (props: ComponentProps<typeof TocLink>) => (
  <TocLink
    {...props}
    className={classNames(props.className, styles.TocSubLink)}
  />
);

const NavSection = (props: {
  heading: string;
  location: { pathname: string };
  items?: string[];
  path: string;
}) => {
  let active = createMemo(() => props.location.pathname.startsWith(props.path));
  return (
    <>
      <TocLink
        active={active()}
        href={
          props.items ? `/#${props.path}/${props.items[0]}/` : `${props.path}/`
        }
        className={classNames(
          "js-search-toc-item",
          active() && "js-search-active"
        )}
      >
        {props.heading}
      </TocLink>

      {props.items && active() && (
        <Nav
          activeKey={props.location.pathname}
          onSelect={() => {}}
          className="d-block"
        >
          {props.items.map((name: string) => (
            <Nav.Item>
              <TocSubLink href={`/#${props.path}/${name}/`}>
                {
                  // @ts-ignore
                  nameOverrides[name] || startCase(name.toLowerCase())
                }
              </TocSubLink>
            </Nav.Item>
          ))}
        </Nav>
      )}
    </>
  );
};

const SideNav: Component = (props: ComponentProps<typeof SidePanel>) => {
  const [collapsed, setCollapsed] = createSignal(false);
  const location = useLocation();

  const handleCollapse = () => {
    setCollapsed((s) => !s);
  };

  return (
    <SidePanel {...props}>
      <MenuButton onClick={handleCollapse} variant="light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="30"
          height="30"
        >
          <title>Menu</title>
          <path
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-miterlimit="10"
            d="M4 7h22M4 15h22M4 23h22"
          />
        </svg>
      </MenuButton>
      <Collapse in={collapsed()}>
        <OverflowWrapper>
          <TableOfContents role="complementary">
            <NavSection
              heading="Layout"
              location={location}
              items={layout}
              path="/layout"
            />
            <NavSection
              heading="Components"
              location={location}
              items={components}
              path="/components"
            />
            <NavSection
              heading="Core"
              location={location}
              items={core}
              path="/core"
            />
            {/* <NavSection
              heading="Utilities"
              location={location}
              items={utilities}
              path="/#/utilities"
            /> */}
          </TableOfContents>
        </OverflowWrapper>
      </Collapse>
    </SidePanel>
  );
};

export default SideNav;
