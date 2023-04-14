"use strict";(self.webpackChunksubscription_inventory=self.webpackChunksubscription_inventory||[]).push([[510],{8257:(e,t,n)=>{n.r(t);var r=n(2950),i=n.n(r),o=n(2181),a=n.n(o),l=n(2320),c=n(7785),u=n(3719),s=n(755),f=n.n(s);function m(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,u.JH)({},[f()].concat(t))}var d=n(228),v=n(8767),h=n(5984);const p={rhsmAPIBase:"https://api.access.qa.redhat.com"};var E=function(){return E=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},E.apply(this,arguments)};E({},p),E({},p),E(E({},p),{rhsmAPIBase:"https://api.access.stage.redhat.com"}),E(E({},p),{rhsmAPIBase:"https://api.access.redhat.com"});var y=function(){try{return window.insights.chrome.auth.getUser()}catch(e){throw new Error("Error authenticating user: ".concat(e.message))}},g=function(){try{return window.insights.chrome.getUserPermissions("subscriptions")}catch(e){throw new Error("Error getting user permissions: ".concat(e.message))}};const k=function(e){var t=e.children,n=(0,v.useQueryClient)(),o=(0,l.useLocation)(),a=(0,v.useQuery)("user",(function(){return Promise.all([y(),g()]).then((function(e){var t=e[0],n=e[1].map((function(e){return e.permission}));return{accountNumber:t.identity.account_number,canReadProducts:n.includes("subscriptions:products:read")||n.includes("subscriptions:*:*"),isOrgAdmin:!0===t.identity.user.is_org_admin}}))})),c=a.isLoading,u=a.isFetching,s=a.isSuccess,f=a.isError;return(0,r.useEffect)((function(){n.invalidateQueries("user")}),[o.pathname]),(0,r.useEffect)((function(){var e,t;s&&(null===(t=null===(e=window.insights)||void 0===e?void 0:e.chrome)||void 0===t||t.hideGlobalFilter())}),[s]),!0===f?i().createElement(h.Z,null):!0===c||!0===u?i().createElement(d.$,null):!0===s?i().createElement(i().Fragment,null,t):void 0};var w=(0,r.lazy)((function(){return Promise.all([n.e(766),n.e(953)]).then(n.bind(n,1074))})),b=(0,r.lazy)((function(){return n.e(810).then(n.bind(n,2810))})),A=(0,r.lazy)((function(){return n.e(136).then(n.bind(n,3136))})),L=(0,r.lazy)((function(){return Promise.all([n.e(360),n.e(766),n.e(716)]).then(n.bind(n,2086))})),N=function(){return i().createElement("div",{className:"inventory"},i().createElement(r.Suspense,{fallback:i().createElement(d.$,null)},i().createElement(k,null,i().createElement(l.Routes,null,i().createElement(l.Route,{path:"/",element:i().createElement(w,null)}),i().createElement(l.Route,{path:"/oops",element:i().createElement(b,null)}),i().createElement(l.Route,{path:"/no-permissions",element:i().createElement(A,null)}),i().createElement(l.Route,{path:"/:SKU",element:i().createElement(L,null)}),i().createElement(l.Route,{path:"*",element:i().createElement(l.Navigate,{to:"/oops",replace:!0})})))))},P=n(8001),O=n(8335),R=n(3217);const C=function(){var e=(0,R.Z)(),t=e.notifications,n=e.removeNotification;return i().createElement(O.AlertGroup,{isToast:!0},t.map((function(e,t){return i().createElement(O.Alert,{isLiveRegion:!0,timeout:e.timeout,title:e.message,variant:e.variant,key:e.key,actionLinks:e.actionLinks,actionClose:i().createElement(O.AlertActionCloseButton,{"data-testid":"notification-close-btn-".concat(t),title:e.message,variantLabel:"".concat(e.variant," alert"),onClose:function(){n(e.key),(null==e?void 0:e.downloadHref)&&window.URL.revokeObjectURL(e.downloadHref)}})})})))};var I=new v.QueryClient({defaultOptions:{queries:{retry:3,retryDelay:1e4,staleTime:1/0,refetchOnWindowFocus:!1,refetchOnMount:!1}}});const S=(0,c.$j)()((function(){var e=(0,l.useNavigate)();return(0,r.useEffect)((function(){insights.chrome.init(),insights.chrome.identifyApp("subscriptionInventory");var t=insights.chrome.on("APP_NAVIGATION",(function(t){var n=t.domEvent.href.replace(/^\/insights\/subscriptions\/inventory\/?/,"/");e(n)}));return function(){t()}}),[]),i().createElement(v.QueryClientProvider,{client:I},i().createElement(P.Z,null,i().createElement(C,null),i().createElement(N,null)))}));var B=n(5240);const T=function(e){var t=e.logger;return i().createElement(c.zt,{store:(t?m(t):m()).getStore()},i().createElement(l.BrowserRouter,{basename:"".concat((0,B.eb)(window.location.pathname,3))},i().createElement(S,null)))};var H=document.getElementById("root");a().render(i().createElement(T,null),H,(function(){return H.setAttribute("data-ouia-safe",!0)}))},228:(e,t,n)=>{n.d(t,{q:()=>l,$:()=>c});var r=n(2950),i=n.n(r),o=n(8335),a=n(1070);const l=function(e){var t=e.clearFilters;return i().createElement(o.EmptyState,{variant:o.EmptyStateVariant.small},i().createElement(o.EmptyStateIcon,{icon:a.ZP}),i().createElement(o.Title,{headingLevel:"h2",size:"lg"},"No results found"),i().createElement(o.EmptyStateBody,null,"No results match the filter criteria. Remove all filters or clear all filters to show results."),i().createElement(o.Button,{variant:"link",onClick:t},"Clear all filters"))},c=function(){return i().createElement(o.Bullseye,null,i().createElement(o.Spinner,null))}},8001:(e,t,n)=>{n.d(t,{Z:()=>s,u:()=>u});var r=n(2950),i=n.n(r),o=n(8335),a=n(2045),l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},l.apply(this,arguments)},c=function(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))},u=i().createContext({notifications:[],addNotification:function(e,t,n){return null},removeNotification:function(e){return null}}),s=function(e){var t=e.children,n=(0,r.useState)([]),s=n[0],f=n[1],m={notifications:s,addNotification:function(e,t,n){return function(e,t,n){var r=function(e,t,n){var r,c={variant:e,message:t,key:(0,a.Z)(),timeout:null===(r=null==n?void 0:n.hasTimeout)||void 0===r||r};if((null==n?void 0:n.alertLinkText)&&(null==n?void 0:n.alertLinkHref)){var u=(null==n?void 0:n.alertLinkIsDownload)?{download:""}:{},s=i().createElement(i().Fragment,null,i().createElement(o.AlertActionLink,null,i().createElement("a",l({href:n.alertLinkHref},u),n.alertLinkText)));c.actionLinks=s}return(null==n?void 0:n.alertLinkIsDownload)&&(null==n?void 0:n.alertLinkHref)&&(c.downloadHref=n.alertLinkHref),c}(e,t,n),u=c(c([],s,!0),[l({},r)],!1);return(null==n?void 0:n.keyOfAlertToReplace)&&(u=u.filter((function(e){return e.key!==n.keyOfAlertToReplace}))),f(u),r.key}(e,t,n)},removeNotification:function(e){return function(e){f(s.filter((function(t){return t.key!==e})))}(e)}};return i().createElement(u.Provider,{value:m},t)}},3217:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(2950),i=n(8001);const o=function(){var e=(0,r.useContext)(i.u),t=e.notifications,n=e.addNotification;return{notifications:t,addSuccessNotification:function(e,t){return n("success",e,t)},addErrorNotification:function(e,t){return n("danger",e,t)},addInfoNotification:function(e,t){return n("info",e,t)},removeNotification:e.removeNotification}}}}]);