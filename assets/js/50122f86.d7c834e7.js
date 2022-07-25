"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2521],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,g=c["".concat(u,".").concat(m)]||c[m]||d[m]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},41454:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={id:"symfony-bundle-advanced",title:"Symfony bundle: advanced usage",sidebar_label:"Symfony specific features",original_id:"symfony-bundle-advanced"},i=void 0,l={unversionedId:"symfony-bundle-advanced",id:"version-4.0/symfony-bundle-advanced",title:"Symfony bundle: advanced usage",description:"The Symfony bundle comes with a number of features to ease the integration of GraphQLite in Symfony.",source:"@site/versioned_docs/version-4.0/symfony-bundle-advanced.mdx",sourceDirName:".",slug:"/symfony-bundle-advanced",permalink:"/docs/4.0/symfony-bundle-advanced",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.0/symfony-bundle-advanced.mdx",tags:[],version:"4.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1658784242,formattedLastUpdatedAt:"7/25/2022",frontMatter:{id:"symfony-bundle-advanced",title:"Symfony bundle: advanced usage",sidebar_label:"Symfony specific features",original_id:"symfony-bundle-advanced"},sidebar:"version-4.0/docs",previous:{title:"Class with multiple output types",permalink:"/docs/4.0/multiple_output_types"},next:{title:"Laravel specific features",permalink:"/docs/4.0/laravel-package-advanced"}},u={},s=[{value:"Login and logout",id:"login-and-logout",level:2},{value:"Login using the &quot;login&quot; mutation",id:"login-using-the-login-mutation",level:3},{value:"Get the current user with the &quot;me&quot; query",id:"get-the-current-user-with-the-me-query",level:3},{value:"Logout using the &quot;logout&quot; mutation",id:"logout-using-the-logout-mutation",level:3},{value:"Injecting the Request",id:"injecting-the-request",level:2}],p={toc:s};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The Symfony bundle comes with a number of features to ease the integration of GraphQLite in Symfony."),(0,r.kt)("h2",{id:"login-and-logout"},"Login and logout"),(0,r.kt)("p",null,'Out of the box, the GraphQLite bundle will expose a "login" and a "logout" mutation as well\nas a "me" query (that returns the current user).'),(0,r.kt)("p",null,'If you need to customize this behaviour, you can edit the "graphqlite.security" configuration key.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n  security:\n    enable_login: auto # Default setting\n    enable_me: auto # Default setting\n")),(0,r.kt)("p",null,'By default, GraphQLite will enable "login" and "logout" mutations and the "me" query if the following conditions are met:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'the "security" bundle is installed and configured (with a security provider and encoder)'),(0,r.kt)("li",{parentName:"ul"},'the "session" support is enabled (via the "framework.session.enabled" key).')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n  security:\n    enable_login: on\n")),(0,r.kt)("p",null,"By settings ",(0,r.kt)("inlineCode",{parentName:"p"},"enable_login=on"),", you are stating that you explicitly want the login/logout mutations.\nIf one of the dependencies is missing, an exception is thrown (unlike in default mode where the mutations\nare silently discarded)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n  security:\n    enable_login: off\n")),(0,r.kt)("p",null,"Use the ",(0,r.kt)("inlineCode",{parentName:"p"},"enable_login=off")," to disable the mutations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"graphqlite:\n  security:\n    firewall_name: main # default value\n")),(0,r.kt)("p",null,'By default, GraphQLite assumes that your firewall name is "main". This is the default value used in the\nSymfony security bundle so it is likely the value you are using. If for some reason you want to use\nanother firewall, configure the name with ',(0,r.kt)("inlineCode",{parentName:"p"},"graphqlite.security.firewall_name"),"."),(0,r.kt)("h3",{id:"login-using-the-login-mutation"},'Login using the "login" mutation'),(0,r.kt)("p",null,"The mutation below will log-in a user:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},'mutation login {\n  login(userName:"foo", password:"bar") {\n    userName\n    roles\n  }\n}\n')),(0,r.kt)("h3",{id:"get-the-current-user-with-the-me-query"},'Get the current user with the "me" query'),(0,r.kt)("p",null,'Retrieving the current user is easy with the "me" query:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  me {\n    userName\n    roles\n  }\n}\n")),(0,r.kt)("p",null,"In Symfony, user objects implement ",(0,r.kt)("inlineCode",{parentName:"p"},"Symfony\\Component\\Security\\Core\\User\\UserInterface"),".\nThis interface is automatically mapped to a type with 2 fields:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"userName: String!")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"roles: [String!]!"))),(0,r.kt)("p",null,"If you want to get more fields, just add the ",(0,r.kt)("inlineCode",{parentName:"p"},"@Type")," annotation to your user class:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"/**\n * @Type\n */\nclass User implements UserInterface\n{\n    /**\n     * @Field\n     */\n    public function getEmail() : string\n    {\n        // ...\n    }\n\n}\n")),(0,r.kt)("p",null,"You can now query this field using an ",(0,r.kt)("a",{parentName:"p",href:"https://graphql.org/learn/queries/#inline-fragments"},"inline fragment"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"{\n  me {\n    userName\n    roles\n    ... on User {\n      email\n    }\n  }\n}\n")),(0,r.kt)("h3",{id:"logout-using-the-logout-mutation"},'Logout using the "logout" mutation'),(0,r.kt)("p",null,'Use the "logout" mutation to log a user out'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-graphql"},"mutation logout {\n  logout\n}\n")),(0,r.kt)("h2",{id:"injecting-the-request"},"Injecting the Request"),(0,r.kt)("p",null,"You can inject the Symfony Request object in any query/mutation/field."),(0,r.kt)("p",null,"Most of the time, getting the request object is irrelevant. Indeed, it is GraphQLite's job to parse this request and\nmanage it for you. Sometimes yet, fetching the request can be needed. In those cases, simply type-hint on the request\nin any parameter of your query/mutation/field."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-php"},"use Symfony\\Component\\HttpFoundation\\Request;\n\n/**\n * @Query\n */\npublic function getUser(int $id, Request $request): User\n{\n    // The $request object contains the Symfony Request.\n}\n")))}d.isMDXComponent=!0}}]);