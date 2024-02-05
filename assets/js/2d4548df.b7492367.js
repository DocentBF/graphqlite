"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1720],{1628:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var i=t(5072),a=(t(1504),t(5788));t(5490);const l={id:"field-middlewares",title:"Adding custom annotations with Field middlewares",sidebar_label:"Custom annotations"},r=void 0,o={unversionedId:"field-middlewares",id:"field-middlewares",title:"Adding custom annotations with Field middlewares",description:"Available in GraphQLite 4.0+",source:"@site/docs/field-middlewares.md",sourceDirName:".",slug:"/field-middlewares",permalink:"/docs/next/field-middlewares",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/docs/field-middlewares.md",tags:[],version:"current",lastUpdatedBy:"Jacob Thomason",lastUpdatedAt:1707100686,formattedLastUpdatedAt:"Feb 5, 2024",frontMatter:{id:"field-middlewares",title:"Adding custom annotations with Field middlewares",sidebar_label:"Custom annotations"},sidebar:"docs",previous:{title:"Custom types",permalink:"/docs/next/custom-types"},next:{title:"Custom argument resolving",permalink:"/docs/next/argument-resolving"}},d={},s=[{value:"Field middlewares",id:"field-middlewares",level:2},{value:"Annotations parsing",id:"annotations-parsing",level:2}],u={toc:s},p="wrapper";function c(e){let{components:n,...l}=e;return(0,a.yg)(p,(0,i.c)({},u,l,{components:n,mdxType:"MDXLayout"}),(0,a.yg)("small",null,"Available in GraphQLite 4.0+"),(0,a.yg)("p",null,"Just like the ",(0,a.yg)("inlineCode",{parentName:"p"},"@Logged")," or ",(0,a.yg)("inlineCode",{parentName:"p"},"@Right")," annotation, you can develop your own annotation that extends/modifies the behaviour of a field/query/mutation."),(0,a.yg)("div",{class:"alert alert--warning"},"If you want to create an annotation that targets a single argument (like ",(0,a.yg)("code",null,'@AutoWire(for="$service")'),"), you should rather check the documentation about ",(0,a.yg)("a",{href:"argument-resolving"},"custom argument resolving")),(0,a.yg)("h2",{id:"field-middlewares"},"Field middlewares"),(0,a.yg)("p",null,"GraphQLite is based on the Webonyx/Graphql-PHP library. In Webonyx, fields are represented by the ",(0,a.yg)("inlineCode",{parentName:"p"},"FieldDefinition")," class.\nIn order to create a ",(0,a.yg)("inlineCode",{parentName:"p"},"FieldDefinition"),' instance for your field, GraphQLite goes through a series of "middlewares".'),(0,a.yg)("p",null,(0,a.yg)("img",{src:t(3048).c,width:"960",height:"540"})),(0,a.yg)("p",null,"Each middleware is passed a ",(0,a.yg)("inlineCode",{parentName:"p"},"TheCodingMachine\\GraphQLite\\QueryFieldDescriptor")," instance. This object contains all the\nparameters used to initialize the field (like the return type, the list of arguments, the resolver to be used, etc...)"),(0,a.yg)("p",null,"Each middleware must return a ",(0,a.yg)("inlineCode",{parentName:"p"},"GraphQL\\Type\\Definition\\FieldDefinition")," (the object representing a field in Webonyx/GraphQL-PHP)."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-php"},"/**\n * Your middleware must implement this interface.\n */\ninterface FieldMiddlewareInterface\n{\n    public function process(QueryFieldDescriptor $queryFieldDescriptor, FieldHandlerInterface $fieldHandler): ?FieldDefinition;\n}\n")),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-php"},"class QueryFieldDescriptor\n{\n    public function getName() { /* ... */ }\n    public function withName(string $name): self  { /* ... */ }\n    public function getType() { /* ... */ }\n    public function withType($type): self  { /* ... */ }\n    public function getParameters(): array  { /* ... */ }\n    public function withParameters(array $parameters): self  { /* ... */ }\n    public function withCallable(callable $callable): self { /* ... */ }\n    public function withTargetMethodOnSource(?string $targetMethodOnSource): self { /* ... */ }\n    public function isInjectSource(): bool { /* ... */ }\n    public function withInjectSource(bool $injectSource): self { /* ... */ }\n    public function getComment(): ?string { /* ... */ }\n    public function withComment(?string $comment): self { /* ... */ }\n    public function getMiddlewareAnnotations(): MiddlewareAnnotations { /* ... */ }\n    public function withMiddlewareAnnotations(MiddlewareAnnotations $middlewareAnnotations): self { /* ... */ }\n    public function getOriginalResolver(): ResolverInterface { /* ... */ }\n    public function getResolver(): callable { /* ... */ }\n    public function withResolver(callable $resolver): self { /* ... */ }\n}\n")),(0,a.yg)("p",null,"The role of a middleware is to analyze the ",(0,a.yg)("inlineCode",{parentName:"p"},"QueryFieldDescriptor")," and modify it (or to directly return a ",(0,a.yg)("inlineCode",{parentName:"p"},"FieldDefinition"),")."),(0,a.yg)("p",null,"If you want the field to purely disappear, your middleware can return ",(0,a.yg)("inlineCode",{parentName:"p"},"null"),", although this should be used with caution:\nfield middlewares only get called once per Schema instance. If you use a long-running server (like Laravel Octane, Swoole, RoadRunner etc)\nand share the same Schema instance across requests, you will not be able to hide fields based on request data."),(0,a.yg)("h2",{id:"annotations-parsing"},"Annotations parsing"),(0,a.yg)("p",null,"Take a look at the ",(0,a.yg)("inlineCode",{parentName:"p"},"QueryFieldDescriptor::getMiddlewareAnnotations()"),"."),(0,a.yg)("p",null,"It returns the list of annotations applied to your field that implements the ",(0,a.yg)("inlineCode",{parentName:"p"},"MiddlewareAnnotationInterface"),"."),(0,a.yg)("p",null,"Let's imagine you want to add a ",(0,a.yg)("inlineCode",{parentName:"p"},"@OnlyDebug")," annotation that displays a field/query/mutation only in debug mode (and\nhides the field in production). That could be useful, right?"),(0,a.yg)("p",null,"First, we have to define the annotation. Annotations are handled by the great ",(0,a.yg)("a",{parentName:"p",href:"https://www.doctrine-project.org/projects/doctrine-annotations/en/1.6/index.html"},"doctrine/annotations")," library (for PHP 7+) and/or by PHP 8 attributes."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-php",metastring:'title="OnlyDebug.php"',title:'"OnlyDebug.php"'},'namespace App\\Annotations;\n\nuse Attribute;\nuse TheCodingMachine\\GraphQLite\\Annotations\\MiddlewareAnnotationInterface;\n\n/**\n * @Annotation\n * @Target({"METHOD", "ANNOTATION"})\n */\n#[Attribute(Attribute::TARGET_METHOD)]\nclass OnlyDebug implements MiddlewareAnnotationInterface\n{\n}\n')),(0,a.yg)("p",null,"Apart from being a classical annotation/attribute, this class implements the ",(0,a.yg)("inlineCode",{parentName:"p"},"MiddlewareAnnotationInterface"),'. This interface is a "marker" interface. It does not have any methods. It is just used to tell GraphQLite that this annotation is to be used by middlewares.'),(0,a.yg)("p",null,"Now, we can write a middleware that will act upon this annotation."),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-php"},"namespace App\\Middlewares;\n\nuse App\\Annotations\\OnlyDebug;\nuse TheCodingMachine\\GraphQLite\\Middlewares\\FieldMiddlewareInterface;\nuse GraphQL\\Type\\Definition\\FieldDefinition;\nuse TheCodingMachine\\GraphQLite\\QueryFieldDescriptor;\n\n/**\n * Middleware in charge of hiding a field if it is annotated with @OnlyDebug and the DEBUG constant is not set\n */\nclass OnlyDebugFieldMiddleware implements FieldMiddlewareInterface\n{\n    public function process(QueryFieldDescriptor $queryFieldDescriptor, FieldHandlerInterface $fieldHandler): ?FieldDefinition\n    {\n        $annotations = $queryFieldDescriptor->getMiddlewareAnnotations();\n\n        /**\n         * @var OnlyDebug $onlyDebug\n         */\n        $onlyDebug = $annotations->getAnnotationByType(OnlyDebug::class);\n\n        if ($onlyDebug !== null && !DEBUG) {\n            // If the onlyDebug annotation is present, returns null.\n            // Returning null will hide the field.\n            return null;\n        }\n\n        // Otherwise, let's continue the middleware pipe without touching anything.\n        return $fieldHandler->handle($queryFieldDescriptor);\n    }\n}\n")),(0,a.yg)("p",null,"The final thing we have to do is to register the middleware."),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"Assuming you are using the ",(0,a.yg)("inlineCode",{parentName:"p"},"SchemaFactory")," to initialize GraphQLite, you can register the field middleware using:"),(0,a.yg)("pre",{parentName:"li"},(0,a.yg)("code",{parentName:"pre",className:"language-php"},"$schemaFactory->addFieldMiddleware(new OnlyDebugFieldMiddleware());\n"))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"If you are using the Symfony bundle, you can register your field middleware services by tagging them with the ",(0,a.yg)("inlineCode",{parentName:"p"},"graphql.field_middleware")," tag."))))}c.isMDXComponent=!0},3048:(e,n,t)=>{t.d(n,{c:()=>i});const i=t.p+"assets/images/field_middleware-5c3e3b4da480c49d048d527f93cc970d.svg"}}]);