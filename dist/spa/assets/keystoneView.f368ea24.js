import{_ as P,d as E,h as d,i as _,p as a,q as r,Q as F,k as w,L as Q,j as s,t as i,m as u,ae as p,B as ee,r as N,w as te,u as le,c as U,a as A,o as ae,F as y,C as B,af as se,n as oe,ag as $,z as ne,M as re,O as G,S as ie,v as de,x as ue}from"./index.d11fe415.js";import{Q as ce,a as f}from"./QTr.a8711b58.js";import{Q as _e}from"./QTable.4edb768e.js";import"./numeral.04df9e7f.js";import{a as me}from"./index.b967c5e1.js";const fe={class:"flex text-center pointer talentComp"},pe={class:"talentLabel"},ve=E({__name:"Talent",props:{talent:null},setup(h){const z=h,{talent:g}=z;return(C,S)=>{var o,v,x;return d(),_("div",fe,[a(Q,{url:(v=(o=w(g))==null?void 0:o.spell)==null?void 0:v.spellIconUrl,size:30},{default:r(({link:k})=>[a(F,{class:"talentImg",src:k},null,8,["src"])]),_:1},8,["url"]),s("div",pe,i((x=w(g).talent)==null?void 0:x.name),1),a(p,null,{default:r(()=>{var k;return[u(i((k=w(g).talent)==null?void 0:k.description),1)]}),_:1})])}}});var he=P(ve,[["__scopeId","data-v-6cb524ce"]]);const m=h=>(de("data-v-59e9fce4"),h=h(),ue(),h),ge={key:0},ye={class:"text-center HeaderSize3"},we={class:"flex justify-center"},ke={key:0},be={key:1},$e={class:"flex justify-around text-center"},xe=m(()=>s("br",null,null,-1)),Te=m(()=>s("div",null,"Score",-1)),Ie={style:{width:"70%"}},ze=m(()=>s("div",null,"Affixes",-1)),Ce={class:"flex justify-around"},Se={style:{width:"35px",height:"35px"},class:"flex justify-center"},qe=m(()=>s("br",null,null,-1)),Le=m(()=>s("div",null,"Item Level",-1)),Ne=m(()=>s("br",null,null,-1)),Ue={class:"flex",style:{gap:"5px"}},Be=["href"],Fe={class:"flex justify-center"},Qe=m(()=>s("div",null,"Hove to see",-1)),je={class:"talentTooltip wrap"},Ve=["href","data-wowhead"],Me=["src"],Re=m(()=>s("i",{class:"material-icons",style:{color:"red"}},"clear",-1)),De=m(()=>s("i",{class:"material-icons",style:{color:"red"}},"clear",-1)),He=m(()=>s("i",{class:"material-icons",style:{color:"red"}},"clear",-1)),Ae={key:1},Ge=m(()=>s("br",null,null,-1)),Pe=m(()=>s("br",null,null,-1)),Ee=m(()=>s("br",null,null,-1)),Ke={class:"flex justify-center"},Oe=E({__name:"keystoneView",props:{id:{},data:{},noShadow:{type:Boolean}},setup(h){const z=h,{id:g,data:C,noShadow:S}=ee(z),o=N(null),v=N(!1),x=N({sortBy:"role",rowsPerPage:999,page:1});te(g,()=>D(g.value));const T=le().state.data,j=U(()=>T.Specs);U(()=>T.Classes);const K=U(()=>{if(o.value){var e=o.value.players.filter(l=>l.details&&l.details.equipped_item_level).map(l=>l.details.equipped_item_level);const t=e.reduce((l,c)=>l+c,0)/e.length||0;return Math.round(t*10)/10}}),O=(e,n)=>e.details.equipment.filter(t=>t.slot.replace("_1","").replace("_2","")==n.toUpperCase()),W=e=>{if(e==0)return 2;if(e==1)return 4;if(e==2)return 7;if(e==3)return 10},J=()=>{setTimeout(()=>{location.reload()},250)},b=e=>G.duration(e).format("hh:mm:ss"),V=e=>G(e).fromNow(),X=e=>{var l,c;if(!((l=e==null?void 0:e.details)!=null&&l.talents))return[];var t=((c=e==null?void 0:e.details)==null?void 0:c.talents).find(I=>{var H;return((H=I[0])==null?void 0:H.specId)===e.spec});return t},Y=e=>{var n=`item=${e.id}&ilvl=${e.item_level}`;return e.transmog&&(n+=`&transmog=${e.transmog}`),e.bonus_lists!==null&&e.bonus_lists!==void 0&&(n+=`&bonus=${e.bonus_lists.replace(",",":")}`),n},M=e=>{var n;return(n=L(e))==null?void 0:n.role},q=e=>{const n=L(e);return(n==null?void 0:n.role.toLowerCase())=="tank"?0:(n==null?void 0:n.role.toLowerCase())=="healer"?1:2},L=e=>j.value?j.value.find(n=>n.id==e):null,R=()=>{const e=ie.GetMoment(new Date).unix()*1e3;var n=T.apiUrl,t=o.value.players.filter(l=>l.details&&l.details.fetchTimestamp+36e5<e||!l.details);t.forEach(l=>{l&&(l.renewing=!0,A.get(`${n}/Player/new_details?character=${l.name}&realm=${l.realm}&region=${l.region}&timestamp=${o.value.time.completed_timestamp}`).then(c=>{l.details=c.data,l.renewing=!1,o.value.players=[...o.value.players]}).catch(c=>l.renewing=!1))})},D=e=>{var n=T.apiUrl;v.value=!0,A.get(`${n}/KeystoneRun?keystone_id=${e}`).then(t=>{v.value=!1,o.value=t.data,R()}).catch(t=>{console.log(t),v.value=!1})},Z=[{name:"role",label:"Role",sortable:!0,field:e=>q(e.spec),sort:(e,n,t,l)=>q(t.spec)-q(l.spec),format:(e,n)=>M(n.spec),align:"left"},{name:"name",label:"Name",field:"name",sortable:!0,align:"left"},{name:"ilvl",label:"ILVL",field:e=>e.details.equipped_item_level,sortable:!0,sort:(e,n,t,l)=>t.details.equipped_item_level-l.details.equipped_item_level,format:(e,n)=>n.details.equipped_item_level,align:"left"},{name:"talents",label:"Talents",field:"Talents",align:"center"},{name:"trinkets",label:"Trinkets",field:"Trinkets",align:"right"}];return ae(()=>{C.value?(o.value=C.value,R()):D(g.value)}),(e,n)=>(d(),_("div",{id:"mainDivView",class:re(`${w(S)?"":"shadow-24"}`)},[!v.value&&o.value?(d(),_("div",ge,[s("div",ye,i(o.value.zone.name)+" +"+i(o.value.level),1),s("div",we,[b(o.value.time.map_time-1e3-o.value.time.clear_time).startsWith("-")?(d(),_("p",ke,[u(" Cleared "),s("strong",null,i(" "+V(o.value.time.completed_timestamp)+" "),1),u(" in "),s("strong",null,i(" "+b(o.value.time.clear_time)),1),u(" . Over time by "+i(`${b(o.value.time.map_time-1e3-o.value.time.clear_time)}`.replace("-",""))+" ("+i(`${100-Math.round(o.value.time.clear_time/(o.value.time.map_time-1e3)*100)}`.replace("-",""))+"%) ",1)])):(d(),_("p",be,[u(" Cleared "),s("strong",null,i(" "+V(o.value.time.completed_timestamp)+" "),1),u(" in "),s("strong",null,i(" "+b(o.value.time.clear_time)),1),u(" . Under time by "+i(b(o.value.time.map_time-1e3-o.value.time.clear_time))+" ("+i(100-Math.round(o.value.time.clear_time/(o.value.time.map_time-1e3)*100))+"%) ",1)]))]),s("div",$e,[s("div",null,[xe,Te,s("div",null,i(Math.round(o.value.score*100)/100),1)]),s("div",Ie,[ze,s("div",Ce,[(d(!0),_(y,null,B(o.value.affixes.filter((t,l)=>t>0),(t,l)=>(d(),_("div",{key:l},[s("div",null,"Level "+i(W(l)),1),s("div",Se,[a(me,{size:35,class:"AffixImg",affixid:t,border:!0,tooltip:!0,customSize:!0},null,8,["affixid"])])]))),128))])]),s("div",null,[qe,Le,s("div",null,i(w(K)),1)])]),Ne,a(_e,{columns:Z,rows:o.value.players,dark:"",dense:"",grid:e.$q.screen.width<710,bordered:e.$q.screen.width<710,flat:e.$q.screen.width<710||w(S),"card-class":"background HeaderFont","table-class":"HeaderFont","table-header-class":"HeaderFont",pagination:x.value,"row-key":"sqlId","hide-bottom":""},{body:r(t=>[a(ce,{props:t},{default:r(()=>[a(f,{key:"role",props:t},{default:r(()=>{var l;return[a(Q,{url:`roles/${(l=M(t.row.spec))==null?void 0:l.toLowerCase()}.png`},{default:r(({link:c})=>[a(F,{id:"roleImage",src:c},null,8,["src"])]),_:2},1032,["url"])]}),_:2},1032,["props"]),a(f,{key:"name",props:t},{default:r(()=>{var l;return[s("div",Ue,[a(Q,{url:`${(l=L(t.row.spec))==null?void 0:l.icon_url}`},{default:r(({link:c})=>[a(F,{class:"itemIcon",src:c},null,8,["src"])]),_:2},1032,["url"]),a(se,{spec:t.row.spec},{default:r(()=>[s("a",{href:`/lookup/player/${t.row.region}/${t.row.realm}/${t.row.name}`,onClick:n[0]||(n[0]=c=>J())},i(t.row.name),9,Be)]),_:2},1032,["spec"])])]}),_:2},1032,["props"]),t.row.details?(d(),_(y,{key:0},[a(f,{key:"ilvl",props:t},{default:r(()=>[u(i(t.row.details.equipped_item_level),1)]),_:2},1032,["props"]),a(f,{key:"talents",props:t},{default:r(()=>[s("div",Fe,[Qe,a(p,null,{default:r(()=>[s("div",je,[(d(!0),_(y,null,B(X(t.row),l=>(d(),oe(he,{talent:l,key:`${l.id}`},null,8,["talent"]))),128))])]),_:2},1024)])]),_:2},1032,["props"]),a(f,{key:"trinkets",props:t},{default:r(()=>[(d(!0),_(y,null,B(O(t.row,"TRINKET"),(l,c)=>{var I;return d(),_("a",{key:c,href:`http://www.wowhead.com/item=${l.id}`,"data-wowhead":Y(l)},[s("img",{class:"itemIcon",src:(I=l.iconUrl)!=null?I:"https://wow.zamimg.com/images/wow/icons/medium/"+l.icon+".jpg"},null,8,Me)],8,Ve)}),128))]),_:2},1032,["props"])],64)):t.row&&t.row.renewing?(d(),_(y,{key:1},[a(f,{key:"necklvl",props:t},{default:r(()=>[a($,{color:"yellow",size:"15px"}),a(p,null,{default:r(()=>[u("fetching info from blizzard")]),_:1})]),_:2},1032,["props"]),a(f,{key:"ilvl",props:t},{default:r(()=>[a($,{color:"yellow",size:"15px"}),a(p,null,{default:r(()=>[u("fetching info from blizzard")]),_:1})]),_:2},1032,["props"]),a(f,{key:"talents",props:t},{default:r(()=>[a($,{color:"yellow",size:"15px"}),a(p,null,{default:r(()=>[u("fetching info from blizzard")]),_:1})]),_:2},1032,["props"]),a(f,{key:"trinkets",props:t},{default:r(()=>[a($,{color:"yellow",size:"15px"}),a(p,null,{default:r(()=>[u("fetching info from blizzard")]),_:1})]),_:2},1032,["props"])],64)):(d(),_(y,{key:2},[a(f,{key:"ilvl",props:t},{default:r(()=>[Re,a(p,null,{default:r(()=>[u("Could not gather details of player")]),_:1})]),_:2},1032,["props"]),a(f,{key:"talents",props:t},{default:r(()=>[De,a(p,null,{default:r(()=>[u("Could not gather details of player")]),_:1})]),_:2},1032,["props"]),a(f,{key:"trinkets",props:t},{default:r(()=>[He,a(p,null,{default:r(()=>[u("Could not gather details of player")]),_:1})]),_:2},1032,["props"])],64))]),_:2},1032,["props"])]),_:1},8,["columns","rows","grid","bordered","flat","pagination"])])):v.value&&!o.value?(d(),_("div",Ae,[Ge,Pe,Ee,s("div",Ke,[a($,{color:"grey",size:"15em"})])])):ne("",!0)],2))}});var et=P(Oe,[["__scopeId","data-v-59e9fce4"]]);export{he as T,et as k};
