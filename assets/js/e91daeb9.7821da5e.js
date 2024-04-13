"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3359],{19365:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(96540),r=a(20053);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,o),hidden:a},t)}},11470:(e,t,a)=>{a.d(t,{A:()=>N});var n=a(58168),r=a(96540),l=a(20053),o=a(23104),i=a(56347),s=a(57485),u=a(31682),c=a(89466);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function d(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function g(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.W6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=d(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[s,u]=m({queryString:a,groupId:n}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,c.Dv)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),f=(()=>{const e=s??p;return g({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{f&&i(f)}),[f]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,l]),tabValues:l}}var f=a(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:i,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,o.a_)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),n=u[a].value;n!==i&&(p(t),s(n))},g=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.A)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:g,onClick:d},o,{className:(0,l.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function v(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=h(e);return r.createElement("div",{className:(0,l.A)("tabs-container",b.tabList)},r.createElement(y,(0,n.A)({},e,t)),r.createElement(v,(0,n.A)({},e,t)))}function N(e){const t=(0,f.A)();return r.createElement(w,(0,n.A)({key:String(t)},e))}},50815:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var n=a(58168),r=(a(96540),a(15680));a(67443),a(11470),a(19365);const l={id:"pagination",title:"Paginating large result sets",sidebar_label:"Pagination"},o=void 0,i={unversionedId:"pagination",id:"version-6.1/pagination",title:"Paginating large result sets",description:"It is quite common to have to paginate over large result sets.",source:"@site/versioned_docs/version-6.1/pagination.mdx",sourceDirName:".",slug:"/pagination",permalink:"/docs/6.1/pagination",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-6.1/pagination.mdx",tags:[],version:"6.1",lastUpdatedBy:"Yurii",lastUpdatedAt:1713036795,formattedLastUpdatedAt:"Apr 13, 2024",frontMatter:{id:"pagination",title:"Paginating large result sets",sidebar_label:"Pagination"},sidebar:"docs",previous:{title:"File uploads",permalink:"/docs/6.1/file-uploads"},next:{title:"Custom types",permalink:"/docs/6.1/custom-types"}},s={},u=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"It is quite common to have to paginate over large result sets."),(0,r.yg)("p",null,"GraphQLite offers a simple way to do that using ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/beberlei/porpaginas"},"Porpaginas"),"."),(0,r.yg)("p",null,"Porpaginas is a set of PHP interfaces that can be implemented by result iterators. It comes with a native support for\nPHP arrays, Doctrine and ",(0,r.yg)("a",{parentName:"p",href:"https://thecodingmachine.github.io/tdbm/doc/limit_offset_resultset.html"},"TDBM"),"."),(0,r.yg)("div",{class:"alert alert--warning"},"If you are a Laravel user, Eloquent does not come with a Porpaginas iterator. However, ",(0,r.yg)("a",{href:"laravel-package-advanced"},"the GraphQLite Laravel bundle comes with its own pagination system"),"."),(0,r.yg)("h2",{id:"installation"},"Installation"),(0,r.yg)("p",null,"You will need to install the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/beberlei/porpaginas"},"Porpaginas")," library to benefit from this feature."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-bash"},"$ composer require beberlei/porpaginas\n")),(0,r.yg)("h2",{id:"usage"},"Usage"),(0,r.yg)("p",null,"In your query, simply return a class that implements ",(0,r.yg)("inlineCode",{parentName:"p"},"Porpaginas\\Result"),":"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @return Product[]\n     */\n    #[Query]\n    public function products(): Porpaginas\\Result\n    {\n        // Some code that returns a list of products\n\n        // If you are using Doctrine, something like:\n        return new Porpaginas\\Doctrine\\ORM\\ORMQueryResult($doctrineQuery);\n    }\n}\n")),(0,r.yg)("p",null,"Notice that:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"the method return type MUST BE ",(0,r.yg)("inlineCode",{parentName:"li"},"Porpaginas\\Result")," or a class implementing ",(0,r.yg)("inlineCode",{parentName:"li"},"Porpaginas\\Result")),(0,r.yg)("li",{parentName:"ul"},"you MUST add a ",(0,r.yg)("inlineCode",{parentName:"li"},"@return")," statement to help GraphQLite find the type of the list")),(0,r.yg)("p",null,"Once this is done, you can paginate directly from your GraphQL query:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-graphql"},"products {\n    items(limit: 10, offset: 20) {\n        id\n        name\n    }\n    count\n}\n")),(0,r.yg)("p",null,'Results are wrapped into an item field. You can use the "limit" and "offset" parameters to apply pagination automatically.'),(0,r.yg)("p",null,'The "count" field returns the ',(0,r.yg)("strong",{parentName:"p"},"total count")," of items."))}d.isMDXComponent=!0}}]);