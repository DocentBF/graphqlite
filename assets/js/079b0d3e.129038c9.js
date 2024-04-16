"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2369],{19365:(e,n,t)=>{t.d(n,{A:()=>r});var a=t(96540),o=t(20053);const i={tabItem:"tabItem_Ymn6"};function r(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.A)(i.tabItem,r),hidden:t},n)}},11470:(e,n,t)=>{t.d(n,{A:()=>A});var a=t(58168),o=t(96540),i=t(20053),r=t(23104),l=t(56347),u=t(57485),s=t(31682),c=t(89466);function p(e){return function(e){return o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}function d(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??p(t);return function(e){const n=(0,s.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function y(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const a=(0,l.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u.aZ)(i),(0,o.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=d(e),[r,l]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!y({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[u,s]=h({queryString:t,groupId:a}),[p,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,c.Dv)(t);return[a,(0,o.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),m=(()=>{const e=u??p;return y({value:e,tabValues:i})?e:null})();(0,o.useLayoutEffect)((()=>{m&&l(m)}),[m]);return{selectedValue:r,selectValue:(0,o.useCallback)((e=>{if(!y({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),s(e),g(e)}),[s,g,i]),tabValues:i}}var m=t(92303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:n,block:t,selectedValue:l,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,r.a_)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),a=s[t].value;a!==l&&(p(n),u(a))},y=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},n)},s.map((e=>{let{value:n,label:t,attributes:r}=e;return o.createElement("li",(0,a.A)({role:"tab",tabIndex:l===n?0:-1,"aria-selected":l===n,key:n,ref:e=>c.push(e),onKeyDown:y,onClick:d},r,{className:(0,i.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":l===n})}),t??n)})))}function T(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},i.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function v(e){const n=g(e);return o.createElement("div",{className:(0,i.A)("tabs-container",f.tabList)},o.createElement(b,(0,a.A)({},e,n)),o.createElement(T,(0,a.A)({},e,n)))}function A(e){const n=(0,m.A)();return o.createElement(v,(0,a.A)({key:String(n)},e))}},91271:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=t(58168),o=(t(96540),t(15680)),i=(t(67443),t(11470)),r=t(19365);const l={id:"external-type-declaration",title:"External type declaration",sidebar_label:"External type declaration"},u=void 0,s={unversionedId:"external-type-declaration",id:"version-6.0/external-type-declaration",title:"External type declaration",description:"In some cases, you cannot or do not want to put an annotation on a domain class.",source:"@site/versioned_docs/version-6.0/external-type-declaration.mdx",sourceDirName:".",slug:"/external-type-declaration",permalink:"/docs/6.0/external-type-declaration",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-6.0/external-type-declaration.mdx",tags:[],version:"6.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1713234680,formattedLastUpdatedAt:"Apr 16, 2024",frontMatter:{id:"external-type-declaration",title:"External type declaration",sidebar_label:"External type declaration"},sidebar:"docs",previous:{title:"Extending a type",permalink:"/docs/6.0/extend-type"},next:{title:"Input types",permalink:"/docs/6.0/input-types"}},c={},p=[{value:"<code>@Type</code> annotation with the <code>class</code> attribute",id:"type-annotation-with-the-class-attribute",level:2},{value:"<code>@SourceField</code> annotation",id:"sourcefield-annotation",level:2},{value:"<code>@MagicField</code> annotation",id:"magicfield-annotation",level:2},{value:"Authentication and authorization",id:"authentication-and-authorization",level:3},{value:"Declaring fields dynamically (without annotations)",id:"declaring-fields-dynamically-without-annotations",level:2}],d={toc:p},y="wrapper";function h(e){let{components:n,...t}=e;return(0,o.yg)(y,(0,a.A)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"In some cases, you cannot or do not want to put an annotation on a domain class."),(0,o.yg)("p",null,"For instance:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The class you want to annotate is part of a third party library and you cannot modify it"),(0,o.yg)("li",{parentName:"ul"},"You are doing domain-driven design and don't want to clutter your domain object with annotations from the view layer"),(0,o.yg)("li",{parentName:"ul"},"etc.")),(0,o.yg)("h2",{id:"type-annotation-with-the-class-attribute"},(0,o.yg)("inlineCode",{parentName:"h2"},"@Type")," annotation with the ",(0,o.yg)("inlineCode",{parentName:"h2"},"class")," attribute"),(0,o.yg)("p",null,"GraphQLite allows you to use a ",(0,o.yg)("em",{parentName:"p"},"proxy")," class thanks to the ",(0,o.yg)("inlineCode",{parentName:"p"},"@Type")," annotation with the ",(0,o.yg)("inlineCode",{parentName:"p"},"class")," attribute:"),(0,o.yg)(i.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.yg)(r.A,{value:"php8",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},"namespace App\\Types;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse App\\Entities\\Product;\n\n#[Type(class: Product::class)]\nclass ProductType\n{\n    #[Field]\n    public function getId(Product $product): string\n    {\n        return $product->getId();\n    }\n}\n"))),(0,o.yg)(r.A,{value:"php7",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},"namespace App\\Types;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse App\\Entities\\Product;\n\n/**\n * @Type(class=Product::class)\n */\nclass ProductType\n{\n    /**\n     * @Field()\n     */\n    public function getId(Product $product): string\n    {\n        return $product->getId();\n    }\n}\n")))),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"ProductType")," class must be in the ",(0,o.yg)("em",{parentName:"p"},"types")," namespace. You configured this namespace when you installed GraphQLite."),(0,o.yg)("p",null,"The ",(0,o.yg)("inlineCode",{parentName:"p"},"ProductType")," class is actually a ",(0,o.yg)("strong",{parentName:"p"},"service"),". You can therefore inject dependencies in it."),(0,o.yg)("div",{class:"alert alert--warning"},(0,o.yg)("strong",null,"Heads up!")," The ",(0,o.yg)("code",null,"ProductType")," class must exist in the container of your application and the container identifier MUST be the fully qualified class name.",(0,o.yg)("br",null),(0,o.yg)("br",null),"If you are using the Symfony bundle (or a framework with autowiring like Laravel), this is usually not an issue as the container will automatically create the controller entry if you do not explicitly declare it."),(0,o.yg)("p",null,"In methods with a ",(0,o.yg)("inlineCode",{parentName:"p"},"@Field")," annotation, the first parameter is the ",(0,o.yg)("em",{parentName:"p"},"resolved object")," we are working on. Any additional parameters are used as arguments."),(0,o.yg)("h2",{id:"sourcefield-annotation"},(0,o.yg)("inlineCode",{parentName:"h2"},"@SourceField")," annotation"),(0,o.yg)("p",null,"If you don't want to rewrite all ",(0,o.yg)("em",{parentName:"p"},"getters")," of your base class, you may use the ",(0,o.yg)("inlineCode",{parentName:"p"},"@SourceField")," annotation:"),(0,o.yg)(i.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.yg)(r.A,{value:"php8",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Annotations\\Type;\nuse TheCodingMachine\\GraphQLite\\Annotations\\SourceField;\nuse App\\Entities\\Product;\n\n#[Type(class: Product::class)]\n#[SourceField(name: "name")]\n#[SourceField(name: "price")]\nclass ProductType\n{\n}\n'))),(0,o.yg)(r.A,{value:"php7",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Annotations\\Type;\nuse TheCodingMachine\\GraphQLite\\Annotations\\SourceField;\nuse App\\Entities\\Product;\n\n/**\n * @Type(class=Product::class)\n * @SourceField(name="name")\n * @SourceField(name="price")\n */\nclass ProductType\n{\n}\n')))),(0,o.yg)("p",null,"By doing so, you let GraphQLite know that the type exposes the ",(0,o.yg)("inlineCode",{parentName:"p"},"getName")," method of the underlying ",(0,o.yg)("inlineCode",{parentName:"p"},"Product")," object."),(0,o.yg)("p",null,"Internally, GraphQLite will look for methods named ",(0,o.yg)("inlineCode",{parentName:"p"},"name()"),", ",(0,o.yg)("inlineCode",{parentName:"p"},"getName()")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"isName()"),").\nYou can set different name to look for with ",(0,o.yg)("inlineCode",{parentName:"p"},"sourceName")," attribute."),(0,o.yg)("h2",{id:"magicfield-annotation"},(0,o.yg)("inlineCode",{parentName:"h2"},"@MagicField")," annotation"),(0,o.yg)("p",null,"If your object has no getters, but instead uses magic properties (using the magic ",(0,o.yg)("inlineCode",{parentName:"p"},"__get")," method), you should use the ",(0,o.yg)("inlineCode",{parentName:"p"},"@MagicField")," annotation:"),(0,o.yg)(i.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.yg)(r.A,{value:"php8",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Annotations\\Type;\nuse TheCodingMachine\\GraphQLite\\Annotations\\SourceField;\nuse App\\Entities\\Product;\n\n#[Type]\n#[MagicField(name: "name", outputType: "String!")]\n#[MagicField(name: "price", outputType: "Float")]\nclass ProductType\n{\n    public function __get(string $property) {\n        // return some magic property\n    }\n}\n'))),(0,o.yg)(r.A,{value:"php7",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Annotations\\Type;\nuse TheCodingMachine\\GraphQLite\\Annotations\\SourceField;\nuse App\\Entities\\Product;\n\n/**\n * @Type()\n * @MagicField(name="name", outputType="String!")\n * @MagicField(name="price", outputType="Float")\n */\nclass ProductType\n{\n    public function __get(string $property) {\n        // return some magic property\n    }\n}\n')))),(0,o.yg)("p",null,'By doing so, you let GraphQLite know that the type exposes "name" and the "price" magic properties of the underlying ',(0,o.yg)("inlineCode",{parentName:"p"},"Product")," object.\nYou can set different name to look for with ",(0,o.yg)("inlineCode",{parentName:"p"},"sourceName")," attribute."),(0,o.yg)("p",null,"This is particularly useful in frameworks like Laravel, where Eloquent is making a very wide use of such properties."),(0,o.yg)("p",null,"Please note that GraphQLite has no way to know the type of a magic property. Therefore, you have specify the GraphQL type\nof each property manually."),(0,o.yg)("h3",{id:"authentication-and-authorization"},"Authentication and authorization"),(0,o.yg)("p",null,'You may also check for logged users or users with a specific right using the "annotations" property.'),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Annotations\\Type;\nuse TheCodingMachine\\GraphQLite\\Annotations\\SourceField;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Logged;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Right;\nuse TheCodingMachine\\GraphQLite\\Annotations\\FailWith;\nuse App\\Entities\\Product;\n\n/**\n * @Type(class=Product::class)\n * @SourceField(name="name")\n * @SourceField(name="price", annotations={@Logged, @Right(name="CAN_ACCESS_Price", @FailWith(null)}))\n */\nclass ProductType extends AbstractAnnotatedObjectType\n{\n}\n')),(0,o.yg)("p",null,"Any annotations described in the ",(0,o.yg)("a",{parentName:"p",href:"/docs/6.0/authentication-authorization"},"Authentication and authorization page"),", or any annotation this is actually a ",(0,o.yg)("a",{parentName:"p",href:"/docs/6.0/field-middlewares"},'"field middleware"')," can be used in the ",(0,o.yg)("inlineCode",{parentName:"p"},"@SourceField"),' "annotations" attribute.'),(0,o.yg)("div",{class:"alert alert--warning"},(0,o.yg)("strong",null,"Heads up!"),' The "annotation" attribute in @SourceField and @MagicField is only available as a ',(0,o.yg)("strong",null,"Doctrine annotations"),". You cannot use it in PHP 8 attributes (because PHP 8 attributes cannot be nested)"),(0,o.yg)("h2",{id:"declaring-fields-dynamically-without-annotations"},"Declaring fields dynamically (without annotations)"),(0,o.yg)("p",null,"In some very particular cases, you might not know exactly the list of ",(0,o.yg)("inlineCode",{parentName:"p"},"@SourceField")," annotations at development time.\nIf you need to decide the list of ",(0,o.yg)("inlineCode",{parentName:"p"},"@SourceField")," at runtime, you can implement the ",(0,o.yg)("inlineCode",{parentName:"p"},"FromSourceFieldsInterface"),":"),(0,o.yg)(i.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.yg)(r.A,{value:"php8",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\FromSourceFieldsInterface;\n\n#[Type(class: Product::class)]\nclass ProductType implements FromSourceFieldsInterface\n{\n    /**\n     * Dynamically returns the array of source fields\n     * to be fetched from the original object.\n     *\n     * @return SourceFieldInterface[]\n     */\n    public function getSourceFields(): array\n    {\n        // You may want to enable fields conditionally based on feature flags...\n        if (ENABLE_STATUS_GLOBALLY) {\n            return [\n                new SourceField(['name'=>'status', 'logged'=>true]),\n            ];\n        } else {\n            return [];\n        }\n    }\n}\n"))),(0,o.yg)(r.A,{value:"php7",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\FromSourceFieldsInterface;\n\n/**\n * @Type(class=Product::class)\n */\nclass ProductType implements FromSourceFieldsInterface\n{\n    /**\n     * Dynamically returns the array of source fields\n     * to be fetched from the original object.\n     *\n     * @return SourceFieldInterface[]\n     */\n    public function getSourceFields(): array\n    {\n        // You may want to enable fields conditionally based on feature flags...\n        if (ENABLE_STATUS_GLOBALLY) {\n            return [\n                new SourceField(['name'=>'status', 'logged'=>true]),\n            ];\n        } else {\n            return [];\n        }\n    }\n}\n")))))}h.isMDXComponent=!0}}]);