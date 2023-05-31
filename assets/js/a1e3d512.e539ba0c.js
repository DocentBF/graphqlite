"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[634],{2535:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>c});var n=a(7462),i=(a(7294),a(3905)),r=(a(1839),a(4866)),o=a(5162);const s={id:"fine-grained-security",title:"Fine grained security",sidebar_label:"Fine grained security",original_id:"fine-grained-security"},l=void 0,p={unversionedId:"fine-grained-security",id:"version-4.1/fine-grained-security",title:"Fine grained security",description:"If the @Logged and @Right annotations are not",source:"@site/versioned_docs/version-4.1/fine-grained-security.mdx",sourceDirName:".",slug:"/fine-grained-security",permalink:"/docs/4.1/fine-grained-security",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.1/fine-grained-security.mdx",tags:[],version:"4.1",lastUpdatedBy:"David N\xe9grier",lastUpdatedAt:1685564309,formattedLastUpdatedAt:"May 31, 2023",frontMatter:{id:"fine-grained-security",title:"Fine grained security",sidebar_label:"Fine grained security",original_id:"fine-grained-security"},sidebar:"version-4.1/docs",previous:{title:"Authentication and authorization",permalink:"/docs/4.1/authentication_authorization"},next:{title:"Connecting security to your framework",permalink:"/docs/4.1/implementing-security"}},u={},c=[{value:"Using the @Security annotation",id:"using-the-security-annotation",level:2},{value:"The <code>is_granted</code> function",id:"the-is_granted-function",level:2},{value:"Accessing method parameters",id:"accessing-method-parameters",level:2},{value:"Setting HTTP code and error message",id:"setting-http-code-and-error-message",level:2},{value:"Setting a default value",id:"setting-a-default-value",level:2},{value:"Accessing the user",id:"accessing-the-user",level:2},{value:"Accessing the current object",id:"accessing-the-current-object",level:2},{value:"Available scope",id:"available-scope",level:2},{value:"How to restrict access to a given resource",id:"how-to-restrict-access-to-a-given-resource",level:2}],d={toc:c},h="wrapper";function m(e){let{components:t,...a}=e;return(0,i.kt)(h,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If the ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.1/authentication_authorization#logged-and-right-annotations"},(0,i.kt)("inlineCode",{parentName:"a"},"@Logged")," and ",(0,i.kt)("inlineCode",{parentName:"a"},"@Right")," annotations")," are not\ngranular enough for your needs, you can use the advanced ",(0,i.kt)("inlineCode",{parentName:"p"},"@Security")," annotation."),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Security")," annotation, you can write an ",(0,i.kt)("em",{parentName:"p"},"expression")," that can contain custom logic. For instance:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Check that a user can access a given resource"),(0,i.kt)("li",{parentName:"ul"},"Check that a user has one right or another right"),(0,i.kt)("li",{parentName:"ul"},"...")),(0,i.kt)("h2",{id:"using-the-security-annotation"},"Using the @Security annotation"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@Security")," annotation is very flexible: it allows you to pass an expression that can contains custom logic:"),(0,i.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Annotations\\Security;\n\n// ...\n\n#[Query]\n#[Security(\"is_granted('ROLE_ADMIN') or is_granted('POST_SHOW', post)\")]\npublic function getPost(Post $post): array\n{\n    // ...\n}\n"))),(0,i.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Annotations\\Security;\n\n// ...\n\n/**\n * @Query\n * @Security(\"is_granted('ROLE_ADMIN') or is_granted('POST_SHOW', post)\")\n */\npublic function getPost(Post $post): array\n{\n    // ...\n}\n")))),(0,i.kt)("p",null,"The ",(0,i.kt)("em",{parentName:"p"},"expression")," defined in the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Security")," annotation must conform to ",(0,i.kt)("a",{parentName:"p",href:"https://symfony.com/doc/4.4/components/expression_language/syntax.html"},"Symfony's Expression Language syntax")),(0,i.kt)("div",{class:"alert alert--info"},"If you are a Symfony user, you might already be used to the ",(0,i.kt)("code",null,"@Security")," annotation. Most of the inspiration of this annotation comes from Symfony. Warning though! GraphQLite's ",(0,i.kt)("code",null,"@Security")," annotation and Symfony's ",(0,i.kt)("code",null,"@Security")," annotation are slightly different. Especially, the two annotations do not live in the same namespace!"),(0,i.kt)("h2",{id:"the-is_granted-function"},"The ",(0,i.kt)("inlineCode",{parentName:"h2"},"is_granted")," function"),(0,i.kt)("p",null,"Use the ",(0,i.kt)("inlineCode",{parentName:"p"},"is_granted")," function to check if a user has a special right."),(0,i.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"#[Security(\"is_granted('ROLE_ADMIN')\")]\n"))),(0,i.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"@Security(\"is_granted('ROLE_ADMIN')\")\n")))),(0,i.kt)("p",null,"is similar to"),(0,i.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'#[Right("ROLE_ADMIN")]\n'))),(0,i.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'@Right("ROLE_ADMIN")\n')))),(0,i.kt)("p",null,"In addition, the ",(0,i.kt)("inlineCode",{parentName:"p"},"is_granted"),' function accepts a second optional parameter: the "scope" of the right.'),(0,i.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"#[Query]\n#[Security(\"is_granted('POST_SHOW', post)\")]\npublic function getPost(Post $post): array\n{\n    // ...\n}\n"))),(0,i.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Query\n * @Security(\"is_granted('POST_SHOW', post)\")\n */\npublic function getPost(Post $post): array\n{\n    // ...\n}\n")))),(0,i.kt)("p",null,"In the example above, the ",(0,i.kt)("inlineCode",{parentName:"p"},"getPost")," method can be called only if the logged user has the 'POST_SHOW' permission on the\n",(0,i.kt)("inlineCode",{parentName:"p"},"$post")," object. You can notice that the ",(0,i.kt)("inlineCode",{parentName:"p"},"$post")," object comes from the parameters."),(0,i.kt)("h2",{id:"accessing-method-parameters"},"Accessing method parameters"),(0,i.kt)("p",null,"All parameters passed to the method can be accessed in the ",(0,i.kt)("inlineCode",{parentName:"p"},"@Security")," expression."),(0,i.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"PHP 7")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'#[Query]\n#[Security(expression: "startDate < endDate", statusCode: 400, message: "End date must be after start date")]\npublic function getPosts(DateTimeImmutable $startDate, DateTimeImmutable $endDate): array\n{\n    // ...\n}\n'))),(0,i.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Query\n * @Security("startDate < endDate", statusCode=400, message="End date must be after start date")\n */\npublic function getPosts(DateTimeImmutable $startDate, DateTimeImmutable $endDate): array\n{\n    // ...\n}\n')))),(0,i.kt)("p",null,"In the example above, we tweak a bit the Security annotation purpose to do simple input validation."),(0,i.kt)("h2",{id:"setting-http-code-and-error-message"},"Setting HTTP code and error message"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"statusCode")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," attributes to set the HTTP code and GraphQL error message."),(0,i.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'#[Query]\n#[Security(expression: "is_granted(\'POST_SHOW\', post)", statusCode: 404, message: "Post not found (let\'s pretend the post does not exists!)")]\npublic function getPost(Post $post): array\n{\n    // ...\n}\n'))),(0,i.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Query\n * @Security("is_granted(\'POST_SHOW\', post)", statusCode=404, message="Post not found (let\'s pretend the post does not exists!)")\n */\npublic function getPost(Post $post): array\n{\n    // ...\n}\n')))),(0,i.kt)("p",null,"Note: since a single GraphQL call contain many errors, 2 errors might have conflicting HTTP status code.\nThe resulting status code is up to the GraphQL middleware you use. Most of the time, the status code with the\nhigher error code will be returned."),(0,i.kt)("h2",{id:"setting-a-default-value"},"Setting a default value"),(0,i.kt)("p",null,"If you do not want an error to be thrown when the security condition is not met, you can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"failWith")," attribute\nto set a default value."),(0,i.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"#[Query]\n#[Security(expression: \"is_granted('CAN_SEE_MARGIN', this)\", failWith: null)]\npublic function getMargin(): float\n{\n    // ...\n}\n"))),(0,i.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Field\n * @Security(\"is_granted('CAN_SEE_MARGIN', this)\", failWith=null)\n */\npublic function getMargin(): float\n{\n    // ...\n}\n")))),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"failWith")," attribute behaves just like the ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.1/authentication_authorization#not-throwing-errors"},(0,i.kt)("inlineCode",{parentName:"a"},"@FailWith")," annotation"),"\nbut for a given ",(0,i.kt)("inlineCode",{parentName:"p"},"@Security")," annotation."),(0,i.kt)("p",null,"You cannot use the ",(0,i.kt)("inlineCode",{parentName:"p"},"failWith")," attribute along ",(0,i.kt)("inlineCode",{parentName:"p"},"statusCode")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," attributes."),(0,i.kt)("h2",{id:"accessing-the-user"},"Accessing the user"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"user")," variable to access the currently logged user.\nYou can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"is_logged()")," function to check if a user is logged or not."),(0,i.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'#[Query]\n#[Security("is_logged() && user.age > 18")]\npublic function getNSFWImages(): array\n{\n    // ...\n}\n'))),(0,i.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Query\n * @Security("is_logged() && user.age > 18")\n */\npublic function getNSFWImages(): array\n{\n    // ...\n}\n')))),(0,i.kt)("h2",{id:"accessing-the-current-object"},"Accessing the current object"),(0,i.kt)("p",null,"You can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"this")," variable to access any (public) property / method of the current class."),(0,i.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'class Post {\n    #[Field]\n    #[Security("this.canAccessBody(user)")]\n    public function getBody(): array\n    {\n        // ...\n    }\n\n    public function canAccessBody(User $user): bool\n    {\n        // Some custom logic here\n    }\n}\n'))),(0,i.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},'class Post {\n    /**\n     * @Field\n     * @Security("this.canAccessBody(user)")\n     */\n    public function getBody(): array\n    {\n        // ...\n    }\n\n    public function canAccessBody(User $user): bool\n    {\n        // Some custom logic here\n    }\n}\n')))),(0,i.kt)("h2",{id:"available-scope"},"Available scope"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@Security")," annotation can be used in any query, mutation or field, so anywhere you have a ",(0,i.kt)("inlineCode",{parentName:"p"},"@Query"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"@Mutation"),"\nor ",(0,i.kt)("inlineCode",{parentName:"p"},"@Field")," annotation."),(0,i.kt)("h2",{id:"how-to-restrict-access-to-a-given-resource"},"How to restrict access to a given resource"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"is_granted")," method can be used to restrict access to a specific resource."),(0,i.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"php8",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"#[Security(\"is_granted('POST_SHOW', post)\")]\n"))),(0,i.kt)(o.Z,{value:"php7",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-php"},"@Security(\"is_granted('POST_SHOW', post)\")\n")))),(0,i.kt)("p",null,"If you are wondering how to configure these fine-grained permissions, this is not something that GraphQLite handles\nitself. Instead, this depends on the framework you are using."),(0,i.kt)("p",null,"If you are using Symfony, you will ",(0,i.kt)("a",{parentName:"p",href:"https://symfony.com/doc/current/security/voters.html"},"create a custom voter"),"."),(0,i.kt)("p",null,"If you are using Laravel, you will ",(0,i.kt)("a",{parentName:"p",href:"https://laravel.com/docs/6.x/authorization"},"create a Gate or a Policy"),"."),(0,i.kt)("p",null,"If you are using another framework, you need to know that the ",(0,i.kt)("inlineCode",{parentName:"p"},"is_granted")," function simply forwards the call to\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"isAllowed")," method of the configured ",(0,i.kt)("inlineCode",{parentName:"p"},"AuthorizationSerice"),". See ",(0,i.kt)("a",{parentName:"p",href:"/docs/4.1/implementing-security"},"Connecting GraphQLite to your framework's security module\n")," for more details"))}m.isMDXComponent=!0}}]);