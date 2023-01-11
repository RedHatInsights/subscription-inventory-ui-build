"use strict";(self.webpackChunksubscription_inventory=self.webpackChunksubscription_inventory||[]).push([[9716],{2086:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var r=n(8071),a=n(4748),c=n(123),u=n(9173),o=n(2950),l=n.n(o),i=n(334),s=n(228),m=n(8767),f=n(237),p=function(e,t,n,r){return new(n||(n=Promise))((function(a,c){function u(e){try{l(r.next(e))}catch(e){c(e)}}function o(e){try{l(r.throw(e))}catch(e){c(e)}}function l(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,o)}l((r=r.apply(e,t||[])).next())}))},b=function(e,t){var n,r,a,c,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return c={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(c[Symbol.iterator]=function(){return this}),c;function o(c){return function(o){return function(c){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(a=2&c[0]?r.return:c[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,c[1])).done)return a;switch(r=0,a&&(c=[2&c[0],a.value]),c[0]){case 0:case 1:a=c;break;case 4:return u.label++,{value:c[1],done:!1};case 5:u.label++,r=c[1],c=[0];continue;case 7:c=u.ops.pop(),u.trys.pop();continue;default:if(!((a=(a=u.trys).length>0&&a[a.length-1])||6!==c[0]&&2!==c[0])){u=0;continue}if(3===c[0]&&(!a||c[1]>a[0]&&c[1]<a[3])){u.label=c[1];break}if(6===c[0]&&u.label<a[1]){u.label=a[1],a=c;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(c);break}a[2]&&u.ops.pop(),u.trys.pop();continue}c=t.call(e,u)}catch(e){c=[6,e],r=0}finally{n=a=0}if(5&c[0])throw c[1];return{value:c[0]?c[1]:void 0,done:!0}}([c,o])}}},d=n(5984),y=n(5913);const E=function(){var e=(0,i.useHistory)();return l().createElement(r.EmptyState,{variant:r.EmptyStateVariant.large},l().createElement(r.EmptyStateIcon,{icon:y.R0,color:"grey"}),l().createElement(r.Title,{headingLevel:"h5",size:"lg"},"Your organization currently has no subscriptions for this product"),l().createElement(r.EmptyStateBody,null,"Return to your subscription inventory to view the products to which your organization is subscribed."),l().createElement(r.Button,{variant:"primary",onClick:function(){e.push("/")}},"Return to Subscription Inventory"))};var h=n(3193),v=n(6486),g=function(e){var t=e.getUTCMonth()+1,n=e.getUTCDate();return"".concat(e.getUTCFullYear(),"-").concat(t<10?"0".concat(t):t,"-").concat(n<10?"0".concat(n):n)},w=function(e){return""==e?-1:(0,v.parseInt)(e)},S=function(e){return""==e?new Date(0):new Date(e)};const T=function(e){var t,n=e.subscriptions,a=n.map((function(e){return{number:w(e.number),contractNumber:w(e.contractNumber),startDate:S(e.startDate),endDate:S(e.endDate),quantity:w(e.quantity)}})),c=l().useState(1),u=c[0],o=c[1],i=l().useState(10),m=i[0],f=i[1],p=l().useState(0),b=p[0],d=p[1],y=l().useState("asc"),E=y[0],v=y[1],T=l().useState(""),N=T[0],C=T[1],D="Subscription number",I="Contract number",L="Subscription quantity",P="Start date",k="End date",F=function(e){return{sortBy:{index:b,direction:E,defaultDirection:"asc"},onSort:function(e,t,n){d(t),v(n)},columnIndex:e}},x=function(e,t){var n=["number","contractNumber","quantity","startDate","endDate"];return e.sort((function(e,r){var a=0,c=e[n[t]],u=r[n[t]];return c<u?a=-1:c>u&&(a=1),"asc"==E?a:-1*a}))}(a,b),A=function(e,t){return t=t.trim(),e.filter((function(e){var n=-1!=e.number?e.number.toString():"Not Available",r=-1!=e.contractNumber?e.contractNumber.toString():"Not Available";return n.includes(t)||r.includes(t)}))}(x,N),q=function(e){var t=(u-1)*m,n=t+m;return e.slice(t,n)}(A);return l().createElement(l().Fragment,null,l().createElement(r.Flex,{direction:{default:"column",md:"row"},justifyContent:{default:"justifyContentSpaceBetween"}},l().createElement(r.FlexItem,null,a.length>0&&l().createElement(r.SearchInput,{placeholder:"Filter by subscription or contract number",value:N,onChange:function(e){return C(e)},onClear:function(){return C("")}})),l().createElement(r.FlexItem,{align:{default:"alignRight"}},(void 0===t&&(t=r.PaginationVariant.top),l().createElement(r.Pagination,{itemCount:n.length,perPage:m,page:u,onSetPage:function(e,t){o(t)},onPerPageSelect:function(e,t){f(t),o(1)},variant:t})))),l().createElement(h.TableComposable,{"aria-label":"subscriptions",variant:"compact"},l().createElement(h.Thead,null,l().createElement(h.Tr,null,l().createElement(h.Th,{sort:F(0),width:25},D),l().createElement(h.Th,{sort:F(1),width:20},I),l().createElement(h.Th,{sort:F(2),width:25},L),l().createElement(h.Th,{sort:F(3),width:15},P),l().createElement(h.Th,{sort:F(4),width:15},k))),l().createElement(h.Tbody,null,q.map((function(e,t){return l().createElement(l().Fragment,{key:t},l().createElement(h.Tr,null,l().createElement(h.Td,{dataLabel:D},-1==e.number?"Not Available":e.number),l().createElement(h.Td,{dataLabel:I},-1==e.contractNumber?"Not Available":e.contractNumber),l().createElement(h.Td,{dataLabel:L},-1==e.quantity?"Not Available":e.quantity),l().createElement(h.Td,{dataLabel:P},e.startDate==new Date(0)?"Not Available":g(e.startDate)),l().createElement(h.Td,{dataLabel:k},e.endDate==new Date(0)?"Not Available":g(e.endDate))))})))),0==q.length&&l().createElement(s.q,{clearFilters:function(){C("")}}))};var N=n(6456);const C=(0,i.withRouter)((function(){var e,t,n,o=(0,i.useParams)().SKU,y=(0,m.useQueryClient)().getQueryData("user"),h=(e=o,(0,m.useQuery)({queryKey:"singleProduct.".concat(e),queryFn:function(){return function(e){return p(void 0,void 0,Promise,(function(){var t;return b(this,(function(n){return t=function(e){return p(void 0,void 0,Promise,(function(){var t,n;return b(this,(function(r){switch(r.label){case 0:return[4,window.insights.chrome.auth.getToken()];case 1:return t=r.sent(),[4,fetch("/api/rhsm/v2/products/".concat(e),{headers:{Authorization:"Bearer ".concat(t)}})];case 2:if(!(n=r.sent()).ok)throw new f.o("Status Code ".concat(n.status,".  Error fetching sku: ").concat(n.statusText,"."),n.status,n.statusText);return[4,n.json()];case 3:return[2,r.sent().body]}}))}))}(e),[2,t]}))}))}(e)},retry:function(e,t){return e<3&&404!=t.status}})),v=h.isLoading,g=h.error,w=h.data,S=("subscriptionInventory.detailsTable",t=(0,N.useFlagsStatus)().flagsReady,n=(0,N.useFlag)("subscriptionInventory.detailsTable"),!!t&&n),C="Not Available";return y.canReadProducts?l().createElement((function(){var e;return l().createElement(l().Fragment,null,l().createElement(c.Z,null,v&&!g&&l().createElement(s.$,null),!v&&!g&&l().createElement(l().Fragment,null,l().createElement(r.Breadcrumb,null,l().createElement(r.BreadcrumbItem,{render:function(){return l().createElement(i.Link,{to:"/"},"Subscription Inventory")}}),l().createElement(r.BreadcrumbItem,{isActive:!0},w.name," ")),l().createElement(u.Z,{title:w.name}),l().createElement(r.List,{isPlain:!0},l().createElement(r.ListItem,{className:"pf-u-mt-md"},l().createElement("b",null,"SKU: "),w.sku||C),l().createElement(r.ListItem,{className:"pf-u-mt-0"},l().createElement("b",null,"Quantity: "),null!==(e=w.quantity)&&void 0!==e?e:C),l().createElement(r.ListItem,{className:"pf-u-mt-0"},l().createElement("b",null,"Support level: "),w.serviceLevel||C),l().createElement(r.ListItem,{className:"pf-u-mt-0"},l().createElement("b",null,"Support type: "),w.serviceType||C),l().createElement(r.ListItem,{className:"pf-u-mt-0"},l().createElement("b",null,"Capacity: "),w.capacity?l().createElement(l().Fragment,null,w.capacity.name," ",l().createElement(r.Badge,{isRead:!0},w.capacity.quantity)):l().createElement(l().Fragment,null,"Not Available"))))),S&&!g&&l().createElement(a.Z,null,l().createElement(r.PageSection,{variant:"light"},l().createElement(r.Title,{headingLevel:"h2"},"Subscription details"),v&&!g&&l().createElement(s.$,null),!v&&!g&&l().createElement(T,{subscriptions:null==w?void 0:w.subscriptions}))),g&&404==g.status&&l().createElement(E,null),g&&404!=g.status&&l().createElement(d.Z,null))}),null):l().createElement(i.Redirect,{to:"/no-permissions"})}))},237:(e,t,n)=>{n.d(t,{o:()=>c});var r,a=(r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},r(e,t)},function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),c=function(e){function t(t,n,r){var a=e.call(this,t)||this;return a.status=n,a.statusText=r,a}return a(t,e),t}(Error)}}]);
//# sourceMappingURL=../sourcemaps/9716.js.map