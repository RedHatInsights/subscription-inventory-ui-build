"use strict";(self.webpackChunksubscription_inventory=self.webpackChunksubscription_inventory||[]).push([[252],{8738:(e,t,n)=>{n.d(t,{JH:()=>j});var r=n(9713),a=n.n(r),c=n(1810),o=n.n(c),i=n(3038),s=n.n(i),u=n(4575),l=n.n(u),p=n(3913),f=n.n(p),d=n(7625);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:d.compose;l()(this,e);var a=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r;this.store=(0,d.createStore)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:t;return e}),t,a(d.applyMiddleware.apply(void 0,o()(n)))),this.reducers={}}return f()(e,[{key:"getStore",value:function(){return this.store}},{key:"register",value:function(e){var t=this;return this.reducers=g(g({},this.reducers),e),this.store.replaceReducer((0,d.combineReducers)(g({},this.reducers))),function(){t.reducers=Object.entries(t.reducers).filter((function(t){return!Object.keys(e).includes(t)})).reduce((function(e,t){var n=s()(t,2),r=n[0],c=n[1];return g(g({},e),{},a()({},r,c))}),{}),t.store.replaceReducer((0,d.combineReducers)(g({},t.reducers)))}}}]),e}();new m;const v=m;function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var b;function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0;return b||(b=new v(e,o()(t),n)),b.register({routerData:function(e,t){var n=t.type,r=t.payload;return O(O({},e),"@@INSIGHTS-CORE/NAVIGATION"===n?r:{})}}),b}function j(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0;return P(e,t,n)}},5240:(e,t,n)=>{n.d(t,{eb:()=>c}),n(8),n(9713),n(3038);var r=n(1810),a=n.n(r);function c(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n="/",r=e.replace(/(#|\?).*/,"").split("/");return r.shift(),"beta"===r[0]&&(r.shift(),n="/beta/"),a()(new Array(t)).reduce((function(e,n,a){return"".concat(e).concat(r[a]||"").concat(a<t-1?"/":"")}),n)}n(2492),n(7523)},2466:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(2950);const a=n.n(r)().createContext("light")},6350:(e,t,n)=>{n.d(t,{Z:()=>S});var r=n(7154),a=n.n(r),c=n(6479),o=n.n(c),i=n(1810),s=n.n(i),u=n(9713),l=n.n(u),p=n(4575),f=n.n(p),d=n(3913),h=n.n(d),g=n(2205),m=n.n(g),v=n(8585),y=n.n(v),O=n(9754),b=n.n(O),P=n(2950),j=n.n(P),w=n(5697),E=n.n(w),N=n(4184),_=n.n(N),k=n(3476),R=n(2466);function T(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?T(Object(n),!0).forEach((function(t){l()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var x=function(e){m()(c,e);var t,n,r=(t=c,n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=b()(t);if(n){var a=b()(this).constructor;e=Reflect.construct(r,arguments,a)}else e=r.apply(this,arguments);return y()(this,e)});function c(){return f()(this,c),r.apply(this,arguments)}return h()(c,[{key:"calculateLocation",value:function(){var e=this.props,t=e.path,n=e.params;if(insights&&insights.chrome&&insights.chrome.$internal&&insights.chrome.$internal.store){var r=insights.chrome.$internal.store.getState();if(t&&r)return t.split("/").reduce((function(e,t){return 0===t.indexOf(":")?e.dynamic=D(D({},e.dynamic),{},l()({},"data-".concat(t.substr(1).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()),n[t.substr(1)])):e.staticPart=[].concat(s()(e.staticPart),s()(""!==t?[t]:[])),e}),{staticPart:[r.chrome.appId],dynamic:{}})}return{staticPart:[]}}},{key:"render",value:function(){var e=this.props,t=e.className,n=e.children,r=(e.params,e.path,o()(e,["className","children","params","path"])),c=this.calculateLocation(),i=c.dynamic,s=c.staticPart;return j().createElement(R.Z.Consumer,null,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light",c=_()(l()({},"pf-m-".concat(e),"dark"===e));return{dark:j().createElement("section",a()({},r,i,{"page-type":s.join("-"),className:"".concat(_()(t,"pf-l-page__main-section pf-c-page__main-section")," ").concat(c)}),j().Children.map(n,(function(e){return j().cloneElement(e,{className:"pf-m-dark"})}))),light:j().createElement("section",a()({},r,i,{"page-type":s.join("-"),className:"".concat(_()(t,"pf-l-page__main-section pf-c-page__main-section"))}),n)}[e]}))}}]),c}(P.Component);x.propTypes={className:E().string,children:E().any.isRequired,params:E().any,path:E().string};const S=(0,k.connect)((function(e){var t=e.routerData;return{params:t&&t.params,path:t&&t.path}}),(function(){return{}}))(x)},7839:(e,t,n)=>{n.d(t,{Z:()=>O});var r=n(7154),a=n.n(r),c=n(6479),o=n.n(c),i=n(2950),s=n.n(i),u=n(5697),l=n.n(u),p=n(485),f=n(7173),d=n(9947),h=n(8424),g=n(5106),m=n(9332),v=function(){return s().createElement(s().Fragment,null,"Contact your organization administrator(s) for more information or visit ",s().createElement("a",{href:"./settings/my-user-access"},"My User Access"),"  to learn more about your permissions.")},y=function(e){var t=e.prevPageButtonText,n=e.toLandingPageText,r=e.title,c=e.actions,i=e.serviceName,u=e.icon,l=e.description,m=e.showReturnButton,v=e.className,y=o()(e,["prevPageButtonText","toLandingPageText","title","actions","serviceName","icon","description","showReturnButton","className"]),O=r||"You do not have access to ".concat(i);return s().createElement(d.u,a()({variant:d.I.full,className:"ins-c-not-authorized ".concat(v||"")},y),s().createElement(h.k,{icon:u}),s().createElement(p.D,{headingLevel:"h5",size:"lg"},O),s().createElement(g.B,null,l),c,m&&(document.referrer?s().createElement(f.zx,{variant:"primary",onClick:function(){return history.back()}},t):s().createElement(f.zx,{variant:"primary",component:"a",href:"."},n)))};y.propTypes={serviceName:function(e,t,n){if(void 0===e.title){for(var r,a=arguments.length,c=new Array(a>3?a-3:0),o=3;o<a;o++)c[o-3]=arguments[o];return(r=l().node).isRequired.apply(r,[e,t,n].concat(c))}},icon:l().func,description:l().node,showReturnButton:l().bool,className:l().string,title:l().node,actions:l().oneOfType([l().node,l().arrayOf(l().node)]),prevPageButtonText:l().node,toLandingPageText:l().node},y.defaultProps={icon:m.ZP,showReturnButton:!0,description:s().createElement(v,null),actions:null,prevPageButtonText:"Return to previous page",toLandingPageText:"Go to landing page"};const O=y},8716:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(7154),a=n.n(r),c=n(9713),o=n.n(c),i=n(6479),s=n.n(i),u=n(2950),l=n.n(u),p=n(5697),f=n.n(p),d=n(4184),h=n.n(d),g=n(2466),m=function(e){var t=e.className,n=e.children,r=s()(e,["className","children"]),c=h()(t,"pf-l-page-header","pf-c-page-header","pf-l-page__main-section","pf-c-page__main-section");return l().createElement(g.Z.Consumer,null,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"light",t=h()(o()({},"pf-m-".concat(e,"-200"),"dark"===e),o()({},"pf-m-light","light"===e));return l().createElement("section",a()({},r,{className:"".concat(c," ").concat(t),"widget-type":"InsightsPageHeader"}),n)}))};const v=m;m.propTypes={children:f().any.isRequired,className:f().string}},9173:(e,t,n)=>{n.d(t,{Z:()=>p});var r=n(2950),a=n.n(r),c=n(5697),o=n.n(c),i=n(4184),s=n.n(i),u=n(485),l=function(e){var t=e.className,n=e.title,r=s()(t);return a().createElement(u.D,{headingLevel:"h1",size:"2xl",className:r,"widget-type":"InsightsPageHeaderTitle"}," ",n," ")};const p=l;l.propTypes={title:o().node.isRequired,className:o().string}},167:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(2950),a=n.n(r),c=n(9947),o=n(8424),i=n(5106),s=n(485),u=n(3047);const l=function(){return a().createElement(c.u,{variant:c.I.large,className:"ins-c-empty-state__unavailable pf-m-redhat-font"},a().createElement(o.k,{icon:u.ZP}),a().createElement(s.D,{headingLevel:"h5",size:"lg"},"This page is temporarily unavailable"),a().createElement(i.B,null,"Try refreshing the page. If the problem persists, contact your organization administrator or visit our",a().createElement("a",{href:"https://status.redhat.com/",target:"_blank",rel:"noopener noreferrer"}," status page")," for known outages."))}}}]);
//# sourceMappingURL=../sourcemaps/rhcsVendor.d0f87be879d2aa378530.js.map