import{D as Ee,E as Le,bq as Ae,G as He,c as k,r as A,br as ze,w as re,bs as Se,bt as Ge,aJ as Ne,H as ne,J as Be,ac as Oe,_ as me,d as _e,u as ge,h as o,i as m,j as f,n as W,ab as de,z as F,S as se,B as we,s as Ue,F as $,C as K,q as v,M as Ce,k as S,m as T,t as p,p as s,ae as te,N as Y,L as ie,y as Qe,a as Fe,g as xe,az as Re,v as Te,x as De,o as qe,aB as ke,Q as ce,af as ve}from"./index.d11fe415.js";import{Q as ae,a as Ve,b as le,c as Ie}from"./QTabPanels.f4441b25.js";import{Q as je}from"./QInput.a9805111.js";import{Q as Pe}from"./AffixSelector.70556ef8.js";import{Q as pe,a as N}from"./QTr.a8711b58.js";import{Q as fe}from"./QTable.4edb768e.js";function oe(e,y){return[!0,!1].includes(e)?e:y}var We=Ee({name:"QPagination",props:{...Le,modelValue:{type:Number,required:!0},min:{type:[Number,String],default:1},max:{type:[Number,String],required:!0},maxPages:{type:[Number,String],default:0,validator:e=>(typeof e=="string"?parseInt(e,10):e)>=0},inputStyle:[Array,String,Object],inputClass:[Array,String,Object],size:String,disable:Boolean,input:Boolean,iconPrev:String,iconNext:String,iconFirst:String,iconLast:String,toFn:Function,boundaryLinks:{type:Boolean,default:null},boundaryNumbers:{type:Boolean,default:null},directionLinks:{type:Boolean,default:null},ellipses:{type:Boolean,default:null},ripple:{type:[Boolean,Object],default:null},round:Boolean,rounded:Boolean,flat:Boolean,outline:Boolean,unelevated:Boolean,push:Boolean,glossy:Boolean,color:{type:String,default:"primary"},textColor:String,activeDesign:{type:String,default:"",values:e=>e===""||Ae.includes(e)},activeColor:String,activeTextColor:String,gutter:String,padding:{type:String,default:"3px 2px"}},emits:["update:modelValue"],setup(e,{emit:y}){const{proxy:_}=Be(),{$q:D}=_,n=He(e,D),r=k(()=>parseInt(e.min,10)),x=k(()=>parseInt(e.max,10)),M=k(()=>parseInt(e.maxPages,10)),i=k(()=>b.value+" / "+x.value),R=k(()=>oe(e.boundaryLinks,e.input)),H=k(()=>oe(e.boundaryNumbers,!e.input)),Q=k(()=>oe(e.directionLinks,e.input)),O=k(()=>oe(e.ellipses,!e.input)),w=A(null),b=k({get:()=>e.modelValue,set:l=>{if(l=parseInt(l,10),e.disable||isNaN(l))return;const a=ze(l,r.value,x.value);e.modelValue!==a&&y("update:modelValue",a)}});re(()=>`${r.value}|${x.value}`,()=>{b.value=e.modelValue});const h=k(()=>"q-pagination row no-wrap items-center"+(e.disable===!0?" disabled":"")),d=k(()=>e.gutter in Se?`${Se[e.gutter]}px`:e.gutter||null),g=k(()=>d.value!==null?`--q-pagination-gutter-parent:-${d.value};--q-pagination-gutter-child:${d.value}`:null),u=k(()=>{const l=[e.iconFirst||D.iconSet.pagination.first,e.iconPrev||D.iconSet.pagination.prev,e.iconNext||D.iconSet.pagination.next,e.iconLast||D.iconSet.pagination.last];return D.lang.rtl===!0?l.reverse():l}),V=k(()=>({"aria-disabled":e.disable===!0?"true":"false",role:"navigation"})),z=k(()=>Ge(e,"flat")),U=k(()=>({[z.value]:!0,round:e.round,rounded:e.rounded,padding:e.padding,color:e.color,textColor:e.textColor,size:e.size,ripple:e.ripple!==null?e.ripple:!0})),J=k(()=>{const l={[z.value]:!1};return e.activeDesign!==""&&(l[e.activeDesign]=!0),l}),Z=k(()=>({...J.value,color:e.activeColor||e.color,textColor:e.activeTextColor||e.textColor})),q=k(()=>{let l=Math.max(M.value,1+(O.value?2:0)+(H.value?2:0));const a={pgFrom:r.value,pgTo:x.value,ellipsesStart:!1,ellipsesEnd:!1,boundaryStart:!1,boundaryEnd:!1,marginalStyle:{minWidth:`${Math.max(2,String(x.value).length)}em`}};return M.value&&l<x.value-r.value+1&&(l=1+Math.floor(l/2)*2,a.pgFrom=Math.max(r.value,Math.min(x.value-l+1,e.modelValue-Math.floor(l/2))),a.pgTo=Math.min(x.value,a.pgFrom+l-1),H.value&&(a.boundaryStart=!0,a.pgFrom++),O.value&&a.pgFrom>r.value+(H.value?1:0)&&(a.ellipsesStart=!0,a.pgFrom++),H.value&&(a.boundaryEnd=!0,a.pgTo--),O.value&&a.pgTo<x.value-(H.value?1:0)&&(a.ellipsesEnd=!0,a.pgTo--)),a});function X(l){b.value=l}function ee(l){b.value=b.value+l}const j=k(()=>{function l(){b.value=w.value,w.value=null}return{"onUpdate:modelValue":a=>{w.value=a},onKeyup:a=>{Ne(a,13)===!0&&l()},onBlur:l}});function G(l,a,t){const C={"aria-label":a,"aria-current":"false",...U.value,...l};return t===!0&&Object.assign(C,{"aria-current":"true",...Z.value}),a!==void 0&&(e.toFn!==void 0?C.to=e.toFn(a):C.onClick=()=>{X(a)}),ne(Oe,C)}return Object.assign(_,{set:X,setByOffset:ee}),()=>{const l=[],a=[];let t;if(R.value===!0&&(l.push(G({key:"bls",disable:e.disable||e.modelValue<=r.value,icon:u.value[0]},r.value)),a.unshift(G({key:"ble",disable:e.disable||e.modelValue>=x.value,icon:u.value[3]},x.value))),Q.value===!0&&(l.push(G({key:"bdp",disable:e.disable||e.modelValue<=r.value,icon:u.value[1]},e.modelValue-1)),a.unshift(G({key:"bdn",disable:e.disable||e.modelValue>=x.value,icon:u.value[2]},e.modelValue+1))),e.input!==!0){t=[];const{pgFrom:C,pgTo:E,marginalStyle:P}=q.value;if(q.value.boundaryStart===!0){const c=r.value===e.modelValue;l.push(G({key:"bns",style:P,disable:e.disable,label:r.value},r.value,c))}if(q.value.boundaryEnd===!0){const c=x.value===e.modelValue;a.unshift(G({key:"bne",style:P,disable:e.disable,label:x.value},x.value,c))}q.value.ellipsesStart===!0&&l.push(G({key:"bes",style:P,disable:e.disable,label:"\u2026",ripple:!1},C-1)),q.value.ellipsesEnd===!0&&a.unshift(G({key:"bee",style:P,disable:e.disable,label:"\u2026",ripple:!1},E+1));for(let c=C;c<=E;c++)t.push(G({key:`bpg${c}`,style:P,disable:e.disable,label:c},c,c===e.modelValue))}return ne("div",{class:h.value,...V.value},[ne("div",{class:"q-pagination__content row no-wrap items-center",style:g.value},[...l,e.input===!0?ne(je,{class:"inline",style:{width:`${i.value.length/1.5}em`},type:"number",dense:!0,value:w.value,disable:e.disable,dark:n.value,borderless:!0,inputClass:e.inputClass,inputStyle:e.inputStyle,placeholder:i.value,min:r.value,max:x.value,...j.value}):ne("div",{class:"q-pagination__middle row justify-center"},t),...a])])}}});const $e={class:"flex justify-around"},Ke=_e({__name:"ClassFilter",props:{type:{}},emits:["SpecChange"],setup(e,{emit:y}){const _=A({dps:[],healer:null,tank:null}),D={HUNTER:[.67,.83,.45],WARLOCK:[.53,.53,.93],PRIEST:[1,1,1],PALADIN:[.96,.55,.73],MAGE:[.25,.78,.92],ROGUE:[1,.96,.41],DRUID:[1,.49,.04],SHAMAN:[0,.44,.87],WARRIOR:[.78,.61,.43],DEATHKNIGHT:[.77,.12,.23],MONK:[0,1,.59],DEMONHUNTER:[.64,.19,.79]},r=ge().state.data,x=k(()=>r.Classes),M=k(()=>r.Specs),i=(b,h)=>se.select(b,h),R=b=>{if(!x.value)return null;for(let h=0;h<x.value.length;h++){const d=x.value[h];if(b==d.id)return d}},H=b=>{var h=[];return M.value&&M.value.forEach(d=>{if(d.role==b){var g=R(d.class);if(!g)return null;h.push({label:(d==null?void 0:d.name)+" "+(g==null?void 0:g.name),value:d.id,color:w(g==null?void 0:g.name)})}}),h},Q=()=>{setTimeout(()=>{var b="";_.value.healer!=null&&(b+="&specs="+_.value.healer.value),_.value.tank!=null&&(b+="&specs="+_.value.tank.value),_.value.dps&&_.value.dps.forEach(h=>{b+="&specs="+h.value}),y("SpecChange",b)},50)},O=()=>{_.value.dps&&_.value.dps.length>3&&_.value.dps.splice(0,1),Q()},w=b=>{var g;var h=D[String(b).replace(" ","").toUpperCase()],d=(g=x.value)==null?void 0:g.find(u=>{var V;return((V=u.name)==null?void 0:V.toLowerCase())==(b==null?void 0:b.toLowerCase())});if(d!=null&&d.color)return d.color;try{return"rgb("+h[0]*255+","+h[1]*255+","+h[2]*255+")"}catch{return"rgb(255,255,255)"}};return(b,h)=>(o(),m("div",null,[f("div",$e,[e.type!=3?(o(),W(de,{key:0,dark:"","onUpdate:modelValue":[h[0]||(h[0]=d=>Q()),h[1]||(h[1]=d=>_.value.tank=d)],modelValue:_.value.tank,label:"Tank","display-value":`${_.value.tank?_.value.tank.label:"Any tank"}`,options:H("TANK"),clearable:""},null,8,["modelValue","display-value","options"])):F("",!0),e.type!=3?(o(),W(de,{key:1,dark:"","onUpdate:modelValue":[h[2]||(h[2]=d=>Q()),h[3]||(h[3]=d=>_.value.healer=d)],modelValue:_.value.healer,label:"Healer","display-value":`${_.value.healer?_.value.healer.label:"Any healer"}`,options:H("HEALER"),clearable:""},null,8,["modelValue","display-value","options"])):F("",!0),e.type!=2?(o(),W(de,{key:2,dark:"","onUpdate:modelValue":[h[4]||(h[4]=d=>O()),h[5]||(h[5]=d=>_.value.dps=d)],modelValue:_.value.dps,label:"Damge Dealers","display-value":`${_.value.dps&&_.value.dps.length>0?i(_.value.dps,"label").join(","):"Any dps"}`,options:H("DAMAGE"),clearable:"",multiple:""},null,8,["modelValue","display-value","options"])):F("",!0)])]))}});var ue=me(Ke,[["__scopeId","data-v-4a350c2f"]]);const Je={id:"Combodiv",ref:"ComboWindow",class:"HeaderFont Centertext flex flex-center"},Xe=["src"],Ye=["src"],Ze=["src"],et=_e({__name:"DpsSetViewer",props:{SpecFilter:{type:String},setup:{type:Object},type:{type:Number}},setup(e){const y=e,{SpecFilter:_,setup:D,type:n}=we(y);A("100");const r={HUNTER:[.67,.83,.45],WARLOCK:[.53,.53,.93],PRIEST:[1,1,1],PALADIN:[.96,.55,.73],MAGE:[.25,.78,.92],ROGUE:[1,.96,.41],DRUID:[1,.49,.04],SHAMAN:[0,.44,.87],WARRIOR:[.78,.61,.43],DEATHKNIGHT:[.77,.12,.23],MONK:[0,1,.59],DEMONHUNTER:[.64,.19,.79]},M=ge().state.data,i=k(()=>M.Specs),R=k(()=>M.Classes),H=k(()=>{for(var d=_.value.split("&specs="),g=0;g<d.length-1;g++)d[g]===""&&d.splice(g,1);return d}),Q=k(()=>{var d=[];O.value.forEach(u=>{var V=O.value.indexOf(u);n.value==3&&_.value&&Ue.contains(H.value,String(u))&&(V+=-99999),d.push({value:u,index:V})});var g=[];return se._sortBy(d,"index").forEach(u=>{g.push(u.value)}),g}),O=k(()=>{var d=[];if(d=D.value.split("-"),!D.value.includes("-"))return JSON.parse(D.value);var g=[];for(let u=0;u<d.length;u++){const V=JSON.parse(d[u]);if(n.value==2&&u<=1)for(let z=0;z<V.length;z++){const U=V[z];g.push(U)}else if(n.value==3&&u>1)for(let z=0;z<V.length;z++){const U=V[z];g.push(U)}}return g}),w=d=>{if(!i.value)return null;for(let g=0;g<i.value.length;g++){const u=i.value[g];if(d==u.id)return u}},b=d=>{if(!R.value)return null;for(let g=0;g<R.value.length;g++){const u=R.value[g];if(d==u.id)return u}},h=d=>{var g=r[String(d).replace(" ","").toUpperCase()],u="rgb("+g[0]*255+", "+g[1]*255+", "+g[2]*255+")";return u};return(d,g)=>(o(),m("div",Je,[(o(!0),m($,null,K(S(Q),(u,V)=>{var z,U;return o(),W(ie,{url:`roles/${(U=(z=w(u))==null?void 0:z.role)==null?void 0:U.toLowerCase()}.png`},{default:v(({link:J})=>{var Z,q,X,ee,j,G,l,a,t,C,E,P;return[V==0?(o(),m("div",{class:Ce([{SpecFieldTwo:S(O).length==2,SpecFieldThree:S(O).length==3},"specMarginRight RoundLeftSideDiv SideDiv"]),key:Math.random()+u+V+"SpecViewer"},[S(n)==2||S(n)+V==30?(o(),m("img",{key:0,class:"absolute-left",style:{left:"-16px",width:"25px","margin-top":"2px"},src:J},null,8,Xe)):F("",!0),f("div",{class:"HiddenOverflow",style:Y("color: "+h((q=b((Z=w(u))==null?void 0:Z.class))==null?void 0:q.name))},[T(p((X=w(u))==null?void 0:X.name)+" ",1),s(te,null,{default:v(()=>{var c,I,L;return[T(p(((c=w(u))==null?void 0:c.name)+" "+((L=b((I=w(u))==null?void 0:I.class))==null?void 0:L.name)),1)]}),_:2},1024)],4)],2)):F("",!0),V==1&&((ee=w(u))==null?void 0:ee.role)!=="HEALER"?(o(),m("div",{class:"SpecFieldThree spec specMarginLeft specMarginRight SideDiv",key:Math.random()+u+V+"SpecViewer"},[S(n)==2||S(n)+V==30?(o(),m("img",{key:0,class:"absolute-left",style:{left:"-16px",width:"25px","margin-top":"2px"},src:J},null,8,Ye)):F("",!0),f("div",{class:"HiddenOverflow",style:Y("color: "+h((G=b((j=w(u))==null?void 0:j.class))==null?void 0:G.name))},[T(p((l=w(u))==null?void 0:l.name)+" ",1),s(te,null,{default:v(()=>{var c,I,L;return[T(p(((c=w(u))==null?void 0:c.name)+" "+((L=b((I=w(u))==null?void 0:I.class))==null?void 0:L.name)),1)]}),_:2},1024)],4)])):F("",!0),V==2||((a=w(u))==null?void 0:a.role)=="HEALER"?(o(),m("div",{class:Ce([{SpecFieldTwo:S(O).length==2,SpecFieldThree:S(O).length==3},"relative-position specMarginLeft RoundRightSideDiv SideDiv"]),key:Math.random()+u+V+"SpecViewer"},[((t=w(u))==null?void 0:t.role)=="HEALER"?(o(),m("img",{key:0,class:"absolute-right",style:{right:"-16px",width:"25px","margin-top":"2px","z-index":"1000"},src:J},null,8,Ze)):F("",!0),f("div",{class:"HiddenOverflow",style:Y("color: "+h((E=b((C=w(u))==null?void 0:C.class))==null?void 0:E.name))},[T(p((P=w(u))==null?void 0:P.name)+" ",1),s(te,null,{default:v(()=>{var c,I,L;return[T(p(((c=w(u))==null?void 0:c.name)+" "+((L=b((I=w(u))==null?void 0:I.class))==null?void 0:L.name)),1)]}),_:2},1024)],4)],2)):F("",!0)]}),_:2},1032,["url"])}),256))],512))}});const tt={props:["dungeon"],data(){return{data:null,ComboSize:700,ComboSizeTop:900,from:1,SpecFilter:null,type:1,request_failed:!1,fetchingData:!1,tab:"Team"}},watch:{SelectedPeriode(){this.DataChange()},type(){this.SpecFilter="",this.from===1&&this.DataChange(),this.from=1},from(){this.DataChange()}},computed:{...Qe(["SelectedPeriode"]),ownPage(){return this.$route.path=="/compositions"},Settings(){return this.$store.state.data.settings}},methods:{timeago(e){return se.TimeFromNow(e)},DataChange(){this.request_failed=!1,this.data=null,this.GetPage()},GetPoints(e,y){return se.GetPoints(e,this.Settings.score_type,this.data.total_score,y)},RegisterSpecChange(e){this.SpecFilter=e,this.DataChange(),this.from=1},GetPage(){var i;var e=(i=this.SelectedPeriode)==null?void 0:i.id;if(!e)return null;var y=this.Settings.max_runs,_=(this.from-1)*5,D=this.type,n=5,r=this,x=this.$store.state.data.apiUrl,M=x+"/Composition?periode="+e+"&runs="+y+"&from="+_+"&amount="+n+"&type="+D;this.dungeon&&(M+="&dungeon="+this.dungeon),this.SpecFilter&&(M+=this.SpecFilter),this.fetchingData=!0,Fe.get(M).then(function(R){r.data=R.data,r.fetchingData=!1}).catch(function(R){console.log(R),r.request_failed=!0,r.fetchingData=!1})},CComboSize(){if(this.$refs.CompMainWindow){var e=this.$refs.CompMainWindow.clientWidth;return e<700?e+=205:e-=240,this.ComboSize=e,e}else return this.ComboSize=700,700},CComboSizeTop(){if(this.$refs.CompoItems){var e=this.$refs.CompoItems.clientWidth;return e}else return 900},AddRole(e,y){return e&&e.forEach(_=>{_.specRole=y}),e},CombindList(e,y){var _=[];return e&&y&&(e.forEach(D=>{D.specRole="tank",_.push(D)}),y.forEach(D=>{D.specRole="healer",_.push(D)})),_}},created(){this.GetPage()},components:{DpsSetViewer:et,ClassFilter:ue}},he=e=>(Te("data-v-623509e0"),e=e(),De(),e),at={ref:"CompMainWindow"},lt={class:"HeaderFontv2 background hideScroll"},st={key:0},nt={id:"CompositionListTeam",ref:"CompoItems"},ot={class:"CompoItem flex",style:{"margin-top":"15px"}},rt={class:"CompoItemInfo relative-position"},it={class:"absolute-left"},ut={class:"center",style:{"margin-left":"27px"}},dt={id:"CompoItemRank",class:"Centertext flex flex-center"},ct={id:"CompoItemScore",class:"Centertext flex flex-center"},vt={key:0},pt={id:"CompoItemRuns",class:"Centertext flex flex-center"},ft={key:0},mt={id:"CompositionListTeam",ref:"CompoItems"},_t={class:"CompoItem flex",style:{"margin-top":"15px"}},gt={class:"CompoItemInfoTop relative-position"},ht={class:"flex flex-start Centertext"},yt={id:"CompoItemRankTop",class:"Centertext flex flex-center"},bt={id:"CompoItemScoreTop",class:"Centertext flex flex-center"},St={key:0},Ct={id:"CompoItemRunsTop",class:"Centertext flex flex-center"},xt={key:0},kt={id:"CompositionListTeam",ref:"CompoItems"},wt={class:"CompoItem flex",style:{"margin-top":"15px"}},Ft={class:"CompoItemInfoTop relative-position"},Rt={class:"flex flex-start Centertext"},Tt={id:"CompoItemRankTop",class:"Centertext flex flex-center"},Dt={id:"CompoItemScoreTop",class:"Centertext flex flex-center"},Vt={key:0},It={id:"CompoItemRunsTop",class:"Centertext flex flex-center"},Pt={key:0,class:"HeaderFont"},Mt={key:0,class:"HeaderFont Centertext"},Et=he(()=>f("h3",null,"There are no composition data for your request",-1)),Lt=[Et],At={key:0,class:"flex flex-center"},Ht={key:1},zt=he(()=>f("h3",null,"API Request failed!",-1)),Gt=[zt],Nt={key:2,class:"HeaderFont Centertext no-margin"},Bt={style:{"font-size":"12px"}},Ot=he(()=>f("div",{style:{"font-size":"9px"}},'("Amount of runs" is the only setting that affect composition data)',-1));function Ut(e,y,_,D,n,r){const x=xe("ClassFilter"),M=xe("DpsSetViewer");return o(),m("div",at,[s(Re,{onResize:y[0]||(y[0]=i=>r.CComboSize())}),f("div",lt,[s(Ve,{modelValue:n.type,"onUpdate:modelValue":y[1]||(y[1]=i=>n.type=i),animated:"",swipeable:"",color:"3a3a3a",align:"justify"},{default:v(()=>[s(ae,{default:"",name:1,label:"Team"}),s(ae,{name:2,label:"Healer & Tank"}),s(ae,{name:3,label:"DPS"})]),_:1},8,["modelValue"]),f("div",null,[s(Ie,{modelValue:n.type,"onUpdate:modelValue":y[5]||(y[5]=i=>n.type=i),class:"background",animated:""},{default:v(()=>[s(le,{name:1},{default:v(()=>[s(x,{onSpecChange:y[2]||(y[2]=i=>r.RegisterSpecChange(i)),type:n.type},null,8,["type"]),n.data&&n.data.type==n.type?(o(),m("div",st,[f("div",nt,[(o(!0),m($,null,K(n.data.comps,i=>(o(),m("div",{class:"flex flex-center",key:Math.random()+i.score},[f("div",ot,[f("div",rt,[f("div",it,[f("div",ut,[f("div",dt,p(i.rank),1)])]),f("div",ct,[T("Score: "+p(r.GetPoints(i.score,i.runs))+" ",1),r.Settings.score_type=="percent"?(o(),m("div",vt,"%")):F("",!0)]),f("div",pt,"Runs: "+p(i.runs),1)]),f("div",{class:"ComboShower",style:Y("width: "+n.ComboSize+"px;")},[s(M,{type:"2",SpecFilter:n.SpecFilter,setup:i.setup},null,8,["SpecFilter","setup"]),s(M,{type:"3",SpecFilter:n.SpecFilter,setup:i.setup},null,8,["SpecFilter","setup"])],4)])]))),128))],512)])):F("",!0)]),_:1}),s(le,{name:2},{default:v(()=>[s(x,{class:"hideScroll",onSpecChange:y[3]||(y[3]=i=>r.RegisterSpecChange(i)),type:n.type},null,8,["type"]),n.data&&n.data.type==n.type?(o(),m("div",ft,[f("div",mt,[(o(!0),m($,null,K(n.data.comps,i=>(o(),m("div",{class:"flex flex-center",key:Math.random()+i.score},[f("div",_t,[f("div",gt,[f("div",ht,[f("div",yt,p(i.rank),1),f("div",bt,[T("Score: "+p(r.GetPoints(i.score,i.runs))+" ",1),r.Settings.score_type=="percent"?(o(),m("div",St,"%")):F("",!0)]),f("div",Ct,"Runs: "+p(i.runs),1)])]),f("div",{class:"ComboShowerTop",style:Y("width: "+n.ComboSizeTop+"px;")},[s(M,{type:"2",SpecFilter:n.SpecFilter,setup:i.setup},null,8,["SpecFilter","setup"])],4)])]))),128))],512)])):F("",!0)]),_:1}),s(le,{name:3},{default:v(()=>[s(x,{onSpecChange:y[4]||(y[4]=i=>r.RegisterSpecChange(i)),type:n.type},null,8,["type"]),n.data&&n.data.type==n.type?(o(),m("div",xt,[f("div",kt,[(o(!0),m($,null,K(n.data.comps,i=>(o(),m("div",{class:"flex flex-center",key:Math.random()+i.score},[f("div",wt,[f("div",Ft,[f("div",Rt,[f("div",Tt,p(i.rank),1),f("div",Dt,[T("Score: "+p(r.GetPoints(i.score,i.runs))+" ",1),r.Settings.score_type=="percent"?(o(),m("div",Vt,"%")):F("",!0)]),f("div",It,"Runs: "+p(i.runs),1)])]),f("div",{class:"ComboShowerTop",style:Y("width: "+n.ComboSizeTop+"px;")},[s(M,{type:"3",SpecFilter:n.SpecFilter,setup:i.setup},null,8,["SpecFilter","setup"])],4)])]))),128))],512)])):F("",!0)]),_:1})]),_:1},8,["modelValue"]),n.data?(o(),m("div",Pt,[n.data&&n.data.comps.length==0?(o(),m("div",Mt,Lt)):F("",!0),s(We,{class:"flex flex-center",modelValue:n.from,"onUpdate:modelValue":y[6]||(y[6]=i=>n.from=i),color:"grey",min:1,max:Math.ceil(n.data.query_results/5),"max-pages":6,"direction-links":""},null,8,["modelValue","max"])])):F("",!0)])]),n.fetchingData?(o(),m("div",At,[s(Pe,{style:{color:"rgb(161, 161, 161)"},size:500})])):F("",!0),n.request_failed?(o(),m("div",Ht,Gt)):F("",!0),n.data?(o(),m("div",Nt,[f("div",Bt,"Data generated "+p(r.timeago(n.data.generated_timestamp)),1),Ot])):F("",!0)],512)}var ca=me(tt,[["render",Ut],["__scopeId","data-v-623509e0"]]);const Me=e=>(Te("data-v-6899461a"),e=e(),De(),e),Qt={class:"HeaderFontv2 background hideScroll"},qt={key:0},jt={class:"flex justify-between"},Wt={key:0},$t={class:"flex justify-between"},Kt={key:0},Jt={class:"flex justify-between"},Xt={key:0,class:"flex flex-center"},Yt={key:1},Zt=Me(()=>f("h3",null,"API Request failed!",-1)),ea=[Zt],ta={key:2,class:"HeaderFont Centertext no-margin"},aa={style:{"font-size":"12px"}},la=Me(()=>f("div",{style:{"font-size":"9px"}},'("Amount of runs" is the only setting that affect composition data)',-1)),sa=_e({__name:"CompositionTableView",props:{dungeon:{}},setup(e){const y=e,{dungeon:_}=we(y);let D=A({rowsPerPage:12,page:1,sortBy:"tscore",descending:!0});const n=A([{name:"tank",label:"Tank",align:"left"},{name:"healer",label:"Healer",align:"left"},{name:"damage",label:"Damage",align:"left"},{name:"runs",label:"Runs",field:l=>l.runs,sortable:!0,align:"center"},{name:"tscore",label:"Score",field:l=>l.tscore,sortable:!0,align:"center"},{name:"ascore",label:"Avg score",field:l=>l.ascore,sort:(l,a,t,C)=>t.ascore-C.ascore,sortable:!0,align:"center"},{name:"intime_rate",label:"Success rate",field:l=>l.success_rate,sortable:!0,align:"center"}]);let r=A(null),x=A(700);A(900);let M=A(1),i=A(null),R=A(1),H=A(!1),Q=A(!1);A("Team");const w=ge().state.data,b=k(()=>w.SelectedPeriode),h=k(()=>w.Specs),d=k(()=>w.Classes),g=k(()=>w.settings);re(b,()=>{U()}),re(R,()=>{i.value="",M.value===1&&U(),M.value=1}),re(M,()=>{U()});const u=l=>{var a=["runs","tscore","ascore"];return l==1?(a.push("tank"),a.push("healer"),a.push("damage")):l==2?(a.push("tank"),a.push("healer")):l==3&&a.push("damage"),r.value.comps&&r.value.comps.length!=0&&r.value.comps[0].success_rate&&a.push("intime_rate"),a},V=l=>{var a=[];if(l){var t=l.split("-");for(let P=0;P<t.length;P++){const c=t[P].replace("[","").replace("]","");var C=[];if(c.includes(",")){var E=c.split(",");for(let I=0;I<E.length;I++){const L=E[I];C.push(G(L))}}else C.push(G(c));a.push(C)}}return a},z=l=>se.TimeFromNow(l),U=()=>{H.value=!1,r.value=null,q()},J=l=>{i.value=l,U(),M.value=1},Z=(l,a,t,C)=>se.GetPoints(l,a,t,C),q=()=>{var l=b.value;if(!!l){var a=g.value.max_runs,t=0,C=R.value,E=5e3,P=w.apiUrl,c=P+"/Composition?periode="+l+"&runs="+a+"&from="+t+"&amount="+E+"&type="+C;_.value&&(c+="&dungeon="+_.value),i.value&&(c+=i.value),Q.value=!0,Fe.get(c).then(function(I){var L=I.data,ye=0,be=0;I.data.comps.forEach(B=>{ye+=B.score,be+=B.runs,B.success_rate}),I.data.comps.forEach(B=>{B.pruns=B.runs/be*100,B.tscore=B.score,B.ascore=Z(B.tscore,"mean",0,B.runs),B.pscore=Z(B.tscore,"percent",ye,B.runs)}),r.value=L,Q.value=!1}).catch(function(I){console.log(I),H.value=!0,Q.value=!1})}},X=A(null);A(null);const ee=()=>{if(X.value){var l=X.value.clientWidth;return l<700?l+=205:l-=240,x.value=l,l}else return x.value=700,700},j=l=>{if(d.value)for(let a=0;a<d.value.length;a++){const t=d.value[a];if(t.id==l)return t}},G=l=>{if(h.value)for(let a=0;a<h.value.length;a++){const t=h.value[a];if(t.id==l)return t}};return qe(()=>{q()}),(l,a)=>(o(),m("div",{ref_key:"CompMainWindow",ref:X},[s(Re,{onResize:a[0]||(a[0]=t=>ee())}),f("div",Qt,[s(Ve,{modelValue:S(R),"onUpdate:modelValue":a[1]||(a[1]=t=>ke(R)?R.value=t:R=t),animated:"",swipeable:"",color:"3a3a3a",align:"justify"},{default:v(()=>[s(ae,{default:"",name:1,label:"Team"}),s(ae,{name:2,label:"Healer & Tank"}),s(ae,{name:3,label:"DPS"})]),_:1},8,["modelValue"]),f("div",null,[s(Ie,{modelValue:S(R),"onUpdate:modelValue":a[5]||(a[5]=t=>ke(R)?R.value=t:R=t),class:"background",animated:""},{default:v(()=>[s(le,{name:1},{default:v(()=>[s(ue,{onSpecChange:a[2]||(a[2]=t=>J(t)),type:S(R)},null,8,["type"]),S(r)&&S(r).type==S(R)?(o(),m("div",qt,[s(fe,{"rows-per-page-options":[12,25,50,100],"card-class":"background HeaderFont","table-class":"HeaderFont","table-header-class":"HeaderFont",dark:"",flat:"",dense:"",rows:S(r).comps,columns:n.value,pagination:S(D),"row-key":"setup","visible-columns":u(1)},{body:v(t=>[s(pe,{props:t},{default:v(()=>[(o(!0),m($,null,K(V(t.row.setup),C=>{var E,P;return o(),W(N,{key:(P=(E=C[0])==null?void 0:E.role)==null?void 0:P.toLowerCase(),props:t},{default:v(()=>[f("div",jt,[(o(!0),m($,null,K(C,(c,I)=>(o(),m("div",{key:I,class:"flex"},[s(ie,{url:`roles/${C[0].role.toLowerCase()}.png`},{default:v(({link:L})=>[s(ce,{"spinner-size":"15px",class:"tableRoleIcon",src:L,"spinner-color":"white"},null,8,["src"])]),_:2},1032,["url"]),s(ve,{_class:c==null?void 0:c.class},{default:v(()=>[T(p(c.name),1)]),_:2},1032,["_class"]),s(te,null,{default:v(()=>[T(p(c.name)+" "+p(j(c.class).name),1)]),_:2},1024)]))),128))])]),_:2},1032,["props"])}),128)),s(N,{key:"runs",props:t},{default:v(()=>[T(p(t.row.runs)+" ("+p(Math.round(t.row.pruns*100)/100)+"%)",1)]),_:2},1032,["props"]),s(N,{key:"tscore",props:t},{default:v(()=>[T(p(Math.round(t.row.tscore))+" ("+p(t.row.pscore)+"%)",1)]),_:2},1032,["props"]),s(N,{key:"ascore",props:t},{default:v(()=>[T(p(t.row.ascore),1)]),_:2},1032,["props"]),t.row.success_rate?(o(),W(N,{key:"intime_rate",props:t},{default:v(()=>[T(p(Math.round(t.row.success_rate*100)/100)+"%",1)]),_:2},1032,["props"])):F("",!0)]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","visible-columns"])])):F("",!0)]),_:1}),s(le,{name:2},{default:v(()=>[s(ue,{class:"hideScroll",onSpecChange:a[3]||(a[3]=t=>J(t)),type:S(R)},null,8,["type"]),S(r)&&S(r).type==S(R)?(o(),m("div",Wt,[s(fe,{"rows-per-page-options":[12,25,50,100],"card-class":"background HeaderFont","table-class":"HeaderFont","table-header-class":"HeaderFont",dark:"",dense:"",rows:S(r).comps,columns:n.value,pagination:S(D),"row-key":"setup","visible-columns":u(2)},{body:v(t=>[s(pe,{props:t},{default:v(()=>[(o(!0),m($,null,K(V(t.row.setup),C=>{var E,P;return o(),W(N,{key:(P=(E=C[0])==null?void 0:E.role)==null?void 0:P.toLowerCase(),props:t},{default:v(()=>[f("div",$t,[(o(!0),m($,null,K(C,(c,I)=>(o(),m("div",{style:Y(`color: ${j(c.class).color}`),key:I,class:"flex"},[s(ie,{url:`roles/${C[0].role.toLowerCase()}.png`},{default:v(({link:L})=>[s(ce,{"spinner-size":"15px",class:"tableRoleIcon",src:L,"spinner-color":"white"},null,8,["src"])]),_:2},1032,["url"]),s(ve,{_class:c==null?void 0:c.class},{default:v(()=>[T(p(c.name),1)]),_:2},1032,["_class"]),s(te,null,{default:v(()=>[T(p(c.name)+" "+p(j(c.class).name),1)]),_:2},1024)],4))),128))])]),_:2},1032,["props"])}),128)),s(N,{key:"runs",props:t},{default:v(()=>[T(p(t.row.runs)+" ("+p(Math.round(t.row.pruns*100)/100)+"%)",1)]),_:2},1032,["props"]),s(N,{key:"tscore",props:t},{default:v(()=>[T(p(Math.round(t.row.tscore))+" ("+p(t.row.pscore)+"%)",1)]),_:2},1032,["props"]),s(N,{key:"ascore",props:t},{default:v(()=>[T(p(t.row.ascore),1)]),_:2},1032,["props"]),t.row.success_rate?(o(),W(N,{key:"intime_rate",props:t},{default:v(()=>[T(p(Math.round(t.row.success_rate*100)/100)+"%",1)]),_:2},1032,["props"])):F("",!0)]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","visible-columns"])])):F("",!0)]),_:1}),s(le,{name:3},{default:v(()=>[s(ue,{onSpecChange:a[4]||(a[4]=t=>J(t)),type:S(R)},null,8,["type"]),S(r)&&S(r).type==S(R)?(o(),m("div",Kt,[s(fe,{"rows-per-page-options":[12,25,50,100],"card-class":"background HeaderFont","table-class":"HeaderFont","table-header-class":"HeaderFont",dark:"",dense:"",rows:S(r).comps,columns:n.value,pagination:S(D),"row-key":"setup","visible-columns":u(3)},{body:v(t=>[s(pe,{props:t},{default:v(()=>[(o(!0),m($,null,K(V(t.row.setup),C=>{var E,P;return o(),W(N,{key:(P=(E=C[0])==null?void 0:E.role)==null?void 0:P.toLowerCase(),props:t},{default:v(()=>[f("div",Jt,[(o(!0),m($,null,K(C,(c,I)=>(o(),m("div",{style:Y(`color: ${j(c.class).color}`),key:I,class:"flex"},[s(ie,{url:`roles/${C[0].role.toLowerCase()}.png`},{default:v(({link:L})=>[s(ce,{"spinner-size":"15px",class:"tableRoleIcon",src:L,"spinner-color":"white"},null,8,["src"])]),_:2},1032,["url"]),s(ve,{_class:c==null?void 0:c.class},{default:v(()=>[T(p(c.name),1)]),_:2},1032,["_class"]),s(te,null,{default:v(()=>[T(p(c.name)+" "+p(j(c.class).name),1)]),_:2},1024)],4))),128))])]),_:2},1032,["props"])}),128)),s(N,{key:"runs",props:t},{default:v(()=>[T(p(t.row.runs)+" ("+p(Math.round(t.row.pruns*100)/100)+"%)",1)]),_:2},1032,["props"]),s(N,{key:"tscore",props:t},{default:v(()=>[T(p(Math.round(t.row.tscore))+" ("+p(t.row.pscore)+"%)",1)]),_:2},1032,["props"]),s(N,{key:"ascore",props:t},{default:v(()=>[T(p(t.row.ascore),1)]),_:2},1032,["props"]),t.row.success_rate?(o(),W(N,{key:"intime_rate",props:t},{default:v(()=>[T(p(Math.round(t.row.success_rate*100)/100)+"%",1)]),_:2},1032,["props"])):F("",!0)]),_:2},1032,["props"])]),_:1},8,["rows","columns","pagination","visible-columns"])])):F("",!0)]),_:1})]),_:1},8,["modelValue"])]),S(Q)?(o(),m("div",Xt,[s(Pe,{style:{color:"rgb(161, 161, 161)"},size:"500"})])):F("",!0),S(H)?(o(),m("div",Yt,ea)):F("",!0),S(r)?(o(),m("div",ta,[f("div",aa,"Data generated "+p(z(S(r).generated_timestamp)),1),la])):F("",!0)])],512))}});var va=me(sa,[["__scopeId","data-v-6899461a"]]);export{va as C,ca as a};
