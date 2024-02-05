"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5872],{1788:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>s});var a=n(5072),i=(n(1504),n(5788));n(5490);const o={id:"operation-complexity",title:"Operation complexity",sidebar_label:"Operation complexity"},l=void 0,r={unversionedId:"operation-complexity",id:"operation-complexity",title:"Operation complexity",description:"At some point you may find yourself receiving queries with an insane amount of requested",source:"@site/docs/operation-complexity.md",sourceDirName:".",slug:"/operation-complexity",permalink:"/docs/next/operation-complexity",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/docs/operation-complexity.md",tags:[],version:"current",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1707165871,formattedLastUpdatedAt:"Feb 5, 2024",frontMatter:{id:"operation-complexity",title:"Operation complexity",sidebar_label:"Operation complexity"},sidebar:"docs",previous:{title:"Connecting security to your framework",permalink:"/docs/next/implementing-security"},next:{title:"Query plan",permalink:"/docs/next/query-plan"}},p={},s=[{value:"Query depth",id:"query-depth",level:2},{value:"Static request analysis",id:"static-request-analysis",level:2},{value:"Full request analysis",id:"full-request-analysis",level:2},{value:"Setup",id:"setup",level:2}],u={toc:s},y="wrapper";function h(e){let{components:t,...n}=e;return(0,i.yg)(y,(0,a.c)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"At some point you may find yourself receiving queries with an insane amount of requested\nfields or items, all at once. Usually, it's not a good thing, so you may want to somehow\nlimit the amount of requests or their individual complexity. "),(0,i.yg)("h2",{id:"query-depth"},"Query depth"),(0,i.yg)("p",null,"The simplest way to limit complexity is to limit the max query depth. ",(0,i.yg)("inlineCode",{parentName:"p"},"webonyx/graphql-php"),",\nwhich GraphQLite relies on, ",(0,i.yg)("a",{parentName:"p",href:"https://webonyx.github.io/graphql-php/security/#limiting-query-depth"},"has this built in"),".\nTo use it, you may use ",(0,i.yg)("inlineCode",{parentName:"p"},"addValidationRule")," when building your PSR15 middleware:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},"$builder = new Psr15GraphQLMiddlewareBuilder($schema);\n\n$builder->addValidationRule(new \\GraphQL\\Validator\\Rules\\QueryDepth(7));\n")),(0,i.yg)("p",null,"Although this works for simple cases, this doesn't prevent requesting an excessive amount\nof fields on the depth of under 7, nor does it prevent requesting too many nodes in paginated lists.\nThis is where automatic query complexity comes to save us."),(0,i.yg)("h2",{id:"static-request-analysis"},"Static request analysis"),(0,i.yg)("p",null,"The operation complexity analyzer is a useful tool to make your API secure. The operation\ncomplexity analyzer assigns by default every field a complexity of ",(0,i.yg)("inlineCode",{parentName:"p"},"1"),". The complexity of\nall fields in one of the operations of a GraphQL request is not allowed to be greater\nthan the maximum permitted operation complexity."),(0,i.yg)("p",null,"This sounds fairly simple at first, but the more you think about this, the more you\nwonder if that is so. Does every field have the same complexity?"),(0,i.yg)("p",null,"In a data graph, not every field is the same. We have fields that fetch data that are\nmore expensive than fields that just complete already resolved data."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-graphql"},"type Query {\n    books(take: Int = 10): [Book]\n}\n\ntype Book {\n    title\n    author: Author\n}\n\ntype Author {\n    name\n}\n")),(0,i.yg)("p",null,"In the above example executing the ",(0,i.yg)("inlineCode",{parentName:"p"},"books")," field on the ",(0,i.yg)("inlineCode",{parentName:"p"},"Query")," type might go to the\ndatabase and fetch the ",(0,i.yg)("inlineCode",{parentName:"p"},"Book"),". This means that the cost of the ",(0,i.yg)("inlineCode",{parentName:"p"},"books")," field is\nprobably higher than the cost of the ",(0,i.yg)("inlineCode",{parentName:"p"},"title")," field. The cost of the title field\nmight be the impact on the memory and to the transport. For ",(0,i.yg)("inlineCode",{parentName:"p"},"title"),", the default\ncost of ",(0,i.yg)("inlineCode",{parentName:"p"},"1")," os OK. But for ",(0,i.yg)("inlineCode",{parentName:"p"},"books"),", we might want to go with a higher cost of ",(0,i.yg)("inlineCode",{parentName:"p"},"10"),"\nsince we are getting a list of books from our database."),(0,i.yg)("p",null,"Moreover, we have the field ",(0,i.yg)("inlineCode",{parentName:"p"},"author")," on the book, which might go to the database\nas well to fetch the ",(0,i.yg)("inlineCode",{parentName:"p"},"Author")," object. Since we are only fetching a single item here,\nwe might want to apply a cost of ",(0,i.yg)("inlineCode",{parentName:"p"},"5")," to this field."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},"class Controller {\n    /**\n    * @return Book[]\n     */\n    #[Query]\n    #[Cost(complexity: 10)]\n    public function books(int $take = 10): array {}\n}\n\n#[Type]\nclass Book {\n    #[Field]\n    public string $title;\n    \n    #[Field]\n    #[Cost(complexity: 5)]\n    public Author $author;\n}\n\n#[Type]\nclass Author {\n    #[Field]\n    public string $name;\n}\n")),(0,i.yg)("p",null,"If we run the following query against our data graph, we will come up with the cost of ",(0,i.yg)("inlineCode",{parentName:"p"},"11"),"."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-graphql"},"query {\n    books {\n        title\n    }\n}\n")),(0,i.yg)("p",null,"When drilling in further, a cost of ",(0,i.yg)("inlineCode",{parentName:"p"},"17")," occurs."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-graphql"},"query {\n    books {\n        title\n        author {\n            name\n        }\n    }\n}\n")),(0,i.yg)("p",null,"This kind of analysis is entirely static and could just be done by inspecting the\nquery syntax tree. The impact on the overall execution performance is very low.\nBut with this static approach, we do have a very rough idea of the performance.\nIs it correct to apply always a cost of ",(0,i.yg)("inlineCode",{parentName:"p"},"10")," even though we might get one or one\nhundred books back?"),(0,i.yg)("h2",{id:"full-request-analysis"},"Full request analysis"),(0,i.yg)("p",null,"The operation complexity analyzer can also take arguments into account when analyzing operation complexity."),(0,i.yg)("p",null,"If we look at our data graph, we can see that the ",(0,i.yg)("inlineCode",{parentName:"p"},"books")," field actually has an argument\nthat defines how many books are returned. The ",(0,i.yg)("inlineCode",{parentName:"p"},"take")," argument, in this case, specifies\nthe maximum books that the field will return."),(0,i.yg)("p",null,"When measuring the field","`","s impact, we can take the argument ",(0,i.yg)("inlineCode",{parentName:"p"},"take")," into account as a\nmultiplier of our cost. This means we might want to lower the cost to ",(0,i.yg)("inlineCode",{parentName:"p"},"5")," since now we\nget a more fine-grained cost calculation by multiplying the complexity\nof the field with the ",(0,i.yg)("inlineCode",{parentName:"p"},"take")," argument."),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},"class Controller {\n    /**\n    * @return Book[]\n     */\n    #[Query]\n    #[Cost(complexity: 5, multipliers: ['take'], defaultMultiplier: 200)]\n    public function books(?int $take = 10): array {}\n}\n\n#[Type]\nclass Book {\n    #[Field]\n    public string $title;\n    \n    #[Field]\n    #[Cost(complexity: 5)]\n    public Author $author;\n}\n\n#[Type]\nclass Author {\n    #[Field]\n    public string $name;\n}\n")),(0,i.yg)("p",null,"With the multiplier in place, we now get a cost of ",(0,i.yg)("inlineCode",{parentName:"p"},"60")," for the request since the multiplier\nis applied to the books field and the child fields' cost. If multiple multipliers are specified,\nthe cost will be multiplied by each of the fields."),(0,i.yg)("p",null,"Cost calculation: ",(0,i.yg)("inlineCode",{parentName:"p"},"10 * (5 + 1)")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-graphql"},"query {\n    books {\n        title\n    }\n}\n")),(0,i.yg)("p",null,"When drilling in further, the cost will go up to ",(0,i.yg)("inlineCode",{parentName:"p"},"240")," since we are now pulling twice as much books and also their authors."),(0,i.yg)("p",null,"Cost calculation: ",(0,i.yg)("inlineCode",{parentName:"p"},"20 * (5 + 1 + 5 + 1)")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-graphql"},"query {\n    books(take: 20) {\n        title\n        author {\n            name\n        }\n    }\n}\n")),(0,i.yg)("p",null,"Notice the nullable ",(0,i.yg)("inlineCode",{parentName:"p"},"$take")," parameter. This might come in handy if ",(0,i.yg)("inlineCode",{parentName:"p"},"take: null"),' means "get all items",\nbut that would also mean that the overall complexity would only be ',(0,i.yg)("inlineCode",{parentName:"p"},"1 + 5 + 1 + 5 + 1 = 11"),",\nwhen in fact that would be a very costly query to execute. "),(0,i.yg)("p",null,"If all of the multiplier fields are either ",(0,i.yg)("inlineCode",{parentName:"p"},"null")," or missing (and don't have default values),\n",(0,i.yg)("inlineCode",{parentName:"p"},"defaultMultiplier")," is used:"),(0,i.yg)("p",null,"Cost calculation: ",(0,i.yg)("inlineCode",{parentName:"p"},"200 * (5 + 1 + 5 + 1)")),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-graphql"},"query {\n    books(take: null) {\n        title\n        author {\n            name\n        }\n    }\n}\n")),(0,i.yg)("h2",{id:"setup"},"Setup"),(0,i.yg)("p",null,"As with query depth, automatic query complexity is configured through PSR15 middleware:"),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},"$builder = new Psr15GraphQLMiddlewareBuilder($schema);\n\n// Total query cost cannot exceed 1000 points\n$builder->limitQueryComplexity(1000);\n")),(0,i.yg)("p",null,"Beware that introspection queries would also be limited in complexity. A full introspection\nquery sits at around ",(0,i.yg)("inlineCode",{parentName:"p"},"107")," points, so we recommend a minimum of ",(0,i.yg)("inlineCode",{parentName:"p"},"150")," for query complexity limit."))}h.isMDXComponent=!0}}]);