import{t as l,s as a,m as s,a as t,v as u}from"./vendor.e0c45427.js";import{B as d}from"./Layout.3d3f6f28.js";import{B as g}from"./ButtonGroup.538e9f0a.js";import{D as n}from"./Dropdown.d0d776da.js";const p=l('<span class="visually-hidden"></span>'),c={toggleLabel:"Toggle dropdown",type:"button"},v=i=>{const[e,r]=a(s(c,i),["id","bsPrefix","size","variant","title","type","toggleLabel","children","onClick","href","target","menuRole","renderMenuOnMount","rootCloseEvent"]);return t(n,s(r,{as:g,get children(){return[t(d,{get size(){return e.size},get variant(){return e.variant},get disabled(){return r.disabled},get bsPrefix(){return e.bsPrefix},get href(){return e.href},get target(){return e.target},get onClick(){return e.onClick},get type(){return e.type},get children(){return e.title}}),t(n.Toggle,{split:!0,get id(){return e.id},get size(){return e.size},get variant(){return e.variant},get disabled(){return r.disabled},get childBsPrefix(){return e.bsPrefix},get children(){const o=p.cloneNode(!0);return u(o,()=>e.toggleLabel),o}}),t(n.Menu,{get role(){return e.menuRole},get renderOnMount(){return e.renderMenuOnMount},get rootCloseEvent(){return e.rootCloseEvent},get children(){return e.children}})]}}))};export{v as S};