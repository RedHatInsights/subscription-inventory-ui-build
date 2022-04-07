"use strict";(self.webpackChunksubscription_inventory=self.webpackChunksubscription_inventory||[]).push([[858],{6858:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var r=n(2950),a=n.n(r),l=n(334),i=n(6350),c=n(8716),o=n(167),u=n(9421),s=n(9173),m=n(8767),d=n(9941),p=n(5586),f=function(e){var t,n,l,i,c=e.data,o=e.isFetching,s="Name",m="Quantity",f=(0,r.useState)(1),h=f[0],E=f[1],g=(0,r.useState)(10),y=g[0],b=g[1],v=(0,r.useState)(""),w=v[0],x=v[1],I=a().useState(0),T=I[0],S=I[1],F=a().useState("asc"),C=F[0],G=F[1],H=function(e){return[e.name,e.quantity]},k=function(e){return{sortBy:{index:T,direction:C,defaultDirection:"asc"},onSort:function(e,t,n){S(t),G(n)},columnIndex:e}},P=function(e,t){E(t)},L=function(e,t){b(t),E(1)},R=function(){x(""),E(1)},B=function(e,t){return e.filter((function(e){var n=t.toLowerCase().trim(),r=(e.name||"").toLowerCase(),a=(e.productLine||"").toLowerCase();return r.includes(n)||a.includes(n)}))},V=function(e,t){return B(e,t).length},Z=function(e){return void 0===e&&(e=u.PaginationVariant.top),a().createElement(u.Pagination,{isDisabled:o,itemCount:V(c,w),perPage:y,page:h,onSetPage:P,onPerPageSelect:L,variant:e})},j=(t=T,c.sort((function(e,n){var r=H(e)[t]||"",a=H(n)[t]||"",l=0;return r<a?l=-1:r>a&&(l=1),"asc"==C?l:-1*l}))),q=(n=B(j,w),i=(l=(h-1)*y)+y,n.slice(l,i));return a().createElement(a().Fragment,null,a().createElement(u.Flex,{direction:{default:"column",md:"row"},justifyContent:{default:"justifyContentSpaceBetween"}},a().createElement(u.FlexItem,null,c.length>0&&a().createElement(u.SearchInput,{placeholder:"Filter by Name",value:w,onChange:function(e){x(e),E(1)},onClear:R})),a().createElement(u.FlexItem,{align:{default:"alignRight"}},Z())),a().createElement(d.TableComposable,{"aria-label":"Products"},a().createElement(d.Thead,null,a().createElement(d.Tr,null,a().createElement(d.Th,{sort:k(0)},s),a().createElement(d.Th,{sort:k(1)},m))),a().createElement(d.Tbody,null,q.map((function(e,t){return a().createElement(a().Fragment,{key:t},a().createElement(d.Tr,null,a().createElement(d.Td,{dataLabel:s},a().createElement(u.TextContent,null,a().createElement(u.Text,{component:u.TextVariants.h3},e.name,a().createElement("br",null),a().createElement(u.Text,{component:u.TextVariants.small},e.productLine)))),a().createElement(d.Td,{dataLabel:m},e.quantity)))})))),0==q.length&&c.length>0&&a().createElement(p.qx,{clearFilters:R}),Z(u.PaginationVariant.bottom))},h=n(6808),E=n.n(h),g=function(e,t,n,r){return new(n||(n=Promise))((function(a,l){function i(e){try{o(r.next(e))}catch(e){l(e)}}function c(e){try{o(r.throw(e))}catch(e){l(e)}}function o(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,c)}o((r=r.apply(e,t||[])).next())}))},y=function(e,t){var n,r,a,l,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return l={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function c(l){return function(c){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&l[0]?r.return:l[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,l[1])).done)return a;switch(r=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return i.label++,{value:l[1],done:!1};case 5:i.label++,r=l[1],l=[0];continue;case 7:l=i.ops.pop(),i.trys.pop();continue;default:if(!((a=(a=i.trys).length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){i=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){i.label=l[1];break}if(6===l[0]&&i.label<a[1]){i.label=a[1],a=l;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(l);break}a[2]&&i.ops.pop(),i.trys.pop();continue}l=t.call(e,i)}catch(e){l=[6,e],r=0}finally{n=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}},b=n(470);const v=function(e){var t=e.children,n=e.href,r=e.variant,l=void 0===r?"link":r;return a().createElement(u.Button,{variant:l,component:"a",href:n,target:"_blank",isInline:!0,icon:a().createElement(b.ZP,null),iconPosition:"right"},t)},w=n.p+"fonts/onlineIcon.svg",x=n.p+"fonts/salesIcon.svg",I=n.p+"fonts/partnersIcon.svg",T=n.p+"fonts/trainingIcon.svg",S=n.p+"fonts/tryIcon.svg",F=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1],l=function(){n(!t)},i=function(e){var t=e.icon,n=e.title;return a().createElement(u.Flex,{alignItems:{default:"alignItemsFlexStart"},grow:{default:"grow"},spaceItems:{default:"spaceItemsXs"}},a().createElement(u.FlexItem,{style:{height:"30px"}},a().createElement("img",{src:t,style:{height:"30px"}})),a().createElement(u.FlexItem,null,a().createElement(u.Title,{headingLevel:"h2",size:"lg"},n)))},c=function(e){var t=e.body,n=e.ctaHref,r=e.ctaText,l=e.title;return a().createElement(u.Card,{isFullHeight:!0},a().createElement(u.CardTitle,null,l),a().createElement(u.CardBody,null,t),a().createElement(u.CardFooter,null,a().createElement(v,{href:n,variant:"primary"},r)))};return a().createElement(a().Fragment,null,a().createElement(u.Button,{variant:"primary",onClick:l},"Purchase subscriptions"),a().createElement(u.Modal,{isOpen:t,onClose:l,title:"Purchase Subscriptions",variant:u.ModalVariant.medium},a().createElement(u.Grid,{hasGutter:!0},a().createElement(u.GridItem,{span:12},a().createElement(i,{icon:w,title:"Online"})),a().createElement(u.GridItem,{span:6},a().createElement(c,{body:"A simpler way to buy and manage enterprise software, with automated deployment to any cloud.",ctaHref:"https://marketplace.redhat.com",ctaText:"Go to the Marketplace",title:"Red Hat Marketplace"})),a().createElement(u.GridItem,{span:6},a().createElement(c,{body:"Easily configure and buy Red Hat Enterprise Linux in our online store.",ctaHref:"https://www.redhat.com/store",ctaText:"Go to the Red Hat Store",title:"Red Hat Store"})),a().createElement(u.GridItem,{span:6},a().createElement(i,{icon:x,title:"Sales"})),a().createElement(u.GridItem,{span:6},a().createElement(i,{icon:I,title:"Partners"})),a().createElement(u.GridItem,{span:6},a().createElement(c,{body:"Get expert help configuring Red Hat Enterprise Linux to suit your needs.",ctaHref:"https://access.redhat.com/support/contact/sales",ctaText:"Contact Sales",title:"From a Red Hatter"})),a().createElement(u.GridItem,{span:6},a().createElement(c,{body:"Find and work with an authorized Red Hat partner",ctaHref:"https://redhat.secure.force.com/finder",ctaText:"Search for partners",title:"Through our partners"})),a().createElement(u.GridItem,{span:6},a().createElement(i,{icon:T,title:"Training"})),a().createElement(u.GridItem,{span:6},a().createElement(i,{icon:S,title:"Try"})),a().createElement(u.GridItem,{span:6},a().createElement(c,{body:"Get access to more than 1,000 instructor-led recordings, training courses, and up to 400 hours of hands-on labs - which can all be completed online at your own pace.",ctaHref:"https://www.redhat.com/training/learning-subscription",ctaText:"Learn more",title:"Red Hat Learning Subscription"})),a().createElement(u.GridItem,{span:6},a().createElement(c,{body:"Our no-cost trials help you gain hands-on experience, prepare for a certification, or assess if a product is right for your organization.",ctaHref:"https://www.redhat.com/en/products/trials",ctaText:"Go to product trial center",title:"Red Hat product trial center"})))))},C=(0,l.withRouter)((function(){var e=(0,m.useQueryClient)().getQueryData("user"),t=(0,m.useQuery)("products",(function(){return g(void 0,void 0,void 0,(function(){return y(this,(function(e){switch(e.label){case 0:return[4,g(void 0,void 0,void 0,(function(){var e;return y(this,(function(t){switch(t.label){case 0:return e=E().get("cs_jwt"),[4,fetch("/api/rhsm/v2/products",{headers:{Authorization:"Bearer "+e}})];case 1:return[4,t.sent().json()];case 2:return[2,t.sent().body]}}))}))];case 1:return[2,e.sent()]}}))}))})),n=t.isFetching,r=t.isLoading,d=t.error,h=t.data;return e.canReadProducts?a().createElement((function(){return a().createElement(a().Fragment,null,a().createElement(c.Z,null,a().createElement(u.Split,{hasGutter:!0},a().createElement(u.SplitItem,{isFilled:!0},a().createElement(s.Z,{title:"Subscription Inventory"})),a().createElement(u.SplitItem,null,a().createElement(F,null)))),a().createElement(i.Z,null,a().createElement(u.PageSection,{variant:"light"},a().createElement(u.Title,{headingLevel:"h2"},"All subscriptions for account ",e.accountNumber),a().createElement(a().Fragment,null,r&&!d&&a().createElement(p.qb,null),!r&&!d&&a().createElement(f,{data:h,isFetching:n}),d&&a().createElement(o.Z,null)))))}),null):a().createElement(l.Redirect,{to:"/no-permissions"})}))}}]);
//# sourceMappingURL=../sourcemaps/858.03fe0a6ef03357ec4029.js.map