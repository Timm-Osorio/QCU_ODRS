import{s as K,o as X,e as Z,n as ee}from"../chunks/scheduler.MQulC-dI.js";import{S as Q,i as U,k as I,l as k,o as R,q as C,r as E,u as L,s as _,e as u,t as A,f as b,c as p,a as w,m as J,b as j,d as f,n as v,g as B,h as l,j as te}from"../chunks/index.KfVzBilI.js";import{S as ae}from"../chunks/SectionWrapper.BeRDYptP.js";import{P as se}from"../chunks/pHeader2.CjZ332va.js";import{R as re}from"../chunks/RegistrarSidebar.B9PcgbKw.js";function ne(d){let e,s,t,a,i,n,m,N="DASHBOARD",T,h,D=d[0].toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})+"",y,V,x,O=d[1].toLocaleDateString([],{month:"long",day:"numeric",year:"numeric"})+"",q,H,g,W=d[2].toLocaleDateString([],{weekday:"long"})+"",M,P,$,Y='<div class="card w-96 bg-base-100 shadow-xl"><div class="card-body items-center text-center"><h2 class="card-title">Pending Request</h2> <p>10</p></div></div> <div class="card w-96 bg-base-100 shadow-xl"><div class="card-body items-center text-center"><h2 class="card-title">Completed Request</h2> <p>10</p></div></div> <div class="card w-96 bg-base-100 shadow-xl"><div class="card-body items-center text-center"><h2 class="card-title">Scheduled Request</h2> <p>10</p></div></div>',S;return e=new se({}),a=new re({}),{c(){I(e.$$.fragment),s=_(),t=u("div"),I(a.$$.fragment),i=_(),n=u("div"),m=u("h1"),m.textContent=N,T=_(),h=u("div"),y=A(D),V=_(),x=u("div"),q=A(O),H=_(),g=u("div"),M=A(W),P=_(),$=u("div"),$.innerHTML=Y,this.h()},l(r){k(e.$$.fragment,r),s=b(r),t=p(r,"DIV",{class:!0});var o=w(t);k(a.$$.fragment,o),i=b(o),n=p(o,"DIV",{class:!0});var c=w(n);m=p(c,"H1",{class:!0,"data-svelte-h":!0}),J(m)!=="svelte-14xkksl"&&(m.textContent=N),T=b(c),h=p(c,"DIV",{class:!0});var z=w(h);y=j(z,D),z.forEach(f),V=b(c),x=p(c,"DIV",{class:!0});var F=w(x);q=j(F,O),F.forEach(f),H=b(c),g=p(c,"DIV",{class:!0});var G=w(g);M=j(G,W),G.forEach(f),P=b(c),$=p(c,"DIV",{class:!0,"data-svelte-h":!0}),J($)!=="svelte-152i74d"&&($.innerHTML=Y),c.forEach(f),o.forEach(f),this.h()},h(){v(m,"class","pl-0 text-[30px] text-black font-bold"),v(h,"class","text-[90px] text-black font-bold text-center"),v(x,"class","text-[30px] text-black font-semibold text-center"),v(g,"class","text-[30px] text-black font-semibold text-center"),v($,"class","flex flex-row gap-5 mt-5"),v(n,"class","flex flex-col flex-1 mx-auto w-full"),v(t,"class","flex flex-row gap-5 mx-auto w-full")},m(r,o){R(e,r,o),B(r,s,o),B(r,t,o),R(a,t,null),l(t,i),l(t,n),l(n,m),l(n,T),l(n,h),l(h,y),l(n,V),l(n,x),l(x,q),l(n,H),l(n,g),l(g,M),l(n,P),l(n,$),S=!0},p(r,o){(!S||o&1)&&D!==(D=r[0].toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})+"")&&te(y,D)},i(r){S||(C(e.$$.fragment,r),C(a.$$.fragment,r),S=!0)},o(r){E(e.$$.fragment,r),E(a.$$.fragment,r),S=!1},d(r){r&&(f(s),f(t)),L(e,r),L(a)}}}function le(d){let e,s;return e=new ae({props:{$$slots:{default:[ne]},$$scope:{ctx:d}}}),{c(){I(e.$$.fragment)},l(t){k(e.$$.fragment,t)},m(t,a){R(e,t,a),s=!0},p(t,[a]){const i={};a&33&&(i.$$scope={dirty:a,ctx:t}),e.$set(i)},i(t){s||(C(e.$$.fragment,t),s=!0)},o(t){E(e.$$.fragment,t),s=!1},d(t){L(e,t)}}}function ie(d,e,s){let t=new Date,a=new Date,i=new Date;const n=()=>{s(0,a=new Date)},m=setInterval(n,1e3);return X(()=>{n()}),Z(()=>{clearInterval(m)}),[a,t,i]}class oe extends Q{constructor(e){super(),U(this,e,ie,le,K,{})}}function ce(d){let e,s,t;return s=new oe({}),{c(){e=u("main"),I(s.$$.fragment),this.h()},l(a){e=p(a,"MAIN",{class:!0});var i=w(e);k(s.$$.fragment,i),i.forEach(f),this.h()},h(){v(e,"class","flex flex-col")},m(a,i){B(a,e,i),R(s,e,null),t=!0},p:ee,i(a){t||(C(s.$$.fragment,a),t=!0)},o(a){E(s.$$.fragment,a),t=!1},d(a){a&&f(e),L(s)}}}class ve extends Q{constructor(e){super(),U(this,e,null,ce,K,{})}}export{ve as component};