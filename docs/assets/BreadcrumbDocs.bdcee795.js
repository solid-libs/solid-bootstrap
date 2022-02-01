import{t as c,c as t,m as p,i,Q as s}from"./vendor.6a5ca7bc.js";import{x as m}from"./index.bf078b0c.js";import{E as a}from"./Example.767bbcc8.js";import{G as h}from"./GithubSource.a75a69d3.js";const u=c(`<div class="mt-5"><h2>API</h2><h3>Breadcrumb</h3><code>import { Breadcrumb } from 'solid-bootstrap'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">as </td><td class="font-monospace"><div>elementType</div></td><td><code>&lt;nav&gt;</code></td><td><div><p>You can use a custom element type for this component.</p></div></td></tr><tr><td class="font-monospace">label </td><td class="font-monospace"><div>string</div></td><td><code>'breadcrumb'</code></td><td><div><p>ARIA label for the nav element <a href="https://www.w3.org/TR/wai-aria-practices/#breadcrumb">https://www.w3.org/TR/wai-aria-practices/#breadcrumb</a></p></div></td></tr><tr><td class="font-monospace">listProps </td><td class="font-monospace"><div>object</div></td><td><code></code></td><td><div><p>Additional props passed as-is to the underlying <code>&lt;ol&gt;</code> element</p></div></td></tr><tr><td class="font-monospace">bsPrefix </td><td class="font-monospace"><div>string</div></td><td><code>'breadcrumb'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div><h3>Breadcrumb.Item</h3><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">active </td><td class="font-monospace"><div>boolean</div></td><td><code>false</code></td><td><div><p>Adds a visual "active" state to a Breadcrumb Item and disables the link.</p></div></td></tr><tr><td class="font-monospace">as </td><td class="font-monospace"><div>elementType</div></td><td><code>&lt;li&gt;</code></td><td><div><p>You can use a custom element type for this component.</p></div></td></tr><tr><td class="font-monospace">href </td><td class="font-monospace"><div>string</div></td><td></td><td><div><p><code>href</code> attribute for the inner <code>a</code> element</p></div></td></tr><tr><td class="font-monospace">linkAs </td><td class="font-monospace"><div>elementType</div></td><td><code>&lt;Anchor&gt;</code></td><td><div><p>You can use a custom element type for this component's inner link.</p></div></td></tr><tr><td class="font-monospace">linkProps </td><td class="font-monospace"><div>object</div></td><td><code></code></td><td><div><p>Additional props passed as-is to the underlying link for non-active items.</p></div></td></tr><tr><td class="font-monospace">target </td><td class="font-monospace"><div>string</div></td><td></td><td><div><p><code>target</code> attribute for the inner <code>a</code> element</p></div></td></tr><tr><td class="font-monospace">title </td><td class="font-monospace"><div>node</div></td><td></td><td><div><p><code>title</code> attribute for the inner <code>a</code> element</p></div></td></tr><tr><td class="font-monospace">bsPrefix </td><td class="font-monospace"><div>string</div></td><td><code>'breadcrumb-item'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div></div>`),b=()=>u.cloneNode(!0),v=c('<p class="lead"></p>'),f=c('<div class="row gy-5 pt-3"></div>');function y(n={}){const{wrapper:o}=Object.assign({},m(),n.components);return o?t(o,p(n,{get children(){return t(l,{})}})):l();function l(){const e=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",span:"span"},m(),n.components);return s||r("Breadcrumb",!1),s.Item||r("Breadcrumb.Item",!0),a||r("Example",!1),a.Code||r("Example.Code",!0),a.Intro||r("Example.Intro",!0),a.Preview||r("Example.Preview",!0),[t(h,{name:"BreadcrumbDocs.mdx"}),`
`,t(e.h1,{children:"Breadcrumbs"}),`
`,(()=>{const d=v.cloneNode(!0);return i(d,t(e.p,{children:`Indicate the current page\u2019s location within a navigational hierarchy\r
that automatically adds separators via CSS. Add active prop to active\r
Breadcrumb.Item . Do not set both active and href attributes. active\r
overrides href and span element is rendered instead of a .`})),d})(),`
`,(()=>{const d=f.cloneNode(!0);return i(d,t(a,{title:"Example",get children(){return[t(a.Intro,{}),t(a.Preview,{get children(){return t(s,{get children(){return[t(s.Item,{href:"#",children:"Home"}),t(s.Item,{href:"https://getbootstrap.com/docs/4.0/components/breadcrumb/",children:"Library"}),t(s.Item,{active:!0,children:"Data"})]}})}}),t(a.Code,{get children(){return t(e.pre,{get children(){return t(e.code,{className:"hljs language-js",get children(){return["<",t(e.span,{className:"hljs-title hljs-class",children:"Breadcrumb"}),`>\r
  `,t(e.span,{className:"xml",get children(){return[t(e.span,{className:"hljs-tag",get children(){return["<",t(e.span,{className:"hljs-name",children:"Breadcrumb.Item"})," ",t(e.span,{className:"hljs-attr",children:"href"}),"=",t(e.span,{className:"hljs-string",children:'"#"'}),">"]}}),"Home",t(e.span,{className:"hljs-tag",get children(){return["</",t(e.span,{className:"hljs-name",children:"Breadcrumb.Item"}),">"]}})]}}),`\r
  `,t(e.span,{className:"xml",get children(){return[t(e.span,{className:"hljs-tag",get children(){return["<",t(e.span,{className:"hljs-name",children:"Breadcrumb.Item"})," ",t(e.span,{className:"hljs-attr",children:"href"}),"=",t(e.span,{className:"hljs-string",children:'"https://getbootstrap.com/docs/4.0/components/breadcrumb/"'}),">"]}}),"Library",t(e.span,{className:"hljs-tag",get children(){return["</",t(e.span,{className:"hljs-name",children:"Breadcrumb.Item"}),">"]}})]}}),`\r
  `,t(e.span,{className:"xml",get children(){return[t(e.span,{className:"hljs-tag",get children(){return["<",t(e.span,{className:"hljs-name",children:"Breadcrumb.Item"})," ",t(e.span,{className:"hljs-attr",children:"active"}),">"]}}),"Data",t(e.span,{className:"hljs-tag",get children(){return["</",t(e.span,{className:"hljs-name",children:"Breadcrumb.Item"}),">"]}})]}}),`\r
</`,t(e.span,{className:"hljs-title hljs-class",children:"Breadcrumb"}),`>
`]}})}})}})]}}),null),i(d,t(b,{}),null),d})()]}}function r(n,o){throw new Error("Expected "+(o?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}export{y as default};
