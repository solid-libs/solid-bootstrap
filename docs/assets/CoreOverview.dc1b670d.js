import{x as i}from"./index.bf078b0c.js";import{c as e,m as s}from"./vendor.6a5ca7bc.js";function l(o={}){const{wrapper:t}=Object.assign({},i(),o.components);return t?e(t,s(o,{get children(){return e(r,{})}})):r();function r(){const n=Object.assign({h1:"h1",blockquote:"blockquote",p:"p",a:"a",h2:"h2",pre:"pre",code:"code"},i(),o.components);return[e(n.h1,{children:"Solid Bootstrap Core"}),`
`,e(n.blockquote,{get children(){return[`
`,e(n.p,{get children(){return["Ported from ",e(n.a,{href:"https://react-restart.github.io/ui/",children:"restart/ui"})]}}),`
`]}}),`
`,e(n.p,{children:`Solid Bootstrap Core is a set of full featured, extensible, and accessible UI components, designed to integrate into any styling\r
framework or system. Core components, are "headless", meaning they don't provide any styles. Components encapsulate\r
the complicated logic and and state without being prescriptive about their look and feel.`}),`
`,e(n.h2,{children:"Installation"}),`
`,e(n.pre,{get children(){return e(n.code,{className:"hljs language-js",children:`npm install solid-bootstrap-core
`})}}),`
`,e(n.h2,{children:"Styling"}),`
`,e(n.p,{get children(){return[`Core components are "headless", meaning each component encapsulates logic and markup but not styling.\r
These components ares intended as a basis for building design systems using which styling technology you like.\r
You should provide your own styles, and the documentation provides some simple examples\r
for how to do that. For more complex integrations, check out the `,e(n.a,{href:"https://solid-libs.github.io/solid-bootstrap/components/accordion",children:"Solid Bootstrap components"}),"."]}}),`
`,e(n.p,{get children(){return["There are a few places where inline ",e(n.code,{children:"style"}),`s are applied, however. They are functionally\r
required and very minimal. Specifically `,e(n.code,{children:"PopperJs"}),` injects it's own styles in order\r
to position overlays and dropdowns, and `,e(n.code,{children:"Modal"})," applies ",e(n.code,{children:"overflow: hidden"}),` to the\r
document body. These can technically be overridden but you probably won't need to.`]}})]}}export{l as default};
