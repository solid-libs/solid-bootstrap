import{t as a,i as n,c as e,w as d,C as s,q as r,v as t}from"./vendor.f31dc633.js";/* empty css               */import{G as h}from"./GithubSource.43633497.js";const u=a(`<div class="mt-5"><h2>API</h2><h3>Container</h3><code>import { Container } from 'solid-bootstrap'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">as </td><td class="font-monospace"><div>elementType</div></td><td><code>&lt;div&gt;</code></td><td><div><p>You can use a custom element for this component</p></div></td></tr><tr><td class="font-monospace">fluid </td><td class="font-monospace"><div><span><code>true</code><span> | </span><code>"sm"</code><span> | </span><code>"md"</code><span> | </span><code>"lg"</code><span> | </span><code>"xl"</code><span> | </span><code>"xxl"</code></span></div></td><td><code>false</code></td><td><div><p>Allow the Container to fill all of its available horizontal space.</p></div></td></tr><tr><td class="font-monospace">bsPrefix </td><td class="font-monospace"><div>string</div></td><td><code>'container'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div><h3>Row</h3><code>import { Row } from 'solid-bootstrap'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">as </td><td class="font-monospace"><div>elementType</div></td><td><code>&lt;div&gt;</code></td><td><div><p>You can use a custom element type for this component.</p></div></td></tr><tr><td class="font-monospace">lg </td><td class="font-monospace"><div>number | 'auto' | { cols: number | 'auto' }</div></td><td></td><td><div><p>The number of columns that will fit next to each other on large devices (\u2265992px). Use <code>auto</code> to give columns their natural widths.</p></div></td></tr><tr><td class="font-monospace">md </td><td class="font-monospace"><div>number | 'auto' | { cols: number | 'auto' }</div></td><td></td><td><div><p>The number of columns that will fit next to each other on medium devices (\u2265768px). Use <code>auto</code> to give columns their natural widths.</p></div></td></tr><tr><td class="font-monospace">sm </td><td class="font-monospace"><div>number | 'auto' | { cols: number | 'auto' }</div></td><td></td><td><div><p>The number of columns that will fit next to each other on small devices (\u2265576px). Use <code>auto</code> to give columns their natural widths.</p></div></td></tr><tr><td class="font-monospace">xl </td><td class="font-monospace"><div>number | 'auto' | { cols: number | 'auto' }</div></td><td></td><td><div><p>The number of columns that will fit next to each other on extra large devices (\u22651200px). Use <code>auto</code> to give columns their natural widths.</p></div></td></tr><tr><td class="font-monospace">xs </td><td class="font-monospace"><div>number | 'auto' | { cols: number | 'auto' }</div></td><td></td><td><div><p>The number of columns that will fit next to each other on extra small devices (&lt;576px). Use <code>auto</code> to give columns their natural widths.</p></div></td></tr><tr><td class="font-monospace">xxl </td><td class="font-monospace"><div>number | 'auto' | { cols: number | 'auto' }</div></td><td></td><td><div><p>The number of columns that will fit next to each other on extra extra large devices (\u22651400px). Use <code>auto</code> to give columns their natural widths.</p></div></td></tr><tr><td class="font-monospace">bsPrefix </td><td class="font-monospace"><div>string</div></td><td><code>'row'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div><h3>Col</h3><code>import { Col } from 'solid-bootstrap'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">as </td><td class="font-monospace"><div>elementType</div></td><td></td><td><div><p>You can use a custom element type for this component.</p></div></td></tr><tr><td class="font-monospace">lg </td><td class="font-monospace"><div>boolean | "auto" | number | { span: boolean | "auto" | number, offset: number, order: "first" | "last" | number }</div></td><td></td><td><div><p>The number of columns to span on large devices (\u2265992px)</p></div></td></tr><tr><td class="font-monospace">md </td><td class="font-monospace"><div>boolean | "auto" | number | { span: boolean | "auto" | number, offset: number, order: "first" | "last" | number }</div></td><td></td><td><div><p>The number of columns to span on medium devices (\u2265768px)</p></div></td></tr><tr><td class="font-monospace">sm </td><td class="font-monospace"><div>boolean | "auto" | number | { span: boolean | "auto" | number, offset: number, order: "first" | "last" | number }</div></td><td></td><td><div><p>The number of columns to span on small devices (\u2265576px)</p></div></td></tr><tr><td class="font-monospace">xl </td><td class="font-monospace"><div>boolean | "auto" | number | { span: boolean | "auto" | number, offset: number, order: "first" | "last" | number }</div></td><td></td><td><div><p>The number of columns to span on extra large devices (\u22651200px)</p></div></td></tr><tr><td class="font-monospace">xs </td><td class="font-monospace"><div>boolean | "auto" | number | { span: boolean | "auto" | number, offset: number, order: "first" | "last" | number }</div></td><td></td><td><div><p>The number of columns to span on extra small devices (&lt;576px)</p></div></td></tr><tr><td class="font-monospace">xxl </td><td class="font-monospace"><div>boolean | "auto" | number | { span: boolean | "auto" | number, offset: number, order: "first" | "last" | number }</div></td><td></td><td><div><p>The number of columns to span on extra extra large devices (\u22651400px)</p></div></td></tr><tr><td class="font-monospace">bsPrefix </td><td class="font-monospace"><div>string</div></td><td><code>'col'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div></div>`),m=()=>u.cloneNode(!0),p=a('<div class="row gy-4"><div><h2>Grid system</h2><p class="lead">Bootstrap\u2019s grid system uses a series of containers, rows, and columns to layout and align content. It\u2019s built with flexbox and is fully responsive. Below is an example and an in-depth look at how the grid comes together.</p></div><div class="show-grid"></div></div>'),g=()=>(()=>{const i=p.cloneNode(!0),l=i.firstChild,c=l.firstChild,o=l.nextSibling;return n(l,e(h,{name:"LayoutGridDocs"}),c),n(o,e(d,{get children(){return[e(d.Header,{children:"Container"}),e(d.Body,{get children(){return e(s,{get children(){return e(r,{get children(){return e(t,{children:"1 of 1"})}})}})}})]}}),null),n(o,e(d,{get children(){return[e(d.Header,{children:"Fluid Container"}),e(d.Body,{get children(){return e(s,{fluid:!0,get children(){return e(r,{get children(){return e(t,{children:"1 of 1"})}})}})}})]}}),null),n(o,e(d,{get children(){return[e(d.Header,{children:"Fluid Container with breakpoint"}),e(d.Body,{get children(){return e(s,{fluid:"md",get children(){return e(r,{get children(){return e(t,{children:"1 of 1"})}})}})}})]}}),null),n(o,e(d,{get children(){return[e(d.Header,{children:"Auto-layout columns"}),e(d.Body,{get children(){return e(s,{get children(){return[e(r,{get children(){return[e(t,{children:"1 of 2"}),e(t,{children:"2 of 2"})]}}),e(r,{get children(){return[e(t,{children:"1 of 3"}),e(t,{children:"2 of 3"}),e(t,{children:"3 of 3"})]}})]}})}})]}}),null),n(o,e(d,{get children(){return[e(d.Header,{children:"Setting one column width"}),e(d.Body,{get children(){return e(s,{get children(){return[e(r,{get children(){return[e(t,{children:"1 of 3"}),e(t,{xs:6,children:"2 of 3 (wider)"}),e(t,{children:"3 of 3"})]}}),e(r,{get children(){return[e(t,{children:"1 of 3"}),e(t,{xs:5,children:"2 of 3 (wider)"}),e(t,{children:"3 of 3"})]}})]}})}})]}}),null),n(o,e(d,{get children(){return[e(d.Header,{children:"Variable width content"}),e(d.Body,{get children(){return e(s,{get children(){return[e(r,{className:"justify-content-md-center",get children(){return[e(t,{xs:!0,lg:"2",children:"1 of 3"}),e(t,{md:"auto",children:"Variable width content"}),e(t,{xs:!0,lg:"2",children:"3 of 3"})]}}),e(r,{get children(){return[e(t,{children:"1 of 3"}),e(t,{md:"auto",children:"Variable width content"}),e(t,{xs:!0,lg:"2",children:"3 of 3"})]}})]}})}})]}}),null),n(o,e(d,{get children(){return[e(d.Header,{children:"Responsive grids"}),e(d.Body,{get children(){return e(s,{get children(){return[e(r,{get children(){return[e(t,{sm:8,children:"sm=8"}),e(t,{sm:4,children:"sm=4"})]}}),e(r,{get children(){return[e(t,{sm:!0,children:"sm=true"}),e(t,{sm:!0,children:"sm=true"}),e(t,{sm:!0,children:"sm=true"})]}})]}})}})]}}),null),n(o,e(d,{get children(){return[e(d.Header,{children:"Mix and Match"}),e(d.Body,{get children(){return e(s,{get children(){return[e(r,{get children(){return[e(t,{xs:12,md:8,children:"xs=12 md=8"}),e(t,{xs:6,md:4,children:"xs=6 md=4"})]}}),e(r,{get children(){return[e(t,{xs:6,md:4,children:"xs=6 md=4"}),e(t,{xs:6,md:4,children:"xs=6 md=4"}),e(t,{xs:6,md:4,children:"xs=6 md=4"})]}}),e(r,{get children(){return[e(t,{xs:6,children:"xs=6"}),e(t,{xs:6,children:"xs=6"})]}})]}})}})]}}),null),n(o,e(d,{get children(){return[e(d.Header,{children:"Col order (1-5)"}),e(d.Body,{get children(){return e(s,{get children(){return e(r,{get children(){return[e(t,{xs:!0,children:"First, but unordered"}),e(t,{xs:{order:5},children:"Second, but last"}),e(t,{xs:{order:1},children:"Third, but second"})]}})}})}})]}}),null),n(o,e(d,{get children(){return[e(d.Header,{children:"Col order (first, last)"}),e(d.Body,{get children(){return e(s,{get children(){return e(r,{get children(){return[e(t,{xs:{order:"last"},children:"First, but last"}),e(t,{xs:!0,children:"Second, but unordered"}),e(t,{xs:{order:"first"},children:"Third, but first"})]}})}})}})]}}),null),n(o,e(d,{get children(){return[e(d.Header,{children:"Offset columns"}),e(d.Body,{get children(){return e(s,{get children(){return[e(r,{get children(){return[e(t,{md:4,children:"md=4"}),e(t,{md:{span:4,offset:4},children:"md={{ span: 4, offset: 4 }}"})]}}),e(r,{get children(){return[e(t,{md:{span:3,offset:3},children:"md={{ span: 3, offset: 3 }}"}),e(t,{md:{span:3,offset:3},children:"md={{ span: 3, offset: 3 }}"})]}}),e(r,{get children(){return e(t,{md:{span:6,offset:3},children:"md={{ span: 6, offset: 3 }}"})}})]}})}})]}}),null),n(o,e(d,{get children(){return[e(d.Header,{children:"Setting column widths in Row"}),e(d.Body,{get children(){return e(s,{get children(){return[e(r,{xs:2,md:4,lg:6,get children(){return[e(t,{children:"1 of 2"}),e(t,{children:"2 of 2"})]}}),e(r,{xs:1,md:2,get children(){return[e(t,{children:"1 of 3"}),e(t,{children:"2 of 3"}),e(t,{children:"3 of 3"})]}}),e(r,{xs:"auto",get children(){return[e(t,{children:"1 of 3"}),e(t,{children:"2 of 3"}),e(t,{children:"3 of 3"})]}})]}})}})]}}),null),n(i,e(m,{}),null),i})();export{g as LayoutGridDocs,g as default};