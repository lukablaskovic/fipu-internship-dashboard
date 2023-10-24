import{a as j}from"./LayoutAuthenticated.1a7d2edd.js";import{y as i,u as e,U as $,W as M,C as u,K as c,z as r,F as d,x as l,H as h,M as b,A as g,r as z,V as S,J as p,G as _,I as C,N as U,O,q as B}from"./vue.7e7f5872.js";import{d as m,v as t,b as x,m as f,R as I,l as w}from"./index.f895ba88.js";import{b2 as A,a4 as D,b3 as N,b4 as L,b5 as V,b6 as P,b7 as E,b8 as K}from"./BaseButton.d2d92940.js";import{h as R}from"./moment-setup.c6085169.js";import"./SnackBar.fa83ab79.js";import"./BaseButtons.06021fb9.js";import"./CardBox.efcd30a0.js";import"./vendor.4c47bd8f.js";const T={class:"flex flex-row items-center px-3 py-3 bg-gray-200 dark:bg-slate-900/50"},F={key:1,class:"ml-3"},q={key:2,class:"h-10 w-full flex items-center justify-center font-medium"},G={mounted(){document.addEventListener("keydown",this.handleKeyPress)},unmounted(){document.removeEventListener("keydown",this.handleKeyPress)},methods:{async checkNewMessage(){t.content.length==1&&await t.updateUserActivity(!0),t.content.length==0&&await t.updateUserActivity(!1)},handleKeyPress(a){a.key==="Enter"&&t.content.length>0&&!t.inputDelayed&&(a.preventDefault(),t.c.status!=="archived"&&document.getElementById("sendButton").click())}}},W=Object.assign(G,{__name:"MessageInput",setup(a){return(s,n)=>(l(),i("div",T,[e(t).c.status!="archived"?$((l(),i("input",{key:0,onInput:n[0]||(n[0]=o=>s.checkNewMessage()),"onUpdate:modelValue":n[1]||(n[1]=o=>e(t).content=o),type:"text",class:u(["border-none bg-transparent focus:outline-none text-sm items-center w-full border text-fipu_gray dark:text-gray-300 bg-white dark:bg-slate-800 rounded-3xl h-12 px-6",e(t).inputDelayed?"opacity-40 cursor-not-allowed":"dark:hover:bg-slate-700/40 dark:focus:bg-slate-800 hover:bg-gray-50 focus:bg-white"]),placeholder:"Type your message...."},null,34)),[[M,e(t).content]]):c("",!0),e(t).c.status!="archived"?(l(),i("div",F,[r("button",{id:"sendButton",onClick:n[2]||(n[2]=o=>e(t).content.length>0&&!e(t).inputDelayed?e(t).sendMessage():""),class:u(["flex items-center justify-center h-10 w-10 rounded-full bg-gray-300 text-fipu_gray dark:bg-gray-800 dark:text-gray-300",e(t).content.length>0&&!e(t).inputDelayed?"hover:bg-white dark:hover:bg-gray-700/50":"cursor-not-allowed opacity-40"])},[d(m,{path:e(A),size:20},null,8,["path"])],2)])):(l(),i("div",q,"Ovaj razgovor je arhiviran."))]))}}),H=x(W,[["__scopeId","data-v-697c67a9"]]),J={key:0,class:"flex items-center justify-between mt-5 relative"},Q=["onClick"],X={__name:"ConversationsGroupsNavbar",setup(a){const s=[{name:"Svi razgovori",type:"normal"},{name:"Ozna\u010Deni",type:"starred"},{name:"Arhivirani",type:"archived"}];return(n,o)=>e(f).currentUser.account_type=="admin"?(l(),i("div",J,[(l(),i(h,null,b(s,v=>r("a",{class:u(["flex items-center justify-center pb-3 text-xs relative cursor-pointer",e(t).grouping==v.type?"text-fipu_blue font-semibold":"text-gray-500 dark:text-gray-400 font-normal hover:underline"]),onClick:Ke=>e(t).grouping=v.type},[r("span",null,g(v.name),1)],10,Q)),64)),r("span",{class:u([[{"left-0 right-0 w-6 bottom-0":e(t).grouping=="normal"},{"left-1/2 right-0 -translate-x-1/2 w-12 bottom-0 ml-2":e(t).grouping=="starred"},{"left-full w-6 bottom-0 -ml-6":e(t).grouping=="archived"}],"absolute h-1 bg-fipu_blue rounded-full transition-all duration-300"])},null,2)])):c("",!0)}},Y={class:"absolute bottom-0 right-0 lg:ml-0 lg:mr-2 flex items-center justify-center gap-2 w-full"},Z=["value"],ee={data(){return{selectedOption:null,options:[]}},async mounted(){this.options=await t.getUsersWithoutConversations()}},te=Object.assign(ee,{__name:"AddConversationButton",setup(a){const s=z(null);return(n,o)=>(l(),i("div",{class:u(["h-full relative pt-2",n.options.length==0?"opacity-40 pointer-events-none ":""])},[r("div",Y,[$(r("select",{"onUpdate:modelValue":o[0]||(o[0]=v=>s.value=v),class:"border-none bg-transparent focus:outline-none text-sm items-center w-full border text-fipu_gray dark:text-gray-300 bg-white hover:bg-gray-50 focus:bg-white dark:bg-slate-800 dark:hover:bg-slate-700/40 dark:focus:bg-slate-800 rounded-3xl"},[(l(!0),i(h,null,b(n.options,v=>(l(),i("option",{value:v.id},g(v.ime+" "+v.prezime),9,Z))),256))],512),[[S,s.value]]),r("button",{class:u([s.value==null?"bg-fipu_blue/50 cursor-not-allowed":"bg-fipu_dark_blue hover:bg-fipu_blue dark:hover:bg-fipu_blue","flex items-center justify-center shadow-sm min-w-[40px] h-[40px] w-[40px] drop-shadow text-white rounded-full"]),onClick:o[1]||(o[1]=v=>s.value!=null?e(t).addConversation(s.value):"")},[d(m,{path:e(D),size:20},null,8,["path"])],2)])],2))}}),se={class:"flex flex-row items-center -mx-2 lg:-mx-0"},re=r("div",{class:"flex flex-row items-center"},[r("div",{class:"text-xl font-semibold text-fipu_gray dark:text-gray-300"},"Poruke")],-1),ae={__name:"ConversationsSearch",setup(a){return(s,n)=>(l(),i("div",se,[re,c("",!0)]))}},ne={class:"absolute text-xs text-gray-500 font-medium right-2 lg:right-0 top-2 lg:top-0 lg:mr-4 lg:mt-3"},le=["src"],oe={key:1,class:"flex items-center justify-center animate-ping h-1.5 w-1.5 bg-rose-500 text-white font-medium text-xs rounded-full absolute -top-1 -right-1"},ie={key:0,class:"absolute right-1 lg:right-3 bottom-0 lg:bottom-2 flex gap-0 lg:gap-2"},ue={class:"flex flex-col ml-3 w-full"},de={class:"flex items-center"},ce={class:"text-sm font-medium truncate w-40"},ve={class:"text-xs truncate w-40"},fe={props:{name:{type:String,default:""},selected:{type:Boolean,default:!1},conversation:{type:Object,default:{}}},data(){return{timestamp:"",last_text:null,c:null,intervalId:null,hover:!1,cstatus:this.conversation.status}},beforeDestroy(){clearInterval(this.intervalId)},async mounted(){clearInterval(this.intervalId),this.last_text=await t.getLastMessage(this.conversation.user_1_id==f.currentUser.id?this.conversation.user_2_id:this.conversation.user_1_id),this.c=t.getUserDataFromConversationItem(this.conversation),this.timestamp=this.last_text!=null&&this.last_text.timestamp!=null?R(this.last_text.timestamp).fromNow():""},methods:{checkNewMessage(){return this.conversation.user_1_id==f.currentUser.id?this.conversation.user_1_last_message_read_id<this.conversation.user_2_last_message_read_id:this.conversation.user_1_last_message_read_id>this.conversation.user_2_last_message_read_id},getAvatar(a){return a!=null?a.avatar:""}}},ge=Object.assign(fe,{__name:"ConversationItem",setup(a){return(s,n)=>s.cstatus==e(t).grouping||e(f).currentUser.account_type!="admin"?(l(),i("div",{key:0,class:"flex flex-col -mx-5 lg:-mx-4 mt-1 lg:mt-2",onClick:n[6]||(n[6]=o=>s.hover?"":e(t).selectConversation(s.c.id,a.conversation))},[r("div",{class:u(["flex items-center pt-2.5 pb-2.5 lg:pt-4 lg:pb-4 relative hover:bg-white dark:hover:bg-gray-800/25",a.selected?"border-l-2 bg-gradient-to-r pl-1.5 pr-2 lg:pr-4 lg:pl-3.5 from-sky-200 dark:from-sky-950/50 to-transparent border-fipu_dark_blue dark:border-fipu_dark_blue":"pl-2 pr-2 lg:pr-4 lg:pl-4 hover:rounded"])},[r("div",ne,g(s.timestamp),1),d(e(I),{class:"cursor-default",to:s.c!=null&&e(f).currentUser.account_type=="admin"?"/studenti/"+s.c.process_instance_id:""},{default:p(()=>[r("div",{class:u([e(f).currentUser.account_type=="admin"?"cursor-pointer hover:scale-105 transition-all":"cursor-default","flex items-center justify-center h-9 w-9 lg:h-10 lg:w-10 rounded-full bg-fipu_blue text-white dark:text-fipu_gray dark:font-bold font-medium flex-shrink-0 relative"])},[s.getAvatar(s.c)!=""?(l(),i("img",{key:0,class:"absolute rounded-full aspect-square h-9 w-9 lg:h-10 lg:w-10",src:s.getAvatar(s.c),alt:""},null,8,le)):c("",!0),r("div",null,g(s.c!=null?s.c.ime[0]:""),1),s.checkNewMessage()&&a.conversation.id!=e(t).selectedConversationID?(l(),i("div",oe)):c("",!0)],2)]),_:1},8,["to"]),e(f).currentUser.account_type=="admin"?(l(),i("div",ie,[r("div",{onMouseover:n[0]||(n[0]=o=>s.hover=!0),onMouseleave:n[1]||(n[1]=o=>s.hover=!1),onClick:n[2]||(n[2]=o=>{s.cstatus=="stared"?s.cstatus="normal":s.cstatus="starred",e(t).updateConversationStatus("starred",a.conversation)})},[d(m,{class:"hover:text-fipu_dark_blue hover:cursor-pointer",size:e(w).isLg?22:18,path:a.conversation.status=="starred"&&s.cstatus=="starred"||s.cstatus=="starred"?e(N):e(L)},null,8,["size","path"])],32),r("div",{onMouseover:n[3]||(n[3]=o=>s.hover=!0),onMouseleave:n[4]||(n[4]=o=>s.hover=!1),onClick:n[5]||(n[5]=o=>{s.cstatus=="archived"?s.cstatus="normal":s.cstatus="archived",e(t).updateConversationStatus("archived",a.conversation)})},[d(m,{class:"hover:text-fipu_dark_blue hover:cursor-pointer",size:e(w).isLg?22:18,path:a.conversation.status=="archived"&&s.cstatus=="archived"||s.cstatus=="archived"?e(V):e(P)},null,8,["size","path"])],32)])):c("",!0),r("div",ue,[r("div",de,[r("div",ce,g(s.c!=null?s.c.ime+" "+s.c.prezime:""),1)]),r("div",ve,g(s.last_text!=null?s.last_text.content:""),1)])],2)])):c("",!0)}}),pe={class:"absolute top-0 -right-8 lg:hidden"},_e={class:"flex flex-col w-full h-full pl-1 lg:pl-4 pr-1 lg:pr-4 py-4 -mr-4"},me={key:0,class:"flxe flex-col"},he={__name:"ConversationsSideBar",setup(a){return(s,n)=>(l(),i("div",{class:u(["flex flex-row flex-shrink-0 bg-gray-100 dark:bg-gray-900 p-4 absolute lg:relative h-full min-w-[256px] w-64 sm:w-80 md:w-96 transition-all duration-500 lg:duration-0 z-20",[e(t).collapsed?"-left-64 sm:-left-80 md:-left-96 lg:-left-0":"-left-0"]])},[r("div",pe,[r("div",{class:"w-8 h-8 flex justify-center items-center rounded-full",onClick:n[0]||(n[0]=o=>e(t).collapsed=!e(t).collapsed)},[d(m,{class:"hover:text-fipu_dark_blue hover:cursor-pointer",w:"40",h:"40",size:36,path:e(t).collapsed?e(E):e(K)},null,8,["path"])])]),r("div",_e,[d(ae),d(X),e(t).update?(l(),i("div",me,[(l(!0),i(h,null,b(e(t).conversations,o=>(l(),_(ge,{conversation:o,selected:e(t).selectedConversationID==o.id},null,8,["conversation","selected"]))),256))])):c("",!0),e(t).update?(l(),_(te,{key:1})):c("",!0)])],2))}},be={},ye={class:"flex flex-col grow"},xe={class:"flex flex-col grow justify-end bg-white dark:bg-slate-900/25 overflow-hidden relative"};function we(a,s){return l(),i("div",ye,[r("div",xe,[C(a.$slots,"default")])])}const k=x(be,[["render",we]]);const y=a=>(U("data-v-0800cc8e"),a=a(),O(),a),ke={class:"flex flex-col grow h-[200px] overflow-y-auto bg-white dark:bg-slate-900/25 px-4 py-3 gap-1 scrollbar-none",id:"messageContainer"},$e={class:"flex flex-col h-full gap-1"},Ce=y(()=>r("div",{class:"grow opacity-0"},"\xA0",-1)),Ie=y(()=>r("span",null,"Tipkanje",-1)),je={key:0,class:"w-0 h-0 overflow-hidden"},Me=y(()=>r("span",{class:"loading-dots flex gap-2"},[r("span",null," . "),r("span",null," . "),r("span",null," . ")],-1)),ze=y(()=>r("div",{class:"min-h-[4px]"},null,-1)),Se={__name:"Conversation",setup(a){return(s,n)=>(l(),i("div",ke,[r("div",$e,[Ce,C(s.$slots,"default",{},void 0,!0),r("div",{class:u([(e(t).c.user_1_id==e(f).currentUser.id?e(t).c.user_2_active:e(t).c.user_1_active)?"h-16 opacity-100":"h-0 opacity-0","flex gap-1 items-end transition-all duration-300"])},[Ie,(e(t).c.user_1_id==e(f).currentUser.id?e(t).c.user_2_active:e(t).c.user_1_active)?(l(),i("div",je,g(e(t).scrollToBottom()),1)):c("",!0),Me],2),ze])]))}},Ue=x(Se,[["__scopeId","data-v-0800cc8e"]]),Oe=["src"],Be={__name:"Message",props:{reverse:{type:Boolean,default:!1},text:{type:String,default:""},user:{type:Object,default:""}},setup(a){return(s,n)=>(l(),i("div",{class:u(["flex gap-3 items-end",{"flex-row-reverse":a.reverse}])},[d(e(I),{to:a.user.process_instance_id!=null?"/studenti/"+a.user.process_instance_id:""},{default:p(()=>[r("div",{class:u([[a.reverse?"bg-rose-600/70 dark:bg-rose-500/75":"bg-fipu_blue",a.user.process_instance_id!=null?"cursor-pointer hover:scale-105 transition-all":"cursor-default"],"flex items-center justify-center h-9 w-9 rounded-full text-white dark:text-fipu_gray dark:font-bold font-medium flex-shrink-0 relative overflow-hidden"])},[a.user.avatar!=""?(l(),i("img",{key:0,class:"absolute",src:a.user.avatar,alt:""},null,8,Oe)):c("",!0),r("div",null,g(a.user.ime[0]),1)],2)]),_:1},8,["to"]),r("div",{class:u([a.reverse?"bg-indigo-100 dark:bg-gray-950/75 text-slate-900 dark:text-slate-300":"bg-stone-100  dark:bg-zinc-950/75 text-fipu_gray dark:text-zinc-300","relative text-sm py-2 px-4 shadow rounded-xl break-all"])},g(a.text),3)],2))}},Ae={class:"xl:max-w-7xl xl:mx-auto flex flex-col absolute h-full w-full justify-center items-center left-1/2 -translate-x-1/2"},De={class:"bg-gray-100 dark:bg-slate-800 h-full w-full flex flex-col drop-shadow"},Ne={class:"grow flex flex-col justify-end"},Le={class:"flex flex-row grow antialiased text-gray-800 dark:text-gray-300 rounded overflow-hidden"},Ve=r("div",{class:"absolute w-full h-16 bg-gradient-to-b dark:from-fipu_gray2 dark:via-fipu_gray2 from-white via-white top-0 right-2 pointer-events-none z-10"},null,-1),Pe=r("div",{class:"w-full h-full flex justify-center items-center"},"Odaberi razgovor",-1),Ee={data(){return{intervalId:null,messageContainerRef:null}},created(){clearInterval(this.intervalId),this.intervalId=setInterval(async()=>{await t.updateConversations(f.currentUser.id),await t.getMessages(t.selectedConversation)},1e3)},unmounted(){clearInterval(this.intervalId)}},Xe=Object.assign(Ee,{__name:"MessagesView",setup(a){return t.getAllUsers(),B(()=>{}),(s,n)=>(l(),_(j,null,{default:p(()=>[r("div",Ae,[r("div",De,[r("div",Ne,[r("div",Le,[d(he),e(t).selectedConversation!=""?(l(),_(k,{key:0},{default:p(()=>[Ve,d(Ue,null,{default:p(()=>[(l(!0),i(h,null,b(e(t).messages,o=>(l(),_(Be,{text:o.content,user:e(t).getUser(o),reverse:o.receiver_id==e(t).selectedConversation},null,8,["text","user","reverse"]))),256))]),_:1}),d(H)]),_:1})):(l(),_(k,{key:1},{default:p(()=>[Pe]),_:1}))])])])])]),_:1}))}});export{Xe as default};
