"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1252],{5388:(e,n,a)=>{a.d(n,{c:()=>i});var t=a(1504),r=a(4971);const l={tabItem:"tabItem_Ymn6"};function i(e){let{children:n,hidden:a,className:i}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.c)(l.tabItem,i),hidden:a},n)}},1268:(e,n,a)=>{a.d(n,{c:()=>T});var t=a(5072),r=a(1504),l=a(4971),i=a(3943),s=a(5592),c=a(632),p=a(7128),o=a(1148);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}function m(e){const{values:n,children:a}=e;return(0,r.useMemo)((()=>{const e=n??u(a);return function(e){const n=(0,p.w)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function d(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function g(e){let{queryString:n=!1,groupId:a}=e;const t=(0,s.Uz)(),l=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,c._M)(l),(0,r.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(t.location.search);n.set(l,e),t.replace({...t.location,search:n.toString()})}),[l,t])]}function y(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,l=m(e),[i,s]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!d({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:l}))),[c,p]=g({queryString:a,groupId:t}),[u,y]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,l]=(0,o.IN)(a);return[t,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:t}),h=(()=>{const e=c??u;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),y(e)}),[p,y,l]),tabValues:l}}var h=a(3664);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:n,block:a,selectedValue:s,selectValue:c,tabValues:p}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.MV)(),m=e=>{const n=e.currentTarget,a=o.indexOf(n),t=p[a].value;t!==s&&(u(n),c(t))},d=e=>{let n=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const a=o.indexOf(e.currentTarget)+1;n=o[a]??o[0];break}case"ArrowLeft":{const a=o.indexOf(e.currentTarget)-1;n=o[a]??o[o.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.c)("tabs",{"tabs--block":a},n)},p.map((e=>{let{value:n,label:a,attributes:i}=e;return r.createElement("li",(0,t.c)({role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,key:n,ref:e=>o.push(e),onKeyDown:d,onClick:m},i,{className:(0,l.c)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":s===n})}),a??n)})))}function v(e){let{lazy:n,children:a,selectedValue:t}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function N(e){const n=y(e);return r.createElement("div",{className:(0,l.c)("tabs-container",f.tabList)},r.createElement(b,(0,t.c)({},e,n)),r.createElement(v,(0,t.c)({},e,n)))}function T(e){const n=(0,h.c)();return r.createElement(N,(0,t.c)({key:String(n)},e))}},3996:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>g,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var t=a(5072),r=(a(1504),a(5788)),l=(a(5490),a(1268)),i=a(5388);const s={id:"inheritance-interfaces",title:"Inheritance and interfaces",sidebar_label:"Inheritance and interfaces"},c=void 0,p={unversionedId:"inheritance-interfaces",id:"version-3.0/inheritance-interfaces",title:"Inheritance and interfaces",description:"Modeling inheritance",source:"@site/versioned_docs/version-3.0/inheritance-interfaces.mdx",sourceDirName:".",slug:"/inheritance-interfaces",permalink:"/docs/3.0/inheritance-interfaces",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-3.0/inheritance-interfaces.mdx",tags:[],version:"3.0",lastUpdatedBy:"dependabot[bot]",lastUpdatedAt:1707165871,formattedLastUpdatedAt:"Feb 5, 2024",frontMatter:{id:"inheritance-interfaces",title:"Inheritance and interfaces",sidebar_label:"Inheritance and interfaces"}},o={},u=[{value:"Modeling inheritance",id:"modeling-inheritance",level:2},{value:"Mapping interfaces",id:"mapping-interfaces",level:2},{value:"Implementing interfaces",id:"implementing-interfaces",level:3},{value:"Interfaces without an explicit implementing type",id:"interfaces-without-an-explicit-implementing-type",level:3}],m={toc:u},d="wrapper";function g(e){let{components:n,...a}=e;return(0,r.yg)(d,(0,t.c)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,r.yg)("h2",{id:"modeling-inheritance"},"Modeling inheritance"),(0,r.yg)("p",null,"Some of your entities may extend other entities. GraphQLite will do its best to represent this hierarchy of objects in GraphQL using interfaces."),(0,r.yg)("p",null,"Let's say you have two classes, ",(0,r.yg)("inlineCode",{parentName:"p"},"Contact")," and ",(0,r.yg)("inlineCode",{parentName:"p"},"User")," (which extends ",(0,r.yg)("inlineCode",{parentName:"p"},"Contact"),"):"),(0,r.yg)(l.c,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.yg)(i.c,{value:"php8",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"#[Type]\nclass Contact\n{\n    // ...\n}\n\n#[Type]\nclass User extends Contact\n{\n    // ...\n}\n"))),(0,r.yg)(i.c,{value:"php7",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"/**\n * @Type\n */\nclass Contact\n{\n    // ...\n}\n\n/**\n * @Type\n */\nclass User extends Contact\n{\n    // ...\n}\n")))),(0,r.yg)("p",null,"Now, let's assume you have a query that returns a contact:"),(0,r.yg)(l.c,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.yg)(i.c,{value:"php8",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"class ContactController\n{\n    #[Query]\n    public function getContact(): Contact\n    {\n        // ...\n    }\n}\n"))),(0,r.yg)(i.c,{value:"php7",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"class ContactController\n{\n    /**\n     * @Query()\n     */\n    public function getContact(): Contact\n    {\n        // ...\n    }\n}\n")))),(0,r.yg)("p",null,"When writing your GraphQL query, you are able to use fragments to retrieve fields from the ",(0,r.yg)("inlineCode",{parentName:"p"},"User")," type:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-graphql"},"contact {\n    name\n    ... User {\n       email\n    }\n}\n")),(0,r.yg)("p",null,"Written in ",(0,r.yg)("a",{parentName:"p",href:"https://graphql.org/learn/schema/#type-language"},"GraphQL type language"),", the representation of types\nwould look like this:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-graphql"},"interface ContactInterface {\n    // List of fields declared in Contact class\n}\n\ntype Contact implements ContactInterface {\n    // List of fields declared in Contact class\n}\n\ntype User implements ContactInterface {\n    // List of fields declared in Contact and User classes\n}\n")),(0,r.yg)("p",null,"Behind the scene, GraphQLite will detect that the ",(0,r.yg)("inlineCode",{parentName:"p"},"Contact")," class is extended by the ",(0,r.yg)("inlineCode",{parentName:"p"},"User")," class.\nBecause the class is extended, a GraphQL ",(0,r.yg)("inlineCode",{parentName:"p"},"ContactInterface")," interface is created dynamically."),(0,r.yg)("p",null,"The GraphQL ",(0,r.yg)("inlineCode",{parentName:"p"},"User")," type will also automatically implement this ",(0,r.yg)("inlineCode",{parentName:"p"},"ContactInterface"),". The interface contains all the fields\navailable in the ",(0,r.yg)("inlineCode",{parentName:"p"},"Contact")," type."),(0,r.yg)("h2",{id:"mapping-interfaces"},"Mapping interfaces"),(0,r.yg)("p",null,"If you want to create a pure GraphQL interface, you can also add a ",(0,r.yg)("inlineCode",{parentName:"p"},"@Type")," annotation on a PHP interface."),(0,r.yg)(l.c,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.yg)(i.c,{value:"php8",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"#[Type]\ninterface UserInterface\n{\n    #[Field]\n    public function getUserName(): string;\n}\n"))),(0,r.yg)(i.c,{value:"php7",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"/**\n * @Type\n */\ninterface UserInterface\n{\n    /**\n     * @Field\n     */\n    public function getUserName(): string;\n}\n")))),(0,r.yg)("p",null,"This will automatically create a GraphQL interface whose description is:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-graphql"},"interface UserInterface {\n    userName: String!\n}\n")),(0,r.yg)("h3",{id:"implementing-interfaces"},"Implementing interfaces"),(0,r.yg)("p",null,'You don\'t have to do anything special to implement an interface in your GraphQL types.\nSimply "implement" the interface in PHP and you are done!'),(0,r.yg)(l.c,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.yg)(i.c,{value:"php8",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"#[Type]\nclass User implements UserInterface\n{\n    public function getUserName(): string;\n}\n"))),(0,r.yg)(i.c,{value:"php7",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"/**\n * @Type\n */\nclass User implements UserInterface\n{\n    public function getUserName(): string;\n}\n")))),(0,r.yg)("p",null,"This will translate in GraphQL schema as:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-graphql"},"interface UserInterface {\n    userName: String!\n}\n\ntype User implements UserInterface {\n    userName: String!\n}\n")),(0,r.yg)("p",null,"Please note that you do not need to put the ",(0,r.yg)("inlineCode",{parentName:"p"},"@Field")," annotation again in the implementing class."),(0,r.yg)("h3",{id:"interfaces-without-an-explicit-implementing-type"},"Interfaces without an explicit implementing type"),(0,r.yg)("p",null,"You don't have to explicitly put a ",(0,r.yg)("inlineCode",{parentName:"p"},"@Type")," annotation on the class implementing the interface (though this\nis usually a good idea)."),(0,r.yg)(l.c,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,r.yg)(i.c,{value:"php8",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"/**\n * Look, this class has no #Type attribute\n */\nclass User implements UserInterface\n{\n    public function getUserName(): string;\n}\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"class UserController\n{\n    #[Query]\n    public function getUser(): UserInterface // This will work!\n    {\n        // ...\n    }\n}\n"))),(0,r.yg)(i.c,{value:"php7",mdxType:"TabItem"},(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"/**\n * Look, this class has no @Type annotation\n */\nclass User implements UserInterface\n{\n    public function getUserName(): string;\n}\n")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-php"},"class UserController\n{\n    /**\n     * @Query()\n     */\n    public function getUser(): UserInterface // This will work!\n    {\n        // ...\n    }\n}\n")))),(0,r.yg)("div",{class:"alert alert--info"},'If GraphQLite cannot find a proper GraphQL Object type implementing an interface, it will create an object type "on the fly".'),(0,r.yg)("p",null,"In the example above, because the ",(0,r.yg)("inlineCode",{parentName:"p"},"User")," class has no ",(0,r.yg)("inlineCode",{parentName:"p"},"@Type")," annotations, GraphQLite will\ncreate a ",(0,r.yg)("inlineCode",{parentName:"p"},"UserImpl")," type that implements ",(0,r.yg)("inlineCode",{parentName:"p"},"UserInterface"),"."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-graphql"},"interface UserInterface {\n    userName: String!\n}\n\ntype UserImpl implements UserInterface {\n    userName: String!\n}\n")))}g.isMDXComponent=!0}}]);