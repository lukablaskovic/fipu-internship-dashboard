import{b8 as $,G as x,_ as I,b9 as M,ba as B,bb as L}from"./BaseButton.69862c3c.js";import{b as h,a as R,_ as T}from"./SectionTitleLineWithButton.752fbc6e.js";import{_ as V}from"./CardBox.d1f964ef.js";import{C as y,D as A}from"./index.abe47e15.js";import{h as D}from"./moment-setup.afefb272.js";import{_ as O,L as U}from"./LoadingOverlay.6bbe752a.js";import{_ as z}from"./BaseButtons.e0ebdabe.js";import{x as l,y as r,z as e,K as k,r as g,j as E,q as S,v as F,H as w,M as P,G as f,A as v,u as m,F as o,J as b,P as q,N as G}from"./vue.f9cfebed.js";import{a as K}from"./LayoutAuthenticated.e295d8f2.js";import"./vendor.15896b3d.js";import"./SnackBar.3cf8abd8.js";const Z={key:0,class:"animate-pulse bg-pulse"},H={__name:"SkeletonLoaderTable",props:{checkable:Boolean},setup(i){const u=i;return(d,t)=>(l(),r("tr",null,[u.checkable?(l(),r("td",Z,t[0]||(t[0]=[e("div",{class:"h-4 w-4 rounded bg-gray-300"},null,-1)]))):k("",!0),t[1]||(t[1]=e("td",{class:"animate-pulse bg-pulse"},[e("div",{class:"h-4 w-24 rounded bg-gray-300"})],-1)),t[2]||(t[2]=e("td",{class:"animate-pulse bg-pulse flex items-center justify-center"},[e("div",{class:"h-8 w-8 rounded-full bg-gray-300"})],-1)),t[3]||(t[3]=e("td",{class:"animate-pulse bg-pulse"},[e("div",{class:"h-4 w-36 rounded bg-gray-300"})],-1)),t[4]||(t[4]=e("td",{class:"animate-pulse bg-pulse"},[e("div",{class:"h-4 w-40 rounded bg-gray-300"})],-1)),t[5]||(t[5]=e("td",{class:"animate-pulse bg-pulse"},[e("div",{class:"h-4 w-40 rounded bg-gray-300"})],-1)),t[6]||(t[6]=e("td",{class:"animate-pulse bg-pulse"},[e("div",{class:"flex gap-2"},[e("div",{class:"h-8 w-8 rounded bg-gray-300"}),e("div",{class:"h-8 w-8 rounded bg-gray-300"})])],-1))]))}},J={key:0},N={"data-label":"Naziv"},Y={"data-label":"Status",class:"flex items-center justify-center"},Q={"data-label":"Poruka"},W={"data-label":"URL",class:"underline text-fipu_dark_blue"},X=["href"],ee={"data-label":"Zadnji put aktivan"},te={class:"before:hidden lg:w-1 whitespace-nowrap"},ae=5,le={__name:"TableMicroservices",props:{checkable:Boolean,services:{type:Object,required:!0}},setup(i){const u=i;let d,t;const p=g(new Date),n=g(E({...u.services}));S(()=>{const s=async()=>{n.value=await y.checkAllServiceStatuses()};d=setInterval(s,ae*60*1e3),s(),t=setInterval(()=>{p.value=new Date},60*100)}),F(()=>{clearInterval(d),clearInterval(t)});let j=s=>D(s).from(p.value);async function C(s){n.value[s].loading=!0;try{let{[s]:a}=await y.checkServiceStatus(s);n.value={...n.value,[s]:{...n.value[s],...a,status_check_timestamp:new Date}},q(n)}finally{n.value[s].loading=!1}}return(s,a)=>(l(),r("table",null,[e("thead",null,[e("tr",null,[i.checkable?(l(),r("th",J)):k("",!0),a[0]||(a[0]=e("th",null,"Naziv",-1)),a[1]||(a[1]=e("th",null,"Status",-1)),a[2]||(a[2]=e("th",null,"Poruka",-1)),a[3]||(a[3]=e("th",null,"URL",-1)),a[4]||(a[4]=e("th",null,"Zadnja provjera",-1)),a[5]||(a[5]=e("th",null,"Akcije",-1))])]),e("tbody",null,[(l(!0),r(w,null,P(n.value,(c,_)=>(l(),r(w,null,[c.loading?(l(),f(H,{key:"skeleton-"+_,checkable:i.checkable},null,8,["checkable"])):(l(),r("tr",{key:_},[i.checkable?(l(),f(O,{key:0})):k("",!0),e("td",N,v(_),1),e("td",Y,[c.status=="OK"?(l(),f(h,{key:0,icon:m($),color:"success"},null,8,["icon"])):(l(),f(h,{key:1,icon:m(x),color:"danger"},null,8,["icon"]))]),e("td",Q,v(c.message),1),e("td",W,[e("a",{href:c.url,target:"_blank"},v(c.url),9,X)]),e("td",ee,v(m(j)(c.status_check_timestamp)),1),e("td",te,[o(z,{type:"justify-start lg:justify-end","no-wrap":""},{default:b(()=>[o(I,{color:"fipu_blue",icon:m(M),small:"",onClick:se=>C(_)},null,8,["icon","onClick"])]),_:2},1024)])]))],64))),256))])]))}},_e={__name:"MicroservicesView",setup(i){const u=g({}),d=g(!0);return S(async()=>{try{u.value=await y.checkAllServiceStatuses()}catch(t){console.error("Failed to fetch service statuses:",t)}finally{d.value=!1}}),(t,p)=>(l(),r("div",null,[o(K,null,{default:b(()=>[o(U,{"is-active":d.value,title:"U\u010Ditavanje...",description:"Mo\u017Ee potrajati nekoliko sekundi, molimo ne zatvarajte stranicu."},null,8,["is-active"]),o(R,null,{default:b(()=>[o(T,{icon:m(B),title:"Mikroservisi",main:""},null,8,["icon"]),o(A,{color:"info",icon:m(L)},{default:b(()=>p[0]||(p[0]=[e("b",null,"Responsive table.",-1),G(" Collapses on mobile ")])),_:1},8,["icon"]),Object.keys(u.value).length?(l(),f(V,{key:0,"has-table":""},{default:b(()=>[o(le,{services:u.value},null,8,["services"])]),_:1})):k("",!0)]),_:1})]),_:1})]))}};export{_e as default};
