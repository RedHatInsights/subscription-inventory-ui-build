"use strict";(self.webpackChunksubscription_inventory=self.webpackChunksubscription_inventory||[]).push([[121],{2273:(e,t,n)=>{n.r(t);var r=n(2950),i=n.n(r),o=n(2181),a=n.n(o),c=n(334),l=n(6706),s=n(3719),u=n(8573),f=n.n(u);function m(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,s.JH)({},[f()].concat(t))}var d=n(5586),v=n(8767),h=n(5984),p=n(6258);const E={rhsmAPIBase:"https://api.access.qa.redhat.com"};var y=function(){return y=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},y.apply(this,arguments)};const g={ci:y({},E),qa:y({},E),stage:y(y({},E),{rhsmAPIBase:"https://api.access.stage.redhat.com"}),prod:y(y({},E),{rhsmAPIBase:"https://api.access.redhat.com"})};var w=function(){try{return window.insights.chrome.auth.getUser()}catch(e){throw new Error("Error authenticating user: ".concat(e.message))}},b=function(){try{return window.insights.chrome.getUserPermissions("subscriptions")}catch(e){throw new Error("Error getting user permissions: ".concat(e.message))}};const k=function(e){var t=e.children,n=(0,v.useQueryClient)(),o=(0,c.useLocation)(),a=(0,v.useQuery)("user",(function(){return Promise.all([w(),(r=p.Z.get("cs_jwt"),i=(n=(null===(t=null===(e=null===window||void 0===window?void 0:window.insights)||void 0===e?void 0:e.chrome)||void 0===t?void 0:t.getEnvironment())||"ci",g[n]).rhsmAPIBase,fetch("".concat(i,"/management/v1/organization"),{headers:{Authorization:"Bearer ".concat(r)},mode:"cors"}).then((function(e){return e.json()}))),b()]).then((function(e){var t=e[0],n=e[1],r=e[2].map((function(e){return e.permission}));return{accountNumber:t.identity.account_number,canReadProducts:r.includes("subscriptions:products:read")||r.includes("subscriptions:*:*"),isOrgAdmin:!0===t.identity.user.is_org_admin,isSCACapable:!0===n.body.simpleContentAccessCapable}}));var e,t,n,r,i})),l=a.isLoading,s=a.isFetching,u=a.isSuccess,f=a.isError;return(0,r.useEffect)((function(){n.invalidateQueries("user")}),[o.pathname]),(0,r.useEffect)((function(){var e,t;u&&(null===(t=null===(e=window.insights)||void 0===e?void 0:e.chrome)||void 0===t||t.hideGlobalFilter())}),[u]),!0===f?i().createElement(h.Z,null):!0===l||!0===s?i().createElement(d.qb,null):!0===u?i().createElement(i().Fragment,null,t):void 0};var A=(0,r.lazy)((function(){return Promise.all([n.e(3193),n.e(9671)]).then(n.bind(n,4990))})),L=(0,r.lazy)((function(){return n.e(2810).then(n.bind(n,2810))})),N=(0,r.lazy)((function(){return n.e(3136).then(n.bind(n,3136))})),C=(0,r.lazy)((function(){return Promise.all([n.e(6130),n.e(3193),n.e(3028)]).then(n.bind(n,7345))})),P=function(){return i().createElement("div",{className:"inventory"},i().createElement(r.Suspense,{fallback:i().createElement(d.qb,null)},i().createElement(k,null,i().createElement(c.Switch,null,i().createElement(c.Route,{exact:!0,path:"/",component:A}),i().createElement(c.Route,{path:"/oops",component:L}),i().createElement(c.Route,{path:"/no-permissions",component:N}),i().createElement(c.Route,{path:"/:SKU",component:C}),i().createElement(c.Route,null,i().createElement(c.Redirect,{to:"/oops"}))))))},R=n(8071),O=n(2045),S=function(){return S=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},S.apply(this,arguments)},I=function(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))},B=i().createContext({notifications:[],addNotification:function(e,t,n){return null},removeNotification:function(e){return null}}),H=function(e){var t=e.children,n=(0,r.useState)([]),o=n[0],a=n[1],c={notifications:o,addNotification:function(e,t,n){return function(e,t,n){var r=function(e,t,n){var r,o={variant:e,message:t,key:(0,O.Z)(),timeout:null===(r=null==n?void 0:n.hasTimeout)||void 0===r||r};if((null==n?void 0:n.alertLinkText)&&(null==n?void 0:n.alertLinkHref)){var a=(null==n?void 0:n.alertLinkIsDownload)?{download:""}:{},c=i().createElement(i().Fragment,null,i().createElement(R.AlertActionLink,null,i().createElement("a",S({href:n.alertLinkHref},a),n.alertLinkText)));o.actionLinks=c}return(null==n?void 0:n.alertLinkIsDownload)&&(null==n?void 0:n.alertLinkHref)&&(o.downloadHref=n.alertLinkHref),o}(e,t,n),c=I(I([],o,!0),[S({},r)],!1);return(null==n?void 0:n.keyOfAlertToReplace)&&(c=c.filter((function(e){return e.key!==n.keyOfAlertToReplace}))),a(c),r.key}(e,t,n)},removeNotification:function(e){return function(e){a(o.filter((function(t){return t.key!==e})))}(e)}};return i().createElement(B.Provider,{value:c},t)};const T=function(){var e=function(){var e=(0,r.useContext)(B),t=e.notifications,n=e.addNotification;return{notifications:t,addSuccessNotification:function(e,t){return n("success",e,t)},addErrorNotification:function(e,t){return n("danger",e,t)},addInfoNotification:function(e,t){return n("info",e,t)},removeNotification:e.removeNotification}}(),t=e.notifications,n=e.removeNotification;return i().createElement(R.AlertGroup,{isToast:!0},t.map((function(e,t){return i().createElement(R.Alert,{isLiveRegion:!0,timeout:e.timeout,title:e.message,variant:e.variant,key:e.key,actionLinks:e.actionLinks,actionClose:i().createElement(R.AlertActionCloseButton,{"data-testid":"notification-close-btn-".concat(t),title:e.message,variantLabel:"".concat(e.variant," alert"),onClose:function(){n(e.key),(null==e?void 0:e.downloadHref)&&window.URL.revokeObjectURL(e.downloadHref)}})})})))};var j=new v.QueryClient({defaultOptions:{queries:{retry:3,retryDelay:1e4,staleTime:1/0,refetchOnWindowFocus:!1,refetchOnMount:!1}}});const z=(0,c.withRouter)((0,l.$j)()((function(){var e=(0,c.useHistory)();return(0,r.useEffect)((function(){insights.chrome.init(),insights.chrome.identifyApp("subscriptionInventory");var t=insights.chrome.on("APP_NAVIGATION",(function(t){var n=t.domEvent.href.replace(/^\/insights\/subscriptions\/inventory\/?/,"/");e.push(n)}));return function(){t()}}),[]),i().createElement(v.QueryClientProvider,{client:j},i().createElement(H,null,i().createElement(T,null),i().createElement(P,null)))})));var q=n(5240);const _=function(e){var t=e.logger;return i().createElement(l.zt,{store:(t?m(t):m()).getStore()},i().createElement(c.BrowserRouter,{basename:"".concat((0,q.eb)(window.location.pathname,3))},i().createElement(z,null)))};var x=document.getElementById("root");a().render(i().createElement(_,null),x,(function(){return x.setAttribute("data-ouia-safe",!0)}))},5586:(e,t,n)=>{n.d(t,{qx:()=>c,qb:()=>l});var r=n(2950),i=n.n(r),o=n(8071),a=n(1070);const c=function(e){var t=e.clearFilters;return i().createElement(o.EmptyState,{variant:o.EmptyStateVariant.small},i().createElement(o.EmptyStateIcon,{icon:a.ZP}),i().createElement(o.Title,{headingLevel:"h2",size:"lg"},"No results found"),i().createElement(o.EmptyStateBody,null,"No results match the filter criteria. Remove all filters or clear all filters to show results."),i().createElement(o.Button,{variant:"link",onClick:t},"Clear all filters"))},l=function(){return i().createElement(o.Bullseye,null,i().createElement(o.Spinner,null))}}}]);
//# sourceMappingURL=../sourcemaps/121.a7aafd808fe94de0ecd005cc1d0c90f6.js.map