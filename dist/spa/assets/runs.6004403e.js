import{Q as Ge}from"./QOptionGroup.fcd4402d.js";import{Q as we}from"./QRange.0efc4d51.js";import{d as ee,B as Ae,u as te,c as F,r as m,w as L,o as ae,h as C,i as U,m as P,M as ke,z as E,j as p,t as N,p as G,n as W,_ as X,S as A,a as z,v as le,x as se,ad as Se,ag as Ce,bo as De,y as Me,g as Re}from"./index.4a7224fa.js";import{a as I}from"./vue3-apexcharts.common.246283a7.js";import{n as J}from"./numeral.1d20aade.js";import{a as Be}from"./AffixSelector.ddfcb7ad.js";import{F as Pe}from"./FactionBar.b0bffab0.js";import"./QCheckbox.2bef0a7e.js";const Te=e=>(le("data-v-163b7e99"),e=e(),se(),e),Oe={key:0},Ue={key:0},He=Te(()=>p("div",null,"Selected weeks",-1)),Ve={class:"flex justify-around"},Ee={class:"flex justify-center"},Ne={key:0},Fe={class:"flex justify-around"},je={class:"flex justify-center"},Le=ee({__name:"LevelStats",props:{runs:{type:Array}},emits:["fetch"],setup(e,{emit:l}){const n=e,{runs:t}=Ae(n),h=te().state.data,v=F(()=>h.Periodes),y=F(()=>h.Affixes);F(()=>h.settings);const D=F(()=>v.value&&y.value&&k.value&&S.value&&V.value),T=m(null),H=m(null),K=m(null);m(null);const Q=m(null),V=m(null),w=m(null),S=m(null),k=m(null),o=m(null),i=m(null),d=m(null),f=m({chart:{foreColor:"#a1a1a1"},yaxis:{type:"numeric",labels:{formatter:function(s,r,u){return s+"%"}},title:{text:"Success rate"}},xaxis:{type:"numeric",labels:{formatter:function(s,r,u){return Math.round(s)}},title:{text:"Keystone level"}}}),M=m({chart:{foreColor:"#a1a1a1"},yaxis:{title:{text:"Amount of runs"}},xaxis:{type:"numeric",labels:{formatter:function(s,r,u){return Math.round(s)}},title:{text:"Keystone level"}}}),$=s=>{if(s){var r=[];for(let g=0;g<s.length;g++){const x=s[g];var u=O(x);u&&r.push(u==null?void 0:u.name)}return r.join(", ")}},B=(s,r)=>{var u=k.apiUrl,g=!1;if(t.value){var x=A.groupBy(t.value,"periode");for(const a in x)if(x.hasOwnProperty(a)&&a==s){var R=x[a][0],c={id:a,start_timestamp:0,end_timestamp:0,affixes:R.affixes};return g=!0,r(c)}}else for(let a=0;a<v.value.length;a++){const b=v.value[a];if(b.id==s)return g=!0,r(b)}g||z.get(`${u}/Periode/id?Period=${s}`).then(a=>r(a.data))},Y=()=>{t.value?$e():v.value&&(Q.value={min:v.value[0].id-v.value.length+1,max:v.value[0].id},w.value={min:v.value[0].id-2,max:v.value[0].id},oe())},Z=()=>{if(k.value){var s=[],r=[];for(let x=0;x<k.value.length;x++){const R=k.value[x];var u=[],g=[];for(let c=0;c<R.length;c++){const a=R[c];a.level>=S.value.min&&a.level<=S.value.max&&(u.push([a.level,Math.round(a.success_rate*10)/10]),g.push([a.level,a.runs]))}t.value?B(R[0].periode,c=>{var a={name:"",data:u},b={name:"",data:g};s.push(a),r.push(b),i.value=s,o.value=r}):B(R[0].periode,c=>{var q,ne,ie,ue,ve,ce,de,fe,me,pe,he,_e,xe,ge,ye,be;var a={name:((ne=(q=O(c.affixes[0]))==null?void 0:q.name)!=null?ne:"")+", "+((ue=(ie=O(c.affixes[1]))==null?void 0:ie.name)!=null?ue:"")+", "+((ce=(ve=O(c.affixes[2]))==null?void 0:ve.name)!=null?ce:"")+", "+((fe=(de=O(c.affixes[3]))==null?void 0:de.name)!=null?fe:""),data:u},b={name:((pe=(me=O(c.affixes[0]))==null?void 0:me.name)!=null?pe:"")+", "+((_e=(he=O(c.affixes[1]))==null?void 0:he.name)!=null?_e:"")+", "+((ge=(xe=O(c.affixes[2]))==null?void 0:xe.name)!=null?ge:"")+", "+((be=(ye=O(c.affixes[3]))==null?void 0:ye.name)!=null?be:""),data:g};s.push(a),r.push(b),i.value=s,o.value=r})}}},$e=()=>{if(t.value){var s=[];const R=[...t.value];var r=A.groupBy(R,"keystone_level"),u=[];for(const c in r)if(r.hasOwnProperty(c)){const a=r[c];var g={level:a[0].keystone_level,runs:a.length,periode:a[0].periode,score:0,success_rate:a.filter(b=>b.time.map_time>=b.time.clear_time).length/a.length*100};a.forEach(b=>{g.score+=b.score}),u.push(g)}s.push(u),k.value=s;var x=2;for(let c=0;c<k.value.length;c++){const a=k.value[c];for(let b=0;b<a.length;b++){const q=a[b];q.level>x&&(x=q.level)}}V.value={min:2,max:x},S.value={min:2,max:x},Z()}},oe=()=>{var s=h.apiUrl;if(console.log("Gathering data",s),v.value){var r=setTimeout(function(){K.value==r&&z.get(s+"/Stats/LevelStats?fromperiode="+w.value.min+"&toperiode="+w.value.max).then(function(u){k.value=u.data.map(x=>x.list),l("fetch",u.data);var g=2;for(let x=0;x<k.value.length;x++){const R=k.value[x];for(let c=0;c<R.length;c++){const a=R[c];a.level>g&&(g=a.level)}}V.value={min:2,max:g},S.value={min:2,max:g},Z()}).catch(function(u){console.log(u),d.value=0})},1e3);K.value=r}},O=s=>{if(y.value)for(let r=0;r<y.value.length;r++){const u=y.value[r];if(u.id===s)return u}},re=()=>{w.value&&(B(w.value.min,s=>{H.value=$(s.affixes)}),B(w.value.max,s=>{T.value=$(s.affixes)}))};return L(v,()=>{Y()}),L(S,()=>{w.value&&S.value&&Z()}),L(w,()=>{t.value||w.value&&S.value&&(oe(),re())}),L(t,()=>{k.value=null,Y()}),ae(()=>{Y(),re()}),(s,r)=>(C(),U("div",{class:ke({Box:P(t)})},[D.value?(C(),U("div",Oe,[P(t)?(C(),U("div",{key:0,class:ke([{Header:P(t)},"HeaderSize4"])}," Level statistics ",2)):E("",!0),p("div",null,[p("div",null,[P(t)?E("",!0):(C(),U("div",Ue,[He,p("div",Ve,[p("div",null,"From: "+N(w.value.min)+" ("+N(H.value)+")",1),p("div",null,"To: "+N(w.value.max)+" ("+N(T.value)+")",1)]),p("div",Ee,[G(we,{"drag-range":"",snap:"",markers:"",modelValue:w.value,"onUpdate:modelValue":r[0]||(r[0]=u=>w.value=u),min:Q.value.min,style:{"max-width":"970px"},max:Q.value.max,step:1},null,8,["modelValue","min","max"])])]))]),p("div",null,[P(t)?E("",!0):(C(),U("div",Ne,"Selected levels")),p("div",Fe,[p("div",null,"From level "+N(S.value.min),1),p("div",null,"To level "+N(S.value.max),1)]),p("div",je,[G(we,{"drag-range":"",snap:"",markers:"","model-value":S.value,"onUpdate:modelValue":r[1]||(r[1]=u=>S.value=u),min:V.value.min,max:V.value.max,step:1,style:{"max-width":"970px"}},null,8,["model-value","min","max"])])])]),i.value?(C(),W(P(I),{key:1,width:"100%",height:"400px",type:"line",options:f.value,series:i.value},null,8,["options","series"])):E("",!0),o.value?(C(),W(P(I),{key:2,width:"100%",height:"400px",type:"line",options:M.value,series:o.value},null,8,["options","series"])):E("",!0)])):E("",!0)],2))}});var ze=X(Le,[["__scopeId","data-v-163b7e99"]]);const Ke=e=>(le("data-v-6290eb72"),e=e(),se(),e),Qe=Ke(()=>p("div",{class:"Footer"},"Runs completed in selected week",-1)),qe={class:"Topper relative"},Ie={key:0},Je=ee({__name:"RunsCompletedCount",setup(e){let l=m(1e5),n=m(!1);const _=te().state.data,h=D=>{l.value=0,n.value=!0;var T=_.apiUrl;z.get(`${T}/Stats/RunCount?weekId=${D}`).then(H=>{n.value=!1,l.value=H.data}).catch(H=>{n.value=!1,console.log(H)})},v=F(()=>_.SelectedPeriode),y=F(()=>J(l.value).format("0,0"));return L(v,D=>{h(v.value)}),ae(()=>{h(v.value)}),(D,T)=>(C(),U("div",null,[Qe,G(Se,{dark:""}),p("div",qe,[P(n)?(C(),W(Ce,{key:1,class:"absolute-center",style:{color:"rgb(161, 161, 161)"},size:50})):(C(),U("h2",Ie,N(y.value),1))]),G(Se,{dark:""}),G(Be,{hidePictures:!0})]))}});var Xe=X(Je,[["__scopeId","data-v-6290eb72"]]);const Ye={components:{apexchart:I},props:["data"],data(){return{chartOptions:{chart:{foreColor:"#a1a1a1",stacked:!0,toolbar:{show:!0},zoom:{enabled:!0}},dataLabels:{style:{},formatter:function(e,l){return l.name?l.name:J(e).format("0.0a")}},yaxis:{labels:{formatter:function(e){return J(e).format("0,0")}},title:{text:"Runs completed"}},xaxis:{labels:{formatter:function(e){return J(e).format("0,0")}}},plotOptions:{bar:{horizontal:!0}},fill:{opacity:1}}}},methods:{...De(["AddAffixDetails"]),GetAffixdetail(e){if(this.GetAffixes)for(let l=0;l<this.GetAffixes.length;l++){const n=this.GetAffixes[l];if(n.id===e)return n}},GetAffixSetName(e){if(e){var l=[];for(let t=0;t<e.length;t++){const _=e[t];var n=this.GetAffixdetail(_);n&&l.push(n.name)}return l.join(", ")}},fetchAffixDetails(e){var l=this,n=this.$store.state.data.apiUrl;z.get(`${n}/Periode/id?Period=${e}`).then(t=>{if(t.data){var _=t.data;_.details=l.GetAffixdetail(e),l.AddAffixDetails(t.data)}})}},computed:{...Me(["GetPeriodes","GetAffixes","GetAffixDetails"]),calculateHeight(){return 100+this.calculateTotal.length*35},calculateTotal(){var e=[];for(let _=0;_<this.data.length;_++){const h=this.data[_].list;var l={week:h[0].periode,created:h[0].created,runs:0,score:0,onTimeRuns:0},n=this.GetAffixDetails.filter(v=>v.id==l.week);n.length!=0?l.affix=n[0]:this.fetchAffixDetails(l.week);for(let v=0;v<h.length;v++){const y=h[v];l.runs+=y.runs,l.onTimeRuns+=Math.round(y.runs*(y.success_rate/100)),l.score+=y.score}e.push(l)}var t=A._sortBy(e,"week");return t},generateSeries(){var e=[];for(let n=0;n<this.calculateTotal.length;n++){const t=this.calculateTotal[n];var l={x:t.week,y:[t.runs+t.onTimeRuns],o:t.affix};t.affix&&(l.name=this.GetAffixSetName(t.affix.affixes)),e.push(l)}return[{name:"Runs completed",data:e}]}}},Ze={key:0},We={id:"chart"};function et(e,l,n,t,_,h){const v=Re("apexchart");return n.data?(C(),U("div",Ze,[p("div",We,[G(v,{type:"line",height:300,options:_.chartOptions,series:h.generateSeries},null,8,["options","series"])])])):E("",!0)}var tt=X(Ye,[["render",et]]);const j=e=>(le("data-v-6d95b37d"),e=e(),se(),e),at={class:"flex-center Centertext HeaderFont"},lt=j(()=>p("br",null,null,-1)),st=j(()=>p("h4",null,"Keys per hour",-1)),ot=j(()=>p("h4",null,"Keys per day",-1)),rt=j(()=>p("br",null,null,-1)),nt=j(()=>p("br",null,null,-1)),it=j(()=>p("br",null,null,-1)),ut=j(()=>p("br",null,null,-1)),vt=ee({__name:"runs",setup(e){const l=m(null),n=m(0),t=m(!1),_=m(!1),h=m([]),v=m(24),y=m([]),D=m([{label:"World",value:"world"},{label:"USA",value:"us"},{label:"Europa",value:"eu"},{label:"Taiwan",value:"tw"},{label:"Korea",value:"kr"}]),T=m(["world"]),K=te().state.data;F(()=>K.settings);const Q=()=>{var o=[];return h.value.forEach(i=>{var d=[];A._sortBy(i.data,"time").slice(Math.max(i.data.length-v.value,1)).forEach($=>{d.push($.value)});var f=i.region;for(let $=0;$<D.value.length;$++){const B=D.value[$];B.value==i.region&&(f=B.label)}var M={name:f,data:d};o.push(M)}),o},V=()=>{var o=[];if(h.value[0]!=null){var i=h.value[0];A._sortBy(i.data,"time").slice(Math.max(i.data.length-v.value,1)).forEach(f=>{o.push(A.GetMoment(f.time).format("HH:MM"))})}return{chart:{id:"perHourChart"},yaxis:{labels:{style:{colors:o.map(f=>"rgb(161, 161, 161)")}}},xaxis:{labels:{style:{colors:o.map(f=>"rgb(161, 161, 161)")}},categories:o}}},w=()=>{var o=[];return y.value.forEach(i=>{var d=[];A._sortBy(i.data,"time").forEach($=>{d.push($.value)});var f=i.region;for(let $=0;$<D.value.length;$++){const B=D.value[$];B.value==i.region&&(f=B.label)}var M={name:f,data:d};o.push(M)}),o},S=()=>{var o=[];if(y.value[0]!=null){var i=y.value[0];A._sortBy(i.data,"time").forEach(f=>{o.push(A.GetMoment(f.time).format("dddd"))})}return{chart:{id:"perDayChart"},yaxis:{labels:{style:{colors:o.map(f=>"rgb(161, 161, 161)")}}},xaxis:{labels:{style:{colors:o.map(f=>"rgb(161, 161, 161)")}},categories:o}}},k=o=>{var i=K.apiUrl,d=i+"/RunsPer/Hours?hours=24";o!="world"&&(d+="&region="+o),_.value=!0,z.get(d).then(function(f){h.value.push({region:o,data:f.data}),_.value=!1,n.value+=1}).catch(function(f){console.log(f),t.value=!0,_.value=!1});var d=i+"/RunsPer/Days?days=7";o!="world"&&(d+="&region="+o),_.value=!0,z.get(d).then(function(f){y.value.push({region:o,data:f.data}),_.value=!1,n.value+=1}).catch(function(f){console.log(f),t.value=!0,_.value=!1})};return L(T,(o,i)=>{var d=A.whatChanged(o,i);if(d.type=="added")k(d.value);else if(d.type=="removed"){var f=!1;h.value.forEach(M=>{M.region==d.value&&A.remove(h.value,M)}),y.value.forEach(M=>{M.region==d.value&&A.remove(y.value,M)}),f&&(n.value+=Math.random()),n.value+=Math.random(),setTimeout(()=>{n.value+=Math.random()},500)}}),ae(()=>{k("world")}),(o,i)=>(C(),U("div",at,[G(Xe),G(Pe),lt,G(Ge,{color:"secondary",type:"checkbox",modelValue:T.value,"onUpdate:modelValue":i[0]||(i[0]=d=>T.value=d),inline:"",options:D.value},null,8,["modelValue","options"]),st,G(P(I),{width:"100%",height:"300px",type:"line",options:V(),series:Q()},null,8,["options","series"]),ot,G(P(I),{width:"100%",height:"300px",type:"line",options:S(),series:w()},null,8,["options","series"]),p("div",null,[rt,nt,G(ze,{onFetch:i[1]||(i[1]=d=>l.value=d)}),it,G(tt,{data:l.value},null,8,["data"]),ut])]))}});var gt=X(vt,[["__scopeId","data-v-6d95b37d"]]);export{gt as default};
