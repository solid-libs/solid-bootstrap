import{v as b,w as d,A as C,s as v,m as i,x as g,u as w,F as u,c as r,S as x,j as A,q as c,o as P,y as $,k,d as N,t as S}from"./index.7b72cfc3.js";const L=S('<div role="alert"></div>'),y=b("h4"),B=d("alert-heading",{Component:y}),H=d("alert-link",{Component:C}),_={variant:"primary",defaultShow:!0,transition:u,closeLabel:"Close alert"},j=m=>{const[e,n]=v(i(_,m),["bsPrefix","children","defaultShow","show","closeLabel","closeVariant","class","className","children","variant","onClose","dismissible","transition"]),[h,l]=g(()=>e.show,()=>e.defaultShow,e.onClose),t=w(e.bsPrefix,"alert"),f=s=>{l&&l(!1,s)},a=e.transition===!0?u:e.transition,o=()=>(()=>{const s=L.cloneNode(!0);return A(s,a?{}:n,!1,!0),c(s,(()=>{const p=P(()=>!!e.dismissible,!0);return()=>p()&&r($,{onClick:f,get["aria-label"](){return e.closeLabel},get variant(){return e.closeVariant}})})(),null),c(s,()=>e.children,null),k(()=>s.className=N(e.class,e.className,t,e.variant&&`${t}-${e.variant}`,e.dismissible&&`${t}-dismissible`)),s})();return r(x,{when:!!a,get fallback(){return e.show?o:null},get children(){return r(a,i({unmountOnExit:!0},n,{ref(s){undefined=s},get in(){return h()},children:o}))}})};var F=Object.assign(j,{Link:H,Heading:B});export{F as A};