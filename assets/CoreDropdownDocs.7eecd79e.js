import{f,q as n,c as e,t as p,j as D,k as b,J as v,m as g,X as y}from"./index.7b72cfc3.js";import{M as j}from"./index.4dfbe4b9.js";import{E as c,T as u}from"./Example.d69c38da.js";import{c as h,a as k,b as _}from"./Dropdown.5d000700.js";import{T as w}from"./Tabs.ae0d668b.js";import"./Card.05302259.js";import"./store.c1211f7e.js";const T=p('<div class="dropdown-menu"></div>'),M=p("<span></span>"),x=p('<div class="d-flex justify-content-center"></div>'),P=l=>{const[r,o]=k({flip:!0,offset:[0,4]});return(()=>{const s=T.cloneNode(!0);return D(s,r,!1,!0),n(s,e(h.Item,{class:"dropdown-item",children:"Item 1"}),null),n(s,e(h.Item,{class:"dropdown-item",children:"Item 2"}),null),b(t=>{const a=l.role,d=o.show;return a!==t._v$&&v(s,"role",t._v$=a),d!==t._v$2&&s.classList.toggle("show",t._v$2=d),t},{_v$:void 0,_v$2:void 0}),s})()},B=l=>{const[r]=_();return e(y,g(r,{class:"btn btn-primary dropdown-toggle",get children(){return l.children}}))},I=l=>e(h,{get show(){return l.show},get onToggle(){return l.onToggle},get children(){const r=M.cloneNode(!0);return n(r,e(B,{get children(){return l.title}}),null),n(r,e(P,{get role(){return l.role}}),null),r}});function $(){const[l,r]=f(!1);return(()=>{const o=x.cloneNode(!0);return n(o,e(I,{get show(){return l()},onToggle:s=>r(s),get title(){return`${l()?"Close":"Open"} Dropdown`}})),o})()}const C=p('<p class="lead"></p>'),S=p('<div class="row gy-5 pt-3"><div></div><div></div></div>');function Y(l={}){const{wrapper:r}=Object.assign({},j(),l.components);return r?e(r,g(l,{get children(){return e(o,{})}})):o();function o(){const s=Object.assign({h1:"h1",p:"p",code:"code",ul:"ul",li:"li",pre:"pre",span:"span",h2:"h2",h3:"h3",strong:"strong",em:"em"},j(),l.components);return h||i("Dropdown",!1),h.Menu||i("Dropdown.Menu",!0),h.Toggle||i("Dropdown.Toggle",!0),c||i("Example",!1),c.Code||i("Example.Code",!0),c.Intro||i("Example.Intro",!0),c.Preview||i("Example.Preview",!0),[e(s.h1,{children:"Dropdown (core)"}),`
`,(()=>{const t=C.cloneNode(!0);return n(t,e(s.p,{get children(){return[e(s.code,{children:"Dropdown"}),` is a set of structural components for building accessible dropdown menus with close-on-click,
keyboard navigation, and correct focus handling. Like all of `,e(s.code,{children:"solid-bootstrap-core"}),`
components, it's BYOS (Bring Your Own Styles). `,e(s.code,{children:"Dropdown"}),` is primarily
built from three base components that you should compose to build your dropdowns.`]}})),t})(),`
`,(()=>{const t=S.cloneNode(!0),a=t.firstChild,d=a.nextSibling;return n(t,e(c,{get children(){return[e(c.Intro,{get children(){return e(s.ul,{get children(){return[`
`,e(s.li,{get children(){return[e(s.code,{children:"Dropdown"}),": wraps the menu and toggle, and handles keyboard navigation"]}}),`
`,e(s.li,{get children(){return[e(s.code,{children:"Dropdown.Toggle"}),": generally a button that triggers the opening of the menu"]}}),`
`,e(s.li,{get children(){return[e(s.code,{children:"Dropdown.Menu"}),": the overlaid menu, positioned to the toggle with ",e(s.code,{children:"PopperJS"})]}}),`
`]}})}}),e(c.Preview,{get children(){return e($,{})}}),e(c.Code,{get children(){return e(s.pre,{get children(){return e(s.code,{className:"hljs language-jsx",get children(){return[e(s.span,{className:"hljs-keyword",children:"import"}),` {
  `,e(s.span,{className:"hljs-title class_",children:"Button"}),`,
  useDropdownMenu,
  useDropdownToggle,
  `,e(s.span,{className:"hljs-title class_",children:"Dropdown"}),`,
  `,e(s.span,{className:"hljs-title class_",children:"DropdownProps"}),`,
} `,e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:'"solid-bootstrap-core"'}),`;

`,e(s.span,{className:"hljs-keyword",children:"const"})," ",e(s.span,{className:"hljs-title function_",children:"DropdownMenu"})," = (",e(s.span,{className:"hljs-params",get children(){return["p: ComponentProps<",e(s.span,{className:"hljs-string",children:'"div"'}),">"]}}),`) => {
  `,e(s.span,{className:"hljs-keyword",children:"const"})," [props, meta] = ",e(s.span,{className:"hljs-title function_",children:"useDropdownMenu"}),`({
    `,e(s.span,{className:"hljs-attr",children:"flip"}),": ",e(s.span,{className:"hljs-literal",children:"true"}),`,
    `,e(s.span,{className:"hljs-attr",children:"offset"}),": [",e(s.span,{className:"hljs-number",children:"0"}),", ",e(s.span,{className:"hljs-number",children:"4"}),`],
  });

  `,e(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,e(s.span,{className:"xml",get children(){return[e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"div"}),`
      {`,e(s.span,{className:"hljs-attr",children:"...props"}),`}
      `,e(s.span,{className:"hljs-attr",children:"role"}),"=",e(s.span,{className:"hljs-string",children:"{p.role}"}),`
      `,e(s.span,{className:"hljs-attr",children:"classList"}),"=",e(s.span,{className:"hljs-string",children:"{{"}),`
        "`,e(s.span,{className:"hljs-attr",children:"dropdown-menu"}),'"',e(s.span,{className:"hljs-attr",children:":"})," ",e(s.span,{className:"hljs-attr",children:"true"}),", // ",e(s.span,{className:"hljs-attr",children:"using"})," ",e(s.span,{className:"hljs-attr",children:"bootstrap"})," ",e(s.span,{className:"hljs-attr",children:"classes"})," ",e(s.span,{className:"hljs-attr",children:"here"})," ",e(s.span,{className:"hljs-attr",children:"but"})," ",e(s.span,{className:"hljs-attr",children:"you"})," ",e(s.span,{className:"hljs-attr",children:"can"})," ",e(s.span,{className:"hljs-attr",children:"use"})," ",e(s.span,{className:"hljs-attr",children:"whatever"}),`
        `,e(s.span,{className:"hljs-attr",children:"show:"})," ",e(s.span,{className:"hljs-attr",children:"meta.show"}),`,
      }}
    >`]}}),`
      `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Dropdown.Item"})," ",e(s.span,{className:"hljs-attr",children:"class"}),"=",e(s.span,{className:"hljs-string",children:'"dropdown-item"'}),">"]}}),"Item 1",e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Dropdown.Item"}),">"]}}),`
      `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Dropdown.Item"})," ",e(s.span,{className:"hljs-attr",children:"class"}),"=",e(s.span,{className:"hljs-string",children:'"dropdown-item"'}),">"]}}),"Item 2",e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Dropdown.Item"}),">"]}}),`
    `,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"div"}),">"]}})]}}),`
  );
};

`,e(s.span,{className:"hljs-keyword",children:"const"})," ",e(s.span,{className:"hljs-title function_",children:"DropdownToggle"})," = (",e(s.span,{className:"hljs-params",get children(){return["p: ComponentProps<",e(s.span,{className:"hljs-string",children:'"button"'}),">"]}}),`) => {
  `,e(s.span,{className:"hljs-keyword",children:"const"})," [props] = ",e(s.span,{className:"hljs-title function_",children:"useDropdownToggle"}),`();

  `,e(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,e(s.span,{className:"xml",get children(){return[e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Button"})," {",e(s.span,{className:"hljs-attr",children:"...props"}),"} ",e(s.span,{className:"hljs-attr",children:"class"}),"=",e(s.span,{className:"hljs-string",children:'"btn btn-primary dropdown-toggle"'}),">"]}}),`
      {p.children}
    `,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Button"}),">"]}})]}}),`
  );
};

type `,e(s.span,{className:"hljs-title class_",children:"DropdownButtonProps"}),` = {
  `,e(s.span,{className:"hljs-attr",children:"onToggle"}),": ",e(s.span,{className:"hljs-title class_",children:"DropdownProps"}),"[",e(s.span,{className:"hljs-string",children:'"onToggle"'}),`];
  role?: `,e(s.span,{className:"hljs-title class_",children:"ComponentProps"}),"<",e(s.span,{className:"hljs-string",children:'"div"'}),">[",e(s.span,{className:"hljs-string",children:'"role"'}),`];
  `,e(s.span,{className:"hljs-attr",children:"show"}),": ",e(s.span,{className:"hljs-title class_",children:"DropdownProps"}),"[",e(s.span,{className:"hljs-string",children:'"show"'}),`];
  `,e(s.span,{className:"hljs-attr",children:"title"}),`: string;
};

`,e(s.span,{className:"hljs-keyword",children:"const"})," ",e(s.span,{className:"hljs-title function_",children:"DropdownButton"})," = (",e(s.span,{className:"hljs-params",children:"p: DropdownButtonProps"}),`) => (
  `,e(s.span,{className:"xml",get children(){return[e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Dropdown"})," ",e(s.span,{className:"hljs-attr",children:"show"}),"=",e(s.span,{className:"hljs-string",children:"{p.show}"})," ",e(s.span,{className:"hljs-attr",children:"onToggle"}),"=",e(s.span,{className:"hljs-string",children:"{p.onToggle}"}),">"]}}),`
    `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"span"}),">"]}}),`
      `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"DropdownToggle"}),">"]}}),"{p.title}",e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"DropdownToggle"}),">"]}}),`
      `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"DropdownMenu"})," ",e(s.span,{className:"hljs-attr",children:"role"}),"=",e(s.span,{className:"hljs-string",children:"{p.role}"})," />"]}}),`
    `,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"span"}),">"]}}),`
  `,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Dropdown"}),">"]}})]}}),`
);

`,e(s.span,{className:"hljs-keyword",children:"export"})," ",e(s.span,{className:"hljs-keyword",children:"function"})," ",e(s.span,{className:"hljs-title function_",children:"DropdownExample1"}),"(",e(s.span,{className:"hljs-params"}),`) {
  `,e(s.span,{className:"hljs-keyword",children:"const"})," [show, setShow] = ",e(s.span,{className:"hljs-title function_",children:"createSignal"}),"(",e(s.span,{className:"hljs-literal",children:"false"}),`);

  `,e(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,e(s.span,{className:"xml",get children(){return[e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"div"})," ",e(s.span,{className:"hljs-attr",children:"class"}),"=",e(s.span,{className:"hljs-string",children:'"d-flex justify-content-center"'}),">"]}}),`
      `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"DropdownButton"}),`
        `,e(s.span,{className:"hljs-attr",children:"show"}),"=",e(s.span,{className:"hljs-string",children:"{show()}"}),`
        `,e(s.span,{className:"hljs-attr",children:"onToggle"}),"=",e(s.span,{className:"hljs-string",children:"{(nextShow)"})," =>"]}}),' setShow(nextShow)}\n        title={`${show() ? "Close" : "Open"} Dropdown`}\n      />\n    ',e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"div"}),">"]}})]}}),`
  );
}
`]}})}})}})]}}),a),n(a,e(s.h2,{children:"Components"}),null),n(a,e(s.p,{get children(){return["Dropdowns are made up of a wrapping ",e(s.code,{children:"Dropdown"})," component, a ",e(s.code,{children:"Toggle"}),` that
triggers that menu visibility, a `,e(s.code,{children:"Menu"})," and the ",e(s.code,{children:"Item"}),`s within that menu. With the exception
of the outer `,e(s.code,{children:"Dropdown"}),` component, each sub component can be constructed with a component
render prop API or a hook depending on preference.`]}}),null),n(a,e(s.h3,{children:"Dropdown"}),null),n(a,e(s.p,{get children(){return["The ",e(s.code,{children:"Dropdown"}),` component is the non-presentational orchestrator of the dropdown state.
It handles menu visibility, keyboard navigation and focus management. As a convenience, a
few `,e(s.code,{children:"Menu"})," specific props can be provided to ",e(s.code,{children:"Dropdown"})," directly, such as ",e(s.code,{children:"placement"}),`. It
is sometimes helpful to also render a wrapping DOM element around your `,e(s.code,{children:"Toggle"})," and ",e(s.code,{children:"Menu"}),`,
but not it's required.`]}}),null),n(a,e(s.pre,{get children(){return e(s.code,{className:"hljs language-jsx",get children(){return[e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"Dropdown"})," } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:"'solid-bootstrap-core'"}),`;

<Dropdown placement='top-start'>
  <span>
  {/* Toggle */}
  </span>
<Dropdown>
`]}})}}),null),n(a,e(s.h3,{children:"Toggle"}),null),n(a,e(s.p,{get children(){return["The ",e(s.code,{children:"Toggle"}),` is an interactive element (usually a button) that opens the dropdown menu.
The toggle props contain a `,e(s.code,{children:"ref"}),` that must be passed to a valid DOM element. You
can pass `,e(s.code,{children:"disabled"})," and ",e(s.code,{children:"onClick"}),` props as well and they will be composed into the returned
props automatically.`]}}),null),n(a,e(s.p,{get children(){return["Available as either a ",e(s.code,{children:"useDropdownToggle"})," hook or ",e(s.code,{children:"DropdownToggle"})," component..."]}}),null),n(a,e(w,{defaultActiveKey:"hook",get children(){return[e(u,{eventKey:"hook",title:"useDropdownToggle",get children(){return e(s.pre,{get children(){return e(s.code,{className:"hljs language-jsx",get children(){return[e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"Button"}),", useDropdownToggle } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:'"solid-bootstrap-core"'}),`;

`,e(s.span,{className:"hljs-keyword",children:"const"})," ",e(s.span,{className:"hljs-title function_",children:"DropdownToggle"})," = (",e(s.span,{className:"hljs-params",children:"props"}),`) => {
  `,e(s.span,{className:"hljs-keyword",children:"const"})," [toggleProps] = ",e(s.span,{className:"hljs-title function_",children:"useDropdownToggle"}),`(props);

  `,e(s.span,{className:"hljs-keyword",children:"return"})," ",e(s.span,{className:"xml",get children(){return e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Button"})," {",e(s.span,{className:"hljs-attr",children:"...props"}),"} {",e(s.span,{className:"hljs-attr",children:"...itemProps"}),"} />"]}})}}),`;
};
`]}})}})}}),e(u,{eventKey:"component",title:"DropdownToggle",get children(){return e(s.pre,{get children(){return e(s.code,{className:"hljs language-jsx",get children(){return[e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"Button"}),", ",e(s.span,{className:"hljs-title class_",children:"DropdownToggle"})," } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:'"solid-bootstrap-core"'}),`;

`,e(s.span,{className:"hljs-keyword",children:"const"})," ",e(s.span,{className:"hljs-title function_",children:"MyDropdownToggle"})," = (",e(s.span,{className:"hljs-params",children:"props"}),`) => (
  `,e(s.span,{className:"xml",get children(){return[e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"DropdownToggle"})," {",e(s.span,{className:"hljs-attr",children:"...props"}),"}>"]}}),`
    {(toggleProps, meta) => (
      `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Button"})," {",e(s.span,{className:"hljs-attr",children:"...props"}),"} {",e(s.span,{className:"hljs-attr",children:"...toggleProps"}),"} />"]}}),`
    )}
  `,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"DropdownToggle"}),">"]}})]}}),`
);
`]}})}})}})]}}),null),n(a,e(s.h3,{children:"Menu"}),null),n(a,e(s.p,{get children(){return["The dropdown ",e(s.code,{children:"Menu"}),` provides an overlay that is positioned next to the dropdown toggle.
Menu's are positioned with `,e(s.code,{children:"PopperJS"}),` by default, and accept all configuration options
available to `,e(s.code,{children:"Popper"}),"."]}}),null),n(a,e(s.p,{get children(){return["Available as either a ",e(s.code,{children:"useDropdownMenu"})," hook or ",e(s.code,{children:"DropdownMenu"})," component..."]}}),null),n(a,e(w,{defaultActiveKey:"hook",get children(){return[e(u,{eventKey:"hook",title:"useDropdownMenu",get children(){return e(s.pre,{get children(){return e(s.code,{className:"hljs language-jsx",get children(){return[e(s.span,{className:"hljs-keyword",children:"import"})," { useDropdownMenu } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:'"solid-bootstrap-core"'}),`;

`,e(s.span,{className:"hljs-keyword",children:"const"})," ",e(s.span,{className:"hljs-title function_",children:"DropdownToggle"})," = (",e(s.span,{className:"hljs-params",children:"props"}),`) => {
  `,e(s.span,{className:"hljs-keyword",children:"const"})," [menuProps, meta] = ",e(s.span,{className:"hljs-title function_",children:"useDropdownMenu"}),`({
    `,e(s.span,{className:"hljs-attr",children:"flip"}),": ",e(s.span,{className:"hljs-literal",children:"true"}),`,
    `,e(s.span,{className:"hljs-attr",children:"offset"}),": [",e(s.span,{className:"hljs-number",children:"0"}),", ",e(s.span,{className:"hljs-number",children:"8"}),`],
  });

  `,e(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,e(s.span,{className:"xml",get children(){return e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"ul"}),`
      {`,e(s.span,{className:"hljs-attr",children:"...props"}),`}
      {`,e(s.span,{className:"hljs-attr",children:"...menuProps"}),`}
      `,e(s.span,{className:"hljs-attr",children:"style"}),"=",e(s.span,{className:"hljs-string",children:"{{"}),`
        `,e(s.span,{className:"hljs-attr",children:"visibility:"})," ",e(s.span,{className:"hljs-attr",children:"meta.show"}),' ? "',e(s.span,{className:"hljs-attr",children:"visible"}),'" ',e(s.span,{className:"hljs-attr",children:":"}),' "',e(s.span,{className:"hljs-attr",children:"hidden"}),`",
      }}
    />`]}})}}),`
  );
};
`]}})}})}}),e(u,{eventKey:"component",title:"DropdownMenu",get children(){return e(s.pre,{get children(){return e(s.code,{className:"hljs language-jsx",get children(){return[e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"Button"}),", ",e(s.span,{className:"hljs-title class_",children:"DropdownMenu"})," } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:'"solid-bootstrap-core"'}),`;

`,e(s.span,{className:"hljs-keyword",children:"const"})," ",e(s.span,{className:"hljs-title function_",children:"MyDropdownToggle"})," = (",e(s.span,{className:"hljs-params",children:"props"}),`) => (
  `,e(s.span,{className:"xml",get children(){return[e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"DropdownMenu"})," ",e(s.span,{className:"hljs-attr",children:"flip"})," ",e(s.span,{className:"hljs-attr",children:"offset"}),"=",e(s.span,{className:"hljs-string",children:"{[0,"})," ",e(s.span,{className:"hljs-attr",children:"8"}),"]}>"]}}),`
    {(menuProps, meta) => (
      `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"ul"}),`
        {`,e(s.span,{className:"hljs-attr",children:"...props"}),`}
        {`,e(s.span,{className:"hljs-attr",children:"...menuProps"}),`}
        `,e(s.span,{className:"hljs-attr",children:"style"}),"=",e(s.span,{className:"hljs-string",children:"{{"}),`
          `,e(s.span,{className:"hljs-attr",children:"visibility:"})," ",e(s.span,{className:"hljs-attr",children:"meta.show"}),' ? "',e(s.span,{className:"hljs-attr",children:"visible"}),'" ',e(s.span,{className:"hljs-attr",children:":"}),' "',e(s.span,{className:"hljs-attr",children:"hidden"}),` ",
        }}
      />`]}}),`
    )}
  `,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"DropdownMenu"}),">"]}})]}}),`
);
`]}})}})}})]}}),null),n(t,e(c,{title:"Implementing show/hide",get children(){return[e(c.Intro,{get children(){return[e(s.p,{get children(){return["Because ",e(s.code,{children:"PopperJS"})," must measure the ",e(s.code,{children:"Menu"}),` element, it's recommended that you style
the Menu with `,e(s.code,{children:"opacity: 0"})," and ",e(s.code,{children:"visibility: hidden"}),` when not shown.
This allows `,e(s.code,{children:"Popper"})," to calculate the correct offset for the ",e(s.code,{children:"Menu"}),` even when it's not
visible. This also makes it a bit simpler to animate if you desire.`]}}),e(s.p,{get children(){return["When transitioning, it's best to use ",e(s.strong,{children:"both"})," ",e(s.code,{children:"visibility"})," and ",e(s.code,{children:"opacity"}),`. Setting
`,e(s.code,{children:"visibility"})," to ",e(s.code,{children:"hidden"}),` will remove the menu from the keyboard tab order, but it
doesn't transition nicely, so add `,e(s.code,{children:"opacity"}),` (or some other visual property) to
indicate fade out and in.`]}})]}}),e(c.Preview,{get children(){return e(h,{get children(){return[e(h.Toggle,{children:m=>e(y,g(m,{class:"btn btn-secondary dropdown-toggle",children:"Open"}))}),e(h.Menu,{flip:!0,offset:[0,4],children:(m,N)=>e(s.ul,g(m,{class:"dropdown-menu show",get style(){return{transition:"visibility 500ms, opacity 500ms",visibility:N.show?"visible":"hidden",opacity:N.show?"1":"0",...m.style}},get children(){return e(s.li,{class:"dropdown-item",children:"Hey there"})}}))})]}})}}),e(c.Code,{get children(){return e(s.pre,{get children(){return e(s.code,{className:"hljs language-jsx",get children(){return[e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"Button"}),", ",e(s.span,{className:"hljs-title class_",children:"Dropdown"})," } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:'"solid-bootstrap-core"'}),`;

`,e(s.span,{className:"xml",get children(){return[e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Dropdown"}),">"]}}),`
  `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Dropdown.Toggle"}),">"]}}),`
    {(props) => (
      `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Button"})," {",e(s.span,{className:"hljs-attr",children:"...props"}),"} ",e(s.span,{className:"hljs-attr",children:"class"}),"=",e(s.span,{className:"hljs-string",children:'"btn btn-secondary dropdown-toggle"'}),">"]}}),`
        Open
      `,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Button"}),">"]}}),`
    )}
  `,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Dropdown.Toggle"}),">"]}}),`
  `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Dropdown.Menu"})," ",e(s.span,{className:"hljs-attr",children:"flip"})," ",e(s.span,{className:"hljs-attr",children:"offset"}),"=",e(s.span,{className:"hljs-string",children:"{[0,"})," ",e(s.span,{className:"hljs-attr",children:"4"}),"]}>"]}}),`
    {(menuProps, meta) => (
      `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"ul"}),`
        {`,e(s.span,{className:"hljs-attr",children:"...menuProps"}),`}
        `,e(s.span,{className:"hljs-attr",children:"class"}),"=",e(s.span,{className:"hljs-string",children:'"dropdown-menu show"'}),`
        `,e(s.span,{className:"hljs-attr",children:"style"}),"=",e(s.span,{className:"hljs-string",children:"{{"}),`
          `,e(s.span,{className:"hljs-attr",children:"transition:"}),' "',e(s.span,{className:"hljs-attr",children:"visibility"})," ",e(s.span,{className:"hljs-attr",children:"500ms"}),", ",e(s.span,{className:"hljs-attr",children:"opacity"})," ",e(s.span,{className:"hljs-attr",children:"500ms"}),`",
          `,e(s.span,{className:"hljs-attr",children:"visibility:"})," ",e(s.span,{className:"hljs-attr",children:"meta.show"}),' ? "',e(s.span,{className:"hljs-attr",children:"visible"}),'" ',e(s.span,{className:"hljs-attr",children:":"}),' "',e(s.span,{className:"hljs-attr",children:"hidden"}),`",
          `,e(s.span,{className:"hljs-attr",children:"opacity:"})," ",e(s.span,{className:"hljs-attr",children:"meta.show"}),' ? "',e(s.span,{className:"hljs-attr",children:"1"}),'" ',e(s.span,{className:"hljs-attr",children:":"}),' "',e(s.span,{className:"hljs-attr",children:"0"}),`",
          `,e(s.span,{className:"hljs-attr",children:"...menuProps.style"}),`
        }}
      >`]}}),`
        `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"li"})," ",e(s.span,{className:"hljs-attr",children:"class"}),"=",e(s.span,{className:"hljs-string",children:'"dropdown-item"'}),">"]}}),"Hey there",e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"li"}),">"]}}),`
      `,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"ul"}),">"]}}),`
    )}
  `,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Dropdown.Menu"}),">"]}}),`
`,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Dropdown"}),">"]}})]}}),`
`]}})}})}})]}}),d),n(d,e(s.p,{get children(){return["If the above isn't feasible and you must use ",e(s.code,{children:"display: none"}),` to hide the menu, you
`,e(s.em,{children:"may"})," need to manually trigger a position re-calculation on show when ",e(s.code,{children:"Popper"}),` is able to
measure the element.`]}}),null),n(d,e(s.pre,{get children(){return e(s.code,{className:"hljs language-jsx",get children(){return[e(s.span,{className:"hljs-keyword",children:"import"})," { useDropdownMenu } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:'"solid-bootstrap-core"'}),`;

`,e(s.span,{className:"hljs-keyword",children:"function"})," ",e(s.span,{className:"hljs-title function_",children:"Menu"}),"(",e(s.span,{className:"hljs-params"}),`) {
  `,e(s.span,{className:"hljs-keyword",children:"const"})," [menuProps, meta] = ",e(s.span,{className:"hljs-title function_",children:"useDropdownMenu"}),`();

  `,e(s.span,{className:"hljs-title function_",children:"createLayoutEffect"}),"(",e(s.span,{className:"hljs-function",children:"() =>"}),` {
    meta.`,e(s.span,{className:"hljs-title function_",children:"update"}),`()
  }, [meta.`,e(s.span,{className:"hljs-property",children:"show"}),`])

  `,e(s.span,{className:"hljs-keyword",children:"return"}),` (
    `,e(s.span,{className:"xml",get children(){return[e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"ul"}),`
      {`,e(s.span,{className:"hljs-attr",children:"...menuProps"}),`}
      `,e(s.span,{className:"hljs-attr",children:"style"}),"=",e(s.span,{className:"hljs-string",children:"{{"}),`
        `,e(s.span,{className:"hljs-attr",children:"display:"})," ",e(s.span,{className:"hljs-attr",children:"meta.show"}),' ? "',e(s.span,{className:"hljs-attr",children:"block"}),'" ',e(s.span,{className:"hljs-attr",children:":"}),' "',e(s.span,{className:"hljs-attr",children:"none"}),`",
        `,e(s.span,{className:"hljs-attr",children:"...menuProps.style"}),`
      }}
    >`]}}),`
      {...}
    `,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"ul"}),">"]}})]}}),`
  );
}
`]}})}}),null),t})()]}}function i(l,r){throw new Error("Expected "+(r?"component":"object")+" `"+l+"` to be defined: you likely forgot to import, pass, or provide it.")}export{Y as default};
