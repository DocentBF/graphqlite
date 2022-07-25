"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4374],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},p=Object.keys(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)n=p[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,p=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=l(n),d=r,m=y["".concat(s,".").concat(d)]||y[d]||c[d]||p;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var p=n.length,o=new Array(p);o[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<p;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},98502:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>p,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const p={id:"custom-output-types",title:"Custom output types",sidebar_label:"Custom output types",original_id:"custom-output-types"},o=void 0,i={unversionedId:"custom-output-types",id:"version-3.0/custom-output-types",title:"Custom output types",description:"In some special cases, you want to override the GraphQL return type that is attributed by default by GraphQLite.",source:"@site/versioned_docs/version-3.0/custom_output_types.md",sourceDirName:".",slug:"/custom-output-types",permalink:"/docs/3.0/custom-output-types",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-3.0/custom_output_types.md",tags:[],version:"3.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1658784242,formattedLastUpdatedAt:"7/25/2022",frontMatter:{id:"custom-output-types",title:"Custom output types",sidebar_label:"Custom output types",original_id:"custom-output-types"},sidebar:"version-3.0/docs",previous:{title:"Pagination",permalink:"/docs/3.0/pagination"},next:{title:"Troubleshooting",permalink:"/docs/3.0/troubleshooting"}},s={},l=[{value:"Usage",id:"usage",level:2},{value:"Registering a custom output type (advanced)",id:"registering-a-custom-output-type-advanced",level:2},{value:"Symfony users",id:"symfony-users",level:3},{value:"Other frameworks",id:"other-frameworks",level:3}],u={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In some special cases, you want to override the GraphQL return type that is attributed by default by GraphQLite."),(0,r.kt)("p",null,"For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Type(class=Product::class)\n */\nclass ProductType\n{\n    /**\n     * @Field(name="id")\n     */\n    public function getId(Product $source): string\n    {\n        return $source->getId();\n    }\n}\n')),(0,r.kt)("p",null,"In the example above, GraphQLite will generate a GraphQL schema with a field ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," of type ",(0,r.kt)("inlineCode",{parentName:"p"},"string"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"type Product {\n    id: String!\n}\n")),(0,r.kt)("p",null,"GraphQL comes with an ",(0,r.kt)("inlineCode",{parentName:"p"},"ID")," scalar type. But PHP has no such type. So GraphQLite does not know when a variable\nis an ",(0,r.kt)("inlineCode",{parentName:"p"},"ID")," or not."),(0,r.kt)("p",null,"You can help GraphQLite by manually specifying the output type to use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'    /**\n     * @Field(name="id", outputType="ID!")\n     */\n')),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"outputType")," attribute will map the return value of the method to the output type passed in parameter."),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"outputType")," attribute in the following annotations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@Query")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@Mutation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@Field")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@SourceField"))),(0,r.kt)("h2",{id:"registering-a-custom-output-type-advanced"},"Registering a custom output type (advanced)"),(0,r.kt)("p",null,"In order to create a custom output type, you need to:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Design a class that extends ",(0,r.kt)("inlineCode",{parentName:"li"},"GraphQL\\Type\\Definition\\ObjectType"),"."),(0,r.kt)("li",{parentName:"ol"},"Register this class in the GraphQL schema.")),(0,r.kt)("p",null,"You'll find more details on the ",(0,r.kt)("a",{parentName:"p",href:"https://webonyx.github.io/graphql-php/type-system/object-types/"},"Webonyx documentation"),"."),(0,r.kt)("hr",null),(0,r.kt)("p",null,"In order to find existing types, the schema is using ",(0,r.kt)("em",{parentName:"p"},"type mappers")," (classes implementing the ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeMapperInterface")," interface)."),(0,r.kt)("p",null,"You need to make sure that one of these type mappers can return an instance of your type. The way you do this will depend on the framework\nyou use."),(0,r.kt)("h3",{id:"symfony-users"},"Symfony users"),(0,r.kt)("p",null,"Any class extending ",(0,r.kt)("inlineCode",{parentName:"p"},"GraphQL\\Type\\Definition\\ObjectType")," (and available in the container) will be automatically detected\nby Symfony and added to the schema."),(0,r.kt)("p",null,"If you want to automatically map the output type to a given PHP class, you will have to explicitly declare the output type\nas a service and use the ",(0,r.kt)("inlineCode",{parentName:"p"},"graphql.output_type")," tag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"# config/services.yaml\nservices:\n    App\\MyOutputType:\n        tags:\n            - { name: 'graphql.output_type', class: 'App\\MyPhpClass' }\n")),(0,r.kt)("h3",{id:"other-frameworks"},"Other frameworks"),(0,r.kt)("p",null,"The easiest way is to use a ",(0,r.kt)("inlineCode",{parentName:"p"},"StaticTypeMapper"),". This class is used to register custom output types."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"// Sample code:\n$staticTypeMapper = new StaticTypeMapper();\n\n// Let's register a type that maps by default to the \"MyClass\" PHP class\n$staticTypeMapper->setTypes([\n    MyClass::class => new MyCustomOutputType()\n]);\n\n// If you don't want your output type to map to any PHP class by default, use:\n$staticTypeMapper->setNotMappedTypes([\n    new MyCustomOutputType()\n]);\n\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"StaticTypeMapper")," instance MUST be registered in your container and linked to a ",(0,r.kt)("inlineCode",{parentName:"p"},"CompositeTypeMapper"),"\nthat will aggregate all the type mappers of the application."))}c.isMDXComponent=!0}}]);