"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3497],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},21396:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={id:"queries",title:"Queries",sidebar_label:"Queries",original_id:"queries"},o=void 0,l={unversionedId:"queries",id:"version-4.0/queries",title:"Queries",description:"In GraphQLite, GraphQL queries are created by writing methods in controller classes.",source:"@site/versioned_docs/version-4.0/queries.mdx",sourceDirName:".",slug:"/queries",permalink:"/docs/4.0/queries",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.0/queries.mdx",tags:[],version:"4.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1658784242,formattedLastUpdatedAt:"7/25/2022",frontMatter:{id:"queries",title:"Queries",sidebar_label:"Queries",original_id:"queries"},sidebar:"version-4.0/docs",previous:{title:"Other frameworks / No framework",permalink:"/docs/4.0/other-frameworks"},next:{title:"Mutations",permalink:"/docs/4.0/mutations"}},s={},p=[{value:"Simple query",id:"simple-query",level:2},{value:"Testing the query",id:"testing-the-query",level:2},{value:"Query with a type",id:"query-with-a-type",level:2}],u={toc:p};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"In GraphQLite, GraphQL queries are created by writing methods in ",(0,a.kt)("em",{parentName:"p"},"controller")," classes."),(0,a.kt)("p",null,"Those classes must be in the controllers namespaces which has been defined when you configured GraphQLite.\nFor instance, in Symfony, the controllers namespace is ",(0,a.kt)("inlineCode",{parentName:"p"},"App\\Controller")," by default."),(0,a.kt)("h2",{id:"simple-query"},"Simple query"),(0,a.kt)("p",null,"In a controller class, each query method must be annotated with the ",(0,a.kt)("inlineCode",{parentName:"p"},"@Query")," annotation. For instance:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\n\nclass MyController\n{\n    /**\n     * @Query\n     */\n    public function hello(string $name): string\n    {\n        return 'Hello ' . $name;\n    }\n}\n")),(0,a.kt)("p",null,"This query is equivalent to the following ",(0,a.kt)("a",{parentName:"p",href:"https://graphql.org/learn/schema/#type-language"},"GraphQL type language"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"Type Query {\n    hello(name: String!): String!\n}\n")),(0,a.kt)("p",null,"As you can see, GraphQLite will automatically do the mapping between PHP types and GraphQL types."),(0,a.kt)("div",{class:"alert alert--warning"},(0,a.kt)("strong",null,"Heads up!")," If you are not using a framework with an autowiring container (like Symfony or Laravel), please be aware that the ",(0,a.kt)("code",null,"MyController")," class must exist in the container of your application. Furthermore, the identifier of the controller in the container MUST be the fully qualified class name of controller."),(0,a.kt)("h2",{id:"testing-the-query"},"Testing the query"),(0,a.kt)("p",null,"The default GraphQL endpoint is ",(0,a.kt)("inlineCode",{parentName:"p"},"/graphql"),"."),(0,a.kt)("p",null,"The easiest way to test a GraphQL endpoint is to use ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/graphql/graphiql"},"GraphiQL")," or\n",(0,a.kt)("a",{parentName:"p",href:"https://altair.sirmuel.design/"},"Altair")," clients (they are available as Chrome or Firefox plugins)"),(0,a.kt)("div",{class:"alert alert--info"},"If you are using the Symfony bundle, GraphiQL is also directly embedded.",(0,a.kt)("br",null),"Simply head to ",(0,a.kt)("code",null,"http://[path-to-my-app]/graphiql")),(0,a.kt)("p",null,"Here a query using our simple ",(0,a.kt)("em",{parentName:"p"},"Hello World")," example:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(91410).Z,width:"1132",height:"352"})),(0,a.kt)("h2",{id:"query-with-a-type"},"Query with a type"),(0,a.kt)("p",null,"So far, we simply declared a query. But we did not yet declare a type."),(0,a.kt)("p",null,"Let's assume you want to return a product:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\n\nclass ProductController\n{\n    /**\n     * @Query\n     */\n    public function product(string $id): Product\n    {\n        // Some code that looks for a product and returns it.\n    }\n}\n")),(0,a.kt)("p",null,"As the ",(0,a.kt)("inlineCode",{parentName:"p"},"Product")," class is not a scalar type, you must tell GraphQLite how to handle it:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\n/**\n * @Type()\n */\nclass Product\n{\n    // ...\n\n    /**\n     * @Field()\n     */\n    public function getName(): string\n    {\n        return $this->name;\n    }\n\n    /**\n     * @Field()\n     */\n    public function getPrice(): ?float\n    {\n        return $this->price;\n    }\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@Type")," annotation is used to inform GraphQLite that the ",(0,a.kt)("inlineCode",{parentName:"p"},"Product")," class is a GraphQL type."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"@Field")," annotation is used to define the GraphQL fields. This annotation must be put on a ",(0,a.kt)("strong",{parentName:"p"},"public method"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Product")," class must be in one of the ",(0,a.kt)("em",{parentName:"p"},"types")," namespaces. As for ",(0,a.kt)("em",{parentName:"p"},"controller")," classes, you configured this namespace when you installed\nGraphQLite. By default, in Symfony, the allowed types namespaces are ",(0,a.kt)("inlineCode",{parentName:"p"},"App\\Entity")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"App\\Types"),"."),(0,a.kt)("p",null,"This query is equivalent to the following ",(0,a.kt)("a",{parentName:"p",href:"https://graphql.org/learn/schema/#type-language"},"GraphQL type language"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-graphql"},"Type Product {\n    name: String!\n    price: Float\n}\n")),(0,a.kt)("div",{class:"alert alert--info"},(0,a.kt)("p",null,"If you are used to  ",(0,a.kt)("a",{href:"https://en.wikipedia.org/wiki/Domain-driven_design"},"Domain driven design"),", you probably realize that the ",(0,a.kt)("code",null,"Product")," class is part of your ",(0,a.kt)("i",null,"domain"),"."),(0,a.kt)("p",null,"GraphQL annotations are adding some serialization logic that is out of scope of the domain. These are ",(0,a.kt)("i",null,"just")," annotations and for most project, this is the fastest and easiest route."),(0,a.kt)("p",null,"If you feel that GraphQL annotations do not belong to the domain, or if you cannot modify the class directly (maybe because it is part of a third party library), there is another way to create types without annotating the domain class. We will explore that in the next chapter.")))}c.isMDXComponent=!0},91410:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/query1-5a22bbe2398efcc725ea571a07ff2c9b.png"}}]);