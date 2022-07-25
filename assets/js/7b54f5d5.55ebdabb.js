"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2021],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var o=a.createContext({}),i=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=i(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=i(n),m=l,h=d["".concat(o,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,p(p({ref:t},s),{},{components:n})):a.createElement(h,p({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,p=new Array(r);p[0]=d;var u={};for(var o in t)hasOwnProperty.call(t,o)&&(u[o]=t[o]);u.originalType=e,u.mdxType="string"==typeof e?e:l,p[1]=u;for(var i=2;i<r;i++)p[i]=n[i];return a.createElement.apply(null,p)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(67294),l=n(86010);const r="tabItem_Ymn6";function p(e){let{children:t,hidden:n,className:p}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,p),hidden:n},t)}},65488:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(87462),l=n(67294),r=n(86010),p=n(72389),u=n(67392),o=n(7094),i=n(12466);const s="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,n;const{lazy:p,block:d,defaultValue:m,values:h,groupId:y,className:f}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=h?h:b.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),k=(0,u.l)(v,((e,t)=>e.value===t.value));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const g=null===m?m:null!=(t=null!=m?m:null==(n=b.find((e=>e.props.default)))?void 0:n.props.value)?t:b[0].props.value;if(null!==g&&!v.some((e=>e.value===g)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:T,setTabGroupChoices:P}=(0,o.U)(),[w,N]=(0,l.useState)(g),x=[],{blockElementScrollPositionUntilNextRender:C}=(0,i.o5)();if(null!=y){const e=T[y];null!=e&&e!==w&&v.some((t=>t.value===e))&&N(e)}const E=e=>{const t=e.currentTarget,n=x.indexOf(t),a=v[n].value;a!==w&&(C(t),N(a),null!=y&&P(y,String(a)))},O=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{var a;const t=x.indexOf(e.currentTarget)+1;n=null!=(a=x[t])?a:x[0];break}case"ArrowLeft":{var l;const t=x.indexOf(e.currentTarget)-1;n=null!=(l=x[t])?l:x[x.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",s)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},f)},v.map((e=>{let{value:t,label:n,attributes:p}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>x.push(e),onKeyDown:O,onFocus:E,onClick:E},p,{className:(0,r.Z)("tabs__item",c,null==p?void 0:p.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),p?(0,l.cloneElement)(b.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,p.Z)();return l.createElement(d,(0,a.Z)({key:String(t)},e))}},63746:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>u,metadata:()=>i,toc:()=>c});var a=n(87462),l=(n(67294),n(3905)),r=n(65488),p=n(85162);const u={id:"multiple-output-types",title:"Mapping multiple output types for the same class",sidebar_label:"Class with multiple output types"},o=void 0,i={unversionedId:"multiple-output-types",id:"version-5.0/multiple-output-types",title:"Mapping multiple output types for the same class",description:"Available in GraphQLite 4.0+",source:"@site/versioned_docs/version-5.0/multiple-output-types.mdx",sourceDirName:".",slug:"/multiple-output-types",permalink:"/docs/5.0/multiple-output-types",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-5.0/multiple-output-types.mdx",tags:[],version:"5.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1658784242,formattedLastUpdatedAt:"7/25/2022",frontMatter:{id:"multiple-output-types",title:"Mapping multiple output types for the same class",sidebar_label:"Class with multiple output types"},sidebar:"version-5.0/docs",previous:{title:"Extending an input type",permalink:"/docs/5.0/extend-input-type"},next:{title:"Symfony specific features",permalink:"/docs/5.0/symfony-bundle-advanced"}},s={},c=[{value:"Example",id:"example",level:2},{value:"Extending a non-default type",id:"extending-a-non-default-type",level:2}],d={toc:c};function m(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("small",null,"Available in GraphQLite 4.0+"),(0,l.kt)("p",null,"In most cases, you have one PHP class and you want to map it to one GraphQL output type."),(0,l.kt)("p",null,"But in very specific cases, you may want to use different GraphQL output type for the same class.\nFor instance, depending on the context, you might want to prevent the user from accessing some fields of your object."),(0,l.kt)("p",null,'To do so, you need to create 2 output types for the same PHP class. You typically do this using the "default" attribute of the ',(0,l.kt)("inlineCode",{parentName:"p"},"@Type")," annotation."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"Here is an example. Say we are manipulating products. When I query a ",(0,l.kt)("inlineCode",{parentName:"p"},"Product")," details, I want to have access to all fields.\nBut for some reason, I don't want to expose the price field of a product if I query the list of all products."),(0,l.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"#[Type]\nclass Product\n{\n    // ...\n\n    #[Field]\n    public function getName(): string\n    {\n        return $this->name;\n    }\n\n    #[Field]\n    public function getPrice(): ?float\n    {\n        return $this->price;\n    }\n}\n"))),(0,l.kt)(p.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Type()\n */\nclass Product\n{\n    // ...\n\n    /**\n     * @Field()\n     */\n    public function getName(): string\n    {\n        return $this->name;\n    }\n\n    /**\n     * @Field()\n     */\n    public function getPrice(): ?float\n    {\n        return $this->price;\n    }\n}\n")))),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"Product"),' class is declaring a classic GraphQL output type named "Product".'),(0,l.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'#[Type(class: Product::class, name: "LimitedProduct", default: false)]\n#[SourceField(name: "name")]\nclass LimitedProductType\n{\n    // ...\n}\n'))),(0,l.kt)(p.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Type(class=Product::class, name="LimitedProduct", default=false)\n * @SourceField(name="name")\n */\nclass LimitedProductType\n{\n    // ...\n}\n')))),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"LimitedProductType")," also declares an ",(0,l.kt)("a",{parentName:"p",href:"/docs/5.0/external-type-declaration"},'"external" type')," mapping the ",(0,l.kt)("inlineCode",{parentName:"p"},"Product")," class.\nBut pay special attention to the ",(0,l.kt)("inlineCode",{parentName:"p"},"@Type")," annotation."),(0,l.kt)("p",null,"First of all, we specify ",(0,l.kt)("inlineCode",{parentName:"p"},'name="LimitedProduct"'),'. This is useful to avoid having colliding names with the "Product" GraphQL output type\nthat is already declared.'),(0,l.kt)("p",null,"Then, we specify ",(0,l.kt)("inlineCode",{parentName:"p"},"default=false"),". This means that by default, the ",(0,l.kt)("inlineCode",{parentName:"p"},"Product")," class should not be mapped to the ",(0,l.kt)("inlineCode",{parentName:"p"},"LimitedProductType"),".\nThis type will only be used when we explicitly request it."),(0,l.kt)("p",null,"Finally, we can write our requests:"),(0,l.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'class ProductController\n{\n    /**\n     * This field will use the default type.\n     */\n    #[Field]\n    public function getProduct(int $id): Product { /* ... */ }\n\n    /**\n     * Because we use the "outputType" attribute, this field will use the other type.\n     *\n     * @return Product[]\n     */\n    #[Field(outputType: "[LimitedProduct!]!")]\n    public function getProducts(): array { /* ... */ }\n}\n'))),(0,l.kt)(p.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'class ProductController\n{\n    /**\n     * This field will use the default type.\n     *\n     * @Field\n     */\n    public function getProduct(int $id): Product { /* ... */ }\n\n    /**\n     * Because we use the "outputType" attribute, this field will use the other type.\n     *\n     * @Field(outputType="[LimitedProduct!]!")\n     * @return Product[]\n     */\n    public function getProducts(): array { /* ... */ }\n}\n')))),(0,l.kt)("p",null,'Notice how the "outputType" attribute is used in the ',(0,l.kt)("inlineCode",{parentName:"p"},"@Field")," annotation to force the output type."),(0,l.kt)("p",null,"Is a result, when the end user calls the ",(0,l.kt)("inlineCode",{parentName:"p"},"product")," query, we will have the possibility to fetch the ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"price")," fields,\nbut if he calls the ",(0,l.kt)("inlineCode",{parentName:"p"},"products")," query, each product in the list will have a ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," field but no ",(0,l.kt)("inlineCode",{parentName:"p"},"price")," field. We managed\nto successfully expose a different set of fields based on the query context."),(0,l.kt)("h2",{id:"extending-a-non-default-type"},"Extending a non-default type"),(0,l.kt)("p",null,"If you want to extend a type using the ",(0,l.kt)("inlineCode",{parentName:"p"},"@ExtendType")," annotation and if this type is declared as non-default,\nyou need to target the type by name instead of by class."),(0,l.kt)("p",null,"So instead of writing:"),(0,l.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"#[ExtendType(class: Product::class)]\n"))),(0,l.kt)(p.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @ExtendType(class=Product::class)\n */\n")))),(0,l.kt)("p",null,"you will write:"),(0,l.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.kt)(p.Z,{value:"php8",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'#[ExtendType(name: "LimitedProduct")]\n'))),(0,l.kt)(p.Z,{value:"php7",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @ExtendType(name="LimitedProduct")\n */\n')))),(0,l.kt)("p",null,'Notice how we use the "name" attribute instead of the "class" attribute in the ',(0,l.kt)("inlineCode",{parentName:"p"},"@ExtendType")," annotation."))}m.isMDXComponent=!0}}]);