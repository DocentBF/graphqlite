"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8372],{93300:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=a(58168),t=(a(96540),a(15680));a(67443);const o={id:"other-frameworks",title:"Getting started with any framework",sidebar_label:"Other frameworks / No framework",original_id:"other-frameworks"},i=void 0,l={unversionedId:"other-frameworks",id:"version-4.0/other-frameworks",title:"Getting started with any framework",description:"If you are using Symfony 4.x, checkout the Symfony bundle.",source:"@site/versioned_docs/version-4.0/other_frameworks.mdx",sourceDirName:".",slug:"/other-frameworks",permalink:"/docs/4.0/other-frameworks",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.0/other_frameworks.mdx",tags:[],version:"4.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1713234680,formattedLastUpdatedAt:"Apr 16, 2024",frontMatter:{id:"other-frameworks",title:"Getting started with any framework",sidebar_label:"Other frameworks / No framework",original_id:"other-frameworks"},sidebar:"version-4.0/docs",previous:{title:"Universal service providers",permalink:"/docs/4.0/universal_service_providers"},next:{title:"Queries",permalink:"/docs/4.0/queries"}},s={},p=[{value:"Installation",id:"installation",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Integration",id:"integration",level:2},{value:"GraphQLite context",id:"graphqlite-context",level:3},{value:"Minimal example",id:"minimal-example",level:2},{value:"PSR-15 Middleware",id:"psr-15-middleware",level:2},{value:"Example",id:"example",level:3}],c={toc:p},d="wrapper";function u(e){let{components:n,...o}=e;return(0,t.yg)(d,(0,r.A)({},c,o,{components:n,mdxType:"MDXLayout"}),(0,t.yg)("p",null,"If you are using ",(0,t.yg)("strong",{parentName:"p"},"Symfony 4.x"),", checkout the ",(0,t.yg)("a",{parentName:"p",href:"/docs/4.0/symfony-bundle"},"Symfony bundle"),"."),(0,t.yg)("h2",{id:"installation"},"Installation"),(0,t.yg)("p",null,"Open a terminal in your current project directory and run:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-console"},"$ composer require thecodingmachine/graphqlite\n")),(0,t.yg)("h2",{id:"requirements"},"Requirements"),(0,t.yg)("p",null,"In order to bootstrap GraphQLite, you will need:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},"A PSR-11 compatible container"),(0,t.yg)("li",{parentName:"ul"},"A PSR-16 cache")),(0,t.yg)("p",null,"Additionally, you will have to route the HTTP requests to the underlying GraphQL library."),(0,t.yg)("p",null,"GraphQLite relies on the ",(0,t.yg)("a",{parentName:"p",href:"http://webonyx.github.io/graphql-php/"},"webonyx/graphql-php")," library internally.\nThis library plays well with PSR-7 requests and we also provide a ",(0,t.yg)("a",{parentName:"p",href:"#psr-15-middleware"},"PSR-15 middleware"),"."),(0,t.yg)("h2",{id:"integration"},"Integration"),(0,t.yg)("p",null,"Webonyx/graphql-php library requires a ",(0,t.yg)("a",{parentName:"p",href:"https://webonyx.github.io/graphql-php/type-system/schema/"},"Schema")," in order to resolve\nGraphQL queries. We provide a ",(0,t.yg)("inlineCode",{parentName:"p"},"SchemaFactory")," class to create such a schema:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\SchemaFactory;\n\n// $cache is a PSR-16 compatible cache\n// $container is a PSR-11 compatible container\n$factory = new SchemaFactory($cache, $container);\n$factory->addControllerNamespace('App\\\\Controllers\\\\')\n        ->addTypeNamespace('App\\\\');\n\n$schema = $factory->createSchema();\n")),(0,t.yg)("p",null,"You can now use this schema with ",(0,t.yg)("a",{parentName:"p",href:"https://webonyx.github.io/graphql-php/getting-started/#hello-world"},"Webonyx GraphQL facade"),"\nor the ",(0,t.yg)("a",{parentName:"p",href:"https://webonyx.github.io/graphql-php/executing-queries/#using-server"},"StandardServer class"),"."),(0,t.yg)("p",null,"The ",(0,t.yg)("inlineCode",{parentName:"p"},"SchemaFactory")," class also comes with a number of methods that you can use to customize your GraphQLite settings."),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-php"},'// Configure an authentication service (to resolve the @Logged annotations).\n$factory->setAuthenticationService(new VoidAuthenticationService());\n// Configure an authorization service (to resolve the @Right annotations).\n$factory->setAuthorizationService(new VoidAuthorizationService());\n// Change the naming convention of GraphQL types globally.\n$factory->setNamingStrategy(new NamingStrategy());\n// Add a custom type mapper.\n$factory->addTypeMapper($typeMapper);\n// Add a custom type mapper using a factory to create it.\n// Type mapper factories are useful if you need to inject the "recursive type mapper" into your type mapper constructor.\n$factory->addTypeMapperFactory($typeMapperFactory);\n// Add a root type mapper.\n$factory->addRootTypeMapper($rootTypeMapper);\n// Add a parameter mapper.\n$factory->addParameterMapper($parameterMapper);\n// Add a query provider. These are used to find queries and mutations in the application.\n$factory->addQueryProvider($queryProvider);\n// Add a query provider using a factory to create it.\n// Query provider factories are useful if you need to inject the "fields builder" into your query provider constructor.\n$factory->addQueryProviderFactory($queryProviderFactory);\n// Add custom options to the Webonyx underlying Schema.\n$factory->setSchemaConfig($schemaConfig);\n// Configures the time-to-live for the GraphQLite cache. Defaults to 2 seconds in dev mode.\n$factory->setGlobTtl(2);\n// Enables prod-mode (cache settings optimized for best performance).\n// This is a shortcut for `$schemaFactory->setGlobTtl(null)`\n$factory->prodMode();\n// Enables dev-mode (this is the default mode: cache settings optimized for best developer experience).\n// This is a shortcut for `$schemaFactory->setGlobTtl(2)`\n$factory->devMode();\n')),(0,t.yg)("h3",{id:"graphqlite-context"},"GraphQLite context"),(0,t.yg)("p",null,'Webonyx allows you pass a "context" object when running a query.\nFor some GraphQLite features to work (namely: the prefetch feature), GraphQLite needs you to initialize the Webonyx context\nwith an instance of the ',(0,t.yg)("inlineCode",{parentName:"p"},"TheCodingMachine\\GraphQLite\\Context\\Context")," class."),(0,t.yg)("p",null,"For instance:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\Context\\Context;\n\n$result = GraphQL::executeQuery($schema, $query, null, new Context(), $variableValues);\n")),(0,t.yg)("h2",{id:"minimal-example"},"Minimal example"),(0,t.yg)("p",null,"The smallest working example using no framework is:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-php"},"<?php\nuse GraphQL\\GraphQL;\nuse GraphQL\\Type\\Schema;\nuse TheCodingMachine\\GraphQLite\\SchemaFactory;\nuse TheCodingMachine\\GraphQLite\\Context\\Context;\n\n// $cache is a PSR-16 compatible cache.\n// $container is a PSR-11 compatible container.\n$factory = new SchemaFactory($cache, $container);\n$factory->addControllerNamespace('App\\\\Controllers\\\\')\n        ->addTypeNamespace('App\\\\');\n\n$schema = $factory->createSchema();\n\n$rawInput = file_get_contents('php://input');\n$input = json_decode($rawInput, true);\n$query = $input['query'];\n$variableValues = isset($input['variables']) ? $input['variables'] : null;\n\n$result = GraphQL::executeQuery($schema, $query, null, new Context(), $variableValues);\n$output = $result->toArray();\n\nheader('Content-Type: application/json');\necho json_encode($output);\n")),(0,t.yg)("h2",{id:"psr-15-middleware"},"PSR-15 Middleware"),(0,t.yg)("p",null,"When using a framework, you will need a way to route your HTTP requests to the ",(0,t.yg)("inlineCode",{parentName:"p"},"webonyx/graphql-php")," library."),(0,t.yg)("p",null,"If the framework you are using is compatible with PSR-15 (like Slim PHP or Zend-Expressive / Laminas), GraphQLite\ncomes with a PSR-15 middleware out of the box."),(0,t.yg)("p",null,"In order to get an instance of this middleware, you can use the ",(0,t.yg)("inlineCode",{parentName:"p"},"Psr15GraphQLMiddlewareBuilder")," builder class:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-php"},"// $schema is an instance of the GraphQL schema returned by SchemaFactory::createSchema (see previous chapter)\n$builder = new Psr15GraphQLMiddlewareBuilder($schema);\n\n$middleware = $builder->createMiddleware();\n\n// You can now inject your middleware in your favorite PSR-15 compatible framework.\n// For instance:\n$zendMiddlewarePipe->pipe($middleware);\n")),(0,t.yg)("p",null,"The builder offers a number of setters to modify its behaviour:"),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-php"},'$builder->setUrl("/graphql"); // Modify the URL endpoint (defaults to /graphql)\n$config = $builder->getConfig(); // Returns a Webonyx ServerConfig object. Use this object to configure Webonyx in details.\n$builder->setConfig($config);\n\n$builder->setResponseFactory(new ResponseFactory()); // Set a PSR-18 ResponseFactory (not needed if you are using zend-framework/zend-diactoros ^2\n$builder->setStreamFactory(new StreamFactory()); // Set a PSR-18 StreamFactory (not needed if you are using zend-framework/zend-diactoros ^2\n$builder->setHttpCodeDecider(new HttpCodeDecider()); // Set a class in charge of deciding the HTTP status code based on the response.\n')),(0,t.yg)("h3",{id:"example"},"Example"),(0,t.yg)("p",null,"In this example, we will focus on getting a working version of GraphQLite using:"),(0,t.yg)("ul",null,(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("a",{parentName:"li",href:"https://docs.zendframework.com/zend-stratigility/"},"Zend Stratigility")," as a PSR-15 server"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"mouf/picotainer")," (a micro-container) for the PSR-11 container"),(0,t.yg)("li",{parentName:"ul"},(0,t.yg)("inlineCode",{parentName:"li"},"symfony/cache ")," for the PSR-16 cache")),(0,t.yg)("p",null,"The choice of the libraries is really up to you. You can adapt it based on your needs."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"composer.json")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "autoload": {\n    "psr-4": {\n      "App\\\\": "src/"\n    }\n  },\n  "require": {\n    "thecodingmachine/graphqlite": "^4",\n    "zendframework/zend-diactoros": "^2",\n    "zendframework/zend-stratigility": "^3",\n    "zendframework/zend-httphandlerrunner": "^1.0",\n    "mouf/picotainer": "^1.1",\n    "symfony/cache": "^4.2"\n  },\n  "minimum-stability": "dev",\n  "prefer-stable": true\n}\n')),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"index.php")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-php"},"<?php\n\nuse Laminas\\Diactoros\\Response;\nuse Laminas\\Diactoros\\ServerRequest;\nuse Laminas\\Diactoros\\ServerRequestFactory;\nuse Zend\\HttpHandlerRunner\\Emitter\\SapiStreamEmitter;\nuse Zend\\Stratigility\\Middleware\\ErrorResponseGenerator;\nuse Zend\\Stratigility\\MiddlewarePipe;\nuse Laminas\\Diactoros\\Server;\nuse Zend\\HttpHandlerRunner\\RequestHandlerRunner;\n\nrequire_once __DIR__ . '/vendor/autoload.php';\n\n$container = require 'config/container.php';\n\n$serverRequestFactory = [ServerRequestFactory::class, 'fromGlobals'];\n\n$errorResponseGenerator = function (Throwable $e) {\n    $generator = new ErrorResponseGenerator();\n    return $generator($e, new ServerRequest(), new Response());\n};\n\n$runner = new RequestHandlerRunner(\n    $container->get(MiddlewarePipe::class),\n    new SapiStreamEmitter(),\n    $serverRequestFactory,\n    $errorResponseGenerator\n);\n$runner->run();\n")),(0,t.yg)("p",null,"Here we are initializing a Zend ",(0,t.yg)("inlineCode",{parentName:"p"},"RequestHandler")," (it receives requests) and we pass it to a Zend Stratigility ",(0,t.yg)("inlineCode",{parentName:"p"},"MiddlewarePipe"),".\nThis ",(0,t.yg)("inlineCode",{parentName:"p"},"MiddlewarePipe")," comes from the container declared in the ",(0,t.yg)("inlineCode",{parentName:"p"},"config/container.php")," file:"),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"config/container.php")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-php"},"<?php\n\nuse GraphQL\\Type\\Schema;\nuse Mouf\\Picotainer\\Picotainer;\nuse Psr\\Container\\ContainerInterface;\nuse Psr\\SimpleCache\\CacheInterface;\nuse Symfony\\Component\\Cache\\Simple\\ApcuCache;\nuse TheCodingMachine\\GraphQLite\\Http\\Psr15GraphQLMiddlewareBuilder;\nuse TheCodingMachine\\GraphQLite\\SchemaFactory;\nuse Zend\\Stratigility\\MiddlewarePipe;\n\n// Picotainer is a minimalist PSR-11 container.\nreturn new Picotainer([\n    MiddlewarePipe::class => function(ContainerInterface $container) {\n        $pipe = new MiddlewarePipe();\n        $pipe->pipe($container->get(WebonyxGraphqlMiddleware::class));\n        return $pipe;\n    },\n    // The WebonyxGraphqlMiddleware is a PSR-15 compatible\n    // middleware that exposes Webonyx schemas.\n    WebonyxGraphqlMiddleware::class => function(ContainerInterface $container) {\n        $builder = new Psr15GraphQLMiddlewareBuilder($container->get(Schema::class));\n        return $builder->createMiddleware();\n    },\n    CacheInterface::class => function() {\n        return new ApcuCache();\n    },\n    Schema::class => function(ContainerInterface $container) {\n        // The magic happens here. We create a schema using GraphQLite SchemaFactory.\n        $factory = new SchemaFactory($container->get(CacheInterface::class), $container);\n        $factory->addControllerNamespace('App\\\\Controllers\\\\');\n        $factory->addTypeNamespace('App\\\\');\n        return $factory->createSchema();\n    }\n]);\n")),(0,t.yg)("p",null,"Now, we need to add a first query and therefore create a controller.\nThe application will look into the ",(0,t.yg)("inlineCode",{parentName:"p"},"App\\Controllers")," namespace for GraphQLite controllers."),(0,t.yg)("p",null,"It assumes that the container has an entry whose name is the controller's fully qualified class name."),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"src/Controllers/MyController.php")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-php"},"namespace App\\Controllers;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Query;\n\nclass MyController\n{\n    /**\n     * @Query\n     */\n    public function hello(string $name): string\n    {\n        return 'Hello '.$name;\n    }\n}\n")),(0,t.yg)("p",null,(0,t.yg)("strong",{parentName:"p"},"config/container.php")),(0,t.yg)("pre",null,(0,t.yg)("code",{parentName:"pre",className:"language-php"},"use App\\Controllers\\MyController;\n\nreturn new Picotainer([\n    // ...\n\n    // We declare the controller in the container.\n    MyController::class => function() {\n        return new MyController();\n    },\n]);\n")),(0,t.yg)("p",null,"And we are done! You can now test your query using your favorite GraphQL client."),(0,t.yg)("p",null,(0,t.yg)("img",{src:a(67258).A,width:"1132",height:"352"})))}u.isMDXComponent=!0},67258:(e,n,a)=>{a.d(n,{A:()=>r});const r=a.p+"assets/images/query1-5a22bbe2398efcc725ea571a07ff2c9b.png"}}]);