"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[229],{24432:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var n=t(58168),r=(t(96540),t(15680)),l=(t(67443),t(11470)),i=t(19365);const s={id:"features",slug:"/",title:"GraphQLite",sidebar_label:"GraphQLite",original_id:"features"},o=void 0,p={unversionedId:"features",id:"version-4.1/features",title:"GraphQLite",description:"A PHP library that allows you to write your GraphQL queries in simple-to-write controllers.",source:"@site/versioned_docs/version-4.1/features.mdx",sourceDirName:".",slug:"/",permalink:"/docs/4.1/",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.1/features.mdx",tags:[],version:"4.1",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1712007085,formattedLastUpdatedAt:"Apr 1, 2024",frontMatter:{id:"features",slug:"/",title:"GraphQLite",sidebar_label:"GraphQLite",original_id:"features"},sidebar:"version-4.1/docs",next:{title:"Getting Started",permalink:"/docs/4.1/getting-started"}},u={},d=[{value:"Features",id:"features",level:2},{value:"Basic example",id:"basic-example",level:2}],c={toc:d},g="wrapper";function m(e){let{components:a,...t}=e;return(0,r.yg)(g,(0,n.A)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,r.yg)("p",{align:"center"},(0,r.yg)("img",{src:"https://graphqlite.thecodingmachine.io/img/logo.svg",alt:"GraphQLite logo",width:"250",height:"250"})),(0,r.yg)("p",null,"A PHP library that allows you to write your GraphQL queries in simple-to-write controllers."),(0,r.yg)("h2",{id:"features"},"Features"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Create a complete GraphQL API by simply annotating your PHP classes"),(0,r.yg)("li",{parentName:"ul"},"Framework agnostic, but Symfony, Laravel and PSR-15 bindings available!"),(0,r.yg)("li",{parentName:"ul"},"Comes with batteries included: queries, mutations, mapping of arrays / iterators, file uploads, security, validation, extendable types and more!")),(0,r.yg)("h2",{id:"basic-example"},"Basic example"),(0,r.yg)("p",null,"First, declare a query in your controller:"),(0,r.yg)(l.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"php8",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"class ProductController\n{\n    #[Query]\n    public function product(string $id): Product\n    {\n        // Some code that looks for a product and returns it.\n    }\n}\n"))),(0,r.yg)(i.A,{value:"php7",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"class ProductController\n{\n    /**\n     * @Query()\n     */\n    public function product(string $id): Product\n    {\n        // Some code that looks for a product and returns it.\n    }\n}\n")))),(0,r.yg)("p",null,"Then, annotate the ",(0,r.yg)("inlineCode",{parentName:"p"},"Product")," class to declare what fields are exposed to the GraphQL API:"),(0,r.yg)(l.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.yg)(i.A,{value:"php8",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"#[Type]\nclass Product\n{\n    #[Field]\n    public function getName(): string\n    {\n        return $this->name;\n    }\n    // ...\n}\n"))),(0,r.yg)(i.A,{value:"php7",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"/**\n * @Type()\n */\nclass Product\n{\n    /**\n     * @Field()\n     */\n    public function getName(): string\n    {\n        return $this->name;\n    }\n    // ...\n}\n")))),(0,r.yg)("p",null,"That's it, you're good to go! Query and enjoy!"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-grapql"},"{\n  product(id: 42) {\n    name\n  }\n}\n")))}m.isMDXComponent=!0}}]);