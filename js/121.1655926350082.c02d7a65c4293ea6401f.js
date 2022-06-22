"use strict";(self.webpackChunksubscription_inventory=self.webpackChunksubscription_inventory||[]).push([[121],{2273:(e,t,n)=>{n.r(t);var r=n(2950),i=n.n(r),o=n(2181),a=n.n(o),c=n(334),l=n(5858),u=n(8738),s=n(8573),f=n.n(s);function m(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,u.JH)({},[f()].concat(t))}var d=n(5586),v=n(8767),h=n(5984),p=n(6808),E=n.n(p);const y={rhsmAPIBase:"https://api.access.qa.redhat.com"};var g=function(){return g=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},g.apply(this,arguments)};const w={ci:g({},y),qa:g({},y),stage:g(g({},y),{rhsmAPIBase:"https://api.access.stage.redhat.com"}),prod:g(g({},y),{rhsmAPIBase:"https://api.access.redhat.com"})};var b=function(){try{return window.insights.chrome.auth.getUser()}catch(e){throw new Error("Error authenticating user: ".concat(e.message))}},k=function(){try{return window.insights.chrome.getUserPermissions("subscriptions")}catch(e){throw new Error("Error getting user permissions: ".concat(e.message))}};const A=function(e){var t=e.children,n=(0,v.useQueryClient)(),o=(0,c.useLocation)(),a=(0,v.useQuery)("user",(function(){return Promise.all([b(),(r=E().get("cs_jwt"),i=(n=(null===(t=null===(e=null===window||void 0===window?void 0:window.insights)||void 0===e?void 0:e.chrome)||void 0===t?void 0:t.getEnvironment())||"ci",w[n]).rhsmAPIBase,fetch("".concat(i,"/management/v1/organization"),{headers:{Authorization:"Bearer ".concat(r)},mode:"cors"}).then((function(e){return e.json()}))),k()]).then((function(e){var t=e[0],n=e[1],r=e[2].map((function(e){return e.permission}));return{accountNumber:t.identity.account_number,canReadProducts:r.includes("subscriptions:products:read")||r.includes("subscriptions:*:*"),isOrgAdmin:!0===t.identity.user.is_org_admin,isSCACapable:!0===n.body.simpleContentAccessCapable}}));var e,t,n,r,i})),l=a.isLoading,u=a.isFetching,s=a.isSuccess,f=a.isError;return(0,r.useEffect)((function(){n.invalidateQueries("user")}),[o.pathname]),(0,r.useEffect)((function(){var e,t;s&&(null===(t=null===(e=window.insights)||void 0===e?void 0:e.chrome)||void 0===t||t.hideGlobalFilter())}),[s]),!0===f?i().createElement(h.Z,null):!0===l||!0===u?i().createElement(d.qb,null):!0===s?i().createElement(i().Fragment,null,t):void 0};var L=(0,r.lazy)((function(){return n.e(9671).then(n.bind(n,4990))})),N=(0,r.lazy)((function(){return n.e(2810).then(n.bind(n,2810))})),C=(0,r.lazy)((function(){return n.e(3136).then(n.bind(n,3136))})),R=(0,r.lazy)((function(){return n.e(8370).then(n.bind(n,8370))})),O=function(){return i().createElement("div",{className:"inventory"},i().createElement(r.Suspense,{fallback:i().createElement(d.qb,null)},i().createElement(A,null,i().createElement(c.Switch,null,i().createElement(c.Route,{exact:!0,path:"/",component:L}),i().createElement(c.Route,{path:"/oops",component:N}),i().createElement(c.Route,{path:"/no-permissions",component:C}),i().createElement(c.Route,{path:"/:SKU",component:R}),i().createElement(c.Route,null,i().createElement(c.Redirect,{to:"/oops"}))))))},P=n(9421),S=n(4586),I=function(){return I=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},I.apply(this,arguments)},B=function(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))},H=i().createContext({notifications:[],addNotification:function(e,t,n){return null},removeNotification:function(e){return null}}),T=function(e){var t=e.children,n=(0,r.useState)([]),o=n[0],a=n[1],c={notifications:o,addNotification:function(e,t,n){return function(e,t,n){var r=function(e,t,n){var r,o={variant:e,message:t,key:(0,S.Z)(),timeout:null===(r=null==n?void 0:n.hasTimeout)||void 0===r||r};if((null==n?void 0:n.alertLinkText)&&(null==n?void 0:n.alertLinkHref)){var a=(null==n?void 0:n.alertLinkIsDownload)?{download:""}:{},c=i().createElement(i().Fragment,null,i().createElement(P.AlertActionLink,null,i().createElement("a",I({href:n.alertLinkHref},a),n.alertLinkText)));o.actionLinks=c}return(null==n?void 0:n.alertLinkIsDownload)&&(null==n?void 0:n.alertLinkHref)&&(o.downloadHref=n.alertLinkHref),o}(e,t,n),c=B(B([],o,!0),[I({},r)],!1);return(null==n?void 0:n.keyOfAlertToReplace)&&(c=c.filter((function(e){return e.key!==n.keyOfAlertToReplace}))),a(c),r.key}(e,t,n)},removeNotification:function(e){return function(e){a(o.filter((function(t){return t.key!==e})))}(e)}};return i().createElement(H.Provider,{value:c},t)};const j=function(){var e=function(){var e=(0,r.useContext)(H),t=e.notifications,n=e.addNotification;return{notifications:t,addSuccessNotification:function(e,t){return n("success",e,t)},addErrorNotification:function(e,t){return n("danger",e,t)},addInfoNotification:function(e,t){return n("info",e,t)},removeNotification:e.removeNotification}}(),t=e.notifications,n=e.removeNotification;return i().createElement(P.AlertGroup,{isToast:!0},t.map((function(e,t){return i().createElement(P.Alert,{isLiveRegion:!0,timeout:e.timeout,title:e.message,variant:e.variant,key:e.key,actionLinks:e.actionLinks,actionClose:i().createElement(P.AlertActionCloseButton,{"data-testid":"notification-close-btn-".concat(t),title:e.message,variantLabel:"".concat(e.variant," alert"),onClose:function(){n(e.key),(null==e?void 0:e.downloadHref)&&window.URL.revokeObjectURL(e.downloadHref)}})})})))};var z=new v.QueryClient({defaultOptions:{queries:{retry:3,retryDelay:1e4,staleTime:1/0,refetchOnWindowFocus:!1,refetchOnMount:!1}}});const q=(0,c.withRouter)((0,l.$j)()((function(){var e=(0,c.useHistory)();return(0,r.useEffect)((function(){insights.chrome.init(),insights.chrome.identifyApp("subscriptionInventory");var t=insights.chrome.on("APP_NAVIGATION",(function(t){var n=t.domEvent.href.replace(/^\/insights\/subscriptions\/inventory\/?/,"/");e.push(n)}));return function(){t()}}),[]),i().createElement(v.QueryClientProvider,{client:z},i().createElement(T,null,i().createElement(j,null),i().createElement(O,null)))})));var _=n(5240);const x=function(e){var t=e.logger;return i().createElement(l.zt,{store:(t?m(t):m()).getStore()},i().createElement(c.BrowserRouter,{basename:"".concat((0,_.eb)(window.location.pathname,3))},i().createElement(q,null)))};var F=document.getElementById("root");a().render(i().createElement(x,null),F,(function(){return F.setAttribute("data-ouia-safe",!0)}))},5586:(e,t,n)=>{n.d(t,{qx:()=>c,qb:()=>l});var r=n(2950),i=n.n(r),o=n(9421),a=n(1070);const c=function(e){var t=e.clearFilters;return i().createElement(o.EmptyState,{variant:o.EmptyStateVariant.small},i().createElement(o.EmptyStateIcon,{icon:a.ZP}),i().createElement(o.Title,{headingLevel:"h2",size:"lg"},"No results found"),i().createElement(o.EmptyStateBody,null,"No results match the filter criteria. Remove all filters or clear all filters to show results."),i().createElement(o.Button,{variant:"link",onClick:t},"Clear all filters"))},l=function(){return i().createElement(o.Bullseye,null,i().createElement(o.Spinner,null))}}}]);
//# sourceMappingURL=../sourcemaps/121.68a043ce2f53a89071834158e5b65ab6.js.map