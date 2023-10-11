import{f as t,ab as p,o as d,c as f,j as m,m as v,aj as S,t as h}from"./index.46b6df7f.js";import{G as T}from"./GithubSource.4ed1a23d.js";import{a as j}from"./Overlay.aea51097.js";import"./mergeOptionsWithPopperConfig.c1f38e41.js";const E=h('<div class="row gy-4"><div><h2>Overlays (core)</h2><p class="lead">A powerful and flexible overlay component for showing things over, and next to, other things.</p><p>This example is styled to look like a tooltip (with an adaptive arrow). It also demonstates using an optional <code>&lt;Transition /></code>.</p><p>Click the button to cycle through placement options.</p></div><div class="d-flex justify-content-center"><button class="btn btn-primary">I am an overlay target</button></div><div></div></div>'),I=h('<div class="tooltip bs-tooltip-auto show"><div class="tooltip-arrow"></div><div class="tooltip-inner">I am a overlay!</div></div>'),u=["top","right","bottom","left"],G=()=>{const[g,y]=t(),[b,$]=t(null),[a,i]=t(!1),[e,r]=t();function w(){a()?e()==="left"?i(!1):r(u[u.indexOf(e())+1]):(r("top"),i(!0))}return(()=>{const o=E.cloneNode(!0),l=o.firstChild,C=l.firstChild,n=l.nextSibling,c=n.firstChild,_=n.nextSibling;return p($,o),d(l,f(T,{name:"CoreOverlayDocs"}),C),c.$$click=w,p(y,c),d(_,f(j,{get show(){return a()},offset:[0,5],container:b,target:g,get placement(){return e()},flip:!0,children:(x,k)=>(()=>{const s=I.cloneNode(!0),O=s.firstChild;return m(s,v(x),!1,!0),m(O,v(k),!1,!1),s})()})),o})()};S(["click"]);export{G as CoreOverlayDocs,G as default};
