import{x as d,y as b,z as l,A as N,K as w,S as B,r as U,f as C,w as S,G as M,J as r,F as o,u as a,b as L,H as Z,M as J,C as $,a as F,q as G,Q as K,P}from"./vue.7e7f5872.js";import{bf as R,bg as Q,bh as W,bi as X,bj as Y,bk as ee,l as ae,a0 as oe,p as le,c as j,u as q,C as te,v as ie,bl as ne,b as re,bm as se,w as de,bn as ue,bo as pe,a$ as me,bp as ce,_ as T}from"./BaseButton.9d2b7ab7.js";import{a as je,_ as D}from"./SectionTitleLineWithButton.c766808a.js";import{_ as ke,F as _e,b as ve,c as fe,a as be}from"./SnackBar.ecb549af.js";import{_ as ge}from"./CardBox.999a807f.js";import{_ as s}from"./FormField.60e93e5c.js";import{b as I,m as he,s as A,g as ze,U as Ve}from"./index.c2c56019.js";import{_ as O}from"./FormCheckRadioGroup.c52e2c40.js";import{c as p,r as _,d as we,u as Pe,g as m}from"./validators.2340ccfd.js";import"./vendor.4c47bd8f.js";import"./FormCheckRadio.eb16ec4e.js";const ye={name:"CheckIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},xe=["aria-hidden","aria-label"],Me=["fill","width","height"],Ue={d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"},Ce={key:0};function Le(g,v,e,h,c,f){return d(),b("span",B(g.$attrs,{"aria-hidden":!e.title,"aria-label":e.title,class:"material-design-icon check-icon",role:"img",onClick:v[0]||(v[0]=n=>g.$emit("click",n))}),[(d(),b("svg",{fill:e.fillColor,class:"material-design-icon__svg",width:e.size,height:e.size,viewBox:"0 0 24 24"},[l("path",Ue,[e.title?(d(),b("title",Ce,N(e.title),1)):w("",!0)])],8,Me))],16,xe)}const $e=I(ye,[["render",Le]]),Se={name:"UnfoldMoreHorizontalIcon",emits:["click"],props:{title:{type:String},fillColor:{type:String,default:"currentColor"},size:{type:Number,default:24}}},Ne=["aria-hidden","aria-label"],Fe=["fill","width","height"],qe={d:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"},Te={key:0};function De(g,v,e,h,c,f){return d(),b("span",B(g.$attrs,{"aria-hidden":!e.title,"aria-label":e.title,class:"material-design-icon unfold-more-horizontal-icon",role:"img",onClick:v[0]||(v[0]=n=>g.$emit("click",n))}),[(d(),b("svg",{fill:e.fillColor,class:"material-design-icon__svg",width:e.size,height:e.size,viewBox:"0 0 24 24"},[l("path",qe,[e.title?(d(),b("title",Te,N(e.title),1)):w("",!0)])],8,Fe))],16,Ne)}const Ae=I(Se,[["render",De]]),Oe={class:"relative z-50"},Be={class:"relative w-full cursor-default overflow-hidden rounded bg-white text-left sm:text-sm border border-gray hover:border-fipu_blue focus:border-fipu_blue"},Ie={key:0,class:"relative cursor-default select-none py-2 px-4 text-gray-700"},Ee={__name:"FormCombobox",props:{options:{type:Array,default:()=>[]},placeholder:{type:String,default:""}},emits:["update:modelValue"],setup(g,{emit:v}){const e=v,h=g;let c=U(""),f=C(()=>c.value===""?h.options:h.options.filter(z=>z.label.toLowerCase().replace(/\s+/g,"").includes(c.value.toLowerCase().replace(/\s+/g,"")))),n=U(f.value[0]);return S(()=>n.value,z=>{e("update:modelValue",z)}),S(()=>c.value,z=>{z||(n.value=U())}),(z,V)=>(d(),M(a(ee),{modelValue:a(n),"onUpdate:modelValue":V[2]||(V[2]=u=>L(n)?n.value=u:n=u)},{default:r(()=>[l("div",Oe,[l("div",Be,[o(a(R),{class:"w-full px-3 py-2 max-w-full focus:ring focus:outline-none dark:placeholder-gray-400 h-12 dark:bg-slate-800","display-value":u=>u.label,placeholder:h.placeholder,onChange:V[0]||(V[0]=u=>L(c)?c.value=u.target.value:c=u.target.value)},null,8,["display-value","placeholder"]),o(a(Q),{class:"absolute inset-y-0 right-0 flex items-center pr-2"},{default:r(()=>[o(Ae,{class:"h-5 w-5 text-gray-700 hover:text-fipu_blue","aria-hidden":"true"})]),_:1})]),o(a(W),{leave:"transition ease-in duration-100","leave-from":"opacity-100","leave-to":"opacity-0",onAfterLeave:V[1]||(V[1]=u=>L(c)?c.value="":c="")},{default:r(()=>[o(a(X),{class:"absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"},{default:r(()=>[a(f).length===0&&a(c)!==""?(d(),b("div",Ie,"Nema rezultata.")):w("",!0),(d(!0),b(Z,null,J(a(f),u=>(d(),M(a(Y),{key:u.id,as:"template",value:u},{default:r(({selected:y,active:x})=>[l("li",{class:$(["relative cursor-default select-none py-2 pl-10 pr-4",{"bg-fipu_blue text-white":x,"text-gray-900":!x}])},[l("span",{class:$(["block truncate",{"font-medium":y,"font-normal":!y}])},N(u.label),3),y?(d(),b("span",{key:0,class:$(["absolute inset-y-0 left-0 flex items-center pl-3",{"text-white":x,"text-fipu_blue":!x}])},[o($e,{class:"h-5 w-5 text-fipu_blue","aria-hidden":"true"})],2)):w("",!0)],2)]),_:2},1032,["value"]))),128))]),_:1})]),_:1})])]),_:1},8,["modelValue"]))}},He={href:"/",target:"_blank"},Ze=["src"],Je=l("p",null,[l("b",null,"Akademska godina:"),P(" 2023/2024")],-1),Ge=l("p",null,[l("b",null,"Voditelj:"),P(" doc. dr. sc. Nikola Tankovi\u0107")],-1),Ke=l("hr",null,null,-1),Re=l("br",null,null,-1),Qe=l("p",null,[P("Ova prijavnica je namijenjena "),l("u",null,"poduze\u0107ima i organizacijama"),P(" koje \u017Eele provoditi studentsku praksu u suradnji s Fakultetom informatike u Puli. Na temelju ovog upitnika odredit \u0107e se idealni studenti za provo\u0111enje prakse u Va\u0161em poduze\u0107u.")],-1),We=l("br",null,null,-1),Xe=l("p",null,"Studentima je ovo izborni kolegij i oni koji su prijavljeni, motivirani su i spremni za rad!",-1),Ye=l("br",null,null,-1),ea=l("p",null,[l("b",null,"Va\u017Ena napomena:"),P(" Pojedina organizacija mo\u017Ee prijaviti i vi\u0161e zadataka. Molimo da za svaki zadatak zasebno popunite prijavnicu (isti link) te zatra\u017Eite broj studenata koji mo\u017Ee na njemu raditi (npr. mo\u017Ee biti 2 zadataka, na prvom 3 studenta, na drugom 4).")],-1),aa=l("br",null,null,-1),oa=l("p",null,"Za sve dodatne informacije slobodno kontaktirajte voditelja stru\u010Dne prakse:",-1),la=l("br",null,null,-1),ta=l("div",{class:"w-full shrink-0 grow-0 basis-auto lg:w-7/12"},[l("div",{class:"flex flex-wrap"},[l("div",{class:"mb-6 w-full shrink-0 grow-0 basis-auto md:w-6/12"},[l("div",{class:"flex items-start"},[l("div",{class:"shrink-0"},[l("div",{class:"inline-block rounded-md bg-primary-100 p-4 w-24 h-24 text-primary items-center"},[l("a",{href:"https://ntankovic.unipu.hr/",target:"_blank"},[l("img",{class:"rounded-full",src:"https://avatars.githubusercontent.com/u/714889?v=4",alt:"Nikola Tankovi\u0107"})])])]),l("div",{class:"ml-3 grow"},[l("p",{class:"mb-2 font-bold dark:text-white"},"doc. dr. sc. Nikola Tankovi\u0107"),l("p",{class:"text-neutral-500 dark:text-neutral-200"},"nikola.tankovic@unipu.hr"),l("p",{class:"text-neutral-500 dark:text-neutral-200"},"+385 98 30 56 73")])])])])],-1),ia={class:"grid grid-cols-1 gap-6 mb-6"},na=l("br",null,null,-1),ra=l("span",{style:{color:"#e25555"}},"\u2665",-1),ba={__name:"NewAssignmentFormPublic",setup(g){const v={Poslodavac:"",Poslodavac_novi_naziv:"",poslodavac_email:"",opis_zadatka:"",preferirane_tehnologije:"",broj_studenata:"",preferencije_za_studenta:"",potrebno_imati:"",trajanje_sati:"",lokacija:"",zeljeno_okvirno_vrijeme_pocetka:"",angazman_selekcija:!1,angazman_fipu:"",napomena:"",selekcija:!1,proces_selekcije:""},e=F({...v}),h=k=>k>0,c=F({Poslodavac:C(()=>e.Poslodavac_novi_naziv?{}:{required:p.withMessage("Polje je obavezno",_)}),Poslodavac_novi_naziv:C(()=>e.Poslodavac?{}:{required:p.withMessage("Polje je obavezno",_)}),poslodavac_email:{required:p.withMessage("Polje je obavezno",_),email:p.withMessage("Molimo unesite ispravnu e-mail adresu",we)},opis_zadatka:{required:p.withMessage("Polje je obavezno",_)},preferirane_tehnologije:{},broj_studenata:{required:p.withMessage("Polje je obavezno",_),maxValue:p.withMessage("Minimalno 1 student",h)},preferencije_za_studenta:{},potrebno_imati:{},trajanje_sati:{required:p.withMessage("Polje je obavezno",_),maxValue:p.withMessage("Mora biti ve\u0107e od 0",h)},lokacija:{required:p.withMessage("Polje je obavezno",_)},zeljeno_okvirno_vrijeme_pocetka:{required:p.withMessage("Polje je obavezno",_)},angazman_selekcija:{required:p.withMessage("Polje je obavezno",_)},angazman_fipu:C(()=>e.angazman_selekcija==="true"?{required:p.withMessage("Polje je obavezno",_)}:{}),proces_selekcije:C(()=>e.selekcija===!0?{required:p.withMessage("Polje je obavezno",_)}:{}),napomena:{},selekcija:{required:p.withMessage("Polje je obavezno",_)}}),f=U(!1),n=Pe(c,e);function z(){for(const k in v)e[k]=v[k];n.value.$reset(),A.pushMessage("Forma je resetirana!","success")}async function V(){if(f.value=!0,n.value.$touch(),n.value.$invalid){f.value=!1;return}e.angazman_selekcija==="false"&&(e.angazman_fipu="Nema"),e.selekcija||(e.proces_selekcije="Nema");let k=await ze.submitNewInternshipProject(e);f.value=!1,k&&(A.pushMessage("Uspje\u0161no ste prijavili zadatak!","success"),await Ve.wait(1),location.reload())}const u=U([]),y=U([]),x={true:"Da",false:"Ne"},E={true:"Da",false:"Ne"};G(async()=>{let k=await he.fetchCompanies();u.value=k.data.results,y.value=u.value.map((t,i)=>({id:i+1,label:t.naziv}))}),S(()=>e.selekcija,k=>{typeof k=="string"&&(e.selekcija=k==="true")});const H=()=>{e.Poslodavac&&(e.Poslodavac_novi_naziv="")};return(k,t)=>(d(),b("div",null,[o(je,null,{default:r(()=>[o(D,{icon:a(ae),title:"FIPU Praksa",main:""},{default:r(()=>[l("a",He,[l("img",{src:a(_e),class:"max-h-14 object-contain"},null,8,Ze)])]),_:1},8,["icon"]),Je,Ge,Ke,Re,o(D,{icon:a(oe),main:"",title:"Prijava zadatka (Poslodavci)"},null,8,["icon"]),Qe,We,Xe,Ye,ea,aa,oa,la,ta,l("div",ia,[o(ge,{icon:a(le),class:"mb-6 lg:mb-0 lg:col-span-2 xl:col-span-3","is-form":"",onSubmit:K(V,["prevent"])},{default:r(()=>[o(ve,{class:"text-center",title:"\u{1F4BC}Prijava projekta za studentsku praksu "}),e.Poslodavac_novi_naziv?w("",!0):(d(),M(s,{key:0,label:"Poduze\u0107e partner",help:"Ako niste partner, unesite naziv poduze\u0107a ispod",horizontal:""},{default:r(()=>[o(Ee,{modelValue:e.Poslodavac,"onUpdate:modelValue":t[0]||(t[0]=i=>e.Poslodavac=i),options:y.value,placeholder:"Odaberite poduze\u0107e ako ste postoje\u0107i partner",onChange:H},null,8,["modelValue","options"])]),_:1})),e.Poslodavac?w("",!0):(d(),M(s,{key:1,label:"Naziv poduze\u0107a",horizontal:""},{default:r(()=>[o(j,{modelValue:e.Poslodavac_novi_naziv,"onUpdate:modelValue":t[1]||(t[1]=i=>e.Poslodavac_novi_naziv=i),"icon-left":a(q),help:"Ovdje unesite naziv poduze\u0107a ako ste novi partner (nema vas u dropdown obrascu iznad)",error:a(m)(a(n),"Poslodavac_novi_naziv"),placeholder:"Naziv poduze\u0107a"},null,8,["modelValue","icon-left","error"])]),_:1})),o(s,{label:"Kontakt email",horizontal:""},{default:r(()=>[o(j,{modelValue:e.poslodavac_email,"onUpdate:modelValue":t[2]||(t[2]=i=>e.poslodavac_email=i),"icon-left":a(te),type:"email",error:a(m)(a(n),"poslodavac_email"),help:"E-mail adresa pri kojoj \u0107e se student obratiti oko dogovora za izvo\u0111enje studentske prakse ili provedbu selekcije. Ne mora nu\u017Eno biti budu\u0107i mentor.",placeholder:"Va\u0161 kontakt email"},null,8,["modelValue","icon-left","error"])]),_:1}),o(fe),o(s,{label:"Detaljan opis zadatka",horizontal:""},{default:r(()=>[o(j,{modelValue:e.opis_zadatka,"onUpdate:modelValue":t[3]||(t[3]=i=>e.opis_zadatka=i),type:"textarea",placeholder:"Zadatak \u0107e se sastojati od ... Student \u0107e raditi na ...",error:a(m)(a(n),"opis_zadatka"),"icon-left":a(ie),help:"Opis zadataka koji bi student izvr\u0161avao. Mo\u017Ee biti: mala (web, mobilna, desktop) aplikacija, program za obradu podataka, analiza podataka, pobolj\u0161anje postoje\u0107eg koda (engl. code refactoring), pomo\u0107 pri odr\u017Eavanju ra\u010Dunalne ili aplikacijske infrastrukture - DevOps poslovi, ... Preporu\u010Duje se \u0161to detaljniji opis kako bi mogli alocirati idealnog kandidata."},null,8,["modelValue","error","icon-left"])]),_:1}),o(s,{label:`Preferirane tehnologije/platforme
`,horizontal:""},{default:r(()=>[o(j,{modelValue:e.preferirane_tehnologije,"onUpdate:modelValue":t[4]||(t[4]=i=>e.preferirane_tehnologije=i),type:"textarea",error:a(m)(a(n),"preferirane_tehnologije"),placeholder:"Npr. PHP, Laravel, Python, Django, JavaScript, Vue.js, Unity, WordPress, TensorFlow...","icon-left":a(ne),help:`\u0160to sve koristi va\u0161a tvrtka ili na \u010Demu \u0107e se temeljiti rad studenta? Npr. PHP, Laravel, Python, Django, JavaScript, Vue.js, Unity, WordPress, TensorFlow...
`},null,8,["modelValue","error","placeholder","icon-left"])]),_:1}),o(s,{label:"Broj studenata",horizontal:""},{default:r(()=>[o(s,{addons:""},{default:r(()=>[o(j,{modelValue:e.broj_studenata,"onUpdate:modelValue":t[5]||(t[5]=i=>e.broj_studenata=i),type:"number","icon-left":a(re),error:a(m)(a(n),"broj_studenata"),min:1,placeholder:"Maksimalni broj studenata",help:"Koliko studenata mo\u017Eete primiti u rje\u0161avanju ovog zadatka? Studenti mogu raditi odvojeno ili u timu. Ako imate vi\u0161e zadataka, mo\u017Eete ponovno popuniti formu za svaki zadatak posebno.",expanded:""},null,8,["modelValue","icon-left","error"])]),_:1})]),_:1}),o(s,{label:`Preferencije pri odabiru studenta
`,horizontal:""},{default:r(()=>[o(j,{modelValue:e.preferencije_za_studenta,"onUpdate:modelValue":t[6]||(t[6]=i=>e.preferencije_za_studenta=i),type:"textarea",error:a(m)(a(n),"preferencije_za_studenta"),placeholder:"Po\u017Eeljni kandidat posjeduje znanja iz ... ima iskustva u...","icon-left":a(se),help:"U koliko smatrate va\u017Enim, opi\u0161ite odlike po\u017Eeljnog kandidata na praksi."},null,8,["modelValue","error","icon-left"])]),_:1}),o(s,{label:"Potrebna infrastruktura koju student mora posjedovati",horizontal:""},{default:r(()=>[o(j,{modelValue:e.potrebno_imati,"onUpdate:modelValue":t[7]||(t[7]=i=>e.potrebno_imati=i),error:a(m)(a(n),"potrebno_imati"),"icon-left":a(q),help:"Potrebna infrastruktura koju student mora posjedovati",placeholder:"Npr. laptop"},null,8,["modelValue","error","icon-left"])]),_:1}),o(s,{label:"\u017Deljeno trajanje prakse",horizontal:""},{default:r(()=>[o(s,{addons:""},{default:r(()=>[o(j,{modelValue:e.trajanje_sati,"onUpdate:modelValue":t[8]||(t[8]=i=>e.trajanje_sati=i),type:"number",error:a(m)(a(n),"trajanje_sati"),"icon-left":a(de),placeholder:"90 - 150 radnih sati",help:`Preporu\u010Deno trajanje studentske prakse je izme\u0111u 90 i 150 radnih sati. U dogovoru sa studentom mo\u017Ee se kasnije taj anga\u017Eman produljiti. Dogovor kako \u0107e se izvr\u0161iti tih 90-150 sati je izme\u0111u vas i studenta (npr. koncentrirano u 2-3 tjedna ili par puta tjedno kroz dulje vrijeme).
`,expanded:""},null,8,["modelValue","error","icon-left"])]),_:1})]),_:1}),o(s,{label:"Lokacija",horizontal:""},{default:r(()=>[o(j,{modelValue:e.lokacija,"onUpdate:modelValue":t[9]||(t[9]=i=>e.lokacija=i),help:"Mogu\u0107a je 'remote' praksa",error:a(m)(a(n),"lokacija"),"icon-left":a(ue),placeholder:"Lokacija odr\u017Eavanja prakse"},null,8,["modelValue","error","icon-left"])]),_:1}),o(s,{label:"\u017Deljeno okvirno vrijeme po\u010Detka",horizontal:""},{default:r(()=>[o(j,{modelValue:e.zeljeno_okvirno_vrijeme_pocetka,"onUpdate:modelValue":t[10]||(t[10]=i=>e.zeljeno_okvirno_vrijeme_pocetka=i),"icon-left":a(pe),error:a(m)(a(n),"zeljeno_okvirno_vrijeme_pocetka"),placeholder:"npr. Velja\u010Da 2024.",help:"Praksa se mora obaviti najkasnije do 1. rujna sljede\u0107e godine."},null,8,["modelValue","icon-left","error"])]),_:1}),o(s,{label:"Anga\u017Eman nastavnika s FIPU",help:"Po \u017Eelji, nastavno osoblje FIPU-a mo\u017Ee pomo\u0107i pri izvo\u0111enju prakse na na\u010Din da oni dijelom (ili u potpunosti) mentoriraju studenta. Mogu\u0107e je \u010Dak da student u na\u0161em laboratoriju obavlja praksu, te povremeno dolazi prezentirati u\u010Dinjeno.",horizontal:""},{default:r(()=>[o(O,{modelValue:e.angazman_selekcija,"onUpdate:modelValue":t[11]||(t[11]=i=>e.angazman_selekcija=i),error:a(m)(a(n),"angazman_selekcija"),name:"angazman_selection",type:"radio",options:x,"component-class":"check-radio-warning"},null,8,["modelValue","error"])]),_:1}),e.angazman_selekcija==="true"?(d(),M(s,{key:2,label:"Opis anga\u017Emana nastavnika",help:"Molimo da detaljnije opi\u0161ite anga\u017Eman nastavnog osoblja i proces obavljanje prakse.",horizontal:""},{default:r(()=>[o(j,{modelValue:e.angazman_fipu,"onUpdate:modelValue":t[12]||(t[12]=i=>e.angazman_fipu=i),error:a(m)(a(n),"angazman_fipu"),type:"textarea","icon-left":a(me),disabled:e.angazman_selekcija===!1},null,8,["modelValue","error","icon-left","disabled"])]),_:1})):w("",!0),o(s,{label:"Dodatna napomena",horizontal:""},{default:r(()=>[o(j,{modelValue:e.napomena,"onUpdate:modelValue":t[13]||(t[13]=i=>e.napomena=i),"icon-left":a(ce),placeholder:"Slobodno unesite napomenu, nije obavezno.",error:a(m)(a(n),"napomena"),type:"textarea"},null,8,["modelValue","icon-left","error"])]),_:1}),o(s,{label:"Selekcijski postupak",help:`\u017Delite li provesti dodatnu selekciju kandidata koji se prijave na praksu (npr. intervju, ispit) ?
`,horizontal:""},{default:r(()=>[o(O,{modelValue:e.selekcija,"onUpdate:modelValue":t[14]||(t[14]=i=>e.selekcija=i),name:"selekcija_selection",error:a(m)(a(n),"selekcija"),type:"radio",options:E,"component-class":"check-radio-warning"},null,8,["modelValue","error"])]),_:1}),e.selekcija===!0?(d(),M(s,{key:3,label:"Proces selekcije",horizontal:""},{default:r(()=>[o(j,{modelValue:e.proces_selekcije,"onUpdate:modelValue":t[15]||(t[15]=i=>e.proces_selekcije=i),error:a(m)(a(n),"proces_selekcije"),type:"textarea",disabled:e.selekcija===!1,help:"Molimo da opi\u0161ete postupak selekcije, da studenti otprilike znaju \u0161to o\u010Dekivati."},null,8,["modelValue","error","disabled"])]),_:1})):w("",!0),o(s,{horizontal:"",grouped:""},{default:r(()=>[o(T,{label:"Po\u0161alji",type:"submit",disabled:f.value,loading:f.value,color:"fipu_blue"},null,8,["disabled","loading"]),o(T,{label:"Resetiraj formu",color:"danger",onClick:t[16]||(t[16]=i=>z())})]),_:1})]),_:1},8,["icon","onSubmit"])])]),_:1}),o(ke,null,{default:r(()=>[na,P("Made with "),ra,P(" at FIPU.lab")]),_:1}),o(be)]))}};export{ba as default};
