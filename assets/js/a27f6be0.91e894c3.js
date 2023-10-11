"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6357],{6147:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=i(7462),r=(i(7294),i(3905));i(1839);const a={id:"implementing-security",title:"Connecting GraphQLite to your framework's security module",sidebar_label:"Connecting security to your framework",original_id:"implementing-security"},s=void 0,o={unversionedId:"implementing-security",id:"version-4.1/implementing-security",title:"Connecting GraphQLite to your framework's security module",description:"This step is NOT necessary for users using GraphQLite through the Symfony Bundle or the Laravel package",source:"@site/versioned_docs/version-4.1/implementing-security.md",sourceDirName:".",slug:"/implementing-security",permalink:"/docs/4.1/implementing-security",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.1/implementing-security.md",tags:[],version:"4.1",lastUpdatedBy:"Mistral Oz",lastUpdatedAt:1697045427,formattedLastUpdatedAt:"Oct 11, 2023",frontMatter:{id:"implementing-security",title:"Connecting GraphQLite to your framework's security module",sidebar_label:"Connecting security to your framework",original_id:"implementing-security"},sidebar:"version-4.1/docs",previous:{title:"Fine grained security",permalink:"/docs/4.1/fine-grained-security"},next:{title:"Query plan",permalink:"/docs/4.1/query-plan"}},c={},u=[],l={toc:u},p="wrapper";function h(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{class:"alert alert--info"},"This step is NOT necessary for users using GraphQLite through the Symfony Bundle or the Laravel package"),(0,r.kt)("p",null,"GraphQLite needs to know if a user is logged or not, and what rights it has.\nBut this is specific of the framework you use."),(0,r.kt)("p",null,"To plug GraphQLite to your framework's security mechanism, you will have to provide two classes implementing:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TheCodingMachine\\GraphQLite\\Security\\AuthenticationServiceInterface")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TheCodingMachine\\GraphQLite\\Security\\AuthorizationServiceInterface"))),(0,r.kt)("p",null,"Those two interfaces act as adapters between GraphQLite and your framework:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'interface AuthenticationServiceInterface\n{\n    /**\n     * Returns true if the "current" user is logged\n     */\n    public function isLogged(): bool;\n\n    /**\n     * Returns an object representing the current logged user.\n     * Can return null if the user is not logged.\n     */\n    public function getUser(): ?object;\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},'interface AuthorizationServiceInterface\n{\n    /**\n     * Returns true if the "current" user has access to the right "$right"\n     *\n     * @param mixed $subject The scope this right applies on. $subject is typically an object or a FQCN. Set $subject to "null" if the right is global.\n     */\n    public function isAllowed(string $right, $subject = null): bool;\n}\n')),(0,r.kt)("p",null,"You need to write classes that implement these interfaces. Then, you must register those classes with GraphQLite.\nIt you are ",(0,r.kt)("a",{parentName:"p",href:"/docs/4.1/other-frameworks"},"using the ",(0,r.kt)("inlineCode",{parentName:"a"},"SchemaFactory")),", you can register your classes using:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"// Configure an authentication service (to resolve the @Logged annotations).\n$schemaFactory->setAuthenticationService($myAuthenticationService);\n// Configure an authorization service (to resolve the @Right annotations).\n$schemaFactory->setAuthorizationService($myAuthorizationService);\n")))}h.isMDXComponent=!0}}]);