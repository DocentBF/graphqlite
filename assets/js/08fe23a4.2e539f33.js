"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[514],{65235:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>r,toc:()=>d});var a=n(58168),i=(n(96540),n(15680));n(67443);const o={id:"mutations",title:"Mutations",sidebar_label:"Mutations"},s=void 0,r={unversionedId:"mutations",id:"version-6.1/mutations",title:"Mutations",description:"In GraphQLite, mutations are created like queries.",source:"@site/versioned_docs/version-6.1/mutations.mdx",sourceDirName:".",slug:"/mutations",permalink:"/docs/6.1/mutations",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-6.1/mutations.mdx",tags:[],version:"6.1",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1710913851,formattedLastUpdatedAt:"Mar 20, 2024",frontMatter:{id:"mutations",title:"Mutations",sidebar_label:"Mutations"},sidebar:"docs",previous:{title:"Queries",permalink:"/docs/6.1/queries"},next:{title:"Type mapping",permalink:"/docs/6.1/type-mapping"}},u={},d=[],l={toc:d},p="wrapper";function c(t){let{components:e,...n}=t;return(0,i.yg)(p,(0,a.A)({},l,n,{components:e,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"In GraphQLite, mutations are created ",(0,i.yg)("a",{parentName:"p",href:"/docs/6.1/queries"},"like queries"),"."),(0,i.yg)("p",null,"To create a mutation, you must annotate a method in a controller with the ",(0,i.yg)("inlineCode",{parentName:"p"},"@Mutation")," annotation."),(0,i.yg)("p",null,"For instance:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Mutation;\n\nclass ProductController\n{\n    #[Mutation]\n    public function saveProduct(int $id, string $name, ?float $price = null): Product\n    {\n        // Some code that saves a product.\n    }\n}\n")))}c.isMDXComponent=!0}}]);