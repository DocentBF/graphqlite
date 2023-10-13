"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5325],{5162:(e,n,t)=>{t.d(n,{Z:()=>r});var a=t(7294),p=t(6010);const l={tabItem:"tabItem_Ymn6"};function r(e){let{children:n,hidden:t,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,p.Z)(l.tabItem,r),hidden:t},n)}},4866:(e,n,t)=>{t.d(n,{Z:()=>N});var a=t(7462),p=t(7294),l=t(6010),r=t(2466),s=t(6550),u=t(1980),i=t(7392),o=t(12);function c(e){return function(e){return p.Children.map(e,(e=>{if(!e||(0,p.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:p}}=e;return{value:n,label:t,attributes:a,default:p}}))}function m(e){const{values:n,children:t}=e;return(0,p.useMemo)((()=>{const e=n??c(t);return function(e){const n=(0,i.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function d(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.k6)(),l=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._X)(l),(0,p.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(a.location.search);n.set(l,e),a.replace({...a.location,search:n.toString()})}),[l,a])]}function y(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,l=m(e),[r,s]=(0,p.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[u,i]=h({queryString:t,groupId:a}),[c,y]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,l]=(0,o.Nk)(t);return[a,(0,p.useCallback)((e=>{t&&l.set(e)}),[t,l])]}({groupId:a}),g=(()=>{const e=u??c;return d({value:e,tabValues:l})?e:null})();(0,p.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:r,selectValue:(0,p.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),i(e),y(e)}),[i,y,l]),tabValues:l}}var g=t(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:n,block:t,selectedValue:s,selectValue:u,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.o5)(),m=e=>{const n=e.currentTarget,t=o.indexOf(n),a=i[t].value;a!==s&&(c(n),u(a))},d=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return p.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},n)},i.map((e=>{let{value:n,label:t,attributes:r}=e;return p.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>o.push(e),onKeyDown:d,onClick:m},r,{className:(0,l.Z)("tabs__item",k.tabItem,r?.className,{"tabs__item--active":s===n})}),t??n)})))}function b(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,p.cloneElement)(e,{className:"margin-top--md"}):null}return p.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,p.cloneElement)(e,{key:n,hidden:e.props.value!==a}))))}function v(e){const n=y(e);return p.createElement("div",{className:(0,l.Z)("tabs-container",k.tabList)},p.createElement(f,(0,a.Z)({},e,n)),p.createElement(b,(0,a.Z)({},e,n)))}function N(e){const n=(0,g.Z)();return p.createElement(v,(0,a.Z)({key:String(n)},e))}},1865:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var a=t(7462),p=(t(7294),t(3905)),l=(t(1839),t(4866)),r=t(5162);const s={id:"type-mapping",title:"Type mapping",sidebar_label:"Type mapping"},u=void 0,i={unversionedId:"type-mapping",id:"type-mapping",title:"Type mapping",description:"As explained in the queries section, the job of GraphQLite is to create GraphQL types from PHP types.",source:"@site/docs/type-mapping.mdx",sourceDirName:".",slug:"/type-mapping",permalink:"/docs/next/type-mapping",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/docs/type-mapping.mdx",tags:[],version:"current",lastUpdatedBy:"Sergey Malchits",lastUpdatedAt:1697240121,formattedLastUpdatedAt:"Oct 13, 2023",frontMatter:{id:"type-mapping",title:"Type mapping",sidebar_label:"Type mapping"},sidebar:"docs",previous:{title:"Mutations",permalink:"/docs/next/mutations"},next:{title:"Autowiring services",permalink:"/docs/next/autowiring"}},o={},c=[{value:"Scalar mapping",id:"scalar-mapping",level:2},{value:"Class mapping",id:"class-mapping",level:2},{value:"Array mapping",id:"array-mapping",level:2},{value:"ID mapping",id:"id-mapping",level:2},{value:"Force the outputType",id:"force-the-outputtype",level:3},{value:"ID class",id:"id-class",level:3},{value:"Date mapping",id:"date-mapping",level:2},{value:"Union types",id:"union-types",level:2},{value:"Enum types",id:"enum-types",level:2},{value:"Enum types with myclabs/php-enum",id:"enum-types-with-myclabsphp-enum",level:3},{value:"Deprecation of fields",id:"deprecation-of-fields",level:2},{value:"More scalar types",id:"more-scalar-types",level:2}],m={toc:c},d="wrapper";function h(e){let{components:n,...t}=e;return(0,p.kt)(d,(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"As explained in the ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/queries"},"queries")," section, the job of GraphQLite is to create GraphQL types from PHP types."),(0,p.kt)("h2",{id:"scalar-mapping"},"Scalar mapping"),(0,p.kt)("p",null,"Scalar PHP types can be type-hinted to the corresponding GraphQL types:"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"string")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"int")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"bool")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("inlineCode",{parentName:"li"},"float"))),(0,p.kt)("p",null,"For instance:"),(0,p.kt)(l.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,p.kt)(r.Z,{value:"php8",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\n\nclass MyController\n{\n    #[Query]\n    public function hello(string $name): string\n    {\n        return 'Hello ' . $name;\n    }\n}\n"))),(0,p.kt)(r.Z,{value:"php7",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\n\nclass MyController\n{\n    /**\n     * @Query\n     */\n    public function hello(string $name): string\n    {\n        return 'Hello ' . $name;\n    }\n}\n")))),(0,p.kt)("h2",{id:"class-mapping"},"Class mapping"),(0,p.kt)("p",null,"When returning a PHP class in a query, you must annotate this class using ",(0,p.kt)("inlineCode",{parentName:"p"},"@Type")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"@Field")," annotations:"),(0,p.kt)(l.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,p.kt)(r.Z,{value:"php8",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n#[Type]\nclass Product\n{\n    // ...\n\n    #[Field]\n    public function getName(): string\n    {\n        return $this->name;\n    }\n\n    #[Field]\n    public function getPrice(): ?float\n    {\n        return $this->price;\n    }\n}\n"))),(0,p.kt)(r.Z,{value:"php7",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n/**\n * @Type()\n */\nclass Product\n{\n    // ...\n\n    /**\n     * @Field()\n     */\n    public function getName(): string\n    {\n        return $this->name;\n    }\n\n    /**\n     * @Field()\n     */\n    public function getPrice(): ?float\n    {\n        return $this->price;\n    }\n}\n")))),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Note:")," The GraphQL output type name generated by GraphQLite is equal to the class name of the PHP class. So if your\nPHP class is ",(0,p.kt)("inlineCode",{parentName:"p"},"App\\Entities\\Product"),', then the GraphQL type will be named "Product".'),(0,p.kt)("p",null,'In case you have several types with the same class name in different namespaces, you will face a naming collision.\nHopefully, you can force the name of the GraphQL output type using the "name" attribute:'),(0,p.kt)(l.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,p.kt)(r.Z,{value:"php8",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},'#[Type(name: "MyProduct")]\nclass Product { /* ... */ }\n'))),(0,p.kt)(r.Z,{value:"php7",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Type(name="MyProduct")\n */\nclass Product { /* ... */ }\n')))),(0,p.kt)("div",{class:"alert alert--info"},"You can also put a ",(0,p.kt)("a",{href:"inheritance-interfaces#mapping-interfaces"},(0,p.kt)("code",null,"@Type")," annotation on a PHP interface to map your code to a GraphQL interface"),"."),(0,p.kt)("h2",{id:"array-mapping"},"Array mapping"),(0,p.kt)("p",null,"You can type-hint against arrays (or iterators) as long as you add a detailed ",(0,p.kt)("inlineCode",{parentName:"p"},"@return")," statement in the PHPDoc."),(0,p.kt)(l.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,p.kt)(r.Z,{value:"php8",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @return User[] <=== we specify that the array is an array of User objects.\n */\n#[Query]\npublic function users(int $limit, int $offset): array\n{\n    // Some code that returns an array of "users".\n}\n'))),(0,p.kt)(r.Z,{value:"php7",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Query\n * @return User[] <=== we specify that the array is an array of User objects.\n */\npublic function users(int $limit, int $offset): array\n{\n    // Some code that returns an array of "users".\n}\n')))),(0,p.kt)("h2",{id:"id-mapping"},"ID mapping"),(0,p.kt)("p",null,"GraphQL comes with a native ",(0,p.kt)("inlineCode",{parentName:"p"},"ID")," type. PHP has no such type."),(0,p.kt)("p",null,"There are two ways with GraphQLite to handle such type."),(0,p.kt)("h3",{id:"force-the-outputtype"},"Force the outputType"),(0,p.kt)(l.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,p.kt)(r.Z,{value:"php8",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},'#[Field(outputType: "ID")]\npublic function getId(): string\n{\n    // ...\n}\n'))),(0,p.kt)(r.Z,{value:"php7",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Field(outputType="ID")\n */\npublic function getId(): string\n{\n    // ...\n}\n')))),(0,p.kt)("p",null,"Using the ",(0,p.kt)("inlineCode",{parentName:"p"},"outputType")," attribute of the ",(0,p.kt)("inlineCode",{parentName:"p"},"@Field")," annotation, you can force the output type to ",(0,p.kt)("inlineCode",{parentName:"p"},"ID"),"."),(0,p.kt)("p",null,"You can learn more about forcing output types in the ",(0,p.kt)("a",{parentName:"p",href:"/docs/next/custom-types"},"custom types section"),"."),(0,p.kt)("h3",{id:"id-class"},"ID class"),(0,p.kt)(l.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,p.kt)(r.Z,{value:"php8",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Types\\ID;\n\n#[Field]\npublic function getId(): ID\n{\n    // ...\n}\n"))),(0,p.kt)(r.Z,{value:"php7",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Types\\ID;\n\n/**\n * @Field\n */\npublic function getId(): ID\n{\n    // ...\n}\n")))),(0,p.kt)("p",null,"Note that you can also use the ",(0,p.kt)("inlineCode",{parentName:"p"},"ID")," class as an input type:"),(0,p.kt)(l.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,p.kt)(r.Z,{value:"php8",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Types\\ID;\n\n#[Mutation]\npublic function save(ID $id, string $name): Product\n{\n    // ...\n}\n"))),(0,p.kt)(r.Z,{value:"php7",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Types\\ID;\n\n/**\n * @Mutation\n */\npublic function save(ID $id, string $name): Product\n{\n    // ...\n}\n")))),(0,p.kt)("h2",{id:"date-mapping"},"Date mapping"),(0,p.kt)("p",null,"Out of the box, GraphQL does not have a ",(0,p.kt)("inlineCode",{parentName:"p"},"DateTime")," type, but we took the liberty to add one, with sensible defaults."),(0,p.kt)("p",null,"When used as an output type, ",(0,p.kt)("inlineCode",{parentName:"p"},"DateTimeImmutable")," or ",(0,p.kt)("inlineCode",{parentName:"p"},"DateTimeInterface")," PHP classes are\nautomatically mapped to this ",(0,p.kt)("inlineCode",{parentName:"p"},"DateTime")," GraphQL type."),(0,p.kt)(l.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,p.kt)(r.Z,{value:"php8",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"#[Field]\npublic function getDate(): \\DateTimeInterface\n{\n    return $this->date;\n}\n"))),(0,p.kt)(r.Z,{value:"php7",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Field\n */\npublic function getDate(): \\DateTimeInterface\n{\n    return $this->date;\n}\n")))),(0,p.kt)("p",null,"The ",(0,p.kt)("inlineCode",{parentName:"p"},"date")," field will be of type ",(0,p.kt)("inlineCode",{parentName:"p"},"DateTime"),". In the returned JSON response to a query, the date is formatted as a string\nin the ",(0,p.kt)("strong",{parentName:"p"},"ISO8601")," format (aka ATOM format)."),(0,p.kt)("div",{class:"alert alert--danger"},"PHP ",(0,p.kt)("code",null,"DateTime")," type is not supported."),(0,p.kt)("h2",{id:"union-types"},"Union types"),(0,p.kt)("p",null,"Union types for return are supported in GraphQLite as of version 6.0:"),(0,p.kt)(l.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,p.kt)(r.Z,{value:"php8",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"#[Query]\npublic function companyOrContact(int $id): Company|Contact\n{\n    // Some code that returns a company or a contact.\n}\n"))),(0,p.kt)(r.Z,{value:"php7",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Query\n * @return Company|Contact\n */\npublic function companyOrContact(int $id)\n{\n    // Some code that returns a company or a contact.\n}\n")))),(0,p.kt)("h2",{id:"enum-types"},"Enum types"),(0,p.kt)("p",null,"PHP 8.1 introduced native support for Enums.  GraphQLite now also supports native enums as of version 5.1."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"#[Type]\nenum Status: string\n{\n    case ON = 'on';\n    case OFF = 'off';\n    case PENDING = 'pending';\n}\n")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @return User[]\n */\n#[Query]\npublic function users(Status $status): array\n{\n    if ($status === Status::ON) {\n        // Your logic\n    }\n    // ...\n}\n")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"query users($status: Status!) {}\n    users(status: $status) {\n        id\n    }\n}\n")),(0,p.kt)("p",null,"By default, the name of the GraphQL enum type will be the name of the class. If you have a naming conflict (two classes\nthat live in different namespaces with the same class name), you can solve it using the ",(0,p.kt)("inlineCode",{parentName:"p"},"name")," property on the ",(0,p.kt)("inlineCode",{parentName:"p"},"@Type")," annotation:"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},'namespace Model\\User;\n\n#[Type(name: "UserStatus")]\nenum Status: string\n{\n    // ...\n}\n')),(0,p.kt)("h3",{id:"enum-types-with-myclabsphp-enum"},"Enum types with myclabs/php-enum"),(0,p.kt)("div",{class:"alert alert--danger"},"This implementation is now deprecated and will be removed in the future.  You are advised to use native enums instead."),(0,p.kt)("p",null,(0,p.kt)("em",{parentName:"p"},"Prior to version 5.1, GraphQLite only supported Enums through the 3rd party library, ",(0,p.kt)("a",{parentName:"em",href:"https://github.com/myclabs/php-enum"},"myclabs/php-enum"),".  If you'd like to use this implementation you'll first need to add this library as a dependency to your application.")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-bash"},"$ composer require myclabs/php-enum\n")),(0,p.kt)("p",null,"Now, any class extending the ",(0,p.kt)("inlineCode",{parentName:"p"},"MyCLabs\\Enum\\Enum")," class will be mapped to a GraphQL enum:"),(0,p.kt)(l.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,p.kt)(r.Z,{value:"php8",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"use MyCLabs\\Enum\\Enum;\n\nclass StatusEnum extends Enum\n{\n    private const ON = 'on';\n    private const OFF = 'off';\n    private const PENDING = 'pending';\n}\n")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @return User[]\n */\n#[Query]\npublic function users(StatusEnum $status): array\n{\n    if ($status == StatusEnum::ON()) {\n        // Note that the "magic" ON() method returns an instance of the StatusEnum class.\n        // Also, note that we are comparing this instance using "==" (using "===" would fail as we have 2 different instances here)\n        // ...\n    }\n    // ...\n}\n'))),(0,p.kt)(r.Z,{value:"php7",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"use MyCLabs\\Enum\\Enum;\n\nclass StatusEnum extends Enum\n{\n    private const ON = 'on';\n    private const OFF = 'off';\n    private const PENDING = 'pending';\n}\n")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Query\n * @return User[]\n */\npublic function users(StatusEnum $status): array\n{\n    if ($status == StatusEnum::ON()) {\n        // Note that the "magic" ON() method returns an instance of the StatusEnum class.\n        // Also, note that we are comparing this instance using "==" (using "===" would fail as we have 2 different instances here)\n        // ...\n    }\n    // ...\n}\n')))),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},"query users($status: StatusEnum!) {}\n    users(status: $status) {\n        id\n    }\n}\n")),(0,p.kt)("p",null,"By default, the name of the GraphQL enum type will be the name of the class. If you have a naming conflict (two classes\nthat live in different namespaces with the same class name), you can solve it using the ",(0,p.kt)("inlineCode",{parentName:"p"},"@EnumType")," annotation:"),(0,p.kt)(l.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,p.kt)(r.Z,{value:"php8",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Annotations\\EnumType;\n\n#[EnumType(name: "UserStatus")]\nclass StatusEnum extends Enum\n{\n    // ...\n}\n'))),(0,p.kt)(r.Z,{value:"php7",mdxType:"TabItem"},(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Annotations\\EnumType;\n\n/**\n * @EnumType(name="UserStatus")\n */\nclass StatusEnum extends Enum\n{\n    // ...\n}\n')))),(0,p.kt)("div",{class:"alert alert--warning"},'GraphQLite must be able to find all the classes extending the "MyCLabs\\Enum" class in your project. By default, GraphQLite will look for "Enum" classes in the namespaces declared for the types. For this reason, ',(0,p.kt)("strong",null,"your enum classes MUST be in one of the namespaces declared for the types in your GraphQLite configuration file.")),(0,p.kt)("h2",{id:"deprecation-of-fields"},"Deprecation of fields"),(0,p.kt)("p",null,"You can mark a field as deprecated in your GraphQL Schema by just annotating it with the ",(0,p.kt)("inlineCode",{parentName:"p"},"@deprecated")," PHPDoc annotation.  Note that a description (reason) is required for the annotation to be rendered."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n/**\n * @Type()\n */\nclass Product\n{\n    // ...\n\n    /**\n     * @Field()\n     */\n    public function getName(): string\n    {\n        return $this->name;\n    }\n\n    /**\n     * @Field()\n     * @deprecated use field `name` instead\n     */\n    public function getProductName(): string\n    {\n        return $this->name;\n    }\n}\n")),(0,p.kt)("p",null,"This will add the ",(0,p.kt)("inlineCode",{parentName:"p"},"@deprecated")," directive to the field in the GraphQL Schema which sets the ",(0,p.kt)("inlineCode",{parentName:"p"},"isDeprecated")," field to ",(0,p.kt)("inlineCode",{parentName:"p"},"true")," and adds the reason to the ",(0,p.kt)("inlineCode",{parentName:"p"},"deprecationReason")," field in an introspection query. Fields marked as deprecated can still be queried, but will be returned in an introspection query only if ",(0,p.kt)("inlineCode",{parentName:"p"},"includeDeprecated")," is set to ",(0,p.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-graphql"},'query {\n    __type(name: "Product") {\n\ufffc       fields(includeDeprecated: true) {\n\ufffc           name\n\ufffc           isDeprecated\n\ufffc           deprecationReason\n\ufffc       }\n\ufffc   }\n}\n')),(0,p.kt)("h2",{id:"more-scalar-types"},"More scalar types"),(0,p.kt)("small",null,"Available in GraphQLite 4.0+"),(0,p.kt)("p",null,'GraphQL supports "custom" scalar types. GraphQLite supports adding more GraphQL scalar types.'),(0,p.kt)("p",null,"If you need more types, you can check the ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/thecodingmachine/graphqlite-misc-types"},"GraphQLite Misc. Types library"),".\nIt adds support for more scalar types out of the box in GraphQLite."),(0,p.kt)("p",null,"Or if you have some special needs, ",(0,p.kt)("a",{parentName:"p",href:"custom-types#registering-a-custom-scalar-type-advanced"},"you can develop your own scalar types"),"."))}h.isMDXComponent=!0}}]);