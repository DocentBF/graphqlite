"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9717],{13769:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>u,default:()=>g,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=n(58168),i=(n(96540),n(15680)),o=(n(67443),n(11470)),s=n(19365);const r={id:"mutations",title:"Mutations",sidebar_label:"Mutations",original_id:"mutations"},u=void 0,l={unversionedId:"mutations",id:"version-4.1/mutations",title:"Mutations",description:"In GraphQLite, mutations are created like queries.",source:"@site/versioned_docs/version-4.1/mutations.mdx",sourceDirName:".",slug:"/mutations",permalink:"/docs/4.1/mutations",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.1/mutations.mdx",tags:[],version:"4.1",lastUpdatedBy:"Oleksandr Prypkhan",lastUpdatedAt:1711507058,formattedLastUpdatedAt:"Mar 27, 2024",frontMatter:{id:"mutations",title:"Mutations",sidebar_label:"Mutations",original_id:"mutations"},sidebar:"version-4.1/docs",previous:{title:"Queries",permalink:"/docs/4.1/queries"},next:{title:"Type mapping",permalink:"/docs/4.1/type_mapping"}},p={},d=[],c={toc:d},m="wrapper";function g(t){let{components:e,...n}=t;return(0,i.yg)(m,(0,a.A)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"In GraphQLite, mutations are created ",(0,i.yg)("a",{parentName:"p",href:"/docs/4.1/queries"},"like queries"),"."),(0,i.yg)("p",null,"To create a mutation, you must annotate a method in a controller with the ",(0,i.yg)("inlineCode",{parentName:"p"},"@Mutation")," annotation."),(0,i.yg)("p",null,"For instance:"),(0,i.yg)(o.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.yg)(s.A,{value:"php8",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Mutation;\n\nclass ProductController\n{\n    #[Mutation]\n    public function saveProduct(int $id, string $name, ?float $price = null): Product\n    {\n        // Some code that saves a product.\n    }\n}\n"))),(0,i.yg)(s.A,{value:"php7",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Mutation;\n\nclass ProductController\n{\n    /**\n     * @Mutation\n     */\n    public function saveProduct(int $id, string $name, ?float $price = null): Product\n    {\n        // Some code that saves a product.\n    }\n}\n")))))}g.isMDXComponent=!0}}]);