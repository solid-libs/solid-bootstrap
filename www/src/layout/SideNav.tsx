import startCase from "lodash/startCase";
import classNames from "classnames";
import {Component, ComponentProps, createEffect, createMemo, createSignal} from "solid-js";
import {Button, Collapse, Nav} from "solid-bootstrap";
import styles from "./SideNav.module.css";
import {Link, useLocation} from "solid-app-router";

const baseUrl = import.meta.env.BASE_URL;

const forms = [
  "overview",
  "form-controls",
  "form-text",
  "select",
  "checks-radios",
  "range",
  "input-group",
  "floating-labels",
  "layout",
  "validation",
];

const layout = ["grid", "stack"];

const components = [
  "accordion",
  "alerts",
  "badge",
  "breadcrumb",
  "buttons",
  "button-group",
  "cards",
  "carousel",
  "close-button",
  "dropdowns",
  "figures",
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
  "toasts",
  "tooltips",
];

const core = ["overview", "button", "dropdown", "modal", "navs and tabs", "overlays"];

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
    class={classNames(props.className, styles.MenuButton, "p-0 d-md-none ms-auto")}
  />
);

const SidePanel = (props: ComponentProps<"div">) => (
  <div {...props} class={classNames(props.className, styles.SidePanel, "d-flex flex-column")}/>
);

const OverflowWrapper = (props: ComponentProps<"div">) => (
  <div {...props} class={classNames(props.className, styles.OverflowWrapper)}/>
);

const TableOfContents = (props: ComponentProps<"nav">) => (
  <nav {...props} class={classNames(props.className, styles.TableOfContents, "pt-2 pb-4")}/>
);

const TocLink = (props: ComponentProps<typeof Nav.Link>) => (
  <Nav.Link {...props} class={classNames(props.className, styles.TocLink)}/>
);

const TocSubLink = (props: ComponentProps<typeof TocLink>) => (
  <TocLink {...props} class={classNames(props.className, styles.TocSubLink)}/>
);

const NavSection = (props: {
  heading: string;
  location: {pathname: string};
  items?: string[];
  path: string;
}) => {
  let active = createMemo(() => {
    return props.location.pathname.startsWith(baseUrl + props.path.slice(1));
  });
  return (
    <>
      <TocLink
        active={active()}
        as={Link}
        href={props.items ? `${props.path}/${props.items[0]}/` : `${props.path}/`}
        class={classNames("js-search-toc-item", active() && "js-search-active")}
      >
        {props.heading}
      </TocLink>

      {props.items && active() && (
        <Nav activeKey={props.location.pathname} onSelect={() => {}} class="d-block">
          {props.items.map((name: string) => (
            <Nav.Item>
              <TocSubLink as={Link} href={`${props.path}/${name}/`}>
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
  const [collapsed, setCollapsed] = createSignal(true);
  const location = useLocation();

  const handleCollapse = () => {
    setCollapsed((s) => !s);
  };

  createEffect(() => {
    // collapse mobile sidebar if navigated
    if (location?.pathname) {
      setCollapsed(true);
    }
  });

  return (
    <SidePanel {...props}>
      <MenuButton onClick={handleCollapse} variant="light">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="30" height="30">
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
      <Collapse in={!collapsed()}>
        <OverflowWrapper>
          <TableOfContents role="complementary">
            <NavSection heading="Layout" location={location} items={layout} path="/layout" />
            <NavSection heading="Forms" location={location} items={forms} path="/forms" />
            <NavSection
              heading="Components"
              location={location}
              items={components}
              path="/components"
            />
            <NavSection heading="Core (headless)" location={location} items={core} path="/core" />
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
