import{t as r,c as e,m as I,i as t,J as c,F as n,q as S,v as m,K as p}from"./vendor.7bd60469.js";import{x as g}from"./index.eef2e268.js";import{E as a}from"./Example.fb60cff4.js";import{G as L}from"./GithubSource.027acbf3.js";import"./BadgeApi.fd796b6e.js";const P=r('<p class="lead"></p>'),u=r("<option>Open this select menu</option>"),N=r('<option value="1">One</option>'),j=r('<option value="2">Two</option>'),b=r('<option value="3">Three</option>'),_=r('<label for="floatingInputCustom">Email address</label>'),$=r('<label for="floatingPasswordCustom">Password</label>'),T=r('<div class="row gy-5 pt-3"></div>'),E=r(`<table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>as </td><td><div>elementType</div></td><td><code></code></td><td><div><p>You can use a custom element type for this component.</p></div></td></tr>
<tr><td>bsPrefix <sup class="text-danger">required</sup></td><td><div>string</div></td><td><code>'form-floating'</code></td><td><div><p>Change the underlying component CSS base class name and modifier class names prefix. <strong>This is an escape hatch</strong> for working with heavily customized bootstrap css.</p></div></td></tr></tbody></table>`),k=r(`<table class="bg-white mb-0 table table-striped table-bordered"><thead><tr><th>Name</th><th>Type</th><th>Default</th><th>Description</th></tr></thead><tbody><tr><td>as </td><td><div>elementType</div></td><td></td><td><div><p>You can use a custom element type for this component.</p></div></td></tr>
<tr><td>controlId </td><td><div>string</div></td><td></td><td><div><p>Sets <code>id</code> on <code>&lt;FormControl></code> and <code>htmlFor</code> on <code>&lt;label></code>.</p></div></td></tr>
<tr><td>label <sup class="text-danger">required</sup></td><td><div>node</div></td><td></td><td><div><p>Form control label.</p></div></td></tr></tbody></table>`);function A(h={}){const{wrapper:d}=Object.assign({},g(),h.components);return d?e(d,I(h,{get children(){return e(o,{})}})):o();function o(){const l=Object.assign({h1:"h1",p:"p",code:"code",pre:"pre",span:"span",h2:"h2",h3:"h3"},g(),h.components);return a||i("Example",!1),a.Code||i("Example.Code",!0),a.Intro||i("Example.Intro",!0),a.Preview||i("Example.Preview",!0),n||i("Form",!1),n.Control||i("Form.Control",!0),n.Select||i("Form.Select",!0),[e(L,{name:"FormFloatingLabelDocs.mdx"}),`
`,e(l.h1,{children:"Floating labels"}),`
`,(()=>{const s=P.cloneNode(!0);return t(s,e(l.p,{children:"Create beautifully simple form labels that float over your input fields."})),s})(),`
`,(()=>{const s=T.cloneNode(!0);return t(s,e(a,{title:"Example",get children(){return[e(a.Intro,{get children(){return e(l.p,{get children(){return["Wrap a ",e(l.code,{children:"<Form.Control>"})," element in ",e(l.code,{children:"<FloatingLabel>"}),` to enable floating labels with\r
Bootstrap\u2019s textual form fields. A `,e(l.code,{children:"placeholder"}),` is required\r
on each `,e(l.code,{children:"<Form.Control>"}),` as our method of CSS-only\r
floating labels uses the `,e(l.code,{children:":placeholder-shown"})," pseudo-element."]}})}}),e(a.Preview,{get children(){return[e(c,{controlId:"floatingInput",label:"Email address",className:"mb-3",get children(){return e(n.Control,{type:"email",placeholder:"name@example.com"})}}),e(c,{controlId:"floatingPassword",label:"Password",get children(){return e(n.Control,{type:"password",placeholder:"Password"})}})]}}),e(a.Code,{get children(){return e(l.pre,{get children(){return e(l.code,{className:"hljs language-js",get children(){return["<",e(l.span,{className:"hljs-title hljs-class",children:"FloatingLabel"})," controlId=",e(l.span,{className:"hljs-string",children:'"floatingInput"'})," label=",e(l.span,{className:"hljs-string",children:'"Email address"'})," className=",e(l.span,{className:"hljs-string",children:'"mb-3"'}),`>\r
  `,e(l.span,{className:"xml",get children(){return e(l.span,{className:"hljs-tag",get children(){return["<",e(l.span,{className:"hljs-name",children:"Form.Control"})," ",e(l.span,{className:"hljs-attr",children:"type"}),"=",e(l.span,{className:"hljs-string",children:'"email"'})," ",e(l.span,{className:"hljs-attr",children:"placeholder"}),"=",e(l.span,{className:"hljs-string",children:'"name@example.com"'})," />"]}})}}),`\r
</`,e(l.span,{className:"hljs-title hljs-class",children:"FloatingLabel"}),`>\r
\r
`,e(l.span,{className:"xml",get children(){return[e(l.span,{className:"hljs-tag",get children(){return["<",e(l.span,{className:"hljs-name",children:"FloatingLabel"})," ",e(l.span,{className:"hljs-attr",children:"controlId"}),"=",e(l.span,{className:"hljs-string",children:'"floatingPassword"'})," ",e(l.span,{className:"hljs-attr",children:"label"}),"=",e(l.span,{className:"hljs-string",children:'"Password"'}),">"]}}),`\r
  `,e(l.span,{className:"hljs-tag",get children(){return["<",e(l.span,{className:"hljs-name",children:"Form.Control"})," ",e(l.span,{className:"hljs-attr",children:"type"}),"=",e(l.span,{className:"hljs-string",children:'"password"'})," ",e(l.span,{className:"hljs-attr",children:"placeholder"}),"=",e(l.span,{className:"hljs-string",children:'"Password"'})," />"]}}),`\r
`,e(l.span,{className:"hljs-tag",get children(){return["</",e(l.span,{className:"hljs-name",children:"FloatingLabel"}),">"]}})]}}),`
`]}})}})}})]}}),null),t(s,e(a,{title:"Textareas",get children(){return[e(a.Intro,{get children(){return e(l.p,{get children(){return["By default, ",e(l.code,{children:"<textarea>"}),"s will be the same height as ",e(l.code,{children:"<input>"}),`s. To set a custom\r
height on your `,e(l.code,{children:"<textarea>"}),", do not use the ",e(l.code,{children:"rows"}),` attribute. Instead, set an\r
explicit `,e(l.code,{children:"height"})," (either inline or via custom CSS)."]}})}}),e(a.Preview,{get children(){return[e(c,{controlId:"floatingTextarea",label:"Comments",className:"mb-3",get children(){return e(n.Control,{as:"textarea",placeholder:"Leave a comment here"})}}),e(c,{controlId:"floatingTextarea2",label:"Comments",get children(){return e(n.Control,{as:"textarea",placeholder:"Leave a comment here",style:{height:"100px"}})}})]}}),e(a.Code,{get children(){return e(l.pre,{get children(){return e(l.code,{className:"hljs language-js",get children(){return["<",e(l.span,{className:"hljs-title hljs-class",children:"FloatingLabel"})," controlId=",e(l.span,{className:"hljs-string",children:'"floatingTextarea"'})," label=",e(l.span,{className:"hljs-string",children:'"Comments"'})," className=",e(l.span,{className:"hljs-string",children:'"mb-3"'}),`>\r
  `,e(l.span,{className:"xml",get children(){return e(l.span,{className:"hljs-tag",get children(){return["<",e(l.span,{className:"hljs-name",children:"Form.Control"})," ",e(l.span,{className:"hljs-attr",children:"as"}),"=",e(l.span,{className:"hljs-string",children:'"textarea"'})," ",e(l.span,{className:"hljs-attr",children:"placeholder"}),"=",e(l.span,{className:"hljs-string",children:'"Leave a comment here"'})," />"]}})}}),`\r
</`,e(l.span,{className:"hljs-title hljs-class",children:"FloatingLabel"}),`>\r
\r
`,e(l.span,{className:"xml",get children(){return[e(l.span,{className:"hljs-tag",get children(){return["<",e(l.span,{className:"hljs-name",children:"FloatingLabel"})," ",e(l.span,{className:"hljs-attr",children:"controlId"}),"=",e(l.span,{className:"hljs-string",children:'"floatingTextarea2"'})," ",e(l.span,{className:"hljs-attr",children:"label"}),"=",e(l.span,{className:"hljs-string",children:'"Comments"'}),">"]}}),`\r
  `,e(l.span,{className:"hljs-tag",get children(){return["<",e(l.span,{className:"hljs-name",children:"Form.Control"})," ",e(l.span,{className:"hljs-attr",children:"as"}),"=",e(l.span,{className:"hljs-string",children:'"textarea"'})," ",e(l.span,{className:"hljs-attr",children:"placeholder"}),"=",e(l.span,{className:"hljs-string",children:'"Leave a comment here"'})," ",e(l.span,{className:"hljs-attr",children:"style"}),"=",e(l.span,{className:"hljs-string",children:"{{"})," ",e(l.span,{className:"hljs-attr",children:"height:"})," '",e(l.span,{className:"hljs-attr",children:"100px"}),"' }} />"]}}),`\r
`,e(l.span,{className:"hljs-tag",get children(){return["</",e(l.span,{className:"hljs-name",children:"FloatingLabel"}),">"]}})]}}),`
`]}})}})}})]}}),null),t(s,e(a,{title:"Selects",get children(){return[e(a.Intro,{get children(){return e(l.p,{get children(){return["Other than ",e(l.code,{children:"<Form.Control>"}),", floating labels are only available on ",e(l.code,{children:"<Form.Select>"}),`s.\r
They work in the same way, but unlike `,e(l.code,{children:"<input>"}),"s, they\u2019ll always show the ",e(l.code,{children:"<label>"}),`\r
in its floated state.`]}})}}),e(a.Preview,{get children(){return e(c,{controlId:"floatingSelect",label:"Works with selects",get children(){return e(n.Select,{"aria-label":"Floating label select example",get children(){return[u.cloneNode(!0),`\r
`,N.cloneNode(!0),`\r
`,j.cloneNode(!0),`\r
`,b.cloneNode(!0)]}})}})}}),e(a.Code,{get children(){return e(l.pre,{get children(){return e(l.code,{className:"hljs language-js",get children(){return["<",e(l.span,{className:"hljs-title hljs-class",children:"FloatingLabel"})," controlId=",e(l.span,{className:"hljs-string",children:'"floatingSelect"'})," label=",e(l.span,{className:"hljs-string",children:'"Works with selects"'}),`>\r
  `,e(l.span,{className:"xml",get children(){return[e(l.span,{className:"hljs-tag",get children(){return["<",e(l.span,{className:"hljs-name",children:"Form.Select"})," ",e(l.span,{className:"hljs-attr",children:"aria-label"}),"=",e(l.span,{className:"hljs-string",children:'"Floating label select example"'}),">"]}}),`\r
    `,e(l.span,{className:"hljs-tag",get children(){return["<",e(l.span,{className:"hljs-name",children:"option"}),">"]}}),"Open this select menu",e(l.span,{className:"hljs-tag",get children(){return["</",e(l.span,{className:"hljs-name",children:"option"}),">"]}}),`\r
    `,e(l.span,{className:"hljs-tag",get children(){return["<",e(l.span,{className:"hljs-name",children:"option"})," ",e(l.span,{className:"hljs-attr",children:"value"}),"=",e(l.span,{className:"hljs-string",children:'"1"'}),">"]}}),"One",e(l.span,{className:"hljs-tag",get children(){return["</",e(l.span,{className:"hljs-name",children:"option"}),">"]}}),`\r
    `,e(l.span,{className:"hljs-tag",get children(){return["<",e(l.span,{className:"hljs-name",children:"option"})," ",e(l.span,{className:"hljs-attr",children:"value"}),"=",e(l.span,{className:"hljs-string",children:'"2"'}),">"]}}),"Two",e(l.span,{className:"hljs-tag",get children(){return["</",e(l.span,{className:"hljs-name",children:"option"}),">"]}}),`\r
    `,e(l.span,{className:"hljs-tag",get children(){return["<",e(l.span,{className:"hljs-name",children:"option"})," ",e(l.span,{className:"hljs-attr",children:"value"}),"=",e(l.span,{className:"hljs-string",children:'"3"'}),">"]}}),"Three",e(l.span,{className:"hljs-tag",get children(){return["</",e(l.span,{className:"hljs-name",children:"option"}),">"]}}),`\r
  `,e(l.span,{className:"hljs-tag",get children(){return["</",e(l.span,{className:"hljs-name",children:"Form.Select"}),">"]}})]}}),`\r
</`,e(l.span,{className:"hljs-title hljs-class",children:"FloatingLabel"}),`>
`]}})}})}})]}}),null),t(s,e(a,{title:"Layout",get children(){return[e(a.Intro,{get children(){return e(l.p,{children:`When working with the Bootstrap grid system, be sure to place form\r
elements within column classes.`})}}),e(a.Preview,{get children(){return e(S,{className:"g-2",get children(){return[e(m,{md:!0,get children(){return e(c,{controlId:"floatingInputGrid",label:"Email address",get children(){return e(n.Control,{type:"email",placeholder:"name@example.com"})}})}}),e(m,{md:!0,get children(){return e(c,{controlId:"floatingSelectGrid",label:"Works with selects",get children(){return e(n.Select,{"aria-label":"Floating label select example",get children(){return[u.cloneNode(!0),`\r
`,N.cloneNode(!0),`\r
`,j.cloneNode(!0),`\r
`,b.cloneNode(!0)]}})}})}})]}})}}),e(a.Code,{get children(){return e(l.pre,{get children(){return e(l.code,{className:"hljs language-js",get children(){return["<",e(l.span,{className:"hljs-title hljs-class",children:"Row"})," className=",e(l.span,{className:"hljs-string",children:'"g-2"'}),`>\r
  `,e(l.span,{className:"xml",get children(){return[e(l.span,{className:"hljs-tag",get children(){return["<",e(l.span,{className:"hljs-name",children:"Col"})," ",e(l.span,{className:"hljs-attr",children:"md"}),">"]}}),`\r
    `,e(l.span,{className:"hljs-tag",get children(){return["<",e(l.span,{className:"hljs-name",children:"FloatingLabel"})," ",e(l.span,{className:"hljs-attr",children:"controlId"}),"=",e(l.span,{className:"hljs-string",children:'"floatingInputGrid"'})," ",e(l.span,{className:"hljs-attr",children:"label"}),"=",e(l.span,{className:"hljs-string",children:'"Email address"'}),">"]}}),`\r
      `,e(l.span,{className:"hljs-tag",get children(){return["<",e(l.span,{className:"hljs-name",children:"Form.Control"})," ",e(l.span,{className:"hljs-attr",children:"type"}),"=",e(l.span,{className:"hljs-string",children:'"email"'})," ",e(l.span,{className:"hljs-attr",children:"placeholder"}),"=",e(l.span,{className:"hljs-string",children:'"name@example.com"'})," />"]}}),`\r
    `,e(l.span,{className:"hljs-tag",get children(){return["</",e(l.span,{className:"hljs-name",children:"FloatingLabel"}),">"]}}),`\r
  `,e(l.span,{className:"hljs-tag",get children(){return["</",e(l.span,{className:"hljs-name",children:"Col"}),">"]}})]}}),`\r
  `,e(l.span,{className:"xml",get children(){return[e(l.span,{className:"hljs-tag",get children(){return["<",e(l.span,{className:"hljs-name",children:"Col"})," ",e(l.span,{className:"hljs-attr",children:"md"}),">"]}}),`\r
    `,e(l.span,{className:"hljs-tag",get children(){return["<",e(l.span,{className:"hljs-name",children:"FloatingLabel"})," ",e(l.span,{className:"hljs-attr",children:"controlId"}),"=",e(l.span,{className:"hljs-string",children:'"floatingSelectGrid"'})," ",e(l.span,{className:"hljs-attr",children:"label"}),"=",e(l.span,{className:"hljs-string",children:'"Works with selects"'}),">"]}}),`\r
      `,e(l.span,{className:"hljs-tag",get children(){return["<",e(l.span,{className:"hljs-name",children:"Form.Select"})," ",e(l.span,{className:"hljs-attr",children:"aria-label"}),"=",e(l.span,{className:"hljs-string",children:'"Floating label select example"'}),">"]}}),`\r
        `,e(l.span,{className:"hljs-tag",get children(){return["<",e(l.span,{className:"hljs-name",children:"option"}),">"]}}),"Open this select menu",e(l.span,{className:"hljs-tag",get children(){return["</",e(l.span,{className:"hljs-name",children:"option"}),">"]}}),`\r
        `,e(l.span,{className:"hljs-tag",get children(){return["<",e(l.span,{className:"hljs-name",children:"option"})," ",e(l.span,{className:"hljs-attr",children:"value"}),"=",e(l.span,{className:"hljs-string",children:'"1"'}),">"]}}),"One",e(l.span,{className:"hljs-tag",get children(){return["</",e(l.span,{className:"hljs-name",children:"option"}),">"]}}),`\r
        `,e(l.span,{className:"hljs-tag",get children(){return["<",e(l.span,{className:"hljs-name",children:"option"})," ",e(l.span,{className:"hljs-attr",children:"value"}),"=",e(l.span,{className:"hljs-string",children:'"2"'}),">"]}}),"Two",e(l.span,{className:"hljs-tag",get children(){return["</",e(l.span,{className:"hljs-name",children:"option"}),">"]}}),`\r
        `,e(l.span,{className:"hljs-tag",get children(){return["<",e(l.span,{className:"hljs-name",children:"option"})," ",e(l.span,{className:"hljs-attr",children:"value"}),"=",e(l.span,{className:"hljs-string",children:'"3"'}),">"]}}),"Three",e(l.span,{className:"hljs-tag",get children(){return["</",e(l.span,{className:"hljs-name",children:"option"}),">"]}}),`\r
      `,e(l.span,{className:"hljs-tag",get children(){return["</",e(l.span,{className:"hljs-name",children:"Form.Select"}),">"]}}),`\r
    `,e(l.span,{className:"hljs-tag",get children(){return["</",e(l.span,{className:"hljs-name",children:"FloatingLabel"}),">"]}}),`\r
  `,e(l.span,{className:"hljs-tag",get children(){return["</",e(l.span,{className:"hljs-name",children:"Col"}),">"]}})]}}),`\r
</`,e(l.span,{className:"hljs-title hljs-class",children:"Row"}),`>
`]}})}})}})]}}),null),t(s,e(a,{title:"Customizing rendering",get children(){return[e(a.Intro,{get children(){return e(l.p,{get children(){return["If you need greater control over the rendering, use the ",e(l.code,{children:"<FormFloating>"}),` component\r
to wrap your input and label. Also note that the `,e(l.code,{children:"<Form.Control>"}),` must come first\r
so we can utilize a sibling selector (e.g., ~).`]}})}}),e(a.Preview,{get children(){return[e(p,{className:"mb-3",get children(){return[e(n.Control,{id:"floatingInputCustom",type:"email",placeholder:"name@example.com"}),_.cloneNode(!0)]}}),e(p,{get children(){return[e(n.Control,{id:"floatingPasswordCustom",type:"password",placeholder:"Password"}),$.cloneNode(!0)]}})]}}),e(a.Code,{get children(){return e(l.pre,{get children(){return e(l.code,{className:"hljs language-js",get children(){return["<",e(l.span,{className:"hljs-title hljs-class",children:"FormFloating"})," className=",e(l.span,{className:"hljs-string",children:'"mb-3"'}),`>\r
  `,e(l.span,{className:"xml",get children(){return e(l.span,{className:"hljs-tag",get children(){return["<",e(l.span,{className:"hljs-name",children:"Form.Control"})," ",e(l.span,{className:"hljs-attr",children:"id"}),"=",e(l.span,{className:"hljs-string",children:'"floatingInputCustom"'})," ",e(l.span,{className:"hljs-attr",children:"type"}),"=",e(l.span,{className:"hljs-string",children:'"email"'}),e(l.span,{className:"hljs-attr",children:"placeholder"}),"=",e(l.span,{className:"hljs-string",children:'"name@example.com"'})," />"]}})}}),`\r
  `,e(l.span,{className:"xml",get children(){return[e(l.span,{className:"hljs-tag",get children(){return["<",e(l.span,{className:"hljs-name",children:"label"})," ",e(l.span,{className:"hljs-attr",children:"htmlFor"}),"=",e(l.span,{className:"hljs-string",children:'"floatingInputCustom"'}),">"]}}),"Email address",e(l.span,{className:"hljs-tag",get children(){return["</",e(l.span,{className:"hljs-name",children:"label"}),">"]}})]}}),`\r
</`,e(l.span,{className:"hljs-title hljs-class",children:"FormFloating"}),`>\r
\r
`,e(l.span,{className:"xml",get children(){return[e(l.span,{className:"hljs-tag",get children(){return["<",e(l.span,{className:"hljs-name",children:"FormFloating"}),">"]}}),`\r
  `,e(l.span,{className:"hljs-tag",get children(){return["<",e(l.span,{className:"hljs-name",children:"Form.Control"})," ",e(l.span,{className:"hljs-attr",children:"id"}),"=",e(l.span,{className:"hljs-string",children:'"floatingPasswordCustom"'})," ",e(l.span,{className:"hljs-attr",children:"type"}),"=",e(l.span,{className:"hljs-string",children:'"password"'})," ",e(l.span,{className:"hljs-attr",children:"placeholder"}),"=",e(l.span,{className:"hljs-string",children:'"Password"'})," />"]}}),`\r
  `,e(l.span,{className:"hljs-tag",get children(){return["<",e(l.span,{className:"hljs-name",children:"label"})," ",e(l.span,{className:"hljs-attr",children:"htmlFor"}),"=",e(l.span,{className:"hljs-string",children:'"floatingPasswordCustom"'}),">"]}}),"Password",e(l.span,{className:"hljs-tag",get children(){return["</",e(l.span,{className:"hljs-name",children:"label"}),">"]}}),`\r
`,e(l.span,{className:"hljs-tag",get children(){return["</",e(l.span,{className:"hljs-name",children:"FormFloating"}),">"]}})]}}),`
`]}})}})}})]}}),null),s})(),`
`,e(l.h2,{children:"Api"}),`
`,e(l.h3,{children:"Form.Floating"}),`
`,e(l.p,{get children(){return e(l.code,{children:`import { Form } from "solid-bootstrap"'`})}}),`
`,(()=>{const s=E.cloneNode(!0),f=s.firstChild,F=f.nextSibling,C=F.firstChild,w=C.firstChild,x=w.nextSibling,v=x.nextSibling,y=v.firstChild;return t(y,e(l.code,{children:"<div>"})),s})(),`
`,e(l.h3,{children:"FloatingLabel"}),`
`,e(l.p,{get children(){return e(l.code,{children:`import { FloatingLabel } from "solid-bootstrap"'`})}}),`
`,k.cloneNode(!0)]}}function i(h,d){throw new Error("Expected "+(d?"component":"object")+" `"+h+"` to be defined: you likely forgot to import, pass, or provide it.")}export{A as default};