import{Q as C}from"./QSkeleton.87d17aa9.js";import{d as $,u as K,r as b,c as m,e as oe,S as V,o as z,f as re,w as U,g as A,h as i,i as h,j as s,t as v,k as R,l as f,m as w,n as S,p as r,q as _,_ as k,s as ue,v as I,x as B,a as j,y as G,Q as ie,z as F,A as Q,B as ce,F as H,C as L}from"./index.cb6acba7.js";import{H as le,L as de,r as q}from"./runTableView.e59af273.js";import{n as E}from"./numeral.61153226.js";import{Q as _e,a as T}from"./QTr.29a2f077.js";import{Q as he}from"./QTable.1aa9aac0.js";import{r as pe}from"./Role.f71eae21.js";import{_ as me}from"./PlayerText.fc7779ff.js";import"./index.a470a8fe.js";import"./keystoneView.2d596739.js";import"./QMarkupTable.b58c0bea.js";import"./QCheckbox.c4ce5bfe.js";const M=e=>(I("data-v-311b6882"),e=e(),B(),e),fe={class:"HeaderFont text-center"},ge=M(()=>s("h5",null,"Runs Completed in newest week",-1)),ve={class:"nrFont"},De=M(()=>s("br",null,null,-1)),we=M(()=>s("br",null,null,-1)),Se={class:"flex justify-around"},ke={class:"tableAutoSizing"},ye={class:"tableAutoSizing"},be=$({__name:"QuickRunsView",setup(e){const a=K().state.data;var c=a.apiUrl;let l=b(!0),t=b(null),n=b(0),u=b([]),p=b(null);const D=m(d=>a.Periodes),x=m(d=>a.Specs),P=m(d=>a.Classes),J=m(d=>a.settings),X=m(()=>E(n.value).format("0,0")),Y=()=>{var d=a.apiUrl;j.get(`${d}/KeystoneRun/leaderboard?from=0&amount=5`).then(g=>{p.value=g.data.list}).catch(g=>console.log(g))},Z=()=>{Y()},ee=()=>{var g;var d=a.apiUrl;j.get(`${d}/Stats/RunCount?weekId=${(g=D.value[0])==null?void 0:g.id}`).then(y=>{n.value=y.data}).catch(y=>console.log(y))},N=()=>{D.value&&D.value[0]&&ee()},te=oe();m(()=>V.GetDefaultView(te.screen.width,J));const ae=()=>{(t==null?void 0:t.state)!==1&&(l&&((t==null?void 0:t.state)===0||(t==null?void 0:t.state)==="disconnected")?t==null||t.start():setTimeout(d=>{},1e3))},ne=()=>{setTimeout(d=>{},1e4)};return z(()=>{N(),t=new le().withUrl(c.slice(0,-4)+"/KeystoneHub").configureLogging(de.Information).build(),t.on("disconnected",d=>{setTimeout(g=>{},1e3)}),Z()}),re(async()=>{await t.start(),ne(),t.invoke("RequestNewestRuns",5),t.on("GetNewestRuns",function(d){u.value=[...d]}),t.on("NewRunAdded",function(d){n.value++,u.value.push(d),u&&u.value.length>5&&(u.value=u.value.slice(Math.max(u.value.length-5,1)))})}),z(()=>{t.stop()}),U(D,()=>{N()}),U(l,()=>{l?(console.log("Starting connection.."),ae()):(console.log("Stopping connection.."),t.stop())}),(d,g)=>{const y=A("router-link");return i(),h("div",fe,[ge,s("div",null,[s("h5",ve,v(X.value),1)]),De,R(d.$slots,"default",{},void 0,!0),we,s("div",Se,[s("div",ke,[f(" Top Runs "),!w(p)||!P.value||!x.value?(i(),S(C,{key:0,style:{height:"350px"}})):(i(),S(q,{key:1,dense:!0,noAffixes:!0,noCreatedTime:!0,runs:w(p)},null,8,["runs"])),r(y,{to:"/leaderboard/keystone?page=1&season=1"},{default:_(()=>[f("See more...")]),_:1})]),s("div",ye,[f(" Recent Runs "),!w(u)||!P.value||!x.value?(i(),S(C,{key:0,style:{height:"350px"}})):(i(),S(q,{key:1,dense:!0,noAffixes:!0,noCreatedTime:!0,runs:w(ue).sortBy([...w(u)],se=>se.index)},null,8,["runs"])),r(y,{to:"/monitor"},{default:_(()=>[f("See more...")]),_:1})])])])}}});var xe=k(be,[["__scopeId","data-v-311b6882"]]);const $e={props:["cols","background","data","count"],data(){return{columns:[{name:"name",align:"left",label:"Dungeon",field:e=>e.id?e.id:e.zone_id,sortable:!0},{name:"ontime_percent",align:"right",label:"Success Rate",field:e=>Math.round(e.ontime_percent),sortable:!0},{name:"count",align:"right",label:"Count",field:"count",sortable:!0}]}},methods:{formatNr(e){return E(e).format("0.0a")},GetDungeonsDetails(e){for(let o=0;o<this.GetDungeons.length;o++){const a=this.GetDungeons[o];if(a.keystone_id===e)return a}}},computed:{...G(["GetDungeons"]),baseUrl(){return document.location.origin},initialPagination(){var e={sortBy:this.data&&this.data.data[0].count?"count":"ontime_percent",descending:!0,rowsPerPage:this.count};return e}}},Ce={key:0,class:"mainContainer"},Re={key:1};function Ge(e,o,a,c,l,t){return a.data&&a.data.data?(i(),h("div",Ce,[r(he,{rows:a.data.data,columns:l.columns,pagination:t.initialPagination,"rows-per-page-options":[],"row-key":"name",dark:"","hide-bottom":!0,color:"amber","visible-columns":a.cols},{pagination:_(()=>[]),body:_(n=>[r(_e,{props:n},{default:_(()=>[t.GetDungeonsDetails(n.colsMap.name.field(n.row))?(i(),S(T,{key:"name",props:n},{default:_(()=>[r(ie,{class:"dungeonImage","img-style":{transform:"scale(1.5)"},src:t.GetDungeonsDetails(n.colsMap.name.field(n.row)).imageurl},null,8,["img-style","src"]),f(" "+v(t.GetDungeonsDetails(n.colsMap.name.field(n.row)).name),1)]),_:2},1032,["props"])):F("",!0),a.cols.includes("ontime_percent")?(i(),S(T,{key:"ontime_percent",props:n},{default:_(()=>[f(v(n.colsMap.ontime_percent.field(n.row))+"% ",1)]),_:2},1032,["props"])):F("",!0),a.cols.includes("count")?(i(),S(T,{key:"count",props:n},{default:_(()=>[f(v(t.formatNr(n.row.count)),1)]),_:2},1032,["props"])):F("",!0)]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","visible-columns"])])):(i(),h("div",Re,[r(C,{style:{height:"200px","min-width":"600px"}})]))}var O=k($e,[["render",Ge]]);const Fe={props:["week"],methods:{...Q(["fetchDungeonCountData"]),FetchData(){!this.DungeonCountData&&this.week&&this.fetchDungeonCountData(this.week)}},computed:{...G(["GetDungeonCountData"]),DungeonCountData(){if(this.GetDungeonCountData){const e=this.GetDungeonCountData.filter(o=>o.id==this.week);if(e.length!=0)return e[0]}}},watch:{week(){this.FetchData()}},created(){this.FetchData()}};function Te(e,o,a,c,l,t){return i(),h("div",null,[R(e.$slots,"default",{data:t.DungeonCountData})])}var Ve=k(Fe,[["render",Te]]);const Ae={props:["week"],methods:{...Q(["fetchDungeonSuccessRateData"]),FetchData(){!this.Data&&this.week&&this.fetchDungeonSuccessRateData(this.week)}},computed:{...G(["GetDungeonSuccessRateData","GetSettings"]),Data(){if(this.GetDungeonSuccessRateData){const e=this.GetDungeonSuccessRateData.filter(o=>o.id===this.week&&this.GetSettings.max_runs===o.settings.max_runs&&this.GetSettings.limitbylowestdungeon===o.settings.limitbylowestdungeon&&this.GetSettings.min_keystonelevel===o.settings.min_keystonelevel);if(e.length!=0)return e[0]}}},watch:{week(){this.FetchData()}},created(){this.FetchData()}};function Ie(e,o,a,c,l,t){return i(),h("div",null,[R(e.$slots,"default",{data:t.Data})])}var Be=k(Ae,[["render",Ie]]);const Qe={class:"HeaderFont"},Me={class:"flex justify-around text-center"},Pe={class:"tableAutoSizing"},Ne=s("div",null,"Most played dungeons",-1),ze=s("br",null,null,-1),Ue={class:"tableAutoSizing"},je=s("div",null,"Highest success rate dungeons",-1),He=s("br",null,null,-1),Le=$({__name:"QuickDungeonView",setup(e){const a=K().state.data;b(0),m(t=>a.Dungeons_Data),m(t=>a.Dungeon_Count_Data);const c=m(t=>a.Periodes),l=m(()=>c!=null&&c.value?c.value[0].id:null);return(t,n)=>{const u=A("router-link");return i(),h("div",Qe,[s("div",Me,[s("div",Pe,[Ne,ze,r(Ve,{week:l.value},{default:_(({data:p})=>[r(O,{cols:["name","count"],background:!0,data:p,count:"5"},null,8,["data"])]),_:1},8,["week"]),r(u,{to:"/statistics/dungeons"},{default:_(()=>[f("See more...")]),_:1})]),s("div",Ue,[je,He,r(Be,{week:l.value},{default:_(({data:p})=>[r(O,{cols:["name","ontime_percent"],background:!0,data:p,count:"5"},null,8,["data"])]),_:1},8,["week"]),r(u,{to:"/statistics/dungeons"},{default:_(()=>[f("See more...")]),_:1})])])])}}}),qe={methods:{...Q(["fetchSpecData"]),FetchData(){(this.SelectedPeriode&&!this.SpecData||this.SpecData&&this.SpecData.length!==0)&&this.fetchSpecData()}},computed:{...G(["GetSpecData","SelectedPeriode"]),SpecData(){if(this.GetSpecData)return this.GetSpecData}},watch:{SelectedPeriode(){this.FetchData()}},created(){this.FetchData()}};function Oe(e,o,a,c,l,t){return i(),h("div",null,[R(e.$slots,"default",{data:t.SpecData})])}var Ke=k(qe,[["render",Oe]]);const Ee=e=>(I("data-v-6edc7e8a"),e=e(),B(),e),We={class:"Container shadow-24 greyBackground flex justify-around"},Je=Ee(()=>s("br",null,null,-1)),Xe={style:{"max-width":"200px"}},Ye=$({__name:"SpecPrettyViewer",props:{data:{type:Object,required:!0}},setup(e){const o=e,{data:a}=ce(o),c=m(()=>Math.round(a.value.score/a.value.runs*10)/10);return(l,t)=>(i(),h("div",We,[r(pe,{class:"_RoleIconSize",spec:w(a).spec},null,8,["spec"]),s("div",null,[Je,r(me,{id:w(a).spec,size:30},{default:_(n=>{var u,p;return[s("div",Xe,v((u=n.spec)==null?void 0:u.name)+" "+v((p=n.Class)==null?void 0:p.name)+" with a average score of "+v(c.value),1)]}),_:1},8,["id"])])]))}});var Ze=k(Ye,[["__scopeId","data-v-6edc7e8a"]]);const W=e=>(I("data-v-09073868"),e=e(),B(),e),et={class:"HeaderFont text-center"},tt=W(()=>s("br",null,null,-1)),at=W(()=>s("br",null,null,-1)),nt=$({__name:"TopSpecsView",setup(e){const o=c=>Object.values(V.groupBy(c,"role")).reverse(),a=c=>V._sortBy(c,l=>l.score/l.runs).reverse();return(c,l)=>{const t=A("router-link");return i(),h("div",et,[r(Ke,{class:"flex justify-around"},{default:_(({data:n})=>[n?(i(!0),h(H,{key:0},L(o(n.data),(u,p)=>{var D,x;return i(),h("div",{key:p},[s("div",null,"Top performing "+v((x=(D=u[0])==null?void 0:D.role)==null?void 0:x.toLowerCase())+" this week",1),tt,r(Ze,{data:a(u)[0]},null,8,["data"])])}),128)):(i(),h(H,{key:1},L(3,u=>r(C,{key:u,style:{height:"80px",width:"300px"}})),64))]),_:1}),at,r(t,{to:"/statistics/specs"},{default:_(()=>[f("Click here to see full list...")]),_:1})])}}});var st=k(nt,[["__scopeId","data-v-09073868"]]);const ot=s("br",null,null,-1),rt=s("br",null,null,-1),ut=s("br",null,null,-1),wt=$({__name:"home",setup(e){return(o,a)=>(i(),h("div",null,[r(xe,null,{default:_(()=>[r(st)]),_:1}),ot,r(Le),rt,ut]))}});export{wt as default};
