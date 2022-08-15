"use strict";(self.webpackChunksubscription_inventory=self.webpackChunksubscription_inventory||[]).push([[5167],{8187:(e,t,n)=>{n.d(t,{Z:()=>m});var r=n(2950),i=n.n(r),o=n(334),a=n(6706),c=n(1888),l=n(8767),u=n(4517),s=n(6165),f=n(8261),d=new l.QueryClient({defaultOptions:{queries:{retry:3,retryDelay:1e4,staleTime:1/0,refetchOnWindowFocus:!1,refetchOnMount:!1}}});const m=(0,o.withRouter)((0,a.$j)()((function(){var e=(0,o.useHistory)();return(0,r.useEffect)((function(){insights.chrome.init(),insights.chrome.identifyApp("subscriptionInventory");var t=insights.chrome.on("APP_NAVIGATION",(function(t){var n=(0,f.n)(t.domEvent.href);e.push(n)}));return function(){t()}}),[]),i().createElement(l.QueryClientProvider,{client:d},i().createElement(u.Z,null,i().createElement(s.Z,null),i().createElement(c.Z,null)))})))},8412:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(2950),i=n.n(r),o=n(334),a=n(6706),c=n(319),l=n(8187),u=n(5240);const s=function(e){var t=e.logger;return i().createElement(a.zt,{store:(t?(0,c.S1)(t):(0,c.S1)()).getStore()},i().createElement(o.BrowserRouter,{basename:"".concat((0,u.eb)(window.location.pathname,3))},i().createElement(l.Z,null)))}},6165:(e,t,n)=>{n.d(t,{Z:()=>r.Z});var r=n(6012)},5586:(e,t,n)=>{n.d(t,{qx:()=>c,qb:()=>l});var r=n(2950),i=n.n(r),o=n(8071),a=n(1070);const c=function(e){var t=e.clearFilters;return i().createElement(o.EmptyState,{variant:o.EmptyStateVariant.small},i().createElement(o.EmptyStateIcon,{icon:a.ZP}),i().createElement(o.Title,{headingLevel:"h2",size:"lg"},"No results found"),i().createElement(o.EmptyStateBody,null,"No results match the filter criteria. Remove all filters or clear all filters to show results."),i().createElement(o.Button,{variant:"link",onClick:t},"Clear all filters"))},l=function(){return i().createElement(o.Bullseye,null,i().createElement(o.Spinner,null))}},319:(e,t,n)=>{n.d(t,{S1:()=>a});var r=n(3719),i=n(8573),o=n.n(i);function a(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.JH)({},[o()].concat(t))}},1888:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(334),i=n(2950),o=n.n(i),a=n(5586),c=n(2872),l=(0,i.lazy)((function(){return Promise.all([n.e(3193),n.e(9671)]).then(n.bind(n,4990))})),u=(0,i.lazy)((function(){return n.e(2810).then(n.bind(n,2810))})),s=(0,i.lazy)((function(){return n.e(3136).then(n.bind(n,3136))})),f=(0,i.lazy)((function(){return Promise.all([n.e(6130),n.e(3193),n.e(3028)]).then(n.bind(n,7345))})),d=function(){return o().createElement("div",{className:"inventory"},o().createElement(i.Suspense,{fallback:o().createElement(a.qb,null)},o().createElement(c.Z,null,o().createElement(r.Switch,null,o().createElement(r.Route,{exact:!0,path:"/",component:l}),o().createElement(r.Route,{path:"/oops",component:u}),o().createElement(r.Route,{path:"/no-permissions",component:s}),o().createElement(r.Route,{path:"/:SKU",component:f}),o().createElement(r.Route,null,o().createElement(r.Redirect,{to:"/oops"}))))))}},4817:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(2950),i=n.n(r),o=n(8767),a=n(334),c=n(5586),l=n(5984),u=n(4254);const s=function(e){var t=e.children,n=(0,o.useQueryClient)(),s=(0,a.useLocation)(),f=(0,u.Z)(),d=f.isLoading,m=f.isFetching,v=f.isSuccess,h=f.isError;return(0,r.useEffect)((function(){n.invalidateQueries("user")}),[s.pathname]),(0,r.useEffect)((function(){var e,t;v&&(null===(t=null===(e=window.insights)||void 0===e?void 0:e.chrome)||void 0===t||t.hideGlobalFilter())}),[v]),!0===h?i().createElement(l.Z,null):!0===d||!0===m?i().createElement(c.qb,null):!0===v?i().createElement(i().Fragment,null,t):void 0}},2872:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(4817).Z},6012:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(2950),i=n.n(r),o=n(8071),a=n(5841);const c=function(){var e=(0,a.Z)(),t=e.notifications,n=e.removeNotification;return i().createElement(o.AlertGroup,{isToast:!0},t.map((function(e,t){return i().createElement(o.Alert,{isLiveRegion:!0,timeout:e.timeout,title:e.message,variant:e.variant,key:e.key,actionLinks:e.actionLinks,actionClose:i().createElement(o.AlertActionCloseButton,{"data-testid":"notification-close-btn-".concat(t),title:e.message,variantLabel:"".concat(e.variant," alert"),onClose:function(){n(e.key),(null==e?void 0:e.downloadHref)&&window.URL.revokeObjectURL(e.downloadHref)}})})})))}},4517:(e,t,n)=>{n.d(t,{Z:()=>s,u:()=>u});var r=n(2950),i=n.n(r),o=n(8071),a=n(2045),c=function(){return c=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},c.apply(this,arguments)},l=function(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))},u=i().createContext({notifications:[],addNotification:function(e,t,n){return null},removeNotification:function(e){return null}}),s=function(e){var t=e.children,n=(0,r.useState)([]),s=n[0],f=n[1],d={notifications:s,addNotification:function(e,t,n){return function(e,t,n){var r=function(e,t,n){var r,l={variant:e,message:t,key:(0,a.Z)(),timeout:null===(r=null==n?void 0:n.hasTimeout)||void 0===r||r};if((null==n?void 0:n.alertLinkText)&&(null==n?void 0:n.alertLinkHref)){var u=(null==n?void 0:n.alertLinkIsDownload)?{download:""}:{},s=i().createElement(i().Fragment,null,i().createElement(o.AlertActionLink,null,i().createElement("a",c({href:n.alertLinkHref},u),n.alertLinkText)));l.actionLinks=s}return(null==n?void 0:n.alertLinkIsDownload)&&(null==n?void 0:n.alertLinkHref)&&(l.downloadHref=n.alertLinkHref),l}(e,t,n),u=l(l([],s,!0),[c({},r)],!1);return(null==n?void 0:n.keyOfAlertToReplace)&&(u=u.filter((function(e){return e.key!==n.keyOfAlertToReplace}))),f(u),r.key}(e,t,n)},removeNotification:function(e){return function(e){f(s.filter((function(t){return t.key!==e})))}(e)}};return i().createElement(u.Provider,{value:d},t)}},5841:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(2950),i=n(4517);const o=function(){var e=(0,r.useContext)(i.u),t=e.notifications,n=e.addNotification;return{notifications:t,addSuccessNotification:function(e,t){return n("success",e,t)},addErrorNotification:function(e,t){return n("danger",e,t)},addInfoNotification:function(e,t){return n("info",e,t)},removeNotification:e.removeNotification}}},4254:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(8767),i=n(6080),o=function(){return(0,r.useQuery)("user",(function(){return Promise.all([(0,i.So)(),(0,i.gM)()]).then((function(e){var t=e[0],n=e[1].map((function(e){return e.permission}));return{accountNumber:t.identity.account_number,canReadProducts:n.includes("subscriptions:products:read")||n.includes("subscriptions:*:*"),isOrgAdmin:!0===t.identity.user.is_org_admin}}))}))}},1906:(e,t,n)=>{n.d(t,{Z:()=>r});const r={rhsmAPIBase:"https://api.access.qa.redhat.com"}},4845:(e,t,n)=>{n.d(t,{Z:()=>r});const r={rhsmAPIBase:"https://api.access.redhat.com"}},8582:(e,t,n)=>{n.d(t,{Z:()=>r});const r={rhsmAPIBase:"https://api.access.stage.redhat.com"}},6540:(e,t,n)=>{var r=n(1906),i=n(8582),o=n(4845),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},a.apply(this,arguments)};a({},r.Z),a({},r.Z),a(a({},r.Z),i.Z),a(a({},r.Z),o.Z)},6080:(e,t,n)=>{n.d(t,{So:()=>r,gM:()=>i}),n(6540);var r=function(){try{return window.insights.chrome.auth.getUser()}catch(e){throw new Error("Error authenticating user: ".concat(e.message))}},i=function(){try{return window.insights.chrome.getUserPermissions("subscriptions")}catch(e){throw new Error("Error getting user permissions: ".concat(e.message))}}},8261:(e,t,n)=>{n.d(t,{n:()=>r});var r=function(e){return e.replace(/^\/insights\/subscriptions\/inventory\/?/,"/")}}}]);
//# sourceMappingURL=../sourcemaps/5167.df213298b5f13b18ef9de2198f4d13b8.js.map