"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4485],{25890:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>y,frontMatter:()=>p,metadata:()=>o,toc:()=>d});var n=t(58168),l=(t(96540),t(15680)),r=(t(67443),t(11470)),i=t(19365);const p={id:"index",title:"GraphQLite",slug:"/",sidebar_label:"GraphQLite"},s=void 0,o={unversionedId:"index",id:"index",title:"GraphQLite",description:"A PHP library that allows you to write your GraphQL queries in simple-to-write controllers.",source:"@site/docs/README.mdx",sourceDirName:".",slug:"/",permalink:"/docs/next/",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/docs/README.mdx",tags:[],version:"current",lastUpdatedBy:"Oleksandr Prypkhan",lastUpdatedAt:1711507058,formattedLastUpdatedAt:"Mar 27, 2024",frontMatter:{id:"index",title:"GraphQLite",slug:"/",sidebar_label:"GraphQLite"},sidebar:"docs",next:{title:"Getting Started",permalink:"/docs/next/getting-started"}},u={},d=[{value:"Features",id:"features",level:2},{value:"Basic example",id:"basic-example",level:2}],c={toc:d},g="wrapper";function y(e){let{components:a,...t}=e;return(0,l.yg)(g,(0,n.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("p",{align:"center"},(0,l.yg)("img",{src:"https://graphqlite.thecodingmachine.io/img/logo.svg",alt:"GraphQLite logo",width:"250",height:"250"})),(0,l.yg)("p",null,"A PHP library that allows you to write your GraphQL queries in simple-to-write controllers."),(0,l.yg)("h2",{id:"features"},"Features"),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},"Create a complete GraphQL API by simply annotating your PHP classes"),(0,l.yg)("li",{parentName:"ul"},"Framework agnostic, but Symfony, Laravel and PSR-15 bindings available!"),(0,l.yg)("li",{parentName:"ul"},"Comes with batteries included: queries, mutations, subscriptions, mapping of arrays / iterators,\nfile uploads, security, validation, extendable types and more!")),(0,l.yg)("h2",{id:"basic-example"},"Basic example"),(0,l.yg)("p",null,"First, declare a query in your controller:"),(0,l.yg)(r.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.yg)(i.A,{value:"php8",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},"class ProductController\n{\n    #[Query]\n    public function product(string $id): Product\n    {\n        // Some code that looks for a product and returns it.\n    }\n}\n"))),(0,l.yg)(i.A,{value:"php7",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},"class ProductController\n{\n    /**\n     * @Query()\n     */\n    public function product(string $id): Product\n    {\n        // Some code that looks for a product and returns it.\n    }\n}\n")))),(0,l.yg)("p",null,"Then, annotate the ",(0,l.yg)("inlineCode",{parentName:"p"},"Product")," class to declare what fields are exposed to the GraphQL API:"),(0,l.yg)(r.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,l.yg)(i.A,{value:"php8",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},"#[Type]\nclass Product\n{\n    #[Field]\n    public function getName(): string\n    {\n        return $this->name;\n    }\n    // ...\n}\n"))),(0,l.yg)(i.A,{value:"php7",mdxType:"TabItem"},(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},"/**\n * @Type()\n */\nclass Product\n{\n    /**\n     * @Field()\n     */\n    public function getName(): string\n    {\n        return $this->name;\n    }\n    // ...\n}\n")))),(0,l.yg)("p",null,"That's it, you're good to go! Query and enjoy!"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-graphql"},"{\n  product(id: 42) {\n    name\n  }\n}\n")))}y.isMDXComponent=!0}}]);