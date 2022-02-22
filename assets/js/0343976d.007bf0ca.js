"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6130],{60020:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return l},default:function(){return h}});var i=n(87462),r=n(63366),a=(n(67294),n(3905)),o=["components"],s={id:"implementing-security",title:"Connecting GraphQLite to your framework's security module",sidebar_label:"Connecting security to your framework",original_id:"implementing-security"},u=void 0,c={unversionedId:"implementing-security",id:"version-4.0/implementing-security",isDocsHomePage:!1,title:"Connecting GraphQLite to your framework's security module",description:"This step is NOT necessary for users using GraphQLite through the Symfony Bundle or the Laravel package",source:"@site/versioned_docs/version-4.0/implementing-security.md",sourceDirName:".",slug:"/implementing-security",permalink:"/docs/4.0/implementing-security",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.0/implementing-security.md",tags:[],version:"4.0",lastUpdatedBy:"Faizan Akram Dar",lastUpdatedAt:1645550972,formattedLastUpdatedAt:"2/22/2022",frontMatter:{id:"implementing-security",title:"Connecting GraphQLite to your framework's security module",sidebar_label:"Connecting security to your framework",original_id:"implementing-security"},sidebar:"version-4.0/docs",previous:{title:"Fine grained security",permalink:"/docs/4.0/fine-grained-security"},next:{title:"Query plan",permalink:"/docs/4.0/query-plan"}},l=[],p={toc:l};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{class:"alert alert--info"},"This step is NOT necessary for users using GraphQLite through the Symfony Bundle or the Laravel package"),(0,a.kt)("p",null,"GraphQLite needs to know if a user is logged or not, and what rights it has.\nBut this is specific of the framework you use."),(0,a.kt)("p",null,"To plug GraphQLite to your framework's security mechanism, you will have to provide two classes implementing:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TheCodingMachine\\GraphQLite\\Security\\AuthenticationServiceInterface")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TheCodingMachine\\GraphQLite\\Security\\AuthorizationServiceInterface"))),(0,a.kt)("p",null,"Those two interfaces act as adapters between GraphQLite and your framework:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'interface AuthenticationServiceInterface\n{\n    /**\n     * Returns true if the "current" user is logged\n     */\n    public function isLogged(): bool;\n\n    /**\n     * Returns an object representing the current logged user.\n     * Can return null if the user is not logged.\n     */\n    public function getUser(): ?object;\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},'interface AuthorizationServiceInterface\n{\n    /**\n     * Returns true if the "current" user has access to the right "$right"\n     *\n     * @param mixed $subject The scope this right applies on. $subject is typically an object or a FQCN. Set $subject to "null" if the right is global.\n     */\n    public function isAllowed(string $right, $subject = null): bool;\n}\n')),(0,a.kt)("p",null,"You need to write classes that implement these interfaces. Then, you must register those classes with GraphQLite.\nIt you are ",(0,a.kt)("a",{parentName:"p",href:"/docs/4.0/other-frameworks"},"using the ",(0,a.kt)("inlineCode",{parentName:"a"},"SchemaFactory")),", you can register your classes using:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-php"},"// Configure an authentication service (to resolve the @Logged annotations).\n$schemaFactory->setAuthenticationService($myAuthenticationService);\n// Configure an authorization service (to resolve the @Right annotations).\n$schemaFactory->setAuthorizationService($myAuthorizationService);\n")))}h.isMDXComponent=!0}}]);