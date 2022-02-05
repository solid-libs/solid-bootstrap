import{t as r,c as e,m as x,i as n,ad as c}from"./vendor.ad1d373a.js";import{x as y}from"./index.cf217555.js";import{E as s}from"./Example.19da35af.js";import{G as w}from"./GithubSource.801f2314.js";const _=r(`<div class="mt-5"><h2>API</h2><h3>Table</h3><code>import { Table } from 'solid-bootstrap'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">bordered </td><td class="font-monospace"><div>boolean</div></td><td></td><td><div><p>Adds borders on all sides of the table and cells.</p></div></td></tr><tr><td class="font-monospace">borderless </td><td class="font-monospace"><div>boolean</div></td><td></td><td><div><p>Removes all borders on the table and cells, including table header.</p></div></td></tr><tr><td class="font-monospace">hover </td><td class="font-monospace"><div>boolean</div></td><td></td><td><div><p>Enable a hover state on table rows within a <code>&lt;tbody&gt;</code>.</p></div></td></tr><tr><td class="font-monospace">responsive </td><td class="font-monospace"><div>boolean | string</div></td><td></td><td><div><p>Responsive tables allow tables to be scrolled horizontally with ease. Across every breakpoint, use <code>responsive</code> for horizontally scrolling tables. Responsive tables are wrapped automatically in a <code>div</code>. Use <code>responsive="sm"</code>, <code>responsive="md"</code>, <code>responsive="lg"</code>, or<code>responsive="xl"</code> as needed to create responsive tables up to a particular breakpoint. From that breakpoint and up, the table will behave normally and not scroll horizontally.</p></div></td></tr><tr><td class="font-monospace">size </td><td class="font-monospace"><div>string</div></td><td></td><td><div><p>Make tables more compact by cutting cell padding in half by setting size as <code>sm</code>.</p></div></td></tr><tr><td class="font-monospace">striped </td><td class="font-monospace"><div>boolean</div></td><td></td><td><div><p>Adds zebra-striping to any table row within the <code>&lt;tbody&gt;</code>.</p></div></td></tr><tr><td class="font-monospace">variant </td><td class="font-monospace"><div>string</div></td><td></td><td><div><p>Invert the colors of the table \u2014 with light text on dark backgrounds by setting variant as <code>dark</code>.</p></div></td></tr><tr><td class="font-monospace">bsPrefix </td><td class="font-monospace"><div>string</div></td><td><code>'table'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div></div>`),k=()=>_.cloneNode(!0),b=r(`<thead><tr><th>#</th>
<th>First Name</th>
<th>Last Name</th>
<th>Username</th></tr></thead>`),T=r(`<tbody><tr><td>1</td>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td></tr><tr><td>2</td>
<td>Jacob</td>
<td>Thornton</td>
<td>@fat</td></tr><tr><td>3</td>
<td colspan="2">Larry the Bird</td>
<td>@twitter</td></tr></tbody>`),C=r("<thead><tr><th>#</th></tr></thead>"),$=r("<tbody><tr><td>1</td></tr><tr><td>2</td></tr><tr><td>3</td></tr></tbody>"),N=r(`<thead><tr><th>#</th>
<th>Table heading</th>
<th>Table heading</th>
<th>Table heading</th>
<th>Table heading</th>
<th>Table heading</th>
<th>Table heading</th></tr></thead>`),j=r(`<tbody><tr><td>1</td>
<td>Table cell</td>
<td>Table cell</td>
<td>Table cell</td>
<td>Table cell</td>
<td>Table cell</td>
<td>Table cell</td></tr><tr><td>2</td>
<td>Table cell</td>
<td>Table cell</td>
<td>Table cell</td>
<td>Table cell</td>
<td>Table cell</td>
<td>Table cell</td></tr><tr><td>3</td>
<td>Table cell</td>
<td>Table cell</td>
<td>Table cell</td>
<td>Table cell</td>
<td>Table cell</td>
<td>Table cell</td></tr></tbody>`),A=r("<div></div>"),z=r('<div class="row gy-5 pt-3"><div></div></div>');function L(d={}){const{wrapper:p}=Object.assign({},y(),d.components);return p?e(p,x(d,{get children(){return e(v,{})}})):v();function v(){const a=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",span:"span",h2:"h2",th:"th",td:"td"},y(),d.components);return s||u("Example",!1),s.Code||u("Example.Code",!0),s.Intro||u("Example.Intro",!0),s.Preview||u("Example.Preview",!0),[e(w,{name:"TableDocs.mdx"}),`
`,e(a.h1,{children:"Tables"}),`
`,(()=>{const t=z.cloneNode(!0),m=t.firstChild;return n(t,e(s,{get children(){return[e(s.Intro,{get children(){return e(a.p,{get children(){return["Use the ",e(a.code,{children:"striped"}),", ",e(a.code,{children:"bordered"})," and ",e(a.code,{children:"hover"})," props to customise the table."]}})}}),e(s.Preview,{get children(){return e(c,{striped:!0,bordered:!0,hover:!0,get children(){return[b.cloneNode(!0),T.cloneNode(!0)]}})}}),e(s.Code,{get children(){return e(a.pre,{get children(){return e(a.code,{className:"hljs language-js",get children(){return["<",e(a.span,{className:"hljs-title hljs-class",children:"Table"}),` striped bordered hover>\r
  `,e(a.span,{className:"xml",get children(){return[e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"thead"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"#",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"First Name",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Last Name",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Username",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
  `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"thead"}),">"]}})]}}),`\r
  `,e(a.span,{className:"xml",get children(){return[e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tbody"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"1",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Mark",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Otto",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"@mdo",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"2",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Jacob",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Thornton",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"@fat",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"3",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"})," ",e(a.span,{className:"hljs-attr",children:"colSpan"}),"=",e(a.span,{className:"hljs-string",children:"{2}"}),">"]}}),"Larry the Bird",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"@twitter",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
  `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tbody"}),">"]}})]}}),`\r
</`,e(a.span,{className:"hljs-title hljs-class",children:"Table"}),`>
`]}})}})}})]}}),m),n(t,e(s,{title:"Small table",get children(){return[e(s.Intro,{get children(){return e(a.p,{get children(){return["Use ",e(a.code,{children:'size="sm"'})," to make tables compact by cutting cell padding in half."]}})}}),e(s.Preview,{get children(){return e(c,{striped:!0,bordered:!0,hover:!0,size:"sm",get children(){return[b.cloneNode(!0),T.cloneNode(!0)]}})}}),e(s.Code,{get children(){return e(a.pre,{get children(){return e(a.code,{className:"hljs language-js",get children(){return["<",e(a.span,{className:"hljs-title hljs-class",children:"Table"})," striped bordered hover size=",e(a.span,{className:"hljs-string",children:'"sm"'}),`>\r
  `,e(a.span,{className:"xml",get children(){return[e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"thead"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"#",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"First Name",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Last Name",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Username",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
  `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"thead"}),">"]}})]}}),`\r
  `,e(a.span,{className:"xml",get children(){return[e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tbody"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"1",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Mark",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Otto",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"@mdo",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"2",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Jacob",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Thornton",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"@fat",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"3",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"})," ",e(a.span,{className:"hljs-attr",children:"colSpan"}),"=",e(a.span,{className:"hljs-string",children:"{2}"}),">"]}}),"Larry the Bird",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"@twitter",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
  `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tbody"}),">"]}})]}}),`\r
</`,e(a.span,{className:"hljs-title hljs-class",children:"Table"}),`>
`]}})}})}})]}}),m),n(t,e(s,{title:"Dark Table",get children(){return[e(s.Intro,{get children(){return e(a.p,{get children(){return["Use ",e(a.code,{children:'variant="dark"'}),` to invert the colors of the table and get light text\r
on a dark background.`]}})}}),e(s.Preview,{get children(){return e(c,{striped:!0,bordered:!0,hover:!0,variant:"dark",get children(){return[b.cloneNode(!0),T.cloneNode(!0)]}})}}),e(s.Code,{get children(){return e(a.pre,{get children(){return e(a.code,{className:"hljs language-js",get children(){return["<",e(a.span,{className:"hljs-title hljs-class",children:"Table"})," striped bordered hover variant=",e(a.span,{className:"hljs-string",children:'"dark"'}),`>\r
  `,e(a.span,{className:"xml",get children(){return[e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"thead"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"#",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"First Name",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Last Name",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Username",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
  `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"thead"}),">"]}})]}}),`\r
  `,e(a.span,{className:"xml",get children(){return[e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tbody"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"1",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Mark",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Otto",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"@mdo",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"2",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Jacob",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Thornton",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"@fat",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"3",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"})," ",e(a.span,{className:"hljs-attr",children:"colSpan"}),"=",e(a.span,{className:"hljs-string",children:"{2}"}),">"]}}),"Larry the Bird",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"@twitter",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
  `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tbody"}),">"]}})]}}),`\r
</`,e(a.span,{className:"hljs-title hljs-class",children:"Table"}),`>
`]}})}})}})]}}),m),n(m,e(a.h2,{children:"Responsive"}),null),n(m,e(a.p,{children:"Responsive tables allow tables to be scrolled horizontally with ease."}),null),n(t,e(s,{title:"Always Responsive",get children(){return[e(s.Intro,{get children(){return e(a.p,{get children(){return["Across every breakpoint, use ",e(a.code,{children:"responsive"}),` for horizontally scrolling tables.\r
Responsive tables are wrapped automatically in a `,e(a.code,{children:"div"}),`. The following example\r
has 12 columns that are scrollable horizontally.`]}})}}),e(s.Preview,{get children(){return e(c,{responsive:!0,get children(){return[(()=>{const l=C.cloneNode(!0),h=l.firstChild;return h.firstChild,n(h,()=>Array.from({length:12}).map((g,o)=>e(a.th,{children:"Table heading"})),null),l})(),(()=>{const l=$.cloneNode(!0),h=l.firstChild;h.firstChild;const g=h.nextSibling;g.firstChild;const o=g.nextSibling;return o.firstChild,n(h,()=>Array.from({length:12}).map((f,i)=>e(a.td,{get children(){return["Table cell ",i]}})),null),n(g,()=>Array.from({length:12}).map((f,i)=>e(a.td,{get children(){return["Table cell ",i]}})),null),n(o,()=>Array.from({length:12}).map((f,i)=>e(a.td,{get children(){return["Table cell ",i]}})),null),l})()]}})}}),e(s.Code,{get children(){return e(a.pre,{get children(){return e(a.code,{className:"hljs language-js",get children(){return["<",e(a.span,{className:"hljs-title hljs-class",children:"Table"}),` responsive>\r
  `,e(a.span,{className:"xml",get children(){return[e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"thead"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"#",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
      {Array.from({ length: 12 }).map((_, index) => (\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
      ))}\r
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
  `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"thead"}),">"]}})]}}),`\r
  `,e(a.span,{className:"xml",get children(){return[e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tbody"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"1",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      {Array.from({ length: 12 }).map((_, index) => (\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell {index}",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      ))}\r
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"2",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      {Array.from({ length: 12 }).map((_, index) => (\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell {index}",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      ))}\r
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"3",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      {Array.from({ length: 12 }).map((_, index) => (\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell {index}",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      ))}\r
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
  `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tbody"}),">"]}})]}}),`\r
</`,e(a.span,{className:"hljs-title hljs-class",children:"Table"}),`>
`]}})}})}})]}}),null),n(t,e(s,{title:"Breakpoint specific",get children(){return[e(s.Intro,{get children(){return e(a.p,{get children(){return["Use ",e(a.code,{children:'responsive="sm"'}),", ",e(a.code,{children:'responsive="md"'}),", ",e(a.code,{children:'responsive="lg"'}),", or ",e(a.code,{children:'responsive="xl"'}),`\r
as needed to create responsive tables up to a particular breakpoint. From that\r
breakpoint and up, the table will behave normally and not scroll horizontally.`]}})}}),e(s.Preview,{get children(){const l=A.cloneNode(!0);return n(l,e(c,{responsive:"sm",get children(){return[N.cloneNode(!0),j.cloneNode(!0)]}}),null),n(l,e(c,{responsive:"md",get children(){return[N.cloneNode(!0),j.cloneNode(!0)]}}),null),n(l,e(c,{responsive:"lg",get children(){return[N.cloneNode(!0),j.cloneNode(!0)]}}),null),n(l,e(c,{responsive:"xl",get children(){return[N.cloneNode(!0),j.cloneNode(!0)]}}),null),l}}),e(s.Code,{get children(){return e(a.pre,{get children(){return e(a.code,{className:"hljs language-js",get children(){return[`<div>\r
  `,e(a.span,{className:"xml",get children(){return[e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"Table"})," ",e(a.span,{className:"hljs-attr",children:"responsive"}),"=",e(a.span,{className:"hljs-string",children:'"sm"'}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"thead"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"#",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"thead"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tbody"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"1",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"2",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"3",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tbody"}),">"]}}),`\r
  `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"Table"}),">"]}})]}}),`\r
  `,e(a.span,{className:"xml",get children(){return[e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"Table"})," ",e(a.span,{className:"hljs-attr",children:"responsive"}),"=",e(a.span,{className:"hljs-string",children:'"md"'}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"thead"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"#",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"thead"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tbody"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"1",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"2",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"3",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tbody"}),">"]}}),`\r
  `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"Table"}),">"]}})]}}),`\r
  `,e(a.span,{className:"xml",get children(){return[e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"Table"})," ",e(a.span,{className:"hljs-attr",children:"responsive"}),"=",e(a.span,{className:"hljs-string",children:'"lg"'}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"thead"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"#",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"thead"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tbody"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"1",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"2",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"3",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tbody"}),">"]}}),`\r
  `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"Table"}),">"]}})]}}),`\r
  `,e(a.span,{className:"xml",get children(){return[e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"Table"})," ",e(a.span,{className:"hljs-attr",children:"responsive"}),"=",e(a.span,{className:"hljs-string",children:'"xl"'}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"thead"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"#",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"thead"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tbody"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"1",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"2",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"3",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`\r
      `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`\r
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tbody"}),">"]}}),`\r
  `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"Table"}),">"]}})]}}),`\r
</div>
`]}})}})}})]}}),null),n(t,e(k,{}),null),t})()]}}function u(d,p){throw new Error("Expected "+(p?"component":"object")+" `"+d+"` to be defined: you likely forgot to import, pass, or provide it.")}export{L as default};
