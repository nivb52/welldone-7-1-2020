(this["webpackJsonpmy-locations"]=this["webpackJsonpmy-locations"]||[]).push([[0],{16:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(5),c=(a(27),a(28),a(29),a(0)),o=a.n(c),i=a(11),s=o.a.lazy((function(){return Promise.resolve().then(a.bind(null,11))})),l=o.a.lazy((function(){return a.e(3).then(a.bind(null,37))})),u=a(33).mapbox,d={float:"left",margin:"50px",padding:"10px"};t.default=function(e){var t=e.coords,a=e.editCoords,f=void 0===a?null:a,m=e.editAddressByGeocoder,p=void 0===m?null:m,b=e.isEditable,v=void 0!==b&&b,g=t&&t[0]?t[0]:0,y=t&&t[1]?t[1]:0,h=Object(c.useState)({width:"70vw",height:"60vh",longitude:g,latitude:y,zoom:5}),E=Object(r.a)(h,2),O=E[0],j=E[1],C=o.a.useRef();return o.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},o.a.createElement(i.default,Object.assign({},O,{ref:C,mapboxApiAccessToken:u,mapStyle:"mapbox://styles/mapbox/outdoors-v9",onViewportChange:function(e){v&&(j(Object(n.a)({},e,{transitionDuration:3e3})),f&&f(e))}}),o.a.createElement(i.Marker,{latitude:y,longitude:g,offsetLeft:-20,offsetTop:-10},o.a.createElement("div",null,"\ud83d\udc47")),v&&o.a.createElement(o.a.Fragment,null,o.a.createElement(c.Suspense,{fallback:o.a.createElement("div",null,"Loading...")},o.a.createElement(s,{style:d,positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0,mapboxApiAccessToken:u}),o.a.createElement(l,{mapboxApiAccessToken:u,mapRef:C,onResult:function(e){var t=e.result;console.log(t);var a=t.geometry.coordinates,c=Object(r.a)(a,2),o=c[0],i=c[1];j(Object(n.a)({},O,{longitude:o,latitude:i,transitionDuration:3e3})),f&&"function"===typeof f&&f(O),p&&"function"===typeof p&&p(t)},position:"top-right"})))),!v&&o.a.createElement("div",{className:"mapbox sidebar-ovelay"},o.a.createElement("figcaption",null,"Longitude: ",O.longitude," | Latitude: ",O.latitude)))}},21:function(e,t,a){e.exports=a(36)},29:function(e,t,a){},33:function(e){e.exports=JSON.parse('{"mapbox":"pk.eyJ1Ijoibml2YjUyIiwiYSI6ImNrNTcyeWhrYzA5bXEzbXBnbDU3dzZ5MzkifQ.h9eMjMa17c4nMDzT3GrGvw"}')},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),o=a.n(c),i=(a(16),a(5)),s=a(6),l=a.n(s),u=a(1),d=a(8),f=function(e){var t=e.children,a=e.id,n=e.back,c=e.view,o=e.edit,i=e.onEdit,s=e.del,l=e.add,u=function(e,t){switch(e){case"back":n();break;case"view":c(t);break;case"edit":o(t);break;case"del":s(t);break;case"add":l();break;default:return}};return r.a.createElement("div",{className:"toolbar"},r.a.createElement("h1",null,t),!i&&!a&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return u("add")},className:"btn"},"new")),i&&!a&&r.a.createElement("button",{onClick:function(){return u("back")},className:"btn"},"back"),a&&r.a.createElement("div",{className:"toolbar-btn"},r.a.createElement("button",{onClick:function(){return u("back")},className:"btn"},"back"),r.a.createElement("button",{onClick:function(){return u("view",a)},className:"btn btn-info"},"view"),r.a.createElement("button",{onClick:function(){return u("edit",a)},className:"btn btn-success"},"edit"),r.a.createElement("button",{onClick:function(){return u("del",a)},className:"btn btn-danger"},"delete")))};function m(e){var t=e.list,a=e.handleClick,n=e.parentClass,c=void 0===n?"card":n,o=e.nameClass,i=void 0===o?"card-name":o,s=e.classCondition,l=void 0===s?function(){}:s,u=e.itemClass,d=void 0===u?"":u;return r.a.createElement(r.a.Fragment,null,t.map((function(e){return r.a.createElement("div",{className:c+" "+l(e),key:e._id,onClick:function(){return a(e)}},r.a.createElement("div",{className:i},r.a.createElement("span",{className:d},e.name)))})))}function p(e){var t=e.label,a=void 0===t?"name":t,c=e.objectKey,o=void 0===c?"":c,s=e.placeholder,l=void 0===s?"enter here":s,u=e.onEnter,d=e.handleInput,f=e.handleBlur,m=e.classInput,p=void 0===m?"":m,b=e.defaultValue,v=void 0===b?"":b,g=Object(n.useState)(v),y=Object(i.a)(g,2),h=y[0],E=y[1],O=Object(n.useState)(!0),j=Object(i.a)(O,2),C=j[0],k=j[1],w=o||a;return r.a.createElement("div",{className:"block"},r.a.createElement("label",{className:"block"},a),r.a.createElement("input",{className:p,onKeyDown:function(e){if(13===e.keyCode)return u()},placeholder:l,onChange:function(e){var t=e.target.value;if(!t||!t.trim())return k(!1);k(!0),E(t),d(w,h)},onBlur:function(){return f(w,h)}}),C?"\u2705":"\u274c")}var b=a(19),v=(a(34),function(e){var t=e.cards,a=e.deleteCard,c=e.editOrAddCards,o=e.title,s=void 0===o?"Global Cards":o,l=e.inputs,v=void 0===l?["name"]:l,g=e.editInputs,y=void 0===g?["name"]:g,h=e.classInput,E=void 0===h?"mr-bottom-1rem":h,O=e.doOnSelect,j=void 0===O?function(){}:O,C=e.showMap,k=e.children,w=function(e){var a=t.find((function(t){return t._id===e}));return a=-1===a?null:a},S=function(){c(K),G()},x=function(e,t){T(Object(d.a)({},K,Object(u.a)({},e,t)))},N=function(e,t){T(Object(d.a)({},K,Object(u.a)({},e,t)))},_=function(){S()},A=Object(n.useState)(),I=Object(i.a)(A,2),L=I[0],z=I[1],B=Object(n.useState)(),M=Object(i.a)(B,2),K=M[0],T=M[1],P=Object(n.useState)(),J=Object(i.a)(P,2),F=J[0],D=J[1],G=function(){z(null),T(),D(),j(null)};return r.a.createElement("div",{className:"cards"},r.a.createElement(f,{id:L,onEdit:K,edit:function(e){var t=w(e);T(t)},add:function(){T({})},view:function(e){var t=w(e);D(t)},del:function(e){a(e),G()},back:G},s),t&&t[0]&&!K&&!F&&r.a.createElement(m,{list:t,itemClass:"capitalized",handleClick:function(e){e._id===L?G():(console.log("item ",e),j(e),z(e._id))},classCondition:function(e){return L&&e._id===L?"highlight":""}}),F&&r.a.createElement("div",{className:"view-card"},v&&v.map((function(e,t){return r.a.createElement("span",{key:t,className:"capitalized mr-bottom-1rem block"},e+" : "+F[e])})),F&&C&&r.a.createElement(b.default,{coords:F.coords})),K&&r.a.createElement("div",{className:"edit-card capitalized"},y&&y[0]&&y.map((function(e,t){return r.a.createElement(p,{key:t,label:e,classInput:E,onEnter:_,placeholder:K[e]||e,defaultValue:K[e],handleBlur:N,handleInput:x})})),k,r.a.createElement("button",{className:"btn btn-save",onClick:S},"save")))}),g=a(12);function y(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:7,t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<e;n++)t+=a.charAt(Math.floor(Math.random()*a.length));return t}var h,E=!function(e,t){for(var a=t.split("."),n=0;n<a.length;n++){var r=a[n];if(!e||!e.hasOwnProperty(r))return!1;e=e[r]}return!0}(window,"document.location.hostname")||"localhost"!==window.document.location.hostname,O={getCat:function(){var e;return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return E?(e=JSON.parse(localStorage.getItem("categories")),h=e?Object(g.a)(e):[].concat(j)):h||(h=[].concat(j)),t.abrupt("return",C());case 2:case"end":return t.stop()}}))},delCat:function(e){var t;return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(-1!==(t=h.findIndex((function(t){return t._id===e})))){a.next=3;break}return a.abrupt("return");case 3:h.splice(t,1),C();case 5:case"end":return a.stop()}}))},editOrAdd:function(e){if(!e)return;e._id?function(e){var t=h.findIndex((function(t){return t._id===e._id}));h[t]=e}(e):function(e){var t=y();e._id=t,h.push(e)}(e);C()}},j=[{_id:"0ewad0",name:"Travel"},{_id:"1djaW1",name:"Snowboard"},{_id:"2fAcp2",name:"Kitesurf"},{_id:"3dl0P3",name:"Hiking"},{_id:"4ljfq4",name:"Luxury"},{_id:"5dape5",name:"Trending"},{_id:"6gXpf6",name:"Most Popular"}];function C(){var e=h.map((function(e){return e}));return E&&localStorage.setItem("categories",JSON.stringify(e)),e}function k(e){var t=e.onCategoryChange,a=Object(n.useState)([]),c=Object(i.a)(a,2),o=c[0],s=c[1];Object(n.useEffect)((function(){u()}),[]);var u=function(){return l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,l.a.awrap(O.getCat());case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.abrupt("return",o);case 6:case"end":return e.stop()}}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{cards:o,deleteCard:function(e){return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.a.awrap(O.delCat(e));case 2:t(),u();case 4:case"end":return a.stop()}}))},editOrAddCards:function(e){return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,l.a.awrap(O.editOrAdd(e));case 2:t(),u();case 4:case"end":return a.stop()}}))},title:"Categories"}))}var w,S={getLoc:function(){var e;return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return E?(e=JSON.parse(localStorage.getItem("locations")),w=e?Object(g.a)(e):[].concat(x)):w||(w=[].concat(x)),t.abrupt("return",N());case 2:case"end":return t.stop()}}))},delLoc:function(e){var t;return l.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:if(-1!==(t=w.findIndex((function(t){return t._id===e})))){a.next=3;break}return a.abrupt("return");case 3:w.splice(t,1),N();case 5:case"end":return a.stop()}}))},editOrAdd:function(e){if(!e)return;e._id?function(e){var t=w.findIndex((function(t){return t._id===e._id}));w[t]=e}(e):function(e){var t=y();e._id=t,w.push(e)}(e);N()},sortBy:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],a=typeof w[0][e]||typeof x[0][e];"string"===a?t?w.sort((function(t,a){return t[e].localeCompare(a[e])})):w.sort((function(t,a){return a[e].localeCompare(t[e])})):w.sort()},filterBy:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"category";if(!e)return;if("all"===e)return N();var a=w.filter((function(a){return a[t]===e}));return a}},x=[{_id:"0ewad0",address:"address",name:"Brazil",coords:[43.4416815,-20.4285582],category:"Travel"},{_id:"1djaW1",address:"address",name:"Austria",coords:[-33.4416815,-20.4285582],category:"Snowboard"},{_id:"2fAcp2",address:"address",name:"Portugal",coords:[11.4416815,31.4285582],category:"Kitesurf"},{_id:"3dl0P3",address:"address",name:"Greece",coords:[22.4416815,32.4285582],category:"Most Popular"},{_id:"4ljfq4",address:"address",name:"Israel",coords:[-32.4416815,31.4285582],category:"Most Popular"},{_id:"5XjNq5",address:"address",name:"Dubai",coords:[-3.4416815,31.4285582],category:"Luxury"},{_id:"6dape6",address:"address",name:"Spain",coords:[-.2416815,54.5285582],category:"Trending"},{_id:"723de7",address:"address",name:"China",coords:[-.24234815,51.5283212],category:"Hiking"},{_id:"8Y3de8",address:"address",name:"Timbaktu",coords:[-.2416815,51.5285582],category:"Hiking"},{_id:"9gXpf9",address:"address",name:"France",coords:[-.2416815,51.5285582],category:"Most Popular"}];function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=e.map((function(e){return e}));return E&&localStorage.setItem("locations",JSON.stringify(t)),t}function _(e){var t=e.title,a=void 0===t?"select":t,n=e.isShowAllOption,c=void 0===n||n,o=e.dataList,i=e.onSelect,s=void 0===i?function(e){console.log("select",e.target.value)}:i,l=e.valueKey,u=e.showKey,d=void 0===u?l:u,f=e.selectedOption,m=void 0===f?"":f,p=e.idKey,b=void 0===p?"":p,v=e.idKeyExp,g=void 0===v?"":v,y=e.optionClass,h=void 0===y?"capitalized":y,E=e.getSelectList,O=void 0===E?function(){}:E,j=function(e,t){return b?e[b]:g?g(e,t):t};return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:""}," ",a," "),r.a.createElement("select",{className:"btn",onClick:O,onChange:s,value:m},c&&r.a.createElement("option",{value:"all"}," all"),o&&o[0]&&o.map((function(e,t){return r.a.createElement("option",{className:h,key:j(e,t),value:e[l]},e[d])}))))}var A=r.a.lazy((function(){return Promise.resolve().then(a.bind(null,19))})),I=["name","address","category"],L=["name","address"];function z(e){var t=e.isCategorryChanged,a=Object(n.useState)([{_id:0,name:"loading..."}]),c=Object(i.a)(a,2),o=c[0],s=c[1],u=Object(n.useState)([]),f=Object(i.a)(u,2),m=f[0],p=f[1],b=Object(n.useState)(!0),g=Object(i.a)(b,2),y=g[0],h=g[1],E=Object(n.useState)("all"),j=Object(i.a)(E,2),C=j[0],k=j[1],w=Object(n.useState)(!1),x=Object(i.a)(w,2),N=x[0],z=x[1],B=Object(n.useState)(),M=Object(i.a)(B,2),K=M[0],T=M[1],P=Object(n.useState)(),J=Object(i.a)(P,2),F=J[0],D=J[1],G=Object(n.useState)(),W=Object(i.a)(G,2),X=W[0],H=W[1];Object(n.useEffect)((function(){Y()}),[]),Object(n.useEffect)((function(){q()}),[t]);var Y=function(){return l.a.async((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,l.a.awrap(S.getLoc());case 3:return e.t1=e.sent,(0,e.t0)(e.t1),e.abrupt("return",m);case 6:case"end":return e.stop()}}))},q=function(){var e;return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(O.getCat());case 2:e=t.sent,s(e);case 4:case"end":return t.stop()}}))},R=function(e){var t=e.latitude,a=e.longitude;D([a,t])};return r.a.createElement("div",{className:"locations-page"},N&&r.a.createElement("div",null),!N&&r.a.createElement("div",{className:"sidebar"},o&&o[0]&&r.a.createElement("div",null,"filter",r.a.createElement(_,{title:"",dataList:o,onSelect:function(e){var t=e.target.value;k(t);var a=S.filterBy(t,"category");p(a)},selectedOption:C,valueKey:"name",showKey:"name",optionClass:"capitalized",getSelectList:q})),r.a.createElement("button",{className:"btn",onClick:function(){S.sortBy("name",y),h(!y),Y()}},"sort ",y?"  a - z":"  z - a"),r.a.createElement("button",{className:"btn",onClick:function(){S.sortBy("category"),Y()}},"group by category")),r.a.createElement(v,{title:"Locations",cards:m,deleteCard:function(e){return l.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l.a.awrap(S.delLoc(e));case 2:Y();case 3:case"end":return t.stop()}}))},editOrAddCards:function(e){var t,a,n;return l.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(N){r.next=2;break}return r.abrupt("return");case 2:return t=F||e.coords,a=X||e.address,console.log("editOrAddLocation : ",X),n=Object(d.a)({},e,{address:a,coords:t,category:K}),r.next=8,l.a.awrap(S.editOrAdd(n));case 8:z(),Y();case 10:case"end":return r.stop()}}))},inputs:I,editInputs:L,classInput:"mr-bottom-1rem",doOnSelect:function(e){var t=!(!e||!e._id);z(t),t&&(e.category&&T(e.category),e.coords&&R(e.coords))},showMap:!0},r.a.createElement(_,{title:"category",isShowAllOption:!1,selectedOption:K,dataList:o,onSelect:function(e){var t=e.target.value;T(t)},valueKey:"name",showKey:"name",optionClass:"capitalized",getSelectList:q}),N&&r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(A,{coords:F,isEditable:!0,editCoords:R,editAddressByGeocoder:function(e){var t=e.text,a=e.place_name;H(t||a)}}))))}function B(e){var t=e.handleClick,a=e.children;return r.a.createElement("div",{className:"toggle-bar"},r.a.createElement("button",{className:"btn",onClick:function(){return t(!0)}}," ",a[0]," "),r.a.createElement("button",{className:"btn",onClick:function(){return t(!1)}}," ",a[1]," "))}a(35);var M=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),s=Object(i.a)(o,2),l=s[0],u=s[1];return r.a.createElement("div",{className:"App"},r.a.createElement("header",null),r.a.createElement("main",null,a&&r.a.createElement(k,{onCategoryChange:function(){u([Math.random()])}}),!a&&r.a.createElement(z,{isCategorryChanged:l})),r.a.createElement("footer",null,r.a.createElement(B,{handleClick:function(e){a!==e&&c(!a)}},["Categories","Locations"])))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.7939cdf2.chunk.js.map