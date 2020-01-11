(this["webpackJsonpmy-locations"]=this["webpackJsonpmy-locations"]||[]).push([[0],{16:function(e,t,a){},20:function(e,t,a){e.exports=a(34)},27:function(e,t,a){},31:function(e){e.exports=JSON.parse('{"mapbox":"pk.eyJ1Ijoibml2YjUyIiwiYSI6ImNrNTcyeWhrYzA5bXEzbXBnbDU3dzZ5MzkifQ.h9eMjMa17c4nMDzT3GrGvw"}')},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(18),o=a.n(c),i=(a(16),a(5)),s=a(6),l=a.n(s),d=a(0),u=a(8),m=function(e){var t=e.children,a=e.id,n=e.back,c=e.view,o=e.edit,i=e.onEdit,s=e.del,l=e.add,d=function(e,t){switch(e){case"back":n();break;case"view":c(t);break;case"edit":o(t);break;case"del":s(t);break;case"add":l();break;default:return}};return r.a.createElement("div",{className:"toolbar"},r.a.createElement("h1",null,t),!i&&!a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return d("add")},className:"btn"},"new")),i&&!a&&r.a.createElement("button",{onClick:function(){return d("back")},className:"btn"},"back"),a&&r.a.createElement("div",{className:"toolbar-btn"},r.a.createElement("button",{onClick:function(){return d("back")},className:"btn"},"back"),r.a.createElement("button",{onClick:function(){return d("view",a)},className:"btn btn-info"},"view"),r.a.createElement("button",{onClick:function(){return d("edit",a)},className:"btn btn-success"},"edit"),r.a.createElement("button",{onClick:function(){return d("del",a)},className:"btn btn-danger"},"delete")))};function f(e){var t=e.list,a=e.handleClick,n=e.parentClass,c=void 0===n?"card":n,o=e.nameClass,i=void 0===o?"card-name":o,s=e.classCondition,l=void 0===s?function(){}:s,d=e.itemClass,u=void 0===d?"":d;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement("div",{className:c+" "+l(e),key:e._id,onClick:function(){return a(e)}},r.a.createElement("div",{className:i},r.a.createElement("span",{className:u},e.name)))})))}function b(e){var t=e.label,a=void 0===t?"name":t,c=e.objectKey,o=void 0===c?"":c,s=e.placeholder,l=void 0===s?"enter here":s,d=e.onEnter,u=e.handleInput,m=e.handleBlur,f=e.classInput,b=void 0===f?"":f,p=e.defaultValue,v=void 0===p?"":p,g=Object(n.useState)(v),h=Object(i.a)(g,2),y=h[0],E=h[1],C=Object(n.useState)(!0),O=Object(i.a)(C,2),j=O[0],k=O[1],w=o||a;return r.a.createElement("div",{className:"block"},r.a.createElement("label",{className:"block"},a),r.a.createElement("input",{className:b,onKeyDown:function(e){if(13===e.keyCode)return d()},placeholder:l,onChange:function(e){var t=e.target.value;if(!t||!t.trim())return k(!1);k(!0),E(t),u(w,y)},onBlur:function(){return m(w,y)}}),j?"\u2705":"\u274c")}a(26),a(27);var p=a(13),v=a(31).mapbox,g={float:"left",margin:"50px",padding:"10px"},h=function(e){var t=e.coords,a=e.editCoords,c=void 0===a?null:a,o=e.isEditable,s=void 0!==o&&o,l=t&&t[0]?t[0]:0,d=t&&t[1]?t[1]:0,m=Object(n.useState)({width:"70vw",height:"60vh",longitude:l,latitude:d,zoom:4}),f=Object(i.a)(m,2),b=f[0],h=f[1];return r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(p.c,Object.assign({},b,{mapboxApiAccessToken:v,mapStyle:"mapbox://styles/mapbox/outdoors-v9",onViewportChange:function(e){s&&(h(Object(u.a)({},e,{transitionDuration:3e3})),c&&c(e))}}),r.a.createElement(p.b,{latitude:d,longitude:l,offsetLeft:-20,offsetTop:-10},r.a.createElement("div",null,"\ud83d\udc47")),s&&r.a.createElement(p.a,{style:g,positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0})),!s&&r.a.createElement("div",{className:"mapbox sidebar-ovelay"},r.a.createElement("figcaption",null,"Longitude: ",b.longitude," | Latitude: ",b.latitude)))},y=(a(32),function(e){var t=e.cards,a=e.deleteCard,c=e.editOrAddCards,o=e.title,s=void 0===o?"Global Cards":o,l=e.inputs,p=void 0===l?["name"]:l,v=e.editInputs,g=void 0===v?["name"]:v,y=e.classInput,E=void 0===y?"mr-bottom-1rem":y,C=e.doOnSelect,O=void 0===C?function(){}:C,j=e.showMap,k=e.children,w=function(e){var a=t.find((function(t){return t._id===e}));return a=-1===a?null:a},x=function(){c(K),X()},N=function(e,t){T(Object(u.a)({},K,Object(d.a)({},e,t)))},S=function(e,t){T(Object(u.a)({},K,Object(d.a)({},e,t)))},_=function(){x()},A=Object(n.useState)(),I=Object(i.a)(A,2),L=I[0],z=I[1],M=Object(n.useState)(),B=Object(i.a)(M,2),K=B[0],T=B[1],P=Object(n.useState)(),F=Object(i.a)(P,2),D=F[0],W=F[1],X=function(){z(null),T(),W(),O(null)};return r.a.createElement("div",{className:"cards"},r.a.createElement(m,{id:L,onEdit:K,edit:function(e){var t=w(e);T(t)},add:function(){T({})},view:function(e){var t=w(e);W(t)},del:function(e){a(e),X()},back:X},s),t&&t[0]&&!K&&!D&&r.a.createElement(f,{list:t,itemClass:"capitalized",handleClick:function(e){e._id===L?X():(console.log("item ",e),O(e),z(e._id))},classCondition:function(e){return L&&e._id===L?"highlight":""}}),D&&r.a.createElement("div",{className:"view-card"},p&&p.map((function(e,t){return r.a.createElement("span",{key:t,className:"capitalized mr-bottom-1rem block"},e+" : "+D[e])})),D&&j&&r.a.createElement(h,{coords:D.coords})),K&&r.a.createElement("div",{className:"edit-card capitalized"},g&&g[0]&&g.map((function(e,t){return r.a.createElement(b,{key:t,label:e,classInput:E,onEnter:_,placeholder:K[e]||e,defaultValue:K[e],handleBlur:S,handleInput:N})})),k,r.a.createElement("button",{className:"btn btn-save",onClick:x},"save")))});a(11);function E(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<e;n++)t+=a.charAt(Math.floor(Math.random()*a.length));return t}var C,O={getCat:function(){return l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return C||(C=[].concat(j)),e.abrupt("return",k());case 2:case"end":return e.stop()}}))},delCat:function(e){var t;return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(-1!==(t=C.findIndex((function(t){return t._id===e})))){a.next=3;break}return a.abrupt("return");case 3:C.splice(t,1),k();case 5:case"end":return a.stop()}}))},editOrAdd:function(e){if(!e)return;e._id?function(e){var t=C.findIndex((function(t){return t._id===e._id}));C[t]=e}(e):function(e){var t=E();e._id=t,C.push(e)}(e);k()}},j=[{_id:"0ewad0",name:"Travel"},{_id:"1djaW1",name:"Snowboard"},{_id:"2fAcp2",name:"Kitesurf"},{_id:"3dl0P3",name:"Hiking"},{_id:"4ljfq4",name:"Luxury"},{_id:"5dape5",name:"Trending"},{_id:"6gXpf6",name:"Most Popular"}];function k(){var e=C.map((function(e){return e}));return e}function w(e){var t=e.onCategoryChange,a=Object(n.useState)([]),c=Object(i.a)(a,2),o=c[0],s=c[1];Object(n.useEffect)((function(){d()}),[]);var d=function(){return l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,l.a.awrap(O.getCat());case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.abrupt("return",o);case 6:case"end":return e.stop()}}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{cards:o,deleteCard:function(e){return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.a.awrap(O.delCat(e));case 2:t(),d();case 4:case"end":return a.stop()}}))},editOrAddCards:function(e){return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.a.awrap(O.editOrAdd(e));case 2:t(),d();case 4:case"end":return a.stop()}}))},title:"Categories"}))}var x,N={getLoc:function(){return l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return x||(x=[].concat(S)),e.abrupt("return",_());case 2:case"end":return e.stop()}}))},delLoc:function(e){var t;return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(-1!==(t=x.findIndex((function(t){return t._id===e})))){a.next=3;break}return a.abrupt("return");case 3:x.splice(t,1),_();case 5:case"end":return a.stop()}}))},editOrAdd:function(e){if(!e)return;console.log(e.coords),e._id?function(e){var t=x.findIndex((function(t){return t._id===e._id}));x[t]=e}(e):function(e){var t=E();e._id=t,x.push(e)}(e);_()},sortBy:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=typeof x[0][e]||typeof S[0][e];"string"===a?t?x.sort((function(t,a){return t[e].localeCompare(a[e])})):x.sort((function(t,a){return a[e].localeCompare(t[e])})):x.sort()},filterBy:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"category";if(!e)return;if("all"===e)return _();var a=x.filter((function(a){return a[t]===e}));return a}},S=[{_id:"0ewad0",address:"address",name:"Brazil",coords:[43.4416815,-20.4285582],category:"Travel"},{_id:"1djaW1",address:"address",name:"Austria",coords:[-33.4416815,-20.4285582],category:"Snowboard"},{_id:"2fAcp2",address:"address",name:"Portugal",coords:[11.4416815,31.4285582],category:"Kitesurf"},{_id:"3dl0P3",address:"address",name:"Greece",coords:[22.4416815,32.4285582],category:"Most Popular"},{_id:"4ljfq4",address:"address",name:"Israel",coords:[-32.4416815,31.4285582],category:"Most Popular"},{_id:"5XjNq5",address:"address",name:"Dubai",coords:[-3.4416815,31.4285582],category:"Luxury"},{_id:"6dape6",address:"address",name:"Spain",coords:[-.2416815,54.5285582],category:"Trending"},{_id:"723de7",address:"address",name:"China",coords:[-.24234815,51.5283212],category:"Hiking"},{_id:"8Y3de8",address:"address",name:"Timbaktu",coords:[-.2416815,51.5285582],category:"Hiking"},{_id:"9gXpf9",address:"address",name:"France",coords:[-.2416815,51.5285582],category:"Most Popular"}];function _(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=e.map((function(e){return e}));return t}function A(e){var t=e.title,a=void 0===t?"select":t,n=e.isShowAllOption,c=void 0===n||n,o=e.dataList,i=e.onSelect,s=void 0===i?function(e){console.log("select",e.target.value)}:i,l=e.valueKey,d=e.showKey,u=void 0===d?l:d,m=e.selectedOption,f=void 0===m?"":m,b=e.idKey,p=void 0===b?"":b,v=e.idKeyExp,g=void 0===v?"":v,h=e.optionClass,y=void 0===h?"capitalized":h,E=e.getSelectList,C=void 0===E?function(){}:E,O=function(e,t){return p?e[p]:g?g(e,t):t};return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:""}," ",a," "),r.a.createElement("select",{className:"btn",onClick:C,onChange:s,value:f},c&&r.a.createElement("option",{value:"all"}," all"),o&&o[0]&&o.map((function(e,t){return r.a.createElement("option",{className:y,key:O(e,t),value:e[l]},e[u])}))))}function I(e){var t=e.isCategorryChanged,a=Object(n.useState)([{id:null,name:"loading..."}]),c=Object(i.a)(a,2),o=c[0],s=c[1],d=Object(n.useState)([]),m=Object(i.a)(d,2),f=m[0],b=m[1],p=Object(n.useState)(!0),v=Object(i.a)(p,2),g=v[0],E=v[1],C=Object(n.useState)("all"),j=Object(i.a)(C,2),k=j[0],w=j[1],x=Object(n.useState)(!1),S=Object(i.a)(x,2),_=S[0],I=S[1],L=Object(n.useState)(),z=Object(i.a)(L,2),M=z[0],B=z[1],K=Object(n.useState)(),T=Object(i.a)(K,2),P=T[0],F=T[1];Object(n.useEffect)((function(){D()}),[]),Object(n.useEffect)((function(){W()}),[t]);var D=function(){return l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=b,e.next=3,l.a.awrap(N.getLoc());case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.abrupt("return",f);case 6:case"end":return e.stop()}}))},W=function(){var e;return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(O.getCat());case 2:e=t.sent,s(e);case 4:case"end":return t.stop()}}))},X=function(e){var t=e.latitude,a=e.longitude;F([a,t])};return r.a.createElement("div",{className:"locations-page"},_&&r.a.createElement("div",null),!_&&r.a.createElement("div",{className:"sidebar"},o&&o[0]&&r.a.createElement("div",null,"filter",r.a.createElement(A,{title:"",dataList:o,onSelect:function(e){var t=e.target.value;w(t);var a=N.filterBy(t,"category");b(a)},selectedOption:k,valueKey:"name",showKey:"name",optionClass:"capitalized",getSelectList:W})),r.a.createElement("button",{className:"btn",onClick:function(){N.sortBy("name",g),E(!g),D()}},"sort ",g?"  a - z":"  z - a"),r.a.createElement("button",{className:"btn",onClick:function(){N.sortBy("category"),D()}},"group by category")),r.a.createElement(y,{title:"Locations",cards:f,deleteCard:function(e){return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(N.delLoc(e));case 2:D();case 3:case"end":return t.stop()}}))},editOrAddCards:function(e){var t,a;return l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(_){n.next=2;break}return n.abrupt("return");case 2:return t=P||e.coords,console.log(t),a=Object(u.a)({},e,{coords:t,category:M}),n.next=7,l.a.awrap(N.editOrAdd(a));case 7:I(),D();case 9:case"end":return n.stop()}}))},inputs:["name","address","category"],editInputs:["name","address"],classInput:"mr-bottom-1rem",doOnSelect:function(e){var t=!(!e||!e._id);I(t),t&&(e.category&&B(e.category),e.coords&&X(e.coords))},showMap:!0},r.a.createElement(A,{title:"category",isShowAllOption:!1,selectedOption:M,dataList:o,onSelect:function(e){var t=e.target.value;B(t)},valueKey:"name",showKey:"name",optionClass:"capitalized",getSelectList:W}),_&&r.a.createElement(h,{coords:P,isEditable:!0,editCoords:X})))}function L(e){var t=e.handleClick,a=e.children;return r.a.createElement("div",{className:"toggle-bar"},r.a.createElement("button",{className:"btn",onClick:function(){return t(!0)}}," ",a[0]," "),r.a.createElement("button",{className:"btn",onClick:function(){return t(!1)}}," ",a[1]," "))}a(33);var z=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),s=Object(i.a)(o,2),l=s[0],d=s[1];return r.a.createElement("div",{className:"App"},r.a.createElement("header",null),r.a.createElement("main",null,a&&r.a.createElement(w,{onCategoryChange:function(){d([Math.random()])}}),!a&&r.a.createElement(I,{isCategorryChanged:l})),r.a.createElement("footer",null,r.a.createElement(L,{handleClick:function(e){a!==e&&c(!a)}},["Categories","Locations"])))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(z,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.8a4bb1fe.chunk.js.map