"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5762],{47935:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>p,contentTitle:()=>n,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var o=t(58168),l=(t(96540),t(15680));t(67443);const i={id:"file-uploads",title:"File uploads",sidebar_label:"File uploads"},n=void 0,r={unversionedId:"file-uploads",id:"file-uploads",title:"File uploads",description:"GraphQL does not support natively the notion of file uploads, but an extension to the GraphQL protocol was proposed",source:"@site/docs/file-uploads.mdx",sourceDirName:".",slug:"/file-uploads",permalink:"/docs/next/file-uploads",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/docs/file-uploads.mdx",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1713234680,formattedLastUpdatedAt:"Apr 16, 2024",frontMatter:{id:"file-uploads",title:"File uploads",sidebar_label:"File uploads"},sidebar:"docs",previous:{title:"Automatic persisted queries",permalink:"/docs/next/automatic-persisted-queries"},next:{title:"Pagination",permalink:"/docs/next/pagination"}},p={},s=[{value:"Installation",id:"installation",level:2},{value:"If you are using the Symfony bundle",id:"if-you-are-using-the-symfony-bundle",level:3},{value:"If you are using a PSR-15 compatible framework",id:"if-you-are-using-a-psr-15-compatible-framework",level:3},{value:"If you are using another framework not compatible with PSR-15",id:"if-you-are-using-another-framework-not-compatible-with-psr-15",level:3},{value:"Usage",id:"usage",level:2}],u={toc:s},d="wrapper";function h(e){let{components:a,...t}=e;return(0,l.yg)(d,(0,o.A)({},u,t,{components:a,mdxType:"MDXLayout"}),(0,l.yg)("p",null,"GraphQL does not support natively the notion of file uploads, but an extension to the GraphQL protocol was proposed\nto add support for ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/jaydenseric/graphql-multipart-request-spec"},"multipart requests"),"."),(0,l.yg)("h2",{id:"installation"},"Installation"),(0,l.yg)("p",null,"GraphQLite supports this extension through the use of the ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/Ecodev/graphql-upload"},"Ecodev/graphql-upload")," library."),(0,l.yg)("p",null,"You must start by installing this package:"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-console"},"$ composer require ecodev/graphql-upload\n")),(0,l.yg)("h3",{id:"if-you-are-using-the-symfony-bundle"},"If you are using the Symfony bundle"),(0,l.yg)("p",null,"If you are using our Symfony bundle, the file upload middleware is managed by the bundle. You have nothing to do\nand can start using it right away."),(0,l.yg)("h3",{id:"if-you-are-using-a-psr-15-compatible-framework"},"If you are using a PSR-15 compatible framework"),(0,l.yg)("p",null,"In order to use this, you must first be sure that the ",(0,l.yg)("inlineCode",{parentName:"p"},"ecodev/graphql-upload")," PSR-15 middleware is part of your middleware pipe."),(0,l.yg)("p",null,"Simply add ",(0,l.yg)("inlineCode",{parentName:"p"},"GraphQL\\Upload\\UploadMiddleware")," to your middleware pipe."),(0,l.yg)("h3",{id:"if-you-are-using-another-framework-not-compatible-with-psr-15"},"If you are using another framework not compatible with PSR-15"),(0,l.yg)("p",null,"Please check the Ecodev/graphql-upload library ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/Ecodev/graphql-upload"},"documentation"),"\nfor more information on how to integrate it in your framework."),(0,l.yg)("h2",{id:"usage"},"Usage"),(0,l.yg)("p",null,"To handle an uploaded file, you type-hint against the PSR-7 ",(0,l.yg)("inlineCode",{parentName:"p"},"UploadedFileInterface"),":"),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    #[Mutation]\n    public function saveDocument(string $name, UploadedFileInterface $file): Document\n    {\n        // Some code that saves the document.\n        $file->moveTo($someDir);\n    }\n}\n")),(0,l.yg)("p",null,"Of course, you need to use a GraphQL client that is compatible with multipart requests. See ",(0,l.yg)("a",{parentName:"p",href:"https://github.com/jaydenseric/graphql-multipart-request-spec#client"},"jaydenseric/graphql-multipart-request-spec")," for a list of compatible clients."),(0,l.yg)("p",null,"The GraphQL client must send the file using the Upload type."),(0,l.yg)("pre",null,(0,l.yg)("code",{parentName:"pre",className:"language-graphql"},"mutation upload($file: Upload!) {\n    upload(file: $file)\n}\n")))}h.isMDXComponent=!0}}]);