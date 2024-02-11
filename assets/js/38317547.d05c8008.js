"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2312],{6436:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var a=t(5072),i=(t(1504),t(5788));t(5490);const r={id:"inheritance",title:"Inheritance and interfaces",sidebar_label:"Inheritance and interfaces",original_id:"inheritance"},s=void 0,l={unversionedId:"inheritance",id:"version-4.1/inheritance",title:"Inheritance and interfaces",description:"Some of your entities may extend other entities. GraphQLite will do its best to represent this hierarchy of objects in GraphQL using interfaces.",source:"@site/versioned_docs/version-4.1/inheritance.md",sourceDirName:".",slug:"/inheritance",permalink:"/docs/4.1/inheritance",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.1/inheritance.md",tags:[],version:"4.1",lastUpdatedBy:"Yurii",lastUpdatedAt:1707691116,formattedLastUpdatedAt:"Feb 11, 2024",frontMatter:{id:"inheritance",title:"Inheritance and interfaces",sidebar_label:"Inheritance and interfaces",original_id:"inheritance"}},c={},o=[],p={toc:o},d="wrapper";function h(e){let{components:n,...t}=e;return(0,i.yg)(d,(0,a.c)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"Some of your entities may extend other entities. GraphQLite will do its best to represent this hierarchy of objects in GraphQL using interfaces."),(0,i.yg)("p",null,"Let's say you have two classes, ",(0,i.yg)("inlineCode",{parentName:"p"},"Contact")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"User")," (which extends ",(0,i.yg)("inlineCode",{parentName:"p"},"Contact"),"):"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},"/**\n * @Type\n */\nclass Contact\n{\n    // ...\n}\n\n/**\n * @Type\n */\nclass User extends Contact\n{\n    // ...\n}\n")),(0,i.yg)("p",null,"Now, let's assume you have a query that returns a contact:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"class ContactController\n{\n    /**\n     * @Query()\n     */\n    public function getContact(): Contact\n    {\n        // ...\n    }\n}\n")),(0,i.yg)("p",null,"When writing your GraphQL query, you are able to use fragments to retrieve fields from the ",(0,i.yg)("inlineCode",{parentName:"p"},"User")," type:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-graphql"},"contact {\n    name\n    ... User {\n       email\n    }\n}\n")),(0,i.yg)("p",null,"Written in ",(0,i.yg)("a",{parentName:"p",href:"https://graphql.org/learn/schema/#type-language"},"GraphQL type language"),", the representation of types\nwould look like this:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-graphql"},"interface ContactInterface {\n    // List of fields declared in Contact class\n}\n\ntype Contact implements ContactInterface {\n    // List of fields declared in Contact class\n}\n\ntype User implements ContactInterface {\n    // List of fields declared in Contact and User classes\n}\n")),(0,i.yg)("p",null,"Behind the scene, GraphQLite will detect that the ",(0,i.yg)("inlineCode",{parentName:"p"},"Contact")," class is extended by the ",(0,i.yg)("inlineCode",{parentName:"p"},"User")," class.\nBecause the class is extended, a GraphQL ",(0,i.yg)("inlineCode",{parentName:"p"},"ContactInterface")," interface is created dynamically."),(0,i.yg)("p",null,"The GraphQL ",(0,i.yg)("inlineCode",{parentName:"p"},"User")," type will also automatically implement this ",(0,i.yg)("inlineCode",{parentName:"p"},"ContactInterface"),". The interface contains all the fields\navailable in the ",(0,i.yg)("inlineCode",{parentName:"p"},"Contact")," type."),(0,i.yg)("div",{class:"alert alert--warning"},"Right now, there is no way to explicitly declare a GraphQL interface using GraphQLite.",(0,i.yg)("br",null),"GraphQLite automatically declares interfaces when it sees an inheritance relationship between to classes that are GraphQL types."))}h.isMDXComponent=!0}}]);