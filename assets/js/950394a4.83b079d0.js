"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8194],{28909:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>s,metadata:()=>u,toc:()=>h});var a=t(58168),i=(t(96540),t(15680)),r=(t(67443),t(11470)),o=t(19365);const s={id:"authentication-authorization",title:"Authentication and authorization",sidebar_label:"Authentication and authorization"},l=void 0,u={unversionedId:"authentication-authorization",id:"version-7.0.0/authentication-authorization",title:"Authentication and authorization",description:"You might not want to expose your GraphQL API to anyone. Or you might want to keep some",source:"@site/versioned_docs/version-7.0.0/authentication-authorization.mdx",sourceDirName:".",slug:"/authentication-authorization",permalink:"/docs/authentication-authorization",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-7.0.0/authentication-authorization.mdx",tags:[],version:"7.0.0",lastUpdatedBy:"Shish",lastUpdatedAt:1711156668,formattedLastUpdatedAt:"Mar 23, 2024",frontMatter:{id:"authentication-authorization",title:"Authentication and authorization",sidebar_label:"Authentication and authorization"},sidebar:"docs",previous:{title:"User input validation",permalink:"/docs/validation"},next:{title:"Fine grained security",permalink:"/docs/fine-grained-security"}},p={},h=[{value:"<code>@Logged</code> and <code>@Right</code> annotations",id:"logged-and-right-annotations",level:2},{value:"Not throwing errors",id:"not-throwing-errors",level:2},{value:"Injecting the current user as a parameter",id:"injecting-the-current-user-as-a-parameter",level:2},{value:"Hiding fields / queries / mutations / subscriptions",id:"hiding-fields--queries--mutations--subscriptions",level:2}],g={toc:h},d="wrapper";function c(e){let{components:n,...t}=e;return(0,i.yg)(d,(0,a.A)({},g,t,{components:n,mdxType:"MDXLayout"}),(0,i.yg)("p",null,"You might not want to expose your GraphQL API to anyone. Or you might want to keep some\nqueries/mutations/subscriptions or fields reserved to some users."),(0,i.yg)("p",null,"GraphQLite offers some control over what a user can do with your API. You can restrict access to\nresources:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"based on authentication using the ",(0,i.yg)("a",{parentName:"li",href:"#logged-and-right-annotations"},(0,i.yg)("inlineCode",{parentName:"a"},"@Logged")," annotation")," (restrict access to logged users)"),(0,i.yg)("li",{parentName:"ul"},"based on authorization using the ",(0,i.yg)("a",{parentName:"li",href:"#logged-and-right-annotations"},(0,i.yg)("inlineCode",{parentName:"a"},"@Right")," annotation")," (restrict access to logged users with certain rights)."),(0,i.yg)("li",{parentName:"ul"},"based on fine-grained authorization using the ",(0,i.yg)("a",{parentName:"li",href:"/docs/fine-grained-security"},(0,i.yg)("inlineCode",{parentName:"a"},"@Security")," annotation")," (restrict access for some given resources to some users).")),(0,i.yg)("div",{class:"alert alert--info"},"GraphQLite does not have its own security mechanism. Unless you're using our Symfony Bundle or our Laravel package, it is up to you to connect this feature to your framework's security mechanism.",(0,i.yg)("br",null),"See ",(0,i.yg)("a",{href:"implementing-security"},"Connecting GraphQLite to your framework's security module"),"."),(0,i.yg)("h2",{id:"logged-and-right-annotations"},(0,i.yg)("inlineCode",{parentName:"h2"},"@Logged")," and ",(0,i.yg)("inlineCode",{parentName:"h2"},"@Right")," annotations"),(0,i.yg)("p",null,"GraphQLite exposes two annotations (",(0,i.yg)("inlineCode",{parentName:"p"},"@Logged")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"@Right"),") that you can use to restrict access to a resource."),(0,i.yg)(r.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.yg)(o.A,{value:"php8",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},'namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Logged;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Right;\n\nclass UserController\n{\n    /**\n     * @return User[]\n     */\n    #[Query]\n    #[Logged]\n    #[Right("CAN_VIEW_USER_LIST")]\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n'))),(0,i.yg)(o.A,{value:"php7",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},'namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Logged;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Right;\n\nclass UserController\n{\n    /**\n     * @Query\n     * @Logged\n     * @Right("CAN_VIEW_USER_LIST")\n     * @return User[]\n     */\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n')))),(0,i.yg)("p",null,"In the example above, the query ",(0,i.yg)("inlineCode",{parentName:"p"},"users")," will only be available if the user making the query is logged AND if he\nhas the ",(0,i.yg)("inlineCode",{parentName:"p"},"CAN_VIEW_USER_LIST")," right."),(0,i.yg)("p",null,(0,i.yg)("inlineCode",{parentName:"p"},"@Logged")," and ",(0,i.yg)("inlineCode",{parentName:"p"},"@Right")," annotations can be used next to:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"@Query")," annotations"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"@Mutation")," annotations"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"@Field")," annotations")),(0,i.yg)("div",{class:"alert alert--info"},"By default, if a user tries to access an unauthorized query/mutation/subscription/field, an error is raised and the query fails."),(0,i.yg)("h2",{id:"not-throwing-errors"},"Not throwing errors"),(0,i.yg)("p",null,"If you do not want an error to be thrown when a user attempts to query a field/query/mutation/subscription\nthey have no access to, you can use the ",(0,i.yg)("inlineCode",{parentName:"p"},"@FailWith")," annotation."),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"@FailWith")," annotation contains the value that will be returned for users with insufficient rights."),(0,i.yg)(r.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.yg)(o.A,{value:"php8",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},'class UserController\n{\n    /**\n     * If a user is not logged or if the user has not the right "CAN_VIEW_USER_LIST",\n     * the value returned will be "null".\n     *\n     * @return User[]\n     */\n    #[Query]\n    #[Logged]\n    #[Right("CAN_VIEW_USER_LIST")]\n    #[FailWith(value: null)]\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n'))),(0,i.yg)(o.A,{value:"php7",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},'class UserController\n{\n    /**\n     * If a user is not logged or if the user has not the right "CAN_VIEW_USER_LIST",\n     * the value returned will be "null".\n     *\n     * @Query\n     * @Logged\n     * @Right("CAN_VIEW_USER_LIST")\n     * @FailWith(null)\n     * @return User[]\n     */\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n')))),(0,i.yg)("h2",{id:"injecting-the-current-user-as-a-parameter"},"Injecting the current user as a parameter"),(0,i.yg)("p",null,"Use the ",(0,i.yg)("inlineCode",{parentName:"p"},"@InjectUser")," annotation to get an instance of the current user logged in."),(0,i.yg)(r.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.yg)(o.A,{value:"php8",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\nuse TheCodingMachine\\GraphQLite\\Annotations\\InjectUser;\n\nclass ProductController\n{\n    /**\n     * @Query\n     * @return Product\n     */\n    public function product(\n            int $id,\n            #[InjectUser]\n            User $user\n        ): Product\n    {\n        // ...\n    }\n}\n"))),(0,i.yg)(o.A,{value:"php7",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},'namespace App\\Controller;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\nuse TheCodingMachine\\GraphQLite\\Annotations\\InjectUser;\n\nclass ProductController\n{\n    /**\n     * @Query\n     * @InjectUser(for="$user")\n     * @return Product\n     */\n    public function product(int $id, User $user): Product\n    {\n        // ...\n    }\n}\n')))),(0,i.yg)("p",null,"The ",(0,i.yg)("inlineCode",{parentName:"p"},"@InjectUser")," annotation can be used next to:"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"@Query")," annotations"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"@Mutation")," annotations"),(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("inlineCode",{parentName:"li"},"@Field")," annotations")),(0,i.yg)("p",null,"The object injected as the current user depends on your framework. It is in fact the object returned by the\n",(0,i.yg)("a",{parentName:"p",href:"/docs/implementing-security"},'"authentication service" configured in GraphQLite'),". If user is not authenticated and\nparameter's type is not nullable, an authorization exception is thrown, similar to ",(0,i.yg)("inlineCode",{parentName:"p"},"@Logged")," annotation."),(0,i.yg)("h2",{id:"hiding-fields--queries--mutations--subscriptions"},"Hiding fields / queries / mutations / subscriptions"),(0,i.yg)("p",null,"By default, a user analysing the GraphQL schema can see all queries/mutations/subscriptions/types available.\nSome will be available to him and some won't."),(0,i.yg)("p",null,"If you want to add an extra level of security (or if you want your schema to be kept secret to unauthorized users),\nyou can use the ",(0,i.yg)("inlineCode",{parentName:"p"},"@HideIfUnauthorized")," annotation. Beware of ",(0,i.yg)("a",{parentName:"p",href:"/docs/annotations-reference"},"it's limitations"),"."),(0,i.yg)(r.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.yg)(o.A,{value:"php8",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},'class UserController\n{\n    /**\n     * If a user is not logged or if the user has not the right "CAN_VIEW_USER_LIST",\n     * the schema will NOT contain the "users" query at all (so trying to call the\n     * "users" query will result in a GraphQL "query not found" error.\n     *\n     * @return User[]\n     */\n    #[Query]\n    #[Logged]\n    #[Right("CAN_VIEW_USER_LIST")]\n    #[HideIfUnauthorized]\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n'))),(0,i.yg)(o.A,{value:"php7",mdxType:"TabItem"},(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre",className:"language-php"},'class UserController\n{\n    /**\n     * If a user is not logged or if the user has not the right "CAN_VIEW_USER_LIST",\n     * the schema will NOT contain the "users" query at all (so trying to call the\n     * "users" query will result in a GraphQL "query not found" error.\n     *\n     * @Query\n     * @Logged\n     * @Right("CAN_VIEW_USER_LIST")\n     * @HideIfUnauthorized()\n     * @return User[]\n     */\n    public function users(int $limit, int $offset): array\n    {\n        // ...\n    }\n}\n')))),(0,i.yg)("p",null,"While this is the most secured mode, it can have drawbacks when working with development tools\n(you need to be logged as admin to fetch the complete schema)."),(0,i.yg)("div",{class:"alert alert--info"},'The "HideIfUnauthorized" mode was the default mode in GraphQLite 3 and is optional from GraphQLite 4+.'))}c.isMDXComponent=!0}}]);