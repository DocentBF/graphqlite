"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2960],{9348:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>p,contentTitle:()=>r,default:()=>g,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var t=n(5072),i=(n(1504),n(5788));n(5490);const l={id:"changelog",title:"Changelog",sidebar_label:"Changelog"},r=void 0,o={unversionedId:"changelog",id:"version-4.2/changelog",title:"Changelog",description:"4.2.0",source:"@site/versioned_docs/version-4.2/CHANGELOG.md",sourceDirName:".",slug:"/changelog",permalink:"/docs/4.2/changelog",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.2/CHANGELOG.md",tags:[],version:"4.2",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1707165871,formattedLastUpdatedAt:"Feb 5, 2024",frontMatter:{id:"changelog",title:"Changelog",sidebar_label:"Changelog"},sidebar:"version-4.2/docs",previous:{title:"Semantic versioning",permalink:"/docs/4.2/semver"}},p={},d=[{value:"4.2.0",id:"420",level:2},{value:"Breaking change:",id:"breaking-change",level:4},{value:"New features:",id:"new-features",level:4},{value:"4.1.0",id:"410",level:2},{value:"Breaking change:",id:"breaking-change-1",level:4},{value:"New features:",id:"new-features-1",level:4},{value:"Minor changes:",id:"minor-changes",level:4},{value:"Miscellaneous:",id:"miscellaneous",level:4},{value:"4.0.0",id:"400",level:2},{value:"New features:",id:"new-features-2",level:4},{value:"Symfony:",id:"symfony",level:4},{value:"Laravel:",id:"laravel",level:4},{value:"Internals:",id:"internals",level:4}],s={toc:d},u="wrapper";function g(e){let{components:a,...n}=e;return(0,i.yg)(u,(0,t.c)({},s,n,{components:a,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"420"},"4.2.0"),(0,i.yg)("h4",{id:"breaking-change"},"Breaking change:"),(0,i.yg)("p",null,"The method signature for ",(0,i.yg)("inlineCode",{parentName:"p"},"toGraphQLOutputType")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"toGraphQLInputType")," have been changed to the following:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},"/**\n * @param \\ReflectionMethod|\\ReflectionProperty $reflector\n */\npublic function toGraphQLOutputType(Type $type, ?OutputType $subType, $reflector, DocBlock $docBlockObj): OutputType;\n\n/**\n * @param \\ReflectionMethod|\\ReflectionProperty $reflector\n */\npublic function toGraphQLInputType(Type $type, ?InputType $subType, string $argumentName, $reflector, DocBlock $docBlockObj): InputType;\n")),(0,i.yg)("h4",{id:"new-features"},"New features:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/docs/4.2/annotations-reference#input-annotation"},"@Input")," annotation is introduced as an alternative to ",(0,i.yg)("inlineCode",{parentName:"li"},"@Factory"),". Now GraphQL input type can be created in the same manner as ",(0,i.yg)("inlineCode",{parentName:"li"},"@Type")," in combination with ",(0,i.yg)("inlineCode",{parentName:"li"},"@Field")," - ",(0,i.yg)("a",{parentName:"li",href:"/docs/4.2/input-types#input-annotation"},"example"),"."),(0,i.yg)("li",{parentName:"ul"},"New attributes has been added to ",(0,i.yg)("a",{parentName:"li",href:"/docs/4.2/annotations-reference#field-annotation"},"@Field")," annotation: ",(0,i.yg)("inlineCode",{parentName:"li"},"for"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"inputType")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"description"),"."),(0,i.yg)("li",{parentName:"ul"},"The following annotations now can be applied to class properties directly: ",(0,i.yg)("inlineCode",{parentName:"li"},"@Field"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"@Logged"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"@Right"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"@FailWith"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"@HideIfUnauthorized")," and ",(0,i.yg)("inlineCode",{parentName:"li"},"@Security"),".")),(0,i.yg)("h2",{id:"410"},"4.1.0"),(0,i.yg)("h4",{id:"breaking-change-1"},"Breaking change:"),(0,i.yg)("p",null,"There is one breaking change introduced in the minor version (this was important to allow PHP 8 compatibility)."),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("strong",{parentName:"li"},"ecodev/graphql-upload"),' package (used to get support for file uploads in GraphQL input types) is now a "recommended" dependency only.\nIf you are using GraphQL file uploads, you need to add ',(0,i.yg)("inlineCode",{parentName:"li"},"ecodev/graphql-upload")," to your ",(0,i.yg)("inlineCode",{parentName:"li"},"composer.json"),".")),(0,i.yg)("h4",{id:"new-features-1"},"New features:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"All annotations can now be accessed as PHP 8 attributes"),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"@deprecated")," annotation in your PHP code translates into deprecated fields in your GraphQL schema"),(0,i.yg)("li",{parentName:"ul"},"You can now specify the GraphQL name of the Enum types you define"),(0,i.yg)("li",{parentName:"ul"},"Added the possibility to inject pure Webonyx objects in GraphQLite schema")),(0,i.yg)("h4",{id:"minor-changes"},"Minor changes:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Migrated from ",(0,i.yg)("inlineCode",{parentName:"li"},"zend/diactoros")," to ",(0,i.yg)("inlineCode",{parentName:"li"},"laminas/diactoros")),(0,i.yg)("li",{parentName:"ul"},"Making the annotation cache directory configurable")),(0,i.yg)("h4",{id:"miscellaneous"},"Miscellaneous:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Migrated from Travis to Github actions")),(0,i.yg)("h2",{id:"400"},"4.0.0"),(0,i.yg)("p",null,"This is a complete refactoring from 3.x. While existing annotations are kept compatible, the internals have completely\nchanged."),(0,i.yg)("h4",{id:"new-features-2"},"New features:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"You can directly ",(0,i.yg)("a",{parentName:"li",href:"/docs/4.2/inheritance-interfaces#mapping-interfaces"},"annotate a PHP interface with ",(0,i.yg)("inlineCode",{parentName:"a"},"@Type")," to make it a GraphQL interface")),(0,i.yg)("li",{parentName:"ul"},"You can autowire services in resolvers, thanks to the new ",(0,i.yg)("inlineCode",{parentName:"li"},"@Autowire")," annotation"),(0,i.yg)("li",{parentName:"ul"},"Added ",(0,i.yg)("a",{parentName:"li",href:"/docs/4.2/validation"},"user input validation")," (using the Symfony Validator or the Laravel validator or a custom ",(0,i.yg)("inlineCode",{parentName:"li"},"@Assertion")," annotation"),(0,i.yg)("li",{parentName:"ul"},"Improved security handling:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"Unauthorized access to fields can now generate GraphQL errors (rather that schema errors in GraphQLite v3)"),(0,i.yg)("li",{parentName:"ul"},"Added fine-grained security using the ",(0,i.yg)("inlineCode",{parentName:"li"},"@Security")," annotation. A field can now be ",(0,i.yg)("a",{parentName:"li",href:"/docs/4.2/fine-grained-security"},"marked accessible or not depending on the context"),'.\nFor instance, you can restrict access to the field "viewsCount" of the type ',(0,i.yg)("inlineCode",{parentName:"li"},"BlogPost")," only for post that the current user wrote."),(0,i.yg)("li",{parentName:"ul"},"You can now inject the current logged user in any query / mutation / field using the ",(0,i.yg)("inlineCode",{parentName:"li"},"@InjectUser")," annotation"))),(0,i.yg)("li",{parentName:"ul"},"Performance:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"You can inject the ",(0,i.yg)("a",{parentName:"li",href:"/docs/4.2/query-plan"},"Webonyx query plan in a parameter from a resolver")),(0,i.yg)("li",{parentName:"ul"},"You can use the ",(0,i.yg)("a",{parentName:"li",href:"/docs/4.2/prefetch-method"},'dataloader pattern to improve performance drastically via the "prefetchMethod" attribute')))),(0,i.yg)("li",{parentName:"ul"},"Customizable error handling has been added:",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},"You can throw ",(0,i.yg)("a",{parentName:"li",href:"/docs/4.2/error-handling#many-errors-for-one-exception"},"many errors in one exception")," with ",(0,i.yg)("inlineCode",{parentName:"li"},"TheCodingMachine\\GraphQLite\\Exceptions\\GraphQLAggregateException")))),(0,i.yg)("li",{parentName:"ul"},"You can force input types using ",(0,i.yg)("inlineCode",{parentName:"li"},'@UseInputType(for="$id", inputType="ID!")')),(0,i.yg)("li",{parentName:"ul"},"You can extend an input types (just like you could extend an output type in v3) using ",(0,i.yg)("a",{parentName:"li",href:"/docs/4.2/extend-input-type"},"the new ",(0,i.yg)("inlineCode",{parentName:"a"},"@Decorate")," annotation")),(0,i.yg)("li",{parentName:"ul"},"In a factory, you can ",(0,i.yg)("a",{parentName:"li",href:"input-types#ignoring-some-parameters"},"exclude some optional parameters from the GraphQL schema"))),(0,i.yg)("p",null,"Many extension points have been added"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},'Added a "root type mapper" (useful to map scalar types to PHP types or to add custom annotations related to resolvers)'),(0,i.yg)("li",{parentName:"ul"},"Added ",(0,i.yg)("a",{parentName:"li",href:"/docs/4.2/field-middlewares"},'"field middlewares"')," (useful to add middleware that modify the way GraphQL fields are handled)"),(0,i.yg)("li",{parentName:"ul"},"Added a ",(0,i.yg)("a",{parentName:"li",href:"/docs/4.2/argument-resolving"},'"parameter type mapper"')," (useful to add customize parameter resolution or add custom annotations related to parameters)")),(0,i.yg)("p",null,"New framework specific features:"),(0,i.yg)("h4",{id:"symfony"},"Symfony:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},'The Symfony bundle now provides a "login" and a "logout" mutation (and also a "me" query)')),(0,i.yg)("h4",{id:"laravel"},"Laravel:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"/docs/4.2/laravel-package-advanced#support-for-pagination"},"Native integration with the Laravel paginator")," has been added")),(0,i.yg)("h4",{id:"internals"},"Internals:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"FieldsBuilder")," class has been split in many different services (",(0,i.yg)("inlineCode",{parentName:"li"},"FieldsBuilder"),", ",(0,i.yg)("inlineCode",{parentName:"li"},"TypeHandler"),", and a\nchain of ",(0,i.yg)("em",{parentName:"li"},"root type mappers"),")"),(0,i.yg)("li",{parentName:"ul"},"The ",(0,i.yg)("inlineCode",{parentName:"li"},"FieldsBuilderFactory")," class has been completely removed."),(0,i.yg)("li",{parentName:"ul"},"Overall, there is not much in common internally between 4.x and 3.x. 4.x is much more flexible with many more hook points\nthan 3.x. Try it out!")))}g.isMDXComponent=!0}}]);