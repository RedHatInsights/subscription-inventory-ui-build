/*! For license information please see 2810.1666899782971.58a9ca7e700435fe5190.js.LICENSE.txt */
(self.webpackChunksubscription_inventory=self.webpackChunksubscription_inventory||[]).push([[2810],{3754:(t,n,r)=>{"use strict";r.d(n,{Z:()=>a});var e=r(2950);const a=r.n(e)().createContext("light")},4748:(t,n,r)=>{"use strict";r.d(n,{Z:()=>f});var e=r(5893),a=r(2950),i=r.n(a),o=r(4184),c=r.n(o),s=r(6706),l=r(3754),p=function(){return p=Object.assign||function(t){for(var n,r=1,e=arguments.length;r<e;r++)for(var a in n=arguments[r])Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t},p.apply(this,arguments)},u=function(t,n,r){if(r||2===arguments.length)for(var e,a=0,i=n.length;a<i;a++)!e&&a in n||(e||(e=Array.prototype.slice.call(n,0,a)),e[a]=n[a]);return t.concat(e||Array.prototype.slice.call(n))};const f=(0,s.$j)((function(t){var n=t.routerData;return{params:n&&n.params,path:n&&n.path}}),(function(){return{}}))((function(t){var n=t.path,r=t.params,a=void 0===r?{}:r,o=t.children,s=t.className,f=function(t,n){var r={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(r[e]=t[e]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(e=Object.getOwnPropertySymbols(t);a<e.length;a++)n.indexOf(e[a])<0&&Object.prototype.propertyIsEnumerable.call(t,e[a])&&(r[e[a]]=t[e[a]])}return r}(t,["path","params","children","className"]),d=function(){var t,r,e;if(null===(e=null===(r=null===(t=null===window||void 0===window?void 0:window.insights)||void 0===t?void 0:t.chrome)||void 0===r?void 0:r.$internal)||void 0===e?void 0:e.store){var i=window.insights.chrome.$internal.store.getState();if(n&&i)return n.split("/").reduce((function(t,n){var r,e;return 0===n.indexOf(":")?t.dynamic=p(p({},t.dynamic),((r={})["data-".concat((e=n.substr(1),e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()))]=a[n.substr(1)],r)):t.staticPart=u(u([],t.staticPart,!0),""!==n?[n]:[],!0),t}),{staticPart:[i.chrome.appId],dynamic:{}})}return{staticPart:[],dynamic:void 0}}(),v=d.dynamic,h=d.staticPart;return(0,e.jsx)(l.Z.Consumer,{children:function(t){var n;void 0===t&&(t="light");var r=c()(((n={})["pf-m-".concat(t)]="dark"===t,n));return{dark:(0,e.jsx)("section",p({},f,v,{"page-type":h.join("-"),className:"".concat(c()(s,"pf-l-page__main-section pf-c-page__main-section")," ").concat(r)},{children:i().Children.map(o,(function(t){return i().cloneElement(t,{className:"pf-m-dark"})}))})),light:(0,e.jsx)("section",p({},f,v,{"page-type":h.join("-"),className:"".concat(c()(s,"pf-l-page__main-section pf-c-page__main-section"))},{children:o}))}[t]}})}))},2810:(t,n,r)=>{"use strict";r.r(n),r.d(n,{default:()=>s});var e=r(2950),a=r.n(e),i=r(334),o=r(4748),c=r(5984);const s=(0,i.withRouter)((function(){return(0,e.useEffect)((function(){var t,n,r;null===(t=insights)||void 0===t||null===(n=t.chrome)||void 0===n||null===(r=n.appAction)||void 0===r||r.call(n,"oops-page")}),[]),a().createElement(o.Z,null,a().createElement(c.Z,null))}))},4184:(t,n)=>{var r;!function(){"use strict";var e={}.hasOwnProperty;function a(){for(var t=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)){if(r.length){var o=a.apply(null,r);o&&t.push(o)}}else if("object"===i)if(r.toString===Object.prototype.toString)for(var c in r)e.call(r,c)&&r[c]&&t.push(c);else t.push(r.toString())}}return t.join(" ")}t.exports?(a.default=a,t.exports=a):void 0===(r=function(){return a}.apply(n,[]))||(t.exports=r)}()}}]);