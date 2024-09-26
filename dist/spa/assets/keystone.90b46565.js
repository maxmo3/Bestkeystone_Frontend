import{d as Y,B as ce,u as se,c as M,r as b,w as I,h as s,i as x,p as a,q as t,n as R,L as J,Q as X,b3 as N,b4 as Q,b5 as U,b6 as G,b7 as E,m as v,ab as re,_ as j,z as W,y as he,l as S,t as $,K as we,e as Pe,f as Ve,g as Se,j as d,aB as H,b8 as $e,ac as O,F as te,C as ne,N as Re,ae as Ce,O as Ie,S as q,a as Te,v as Be,x as Le}from"./index.cb6acba7.js";import{a as ze}from"./QCheckbox.c4ce5bfe.js";import{Q as me,a as z}from"./QTr.29a2f077.js";import{Q as He}from"./QTable.1aa9aac0.js";import{P as Me}from"./PeriodeSelector.632dd578.js";import{P as Ne,_ as ve}from"./PlayerText.fc7779ff.js";import{a as _e}from"./index.a470a8fe.js";import{k as Qe}from"./keystoneView.2d596739.js";import"./QMarkupTable.b58c0bea.js";import"./use-cache.b0833c75.js";import"./QInput.c84d4eba.js";import"./numeral.61153226.js";const Ae={id:"mainDiv"},Ue=Y({__name:"dungeonSelector",props:{filled:{type:Boolean},withImages:{type:Boolean},season:{type:Object}},emits:["update:modelValue","change","delete"],setup(w,{emit:k}){const g=w,{filled:h,withImages:c,season:_}=ce(g),P=se().state.data,T=M(()=>P.Dungeons),p=b(null);return I(p,()=>k("update:modelValue",p.value)),(A,u)=>{var i;return s(),x("div",Ae,[a(re,{dark:"",modelValue:p.value,"onUpdate:modelValue":u[0]||(u[0]=r=>p.value=r),options:(i=T.value)==null?void 0:i.filter(r=>{var V,B;return r.seasons.includes((B=(V=v(_))==null?void 0:V.season)==null?void 0:B.id)}),"hide-bottom-space":"",borderless:"",clearable:"",filled:v(h)},{selected:t(r=>[p.value?(s(),R(E,U({key:0},r==null?void 0:r.itemProps,G(r==null?void 0:r.itemEvents)),{default:t(()=>{var V;return[a(J,{url:(V=p.value)==null?void 0:V.imageurl},{default:t(({link:B})=>[a(X,{class:"dungeonImg","spinner-size":"5px",src:B},null,8,["src"])]),_:1},8,["url"]),a(N,null,{default:t(()=>[a(Q,{innerHTML:p.value.name.replace("Operation: ","")},null,8,["innerHTML"])]),_:1})]}),_:2},1040)):(s(),R(N,{key:1},{default:t(()=>[a(Q,{innerHTML:"All"})]),_:1}))]),option:t(r=>[a(E,U(r.itemProps,G(r==null?void 0:r.itemEvents)),{default:t(()=>{var V;return[a(J,{url:(V=r.opt)==null?void 0:V.imageurl},{default:t(({link:B})=>[a(X,{class:"dungeonImg",src:B},null,8,["src"])]),_:2},1032,["url"]),a(N,null,{default:t(()=>[a(Q,{innerHTML:r.opt.name.replace("Operation: ","")},null,8,["innerHTML"])]),_:2},1024)]}),_:2},1040)]),_:1},8,["modelValue","options","filled"])])}}});var Ge=j(Ue,[["__scopeId","data-v-79ae967d"]]);const Ee={id:"mainDivSel"},De=Y({__name:"affixSelector",props:{filled:{type:Boolean},level:{type:Number}},emits:["update:modelValue"],setup(w,{emit:k}){const g=w,{filled:h,level:c}=ce(g),_=b(null),P=se().state.data,T=M(()=>P.Affixes);return I(_,()=>{k("update:modelValue",_.value)}),(p,A)=>(s(),x("div",Ee,[T.value?(s(),R(re,{key:0,dark:"",modelValue:_.value,"onUpdate:modelValue":A[0]||(A[0]=u=>_.value=u),options:T.value.filter(u=>u.starting_level==v(c)),"hide-bottom-space":"",borderless:"",clearable:"",filled:v(h)},{selected:t(u=>[_.value?(s(),R(E,U({key:0},u==null?void 0:u.itemProps,G(u==null?void 0:u.itemEvents)),{default:t(()=>[a(_e,{class:"affixImg",size:"10px",affixid:_.value.id},null,8,["affixid"])]),_:2},1040)):(s(),R(N,{key:1},{default:t(()=>[a(Q,{innerHTML:"Any"})]),_:1}))]),option:t(u=>[a(E,U(u.itemProps,G(u.selected)),{default:t(()=>[a(_e,{class:"affixImg",size:"8px",affixid:u.opt.id},null,8,["affixid"]),a(N,null,{default:t(()=>[a(Q,{innerHTML:u.opt.name},null,8,["innerHTML"])]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","options","filled"])):W("",!0)]))}});var oe=j(De,[["__scopeId","data-v-4906d156"]]);const je={props:["filled","rounded","input"],data(){return{region:null}},methods:{setRegion(w){if(this.GetRegions)for(let k=0;k<this.GetRegions.length;k++){const g=this.GetRegions[k];g==w&&(this.region=g)}}},computed:{...he(["GetRegions"])},watch:{region(){this.$emit("change",this.region)},GetRegions(){this.input&&this.setRegion(this.input)}},created(){this.input&&this.setRegion(this.input)}},Fe={id:"mainDiv"};function Ke(w,k,g,h,c,_){return s(),x("div",Fe,[a(re,{dark:"",dense:"",modelValue:c.region,"onUpdate:modelValue":k[0]||(k[0]=m=>c.region=m),options:w.GetRegions,borderless:"",clearable:"",rounded:g.rounded,outlined:g.filled},{selected:t(m=>[c.region?(s(),R(E,U({key:0},m.itemProps,G(m.itemEvents)),{default:t(()=>[S($(c.region.toUpperCase()),1)]),_:2},1040)):(s(),R(N,{key:1},{default:t(()=>[a(Q,{innerHTML:"Any"})]),_:1}))]),option:t(m=>[a(E,U(m.itemProps,G(m.itemEvents)),{default:t(()=>[a(N,null,{default:t(()=>[a(Q,{innerHTML:m.opt},null,8,["innerHTML"])]),_:2},1024)]),_:2},1040)]),_:1},8,["modelValue","options","rounded","outlined"])])}var Oe=j(je,[["render",Ke],["__scopeId","data-v-25ba131c"]]);const qe={class:"HeaderFont"},We={id:"filterMenu",class:"flex justify-between"},Je={class:"text-center"},Xe={class:"relative"},Ye={class:"absolute upperButtons"},Ze={key:0,class:"flex"},el={class:"flex justify-around"},ll={key:0},al={key:1},tl={class:"flex justify-around"},nl={class:"flex"},ol={class:"flex justify-between"},sl=["href"],rl=["href"],il={class:"flex"},ul=Y({__name:"keystoneLeaderboard",setup(w){const k=M(()=>V.value.map(l=>l.name).filter(l=>{var n=!0;return c.value&&l=="zone"&&(n=!1),n}));let g=b([]),h=b(null),c=b(null),_=b(null),m=b(null),P=b(null),T=b(null),p=b(null),A=b(k),u=b(null),i=b({rowsPerPage:20,page:1,sortBy:"rank",rowsNumber:12}),r=b(!1);const V=b([{name:"rank",label:"Rank",sortable:!1,field:l=>l,align:"left"},{name:"zone",label:"Dungeon",sortable:!1,field:l=>l,align:"left"},{name:"level",label:"Level",sortable:!1,field:l=>l,align:"left"},{name:"time",label:"Time",sortable:!1,field:l=>l,align:"left"},{name:"affixes",label:"Affixes",sortable:!1,field:l=>l,align:"left"},{name:"players",label:"Players",sortable:!1,field:l=>l,align:"left"},{name:"score",label:"Score",sortable:!1,field:l=>l,align:"center"}]),B=we(),D=M(()=>B.currentRoute.value.query),Z=M(()=>ae.Specs),ee=M(()=>ae.Classes);Pe();const C=l=>{l.pagination,r.value=!0,ke(l.pagination)},ge=l=>{if(ee.value)for(let n=0;n<ee.value.length;n++){const f=ee.value[n];if(f.id==l)return f}},pe=l=>{var n=l.time.clear_time/l.time.map_time;return n<=.6?3:n<=.8?2:n<=1?1:0},ye=l=>Ie.duration(l).format("hh:mm:ss"),be=l=>le(l).role,xe=l=>le(l).role=="TANK"?1e4+l:le(l).role=="HEALER"?2e4+l:3e4+l,le=l=>{if(!Z.value)return null;for(let n=0;n<Z.value.length;n++){const f=Z.value[n];if(l==f.id)return f}},ie=l=>{l.forEach(f=>{f.sortNR=xe(f.spec),f.role=be(f.spec)});var n=q._sortBy(l,"sortNR");for(const f in q.groupBy(n,"role"))if(q.groupBy(n,"role").hasOwnProperty(f)){const e=q.groupBy(n,"role")[f];e[0].showIcon=!0}return n},ae=se().state.data,ke=l=>{var F,ue,de,fe;l&&(l.page&&(i.value.page=l.page),l.rowsPerPage&&(i.value.rowsPerPage=l.rowsPerPage),l.sortBy&&(i.value.sortBy=l.sortBy));var{page:n,rowsPerPage:f,sortBy:e}=i.value,o=ae.apiUrl,y=`/KeystoneRun/leaderboard?from=${(n-1)*f}&amount=${f}&seasonId=${((ue=(F=h.value)==null?void 0:F.season)==null?void 0:ue.id)===6?5:(fe=(de=h.value)==null?void 0:de.season)==null?void 0:fe.id}`;c.value&&(y+=`&zone=${c.value.keystone_id}`),_.value&&(y+=`&affix1=${_.value.id}`),m.value&&(y+=`&affix2=${m.value.id}`),P.value&&(y+=`&affix3=${P.value.id}`),T.value&&(y+=`&affix4=${T.value.id}`),p.value&&(y+=`&region=${p.value}`),u.value&&(y+=`&faction=${u.value}`),Te.get(`${o}${y}`).then(K=>{i.value.rowsNumber=K.data.maxRows,g.value=K.data.list,i.value.page=n+1,i.value.rowsPerPage=f,i.value.sortBy=e,A.value=k.value,r.value=!1}).catch(K=>{console.log("Error",K)})},L=M(()=>{var l={pagination:{rowsNumber:0,rowsPerPage:i.value.rowsPerPage,page:i.value.page,sortBy:i.value.sortBy}};return i.value.rowsNumber&&(l.pagination.rowsNumber=i.value.rowsNumber),l});return I(_,()=>{C(L.value)}),I(m,()=>{C(L.value)}),I(P,()=>{C(L.value)}),I(T,()=>{C(L.value)}),I(p,()=>{C(L.value)}),I(h,()=>{C(L.value)}),I(c,()=>{C(L.value)}),Ve(()=>{D.value.page&&(i.value.page=D.value.page),D.value.rows&&(i.value.rowsPerPage=D.value.rows),h.value&&C(L.value)}),(l,n)=>{const f=Se("Affix");return s(),x("div",qe,[d("div",We,[d("div",null,[S(" Dungeon "),a(Ge,{widthImage:!0,season:v(h),modelValue:v(c),"onUpdate:modelValue":n[0]||(n[0]=e=>H(c)?c.value=e:c=e),filled:""},null,8,["season","modelValue"])]),d("div",null,[S(" Season "),a(Me,{onlySeasons:!0,modelValue:v(h),"onUpdate:modelValue":n[1]||(n[1]=e=>H(h)?h.value=e:h=e),filled:"",region:"us"},null,8,["modelValue"])]),d("div",null,[S(" Affix level 2 "),a(oe,{modelValue:v(_),"onUpdate:modelValue":n[2]||(n[2]=e=>H(_)?_.value=e:_=e),level:2,filled:""},null,8,["modelValue"])]),d("div",null,[S(" Affix level 4 "),a(oe,{modelValue:v(m),"onUpdate:modelValue":n[3]||(n[3]=e=>H(m)?m.value=e:m=e),level:4,filled:""},null,8,["modelValue"])]),d("div",null,[S(" Affix level 7 "),a(oe,{modelValue:v(P),"onUpdate:modelValue":n[4]||(n[4]=e=>H(P)?P.value=e:P=e),level:7,filled:""},null,8,["modelValue"])])]),a(He,{title:"Keystone leaderboard",rows:v(g),columns:V.value,pagination:v(i),"onUpdate:pagination":n[6]||(n[6]=e=>H(i)?i.value=e:i=e),"rows-per-page-options":[10,20,50,100,500],"row-key":"rank",dark:"",class:"tableMinSize",onRequest:C,loading:v(r),color:"amber","visible-columns":v(A)},$e({"top-right":t(e=>[d("div",Je,[S(" Region "),a(Oe,{rounded:!0,input:D.value.region,filled:!0,onChange:n[5]||(n[5]=o=>H(p)?p.value=o:p=o)},null,8,["input"]),d("div",Xe,[d("div",Ye,[v(r)?W("",!0):(s(),x("div",Ze,[a(O,{round:"",dense:"",disable:e.pagination.page<=1,onClick:o=>e.prevPage(),icon:"keyboard_arrow_left"},null,8,["disable","onClick"]),a(O,{round:"",dense:"",disable:e.pagination.page*e.pagination.rowsPerPage<v(g).maxRows,onClick:o=>e.nextPage(),icon:"keyboard_arrow_right"},null,8,["disable","onClick"])]))])])])]),body:t(e=>[a(me,{props:e,onClick:o=>e.expand=!e.expand},{default:t(()=>[a(z,{key:"rank"},{default:t(()=>[a(J,{url:`factions/${e.row.faction.toLowerCase()}.png`},{default:t(({link:o})=>[d("div",el,[a(X,{"spinner-size":"10px",class:"factionIconSize","spinner-color":"white",src:o},null,8,["src"]),S(" "+$(e.row.rank),1)])]),_:2},1032,["url"])]),_:2},1024),a(z,{key:"zone",props:e},{default:t(()=>[e.row.zone.short_name?(s(),x("div",ll,$(e.row.zone.short_name),1)):(s(),x("div",al,$(e.row.zone.name),1))]),_:2},1032,["props"]),a(z,{key:"level",props:e},{default:t(()=>[d("div",tl,[S(" +"+$(e.row.level)+" ",1),(s(!0),x(te,null,ne(pe(e.row),(o,y)=>(s(),x("i",{key:y,class:"starIcon material-icons"},"star"))),128))])]),_:2},1032,["props"]),a(z,{key:"time",props:e},{default:t(()=>[S($(ye(e.row.time.clear_time)),1)]),_:2},1032,["props"]),a(z,{key:"affixes",props:e},{default:t(()=>[d("div",nl,[(s(!0),x(te,null,ne(e.row.affixes,(o,y)=>(s(),R(f,{affixid:o,tooltip:!0,key:y},null,8,["affixid"]))),128))])]),_:2},1032,["props"]),a(z,{key:"players",props:e},{default:t(()=>[d("div",ol,[(s(!0),x(te,null,ne(ie(e.row.players),(o,y)=>(s(),x("div",{style:Re(`color: ${ge(o.class).color};`),class:"flex justify-center",key:y},[a(Ne,{player:o,region:e.row.region},{default:t(()=>[a(J,{url:`roles/${o.role}.png`},{default:t(({link:F})=>[o.showIcon?(s(),R(X,{key:0,"spinner-size":"5px",id:"roleImage",src:F},null,8,["src"])):W("",!0)]),_:2},1032,["url"]),y+1!=ie(e.row.players).length?(s(),x("a",{key:0,href:`/#/lookup?characters=${e.row.region}.${o.realm}.${o.name}`},$(o.name+" "),9,sl)):(s(),x("a",{key:1,href:`/#/lookup?characters=${e.row.region}.${o.realm}.${o.name}`},$(o.name),9,rl)),a(Ce,null,{default:t(()=>[d("div",il,[a(ve,{size:20,text:!0,id:o.spec},null,8,["id"]),a(ve,{size:20,useclass:!0,text:!0,id:o.spec},null,8,["id"])])]),_:2},1024)]),_:2},1032,["player","region"])],4))),128))])]),_:2},1032,["props"]),a(z,{key:"score",props:e},{default:t(()=>[S($(Math.round(e.row.score*10)/10),1)]),_:2},1032,["props"])]),_:2},1032,["props","onClick"]),e.expand?(s(),R(me,{key:0,class:"hideHover",props:e},{default:t(()=>[a(z,{class:"hideHover",colspan:"100%"},{default:t(()=>[a(Qe,{class:"keystoneView",id:e.row.id},null,8,["id"])]),_:2},1024)]),_:2},1032,["props"])):W("",!0)]),_:2},[v(r)?{name:"bottom",fn:t(()=>[a(ze,{indeterminate:"",color:"amber"})]),key:"0"}:{name:"pagination",fn:t(e=>[d("div",{class:"flex"},[d("div",{class:"minorTopMargin"},"Page "+$(e.pagination.page),1),d("div",{class:"flex float-right"},[a(O,{round:"",dense:"",disable:e.pagination.page<=1,onClick:o=>e.prevPage(),icon:"keyboard_arrow_left"},null,8,["disable","onClick"]),a(O,{round:"",dense:"",disable:e.pagination.page*e.pagination.rowsPerPage<v(g).maxRows,onClick:o=>e.nextPage(),icon:"keyboard_arrow_right"},null,8,["disable","onClick"])])])]),key:"1"}]),1032,["rows","columns","pagination","loading","visible-columns"])])}}});var dl=j(ul,[["__scopeId","data-v-b03a444e"]]);const fl=w=>(Be("data-v-ac46ba1e"),w=w(),Le(),w),ml=fl(()=>d("div",{class:"redText text-center"},[d("div",{class:"HeaderSize3"},"This page is a work in progress"),d("p",null,"The leaderboard might not be 100% correct")],-1)),vl=Y({__name:"keystone",setup(w){return(k,g)=>(s(),x("div",null,[ml,a(dl)]))}});var $l=j(vl,[["__scopeId","data-v-ac46ba1e"]]);export{$l as default};
