import{c as e,m,o as h,W as t,t as i}from"./index.46b6df7f.js";import{M as o}from"./index.e0aff9b5.js";import{E as n}from"./Example.6cae19f6.js";import"./Card.cb90095f.js";const u=i('<p class="lead"></p>'),p=i("<br>"),N=i('<div class="row gy-5 pt-3"></div>');function f(r={}){const{wrapper:l}=Object.assign({},o(),r.components);return l?e(l,m(r,{get children(){return e(d,{})}})):d();function d(){const s=Object.assign({h1:"h1",p:"p",pre:"pre",code:"code",span:"span",ul:"ul",li:"li",h3:"h3",h2:"h2"},o(),r.components);return n||c("Example",!1),n.Code||c("Example.Code",!0),n.Intro||c("Example.Intro",!0),n.Preview||c("Example.Preview",!0),[e(s.h1,{children:"Button (core)"}),`
`,(()=>{const a=u.cloneNode(!0);return h(a,e(s.p,{children:`An abstract button component for creating accessible buttons regardless of the HTML\r
element used to render it.`})),a})(),`
`,(()=>{const a=N.cloneNode(!0);return h(a,e(n,{title:"Basic Example",get children(){return[e(n.Preview,{get children(){return e(t,{children:"I'm a Button"})}}),e(n.Code,{get children(){return e(s.pre,{get children(){return e(s.code,{className:"hljs language-jsx",get children(){return[e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"Button"})," } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:'"solid-bootstrap-core"'}),`;\r
\r
`,e(s.span,{className:"xml",get children(){return[e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Button"}),">"]}}),"I'm a Button",e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Button"}),">"]}})]}}),`
`]}})}})}})]}}),null),h(a,e(n,{get children(){return[e(n.Intro,{get children(){return[e(s.p,{get children(){return["Not very impressive on its own, but ",e(s.code,{children:"Button"}),` does come with a few conveniences\r
over the plain HTML element.`]}}),e(s.ul,{get children(){return[`
`,e(s.li,{get children(){return[e(s.code,{children:"type"})," defaults to ",e(s.code,{children:"button"})]}}),`
`,e(s.li,{get children(){return["Ensures that non ",e(s.code,{children:"button"})," ",e(s.code,{children:"as"})," options remain accessible"]}}),`
`,e(s.li,{get children(){return["contextually renders an ",e(s.code,{children:"<a>"})," if href or other anchor props are added."]}}),`
`]}})]}}),e(n.Preview,{get children(){return[e(t,{children:"I'm a Button"}),p.cloneNode(!0),e(t,{href:"#",children:"I'm a link"}),p.cloneNode(!0),e(t,{as:"span",children:"I'm a span but also a button"})]}}),e(n.Code,{get children(){return e(s.pre,{get children(){return e(s.code,{className:"hljs language-jsx",get children(){return[e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"Button"})," } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:'"solid-bootstrap-core"'}),`;\r
\r
`,e(s.span,{className:"xml",get children(){return[e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Button"}),">"]}}),"I'm a Button",e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Button"}),">"]}})]}}),`\r
`,e(s.span,{className:"xml",get children(){return e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"br"})," />"]}})}}),`\r
`,e(s.span,{className:"xml",get children(){return[e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Button"})," ",e(s.span,{className:"hljs-attr",children:"href"}),"=",e(s.span,{className:"hljs-string",children:'"#"'}),">"]}}),"I'm a link",e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Button"}),">"]}})]}}),`\r
`,e(s.span,{className:"xml",get children(){return e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"br"})," />"]}})}}),`\r
`,e(s.span,{className:"xml",get children(){return[e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Button"})," ",e(s.span,{className:"hljs-attr",children:"as"}),"=",e(s.span,{className:"hljs-string",children:'"span"'}),">"]}}),"I'm a span but also a button",e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"Button"}),">"]}})]}}),`
`]}})}})}})]}}),null),a})(),`
`,e(s.h3,{get children(){return e(s.code,{children:"useButtonProps"})}}),`
`,e(s.p,{get children(){return["Most of the heavy lifting in Button comes from the ",e(s.code,{children:"useButtonProps"}),` hook. You\r
can use the hook directly to turn any component into an accessible button.`]}}),`
`,e(s.p,{get children(){return["If an explicit ",e(s.code,{children:"tagName"}),` isn't provided, the hook will pick between 'button' and 'a'\r
depending on whether any anchor specific options, like `,e(s.code,{children:"href"}),", were provided."]}}),`
`,e(s.pre,{get children(){return e(s.code,{className:"hljs language-tsx",get children(){return[e(s.span,{className:"hljs-keyword",children:"import"})," { useButtonProps } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:"'Button'"}),`\r
\r
\r
`,e(s.span,{className:"hljs-keyword",children:"function"})," ",e(s.span,{className:"hljs-title function_",children:"CompanyButton"}),"(",e(s.span,{className:"hljs-params",children:"props"}),`) {\r
  `,e(s.span,{className:"hljs-keyword",children:"const"})," [ariaButtonProps, { ",e(s.span,{className:"hljs-attr",children:"tagName"}),": ",e(s.span,{className:"hljs-title class_",children:"Tag"})," }] = ",e(s.span,{className:"hljs-title function_",children:"useButtonProps"}),`(props);\r
\r
  `,e(s.span,{className:"hljs-keyword",children:"return"})," ",e(s.span,{className:"xml",get children(){return e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Tag"})," {",e(s.span,{className:"hljs-attr",children:"...props"}),"} {",e(s.span,{className:"hljs-attr",children:"...ariaButtonProps"}),"} />"]}})}}),`\r
}\r
\r
<div `,e(s.span,{className:"hljs-keyword",children:"class"}),"=",e(s.span,{className:"hljs-string",children:'"space-x-4"'}),`>\r
  `,e(s.span,{className:"xml",get children(){return[e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"CompanyButton"}),">"]}}),"Hey there",e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"CompanyButton"}),">"]}}),`\r
  `,e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"CompanyButton"})," ",e(s.span,{className:"hljs-attr",children:"href"}),"=",e(s.span,{className:"hljs-string",children:'"/home"'}),">"]}}),"I'm a link",e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"CompanyButton"}),">"]}}),`\r
`,e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"div"}),">"]}}),`;
`]}})]}})}}),`
`,e(s.h2,{children:"Styling"}),`
`,e(s.p,{get children(){return["Styling options are straightforward for ",e(s.code,{children:"Button"}),` below is a minimal example using TailwindCSS.\r
There is one caveat around styling the button's disabled state. Styling should be based off\r
of `,e(s.code,{children:"disabled"})," prop directly as opposed to using a ",e(s.code,{children:":disabled"}),` CSS selector.\r
This is because the button may render an HTML element that does not support\r
the `,e(s.code,{children:"disabled"})," attribute (such as an ",e(s.code,{children:"<a>"}),"). Alternatively, you can select for ",e(s.code,{children:"[aria-disabled='true']"}),`\r
in addition to `,e(s.code,{children:":disabled"}),"."]}}),`
`,e(s.pre,{get children(){return e(s.code,{className:"hljs language-jsx",get children(){return[e(s.span,{className:"hljs-keyword",children:"import"})," { ",e(s.span,{className:"hljs-title class_",children:"Button"})," } ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:'"solid-bootstrap-core"'}),`;\r
`,e(s.span,{className:"hljs-keyword",children:"import"})," clsx ",e(s.span,{className:"hljs-keyword",children:"from"})," ",e(s.span,{className:"hljs-string",children:'"clsx"'}),`;\r
\r
`,e(s.span,{className:"hljs-keyword",children:"function"})," ",e(s.span,{className:"hljs-title function_",children:"StyledButton"}),"(",e(s.span,{className:"hljs-params",children:"props"}),`) {\r
  `,e(s.span,{className:"hljs-keyword",children:"return"}),` (\r
    `,e(s.span,{className:"xml",get children(){return e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"Button"}),`\r
      {`,e(s.span,{className:"hljs-attr",children:"...props"}),`}\r
      `,e(s.span,{className:"hljs-attr",children:"class"}),"=",e(s.span,{className:"hljs-string",children:"{clsx("}),`\r
        `,e(s.span,{className:"hljs-attr",children:"props.class"}),`,\r
        "`,e(s.span,{className:"hljs-attr",children:"transition"})," ",e(s.span,{className:"hljs-attr",children:"text-md"}),`",\r
        "`,e(s.span,{className:"hljs-attr",children:"h-10"})," ",e(s.span,{className:"hljs-attr",children:"bg-white"})," ",e(s.span,{className:"hljs-attr",children:"border"})," ",e(s.span,{className:"hljs-attr",children:"border-primary"})," ",e(s.span,{className:"hljs-attr",children:"text-primary"})," ",e(s.span,{className:"hljs-attr",children:"rounded"})," ",e(s.span,{className:"hljs-attr",children:"px-8"})," ",e(s.span,{className:"hljs-attr",children:"mt-4"})," ",e(s.span,{className:"hljs-attr",children:"appearance-none"})," ",e(s.span,{className:"hljs-attr",children:"text-center"})," ",e(s.span,{className:"hljs-attr",children:"whitespace-no-wrap"}),`",\r
        "`,e(s.span,{className:"hljs-attr",children:"focus:outline-none"})," ",e(s.span,{className:"hljs-attr",children:"focus:ring-4"})," ",e(s.span,{className:"hljs-attr",children:"ring-primary-200"}),`",\r
        !`,e(s.span,{className:"hljs-attr",children:"props.disabled"}),` &&\r
          "`,e(s.span,{className:"hljs-attr",children:"cursor-pointer"})," ",e(s.span,{className:"hljs-attr",children:"hover:bg-primary"})," ",e(s.span,{className:"hljs-attr",children:"hover:text-white"}),`",\r
        "`,e(s.span,{className:"hljs-attr",children:"active:bg-primary-600"})," ",e(s.span,{className:"hljs-attr",children:"active:text-white"}),`",\r
        `,e(s.span,{className:"hljs-attr",children:"props.disabled"}),' && "',e(s.span,{className:"hljs-attr",children:"cursor-not-allowed"})," ",e(s.span,{className:"hljs-attr",children:"opacity-60"}),`"\r
      )}\r
    />`]}})}}),`\r
  );\r
}\r
\r
<div `,e(s.span,{className:"hljs-keyword",children:"class"}),"=",e(s.span,{className:"hljs-string",children:'"space-x-4"'}),`>\r
  `,e(s.span,{className:"xml",get children(){return[e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"StyledButton"}),">"]}}),"Button",e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"StyledButton"}),">"]}})]}}),`\r
  `,e(s.span,{className:"xml",get children(){return[e(s.span,{className:"hljs-tag",get children(){return["<",e(s.span,{className:"hljs-name",children:"StyledButton"})," ",e(s.span,{className:"hljs-attr",children:"disabled"}),">"]}}),"Disabled",e(s.span,{className:"hljs-tag",get children(){return["</",e(s.span,{className:"hljs-name",children:"StyledButton"}),">"]}})]}}),`\r
</div>;
`]}})}})]}}function c(r,l){throw new Error("Expected "+(l?"component":"object")+" `"+r+"` to be defined: you likely forgot to import, pass, or provide it.")}export{f as default};
