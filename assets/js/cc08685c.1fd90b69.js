"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5515],{604:(e,a,p)=>{p.r(a),p.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>y});var t=p(58168),r=(p(96540),p(15680)),n=p(67443);const i={id:"internals",title:"Internals",sidebar_label:"Internals"},s=void 0,o={unversionedId:"internals",id:"version-4.2/internals",title:"Internals",description:"Mapping types",source:"@site/versioned_docs/version-4.2/internals.md",sourceDirName:".",slug:"/internals",permalink:"/docs/4.2/internals",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.2/internals.md",tags:[],version:"4.2",lastUpdatedBy:"Shish",lastUpdatedAt:1713496106,formattedLastUpdatedAt:"Apr 19, 2024",frontMatter:{id:"internals",title:"Internals",sidebar_label:"Internals"},sidebar:"version-4.2/docs",previous:{title:"Laravel specific features",permalink:"/docs/4.2/laravel-package-advanced"},next:{title:"Troubleshooting",permalink:"/docs/4.2/troubleshooting"}},l={},y=[{value:"Mapping types",id:"mapping-types",level:2},{value:"Root type mappers",id:"root-type-mappers",level:2},{value:"Class type mappers",id:"class-type-mappers",level:2},{value:"Registering a type mapper in Symfony",id:"registering-a-type-mapper-in-symfony",level:3},{value:"Registering a type mapper using the SchemaFactory",id:"registering-a-type-mapper-using-the-schemafactory",level:3},{value:"Recursive type mappers",id:"recursive-type-mappers",level:2},{value:"Parameter mapper middlewares",id:"parameter-mapper-middlewares",level:2}],m={toc:y},g="wrapper";function u(e){let{components:a,...p}=e;return(0,r.yg)(g,(0,t.A)({},m,p,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"mapping-types"},"Mapping types"),(0,r.yg)("p",null,'The core of GraphQLite is its ability to map PHP types to GraphQL types. This mapping is performed by a series of\n"type mappers".'),(0,r.yg)("p",null,"GraphQLite contains 4 categories of type mappers:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Parameter mappers")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Root type mappers")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"Recursive (class) type mappers")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("strong",{parentName:"li"},"(class) type mappers"))),(0,r.yg)(n.K,{chart:"graph TD;\n  classDef custom fill:#cfc,stroke:#7a7,stroke-width:2px,stroke-dasharray: 5, 5;\n  subgraph RootTypeMapperInterface\n    NullableTypeMapperAdapter--\x3eCompoundTypeMapper\n    CompoundTypeMapper--\x3eIteratorTypeMapper\n    IteratorTypeMapper--\x3eYourCustomRootTypeMapper\n    YourCustomRootTypeMapper--\x3eMyCLabsEnumTypeMapper\n    MyCLabsEnumTypeMapper--\x3eBaseTypeMapper\n    BaseTypeMapper--\x3eFinalRootTypeMapper\n  end\n  subgraph RecursiveTypeMapperInterface\n    BaseTypeMapper--\x3eRecursiveTypeMapper\n  end\n  subgraph TypeMapperInterface\n    RecursiveTypeMapper--\x3eYourCustomTypeMapper\n    YourCustomTypeMapper--\x3ePorpaginasTypeMapper\n    PorpaginasTypeMapper--\x3eGlobTypeMapper\n  end\n  class YourCustomRootTypeMapper,YourCustomTypeMapper custom;",mdxType:"Mermaid"}),(0,r.yg)("h2",{id:"root-type-mappers"},"Root type mappers"),(0,r.yg)("p",null,"(Classes implementing the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/thecodingmachine/graphqlite/blob/master/src/Mappers/Root/RootTypeMapperInterface.php"},(0,r.yg)("inlineCode",{parentName:"a"},"RootTypeMapperInterface")),")"),(0,r.yg)("p",null,"These type mappers are the first type mappers called."),(0,r.yg)("p",null,"They are responsible for:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},'mapping scalar types (for instance mapping the "int" PHP type to GraphQL Integer type)'),(0,r.yg)("li",{parentName:"ul"},'detecting nullable/non-nullable types (for instance interpreting "?int" or "int|null")'),(0,r.yg)("li",{parentName:"ul"},"mapping list types (mapping a PHP array to a GraphQL list)"),(0,r.yg)("li",{parentName:"ul"},"mapping union types"),(0,r.yg)("li",{parentName:"ul"},"mapping enums")),(0,r.yg)("p",null,"Root type mappers have access to the ",(0,r.yg)("em",{parentName:"p"},"context"),' of a type: they can access the PHP DocBlock and read annotations.\nIf you want to write a custom type mapper that needs access to annotations, it needs to be a "root type mapper".'),(0,r.yg)("p",null,"GraphQLite provides 6 classes implementing ",(0,r.yg)("inlineCode",{parentName:"p"},"RootTypeMapperInterface"),":"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"NullableTypeMapperAdapter"),": a type mapper in charge of making GraphQL types non-nullable if the PHP type is non-nullable"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"CompoundTypeMapper"),": a type mapper in charge of union types"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"IteratorTypeMapper"),": a type mapper in charge of iterable types (for instance: ",(0,r.yg)("inlineCode",{parentName:"li"},"MyIterator|User[]"),")"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"MyCLabsEnumTypeMapper"),": maps MyCLabs/enum types to GraphQL enum types"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"BaseTypeMapper"),': maps scalar types and lists. Passes the control to the "recursive type mappers" if an object is encountered.'),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"FinalRootTypeMapper"),": the last type mapper of the chain, used to throw error if no other type mapper managed to handle the type.")),(0,r.yg)("p",null,"Type mappers are organized in a chain; each type-mapper is responsible for calling the next type mapper."),(0,r.yg)(n.K,{chart:"graph TD;\n  classDef custom fill:#cfc,stroke:#7a7,stroke-width:2px,stroke-dasharray: 5, 5;\n  subgraph RootTypeMapperInterface\n    NullableTypeMapperAdapter--\x3eCompoundTypeMapper\n    CompoundTypeMapper--\x3eIteratorTypeMapper\n    IteratorTypeMapper--\x3eYourCustomRootTypeMapper\n    YourCustomRootTypeMapper--\x3eMyCLabsEnumTypeMapper\n    MyCLabsEnumTypeMapper--\x3eBaseTypeMapper\n    BaseTypeMapper--\x3eFinalRootTypeMapper\n  end\n  class YourCustomRootTypeMapper custom;",mdxType:"Mermaid"}),(0,r.yg)("h2",{id:"class-type-mappers"},"Class type mappers"),(0,r.yg)("p",null,"(Classes implementing the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/thecodingmachine/graphqlite/blob/master/src/Mappers/TypeMapperInterface.php"},(0,r.yg)("inlineCode",{parentName:"a"},"TypeMapperInterface")),")"),(0,r.yg)("p",null,"Class type mappers are mapping PHP classes to GraphQL object types."),(0,r.yg)("p",null,"GraphQLite provide 3 default implementations:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"CompositeTypeMapper"),": a type mapper that delegates mapping to other type mappers using the Composite Design Pattern."),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"GlobTypeMapper"),": scans classes in a directory for the ",(0,r.yg)("inlineCode",{parentName:"li"},"@Type")," or ",(0,r.yg)("inlineCode",{parentName:"li"},"@ExtendType")," annotation and maps those to GraphQL types"),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"PorpaginasTypeMapper"),": maps and class implementing the Porpaginas ",(0,r.yg)("inlineCode",{parentName:"li"},"Result")," interface to a ",(0,r.yg)("a",{parentName:"li",href:"/docs/4.2/pagination"},"special paginated type"),".")),(0,r.yg)("h3",{id:"registering-a-type-mapper-in-symfony"},"Registering a type mapper in Symfony"),(0,r.yg)("p",null,'If you are using the GraphQLite Symfony bundle, you can register a type mapper by tagging the service with the "graphql.type_mapper" tag.'),(0,r.yg)("h3",{id:"registering-a-type-mapper-using-the-schemafactory"},"Registering a type mapper using the SchemaFactory"),(0,r.yg)("p",null,"If you are using the ",(0,r.yg)("inlineCode",{parentName:"p"},"SchemaFactory")," to bootstrap GraphQLite, you can register a type mapper using the ",(0,r.yg)("inlineCode",{parentName:"p"},"SchemaFactory::addTypeMapper")," method."),(0,r.yg)("h2",{id:"recursive-type-mappers"},"Recursive type mappers"),(0,r.yg)("p",null,"(Classes implementing the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/thecodingmachine/graphqlite/blob/master/src/Mappers/RecursiveTypeMapperInterface.php"},(0,r.yg)("inlineCode",{parentName:"a"},"RecursiveTypeMapperInterface")),")"),(0,r.yg)("p",null,"There is only one implementation of the ",(0,r.yg)("inlineCode",{parentName:"p"},"RecursiveTypeMapperInterface"),": the ",(0,r.yg)("inlineCode",{parentName:"p"},"RecursiveTypeMapper"),"."),(0,r.yg)("p",null,'Standard "class type mappers" are mapping a given PHP class to a GraphQL type. But they do not handle class hierarchies.\nThis is the role of the "recursive type mapper".'),(0,r.yg)("p",null,'Imagine that class "B" extends class "A" and class "A" maps to GraphQL type "AType".'),(0,r.yg)("p",null,'Since "B" ',(0,r.yg)("em",{parentName:"p"},"is a"),' "A", the "recursive type mapper" role is to make sure that "B" will also map to GraphQL type "AType".'),(0,r.yg)("h2",{id:"parameter-mapper-middlewares"},"Parameter mapper middlewares"),(0,r.yg)("p",null,'"Parameter middlewares" are used to decide what argument should be injected into a parameter.'),(0,r.yg)("p",null,"Let's have a look at a simple query:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"/**\n * @Query\n * @return Product[]\n */\npublic function products(ResolveInfo $info): array\n")),(0,r.yg)("p",null,"As you may know, ",(0,r.yg)("a",{parentName:"p",href:"/docs/4.2/query-plan"},"the ",(0,r.yg)("inlineCode",{parentName:"a"},"ResolveInfo")," object injected in this query comes from Webonyx/GraphQL-PHP library"),".\nGraphQLite knows that is must inject a ",(0,r.yg)("inlineCode",{parentName:"p"},"ResolveInfo")," instance because it comes with a ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/thecodingmachine/graphqlite/blob/master/src/Mappers/Parameters/ResolveInfoParameterHandler.php"},(0,r.yg)("inlineCode",{parentName:"a"},"ResolveInfoParameterHandler"))," class\nthat implements the ",(0,r.yg)("a",{parentName:"p",href:"https://github.com/thecodingmachine/graphqlite/blob/master/src/Mappers/Parameters/ParameterMiddlewareInterface.php"},(0,r.yg)("inlineCode",{parentName:"a"},"ParameterMiddlewareInterface")),")."),(0,r.yg)("p",null,"You can register your own parameter middlewares using the ",(0,r.yg)("inlineCode",{parentName:"p"},"SchemaFactory::addParameterMiddleware()"),' method, or by tagging the\nservice as "graphql.parameter_middleware" if you are using the Symfony bundle.'),(0,r.yg)("div",{class:"alert alert--info"},"Use a parameter middleware if you want to inject an argument in a method and if this argument is not a GraphQL input type or if you want to alter the way input types are imported (for instance if you want to add a validation step)"))}u.isMDXComponent=!0}}]);