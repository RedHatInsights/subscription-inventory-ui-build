/*! For license information please see 8370.1657892709835.9b9400c4b190058e17e5.js.LICENSE.txt */
(self.webpackChunksubscription_inventory=self.webpackChunksubscription_inventory||[]).push([[8370],{3754:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(2950);const a=n.n(r)().createContext("light")},123:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(2950),a=n.n(r),l=n(4184),c=n.n(l),i=n(3754),u=function(){return u=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},u.apply(this,arguments)};const o=function(e){var t=e.className,n=e.children,r=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n}(e,["className","children"]),l=c()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return a().createElement(i.Z.Consumer,null,(function(e){var t,i;void 0===e&&(e="light");var o=c()(((t={})["pf-m-".concat(e,"-200")]="dark"===e,t),((i={})["pf-m-light"]="light"===e,i));return a().createElement("section",u({},r,{className:"".concat(l," ").concat(o),"widget-type":"InsightsPageHeader"}),n)}))}},9173:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(2950),a=n.n(r),l=n(4184),c=n.n(l),i=n(8071);const u=function(e){var t=e.className,n=e.title,r=c()(t);return a().createElement(i.Title,{headingLevel:"h1",size:"2xl",className:r,"widget-type":"InsightsPageHeaderTitle"},n)}},8370:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>v});var r=n(8071),a=n(123),l=n(9173),c=n(2950),i=n.n(c),u=n(334),o=n(5586),s=n(8767),f=function(e,t,n,r){return new(n||(n=Promise))((function(a,l){function c(e){try{u(r.next(e))}catch(e){l(e)}}function i(e){try{u(r.throw(e))}catch(e){l(e)}}function u(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(c,i)}u((r=r.apply(e,t||[])).next())}))},p=function(e,t){var n,r,a,l,c={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(l){return function(i){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;c;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return c.label++,{value:l[1],done:!1};case 5:c.label++,r=l[1],l=[0];continue;case 7:l=c.ops.pop(),c.trys.pop();continue;default:if(!((a=(a=c.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){c=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){c.label=l[1];break}if(6===l[0]&&c.label<a[1]){c.label=a[1],a=l;break}if(a&&c.label<a[2]){c.label=a[2],c.ops.push(l);break}a[2]&&c.ops.pop(),c.trys.pop();continue}l=t.call(e,c)}catch(e){l=[6,e],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,i])}}},m=function(e){return f(void 0,void 0,void 0,(function(){var t;return p(this,(function(n){switch(n.label){case 0:return[4,window.insights.chrome.auth.getToken()];case 1:return t=n.sent(),[4,fetch("/api/rhsm/v2/products/".concat(e),{headers:{Authorization:"Bearer ".concat(t)}})];case 2:return[4,n.sent().json()];case 3:return[2,n.sent().body]}}))}))},h=n(5984);const v=(0,u.withRouter)((function(){var e,t=(0,u.useParams)().SKU,n=(0,s.useQueryClient)().getQueryData("user"),c=(e=t,(0,s.useQuery)("singleProduct.".concat(e),(function(){return function(e){return f(void 0,void 0,void 0,(function(){return p(this,(function(t){switch(t.label){case 0:return[4,m(e)];case 1:return[2,t.sent()]}}))}))}(e)}))),v=c.isLoading,d=c.error,y=c.data,b="Not Available";return n.canReadProducts?i().createElement((function(){var e;return i().createElement(i().Fragment,null,i().createElement(a.Z,null,v&&!d&&i().createElement(o.qb,null),!v&&!d&&i().createElement(i().Fragment,null,i().createElement(r.Breadcrumb,null,i().createElement(r.BreadcrumbItem,{render:function(){return i().createElement(u.Link,{to:"/"},"Subscription Inventory")}}),i().createElement(r.BreadcrumbItem,{isActive:!0},y.name," ")),i().createElement(l.Z,{title:y.name}),i().createElement(r.List,{isPlain:!0},i().createElement(r.ListItem,{className:"pf-u-mt-md"},i().createElement("b",null,"SKU: "),y.sku||b),i().createElement(r.ListItem,{className:"pf-u-mt-0"},i().createElement("b",null,"Quantity: "),null!==(e=y.quantity)&&void 0!==e?e:b),i().createElement(r.ListItem,{className:"pf-u-mt-0"},i().createElement("b",null,"Support level: "),y.serviceLevel||b),i().createElement(r.ListItem,{className:"pf-u-mt-0"},i().createElement("b",null,"Support type: "),y.serviceType||b),i().createElement(r.ListItem,{className:"pf-u-mt-0"},i().createElement("b",null,"Unit of Measure: "),y.unitOfMeasure?i().createElement(i().Fragment,null,y.unitOfMeasure.name," ",i().createElement(r.Badge,{isRead:!0},y.unitOfMeasure.quantity)):i().createElement(i().Fragment,null,"Not Available")))),d&&i().createElement(h.Z,null)))}),null):i().createElement(u.Redirect,{to:"/no-permissions"})}))},4184:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)){if(n.length){var c=a.apply(null,n);c&&e.push(c)}}else if("object"===l)if(n.toString===Object.prototype.toString)for(var i in n)r.call(n,i)&&n[i]&&e.push(i);else e.push(n.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()}}]);