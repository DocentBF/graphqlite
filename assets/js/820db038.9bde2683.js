"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9368],{5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(6010);const i={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7462),r=n(7294),i=n(6010),s=n(2466),l=n(6550),p=n(1980),o=n(7392),u=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function d(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,o.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,p._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function y(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=d(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[p,o]=h({queryString:n,groupId:a}),[c,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,u.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),f=(()=>{const e=p??c;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),o(e),y(e)}),[o,y,i]),tabValues:i}}var f=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:l,selectValue:p,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const t=e.currentTarget,n=u.indexOf(t),a=o[n].value;a!==l&&(c(t),p(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const n=u.indexOf(e.currentTarget)+1;t=u[n]??u[0];break}case"ArrowLeft":{const n=u.indexOf(e.currentTarget)-1;t=u[n]??u[u.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},o.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>u.push(e),onKeyDown:m,onClick:d},s,{className:(0,i.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":l===t})}),n??t)})))}function b(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=y(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",g.tabList)},r.createElement(k,(0,a.Z)({},e,t)),r.createElement(b,(0,a.Z)({},e,t)))}function v(e){const t=(0,f.Z)();return r.createElement(N,(0,a.Z)({key:String(t)},e))}},2988:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var a=n(7462),r=(n(7294),n(3905));n(1839),n(4866),n(5162);const i={id:"type-mapping",title:"Type mapping",sidebar_label:"Type mapping"},s=void 0,l={unversionedId:"type-mapping",id:"version-6.1/type-mapping",title:"Type mapping",description:"As explained in the queries section, the job of GraphQLite is to create GraphQL types from PHP types.",source:"@site/versioned_docs/version-6.1/type-mapping.mdx",sourceDirName:".",slug:"/type-mapping",permalink:"/docs/type-mapping",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-6.1/type-mapping.mdx",tags:[],version:"6.1",lastUpdatedBy:"Sergey Malchits",lastUpdatedAt:1697240121,formattedLastUpdatedAt:"Oct 13, 2023",frontMatter:{id:"type-mapping",title:"Type mapping",sidebar_label:"Type mapping"},sidebar:"docs",previous:{title:"Mutations",permalink:"/docs/mutations"},next:{title:"Autowiring services",permalink:"/docs/autowiring"}},p={},o=[{value:"Scalar mapping",id:"scalar-mapping",level:2},{value:"Class mapping",id:"class-mapping",level:2},{value:"Array mapping",id:"array-mapping",level:2},{value:"ID mapping",id:"id-mapping",level:2},{value:"Force the outputType",id:"force-the-outputtype",level:3},{value:"ID class",id:"id-class",level:3},{value:"Date mapping",id:"date-mapping",level:2},{value:"Union types",id:"union-types",level:2},{value:"Enum types",id:"enum-types",level:2},{value:"Enum types with myclabs/php-enum",id:"enum-types-with-myclabsphp-enum",level:3},{value:"Deprecation of fields",id:"deprecation-of-fields",level:2},{value:"More scalar types",id:"more-scalar-types",level:2}],u={toc:o},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"As explained in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/queries"},"queries")," section, the job of GraphQLite is to create GraphQL types from PHP types."),(0,r.kt)("h2",{id:"scalar-mapping"},"Scalar mapping"),(0,r.kt)("p",null,"Scalar PHP types can be type-hinted to the corresponding GraphQL types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"string")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"int")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bool")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"float"))),(0,r.kt)("p",null,"For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\n\nclass MyController\n{\n    #[Query]\n    public function hello(string $name): string\n    {\n        return 'Hello ' . $name;\n    }\n}\n")),(0,r.kt)("h2",{id:"class-mapping"},"Class mapping"),(0,r.kt)("p",null,"When returning a PHP class in a query, you must annotate this class using ",(0,r.kt)("inlineCode",{parentName:"p"},"@Type")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@Field")," annotations:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n#[Type]\nclass Product\n{\n    // ...\n\n    #[Field]\n    public function getName(): string\n    {\n        return $this->name;\n    }\n\n    #[Field]\n    public function getPrice(): ?float\n    {\n        return $this->price;\n    }\n}\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note:")," The GraphQL output type name generated by GraphQLite is equal to the class name of the PHP class. So if your\nPHP class is ",(0,r.kt)("inlineCode",{parentName:"p"},"App\\Entities\\Product"),', then the GraphQL type will be named "Product".'),(0,r.kt)("p",null,'In case you have several types with the same class name in different namespaces, you will face a naming collision.\nHopefully, you can force the name of the GraphQL output type using the "name" attribute:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'#[Type(name: "MyProduct")]\nclass Product { /* ... */ }\n')),(0,r.kt)("div",{class:"alert alert--info"},"You can also put a ",(0,r.kt)("a",{href:"inheritance-interfaces#mapping-interfaces"},(0,r.kt)("code",null,"@Type")," annotation on a PHP interface to map your code to a GraphQL interface"),"."),(0,r.kt)("h2",{id:"array-mapping"},"Array mapping"),(0,r.kt)("p",null,"You can type-hint against arrays (or iterators) as long as you add a detailed ",(0,r.kt)("inlineCode",{parentName:"p"},"@return")," statement in the PHPDoc."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @return User[] <=== we specify that the array is an array of User objects.\n */\n#[Query]\npublic function users(int $limit, int $offset): array\n{\n    // Some code that returns an array of "users".\n}\n')),(0,r.kt)("h2",{id:"id-mapping"},"ID mapping"),(0,r.kt)("p",null,"GraphQL comes with a native ",(0,r.kt)("inlineCode",{parentName:"p"},"ID")," type. PHP has no such type."),(0,r.kt)("p",null,"There are two ways with GraphQLite to handle such type."),(0,r.kt)("h3",{id:"force-the-outputtype"},"Force the outputType"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'#[Field(outputType: "ID")]\npublic function getId(): string\n{\n    // ...\n}\n')),(0,r.kt)("p",null,"Using the ",(0,r.kt)("inlineCode",{parentName:"p"},"outputType")," attribute of the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Field")," annotation, you can force the output type to ",(0,r.kt)("inlineCode",{parentName:"p"},"ID"),"."),(0,r.kt)("p",null,"You can learn more about forcing output types in the ",(0,r.kt)("a",{parentName:"p",href:"/docs/custom-types"},"custom types section"),"."),(0,r.kt)("h3",{id:"id-class"},"ID class"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Types\\ID;\n\n#[Field]\npublic function getId(): ID\n{\n    // ...\n}\n")),(0,r.kt)("p",null,"Note that you can also use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ID")," class as an input type:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Types\\ID;\n\n#[Mutation]\npublic function save(ID $id, string $name): Product\n{\n    // ...\n}\n")),(0,r.kt)("h2",{id:"date-mapping"},"Date mapping"),(0,r.kt)("p",null,"Out of the box, GraphQL does not have a ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTime")," type, but we took the liberty to add one, with sensible defaults."),(0,r.kt)("p",null,"When used as an output type, ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTimeImmutable")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTimeInterface")," PHP classes are\nautomatically mapped to this ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTime")," GraphQL type."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"#[Field]\npublic function getDate(): \\DateTimeInterface\n{\n    return $this->date;\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"date")," field will be of type ",(0,r.kt)("inlineCode",{parentName:"p"},"DateTime"),". In the returned JSON response to a query, the date is formatted as a string\nin the ",(0,r.kt)("strong",{parentName:"p"},"ISO8601")," format (aka ATOM format)."),(0,r.kt)("div",{class:"alert alert--danger"},"PHP ",(0,r.kt)("code",null,"DateTime")," type is not supported."),(0,r.kt)("h2",{id:"union-types"},"Union types"),(0,r.kt)("p",null,"You can create a GraphQL union type ",(0,r.kt)("em",{parentName:"p"},"on the fly")," using the pipe ",(0,r.kt)("inlineCode",{parentName:"p"},"|")," operator in the PHPDoc:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @return Company|Contact <== can return a company OR a contact.\n */\n#[Query]\npublic function companyOrContact(int $id)\n{\n    // Some code that returns a company or a contact.\n}\n")),(0,r.kt)("h2",{id:"enum-types"},"Enum types"),(0,r.kt)("p",null,"PHP 8.1 introduced native support for Enums.  GraphQLite now also supports native enums as of version 5.1."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"#[Type]\nenum Status: string\n{\n    case ON = 'on';\n    case OFF = 'off';\n    case PENDING = 'pending';\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @return User[]\n */\n#[Query]\npublic function users(Status $status): array\n{\n    if ($status === Status::ON) {\n        // Your logic\n    }\n    // ...\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query users($status: Status!) {}\n    users(status: $status) {\n        id\n    }\n}\n")),(0,r.kt)("p",null,"By default, the name of the GraphQL enum type will be the name of the class. If you have a naming conflict (two classes\nthat live in different namespaces with the same class name), you can solve it using the ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," property on the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Type")," annotation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'namespace Model\\User;\n\n#[Type(name: "UserStatus")]\nenum Status: string\n{\n    // ...\n}\n')),(0,r.kt)("h3",{id:"enum-types-with-myclabsphp-enum"},"Enum types with myclabs/php-enum"),(0,r.kt)("div",{class:"alert alert--danger"},"This implementation is now deprecated and will be removed in the future.  You are advised to use native enums instead."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Prior to version 5.1, GraphQLite only supported Enums through the 3rd party library, ",(0,r.kt)("a",{parentName:"em",href:"https://github.com/myclabs/php-enum"},"myclabs/php-enum"),".  If you'd like to use this implementation you'll first need to add this library as a dependency to your application.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ composer require myclabs/php-enum\n")),(0,r.kt)("p",null,"Now, any class extending the ",(0,r.kt)("inlineCode",{parentName:"p"},"MyCLabs\\Enum\\Enum")," class will be mapped to a GraphQL enum:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use MyCLabs\\Enum\\Enum;\n\nclass StatusEnum extends Enum\n{\n    private const ON = 'on';\n    private const OFF = 'off';\n    private const PENDING = 'pending';\n}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @return User[]\n */\n#[Query]\npublic function users(StatusEnum $status): array\n{\n    if ($status == StatusEnum::ON()) {\n        // Note that the "magic" ON() method returns an instance of the StatusEnum class.\n        // Also, note that we are comparing this instance using "==" (using "===" would fail as we have 2 different instances here)\n        // ...\n    }\n    // ...\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"query users($status: StatusEnum!) {}\n    users(status: $status) {\n        id\n    }\n}\n")),(0,r.kt)("p",null,"By default, the name of the GraphQL enum type will be the name of the class. If you have a naming conflict (two classes\nthat live in different namespaces with the same class name), you can solve it using the ",(0,r.kt)("inlineCode",{parentName:"p"},"@EnumType")," annotation:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Annotations\\EnumType;\n\n#[EnumType(name: "UserStatus")]\nclass StatusEnum extends Enum\n{\n    // ...\n}\n')),(0,r.kt)("div",{class:"alert alert--warning"},'GraphQLite must be able to find all the classes extending the "MyCLabs\\Enum" class in your project. By default, GraphQLite will look for "Enum" classes in the namespaces declared for the types. For this reason, ',(0,r.kt)("strong",null,"your enum classes MUST be in one of the namespaces declared for the types in your GraphQLite configuration file.")),(0,r.kt)("h2",{id:"deprecation-of-fields"},"Deprecation of fields"),(0,r.kt)("p",null,"You can mark a field as deprecated in your GraphQL Schema by just annotating it with the ",(0,r.kt)("inlineCode",{parentName:"p"},"@deprecated")," PHPDoc annotation.  Note that a description (reason) is required for the annotation to be rendered."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n/**\n * @Type()\n */\nclass Product\n{\n    // ...\n\n    /**\n     * @Field()\n     */\n    public function getName(): string\n    {\n        return $this->name;\n    }\n\n    /**\n     * @Field()\n     * @deprecated use field `name` instead\n     */\n    public function getProductName(): string\n    {\n        return $this->name;\n    }\n}\n")),(0,r.kt)("p",null,"This will add the ",(0,r.kt)("inlineCode",{parentName:"p"},"@deprecated")," directive to the field in the GraphQL Schema which sets the ",(0,r.kt)("inlineCode",{parentName:"p"},"isDeprecated")," field to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," and adds the reason to the ",(0,r.kt)("inlineCode",{parentName:"p"},"deprecationReason")," field in an introspection query. Fields marked as deprecated can still be queried, but will be returned in an introspection query only if ",(0,r.kt)("inlineCode",{parentName:"p"},"includeDeprecated")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'query {\n    __type(name: "Product") {\n\ufffc       fields(includeDeprecated: true) {\n\ufffc           name\n\ufffc           isDeprecated\n\ufffc           deprecationReason\n\ufffc       }\n\ufffc   }\n}\n')),(0,r.kt)("h2",{id:"more-scalar-types"},"More scalar types"),(0,r.kt)("p",null,'GraphQL supports "custom" scalar types. GraphQLite supports adding more GraphQL scalar types.'),(0,r.kt)("p",null,"If you need more types, you can check the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/thecodingmachine/graphqlite-misc-types"},"GraphQLite Misc. Types library"),".\nIt adds support for more scalar types out of the box in GraphQLite."),(0,r.kt)("p",null,"Or if you have some special needs, ",(0,r.kt)("a",{parentName:"p",href:"custom-types#registering-a-custom-scalar-type-advanced"},"you can develop your own scalar types"),"."))}d.isMDXComponent=!0}}]);