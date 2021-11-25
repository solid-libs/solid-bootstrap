import {
  Component,
  createComputed,
  createEffect,
  createSignal,
  Show,
} from "solid-js";
import Dropdown, { DropdownProps } from "../core/Dropdown";
import { useDropdownMenu } from "../core/DropdownMenu";
import { useDropdownToggle } from "../core/DropdownToggle";

const DropdownMenu = () => {
  const [menuProps, meta] = useDropdownMenu({
    flip: true,
    offset: [0, 5],
  });

  return (
    <ul
      class={`dropdown-menu ${meta.show ? "show" : ""}`}
      role="menu"
      {...menuProps}
    >
      <li>
        <Dropdown.Item as="a" class="dropdown-item" href="#">
          Item 1
        </Dropdown.Item>
      </li>
      <li>
        <Dropdown.Item as="a" class="dropdown-item" href="#">
          Item 2
        </Dropdown.Item>
      </li>
      <li>
        <Dropdown.Item as="a" class="dropdown-item" href="#">
          Item 3
        </Dropdown.Item>
      </li>
    </ul>
  );
};

const DropdownToggle: Component = (props) => {
  const [toggleProps] = useDropdownToggle();

  return (
    <button {...toggleProps} className="btn btn-primary dropdown-toggle">
      {props.children}
    </button>
  );
};

const DropdownButton = (
  props: Pick<DropdownProps, "show" | "onToggle"> & { title: string }
) => (
  <Dropdown show={props.show} onToggle={props.onToggle}>
    <span>
      <DropdownToggle>{props.title}</DropdownToggle>
      <Show when={props.show}>
        <DropdownMenu />
      </Show>
    </span>
  </Dropdown>
);

const DropdownExample = () => {
  const [show, setShow] = createSignal(false);

  return (
    <div class="row justify-content-md-center">
      <div class="col-md-auto">
        <DropdownButton
          show={show()}
          onToggle={(nextShow: boolean) => setShow(nextShow)}
          title={`${show() ? "Close" : "Open"} Dropdown`}
        />
      </div>
    </div>
  );
};

export const CoreDropdownDocs: Component = () => {
  return (
    <div class="row gy-4">
      <div>
        <h3>Dropdown</h3>
        <p class="lead">
          Dropdown is a set of structural components for building accessible
          dropdown menus with close-on-click, keyboard navigation, and correct
          focus handling.
        </p>
        <p>
          Dropdown is primarily built from three base components that you should
          compose to build your dropdowns:
        </p>
        <ul>
          <li>
            <code>Dropdown</code>: wraps the menu and toggle, and handles
            keyboard navigation
          </li>
          <li>
            <code>Dropdown.Toggle</code>: generally a button that triggers the
            opening of the menu
          </li>
          <li>
            <code>Dropdown.Menu</code>: the overlaid menu, positioned to the
            toggle with <code>PopperJS</code>
          </li>
        </ul>
      </div>
      <div>
        <DropdownExample />
      </div>
    </div>
  );
};
