import{s as y,m as h,u as w,z as T,j as b,d as x,L as O,o as r,t as l,c as e}from"./index.46b6df7f.js";import{M as j}from"./index.e0aff9b5.js";import{O as k}from"./Overlay.aea51097.js";import{O as g}from"./OverlayTrigger.6361d83d.js";import{E as s}from"./Example.6cae19f6.js";import{G as C}from"./GithubSource.4ed1a23d.js";import{B as N}from"./Layout.4a46f345.js";import{S as P}from"./Stack.dd934703.js";import"./mergeOptionsWithPopperConfig.c1f38e41.js";import"./Card.cb90095f.js";const A=l('<div role="tooltip"><div class="tooltip-arrow"></div><div></div></div>'),_={arrowProps:{},placement:"right"},$=o=>{const[a,i]=y(h(_,o),["bsPrefix","placement","class","style","children","arrowProps","popper","show"]),t=w(a.bsPrefix,"tooltip"),n=T(k),d=()=>(n?.metadata?.placement||a.placement)?.split("-")?.[0];return(()=>{const m=A.cloneNode(!0),f=m.firstChild,u=f.nextSibling;return b(m,h({get["x-placement"](){return d()},get class(){return x(a.class,t,"bs-tooltip-auto")}},i,()=>n?.wrapperProps,{get style(){return Object.assign({},a.style,n?.wrapperProps.style)}}),!1,!0),b(f,h(()=>a.arrowProps,()=>n?.arrowProps),!1,!1),O(u,`${t}-inner`),r(u,()=>a.children),m})()},v=$,E=l('<a href="#"></a>'),c=o=>e(g,{get overlay(){return e(v,{get id(){return o.id},get children(){return o.title}})},get children(){const a=E.cloneNode(!0);return r(a,()=>o.children),a}}),S=l(`<div class="mt-5"><h2>API</h2><h3>Tooltip</h3><code>import { Tooltip } from 'solid-bootstrap'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">arrowProps </td><td class="font-monospace"><div>{ ref: Ref, style: Object }</div></td><td></td><td><div><p>An Overlay injected set of props for positioning the tooltip arrow.</p><blockquote><p>This is generally provided by the <code>Overlay</code> component positioning the tooltip</p></blockquote></div></td></tr><tr><td class="font-monospace">id <sup class="text-danger">required</sup></td><td class="font-monospace"><div>string</div></td><td></td><td><div><p>An html id attribute, necessary for accessibility</p></div></td></tr><tr><td class="font-monospace">placement </td><td class="font-monospace"><div><span><code>'auto-start'</code><span> | </span><code>'auto'</code><span> | </span><code>'auto-end'</code><span> | </span><code>'top-start'</code><span> | </span><code>'top'</code><span> | </span><code>'top-end'</code><span> | </span><code>'right-start'</code><span> | </span><code>'right'</code><span> | </span><code>'right-end'</code><span> | </span><code>'bottom-end'</code><span> | </span><code>'bottom'</code><span> | </span><code>'bottom-start'</code><span> | </span><code>'left-end'</code><span> | </span><code>'left'</code><span> | </span><code>'left-start'</code></span></div></td><td><code>'right'</code></td><td><div><p>Sets the direction the Tooltip is positioned towards.</p><blockquote><p>This is generally provided by the <code>Overlay</code> component positioning the tooltip</p></blockquote></div></td></tr><tr><td class="font-monospace">popper </td><td class="font-monospace"><div>object</div></td><td></td><td><div></div></td></tr><tr><td class="font-monospace">show </td><td class="font-monospace"><div>any</div></td><td></td><td><div></div></td></tr><tr><td class="font-monospace">bsPrefix </td><td class="font-monospace"><div>string</div></td><td><code>'tooltip'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table></div><h3>Overlay</h3><code>import { Overlay } from 'solid-bootstrap'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">container </td><td class="font-monospace"><div>componentOrElement</div></td><td></td><td><div><p>A component instance, DOM node. The <code>container</code> element will have the Overlay appended to it via a Solid portal.</p></div></td></tr><tr><td class="font-monospace">onEnter </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>Callback fired before the Overlay transitions in</p></div></td></tr><tr><td class="font-monospace">onEntered </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>Callback fired after the Overlay finishes transitioning in</p></div></td></tr><tr><td class="font-monospace">onEntering </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>Callback fired as the Overlay begins to transition in</p></div></td></tr><tr><td class="font-monospace">onExit </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>Callback fired right before the Overlay transitions out</p></div></td></tr><tr><td class="font-monospace">onExited </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>Callback fired after the Overlay finishes transitioning out</p></div></td></tr><tr><td class="font-monospace">onExiting </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>Callback fired as the Overlay begins to transition out</p></div></td></tr><tr><td class="font-monospace">onHide </td><td class="font-monospace"><div>function</div></td><td></td><td><div><p>A callback invoked by the overlay when it wishes to be hidden. Required if<code>rootClose</code> is specified.</p></div></td></tr><tr><td class="font-monospace">placement </td><td class="font-monospace"><div><span><code>'auto-start'</code><span> | </span><code>'auto'</code><span> | </span><code>'auto-end'</code><span> | </span><code>'top-start'</code><span> | </span><code>'top'</code><span> | </span><code>'top-end'</code><span> | </span><code>'right-start'</code><span> | </span><code>'right'</code><span> | </span><code>'right-end'</code><span> | </span><code>'bottom-end'</code><span> | </span><code>'bottom'</code><span> | </span><code>'bottom-start'</code><span> | </span><code>'left-end'</code><span> | </span><code>'left'</code><span> | </span><code>'left-start'</code></span></div></td><td><code>'top'</code></td><td><div><p>The placement of the Overlay in relation to it's <code>target</code>.</p></div></td></tr><tr><td class="font-monospace">popperConfig </td><td class="font-monospace"><div>object</div></td><td></td><td><div><p>A set of popper options and props passed directly to Popper.</p></div></td></tr><tr><td class="font-monospace">rootClose </td><td class="font-monospace"><div>boolean</div></td><td><code>false</code></td><td><div><p>Specify whether the overlay should trigger onHide when the user clicks outside the overlay</p></div></td></tr><tr><td class="font-monospace">rootCloseEvent </td><td class="font-monospace"><div><span><code>'click'</code><span> | </span><code>'mousedown'</code></span></div></td><td></td><td><div><p>Specify event for triggering a "root close" toggle.</p></div></td></tr><tr><td class="font-monospace">show </td><td class="font-monospace"><div>boolean</div></td><td><code>false</code></td><td><div><p>Set the visibility of the Overlay</p></div></td></tr><tr><td class="font-monospace">target </td><td class="font-monospace"><div>componentOrElement</div></td><td></td><td><div><p>A component instance, DOM node. The overlay will be positioned in relation to the <code>target</code></p></div></td></tr><tr><td class="font-monospace">transition </td><td class="font-monospace"><div>boolean | elementType</div></td><td><code>Fade</code></td><td><div><p>Animate the entering and exiting of the Overlay. <code>true</code> will use the <code>&lt;Fade&gt;</code> transition, or a custom solid-react-transition <code>&lt;Transition&gt;</code> component can be provided.</p></div></td></tr></tbody></table></div><h3>OverlayTrigger</h3><code>import { OverlayTrigger } from 'solid-bootstrap'</code><div class="overflow-auto mt-4 mb-5 border border-light"><table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td class="font-monospace">children <sup class="text-danger">required</sup></td><td class="font-monospace"><div>element</div></td><td></td><td><div></div></td></tr><tr><td class="font-monospace">defaultShow </td><td class="font-monospace"><div>boolean</div></td><td><code>false</code></td><td><div><p>The initial visibility state of the Overlay.</p></div></td></tr><tr><td class="font-monospace">delay </td><td class="font-monospace"><div>number | shape</div></td><td></td><td><div><p>A millisecond delay amount to show and hide the Overlay once triggered</p></div></td></tr><tr><td class="font-monospace">flip </td><td class="font-monospace"><div>boolean</div></td><td><code>placement &amp;&amp; placement.indexOf('auto') !== -1</code></td><td><div><p>The initial flip state of the Overlay.</p></div></td></tr><tr><td class="font-monospace">onHide </td><td class="font-monospace"><div><span><code>null</code></span></div></td><td></td><td><div></div></td></tr><tr><td class="font-monospace">onToggle </td><td class="font-monospace"><div>function</div></td><td></td><td><div class="mb-2"><small><em class="text-info"><span>controls <code>'show'</code></span></em></small></div><div><p>A callback that fires when the user triggers a change in tooltip visibility.</p><p><code>onToggle</code> is called with the desired next <code>show</code>, and generally should be passed back to the <code>show</code> prop. <code>onToggle</code> fires <em>after</em> the configured <code>delay</code></p></div></td></tr><tr><td class="font-monospace">overlay <sup class="text-danger">required</sup></td><td class="font-monospace"><div>element</div></td><td></td><td><div><p>An element or text to overlay next to the target.</p></div></td></tr><tr><td class="font-monospace">placement </td><td class="font-monospace"><div><span><code>'auto-start'</code><span> | </span><code>'auto'</code><span> | </span><code>'auto-end'</code><span> | </span><code>'top-start'</code><span> | </span><code>'top'</code><span> | </span><code>'top-end'</code><span> | </span><code>'right-start'</code><span> | </span><code>'right'</code><span> | </span><code>'right-end'</code><span> | </span><code>'bottom-end'</code><span> | </span><code>'bottom'</code><span> | </span><code>'bottom-start'</code><span> | </span><code>'left-end'</code><span> | </span><code>'left'</code><span> | </span><code>'left-start'</code></span></div></td><td></td><td><div><p>The placement of the Overlay in relation to it's <code>target</code>.</p></div></td></tr><tr><td class="font-monospace">popperConfig </td><td class="font-monospace"><div>object</div></td><td></td><td><div><p>A Popper.js config object passed to the the underlying popper instance.</p></div></td></tr><tr><td class="font-monospace">show </td><td class="font-monospace"><div>boolean</div></td><td></td><td><div class="mb-2"><small><em class="text-info"><span>controlled by: <code>onToggle</code>, initial prop: <code>defaultShow</code></span></em></small></div><div><p>The visibility of the Overlay. <code>show</code> is a <em>controlled</em> prop so should be paired with <code>onToggle</code> to avoid breaking user interactions.</p><p>Manually toggling <code>show</code> does <strong>not</strong> wait for <code>delay</code> to change the visibility.</p></div></td></tr><tr><td class="font-monospace">target </td><td class="font-monospace"><div><span><code>null</code></span></div></td><td></td><td><div></div></td></tr><tr><td class="font-monospace">trigger </td><td class="font-monospace"><div>'hover' | 'click' |'focus' | Array&lt;'hover' | 'click' |'focus'&gt;</div></td><td><code>['hover', 'focus']</code></td><td><div><p>Specify which action or actions trigger Overlay visibility</p></div></td></tr></tbody></table></div></div>`),D=()=>S.cloneNode(!0),L=l('<p class="lead"></p>'),q=l("<p></p>"),B=l('<div class="row gy-5 pt-3"></div>');function K(o={}){const{wrapper:a}=Object.assign({},j(),o.components);return a?e(a,h(o,{get children(){return e(i,{})}})):i();function i(){const t=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",span:"span",strong:"strong"},j(),o.components);return s||p("Example",!1),s.Code||p("Example.Code",!0),s.Intro||p("Example.Intro",!0),s.Preview||p("Example.Preview",!0),[e(C,{name:"TooltipDocs.mdx"}),`
`,e(t.h1,{children:"Tooltips"}),`
`,(()=>{const n=L.cloneNode(!0);return r(n,e(t.p,{children:`A tooltip component for a more stylish alternative to that anchor tag\r
title attribute.`})),n})(),`
`,(()=>{const n=B.cloneNode(!0);return r(n,e(s,{title:"Example",get children(){return[e(s.Intro,{get children(){return e(t.p,{children:"Try hovering over these links."})}}),e(s.Preview,{get children(){const d=q.cloneNode(!0);return r(d,e(t.p,{get children(){return[`Tight pants next level keffiyeh\r
`,e(c,{title:"Default title",id:"t-1",children:" you probably"}),`\r
haven't heard of them. Farm-to-table seitan, mcsweeney's fixie\r
sustainable quinoa 8-bit american apparel\r
`,e(c,{id:"t-2",title:"Another one",children:"have a"}),`\r
terry richardson vinyl chambray. Beard stumptown, cardigans banh\r
mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko\r
mcsweeney's cleanse vegan chambray. A really ironic artisan\r
`,e(c,{title:"Another one here too",id:"t-3",children:"whatever keytar"}),`,\r
scenester farm-to-table banksy Austin\r
`,e(c,{title:"The last tip!",id:"t-4",children:"twitter handle"}),`\r
freegan cred raw denim single-origin coffee viral.`]}})),d}}),e(s.Code,{get children(){return e(t.pre,{get children(){return e(t.code,{className:"hljs language-js",get children(){return[e(t.span,{className:"hljs-keyword",children:"const"})," ",e(t.span,{className:"hljs-title function_",children:"Link"})," = (",e(t.span,{className:"hljs-params",children:"props: { id: string; children: JSX.Element; title: string }"}),`) => (\r
  `,e(t.span,{className:"xml",get children(){return[e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"OverlayTrigger"})," ",e(t.span,{className:"hljs-attr",children:"overlay"}),"=",e(t.span,{className:"hljs-string",children:"{"}),"<",e(t.span,{className:"hljs-attr",children:"Tooltip"})," ",e(t.span,{className:"hljs-attr",children:"id"}),"=",e(t.span,{className:"hljs-string",children:"{props.id}"}),">"]}}),"{props.title}",e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Tooltip"}),">"]}}),`}>\r
    `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"a"})," ",e(t.span,{className:"hljs-attr",children:"href"}),"=",e(t.span,{className:"hljs-string",children:'"#"'}),">"]}}),"{props.children}",e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"a"}),">"]}}),`\r
  `,e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"OverlayTrigger"}),">"]}})]}}),`\r
);\r
\r
`,e(t.span,{className:"xml",get children(){return[e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"p"}),">"]}}),`\r
  Tight pants next level keffiyeh \r
  `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Link"})," ",e(t.span,{className:"hljs-attr",children:"title"}),"=",e(t.span,{className:"hljs-string",children:'"Default title"'})," ",e(t.span,{className:"hljs-attr",children:"id"}),"=",e(t.span,{className:"hljs-string",children:'"t-1"'}),">"]}})," you probably",e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Link"}),">"]}}),`\r
  haven't heard of them. Farm-to-table seitan, mcsweeney's fixie\r
  sustainable quinoa 8-bit american apparel\r
  `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Link"})," ",e(t.span,{className:"hljs-attr",children:"id"}),"=",e(t.span,{className:"hljs-string",children:'"t-2"'})," ",e(t.span,{className:"hljs-attr",children:"title"}),"=",e(t.span,{className:"hljs-string",children:'"Another one"'}),">"]}}),"have a",e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Link"}),">"]}}),`\r
  terry richardson vinyl chambray. Beard stumptown, cardigans banh\r
  mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko\r
  mcsweeney's cleanse vegan chambray. A really ironic artisan\r
  `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Link"})," ",e(t.span,{className:"hljs-attr",children:"title"}),"=",e(t.span,{className:"hljs-string",children:'"Another one here too"'})," ",e(t.span,{className:"hljs-attr",children:"id"}),"=",e(t.span,{className:"hljs-string",children:'"t-3"'}),">"]}}),"whatever keytar",e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Link"}),">"]}}),`, \r
  scenester farm-to-table banksy Austin\r
  `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Link"})," ",e(t.span,{className:"hljs-attr",children:"title"}),"=",e(t.span,{className:"hljs-string",children:'"The last tip!"'})," ",e(t.span,{className:"hljs-attr",children:"id"}),"=",e(t.span,{className:"hljs-string",children:'"t-4"'}),">"]}}),"twitter handle",e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Link"}),">"]}}),`\r
  freegan cred raw denim single-origin coffee viral.\r
`,e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"p"}),">"]}})]}}),`
`]}})}})}})]}}),null),r(n,e(s,{title:"Customize",get children(){return[e(s.Intro,{get children(){return[e(t.p,{children:"You can pass the Overlay injected props directly to the Tooltip component."}),e(t.p,{children:"This example delays hiding the tooltip."})]}}),e(s.Preview,{get children(){return e(g,{placement:"right",delay:{show:250,hide:1e3},get overlay(){return e(v,{id:"button-tooltip",children:"Simple tooltip"})},get children(){return e(N,{variant:"success",children:"Hover me to see"})}})}}),e(s.Code,{get children(){return e(t.pre,{get children(){return e(t.code,{className:"hljs language-js",get children(){return["<",e(t.span,{className:"hljs-title class_",children:"OverlayTrigger"}),`\r
  placement=`,e(t.span,{className:"hljs-string",children:'"right"'}),`\r
  delay={{ `,e(t.span,{className:"hljs-attr",children:"show"}),": ",e(t.span,{className:"hljs-number",children:"250"}),", ",e(t.span,{className:"hljs-attr",children:"hide"}),": ",e(t.span,{className:"hljs-number",children:"1000"}),` }}\r
  overlay={`,e(t.span,{className:"xml",get children(){return[e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Tooltip"})," ",e(t.span,{className:"hljs-attr",children:"id"}),"=",e(t.span,{className:"hljs-string",children:'"button-tooltip"'}),">"]}}),"Simple tooltip",e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Tooltip"}),">"]}})]}}),`}\r
>\r
  `,e(t.span,{className:"xml",get children(){return[e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Button"})," ",e(t.span,{className:"hljs-attr",children:"variant"}),"=",e(t.span,{className:"hljs-string",children:'"success"'}),">"]}}),"Hover me to see",e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Button"}),">"]}})]}}),`\r
</`,e(t.span,{className:"hljs-title class_",children:"OverlayTrigger"}),`>
`]}})}})}})]}}),null),r(n,e(s,{get children(){return[e(s.Intro,{get children(){return e(t.p,{get children(){return["Or pass a Tooltip element to ",e(t.code,{children:"OverlayTrigger"})," instead."]}})}}),e(s.Preview,{get children(){return e(P,{direction:"horizontal",gap:2,get children(){return["top","right","bottom","left"].map(d=>e(g,{placement:d,get overlay(){return e(v,{id:`tooltip-${d}`,get children(){return["Tooltip on ",e(t.strong,{children:d}),"."]}})},get children(){return e(N,{variant:"secondary",get children(){return["Tooltip on ",d]}})}}))}})}}),e(s.Code,{get children(){return e(t.pre,{get children(){return e(t.code,{className:"hljs language-js",get children(){return["<",e(t.span,{className:"hljs-title class_",children:"Stack"})," direction=",e(t.span,{className:"hljs-string",children:'"horizontal"'})," gap={",e(t.span,{className:"hljs-number",children:"2"}),`}>\r
  {[`,e(t.span,{className:"hljs-string",children:"'top'"}),", ",e(t.span,{className:"hljs-string",children:"'right'"}),", ",e(t.span,{className:"hljs-string",children:"'bottom'"}),", ",e(t.span,{className:"hljs-string",children:"'left'"}),"].",e(t.span,{className:"hljs-title function_",children:"map"}),"(",e(t.span,{className:"hljs-function",get children(){return["(",e(t.span,{className:"hljs-params",children:"placement"}),") =>"]}}),` (\r
    `,e(t.span,{className:"xml",get children(){return[e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"OverlayTrigger"}),`\r
      `,e(t.span,{className:"hljs-attr",children:"placement"}),"=",e(t.span,{className:"hljs-string",children:"{placement}"}),`\r
      `,e(t.span,{className:"hljs-attr",children:"overlay"}),"=",e(t.span,{className:"hljs-string",children:"{"}),`\r
        <`,e(t.span,{className:"hljs-attr",children:"Tooltip"})," ",e(t.span,{className:"hljs-attr",children:"id"}),"=",e(t.span,{className:"hljs-string",children:"{"}),"`",e(t.span,{className:"hljs-attr",children:"tooltip-"}),"${",e(t.span,{className:"hljs-attr",children:"placement"}),"}`}>"]}}),`\r
          Tooltip on `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"strong"}),">"]}}),"{placement}",e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"strong"}),">"]}}),`.\r
        `,e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Tooltip"}),">"]}}),`\r
      }\r
    >\r
      `,e(t.span,{className:"hljs-tag",get children(){return["<",e(t.span,{className:"hljs-name",children:"Button"})," ",e(t.span,{className:"hljs-attr",children:"variant"}),"=",e(t.span,{className:"hljs-string",children:'"secondary"'}),">"]}}),"Tooltip on {placement}",e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"Button"}),">"]}}),`\r
    `,e(t.span,{className:"hljs-tag",get children(){return["</",e(t.span,{className:"hljs-name",children:"OverlayTrigger"}),">"]}})]}}),`\r
  ))}\r
</`,e(t.span,{className:"hljs-title class_",children:"Stack"}),`>
`]}})}})}})]}}),null),r(n,e(D,{}),null),n})()]}}function p(o,a){throw new Error("Expected "+(a?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}export{K as default};
