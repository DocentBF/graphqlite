"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[650],{3907:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>y,frontMatter:()=>o,metadata:()=>d,toc:()=>s});var a=n(7462),i=(n(7294),n(3905)),l=(n(1839),n(5488)),r=n(5162);const o={id:"extend-input-type",title:"Extending an input type",sidebar_label:"Extending an input type"},p=void 0,d={unversionedId:"extend-input-type",id:"version-4.2/extend-input-type",title:"Extending an input type",description:"Available in GraphQLite 4.0+",source:"@site/versioned_docs/version-4.2/extend-input-type.mdx",sourceDirName:".",slug:"/extend-input-type",permalink:"/docs/4.2/extend-input-type",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.2/extend-input-type.mdx",tags:[],version:"4.2",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1664828204,formattedLastUpdatedAt:"10/3/2022",frontMatter:{id:"extend-input-type",title:"Extending an input type",sidebar_label:"Extending an input type"},sidebar:"version-4.2/docs",previous:{title:"Custom argument resolving",permalink:"/docs/4.2/argument-resolving"},next:{title:"Class with multiple output types",permalink:"/docs/4.2/multiple-output-types"}},u={},s=[],c={toc:s};function y(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("small",null,"Available in GraphQLite 4.0+"),(0,i.kt)("div",{class:"alert alert--info"},"If you are not familiar with the ",(0,i.kt)("code",null,"@Factory")," tag, ",(0,i.kt)("a",{href:"input-types"},'read first the "input types" guide'),"."),(0,i.kt)("p",null,"Fields exposed in a GraphQL input type do not need to be all part of the factory method."),(0,i.kt)("p",null,"Just like with output type (that can be ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.2/extend-type"},"extended using the ",(0,i.kt)("inlineCode",{parentName:"a"},"ExtendType")," annotation"),"), you can extend/modify\nan input type using the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Decorate")," annotation."),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Decorate")," annotation to add additional fields to an input type that is already declared by a ",(0,i.kt)("inlineCode",{parentName:"p"},"@Factory")," annotation,\nor to modify the returned object."),(0,i.kt)("div",{class:"alert alert--info"},"The ",(0,i.kt)("code",null,"@Decorate")," annotation is very useful in scenarios where you cannot touch the ",(0,i.kt)("code",null,"@Factory")," method. This can happen if the ",(0,i.kt)("code",null,"@Factory")," method is defined in a third-party library or if the ",(0,i.kt)("code",null,"@Factory")," method is part of auto-generated code."),(0,i.kt)("p",null,"Let's assume you have a ",(0,i.kt)("inlineCode",{parentName:"p"},"Filter")," class used as an input type. You most certainly have a ",(0,i.kt)("inlineCode",{parentName:"p"},"@Factory")," to create the input type."),(0,i.kt)(l.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class MyFactory\n{\n    #[Factory]\n    public function createFilter(string $name): Filter\n    {\n        // Let's assume you have a flexible 'Filter' class that can accept any kind of filter\n        $filter = new Filter();\n        $filter->addFilter('name', $name);\n        return $filter;\n    }\n}\n"))),(0,i.kt)(r.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class MyFactory\n{\n    /**\n     * @Factory()\n     */\n    public function createFilter(string $name): Filter\n    {\n        // Let's assume you have a flexible 'Filter' class that can accept any kind of filter\n        $filter = new Filter();\n        $filter->addFilter('name', $name);\n        return $filter;\n    }\n}\n")))),(0,i.kt)("p",null,"Assuming you ",(0,i.kt)("strong",{parentName:"p"},"cannot"),' modify the code of this factory, you can still modify the GraphQL input type generated by\nadding a "decorator" around the factory.'),(0,i.kt)(l.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(r.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class MyDecorator\n{\n    #[Decorate(inputTypeName: \"FilterInput\")]\n    public function addTypeFilter(Filter $filter, string $type): Filter\n    {\n        $filter->addFilter('type', $type);\n        return $filter;\n    }\n}\n"))),(0,i.kt)(r.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"class MyDecorator\n{\n    /**\n     * @Decorate(inputTypeName=\"FilterInput\")\n     */\n    public function addTypeFilter(Filter $filter, string $type): Filter\n    {\n        $filter->addFilter('type', $type);\n        return $filter;\n    }\n}\n")))),(0,i.kt)("p",null,'In the example above, the "Filter" input type is modified. We add an additional "type" field to the input type.'),(0,i.kt)("p",null,"A few things to notice:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The decorator takes the object generated by the factory as first argument"),(0,i.kt)("li",{parentName:"ul"},"The decorator MUST return an object of the same type (or a sub-type)"),(0,i.kt)("li",{parentName:"ul"},"The decorator CAN contain additional parameters. They will be added to the fields of the GraphQL input type."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"@Decorate")," annotation must contain a ",(0,i.kt)("inlineCode",{parentName:"li"},"inputTypeName")," attribute that contains the name of the GraphQL input type\nthat is decorated. If you did not specify this name in the ",(0,i.kt)("inlineCode",{parentName:"li"},"@Factory"),' annotation, this is by default the name of the\nPHP class + "Input" (for instance: "Filter" => "FilterInput")')),(0,i.kt)("div",{class:"alert alert--warning"},(0,i.kt)("strong",null,"Heads up!")," The ",(0,i.kt)("code",null,"MyDecorator")," class must exist in the container of your application and the container identifier MUST be the fully qualified class name.",(0,i.kt)("br",null),(0,i.kt)("br",null),"If you are using the Symfony bundle (or a framework with autowiring like Laravel), this is usually not an issue as the container will automatically create the controller entry if you do not explicitly declare it."))}y.isMDXComponent=!0}}]);