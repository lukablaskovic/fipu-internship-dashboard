import{x as r,y as l,C as u,F as x,J as d,z as n,P as v,A as m,u as c,I as _,r as h,G as p,U as k,a0 as y,T as g,H as B,M as w}from"./vue.7e7f5872.js";import{_ as b,i as S,e as $,q as C}from"./index.c2c56019.js";const A="/FIPU_praksa_logo_transparent.svg",E={__name:"BaseDivider",props:{navBar:Boolean},setup(e){const t=e;return(a,o)=>(r(),l("hr",{class:u([t.navBar?"hidden lg:block lg:my-0.5 dark:border-slate-700":"my-6 -mx-6 dark:border-slate-800","border-t border-gray-100"])},null,2))}},F={class:"text-center md:text-left"},T=n("a",{href:"https://fipu.unipu.hr/fipu",target:"_blank"},"Fakultet informatike u Puli",-1),q=n("div",{class:"md:py-2"},[n("p",null,"FIPU Praksa v1.0.0")],-1),j={__name:"FooterBar",setup(e){const t=new Date().getFullYear();return(a,o)=>(r(),l("footer",{class:u(["py-2 px-6",c(S)])},[x(b,null,{default:d(()=>[n("div",F,[n("b",null,[v("\xA9"+m(c(t))+", ",1),T]),_(a.$slots,"default")]),q]),_:3})],2))}},P={class:"flex items-center justify-center mb-3"},I={class:"text-2xl"},G={__name:"CardBoxComponentTitle",props:{title:{type:String,required:!0}},setup(e){return(t,a)=>(r(),l("div",P,[n("h1",I,m(e.title),1),_(t.$slots,"default")]))}},N={__name:"SnackBarItem",props:{lifetime:{type:Number,required:!0,validator:e=>e>=0},timestamp:{type:Number,required:!0},text:{type:String,required:!0},color:{type:String,required:!0,validator:e=>["contrast","info","success","warning","danger"].indexOf(e)>-1}},emits:["cancel"],setup(e,{emit:t}){const a=e,o=t,i=h(!1);setTimeout(()=>{i.value=!0}),a.lifetime&&setTimeout(()=>{i.value=!1,s()},a.lifetime);const s=()=>{setTimeout(()=>{o("cancel",a.timestamp)},250)},f=()=>{i.value=!1,a.lifetime||s()};return(M,U)=>(r(),p(g,{"enter-active-class":"animate-fade-in-up-fast","leave-active-class":"animate-fade-out-down-fast"},{default:d(()=>[k(n("div",{class:u([c($)(e.color,!1,!0),"self-end my-3 px-6 py-4 shadow overflow-hidden w-full md:rounded-xl md:w-auto md:max-w-full cursor-pointer pointer-events-auto"]),onClick:f},m(e.text),3),[[y,i.value]])]),_:1}))}},D={class:"fixed inset-0 flex flex-col-reverse p-9 overflow-hidden z-100 pointer-events-none"},H={__name:"SnackBar",setup(e){const t=C(),a=o=>{t.cancelMessage(o)};return(o,i)=>(r(),l("div",D,[(r(!0),l(B,null,w(c(t).messages,s=>(r(),p(N,{key:s.timestamp,timestamp:s.timestamp,lifetime:s.lifetime,text:s.text,color:s.color,onCancel:a},null,8,["timestamp","lifetime","text","color"]))),128))]))}};export{A as F,j as _,H as a,G as b,E as c};
