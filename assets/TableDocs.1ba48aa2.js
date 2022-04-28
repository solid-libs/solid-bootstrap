import{s as _,m as x,u as $,q as t,t as r,j as w,k,d as C,c as e}from"./index.7b72cfc3.js";import{M as y}from"./index.4dfbe4b9.js";import{E as s}from"./Example.d69c38da.js";import{G as z}from"./GithubSource.1f09f9a8.js";import"./Card.05302259.js";const P=r("<table></table>"),A=r("<div></div>"),E={},M=i=>{const[n,g]=_(x(E,i),["bsPrefix","class","className","striped","bordered","borderless","hover","size","variant","responsive"]),a=$(n.bsPrefix,"table"),c=()=>C(n.class,n.className,a,n.variant&&`${a}-${n.variant}`,n.size&&`${a}-${n.size}`,n.striped&&`${a}-striped`,n.bordered&&`${a}-bordered`,n.borderless&&`${a}-borderless`,n.hover&&`${a}-hover`),d=()=>(()=>{const l=P.cloneNode(!0);return w(l,g,!1,!1),k(()=>l.className=c()),l})();if(n.responsive){let l=`${a}-responsive`;return typeof n.responsive=="string"&&(l=`${l}-${n.responsive}`),(()=>{const h=A.cloneNode(!0);return h.className=l,t(h,d),h})()}return d};var m=M;const I=r(`<div class="mt-5"><h2>API</h2><h3>Table</h3><code>import { Table } from 'solid-bootstrap'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">bordered </td><td class="font-monospace"><div>boolean</div></td><td></td><td><div><p>Adds borders on all sides of the table and cells.</p></div></td></tr><tr><td class="font-monospace">borderless </td><td class="font-monospace"><div>boolean</div></td><td></td><td><div><p>Removes all borders on the table and cells, including table header.</p></div></td></tr><tr><td class="font-monospace">hover </td><td class="font-monospace"><div>boolean</div></td><td></td><td><div><p>Enable a hover state on table rows within a <code>&lt;tbody&gt;</code>.</p></div></td></tr><tr><td class="font-monospace">responsive </td><td class="font-monospace"><div>boolean | string</div></td><td></td><td><div><p>Responsive tables allow tables to be scrolled horizontally with ease. Across every breakpoint, use <code>responsive</code> for horizontally scrolling tables. Responsive tables are wrapped automatically in a <code>div</code>. Use <code>responsive="sm"</code>, <code>responsive="md"</code>, <code>responsive="lg"</code>, or<code>responsive="xl"</code> as needed to create responsive tables up to a particular breakpoint. From that breakpoint and up, the table will behave normally and not scroll horizontally.</p></div></td></tr><tr><td class="font-monospace">size </td><td class="font-monospace"><div>string</div></td><td></td><td><div><p>Make tables more compact by cutting cell padding in half by setting size as <code>sm</code>.</p></div></td></tr><tr><td class="font-monospace">striped </td><td class="font-monospace"><div>boolean</div></td><td></td><td><div><p>Adds zebra-striping to any table row within the <code>&lt;tbody&gt;</code>.</p></div></td></tr><tr><td class="font-monospace">variant </td><td class="font-monospace"><div>string</div></td><td></td><td><div><p>Invert the colors of the table \u2014 with light text on dark backgrounds by setting variant as <code>dark</code>.</p></div></td></tr><tr><td class="font-monospace">bsPrefix </td><td class="font-monospace"><div>string</div></td><td><code>'table'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div></div>`),L=()=>I.cloneNode(!0),T=r(`<thead><tr><th>#</th>
<th>First Name</th>
<th>Last Name</th>
<th>Username</th></tr></thead>`),v=r(`<tbody><tr><td>1</td>
<td>Mark</td>
<td>Otto</td>
<td>@mdo</td></tr><tr><td>2</td>
<td>Jacob</td>
<td>Thornton</td>
<td>@fat</td></tr><tr><td>3</td>
<td colspan="2">Larry the Bird</td>
<td>@twitter</td></tr></tbody>`),R=r("<thead><tr><th>#</th></tr></thead>"),S=r("<tbody><tr><td>1</td></tr><tr><td>2</td></tr><tr><td>3</td></tr></tbody>"),j=r(`<thead><tr><th>#</th>
<th>Table heading</th>
<th>Table heading</th>
<th>Table heading</th>
<th>Table heading</th>
<th>Table heading</th>
<th>Table heading</th></tr></thead>`),u=r(`<tbody><tr><td>1</td>
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
<td>Table cell</td></tr></tbody>`),U=r("<div></div>"),B=r('<div class="row gy-5 pt-3"><div></div></div>');function X(i={}){const{wrapper:n}=Object.assign({},y(),i.components);return n?e(n,x(i,{get children(){return e(g,{})}})):g();function g(){const a=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",span:"span",h2:"h2",th:"th",td:"td"},y(),i.components);return s||o("Example",!1),s.Code||o("Example.Code",!0),s.Intro||o("Example.Intro",!0),s.Preview||o("Example.Preview",!0),[e(z,{name:"TableDocs.mdx"}),`
`,e(a.h1,{children:"Tables"}),`
`,(()=>{const c=B.cloneNode(!0),d=c.firstChild;return t(c,e(s,{get children(){return[e(s.Intro,{get children(){return e(a.p,{get children(){return["Use the ",e(a.code,{children:"striped"}),", ",e(a.code,{children:"bordered"})," and ",e(a.code,{children:"hover"})," props to customise the table."]}})}}),e(s.Preview,{get children(){return e(m,{striped:!0,bordered:!0,hover:!0,get children(){return[T.cloneNode(!0),v.cloneNode(!0)]}})}}),e(s.Code,{get children(){return e(a.pre,{get children(){return e(a.code,{className:"hljs language-js",get children(){return["<",e(a.span,{className:"hljs-title class_",children:"Table"}),` striped bordered hover>
  `,e(a.span,{className:"xml",get children(){return[e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"thead"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"#",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"First Name",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Last Name",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Username",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
  `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"thead"}),">"]}})]}}),`
  `,e(a.span,{className:"xml",get children(){return[e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tbody"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"1",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Mark",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Otto",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"@mdo",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"2",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Jacob",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Thornton",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"@fat",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"3",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"})," ",e(a.span,{className:"hljs-attr",children:"colSpan"}),"=",e(a.span,{className:"hljs-string",children:"{2}"}),">"]}}),"Larry the Bird",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"@twitter",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
  `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tbody"}),">"]}})]}}),`
</`,e(a.span,{className:"hljs-title class_",children:"Table"}),`>
`]}})}})}})]}}),d),t(c,e(s,{title:"Small table",get children(){return[e(s.Intro,{get children(){return e(a.p,{get children(){return["Use ",e(a.code,{children:'size="sm"'})," to make tables compact by cutting cell padding in half."]}})}}),e(s.Preview,{get children(){return e(m,{striped:!0,bordered:!0,hover:!0,size:"sm",get children(){return[T.cloneNode(!0),v.cloneNode(!0)]}})}}),e(s.Code,{get children(){return e(a.pre,{get children(){return e(a.code,{className:"hljs language-js",get children(){return["<",e(a.span,{className:"hljs-title class_",children:"Table"})," striped bordered hover size=",e(a.span,{className:"hljs-string",children:'"sm"'}),`>
  `,e(a.span,{className:"xml",get children(){return[e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"thead"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"#",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"First Name",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Last Name",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Username",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
  `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"thead"}),">"]}})]}}),`
  `,e(a.span,{className:"xml",get children(){return[e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tbody"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"1",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Mark",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Otto",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"@mdo",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"2",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Jacob",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Thornton",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"@fat",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"3",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"})," ",e(a.span,{className:"hljs-attr",children:"colSpan"}),"=",e(a.span,{className:"hljs-string",children:"{2}"}),">"]}}),"Larry the Bird",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"@twitter",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
  `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tbody"}),">"]}})]}}),`
</`,e(a.span,{className:"hljs-title class_",children:"Table"}),`>
`]}})}})}})]}}),d),t(c,e(s,{title:"Dark Table",get children(){return[e(s.Intro,{get children(){return e(a.p,{get children(){return["Use ",e(a.code,{children:'variant="dark"'}),` to invert the colors of the table and get light text
on a dark background.`]}})}}),e(s.Preview,{get children(){return e(m,{striped:!0,bordered:!0,hover:!0,variant:"dark",get children(){return[T.cloneNode(!0),v.cloneNode(!0)]}})}}),e(s.Code,{get children(){return e(a.pre,{get children(){return e(a.code,{className:"hljs language-js",get children(){return["<",e(a.span,{className:"hljs-title class_",children:"Table"})," striped bordered hover variant=",e(a.span,{className:"hljs-string",children:'"dark"'}),`>
  `,e(a.span,{className:"xml",get children(){return[e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"thead"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"#",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"First Name",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Last Name",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Username",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
  `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"thead"}),">"]}})]}}),`
  `,e(a.span,{className:"xml",get children(){return[e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tbody"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"1",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Mark",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Otto",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"@mdo",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"2",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Jacob",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Thornton",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"@fat",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"3",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"})," ",e(a.span,{className:"hljs-attr",children:"colSpan"}),"=",e(a.span,{className:"hljs-string",children:"{2}"}),">"]}}),"Larry the Bird",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"@twitter",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
  `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tbody"}),">"]}})]}}),`
</`,e(a.span,{className:"hljs-title class_",children:"Table"}),`>
`]}})}})}})]}}),d),t(d,e(a.h2,{children:"Responsive"}),null),t(d,e(a.p,{children:"Responsive tables allow tables to be scrolled horizontally with ease."}),null),t(c,e(s,{title:"Always Responsive",get children(){return[e(s.Intro,{get children(){return e(a.p,{get children(){return["Across every breakpoint, use ",e(a.code,{children:"responsive"}),` for horizontally scrolling tables.
Responsive tables are wrapped automatically in a `,e(a.code,{children:"div"}),`. The following example
has 12 columns that are scrollable horizontally.`]}})}}),e(s.Preview,{get children(){return e(m,{responsive:!0,get children(){return[(()=>{const l=R.cloneNode(!0),h=l.firstChild;return h.firstChild,t(h,()=>Array.from({length:12}).map((N,b)=>e(a.th,{children:"Table heading"})),null),l})(),(()=>{const l=S.cloneNode(!0),h=l.firstChild;h.firstChild;const N=h.nextSibling;N.firstChild;const b=N.nextSibling;return b.firstChild,t(h,()=>Array.from({length:12}).map((f,p)=>e(a.td,{get children(){return["Table cell ",p]}})),null),t(N,()=>Array.from({length:12}).map((f,p)=>e(a.td,{get children(){return["Table cell ",p]}})),null),t(b,()=>Array.from({length:12}).map((f,p)=>e(a.td,{get children(){return["Table cell ",p]}})),null),l})()]}})}}),e(s.Code,{get children(){return e(a.pre,{get children(){return e(a.code,{className:"hljs language-js",get children(){return["<",e(a.span,{className:"hljs-title class_",children:"Table"}),` responsive>
  `,e(a.span,{className:"xml",get children(){return[e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"thead"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"#",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
      {Array.from({ length: 12 }).map((_, index) => (
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
      ))}
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
  `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"thead"}),">"]}})]}}),`
  `,e(a.span,{className:"xml",get children(){return[e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tbody"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"1",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      {Array.from({ length: 12 }).map((_, index) => (
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell {index}",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      ))}
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"2",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      {Array.from({ length: 12 }).map((_, index) => (
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell {index}",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      ))}
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"3",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      {Array.from({ length: 12 }).map((_, index) => (
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell {index}",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      ))}
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
  `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tbody"}),">"]}})]}}),`
</`,e(a.span,{className:"hljs-title class_",children:"Table"}),`>
`]}})}})}})]}}),null),t(c,e(s,{title:"Breakpoint specific",get children(){return[e(s.Intro,{get children(){return e(a.p,{get children(){return["Use ",e(a.code,{children:'responsive="sm"'}),", ",e(a.code,{children:'responsive="md"'}),", ",e(a.code,{children:'responsive="lg"'}),", or ",e(a.code,{children:'responsive="xl"'}),`
as needed to create responsive tables up to a particular breakpoint. From that
breakpoint and up, the table will behave normally and not scroll horizontally.`]}})}}),e(s.Preview,{get children(){const l=U.cloneNode(!0);return t(l,e(m,{responsive:"sm",get children(){return[j.cloneNode(!0),u.cloneNode(!0)]}}),null),t(l,e(m,{responsive:"md",get children(){return[j.cloneNode(!0),u.cloneNode(!0)]}}),null),t(l,e(m,{responsive:"lg",get children(){return[j.cloneNode(!0),u.cloneNode(!0)]}}),null),t(l,e(m,{responsive:"xl",get children(){return[j.cloneNode(!0),u.cloneNode(!0)]}}),null),l}}),e(s.Code,{get children(){return e(a.pre,{get children(){return e(a.code,{className:"hljs language-js",get children(){return[`<div>
  `,e(a.span,{className:"xml",get children(){return[e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"Table"})," ",e(a.span,{className:"hljs-attr",children:"responsive"}),"=",e(a.span,{className:"hljs-string",children:'"sm"'}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"thead"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"#",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"thead"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tbody"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"1",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"2",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"3",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tbody"}),">"]}}),`
  `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"Table"}),">"]}})]}}),`
  `,e(a.span,{className:"xml",get children(){return[e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"Table"})," ",e(a.span,{className:"hljs-attr",children:"responsive"}),"=",e(a.span,{className:"hljs-string",children:'"md"'}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"thead"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"#",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"thead"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tbody"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"1",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"2",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"3",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tbody"}),">"]}}),`
  `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"Table"}),">"]}})]}}),`
  `,e(a.span,{className:"xml",get children(){return[e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"Table"})," ",e(a.span,{className:"hljs-attr",children:"responsive"}),"=",e(a.span,{className:"hljs-string",children:'"lg"'}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"thead"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"#",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"thead"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tbody"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"1",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"2",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"3",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tbody"}),">"]}}),`
  `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"Table"}),">"]}})]}}),`
  `,e(a.span,{className:"xml",get children(){return[e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"Table"})," ",e(a.span,{className:"hljs-attr",children:"responsive"}),"=",e(a.span,{className:"hljs-string",children:'"xl"'}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"thead"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"#",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),"Table heading",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"th"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"thead"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tbody"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"1",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"2",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"3",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
        `,e(a.span,{className:"hljs-tag",get children(){return["<",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),"Table cell",e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"td"}),">"]}}),`
      `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tr"}),">"]}}),`
    `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"tbody"}),">"]}}),`
  `,e(a.span,{className:"hljs-tag",get children(){return["</",e(a.span,{className:"hljs-name",children:"Table"}),">"]}})]}}),`
</div>
`]}})}})}})]}}),null),t(c,e(L,{}),null),c})()]}}function o(i,n){throw new Error("Expected "+(n?"component":"object")+" `"+i+"` to be defined: you likely forgot to import, pass, or provide it.")}export{X as default};
