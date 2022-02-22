"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[314],{48328:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return u},default:function(){return c}});var n=a(87462),i=a(63366),r=(a(67294),a(3905)),o=["components"],s={id:"pagination",title:"Paginating large result sets",sidebar_label:"Pagination",original_id:"pagination"},l=void 0,p={unversionedId:"pagination",id:"version-4.0/pagination",isDocsHomePage:!1,title:"Paginating large result sets",description:"It is quite common to have to paginate over large result sets.",source:"@site/versioned_docs/version-4.0/pagination.mdx",sourceDirName:".",slug:"/pagination",permalink:"/docs/4.0/pagination",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.0/pagination.mdx",tags:[],version:"4.0",lastUpdatedBy:"Faizan Akram Dar",lastUpdatedAt:1645550972,formattedLastUpdatedAt:"2/22/2022",frontMatter:{id:"pagination",title:"Paginating large result sets",sidebar_label:"Pagination",original_id:"pagination"},sidebar:"version-4.0/docs",previous:{title:"File uploads",permalink:"/docs/4.0/file-uploads"},next:{title:"Custom types",permalink:"/docs/4.0/custom-types"}},u=[{value:"Installation",id:"installation",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],d={toc:u};function c(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"It is quite common to have to paginate over large result sets."),(0,r.kt)("p",null,"GraphQLite offers a simple way to do that using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/beberlei/porpaginas"},"Porpaginas"),"."),(0,r.kt)("p",null,"Porpaginas is a set of PHP interfaces that can be implemented by result iterators. It comes with a native support for\nPHP arrays, Doctrine and ",(0,r.kt)("a",{parentName:"p",href:"https://thecodingmachine.github.io/tdbm/doc/limit_offset_resultset.html"},"TDBM"),"."),(0,r.kt)("div",{class:"alert alert--warning"},"If you are a Laravel user, Eloquent does not come with a Porpaginas iterator. However, the GraphQLite Laravel bundle ",(0,r.kt)("a",{href:"laravel-package-advanced"},"comes with its own pagination system"),"."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"You will need to install the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/beberlei/porpaginas"},"Porpaginas")," library to benefit from this feature."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ composer require beberlei/porpaginas\n")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"In your query, simply return a class that implements ",(0,r.kt)("inlineCode",{parentName:"p"},"Porpaginas\\Result"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @Query\n     * @return Product[]\n     */\n    public function products(): Porpaginas\\Result\n    {\n        // Some code that returns a list of products\n\n        // If you are using Doctrine, something like:\n        return new Porpaginas\\Doctrine\\ORM\\ORMQueryResult($doctrineQuery);\n    }\n}\n")),(0,r.kt)("p",null,"Notice that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the method return type MUST BE ",(0,r.kt)("inlineCode",{parentName:"li"},"Porpaginas\\Result")," or a class implementing ",(0,r.kt)("inlineCode",{parentName:"li"},"Porpaginas\\Result")),(0,r.kt)("li",{parentName:"ul"},"you MUST add a ",(0,r.kt)("inlineCode",{parentName:"li"},"@return")," statement to help GraphQLite find the type of the list")),(0,r.kt)("p",null,"Once this is done, you can paginate directly from your GraphQL query:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"products {\n    items(limit: 10, offset: 20) {\n        id\n        name\n    }\n    count\n}\n")),(0,r.kt)("p",null,'Results are wrapped into an item field. You can use the "limit" and "offset" parameters to apply pagination automatically.'),(0,r.kt)("p",null,'The "count" field returns the ',(0,r.kt)("strong",{parentName:"p"},"total count")," of items."))}c.isMDXComponent=!0}}]);