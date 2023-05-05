"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8165],{3096:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var n=i(7462),a=(i(7294),i(3905));i(1839);const o={id:"autowiring",title:"Autowiring services",sidebar_label:"Autowiring services",original_id:"autowiring"},r=void 0,s={unversionedId:"autowiring",id:"version-4.0/autowiring",title:"Autowiring services",description:"GraphQLite can automatically inject services in your fields/queries/mutations signatures.",source:"@site/versioned_docs/version-4.0/autowiring.mdx",sourceDirName:".",slug:"/autowiring",permalink:"/docs/4.0/autowiring",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.0/autowiring.mdx",tags:[],version:"4.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1683288559,formattedLastUpdatedAt:"May 5, 2023",frontMatter:{id:"autowiring",title:"Autowiring services",sidebar_label:"Autowiring services",original_id:"autowiring"},sidebar:"version-4.0/docs",previous:{title:"Type mapping",permalink:"/docs/4.0/type_mapping"},next:{title:"Extending a type",permalink:"/docs/4.0/extend_type"}},l={},u=[{value:"Sample",id:"sample",level:2},{value:"Best practices",id:"best-practices",level:2},{value:"Fetching a service by name (discouraged!)",id:"fetching-a-service-by-name-discouraged",level:2},{value:"Alternative solution",id:"alternative-solution",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...i}=e;return(0,a.kt)(d,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"GraphQLite can automatically inject services in your fields/queries/mutations signatures."),(0,a.kt)("p",null,"Some of your fields may be computed. In order to compute these fields, you might need to call a service."),(0,a.kt)("p",null,"Most of the time, your ",(0,a.kt)("inlineCode",{parentName:"p"},"@Type")," annotation will be put on a model. And models do not have access to services.\nHopefully, if you add a type-hinted service in your field's declaration, GraphQLite will automatically fill it with\nthe service instance."),(0,a.kt)("h2",{id:"sample"},"Sample"),(0,a.kt)("p",null,"Let's assume you are running an international store. You have a ",(0,a.kt)("inlineCode",{parentName:"p"},"Product")," class. Each product has many names (depending\non the language of the user)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Entities;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Autowire;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\n\nuse Symfony\\Component\\Translation\\TranslatorInterface;\n\n/**\n * @Type()\n */\nclass Product\n{\n    // ...\n\n    /**\n     * @Field()\n     * @Autowire(for=\"$translator\")\n     */\n    public function getName(TranslatorInterface $translator): string\n    {\n        return $translator->trans('product_name_'.$this->id);\n    }\n}\n")),(0,a.kt)("p",null,"When GraphQLite queries the name, it will automatically fetch the translator service."),(0,a.kt)("div",{class:"alert alert--warning"},"As with most autowiring solutions, GraphQLite assumes that the service identifier in the container is the fully qualified class name of the type-hint. So in the example above, GraphQLite will look for a service whose name is ",(0,a.kt)("code",null,"Symfony\\Component\\Translation\\TranslatorInterface"),"."),(0,a.kt)("h2",{id:"best-practices"},"Best practices"),(0,a.kt)("p",null,"It is a good idea to refrain from type-hinting on concrete implementations.\nMost often, your field declaration will be in your model. If you add a type-hint on a service, you are binding your domain\nwith a particular service implementation. This makes your code tightly coupled and less testable."),(0,a.kt)("div",{class:"alert alert--danger"},"Please don't do that:",(0,a.kt)("pre",null,(0,a.kt)("code",null,"    /** * @Field() */ public function getName(MyTranslator $translator): string"))),(0,a.kt)("p",null,"Instead, be sure to type-hint against an interface."),(0,a.kt)("div",{class:"alert alert--success"},"Do this instead:",(0,a.kt)("pre",null,(0,a.kt)("code",null,"    /** * @Field() */ public function getName(TranslatorInterface $translator): string"))),(0,a.kt)("p",null,"By type-hinting against an interface, your code remains testable and is decoupled from the service implementation."),(0,a.kt)("h2",{id:"fetching-a-service-by-name-discouraged"},"Fetching a service by name (discouraged!)"),(0,a.kt)("p",null,"Optionally, you can specify the identifier of the service you want to fetch from the controller:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'/**\n * @Autowire(for="$translator", identifier="translator")\n */\n')),(0,a.kt)("div",{class:"alert alert--danger"},"While GraphQLite offers the possibility to specify the name of the service to be autowired, we would like to emphasize that this is ",(0,a.kt)("strong",null,"highly discouraged"),'. Hard-coding a container identifier in the code of your class is akin to using the "service locator" pattern, which is known to be an anti-pattern. Please refrain from doing this as much as possible.'),(0,a.kt)("h2",{id:"alternative-solution"},"Alternative solution"),(0,a.kt)("p",null,"You may find yourself uncomfortable with the autowiring mechanism of GraphQLite. For instance maybe:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Your service identifier in the container is not the fully qualified class name of the service (this is often true if you are not using a container supporting autowiring)"),(0,a.kt)("li",{parentName:"ul"},"You do not want to inject a service in a domain object"),(0,a.kt)("li",{parentName:"ul"},"You simply do not like the magic of injecting services in a method signature")),(0,a.kt)("p",null,"If you do not want to use autowiring and if you still need to access services to compute a field, please read on\nthe next chapter to learn ",(0,a.kt)("a",{parentName:"p",href:"extend_type"},"how to extend a type"),"."))}p.isMDXComponent=!0}}]);