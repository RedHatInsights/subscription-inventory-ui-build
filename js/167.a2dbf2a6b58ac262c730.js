"use strict";(self.webpackChunksubscription_inventory=self.webpackChunksubscription_inventory||[]).push([[167],{8187:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(2950),i=n.n(r),o=n(7785),a=n(2050),l=n(8767),c=n(8001),u=n(6165),s=n(2320),f=n(664),m=new l.QueryClient({defaultOptions:{queries:{retry:3,retryDelay:1e4,staleTime:1/0,refetchOnWindowFocus:!1,refetchOnMount:!1}}});const d=(0,o.$j)()((function(){var e=(0,s.useNavigate)();return(0,r.useEffect)((function(){insights.chrome.init(),insights.chrome.identifyApp("subscriptionInventory");var t=insights.chrome.on("APP_NAVIGATION",(function(t){var n=(0,f.n)(t.domEvent.href);e(n)}));return function(){t()}}),[]),i().createElement(l.QueryClientProvider,{client:m},i().createElement(c.Z,null,i().createElement(u.Z,null),i().createElement(a.G,null)))}))},8412:(e,t,n)=>{n.r(t),n.d(t,{default:()=>s});var r=n(2950),i=n.n(r),o=n(2320),a=n(7785),l=n(319),c=n(8187),u=n(5240);const s=function(e){var t=e.logger;return i().createElement(a.zt,{store:(t?(0,l.S1)(t):(0,l.S1)()).getStore()},i().createElement(o.BrowserRouter,{basename:"".concat((0,u.eb)(window.location.pathname,3))},i().createElement(c.Z,null)))}},6165:(e,t,n)=>{n.d(t,{Z:()=>r.Z});var r=n(1989)},228:(e,t,n)=>{n.d(t,{q:()=>l,$:()=>c});var r=n(2950),i=n.n(r),o=n(3666),a=n(1070);const l=function(e){var t=e.clearFilters;return i().createElement(o.EmptyState,{variant:o.EmptyStateVariant.small},i().createElement(o.EmptyStateIcon,{icon:a.ZP}),i().createElement(o.Title,{headingLevel:"h2",size:"lg"},"No results found"),i().createElement(o.EmptyStateBody,null,"No results match the filter criteria. Remove all filters or clear all filters to show results."),i().createElement(o.Button,{variant:"link",onClick:t},"Clear all filters"))},c=function(){return i().createElement(o.Bullseye,null,i().createElement(o.Spinner,null))}},319:(e,t,n)=>{n.d(t,{S1:()=>a});var r=n(5586),i=n(7283),o=n.n(i);function a(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return(0,r.JH)({},[o()].concat(t))}},2050:(e,t,n)=>{n.d(t,{G:()=>m});var r=n(2320),i=n(2950),o=n.n(i),a=n(228),l=n(299),c=(0,i.lazy)((function(){return Promise.all([n.e(642),n.e(953)]).then(n.bind(n,1074))})),u=(0,i.lazy)((function(){return n.e(810).then(n.bind(n,2810))})),s=(0,i.lazy)((function(){return n.e(136).then(n.bind(n,3136))})),f=(0,i.lazy)((function(){return Promise.all([n.e(360),n.e(642),n.e(716)]).then(n.bind(n,2086))})),m=function(){return o().createElement("div",{className:"inventory"},o().createElement(i.Suspense,{fallback:o().createElement(a.$,null)},o().createElement(l.Z,null,o().createElement(r.Routes,null,o().createElement(r.Route,{path:"/",element:o().createElement(c,null)}),o().createElement(r.Route,{path:"/oops",element:o().createElement(u,null)}),o().createElement(r.Route,{path:"/no-permissions",element:o().createElement(s,null)}),o().createElement(r.Route,{path:"/:SKU",element:o().createElement(f,null)}),o().createElement(r.Route,{path:"*",element:o().createElement(r.Navigate,{to:"/oops",replace:!0})})))))}},4929:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(2950),i=n.n(r),o=n(8767),a=n(2320),l=n(228),c=n(5984),u=n(8463);const s=function(e){var t=e.children,n=(0,o.useQueryClient)(),s=(0,a.useLocation)(),f=(0,u.Z)(),m=f.isLoading,d=f.isFetching,v=f.isSuccess,h=f.isError;return(0,r.useEffect)((function(){n.invalidateQueries("user")}),[s.pathname]),(0,r.useEffect)((function(){var e,t;v&&(null===(t=null===(e=window.insights)||void 0===e?void 0:e.chrome)||void 0===t||t.hideGlobalFilter())}),[v]),!0===h?i().createElement(c.Z,null):!0===m||!0===d?i().createElement(l.$,null):!0===v?i().createElement(i().Fragment,null,t):void 0}},299:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n(4929).Z},1989:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(2950),i=n.n(r),o=n(3666),a=n(3217);const l=function(){var e=(0,a.Z)(),t=e.notifications,n=e.removeNotification;return i().createElement(o.AlertGroup,{isToast:!0},t.map((function(e,t){return i().createElement(o.Alert,{isLiveRegion:!0,timeout:e.timeout,title:e.message,variant:e.variant,key:e.key,actionLinks:e.actionLinks,actionClose:i().createElement(o.AlertActionCloseButton,{"data-testid":"notification-close-btn-".concat(t),title:e.message,variantLabel:"".concat(e.variant," alert"),onClose:function(){n(e.key),(null==e?void 0:e.downloadHref)&&window.URL.revokeObjectURL(e.downloadHref)}})})})))}},8001:(e,t,n)=>{n.d(t,{Z:()=>s,u:()=>u});var r=n(2950),i=n.n(r),o=n(3666),a=n(8721),l=function(){return l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},l.apply(this,arguments)},c=function(e,t,n){if(n||2===arguments.length)for(var r,i=0,o=t.length;i<o;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))},u=i().createContext({notifications:[],addNotification:function(e,t,n){return null},removeNotification:function(e){return null}}),s=function(e){var t=e.children,n=(0,r.useState)([]),s=n[0],f=n[1],m={notifications:s,addNotification:function(e,t,n){return function(e,t,n){var r=function(e,t,n){var r,c={variant:e,message:t,key:(0,a.Z)(),timeout:null===(r=null==n?void 0:n.hasTimeout)||void 0===r||r};if((null==n?void 0:n.alertLinkText)&&(null==n?void 0:n.alertLinkHref)){var u=(null==n?void 0:n.alertLinkIsDownload)?{download:""}:{},s=i().createElement(i().Fragment,null,i().createElement(o.AlertActionLink,null,i().createElement("a",l({href:n.alertLinkHref},u),n.alertLinkText)));c.actionLinks=s}return(null==n?void 0:n.alertLinkIsDownload)&&(null==n?void 0:n.alertLinkHref)&&(c.downloadHref=n.alertLinkHref),c}(e,t,n),u=c(c([],s,!0),[l({},r)],!1);return(null==n?void 0:n.keyOfAlertToReplace)&&(u=u.filter((function(e){return e.key!==n.keyOfAlertToReplace}))),f(u),r.key}(e,t,n)},removeNotification:function(e){return function(e){f(s.filter((function(t){return t.key!==e})))}(e)}};return i().createElement(u.Provider,{value:m},t)}},3217:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(2950),i=n(8001);const o=function(){var e=(0,r.useContext)(i.u),t=e.notifications,n=e.addNotification;return{notifications:t,addSuccessNotification:function(e,t){return n("success",e,t)},addErrorNotification:function(e,t){return n("danger",e,t)},addInfoNotification:function(e,t){return n("info",e,t)},removeNotification:e.removeNotification}}},8463:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(8767),i=n(5524),o=function(){return(0,r.useQuery)("user",(function(){return Promise.all([(0,i.So)(),(0,i.gM)()]).then((function(e){var t=e[0],n=e[1].map((function(e){return e.permission}));return{accountNumber:t.identity.account_number,canReadProducts:n.includes("subscriptions:products:read")||n.includes("subscriptions:*:*"),isOrgAdmin:!0===t.identity.user.is_org_admin}}))}))}},6914:(e,t,n)=>{n.d(t,{Z:()=>r});const r={rhsmAPIBase:"https://api.access.qa.redhat.com"}},9689:(e,t,n)=>{n.d(t,{Z:()=>r});const r={rhsmAPIBase:"https://api.access.redhat.com"}},1832:(e,t,n)=>{n.d(t,{Z:()=>r});const r={rhsmAPIBase:"https://api.access.stage.redhat.com"}},7101:(e,t,n)=>{var r=n(6914),i=n(1832),o=n(9689),a=function(){return a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},a.apply(this,arguments)};a({},r.Z),a({},r.Z),a(a({},r.Z),i.Z),a(a({},r.Z),o.Z)},5524:(e,t,n)=>{n.d(t,{So:()=>r,gM:()=>i}),n(7101);var r=function(){try{return window.insights.chrome.auth.getUser()}catch(e){throw new Error("Error authenticating user: ".concat(e.message))}},i=function(){try{return window.insights.chrome.getUserPermissions("subscriptions")}catch(e){throw new Error("Error getting user permissions: ".concat(e.message))}}},664:(e,t,n)=>{n.d(t,{n:()=>r});var r=function(e){return e.replace(/^\/insights\/subscriptions\/inventory\/?/,"/")}}}]);