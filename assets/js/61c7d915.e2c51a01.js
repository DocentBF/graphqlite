"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2496],{2600:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=t(5072),r=(t(1504),t(5788));t(5490);const o={id:"query-plan",title:"Query plan",sidebar_label:"Query plan"},l=void 0,i={unversionedId:"query-plan",id:"version-6.1/query-plan",title:"Query plan",description:"The problem",source:"@site/versioned_docs/version-6.1/query-plan.mdx",sourceDirName:".",slug:"/query-plan",permalink:"/docs/query-plan",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-6.1/query-plan.mdx",tags:[],version:"6.1",lastUpdatedBy:"Yurii",lastUpdatedAt:1707691116,formattedLastUpdatedAt:"Feb 11, 2024",frontMatter:{id:"query-plan",title:"Query plan",sidebar_label:"Query plan"},sidebar:"docs",previous:{title:"Connecting security to your framework",permalink:"/docs/implementing-security"},next:{title:"Prefetching records",permalink:"/docs/prefetch-method"}},u={},s=[{value:"The problem",id:"the-problem",level:2},{value:"Fetching the query plan",id:"fetching-the-query-plan",level:2}],p={toc:s},d="wrapper";function h(e){let{components:n,...t}=e;return(0,r.yg)(d,(0,a.c)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"the-problem"},"The problem"),(0,r.yg)("p",null,'GraphQL naive implementations often suffer from the "N+1" problem.'),(0,r.yg)("p",null,"Let's have a look at the following query:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-graphql"},"{\n    products {\n        name\n        manufacturer {\n            name\n        }\n    }\n}\n")),(0,r.yg)("p",null,"A naive implementation will do this:"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"1 query to fetch the list of products"),(0,r.yg)("li",{parentName:"ul"},"1 query per product to fetch the manufacturer")),(0,r.yg)("p",null,'Assuming we have "N" products, we will make "N+1" queries.'),(0,r.yg)("p",null,'There are several ways to fix this problem. Assuming you are using a relational database, one solution is to try to look\nahead and perform only one query with a JOIN between "products" and "manufacturers".'),(0,r.yg)("p",null,'But how do I know if I should make the JOIN between "products" and "manufacturers" or not? I need to know ahead\nof time.'),(0,r.yg)("p",null,"With GraphQLite, you can answer this question by tapping into the ",(0,r.yg)("inlineCode",{parentName:"p"},"ResolveInfo")," object."),(0,r.yg)("h2",{id:"fetching-the-query-plan"},"Fetching the query plan"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"use GraphQL\\Type\\Definition\\ResolveInfo;\n\nclass ProductsController\n{\n    /**\n     * @return Product[]\n     */\n    #[Query]\n    public function products(ResolveInfo $info): array\n    {\n        if (isset($info->getFieldSelection()['manufacturer']) {\n            // Let's perform a request with a JOIN on manufacturer\n        } else {\n            // Let's perform a request without a JOIN on manufacturer\n        }\n        // ...\n    }\n}\n")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"ResolveInfo")," is a class provided by Webonyx/GraphQL-PHP (the low-level GraphQL library used by GraphQLite).\nIt contains info about the query and what fields are requested. Using ",(0,r.yg)("inlineCode",{parentName:"p"},"ResolveInfo::getFieldSelection"),' you can analyze the query\nand decide whether you should perform additional "JOINS" in your query or not.'),(0,r.yg)("div",{class:"alert alert--info"},"As of the writing of this documentation, the ",(0,r.yg)("code",null,"ResolveInfo")," class is useful but somewhat limited. The ",(0,r.yg)("a",{href:"https://github.com/webonyx/graphql-php/pull/436"},'next version of Webonyx/GraphQL-PHP will add a "query plan"'),"that allows a deeper analysis of the query."))}h.isMDXComponent=!0}}]);