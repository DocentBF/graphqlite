"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2964],{64417:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>g,frontMatter:()=>l,metadata:()=>p,toc:()=>s});var a=n(58168),o=(n(96540),n(15680)),r=(n(67443),n(11470)),i=n(19365);const l={id:"input-types",title:"Input types",sidebar_label:"Input types",original_id:"input-types"},u=void 0,p={unversionedId:"input-types",id:"version-4.1/input-types",title:"Input types",description:"Let's admit you are developing an API that returns a list of cities around a location.",source:"@site/versioned_docs/version-4.1/input-types.mdx",sourceDirName:".",slug:"/input-types",permalink:"/docs/4.1/input-types",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.1/input-types.mdx",tags:[],version:"4.1",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1712007085,formattedLastUpdatedAt:"Apr 1, 2024",frontMatter:{id:"input-types",title:"Input types",sidebar_label:"Input types",original_id:"input-types"},sidebar:"version-4.1/docs",previous:{title:"External type declaration",permalink:"/docs/4.1/external_type_declaration"},next:{title:"Inheritance and interfaces",permalink:"/docs/4.1/inheritance-interfaces"}},c={},s=[{value:"Specifying the input type name",id:"specifying-the-input-type-name",level:3},{value:"Forcing an input type",id:"forcing-an-input-type",level:3},{value:"Declaring several input types for the same PHP class",id:"declaring-several-input-types-for-the-same-php-class",level:3},{value:"Ignoring some parameters",id:"ignoring-some-parameters",level:3}],d={toc:s},y="wrapper";function g(e){let{components:t,...n}=e;return(0,o.yg)(y,(0,a.A)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("p",null,"Let's admit you are developing an API that returns a list of cities around a location."),(0,o.yg)("p",null,"Your GraphQL query might look like this:"),(0,o.yg)(r.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.yg)(i.A,{value:"php8",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @return City[]\n     */\n    #[Query]\n    public function getCities(Location $location, float $radius): array\n    {\n        // Some code that returns an array of cities.\n    }\n}\n\n// Class Location is a simple value-object.\nclass Location\n{\n    private $latitude;\n    private $longitude;\n\n    public function __construct(float $latitude, float $longitude)\n    {\n        $this->latitude = $latitude;\n        $this->longitude = $longitude;\n    }\n\n    public function getLatitude(): float\n    {\n        return $this->latitude;\n    }\n\n    public function getLongitude(): float\n    {\n        return $this->longitude;\n    }\n}\n"))),(0,o.yg)(i.A,{value:"php7",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},"class MyController\n{\n    /**\n     * @Query\n     * @return City[]\n     */\n    public function getCities(Location $location, float $radius): array\n    {\n        // Some code that returns an array of cities.\n    }\n}\n\n// Class Location is a simple value-object.\nclass Location\n{\n    private $latitude;\n    private $longitude;\n\n    public function __construct(float $latitude, float $longitude)\n    {\n        $this->latitude = $latitude;\n        $this->longitude = $longitude;\n    }\n\n    public function getLatitude(): float\n    {\n        return $this->latitude;\n    }\n\n    public function getLongitude(): float\n    {\n        return $this->longitude;\n    }\n}\n")))),(0,o.yg)("p",null,"If you try to run this code, you will get the following error:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},'CannotMapTypeException: cannot map class "Location" to a known GraphQL input type. Check your TypeMapper configuration.\n')),(0,o.yg)("p",null,"You are running into this error because GraphQLite does not know how to handle the ",(0,o.yg)("inlineCode",{parentName:"p"},"Location")," object."),(0,o.yg)("p",null,"In GraphQL, an object passed in parameter of a query or mutation (or any field) is called an ",(0,o.yg)("strong",{parentName:"p"},"Input Type"),"."),(0,o.yg)("p",null,"In order to declare that type, in GraphQLite, we will declare a ",(0,o.yg)("strong",{parentName:"p"},"Factory"),"."),(0,o.yg)("p",null,"A ",(0,o.yg)("strong",{parentName:"p"},"Factory")," is a method that takes in parameter all the fields of the input type and return an object."),(0,o.yg)("p",null,"Here is an example of factory:"),(0,o.yg)(r.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.yg)(i.A,{value:"php8",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"class MyFactory\n{\n    /**\n     * The Factory annotation will create automatically a LocationInput input type in GraphQL.\n     */\n    #[Factory]\n    public function createLocation(float $latitude, float $longitude): Location\n    {\n        return new Location($latitude, $longitude);\n    }\n}\n"))),(0,o.yg)(i.A,{value:"php7",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"class MyFactory\n{\n    /**\n     * The Factory annotation will create automatically a LocationInput input type in GraphQL.\n     *\n     * @Factory()\n     */\n    public function createLocation(float $latitude, float $longitude): Location\n    {\n        return new Location($latitude, $longitude);\n    }\n}\n")))),(0,o.yg)("p",null,"and now, you can run query like this:"),(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"mutation {\n  getCities(location: {\n              latitude: 45.0,\n              longitude: 0.0,\n            },\n            radius: 42)\n  {\n    id,\n    name\n  }\n}\n")),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"Factories must be declared with the ",(0,o.yg)("strong",{parentName:"li"},"@Factory")," annotation."),(0,o.yg)("li",{parentName:"ul"},"The parameters of the factories are the field of the GraphQL input type")),(0,o.yg)("p",null,"A few important things to notice:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},"The container MUST contain the factory class. The identifier of the factory MUST be the fully qualified class name of the class that contains the factory.\nThis is usually already the case if you are using a container with auto-wiring capabilities"),(0,o.yg)("li",{parentName:"ul"},"We recommend that you put the factories in the same directories as the types.")),(0,o.yg)("h3",{id:"specifying-the-input-type-name"},"Specifying the input type name"),(0,o.yg)("p",null,"The GraphQL input type name is derived from the return type of the factory."),(0,o.yg)("p",null,'Given the factory below, the return type is "Location", therefore, the GraphQL input type will be named "LocationInput".'),(0,o.yg)(r.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.yg)(i.A,{value:"php8",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"/**\n * @Factory()\n */\npublic function createLocation(float $latitude, float $longitude): Location\n{\n    return new Location($latitude, $longitude);\n}\n"))),(0,o.yg)(i.A,{value:"php7",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre"},"#[Factory]\npublic function createLocation(float $latitude, float $longitude): Location\n{\n    return new Location($latitude, $longitude);\n}\n")))),(0,o.yg)("p",null,'In case you want to override the input type name, you can use the "name" attribute of the @Factory annotation:'),(0,o.yg)(r.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.yg)(i.A,{value:"php8",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},"#[Factory(name: 'MyNewInputName', default: true)]\n"))),(0,o.yg)(i.A,{value:"php7",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},'/**\n * @Factory(name="MyNewInputName", default=true)\n */\n')))),(0,o.yg)("p",null,'Note that you need to add the "default" attribute is you want your factory to be used by default (more on this in\nthe next chapter).'),(0,o.yg)("p",null,"Unless you want to have several factories for the same PHP class, the input type name will be completely transparent\nto you, so there is no real reason to customize it."),(0,o.yg)("h3",{id:"forcing-an-input-type"},"Forcing an input type"),(0,o.yg)("p",null,"You can use the ",(0,o.yg)("inlineCode",{parentName:"p"},"@UseInputType")," annotation to force an input type of a parameter."),(0,o.yg)("p",null,'Let\'s say you want to force a parameter to be of type "ID", you can use this:'),(0,o.yg)(r.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.yg)(i.A,{value:"php8",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},'#[Factory]\n#[UseInputType(for: "$id", inputType:"ID!")]\npublic function getProductById(string $id): Product\n{\n    return $this->productRepository->findById($id);\n}\n'))),(0,o.yg)(i.A,{value:"php7",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},'/**\n * @Factory()\n * @UseInputType(for="$id", inputType="ID!")\n */\npublic function getProductById(string $id): Product\n{\n    return $this->productRepository->findById($id);\n}\n')))),(0,o.yg)("h3",{id:"declaring-several-input-types-for-the-same-php-class"},"Declaring several input types for the same PHP class"),(0,o.yg)("small",null,"Available in GraphQLite 4.0+"),(0,o.yg)("p",null,"There are situations where a given PHP class might use one factory or another depending on the context."),(0,o.yg)("p",null,"This is often the case when your objects map database entities.\nIn these cases, you can use combine the use of ",(0,o.yg)("inlineCode",{parentName:"p"},"@UseInputType")," and ",(0,o.yg)("inlineCode",{parentName:"p"},"@Factory")," annotation to achieve your goal."),(0,o.yg)("p",null,"Here is an annotated sample:"),(0,o.yg)(r.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.yg)(i.A,{value:"php8",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},'/**\n * This class contains 2 factories to create Product objects.\n * The "getProduct" method is used by default to map "Product" classes.\n * The "createProduct" method will generate another input type named "CreateProductInput"\n */\nclass ProductFactory\n{\n    // ...\n\n    /**\n     * This factory will be used by default to map "Product" classes.\n     */\n    #[Factory(name: "ProductRefInput", default: true)]\n    public function getProduct(string $id): Product\n    {\n        return $this->productRepository->findById($id);\n    }\n    /**\n     * We specify a name for this input type explicitly.\n     */\n    #[Factory(name: "CreateProductInput", default: false)]\n    public function createProduct(string $name, string $type): Product\n    {\n        return new Product($name, $type);\n    }\n}\n\nclass ProductController\n{\n    /**\n     * The "createProduct" factory will be used for this mutation.\n     */\n    #[Mutation]\n    #[UseInputType(for: "$product", inputType: "CreateProductInput!")]\n    public function saveProduct(Product $product): Product\n    {\n        // ...\n    }\n\n    /**\n     * The default "getProduct" factory will be used for this query.\n     *\n     * @return Color[]\n     */\n    #[Query]\n    public function availableColors(Product $product): array\n    {\n        // ...\n    }\n}\n'))),(0,o.yg)(i.A,{value:"php7",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},'/**\n * This class contains 2 factories to create Product objects.\n * The "getProduct" method is used by default to map "Product" classes.\n * The "createProduct" method will generate another input type named "CreateProductInput"\n */\nclass ProductFactory\n{\n    // ...\n\n    /**\n     * This factory will be used by default to map "Product" classes.\n     * @Factory(name="ProductRefInput", default=true)\n     */\n    public function getProduct(string $id): Product\n    {\n        return $this->productRepository->findById($id);\n    }\n    /**\n     * We specify a name for this input type explicitly.\n     * @Factory(name="CreateProductInput", default=false)\n     */\n    public function createProduct(string $name, string $type): Product\n    {\n        return new Product($name, $type);\n    }\n}\n\nclass ProductController\n{\n    /**\n     * The "createProduct" factory will be used for this mutation.\n     *\n     * @Mutation\n     * @UseInputType(for="$product", inputType="CreateProductInput!")\n     */\n    public function saveProduct(Product $product): Product\n    {\n        // ...\n    }\n\n    /**\n     * The default "getProduct" factory will be used for this query.\n     *\n     * @Query\n     * @return Color[]\n     */\n    public function availableColors(Product $product): array\n    {\n        // ...\n    }\n}\n')))),(0,o.yg)("h3",{id:"ignoring-some-parameters"},"Ignoring some parameters"),(0,o.yg)("small",null,"Available in GraphQLite 4.0+"),(0,o.yg)("p",null,"GraphQLite will automatically map all your parameters to an input type.\nBut sometimes, you might want to avoid exposing some of those parameters."),(0,o.yg)("p",null,"Image your ",(0,o.yg)("inlineCode",{parentName:"p"},"getProductById")," has an additional ",(0,o.yg)("inlineCode",{parentName:"p"},"lazyLoad")," parameter. This parameter is interesting when you call\ndirectly the function in PHP because you can have some level of optimisation on your code. But it is not something that\nyou want to expose in the GraphQL API. Let's hide it!"),(0,o.yg)(r.A,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.yg)(i.A,{value:"php8",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},"#[Factory]\npublic function getProductById(\n        string $id,\n        #[HideParameter]\n        bool $lazyLoad = true\n    ): Product\n{\n    return $this->productRepository->findById($id, $lazyLoad);\n}\n"))),(0,o.yg)(i.A,{value:"php7",mdxType:"TabItem"},(0,o.yg)("pre",null,(0,o.yg)("code",{parentName:"pre",className:"language-php"},'/**\n * @Factory()\n * @HideParameter(for="$lazyLoad")\n */\npublic function getProductById(string $id, bool $lazyLoad = true): Product\n{\n    return $this->productRepository->findById($id, $lazyLoad);\n}\n')))),(0,o.yg)("p",null,"With the ",(0,o.yg)("inlineCode",{parentName:"p"},"@HideParameter")," annotation, you can choose to remove from the GraphQL schema any argument."),(0,o.yg)("p",null,"To be able to hide an argument, the argument must have a default value."))}g.isMDXComponent=!0}}]);