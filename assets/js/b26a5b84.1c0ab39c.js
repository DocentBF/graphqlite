"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1481],{19365:(e,n,t)=>{t.d(n,{A:()=>i});var a=t(96540),r=t(20053);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:n,hidden:t,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.A)(l.tabItem,i),hidden:t},n)}},11470:(e,n,t)=>{t.d(n,{A:()=>N});var a=t(58168),r=t(96540),l=t(20053),i=t(23104),o=t(56347),s=t(57485),u=t(31682),p=t(89466);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}function d(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??c(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function g(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const a=(0,o.W6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,s.aZ)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function y(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=d(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[s,u]=h({queryString:t,groupId:a}),[c,y]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,p.Dv)(t);return[a,(0,r.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),m=(()=>{const e=s??c;return g({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{m&&o(m)}),[m]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!g({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),y(e)}),[u,y,l]),tabValues:l}}var m=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:n,block:t,selectedValue:o,selectValue:s,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),d=e=>{const n=e.currentTarget,t=p.indexOf(n),a=u[t].value;a!==o&&(c(n),s(a))},g=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=p.indexOf(e.currentTarget)+1;n=p[t]??p[0];break}case"ArrowLeft":{const t=p.indexOf(e.currentTarget)-1;n=p[t]??p[p.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.A)("tabs",{"tabs--block":t},n)},u.map((e=>{let{value:n,label:t,attributes:i}=e;return r.createElement("li",(0,a.A)({role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,key:n,ref:e=>p.push(e),onKeyDown:g,onClick:d},i,{className:(0,l.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":o===n})}),t??n)})))}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function T(e){const n=y(e);return r.createElement("div",{className:(0,l.A)("tabs-container",f.tabList)},r.createElement(b,(0,a.A)({},e,n)),r.createElement(v,(0,a.A)({},e,n)))}function N(e){const n=(0,m.A)();return r.createElement(T,(0,a.A)({key:String(n)},e))}},75718:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>c});var a=t(58168),r=(t(96540),t(15680)),l=(t(67443),t(11470)),i=t(19365);const o={id:"extend_type",title:"Extending a type",sidebar_label:"Extending a type",original_id:"extend_type"},s=void 0,u={unversionedId:"extend_type",id:"version-4.1/extend_type",title:"Extending a type",description:"Fields exposed in a GraphQL type do not need to be all part of the same class.",source:"@site/versioned_docs/version-4.1/extend_type.mdx",sourceDirName:".",slug:"/extend_type",permalink:"/docs/4.1/extend_type",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.1/extend_type.mdx",tags:[],version:"4.1",lastUpdatedBy:"Shish",lastUpdatedAt:1713496106,formattedLastUpdatedAt:"Apr 19, 2024",frontMatter:{id:"extend_type",title:"Extending a type",sidebar_label:"Extending a type",original_id:"extend_type"},sidebar:"version-4.1/docs",previous:{title:"Autowiring services",permalink:"/docs/4.1/autowiring"},next:{title:"External type declaration",permalink:"/docs/4.1/external_type_declaration"}},p={},c=[],d={toc:c},g="wrapper";function h(e){let{components:n,...t}=e;return(0,r.yg)(g,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Fields exposed in a GraphQL type do not need to be all part of the same class."),(0,r.yg)("p",null,"Use the ",(0,r.yg)("inlineCode",{parentName:"p"},"@ExtendType")," annotation to add additional fields to a type that is already declared."),(0,r.yg)("div",{class:"alert alert--info"},"Extending a type has nothing to do with type inheritance. If you are looking for a way to expose a class and its children classes, have a look at the ",(0,r.yg)("a",{href:"inheritance-interfaces"},"Inheritance")," section"),(0,r.yg)("p",null,"Let's assume you have a ",(0,r.yg)("inlineCode",{parentName:"p"},"Product")," class. In order to get the name of a product, there is no ",(0,r.yg)("inlineCode",{parentName:"p"},"getName()")," method in\nthe product because the name needs to be translated in the correct language. You have a ",(0,r.yg)("inlineCode",{parentName:"p"},"TranslationService")," to do that."),(0,r.yg)(l.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"php8",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n#[Type]\nclass Product\n{\n    // ...\n\n    #[Field]\n    public function getId(): string\n    {\n        return $this->id;\n    }\n\n    #[Field]\n    public function getPrice(): ?float\n    {\n        return $this->price;\n    }\n}\n"))),(0,r.yg)(i.A,{value:"php7",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n/**\n * @Type()\n */\nclass Product\n{\n    // ...\n\n    /**\n     * @Field()\n     */\n    public function getId(): string\n    {\n        return $this->id;\n    }\n\n    /**\n     * @Field()\n     */\n    public function getPrice(): ?float\n    {\n        return $this->price;\n    }\n}\n")))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"// You need to use a service to get the name of the product in the correct language.\n$name = $translationService->getProductName($productId, $language);\n")),(0,r.yg)("p",null,"Using ",(0,r.yg)("inlineCode",{parentName:"p"},"@ExtendType"),", you can add an additional ",(0,r.yg)("inlineCode",{parentName:"p"},"name")," field to your product:"),(0,r.yg)(l.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"php8",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"namespace App\\Types;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\ExtendType;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse App\\Entities\\Product;\n\n#[ExtendType(class: Product::class)]\nclass ProductType\n{\n    private $translationService;\n\n    public function __construct(TranslationServiceInterface $translationService)\n    {\n        $this->translationService = $translationService;\n    }\n\n    #[Field]\n    public function getName(Product $product, string $language): string\n    {\n        return $this->translationService->getProductName($product->getId(), $language);\n    }\n}\n"))),(0,r.yg)(i.A,{value:"php7",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"namespace App\\Types;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\ExtendType;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse App\\Entities\\Product;\n\n/**\n * @ExtendType(class=Product::class)\n */\nclass ProductType\n{\n    private $translationService;\n\n    public function __construct(TranslationServiceInterface $translationService)\n    {\n        $this->translationService = $translationService;\n    }\n\n    /**\n     * @Field()\n     */\n    public function getName(Product $product, string $language): string\n    {\n        return $this->translationService->getProductName($product->getId(), $language);\n    }\n}\n")))),(0,r.yg)("p",null,"Let's break this sample:"),(0,r.yg)(l.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"php8",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"#[ExtendType(class: Product::class)]\n"))),(0,r.yg)(i.A,{value:"php7",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"/**\n * @ExtendType(class=Product::class)\n */\n")))),(0,r.yg)("p",null,"With the ",(0,r.yg)("inlineCode",{parentName:"p"},"@ExtendType")," annotation, we tell GraphQLite that we want to add fields in the GraphQL type mapped to\nthe ",(0,r.yg)("inlineCode",{parentName:"p"},"Product")," PHP class."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"class ProductType\n{\n    private $translationService;\n\n    public function __construct(TranslationServiceInterface $translationService)\n    {\n        $this->translationService = $translationService;\n    }\n\n    // ...\n}\n")),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"ProductType")," class must be in the types namespace. You configured this namespace when you installed GraphQLite."),(0,r.yg)("li",{parentName:"ul"},"The ",(0,r.yg)("inlineCode",{parentName:"li"},"ProductType")," class is actually a ",(0,r.yg)("strong",{parentName:"li"},"service"),". You can therefore inject dependencies in it (like the ",(0,r.yg)("inlineCode",{parentName:"li"},"$translationService")," in this example)")),(0,r.yg)("div",{class:"alert alert--warning"},(0,r.yg)("strong",null,"Heads up!")," The ",(0,r.yg)("code",null,"ProductType")," class must exist in the container of your application and the container identifier MUST be the fully qualified class name.",(0,r.yg)("br",null),(0,r.yg)("br",null),"If you are using the Symfony bundle (or a framework with autowiring like Laravel), this is usually not an issue as the container will automatically create the controller entry if you do not explicitly declare it."),(0,r.yg)(l.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"php8",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"#[Field]\npublic function getName(Product $product, string $language): string\n{\n    return $this->translationService->getProductName($product->getId(), $language);\n}\n"))),(0,r.yg)(i.A,{value:"php7",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"/**\n * @Field()\n */\npublic function getName(Product $product, string $language): string\n{\n    return $this->translationService->getProductName($product->getId(), $language);\n}\n")))),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"@Field"),' annotation is used to add the "name" field to the ',(0,r.yg)("inlineCode",{parentName:"p"},"Product")," type."),(0,r.yg)("p",null,'Take a close look at the signature. The first parameter is the "resolved object" we are working on.\nAny additional parameters are used as arguments.'),(0,r.yg)("p",null,'Using the "',(0,r.yg)("a",{parentName:"p",href:"https://graphql.org/learn/schema/#type-language"},"Type language"),'" notation, we defined a type extension for\nthe GraphQL "Product" type:'),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-graphql"},"Extend type Product {\n    name(language: !String): String!\n}\n")),(0,r.yg)("div",{class:"alert alert--success"},"Type extension is a very powerful tool. Use it to add fields that needs to be computed from services not available in the entity."))}h.isMDXComponent=!0}}]);