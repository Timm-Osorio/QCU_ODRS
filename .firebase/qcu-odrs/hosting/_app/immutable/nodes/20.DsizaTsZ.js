import{s as J,n as Z}from"../chunks/scheduler.MQulC-dI.js";import{S as K,i as X,k as I,l as N,o as U,q as B,r as G,u as V,s as E,e as p,f as q,c as _,a as C,m as R,d as m,n as T,g as O,h as i,A as ee,t as W,b as j,p as te}from"../chunks/index.KfVzBilI.js";import{e as z}from"../chunks/each.D6YF6ztN.js";import{S as ae}from"../chunks/SectionWrapper.BeRDYptP.js";import{H as ne}from"../chunks/Header.CECbfSZC.js";import{g as re}from"../chunks/entry.Cde8vRDK.js";import{S as le}from"../chunks/StudDbBtn.v9ysMBQd.js";function P(c,e,n){const a=c.slice();return a[2]=e[n],a}function F(c){let e,n,a=c[2].name+"",r,s,u,H=c[2].req+"",w,g,d,L=`<box-icon name="mail-send"></box-icon>
                          Request`,A,v,$;function D(){return c[1](c[2])}return{c(){e=p("tr"),n=p("td"),r=W(a),s=E(),u=p("td"),w=W(H),g=E(),d=p("button"),d.innerHTML=L,A=E(),this.h()},l(b){e=_(b,"TR",{class:!0});var f=C(e);n=_(f,"TD",{});var x=C(n);r=j(x,a),x.forEach(m),s=q(f),u=_(f,"TD",{});var S=C(u);w=j(S,H),S.forEach(m),g=q(f),d=_(f,"BUTTON",{class:!0,"data-svelte-h":!0}),R(d)!=="svelte-1wsoa8q"&&(d.innerHTML=L),A=q(f),f.forEach(m),this.h()},h(){T(d,"class","btn btn-success my-2 glass text-black"),T(e,"class","hover:bg-slate-200")},m(b,f){O(b,e,f),i(e,n),i(n,r),i(e,s),i(e,u),i(u,w),i(e,g),i(e,d),i(e,A),v||($=te(d,"click",D),v=!0)},p(b,f){c=b},d(b){b&&m(e),v=!1,$()}}}function se(c){let e,n,a,r,s,u,H='<figure><img src="/QCU-Build.png" class="w-full h-full"/></figure> <div class="card-body flex justify-center items-center"><h1 class="card-title text-5xl font-light italic">ONLINE DOCUMENT REQUEST SYSTEM</h1></div>',w,g,d,L="AVAILABLE DOCUMENTS",A,v,$,D,b="<tr><th>Document</th> <th>Requirement</th></tr>",f,x,S;e=new ne({}),a=new le({});let y=z(c[0]),o=[];for(let t=0;t<y.length;t+=1)o[t]=F(P(c,y,t));return{c(){I(e.$$.fragment),n=E(),I(a.$$.fragment),r=E(),s=p("main"),u=p("div"),u.innerHTML=H,w=E(),g=p("div"),d=p("h2"),d.textContent=L,A=E(),v=p("div"),$=p("table"),D=p("thead"),D.innerHTML=b,f=E(),x=p("tbody");for(let t=0;t<o.length;t+=1)o[t].c();this.h()},l(t){N(e.$$.fragment,t),n=q(t),N(a.$$.fragment,t),r=q(t),s=_(t,"MAIN",{class:!0});var h=C(s);u=_(h,"DIV",{class:!0,"data-svelte-h":!0}),R(u)!=="svelte-k2b6sw"&&(u.innerHTML=H),w=q(h),g=_(h,"DIV",{class:!0});var l=C(g);d=_(l,"H2",{class:!0,"data-svelte-h":!0}),R(d)!=="svelte-1p7zwgx"&&(d.textContent=L),A=q(l),v=_(l,"DIV",{class:!0});var M=C(v);$=_(M,"TABLE",{class:!0});var k=C($);D=_(k,"THEAD",{"data-svelte-h":!0}),R(D)!=="svelte-m9p98h"&&(D.innerHTML=b),f=q(k),x=_(k,"TBODY",{});var Q=C(x);for(let Y=0;Y<o.length;Y+=1)o[Y].l(Q);Q.forEach(m),k.forEach(m),M.forEach(m),l.forEach(m),h.forEach(m),this.h()},h(){T(u,"class","card w-3/4 h-28 shadow-xl image-full"),T(d,"class","card-title bg-slate-900 rounded-md p-2 text-white glass"),T($,"class","table"),T(v,"class","overflow-x-auto pb-3"),T(g,"class","card card-compact w-3/4 bg-slate-100 mt-3"),T(s,"class","flex flex-col items-center mt-5")},m(t,h){U(e,t,h),O(t,n,h),U(a,t,h),O(t,r,h),O(t,s,h),i(s,u),i(s,w),i(s,g),i(g,d),i(g,A),i(g,v),i(v,$),i($,D),i($,f),i($,x);for(let l=0;l<o.length;l+=1)o[l]&&o[l].m(x,null);S=!0},p(t,h){if(h&1){y=z(t[0]);let l;for(l=0;l<y.length;l+=1){const M=P(t,y,l);o[l]?o[l].p(M,h):(o[l]=F(M),o[l].c(),o[l].m(x,null))}for(;l<o.length;l+=1)o[l].d(1);o.length=y.length}},i(t){S||(B(e.$$.fragment,t),B(a.$$.fragment,t),S=!0)},o(t){G(e.$$.fragment,t),G(a.$$.fragment,t),S=!1},d(t){t&&(m(n),m(r),m(s)),V(e,t),V(a,t),ee(o,t)}}}function ie(c){let e,n;return e=new ae({props:{$$slots:{default:[se]},$$scope:{ctx:c}}}),{c(){I(e.$$.fragment)},l(a){N(e.$$.fragment,a)},m(a,r){U(e,a,r),n=!0},p(a,[r]){const s={};r&32&&(s.$$scope={dirty:r,ctx:a}),e.$set(s)},i(a){n||(B(e.$$.fragment,a),n=!0)},o(a){G(e.$$.fragment,a),n=!1},d(a){V(e,a)}}}function oe(c){return[[{id:"Diploma",name:"TOR / Diploma",req:"Graduated and Complete Address"},{id:"TOR(Undergrad)",name:"TOR (Under Graduate)",req:"Last Academic Year Attended and Complete Address"},{id:"GradeSlip",name:"Grade Slip",req:"Academic Year and Semester"},{id:"Certification",name:"Other Certifications",req:"Office requesting the document (e.g., DSWD, CHED)"},{id:"Authentication",name:"Authentication / Certified True Copy",req:"Clear copy of the Document and bring the Original Copy upon Claiming"}],a=>re(`/Student/DocumentRequest/${a.id}`)]}class ce extends K{constructor(e){super(),X(this,e,oe,ie,J,{})}}function de(c){let e,n,a;return n=new ce({}),{c(){e=p("main"),I(n.$$.fragment),this.h()},l(r){e=_(r,"MAIN",{class:!0});var s=C(e);N(n.$$.fragment,s),s.forEach(m),this.h()},h(){T(e,"class","flex flex-col")},m(r,s){O(r,e,s),U(n,e,null),a=!0},p:Z,i(r){a||(B(n.$$.fragment,r),a=!0)},o(r){G(n.$$.fragment,r),a=!1},d(r){r&&m(e),V(n)}}}class $e extends K{constructor(e){super(),X(this,e,null,de,J,{})}}export{$e as component};