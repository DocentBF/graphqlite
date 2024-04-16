"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7696],{46284:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>g});var n=a(58168),i=(a(96540),a(15680));a(67443);const o={id:"migrating",title:"Migrating",sidebar_label:"Migrating"},r=void 0,l={unversionedId:"migrating",id:"version-6.0/migrating",title:"Migrating",description:"Migrating from v4.0 to v4.1",source:"@site/versioned_docs/version-6.0/migrating.md",sourceDirName:".",slug:"/migrating",permalink:"/docs/6.0/migrating",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-6.0/migrating.md",tags:[],version:"6.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1713234680,formattedLastUpdatedAt:"Apr 16, 2024",frontMatter:{id:"migrating",title:"Migrating",sidebar_label:"Migrating"},sidebar:"docs",previous:{title:"Troubleshooting",permalink:"/docs/6.0/troubleshooting"},next:{title:"Annotations VS Attributes",permalink:"/docs/6.0/doctrine-annotations-attributes"}},s={},g=[{value:"Migrating from v4.0 to v4.1",id:"migrating-from-v40-to-v41",level:2},{value:"Migrating from v3.0 to v4.0",id:"migrating-from-v30-to-v40",level:2}],d={toc:g},p="wrapper";function u(e){let{components:t,...a}=e;return(0,i.yg)(p,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"migrating-from-v40-to-v41"},"Migrating from v4.0 to v4.1"),(0,i.yg)("p",null,"GraphQLite follows Semantic Versioning. GraphQLite 4.1 is backward compatible with GraphQLite 4.0. See\n",(0,i.yg)("a",{parentName:"p",href:"/docs/6.0/semver"},"semantic versioning")," for more details."),(0,i.yg)("p",null,"There is one exception though: the ",(0,i.yg)("strong",{parentName:"p"},"ecodev/graphql-upload"),' package (used to get support for file uploads in GraphQL\ninput types) is now a "recommended" dependency only.\nIf you are using GraphQL file uploads, you need to add ',(0,i.yg)("inlineCode",{parentName:"p"},"ecodev/graphql-upload")," to your ",(0,i.yg)("inlineCode",{parentName:"p"},"composer.json")," by running this command:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-console"},"$ composer require ecodev/graphql-upload\n")),(0,i.yg)("h2",{id:"migrating-from-v30-to-v40"},"Migrating from v3.0 to v4.0"),(0,i.yg)("p",null,'If you are a "regular" GraphQLite user, migration to v4 should be straightforward:'),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Annotations are mostly untouched. The only annotation that is changed is the ",(0,i.yg)("inlineCode",{parentName:"li"},"@SourceField")," annotation.",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Check your code for every places where you use the ",(0,i.yg)("inlineCode",{parentName:"li"},"@SourceField")," annotation:"),(0,i.yg)("li",{parentName:"ul"},'The "id" attribute has been remove (',(0,i.yg)("inlineCode",{parentName:"li"},"@SourceField(id=true)"),"). Instead, use ",(0,i.yg)("inlineCode",{parentName:"li"},'@SourceField(outputType="ID")')),(0,i.yg)("li",{parentName:"ul"},'The "logged", "right" and "failWith" attributes have been removed (',(0,i.yg)("inlineCode",{parentName:"li"},"@SourceField(logged=true)"),").\nInstead, use the annotations attribute with the same annotations you use for the ",(0,i.yg)("inlineCode",{parentName:"li"},"@Field")," annotation:\n",(0,i.yg)("inlineCode",{parentName:"li"},"@SourceField(annotations={@Logged, @FailWith(null)})")),(0,i.yg)("li",{parentName:"ul"},"If you use magic property and were creating a getter for every magic property (to put a ",(0,i.yg)("inlineCode",{parentName:"li"},"@Field")," annotation on it),\nyou can now replace this getter with a ",(0,i.yg)("inlineCode",{parentName:"li"},"@MagicField")," annotation."))),(0,i.yg)("li",{parentName:"ul"},"In GraphQLite v3, the default was to hide a field from the schema if a user has no access to it.\nIn GraphQLite v4, the default is to still show this field, but to throw an error if the user makes a query on it\n(this way, the schema is the same for all users). If you want the old mode, use the new\n",(0,i.yg)("a",{parentName:"li",href:"/docs/6.0/annotations-reference#hideifunauthorized-annotation"},(0,i.yg)("inlineCode",{parentName:"a"},"@HideIfUnauthorized")," annotation")),(0,i.yg)("li",{parentName:"ul"},"If you are using the Symfony bundle, the Laravel package or the Universal module, you must also upgrade those to 4.0.\nThese package will take care of the wiring for you. Apart for upgrading the packages, you have nothing to do."),(0,i.yg)("li",{parentName:"ul"},"If you are relying on the ",(0,i.yg)("inlineCode",{parentName:"li"},"SchemaFactory")," to bootstrap GraphQLite, you have nothing to do.")),(0,i.yg)("p",null,"On the other hand, if you are a power user and if you are wiring GraphQLite services yourself (without using the\n",(0,i.yg)("inlineCode",{parentName:"p"},"SchemaFactory"),') or if you implemented custom "TypeMappers", you will need to adapt your code:'),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"FieldsBuilderFactory")," is gone. Directly instantiate ",(0,i.yg)("inlineCode",{parentName:"li"},"FieldsBuilder")," in v4."),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"CompositeTypeMapper")," class has no more constructor arguments. Use the ",(0,i.yg)("inlineCode",{parentName:"li"},"addTypeMapper")," method to register\ntype mappers in it."),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"FieldsBuilder")," now accept an extra argument: the ",(0,i.yg)("inlineCode",{parentName:"li"},"RootTypeMapper")," that you need to instantiate accordingly. Take\na look at the ",(0,i.yg)("inlineCode",{parentName:"li"},"SchemaFactory")," class for an example of proper configuration."),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"HydratorInterface")," and all implementations are gone. When returning an input object from a TypeMapper, the object\nmust now implement the ",(0,i.yg)("inlineCode",{parentName:"li"},"ResolvableMutableInputInterface")," (an input object type that contains its own resolver)")),(0,i.yg)("p",null,"Note: we strongly recommend to use the Symfony bundle, the Laravel package, the Universal module or the SchemaManager\nto bootstrap GraphQLite. Wiring directly GraphQLite classes (like the ",(0,i.yg)("inlineCode",{parentName:"p"},"FieldsBuilder"),") into your container is not recommended,\nas the signature of the constructor of those classes may vary from one minor release to another.\nUse the ",(0,i.yg)("inlineCode",{parentName:"p"},"SchemaManager")," instead."))}u.isMDXComponent=!0}}]);