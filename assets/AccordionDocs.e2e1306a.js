import{z as A,s as m,m as c,B as v,u as p,c as e,D as h,d as g,C as w,W as K,x as C,t as N,q as u}from"./index.115fba72.js";import{M as j}from"./index.5570388e.js";import{E as o}from"./Example.91ab215f.js";import{G as P}from"./GithubSource.53de61bb.js";import"./Card.2b05be18.js";function x(r,n){return Array.isArray(r)?r.includes(n):r===n}const B=A({});var b=B;const D={as:"div"},E=r=>{const[n,i]=m(c(D,r),["as","bsPrefix","class","className","children","eventKey"]),t=v(b),s=p(n.bsPrefix,"accordion-collapse");return e(w,c({get in(){return x(t.activeEventKey,n.eventKey)}},i,{get children(){return e(h,{get component(){return n.as},get class(){return g(n.class,n.className,s)},get children(){return n.children}})}}))};var q=E;const H=A({eventKey:""});var y=H;const k={as:"div"},S=r=>{const[n,i]=m(c(k,r),["as","bsPrefix","class","className"]),t=p(n.bsPrefix,"accordion-body"),s=v(y);return e(q,{get eventKey(){return s.eventKey},get children(){return e(h,c({get component(){return n.as}},i,{get class(){return g(n.class,n.className,t)}}))}})};var T=S;function $(r,n){const i=v(b);return t=>{let s=r===i.activeEventKey?null:r;i.alwaysOpen&&(Array.isArray(i.activeEventKey)?i.activeEventKey.includes(r)?s=i.activeEventKey.filter(d=>d!==r):s=[...i.activeEventKey,r]:s=[r]),i.onSelect?.(s,t),K(n,t)}}const L={as:"button"},U=r=>{const[n,i]=m(c(L,r),["as","bsPrefix","class","className","onClick"]),t=p(n.bsPrefix,"accordion-button"),s=v(y),d=$(s.eventKey,n.onClick),f=v(b);return e(h,c({get component(){return n.as},onClick:d},i,{get type(){return n.as==="button"?"button":void 0},get["aria-expanded"](){return s.eventKey===f.activeEventKey},get class(){return g(n.class,n.className,t,!x(f.activeEventKey,s.eventKey)&&"collapsed")}}))};var I=U;const _={as:"h2"},O=r=>{const[n,i]=m(c(_,r),["as","bsPrefix","class","className","children","onClick"]),t=p(n.bsPrefix,"accordion-header");return e(h,c({get component(){return n.as}},i,{get class(){return g(n.class,n.className,t)},get children(){return e(I,{get onClick(){return n.onClick},get children(){return n.children}})}}))};var z=O;const M={as:"div"},F=r=>{const[n,i]=m(c(M,r),["as","bsPrefix","class","className","eventKey"]),t=p(n.bsPrefix,"accordion-item"),s={get eventKey(){return n.eventKey}};return e(y.Provider,{value:s,get children(){return e(h,c({get component(){return n.as}},i,{get class(){return g(n.class,n.className,t)}}))}})};var G=F;const R={as:"div"},V=r=>{const[n,i]=m(c(R,r),["as","activeKey","alwaysOpen","bsPrefix","class","className","defaultActiveKey","onSelect","flush"]),[t,s]=C(()=>n.activeKey,()=>n.defaultActiveKey,n.onSelect),d=p(n.bsPrefix,"accordion"),f={get activeEventKey(){return t()},get alwaysOpen(){return n.alwaysOpen},get onSelect(){return s}};return e(b.Provider,{value:f,get children(){return e(h,c({get component(){return n.as}},i,{get class(){return g(n.class,n.className,d,n.flush&&`${d}-flush`)}}))}})};var a=Object.assign(V,{Button:I,Collapse:q,Item:G,Header:z,Body:T});const X=N(`<div class="mt-5"><h2>API</h2><h3>Accordion</h3><code>import { Accordion } from 'solid-bootstrap'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">activeKey </td><td class="font-monospace"><div>string | string[]</div></td><td></td><td><div><p>The current active key that corresponds to the currently expanded card</p></div></td></tr><tr><td class="font-monospace">alwaysOpen </td><td class="font-monospace"><div>boolean</div></td><td></td><td><div><p>Allow accordion items to stay open when another item is opened</p></div></td></tr><tr><td class="font-monospace">as </td><td class="font-monospace"><div>elementType</div></td><td></td><td><div><p>Set a custom element for this component</p></div></td></tr><tr><td class="font-monospace">defaultActiveKey </td><td class="font-monospace"><div>string | string[]</div></td><td></td><td><div><p>The default active key that is expanded on start</p></div></td></tr><tr><td class="font-monospace">flush </td><td class="font-monospace"><div>boolean</div></td><td></td><td><div><p>Renders accordion edge-to-edge with its parent container</p></div></td></tr><tr><td class="font-monospace">bsPrefix </td><td class="font-monospace"><div>string</div></td><td><code>'accordion'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div><h3>Accordion.Item</h3><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">as </td><td class="font-monospace"><div>elementType</div></td><td><code>&lt;div&gt;</code></td><td><div><p>Set a custom element for this component</p></div></td></tr><tr><td class="font-monospace">eventKey <sup class="text-danger">required</sup></td><td class="font-monospace"><div>string</div></td><td></td><td><div><p>A unique key used to control this item's collapse/expand.</p></div></td></tr><tr><td class="font-monospace">bsPrefix </td><td class="font-monospace"><div>string</div></td><td><code>'accordion-item'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div><h3>Accordion.Header</h3><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">as </td><td class="font-monospace"><div>elementType</div></td><td><code>&lt;h2&gt;</code></td><td><div><p>Set a custom element for this component</p></div></td></tr><tr><td class="font-monospace">onClick </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>Click handler for the <code>AccordionButton</code> element</p></div></td></tr><tr><td class="font-monospace">bsPrefix </td><td class="font-monospace"><div>string</div></td><td><code>'accordion-header'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div><h3>Accordion.Body</h3><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">as </td><td class="font-monospace"><div>elementType</div></td><td><code>&lt;div&gt;</code></td><td><div><p>Set a custom element for this component</p></div></td></tr><tr><td class="font-monospace">bsPrefix </td><td class="font-monospace"><div>string</div></td><td><code>'accordion-body'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div><h3>Accordion.Button</h3><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">as </td><td class="font-monospace"><div>elementType</div></td><td><code>&lt;button&gt;</code></td><td><div><p>Set a custom element for this component</p></div></td></tr><tr><td class="font-monospace">onClick </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>A callback function for when this component is clicked</p></div></td></tr><tr><td class="font-monospace">bsPrefix </td><td class="font-monospace"><div>string</div></td><td><code>'accordion-button'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div><h3>Accordion.Collapse</h3><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">as </td><td class="font-monospace"><div>elementType</div></td><td><code>&lt;div&gt;</code></td><td><div><p>Set a custom element for this component</p></div></td></tr><tr><td class="font-monospace">children <sup class="text-danger">required</sup></td><td class="font-monospace"><div>element</div></td><td></td><td><div><p>Children prop should only contain a single child, and is enforced as such</p></div></td></tr><tr><td class="font-monospace">eventKey <sup class="text-danger">required</sup></td><td class="font-monospace"><div>string</div></td><td></td><td><div><p>A key that corresponds to the toggler that triggers this collapse's expand or collapse.</p></div></td></tr></tbody></table></div></div>`),W=()=>X.cloneNode(!0),Y=N('<p class="lead"></p>'),J=N('<div class="row gy-5 pt-3"></div>');function ae(r={}){const{wrapper:n}=Object.assign({},j(),r.components);return n?e(n,c(r,{get children(){return e(i,{})}})):i();function i(){const t=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",span:"span"},j(),r.components);return a||l("Accordion",!1),a.Body||l("Accordion.Body",!0),a.Header||l("Accordion.Header",!0),a.Item||l("Accordion.Item",!0),o||l("Example",!1),o.Code||l("Example.Code",!0),o.Intro||l("Example.Intro",!0),o.Preview||l("Example.Preview",!0),[e(P,{name:"AccordionDocs.mdx"}),`
`,e(t.h1,{children:"Accordion"}),`
`,(()=>{const s=Y.cloneNode(!0);return u(s,e(t.p,{children:`Build vertically collapsing accordions in combination with the Collapse\r
component.`})),s})(),`
`,e(t.p,{children:"Click the accordions below to expand/collapse the accordion content."}),`
`,(()=>{const s=J.cloneNode(!0);return u(s,e(o,{title:"Basic Example",get children(){return[e(o.Preview,{get children(){return e(a,{defaultActiveKey:"0",get children(){return[e(a.Item,{eventKey:"0",get children(){return[e(a.Header,{children:"Accordion Item #1"}),e(a.Body,{get children(){return e(t.p,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\r
ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\r
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\r
culpa qui officia deserunt mollit anim id est laborum.`})}})]}}),e(a.Item,{eventKey:"1",get children(){return[e(a.Header,{children:"Accordion Item #2"}),e(a.Body,{get children(){return e(t.p,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\r
ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\r
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\r
culpa qui officia deserunt mollit anim id est laborum.`})}})]}})]}})}}),e(o.Code,{get children(){return e(t.pre,{get children(){return e(t.code,{className:"hljs language-js",get children(){return["<",e(t.span,{className:"hljs-title class_",children:"Accordion"})," defaultActiveKey=",e(t.span,{className:"hljs-string",children:'"0"'}),`>\r
  `,e(t.span,{className:"xml",get children(){return[e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Accordion.Item"})," ",e(t.span,{className:"hljs-attr",children:"eventKey"}),"=",e(t.span,{className:"hljs-string",children:'"0"'}),">"]}}),`\r
    `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Accordion.Header"}),">"]}}),"Accordion Item #1",e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Accordion.Header"}),">"]}}),`\r
    `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Accordion.Body"}),">"]}}),`\r
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\r
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\r
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\r
      culpa qui officia deserunt mollit anim id est laborum.\r
    `,e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Accordion.Body"}),">"]}}),`\r
  `,e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Accordion.Item"}),">"]}})]}}),`\r
  `,e(t.span,{className:"xml",get children(){return[e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Accordion.Item"})," ",e(t.span,{className:"hljs-attr",children:"eventKey"}),"=",e(t.span,{className:"hljs-string",children:'"1"'}),">"]}}),`\r
    `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Accordion.Header"}),">"]}}),"Accordion Item #2",e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Accordion.Header"}),">"]}}),`\r
    `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Accordion.Body"}),">"]}}),`\r
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\r
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\r
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\r
      culpa qui officia deserunt mollit anim id est laborum.\r
    `,e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Accordion.Body"}),">"]}}),`\r
  `,e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Accordion.Item"}),">"]}})]}}),`\r
</`,e(t.span,{className:"hljs-title class_",children:"Accordion"}),`>
`]}})}})}})]}}),null),u(s,e(o,{title:"Fully Collapsed State",get children(){return[e(o.Intro,{get children(){return e(t.p,{get children(){return["If you want your ",e(t.code,{children:"Accordion"})," to start in a fully-collapsed state, then simply dont pass in a ",e(t.code,{children:"defaultActiveKey"})," prop to ",e(t.code,{children:"Accordion"}),"."]}})}}),e(o.Preview,{get children(){return e(a,{get children(){return[e(a.Item,{eventKey:"0",get children(){return[e(a.Header,{children:"Accordion Item #1"}),e(a.Body,{get children(){return e(t.p,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\r
ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\r
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\r
culpa qui officia deserunt mollit anim id est laborum.`})}})]}}),e(a.Item,{eventKey:"1",get children(){return[e(a.Header,{children:"Accordion Item #2"}),e(a.Body,{get children(){return e(t.p,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\r
ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\r
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\r
culpa qui officia deserunt mollit anim id est laborum.`})}})]}})]}})}}),e(o.Code,{get children(){return e(t.pre,{get children(){return e(t.code,{className:"hljs language-js",get children(){return["<",e(t.span,{className:"hljs-title class_",children:"Accordion"}),`>\r
  `,e(t.span,{className:"xml",get children(){return[e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Accordion.Item"})," ",e(t.span,{className:"hljs-attr",children:"eventKey"}),"=",e(t.span,{className:"hljs-string",children:'"0"'}),">"]}}),`\r
    `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Accordion.Header"}),">"]}}),"Accordion Item #1",e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Accordion.Header"}),">"]}}),`\r
    `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Accordion.Body"}),">"]}}),`\r
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\r
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\r
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\r
      culpa qui officia deserunt mollit anim id est laborum.\r
    `,e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Accordion.Body"}),">"]}}),`\r
  `,e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Accordion.Item"}),">"]}})]}}),`\r
  `,e(t.span,{className:"xml",get children(){return[e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Accordion.Item"})," ",e(t.span,{className:"hljs-attr",children:"eventKey"}),"=",e(t.span,{className:"hljs-string",children:'"1"'}),">"]}}),`\r
    `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Accordion.Header"}),">"]}}),"Accordion Item #2",e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Accordion.Header"}),">"]}}),`\r
    `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Accordion.Body"}),">"]}}),`\r
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\r
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\r
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\r
      culpa qui officia deserunt mollit anim id est laborum.\r
    `,e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Accordion.Body"}),">"]}}),`\r
  `,e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Accordion.Item"}),">"]}})]}}),`\r
</`,e(t.span,{className:"hljs-title class_",children:"Accordion"}),`>
`]}})}})}})]}}),null),u(s,e(o,{title:"Flush",get children(){return[e(o.Intro,{get children(){return e(t.p,{get children(){return["Add ",e(t.code,{children:"flush"})," to remove the default background-color, some borders, and some rounded corners to render accordions edge-to-edge with their parent container."]}})}}),e(o.Preview,{get children(){return e(a,{defaultActiveKey:"0",flush:!0,get children(){return[e(a.Item,{eventKey:"0",get children(){return[e(a.Header,{children:"Accordion Item #1"}),e(a.Body,{get children(){return e(t.p,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\r
ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\r
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\r
culpa qui officia deserunt mollit anim id est laborum.`})}})]}}),e(a.Item,{eventKey:"1",get children(){return[e(a.Header,{children:"Accordion Item #2"}),e(a.Body,{get children(){return e(t.p,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\r
ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\r
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\r
culpa qui officia deserunt mollit anim id est laborum.`})}})]}})]}})}}),e(o.Code,{get children(){return e(t.pre,{get children(){return e(t.code,{className:"hljs language-js",get children(){return["<",e(t.span,{className:"hljs-title class_",children:"Accordion"})," defaultActiveKey=",e(t.span,{className:"hljs-string",children:'"0"'}),` flush>\r
  `,e(t.span,{className:"xml",get children(){return[e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Accordion.Item"})," ",e(t.span,{className:"hljs-attr",children:"eventKey"}),"=",e(t.span,{className:"hljs-string",children:'"0"'}),">"]}}),`\r
    `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Accordion.Header"}),">"]}}),"Accordion Item #1",e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Accordion.Header"}),">"]}}),`\r
    `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Accordion.Body"}),">"]}}),`\r
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\r
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\r
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\r
      culpa qui officia deserunt mollit anim id est laborum.\r
    `,e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Accordion.Body"}),">"]}}),`\r
  `,e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Accordion.Item"}),">"]}})]}}),`\r
  `,e(t.span,{className:"xml",get children(){return[e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Accordion.Item"})," ",e(t.span,{className:"hljs-attr",children:"eventKey"}),"=",e(t.span,{className:"hljs-string",children:'"1"'}),">"]}}),`\r
    `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Accordion.Header"}),">"]}}),"Accordion Item #2",e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Accordion.Header"}),">"]}}),`\r
    `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Accordion.Body"}),">"]}}),`\r
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\r
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\r
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\r
      culpa qui officia deserunt mollit anim id est laborum.\r
    `,e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Accordion.Body"}),">"]}}),`\r
  `,e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Accordion.Item"}),">"]}})]}}),`\r
</`,e(t.span,{className:"hljs-title class_",children:"Accordion"}),`>
`]}})}})}})]}}),null),u(s,e(o,{title:"Always open",get children(){return[e(o.Intro,{get children(){return e(t.p,{get children(){return["You can make accordion items stay open when another item is opened by using the ",e(t.code,{children:"alwaysOpen"}),` prop. If you're looking to\r
control the component, you must use an array of strings for `,e(t.code,{children:"activeKey"})," or ",e(t.code,{children:"defaultActiveKey"}),"."]}})}}),e(o.Preview,{get children(){return e(a,{defaultActiveKey:["0"],alwaysOpen:!0,get children(){return[e(a.Item,{eventKey:"0",get children(){return[e(a.Header,{children:"Accordion Item #1"}),e(a.Body,{get children(){return e(t.p,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\r
ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\r
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\r
culpa qui officia deserunt mollit anim id est laborum.`})}})]}}),e(a.Item,{eventKey:"1",get children(){return[e(a.Header,{children:"Accordion Item #2"}),e(a.Body,{get children(){return e(t.p,{children:`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\r
ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\r
reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\r
culpa qui officia deserunt mollit anim id est laborum.`})}})]}})]}})}}),e(o.Code,{get children(){return e(t.pre,{get children(){return e(t.code,{className:"hljs language-js",get children(){return["<",e(t.span,{className:"hljs-title class_",children:"Accordion"})," defaultActiveKey={[",e(t.span,{className:"hljs-string",children:'"0"'}),`]} alwaysOpen>\r
  `,e(t.span,{className:"xml",get children(){return[e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Accordion.Item"})," ",e(t.span,{className:"hljs-attr",children:"eventKey"}),"=",e(t.span,{className:"hljs-string",children:'"0"'}),">"]}}),`\r
    `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Accordion.Header"}),">"]}}),"Accordion Item #1",e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Accordion.Header"}),">"]}}),`\r
    `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Accordion.Body"}),">"]}}),`\r
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\r
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\r
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\r
      culpa qui officia deserunt mollit anim id est laborum.\r
    `,e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Accordion.Body"}),">"]}}),`\r
  `,e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Accordion.Item"}),">"]}})]}}),`\r
  `,e(t.span,{className:"xml",get children(){return[e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Accordion.Item"})," ",e(t.span,{className:"hljs-attr",children:"eventKey"}),"=",e(t.span,{className:"hljs-string",children:'"1"'}),">"]}}),`\r
    `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Accordion.Header"}),">"]}}),"Accordion Item #2",e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Accordion.Header"}),">"]}}),`\r
    `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Accordion.Body"}),">"]}}),`\r
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\r
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\r
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\r
      culpa qui officia deserunt mollit anim id est laborum.\r
    `,e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Accordion.Body"}),">"]}}),`\r
  `,e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Accordion.Item"}),">"]}})]}}),`\r
</`,e(t.span,{className:"hljs-title class_",children:"Accordion"}),`>
`]}})}})}})]}}),null),u(s,e(W,{}),null),s})()]}}function l(r,n){throw new Error("Expected "+(n?"component":"object")+" `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{ae as default};