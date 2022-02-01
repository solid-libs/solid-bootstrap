import {ComponentProps, createSignal} from "solid-js";
import {
  Button,
  useDropdownMenu,
  useDropdownToggle,
  Dropdown,
  DropdownProps,
} from "solid-bootstrap-core";

const DropdownMenu = (p: ComponentProps<"div">) => {
  const [props, meta] = useDropdownMenu({
    flip: true,
    offset: [0, 4],
  });

  return (
    <div
      {...props}
      role={p.role}
      classList={{
        "dropdown-menu": true, // using bootstrap classes here but you can use whatever
        show: meta.show,
      }}
    >
      <Dropdown.Item className="dropdown-item">Item 1</Dropdown.Item>
      <Dropdown.Item className="dropdown-item">Item 2</Dropdown.Item>
    </div>
  );
};

const DropdownToggle = (p: ComponentProps<"button">) => {
  const [props] = useDropdownToggle();

  return (
    <Button {...props} className="btn btn-primary dropdown-toggle">
      {p.children}
    </Button>
  );
};

type DropdownButtonProps = {
  onToggle: DropdownProps["onToggle"];
  role?: ComponentProps<"div">["role"];
  show: DropdownProps["show"];
  title: string;
};

const DropdownButton = (p: DropdownButtonProps) => (
  <Dropdown show={p.show} onToggle={p.onToggle}>
    <span>
      <DropdownToggle>{p.title}</DropdownToggle>
      <DropdownMenu role={p.role} />
    </span>
  </Dropdown>
);

export function DropdownExample1() {
  const [show, setShow] = createSignal(false);

  return (
    <div className="d-flex justify-content-center">
      <DropdownButton
        show={show()}
        onToggle={(nextShow) => setShow(nextShow)}
        title={`${show() ? "Close" : "Open"} Dropdown`}
      />
    </div>
  );
}
