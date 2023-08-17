import{D as fe,H as r,I as ke,R as dt,T as Le,J as ge,U as vt,r as A,c as g,V as ft,w as D,W as gt,X as Te,o as Ve,f as De,Y as bt,Z as mt,$ as Me,a0 as St,a1 as yt,a2 as ht,a3 as xe,a4 as ve,a5 as Oe,a6 as wt,a7 as Ee,a8 as je,E as _t,G as Pt,a9 as Ct,aa as N,ab as qt,ac as X,ad as Rt}from"./index.d11fe415.js";import{Q as kt}from"./QMarkupTable.d0e5140e.js";import{Q as de,a as Tt}from"./QCheckbox.383fd197.js";var xt=fe({name:"QTh",props:{props:Object,autoWidth:Boolean},emits:["click"],setup(e,{slots:a,emit:o}){const d=ge(),{proxy:{$q:i}}=d,b=u=>{o("click",u)};return()=>{if(e.props===void 0)return r("th",{class:e.autoWidth===!0?"q-table--col-auto-width":"",onClick:b},ke(a.default));let u,s;const c=d.vnode.key;if(c){if(u=e.props.colsMap[c],u===void 0)return}else u=e.props.col;if(u.sortable===!0){const l=u.align==="right"?"unshift":"push";s=dt(a.default,[]),s[l](r(Le,{class:u.__iconClass,name:i.iconSet.table.arrowUp}))}else s=ke(a.default);const S={class:u.__thClass+(e.autoWidth===!0?" q-table--col-auto-width":""),style:u.headerStyle,onClick:l=>{u.sortable===!0&&e.props.sort(u),b(l)}};return r("th",S,s)}}});function pe(e,a){return r("div",e,[r("table",{class:"q-table"},a)])}const Ot={list:St,table:kt},Bt=["list","table","__qtable"];var Ft=fe({name:"QVirtualScroll",props:{...vt,type:{type:String,default:"list",validator:e=>Bt.includes(e)},items:{type:Array,default:()=>[]},itemsFn:Function,itemsSize:Number,scrollTarget:{default:void 0}},setup(e,{slots:a,attrs:o}){let d;const i=A(null),b=g(()=>e.itemsSize>=0&&e.itemsFn!==void 0?parseInt(e.itemsSize,10):Array.isArray(e.items)?e.items.length:0),{virtualScrollSliceRange:u,localResetVirtualScroll:s,padVirtualScroll:c,onVirtualScrollEvt:S}=ft({virtualScrollLength:b,getVirtualScrollTarget:R,getVirtualScrollEl:P}),l=g(()=>{if(b.value===0)return[];const B=(F,k)=>({index:u.value.from+k,item:F});return e.itemsFn===void 0?e.items.slice(u.value.from,u.value.to).map(B):e.itemsFn(u.value.from,u.value.to-u.value.from).map(B)}),m=g(()=>"q-virtual-scroll q-virtual-scroll"+(e.virtualScrollHorizontal===!0?"--horizontal":"--vertical")+(e.scrollTarget!==void 0?"":" scroll")),_=g(()=>e.scrollTarget!==void 0?{}:{tabindex:0});D(b,()=>{s()}),D(()=>e.scrollTarget,()=>{h(),w()});function P(){return i.value.$el||i.value}function R(){return d}function w(){d=gt(P(),e.scrollTarget),d.addEventListener("scroll",S,Te.passive)}function h(){d!==void 0&&(d.removeEventListener("scroll",S,Te.passive),d=void 0)}function O(){let B=c(e.type==="list"?"div":"tbody",l.value.map(a.default));return a.before!==void 0&&(B=a.before().concat(B)),yt(a.after,B)}return Ve(()=>{s()}),De(()=>{w()}),bt(()=>{w()}),mt(()=>{h()}),Me(()=>{h()}),()=>{if(a.default===void 0){console.error("QVirtualScroll: default scoped slot is required for rendering");return}return e.type==="__qtable"?pe({ref:i,class:"q-table__middle "+m.value},O()):r(Ot[e.type],{...o,ref:i,class:[o.class,m.value],..._.value},O)}}});let $=0;const Lt={fullscreen:Boolean,noRouteFullscreenExit:Boolean},Vt=["update:fullscreen","fullscreen"];function Dt(){const e=ge(),{props:a,emit:o,proxy:d}=e;let i,b,u;const s=A(!1);ht(e)===!0&&D(()=>d.$route.fullPath,()=>{a.noRouteFullscreenExit!==!0&&l()}),D(()=>a.fullscreen,m=>{s.value!==m&&c()}),D(s,m=>{o("update:fullscreen",m),o("fullscreen",m)});function c(){s.value===!0?l():S()}function S(){s.value!==!0&&(s.value=!0,u=d.$el.parentNode,u.replaceChild(b,d.$el),document.body.appendChild(d.$el),$++,$===1&&document.body.classList.add("q-body--fullscreen-mixin"),i={handler:l},xe.add(i))}function l(){s.value===!0&&(i!==void 0&&(xe.remove(i),i=void 0),u.replaceChild(d.$el,b),s.value=!1,$=Math.max(0,$-1),$===0&&(document.body.classList.remove("q-body--fullscreen-mixin"),d.$el.scrollIntoView!==void 0&&setTimeout(()=>{d.$el.scrollIntoView()})))}return Ve(()=>{b=document.createElement("span")}),De(()=>{a.fullscreen===!0&&S()}),Me(l),Object.assign(d,{toggleFullscreen:c,setFullscreen:S,exitFullscreen:l}),{inFullscreen:s,toggleFullscreen:c}}function Mt(e,a){return new Date(e)-new Date(a)}const Et={sortMethod:Function,binaryStateSort:Boolean,columnSortOrder:{type:String,validator:e=>e==="ad"||e==="da",default:"ad"}};function jt(e,a,o,d){const i=g(()=>{const{sortBy:s}=a.value;return s&&o.value.find(c=>c.name===s)||null}),b=g(()=>e.sortMethod!==void 0?e.sortMethod:(s,c,S)=>{const l=o.value.find(P=>P.name===c);if(l===void 0||l.field===void 0)return s;const m=S===!0?-1:1,_=typeof l.field=="function"?P=>l.field(P):P=>P[l.field];return s.sort((P,R)=>{let w=_(P),h=_(R);return w==null?-1*m:h==null?1*m:l.sort!==void 0?l.sort(w,h,P,R)*m:ve(w)===!0&&ve(h)===!0?(w-h)*m:Oe(w)===!0&&Oe(h)===!0?Mt(w,h)*m:typeof w=="boolean"&&typeof h=="boolean"?(w-h)*m:([w,h]=[w,h].map(O=>(O+"").toLocaleString().toLowerCase()),w<h?-1*m:w===h?0:m)})});function u(s){let c=e.columnSortOrder;if(wt(s)===!0)s.sortOrder&&(c=s.sortOrder),s=s.name;else{const m=o.value.find(_=>_.name===s);m!==void 0&&m.sortOrder&&(c=m.sortOrder)}let{sortBy:S,descending:l}=a.value;S!==s?(S=s,l=c==="da"):e.binaryStateSort===!0?l=!l:l===!0?c==="ad"?S=null:l=!1:c==="ad"?l=!0:S=null,d({sortBy:S,descending:l,page:1})}return{columnToSort:i,computedSortMethod:b,sort:u}}const pt={filter:[String,Object],filterMethod:Function};function At(e,a){const o=g(()=>e.filterMethod!==void 0?e.filterMethod:(d,i,b,u)=>{const s=i?i.toLowerCase():"";return d.filter(c=>b.some(S=>{const l=u(S,c)+"";return(l==="undefined"||l==="null"?"":l.toLowerCase()).indexOf(s)!==-1}))});return D(()=>e.filter,()=>{Ee(()=>{a({page:1},!0)})},{deep:!0}),{computedFilterMethod:o}}function Nt(e,a){for(const o in a)if(a[o]!==e[o])return!1;return!0}function Be(e){return e.page<1&&(e.page=1),e.rowsPerPage!==void 0&&e.rowsPerPage<1&&(e.rowsPerPage=0),e}const $t={pagination:Object,rowsPerPageOptions:{type:Array,default:()=>[5,7,10,15,20,25,50,0]},"onUpdate:pagination":[Function,Array]};function Ht(e,a){const{props:o,emit:d}=e,i=A(Object.assign({sortBy:null,descending:!1,page:1,rowsPerPage:o.rowsPerPageOptions.length>0?o.rowsPerPageOptions[0]:5},o.pagination)),b=g(()=>{const l=o["onUpdate:pagination"]!==void 0?{...i.value,...o.pagination}:i.value;return Be(l)}),u=g(()=>b.value.rowsNumber!==void 0);function s(l){c({pagination:l,filter:o.filter})}function c(l={}){Ee(()=>{d("request",{pagination:l.pagination||b.value,filter:l.filter||o.filter,getCellValue:a})})}function S(l,m){const _=Be({...b.value,...l});if(Nt(b.value,_)===!0){u.value===!0&&m===!0&&s(_);return}if(u.value===!0){s(_);return}o.pagination!==void 0&&o["onUpdate:pagination"]!==void 0?d("update:pagination",_):i.value=_}return{innerPagination:i,computedPagination:b,isServerSide:u,requestServerInteraction:c,setPagination:S}}function Qt(e,a,o,d,i,b){const{props:u,emit:s,proxy:{$q:c}}=e,S=g(()=>d.value===!0?o.value.rowsNumber||0:b.value),l=g(()=>{const{page:k,rowsPerPage:T}=o.value;return(k-1)*T}),m=g(()=>{const{page:k,rowsPerPage:T}=o.value;return k*T}),_=g(()=>o.value.page===1),P=g(()=>o.value.rowsPerPage===0?1:Math.max(1,Math.ceil(S.value/o.value.rowsPerPage))),R=g(()=>m.value===0?!0:o.value.page>=P.value),w=g(()=>(u.rowsPerPageOptions.includes(a.value.rowsPerPage)?u.rowsPerPageOptions:[a.value.rowsPerPage].concat(u.rowsPerPageOptions)).map(T=>({label:T===0?c.lang.table.allRows:""+T,value:T})));D(P,(k,T)=>{if(k===T)return;const H=o.value.page;k&&!H?i({page:1}):k<H&&i({page:k})});function h(){i({page:1})}function O(){const{page:k}=o.value;k>1&&i({page:k-1})}function B(){const{page:k,rowsPerPage:T}=o.value;m.value>0&&k*T<S.value&&i({page:k+1})}function F(){i({page:P.value})}return u["onUpdate:pagination"]!==void 0&&s("update:pagination",{...o.value}),{firstRowIndex:l,lastRowIndex:m,isFirstPage:_,isLastPage:R,pagesNumber:P,computedRowsPerPageOptions:w,computedRowsNumber:S,firstPage:h,prevPage:O,nextPage:B,lastPage:F}}const Ut={selection:{type:String,default:"none",validator:e=>["single","multiple","none"].includes(e)},selected:{type:Array,default:()=>[]}},zt=["update:selected","selection"];function It(e,a,o,d){const i=g(()=>{const R={};return e.selected.map(d.value).forEach(w=>{R[w]=!0}),R}),b=g(()=>e.selection!=="none"),u=g(()=>e.selection==="single"),s=g(()=>e.selection==="multiple"),c=g(()=>o.value.length>0&&o.value.every(R=>i.value[d.value(R)]===!0)),S=g(()=>c.value!==!0&&o.value.some(R=>i.value[d.value(R)]===!0)),l=g(()=>e.selected.length);function m(R){return i.value[R]===!0}function _(){a("update:selected",[])}function P(R,w,h,O){a("selection",{rows:w,added:h,keys:R,evt:O});const B=u.value===!0?h===!0?w:[]:h===!0?e.selected.concat(w):e.selected.filter(F=>R.includes(d.value(F))===!1);a("update:selected",B)}return{hasSelectionMode:b,singleSelection:u,multipleSelection:s,allRowsSelected:c,someRowsSelected:S,rowsSelectedNumber:l,isRowSelected:m,clearSelection:_,updateSelection:P}}function Fe(e){return Array.isArray(e)?e.slice():[]}const Wt={expanded:Array},Gt=["update:expanded"];function Kt(e,a){const o=A(Fe(e.expanded));D(()=>e.expanded,u=>{o.value=Fe(u)});function d(u){return o.value.includes(u)}function i(u){e.expanded!==void 0?a("update:expanded",u):o.value=u}function b(u,s){const c=o.value.slice(),S=c.indexOf(u);s===!0?S===-1&&(c.push(u),i(c)):S!==-1&&(c.splice(S,1),i(c))}return{isRowExpanded:d,setExpanded:i,updateExpanded:b}}const Jt={visibleColumns:Array};function Xt(e,a,o){const d=g(()=>{if(e.columns!==void 0)return e.columns;const s=e.rows[0];return s!==void 0?Object.keys(s).map(c=>({name:c,label:c.toUpperCase(),field:c,align:ve(s[c])?"right":"left",sortable:!0})):[]}),i=g(()=>{const{sortBy:s,descending:c}=a.value;return(e.visibleColumns!==void 0?d.value.filter(l=>l.required===!0||e.visibleColumns.includes(l.name)===!0):d.value).map(l=>{const m=l.align||"right",_=`text-${m}`;return{...l,align:m,__iconClass:`q-table__sort-icon q-table__sort-icon--${m}`,__thClass:_+(l.headerClasses!==void 0?" "+l.headerClasses:"")+(l.sortable===!0?" sortable":"")+(l.name===s?` sorted ${c===!0?"sort-desc":""}`:""),__tdStyle:l.style!==void 0?typeof l.style!="function"?()=>l.style:l.style:()=>null,__tdClass:l.classes!==void 0?typeof l.classes!="function"?()=>_+" "+l.classes:P=>_+" "+l.classes(P):()=>_}})}),b=g(()=>{const s={};return i.value.forEach(c=>{s[c.name]=c}),s}),u=g(()=>e.tableColspan!==void 0?e.tableColspan:i.value.length+(o.value===!0?1:0));return{colList:d,computedCols:i,computedColsMap:b,computedColspan:u}}const Y="q-table__bottom row items-center",Ae={};je.forEach(e=>{Ae[e]={}});var tl=fe({name:"QTable",props:{rows:{type:Array,default:()=>[]},rowKey:{type:[String,Function],default:"id"},columns:Array,loading:Boolean,iconFirstPage:String,iconPrevPage:String,iconNextPage:String,iconLastPage:String,title:String,hideHeader:Boolean,grid:Boolean,gridHeader:Boolean,dense:Boolean,flat:Boolean,bordered:Boolean,square:Boolean,separator:{type:String,default:"horizontal",validator:e=>["horizontal","vertical","cell","none"].includes(e)},wrapCells:Boolean,virtualScroll:Boolean,virtualScrollTarget:{default:void 0},...Ae,noDataLabel:String,noResultsLabel:String,loadingLabel:String,selectedRowsLabel:Function,rowsPerPageLabel:String,paginationLabel:Function,color:{type:String,default:"grey-8"},titleClass:[String,Array,Object],tableStyle:[String,Array,Object],tableClass:[String,Array,Object],tableHeaderStyle:[String,Array,Object],tableHeaderClass:[String,Array,Object],cardContainerClass:[String,Array,Object],cardContainerStyle:[String,Array,Object],cardStyle:[String,Array,Object],cardClass:[String,Array,Object],hideBottom:Boolean,hideSelectedBanner:Boolean,hideNoData:Boolean,hidePagination:Boolean,onRowClick:Function,onRowDblclick:Function,onRowContextmenu:Function,..._t,...Lt,...Jt,...pt,...$t,...Wt,...Ut,...Et},emits:["request","virtualScroll",...Vt,...Gt,...zt],setup(e,{slots:a,emit:o}){const d=ge(),{proxy:{$q:i}}=d,b=Pt(e,i),{inFullscreen:u,toggleFullscreen:s}=Dt(),c=g(()=>typeof e.rowKey=="function"?e.rowKey:t=>t[e.rowKey]),S=A(null),l=A(null),m=g(()=>e.grid!==!0&&e.virtualScroll===!0),_=g(()=>" q-table__card"+(b.value===!0?" q-table__card--dark q-dark":"")+(e.square===!0?" q-table--square":"")+(e.flat===!0?" q-table--flat":"")+(e.bordered===!0?" q-table--bordered":"")),P=g(()=>`q-table__container q-table--${e.separator}-separator column no-wrap`+(e.grid===!0?" q-table--grid":_.value)+(b.value===!0?" q-table--dark":"")+(e.dense===!0?" q-table--dense":"")+(e.wrapCells===!1?" q-table--no-wrap":"")+(u.value===!0?" fullscreen scroll":"")),R=g(()=>P.value+(e.loading===!0?" q-table--loading":""));D(()=>e.tableStyle+e.tableClass+e.tableHeaderStyle+e.tableHeaderClass+P.value,()=>{m.value===!0&&l.value!==null&&l.value.reset()});const{innerPagination:w,computedPagination:h,isServerSide:O,requestServerInteraction:B,setPagination:F}=Ht(d,j),{computedFilterMethod:k}=At(e,F),{isRowExpanded:T,setExpanded:H,updateExpanded:Ne}=Kt(e,o),Z=g(()=>{let t=e.rows;if(O.value===!0||t.length===0)return t;const{sortBy:n,descending:v}=h.value;return e.filter&&(t=k.value(t,e.filter,L.value,j)),ze.value!==null&&(t=Ie.value(e.rows===t?t.slice():t,n,v)),t}),be=g(()=>Z.value.length),M=g(()=>{let t=Z.value;if(O.value===!0)return t;const{rowsPerPage:n}=h.value;return n!==0&&(U.value===0&&e.rows!==t?t.length>z.value&&(t=t.slice(0,z.value)):t=t.slice(U.value,z.value)),t}),{hasSelectionMode:E,singleSelection:$e,multipleSelection:me,allRowsSelected:He,someRowsSelected:Se,rowsSelectedNumber:ee,isRowSelected:te,clearSelection:Qe,updateSelection:Q}=It(e,o,M,c),{colList:Ue,computedCols:L,computedColsMap:ye,computedColspan:he}=Xt(e,h,E),{columnToSort:ze,computedSortMethod:Ie,sort:le}=jt(e,h,Ue,F),{firstRowIndex:U,lastRowIndex:z,isFirstPage:ae,isLastPage:ne,pagesNumber:I,computedRowsPerPageOptions:We,computedRowsNumber:W,firstPage:oe,prevPage:re,nextPage:ie,lastPage:ue}=Qt(d,w,h,O,F,be),Ge=g(()=>M.value.length===0),Ke=g(()=>{const t={};return je.forEach(n=>{t[n]=e[n]}),t.virtualScrollItemSize===void 0&&(t.virtualScrollItemSize=e.dense===!0?28:48),t});function Je(){m.value===!0&&l.value.reset()}function Xe(){if(e.grid===!0)return st();const t=e.hideHeader!==!0?qe:null;if(m.value===!0){const v=a["top-row"],f=a["bottom-row"],y={default:q=>_e(q.item,a.body,q.index)};if(v!==void 0){const q=r("tbody",v({cols:L.value}));y.before=t===null?()=>q:()=>[t()].concat(q)}else t!==null&&(y.before=t);return f!==void 0&&(y.after=()=>r("tbody",f({cols:L.value}))),r(Ft,{ref:l,class:e.tableClass,style:e.tableStyle,...Ke.value,scrollTarget:e.virtualScrollTarget,items:M.value,type:"__qtable",tableColspan:he.value,onVirtualScroll:Ze},y)}const n=[et()];return t!==null&&n.unshift(t()),pe({class:["q-table__middle scroll",e.tableClass],style:e.tableStyle},n)}function Ye(t,n){if(l.value!==null){l.value.scrollTo(t,n);return}t=parseInt(t,10);const v=S.value.querySelector(`tbody tr:nth-of-type(${t+1})`);if(v!==null){const f=S.value.querySelector(".q-table__middle.scroll"),y=v.offsetTop-e.virtualScrollStickySizeStart,q=y<f.scrollTop?"decrease":"increase";f.scrollTop=y,o("virtualScroll",{index:t,from:0,to:w.value.rowsPerPage-1,direction:q})}}function Ze(t){o("virtualScroll",t)}function we(){return[r(Tt,{class:"q-table__linear-progress",color:e.color,dark:b.value,indeterminate:!0,trackColor:"transparent"})]}function _e(t,n,v){const f=c.value(t),y=te(f);if(n!==void 0)return n(Pe({key:f,row:t,pageIndex:v,__trClass:y?"selected":""}));const q=a["body-cell"],C=L.value.map(x=>{const K=a[`body-cell-${x.name}`],J=K!==void 0?K:q;return J!==void 0?J(tt({key:f,row:t,pageIndex:v,col:x})):r("td",{class:x.__tdClass(t),style:x.__tdStyle(t)},j(x,t))});if(E.value===!0){const x=a["body-selection"],K=x!==void 0?x(lt({key:f,row:t,pageIndex:v})):[r(de,{modelValue:y,color:e.color,dark:b.value,dense:e.dense,"onUpdate:modelValue":(J,ct)=>{Q([f],[t],J,ct)}})];C.unshift(r("td",{class:"q-table--col-auto-width"},K))}const V={key:f,class:{selected:y}};return e.onRowClick!==void 0&&(V.class["cursor-pointer"]=!0,V.onClick=x=>{o("RowClick",x,t,v)}),e.onRowDblclick!==void 0&&(V.class["cursor-pointer"]=!0,V.onDblclick=x=>{o("RowDblclick",x,t,v)}),e.onRowContextmenu!==void 0&&(V.class["cursor-pointer"]=!0,V.onContextmenu=x=>{o("RowContextmenu",x,t,v)}),r("tr",V,C)}function et(){const t=a.body,n=a["top-row"],v=a["bottom-row"];let f=M.value.map((y,q)=>_e(y,t,q));return n!==void 0&&(f=n({cols:L.value}).concat(f)),v!==void 0&&(f=f.concat(v({cols:L.value}))),r("tbody",f)}function Pe(t){return se(t),t.cols=t.cols.map(n=>N({...n},"value",()=>j(n,t.row))),t}function tt(t){return se(t),N(t,"value",()=>j(t.col,t.row)),t}function lt(t){return se(t),t}function se(t){Object.assign(t,{cols:L.value,colsMap:ye.value,sort:le,rowIndex:U.value+t.pageIndex,color:e.color,dark:b.value,dense:e.dense}),E.value===!0&&N(t,"selected",()=>te(t.key),(n,v)=>{Q([t.key],[t.row],n,v)}),N(t,"expand",()=>T(t.key),n=>{Ne(t.key,n)})}function j(t,n){const v=typeof t.field=="function"?t.field(n):n[t.field];return t.format!==void 0?t.format(v,n):v}const p=g(()=>({pagination:h.value,pagesNumber:I.value,isFirstPage:ae.value,isLastPage:ne.value,firstPage:oe,prevPage:re,nextPage:ie,lastPage:ue,inFullscreen:u.value,toggleFullscreen:s}));function at(){const t=a.top,n=a["top-left"],v=a["top-right"],f=a["top-selection"],y=E.value===!0&&f!==void 0&&ee.value>0,q="q-table__top relative-position row items-center";if(t!==void 0)return r("div",{class:q},[t(p.value)]);let C;if(y===!0?C=f(p.value).slice():(C=[],n!==void 0?C.push(r("div",{class:"q-table-control"},[n(p.value)])):e.title&&C.push(r("div",{class:"q-table__control"},[r("div",{class:["q-table__title",e.titleClass]},e.title)]))),v!==void 0&&(C.push(r("div",{class:"q-table__separator col"})),C.push(r("div",{class:"q-table__control"},[v(p.value)]))),C.length!==0)return r("div",{class:q},C)}const Ce=g(()=>Se.value===!0?null:He.value);function qe(){const t=nt();return e.loading===!0&&a.loading===void 0&&t.push(r("tr",{class:"q-table__progress"},[r("th",{class:"relative-position",colspan:he.value},we())])),r("thead",t)}function nt(){const t=a.header,n=a["header-cell"];if(t!==void 0)return t(ce({header:!0})).slice();const v=L.value.map(f=>{const y=a[`header-cell-${f.name}`],q=y!==void 0?y:n,C=ce({col:f});return q!==void 0?q(C):r(xt,{key:f.name,props:C},()=>f.label)});if($e.value===!0&&e.grid!==!0)v.unshift(r("th",{class:"q-table--col-auto-width"}," "));else if(me.value===!0){const f=a["header-selection"],y=f!==void 0?f(ce({})):[r(de,{color:e.color,modelValue:Ce.value,dark:b.value,dense:e.dense,"onUpdate:modelValue":Re})];v.unshift(r("th",{class:"q-table--col-auto-width"},y))}return[r("tr",{class:e.tableHeaderClass,style:e.tableHeaderStyle},v)]}function ce(t){return Object.assign(t,{cols:L.value,sort:le,colsMap:ye.value,color:e.color,dark:b.value,dense:e.dense}),me.value===!0&&N(t,"selected",()=>Ce.value,Re),t}function Re(t){Se.value===!0&&(t=!1),Q(M.value.map(c.value),M.value,t)}const G=g(()=>{const t=[e.iconFirstPage||i.iconSet.table.firstPage,e.iconPrevPage||i.iconSet.table.prevPage,e.iconNextPage||i.iconSet.table.nextPage,e.iconLastPage||i.iconSet.table.lastPage];return i.lang.rtl===!0?t.reverse():t});function ot(){if(e.hideBottom===!0)return;if(Ge.value===!0){if(e.hideNoData===!0)return;const v=e.loading===!0?e.loadingLabel||i.lang.table.loading:e.filter?e.noResultsLabel||i.lang.table.noResults:e.noDataLabel||i.lang.table.noData,f=a["no-data"],y=f!==void 0?[f({message:v,icon:i.iconSet.table.warning,filter:e.filter})]:[r(Le,{class:"q-table__bottom-nodata-icon",name:i.iconSet.table.warning}),v];return r("div",{class:Y+" q-table__bottom--nodata"},y)}const t=a.bottom;if(t!==void 0)return r("div",{class:Y},[t(p.value)]);const n=e.hideSelectedBanner!==!0&&E.value===!0&&ee.value>0?[r("div",{class:"q-table__control"},[r("div",[(e.selectedRowsLabel||i.lang.table.selectedRecords)(ee.value)])])]:[];if(e.hidePagination!==!0)return r("div",{class:Y+" justify-end"},it(n));if(n.length>0)return r("div",{class:Y},n)}function rt(t){F({page:1,rowsPerPage:t.value})}function it(t){let n;const{rowsPerPage:v}=h.value,f=e.paginationLabel||i.lang.table.pagination,y=a.pagination,q=e.rowsPerPageOptions.length>1;if(t.push(r("div",{class:"q-table__separator col"})),q===!0&&t.push(r("div",{class:"q-table__control"},[r("span",{class:"q-table__bottom-item"},[e.rowsPerPageLabel||i.lang.table.recordsPerPage]),r(qt,{class:"q-table__select inline q-table__bottom-item",color:e.color,modelValue:v,options:We.value,displayValue:v===0?i.lang.table.allRows:v,dark:b.value,borderless:!0,dense:!0,optionsDense:!0,optionsCover:!0,"onUpdate:modelValue":rt})])),y!==void 0)n=y(p.value);else if(n=[r("span",v!==0?{class:"q-table__bottom-item"}:{},[v?f(U.value+1,Math.min(z.value,W.value),W.value):f(1,be.value,W.value)])],v!==0&&I.value>1){const C={color:e.color,round:!0,dense:!0,flat:!0};e.dense===!0&&(C.size="sm"),I.value>2&&n.push(r(X,{key:"pgFirst",...C,icon:G.value[0],disable:ae.value,onClick:oe})),n.push(r(X,{key:"pgPrev",...C,icon:G.value[1],disable:ae.value,onClick:re}),r(X,{key:"pgNext",...C,icon:G.value[2],disable:ne.value,onClick:ie})),I.value>2&&n.push(r(X,{key:"pgLast",...C,icon:G.value[3],disable:ne.value,onClick:ue}))}return t.push(r("div",{class:"q-table__control"},n)),t}function ut(){const t=e.gridHeader===!0?[r("table",{class:"q-table"},[qe()])]:e.loading===!0&&a.loading===void 0?we():void 0;return r("div",{class:"q-table__middle"},t)}function st(){const t=a.item!==void 0?a.item:n=>{const v=n.cols.map(y=>r("div",{class:"q-table__grid-item-row"},[r("div",{class:"q-table__grid-item-title"},[y.label]),r("div",{class:"q-table__grid-item-value"},[y.value])]));if(E.value===!0){const y=a["body-selection"],q=y!==void 0?y(n):[r(de,{modelValue:n.selected,color:e.color,dark:b.value,dense:e.dense,"onUpdate:modelValue":(C,V)=>{Q([n.key],[n.row],C,V)}})];v.unshift(r("div",{class:"q-table__grid-item-row"},q),r(Rt,{dark:b.value}))}const f={class:["q-table__grid-item-card"+_.value,e.cardClass],style:e.cardStyle};return(e.onRowClick!==void 0||e.onRowDblclick!==void 0)&&(f.class[0]+=" cursor-pointer",e.onRowClick!==void 0&&(f.onClick=y=>{o("RowClick",y,n.row,n.pageIndex)}),e.onRowDblclick!==void 0&&(f.onDblclick=y=>{o("RowDblclick",y,n.row,n.pageIndex)})),r("div",{class:"q-table__grid-item col-xs-12 col-sm-6 col-md-4 col-lg-3"+(n.selected===!0?" q-table__grid-item--selected":"")},[r("div",f,v)])};return r("div",{class:["q-table__grid-content row",e.cardContainerClass],style:e.cardContainerStyle},M.value.map((n,v)=>t(Pe({key:c.value(n),row:n,pageIndex:v}))))}return Object.assign(d.proxy,{requestServerInteraction:B,setPagination:F,firstPage:oe,prevPage:re,nextPage:ie,lastPage:ue,isRowSelected:te,clearSelection:Qe,isRowExpanded:T,setExpanded:H,sort:le,resetVirtualScroll:Je,scrollTo:Ye,getCellValue:j}),Ct(d.proxy,{filteredSortedRows:()=>Z.value,computedRows:()=>M.value,computedRowsNumber:()=>W.value}),()=>{const t=[at()],n={ref:S,class:R.value};return e.grid===!0?t.push(ut()):Object.assign(n,{class:[n.class,e.cardClass],style:e.cardStyle}),t.push(Xe(),ot()),e.loading===!0&&a.loading!==void 0&&t.push(a.loading()),r("div",n,t)}}});export{tl as Q};
