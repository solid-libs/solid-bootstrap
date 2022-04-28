import{f as t,q as d,c as p,j as f,ah as O,t as h}from"./index.7b72cfc3.js";import{G as k}from"./GithubSource.1f09f9a8.js";import{O as S}from"./Overlay.4bbf2801.js";import"./store.c1211f7e.js";const T=h('<div class="row gy-4"><div><h2>Overlays (core)</h2><p class="lead">A powerful and flexible overlay component for showing things over, and next to, other things.</p><p>This example is styled to look like a tooltip (with an adaptive arrow). It also demonstates using an optional <code>&lt;Transition /></code>.</p><p>Click the button to cycle through placement options.</p></div><div class="d-flex justify-content-center"><button class="btn btn-primary">I am an overlay target</button></div><div></div></div>'),E=h('<div class="tooltip bs-tooltip-auto show"><div class="tooltip-arrow"></div><div class="tooltip-inner">I am a overlay!</div></div>'),v=["top","right","bottom","left"],D=()=>{const[m,u]=t(),[g,y]=t(null),[a,i]=t(!1),[e,n]=t();function $(){a()?e()==="left"?i(!1):n(v[v.indexOf(e())+1]):(n("top"),i(!0))}return(()=>{const o=T.cloneNode(!0),l=o.firstChild,b=l.firstChild,r=l.nextSibling,c=r.firstChild,w=r.nextSibling;return y(o),d(l,p(k,{name:"CoreOverlayDocs"}),b),c.$$click=$,u(c),d(w,p(S,{get show(){return a()},offset:[0,5],container:g,target:m,get placement(){return e()},flip:!0,children:(C,_)=>(()=>{const s=E.cloneNode(!0),x=s.firstChild;return f(s,C,!1,!0),f(x,_,!1,!1),s})()})),o})()};O(["click"]);export{D as CoreOverlayDocs,D as default};