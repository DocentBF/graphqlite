"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3368],{2220:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var p=t(7462),r=(t(7294),t(3905)),n=t(1839);const i={id:"internals",title:"Internals",sidebar_label:"Internals"},s=void 0,l={unversionedId:"internals",id:"internals",title:"Internals",description:"Mapping types",source:"@site/docs/internals.md",sourceDirName:".",slug:"/internals",permalink:"/docs/next/internals",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/docs/internals.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1683288559,formattedLastUpdatedAt:"May 5, 2023",frontMatter:{id:"internals",title:"Internals",sidebar_label:"Internals"},sidebar:"docs",previous:{title:"Laravel specific features",permalink:"/docs/next/laravel-package-advanced"},next:{title:"Troubleshooting",permalink:"/docs/next/troubleshooting"}},o={},m=[{value:"Mapping types",id:"mapping-types",level:2},{value:"Root type mappers",id:"root-type-mappers",level:2},{value:"Class type mappers",id:"class-type-mappers",level:2},{value:"Registering a type mapper in Symfony",id:"registering-a-type-mapper-in-symfony",level:3},{value:"Registering a type mapper using the SchemaFactory",id:"registering-a-type-mapper-using-the-schemafactory",level:3},{value:"Recursive type mappers",id:"recursive-type-mappers",level:2},{value:"Parameter mapper middlewares",id:"parameter-mapper-middlewares",level:2}],y={toc:m},u="wrapper";function c(e){let{components:a,...t}=e;return(0,r.kt)(u,(0,p.Z)({},y,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"mapping-types"},"Mapping types"),(0,r.kt)("p",null,'The core of GraphQLite is its ability to map PHP types to GraphQL types. This mapping is performed by a series of\n"type mappers".'),(0,r.kt)("p",null,"GraphQLite contains 4 categories of type mappers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Parameter mappers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Root type mappers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Recursive (class) type mappers")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"(class) type mappers"))),(0,r.kt)(n.G,{chart:"graph TD;\n  classDef custom fill:#cfc,stroke:#7a7,stroke-width:2px,stroke-dasharray: 5, 5;\n  subgraph RootTypeMapperInterface\n    NullableTypeMapperAdapter--\x3eCompoundTypeMapper\n    IteratorTypeMapper--\x3eYourCustomRootTypeMapper\n    CompoundTypeMapper--\x3eIteratorTypeMapper\n    YourCustomRootTypeMapper--\x3eMyCLabsEnumTypeMapper\n    MyCLabsEnumTypeMapper--\x3eEnumTypeMapper\n    EnumTypeMapper--\x3eBaseTypeMapper\n    BaseTypeMapper--\x3eFinalRootTypeMapper\n  end\n  subgraph RecursiveTypeMapperInterface\n    BaseTypeMapper--\x3eRecursiveTypeMapper\n  end\n  subgraph TypeMapperInterface\n    RecursiveTypeMapper--\x3eYourCustomTypeMapper\n    YourCustomTypeMapper--\x3ePorpaginasTypeMapper\n    PorpaginasTypeMapper--\x3eGlobTypeMapper\n  end\n  class YourCustomRootTypeMapper,YourCustomTypeMapper custom;",mdxType:"Mermaid"}),(0,r.kt)("h2",{id:"root-type-mappers"},"Root type mappers"),(0,r.kt)("p",null,"(Classes implementing the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/thecodingmachine/graphqlite/blob/master/src/Mappers/Root/RootTypeMapperInterface.php"},(0,r.kt)("inlineCode",{parentName:"a"},"RootTypeMapperInterface")),")"),(0,r.kt)("p",null,"These type mappers are the first type mappers called."),(0,r.kt)("p",null,"They are responsible for:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'mapping scalar types (for instance mapping the "int" PHP type to GraphQL Integer type)'),(0,r.kt)("li",{parentName:"ul"},'detecting nullable/non-nullable types (for instance interpreting "?int" or "int|null")'),(0,r.kt)("li",{parentName:"ul"},"mapping list types (mapping a PHP array to a GraphQL list)"),(0,r.kt)("li",{parentName:"ul"},"mapping union types"),(0,r.kt)("li",{parentName:"ul"},"mapping enums")),(0,r.kt)("p",null,"Root type mappers have access to the ",(0,r.kt)("em",{parentName:"p"},"context"),' of a type: they can access the PHP DocBlock and read annotations.\nIf you want to write a custom type mapper that needs access to annotations, it needs to be a "root type mapper".'),(0,r.kt)("p",null,"GraphQLite provides 6 classes implementing ",(0,r.kt)("inlineCode",{parentName:"p"},"RootTypeMapperInterface"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"NullableTypeMapperAdapter"),": a type mapper in charge of making GraphQL types non-nullable if the PHP type is non-nullable"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"IteratorTypeMapper"),": a type mapper in charge of iterable types (for instance: ",(0,r.kt)("inlineCode",{parentName:"li"},"MyIterator|User[]"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CompoundTypeMapper"),": a type mapper in charge of union types"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MyCLabsEnumTypeMapper"),": maps MyCLabs/enum types to GraphQL enum types (Deprecated: use native enums)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"EnumTypeMapper"),": maps PHP enums to GraphQL enum types"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"BaseTypeMapper"),': maps scalar types and lists. Passes the control to the "recursive type mappers" if an object is encountered.'),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FinalRootTypeMapper"),": the last type mapper of the chain, used to throw error if no other type mapper managed to handle the type.")),(0,r.kt)("p",null,"Type mappers are organized in a chain; each type-mapper is responsible for calling the next type mapper."),(0,r.kt)(n.G,{chart:"graph TD;\n  classDef custom fill:#cfc,stroke:#7a7,stroke-width:2px,stroke-dasharray: 5, 5;\n  subgraph RootTypeMapperInterface\n    NullableTypeMapperAdapter--\x3eCompoundTypeMapper\n    CompoundTypeMapper--\x3eIteratorTypeMapper\n    IteratorTypeMapper--\x3eYourCustomRootTypeMapper\n    YourCustomRootTypeMapper--\x3eMyCLabsEnumTypeMapper\n    MyCLabsEnumTypeMapper--\x3eEnumTypeMapper\n    EnumTypeMapper--\x3eBaseTypeMapper\n    BaseTypeMapper--\x3eFinalRootTypeMapper\n  end\n  class YourCustomRootTypeMapper custom;",mdxType:"Mermaid"}),(0,r.kt)("h2",{id:"class-type-mappers"},"Class type mappers"),(0,r.kt)("p",null,"(Classes implementing the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/thecodingmachine/graphqlite/blob/master/src/Mappers/TypeMapperInterface.php"},(0,r.kt)("inlineCode",{parentName:"a"},"TypeMapperInterface")),")"),(0,r.kt)("p",null,"Class type mappers are mapping PHP classes to GraphQL object types."),(0,r.kt)("p",null,"GraphQLite provide 3 default implementations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CompositeTypeMapper"),": a type mapper that delegates mapping to other type mappers using the Composite Design Pattern."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"GlobTypeMapper"),": scans classes in a directory for the ",(0,r.kt)("inlineCode",{parentName:"li"},"@Type")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"@ExtendType")," annotation and maps those to GraphQL types"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"PorpaginasTypeMapper"),": maps and class implementing the Porpaginas ",(0,r.kt)("inlineCode",{parentName:"li"},"Result")," interface to a ",(0,r.kt)("a",{parentName:"li",href:"/docs/next/pagination"},"special paginated type"),".")),(0,r.kt)("h3",{id:"registering-a-type-mapper-in-symfony"},"Registering a type mapper in Symfony"),(0,r.kt)("p",null,'If you are using the GraphQLite Symfony bundle, you can register a type mapper by tagging the service with the "graphql.type_mapper" tag.'),(0,r.kt)("h3",{id:"registering-a-type-mapper-using-the-schemafactory"},"Registering a type mapper using the SchemaFactory"),(0,r.kt)("p",null,"If you are using the ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaFactory")," to bootstrap GraphQLite, you can register a type mapper using the ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaFactory::addTypeMapper")," method."),(0,r.kt)("h2",{id:"recursive-type-mappers"},"Recursive type mappers"),(0,r.kt)("p",null,"(Classes implementing the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/thecodingmachine/graphqlite/blob/master/src/Mappers/RecursiveTypeMapperInterface.php"},(0,r.kt)("inlineCode",{parentName:"a"},"RecursiveTypeMapperInterface")),")"),(0,r.kt)("p",null,"There is only one implementation of the ",(0,r.kt)("inlineCode",{parentName:"p"},"RecursiveTypeMapperInterface"),": the ",(0,r.kt)("inlineCode",{parentName:"p"},"RecursiveTypeMapper"),"."),(0,r.kt)("p",null,'Standard "class type mappers" are mapping a given PHP class to a GraphQL type. But they do not handle class hierarchies.\nThis is the role of the "recursive type mapper".'),(0,r.kt)("p",null,'Imagine that class "B" extends class "A" and class "A" maps to GraphQL type "AType".'),(0,r.kt)("p",null,'Since "B" ',(0,r.kt)("em",{parentName:"p"},"is a"),' "A", the "recursive type mapper" role is to make sure that "B" will also map to GraphQL type "AType".'),(0,r.kt)("h2",{id:"parameter-mapper-middlewares"},"Parameter mapper middlewares"),(0,r.kt)("p",null,'"Parameter middlewares" are used to decide what argument should be injected into a parameter.'),(0,r.kt)("p",null,"Let's have a look at a simple query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Query\n * @return Product[]\n */\npublic function products(ResolveInfo $info): array\n")),(0,r.kt)("p",null,"As you may know, ",(0,r.kt)("a",{parentName:"p",href:"/docs/next/query-plan"},"the ",(0,r.kt)("inlineCode",{parentName:"a"},"ResolveInfo")," object injected in this query comes from Webonyx/GraphQL-PHP library"),".\nGraphQLite knows that is must inject a ",(0,r.kt)("inlineCode",{parentName:"p"},"ResolveInfo")," instance because it comes with a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/thecodingmachine/graphqlite/blob/master/src/Mappers/Parameters/ResolveInfoParameterHandler.php"},(0,r.kt)("inlineCode",{parentName:"a"},"ResolveInfoParameterHandler"))," class\nthat implements the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/thecodingmachine/graphqlite/blob/master/src/Mappers/Parameters/ParameterMiddlewareInterface.php"},(0,r.kt)("inlineCode",{parentName:"a"},"ParameterMiddlewareInterface")),")."),(0,r.kt)("p",null,"You can register your own parameter middlewares using the ",(0,r.kt)("inlineCode",{parentName:"p"},"SchemaFactory::addParameterMiddleware()"),' method, or by tagging the\nservice as "graphql.parameter_middleware" if you are using the Symfony bundle.'),(0,r.kt)("div",{class:"alert alert--info"},"Use a parameter middleware if you want to inject an argument in a method and if this argument is not a GraphQL input type or if you want to alter the way input types are imported (for instance if you want to add a validation step)"))}c.isMDXComponent=!0}}]);