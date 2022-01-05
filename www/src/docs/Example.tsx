import { createContext, createEffect, createSignal, JSX, useContext } from "solid-js";
import { Card, Nav, Tab } from "solid-bootstrap";


type PreviewProps = {
  title: string,
  children: JSX.Element,
}

type PaneProps = {
  children: JSX.Element,
}

const ExampleContext = createContext<(e: JSX.Element) => void>()

// https://css-tricks.com/float-an-element-to-the-bottom-corner/
const Example = (props: PreviewProps) => {
  const [intro, setIntro] = createSignal<JSX.Element>()
  return (
    <div>
      <ExampleContext.Provider value={setIntro}>
        <Tab.Container defaultActiveKey="preview">
          <div className="d-flex">
            <div className="w-100">
              <div className="float-end h-100 d-flex align-items-end ps-2" style={{"shape-outside": "inset(calc(100% - 45px) 0 0)"}}>
                <Nav variant="tabs" className="d-flex flex-nowrap">
                  <Nav.Item>
                    <Nav.Link as="button" eventKey="preview">Preview</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link as="button" eventKey="code">Code</Nav.Link>
                  </Nav.Item>
                </Nav>
              </div>
              <div className="pb-2">
                <h3>{props.title}</h3>
                {intro()}
              </div>
            </div>
          </div>
          <Tab.Content>
            {props.children}
          </Tab.Content>
        </Tab.Container>
      </ExampleContext.Provider>
    </div>
  )
}

const Intro = (props: PaneProps) => {
  const setIntro = useContext(ExampleContext);
  createEffect(() => {
    setIntro!(props.children)
  })
  return null
}

const Preview = (props: PaneProps) => (
  <Tab.Pane eventKey="preview">
    <Card body>
      {props.children}
    </Card>
  </Tab.Pane>
)

const Code = (props: PaneProps) => (
  <Tab.Pane eventKey="code">
    {props.children}
  </Tab.Pane>
)


export default Object.assign(Example, {Intro, Preview, Code});
