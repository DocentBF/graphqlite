"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[562],{58215:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:i},n)}},55064:function(e,n,t){t.d(n,{Z:function(){return d}});var a=t(87462),i=t(67294),o=t(72389),r=t(79443);var l=function(){var e=(0,i.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(83039),s=t(86010),p="tabItem_vU9c";function c(e){var n,t,a,o=e.lazy,r=e.block,c=e.defaultValue,d=e.values,h=e.groupId,m=e.className,y=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=d?d:y.map((function(e){var n=e.props;return{value:n.value,label:n.label}})),g=(0,u.lx)(f,(function(e,n){return e.value===n.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===c?c:null!=(n=null!=c?c:null==(t=y.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(a=y[0])?void 0:a.props.value;if(null!==k&&!f.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=l(),T=v.tabGroupChoices,b=v.setTabGroupChoices,N=(0,i.useState)(k),w=N[0],P=N[1],F=[],C=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=h){var x=T[h];null!=x&&x!==w&&f.some((function(e){return e.value===x}))&&P(x)}var A=function(e){var n=e.currentTarget,t=F.indexOf(n),a=f[t].value;a!==w&&(C(n),P(a),null!=h&&b(h,a))},_=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=F.indexOf(e.currentTarget)+1;t=F[a]||F[0];break;case"ArrowLeft":var i=F.indexOf(e.currentTarget)-1;t=F[i]||F[F.length-1]}null==(n=t)||n.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},m)},f.map((function(e){var n=e.value,t=e.label;return i.createElement("li",{role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,className:(0,s.Z)("tabs__item",p,{"tabs__item--active":w===n}),key:n,ref:function(e){return F.push(e)},onKeyDown:_,onFocus:A,onClick:A},null!=t?t:n)}))),o?(0,i.cloneElement)(y.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function d(e){var n=(0,o.Z)();return i.createElement(c,(0,a.Z)({key:String(n)},e))}},49691:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return d},default:function(){return m}});var a=t(87462),i=t(63366),o=(t(67294),t(3905)),r=t(55064),l=t(58215),u=["components"],s={id:"external_type_declaration",title:"External type declaration",sidebar_label:"External type declaration",original_id:"external_type_declaration"},p=void 0,c={unversionedId:"external_type_declaration",id:"version-4.1/external_type_declaration",isDocsHomePage:!1,title:"External type declaration",description:"In some cases, you cannot or do not want to put an annotation on a domain class.",source:"@site/versioned_docs/version-4.1/external_type_declaration.mdx",sourceDirName:".",slug:"/external_type_declaration",permalink:"/docs/4.1/external_type_declaration",editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.1/external_type_declaration.mdx",tags:[],version:"4.1",lastUpdatedBy:"Faizan Akram Dar",lastUpdatedAt:1645550972,formattedLastUpdatedAt:"2/22/2022",frontMatter:{id:"external_type_declaration",title:"External type declaration",sidebar_label:"External type declaration",original_id:"external_type_declaration"},sidebar:"version-4.1/docs",previous:{title:"Extending a type",permalink:"/docs/4.1/extend_type"},next:{title:"Input types",permalink:"/docs/4.1/input-types"}},d=[{value:"<code>@Type</code> annotation with the <code>class</code> attribute",id:"type-annotation-with-the-class-attribute",children:[],level:2},{value:"<code>@SourceField</code> annotation",id:"sourcefield-annotation",children:[],level:2},{value:"<code>@MagicField</code> annotation",id:"magicfield-annotation",children:[{value:"Authentication and authorization",id:"authentication-and-authorization",children:[],level:3}],level:2},{value:"Declaring fields dynamically (without annotations)",id:"declaring-fields-dynamically-without-annotations",children:[],level:2}],h={toc:d};function m(e){var n=e.components,t=(0,i.Z)(e,u);return(0,o.kt)("wrapper",(0,a.Z)({},h,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In some cases, you cannot or do not want to put an annotation on a domain class."),(0,o.kt)("p",null,"For instance:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The class you want to annotate is part of a third party library and you cannot modify it"),(0,o.kt)("li",{parentName:"ul"},"You are doing domain-driven design and don't want to clutter your domain object with annotations from the view layer"),(0,o.kt)("li",{parentName:"ul"},"etc.")),(0,o.kt)("h2",{id:"type-annotation-with-the-class-attribute"},(0,o.kt)("inlineCode",{parentName:"h2"},"@Type")," annotation with the ",(0,o.kt)("inlineCode",{parentName:"h2"},"class")," attribute"),(0,o.kt)("p",null,"GraphQLite allows you to use a ",(0,o.kt)("em",{parentName:"p"},"proxy")," class thanks to the ",(0,o.kt)("inlineCode",{parentName:"p"},"@Type")," annotation with the ",(0,o.kt)("inlineCode",{parentName:"p"},"class")," attribute:"),(0,o.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Types;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse App\\Entities\\Product;\n\n#[Type(class: Product::class)]\nclass ProductType\n{\n    #[Field]\n    public function getId(Product $product): string\n    {\n        return $product->getId();\n    }\n}\n"))),(0,o.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"namespace App\\Types;\n\nuse TheCodingMachine\\GraphQLite\\Annotations\\Type;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Field;\nuse App\\Entities\\Product;\n\n/**\n * @Type(class=Product::class)\n */\nclass ProductType\n{\n    /**\n     * @Field()\n     */\n    public function getId(Product $product): string\n    {\n        return $product->getId();\n    }\n}\n")))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ProductType")," class must be in the ",(0,o.kt)("em",{parentName:"p"},"types")," namespace. You configured this namespace when you installed GraphQLite."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"ProductType")," class is actually a ",(0,o.kt)("strong",{parentName:"p"},"service"),". You can therefore inject dependencies in it."),(0,o.kt)("div",{class:"alert alert--warning"},(0,o.kt)("strong",null,"Heads up!")," The ",(0,o.kt)("code",null,"ProductType")," class must exist in the container of your application and the container identifier MUST be the fully qualified class name.",(0,o.kt)("br",null),(0,o.kt)("br",null),"If you are using the Symfony bundle (or a framework with autowiring like Laravel), this is usually not an issue as the container will automatically create the controller entry if you do not explicitly declare it."),(0,o.kt)("p",null,"In methods with a ",(0,o.kt)("inlineCode",{parentName:"p"},"@Field")," annotation, the first parameter is the ",(0,o.kt)("em",{parentName:"p"},"resolved object")," we are working on. Any additional parameters are used as arguments."),(0,o.kt)("h2",{id:"sourcefield-annotation"},(0,o.kt)("inlineCode",{parentName:"h2"},"@SourceField")," annotation"),(0,o.kt)("p",null,"If you don't want to rewrite all ",(0,o.kt)("em",{parentName:"p"},"getters")," of your base class, you may use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@SourceField")," annotation:"),(0,o.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Annotations\\Type;\nuse TheCodingMachine\\GraphQLite\\Annotations\\SourceField;\nuse App\\Entities\\Product;\n\n#[Type(class: Product::class)]\n#[SourceField(name: "name")]\n#[SourceField(name: "price")]\nclass ProductType\n{\n}\n'))),(0,o.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Annotations\\Type;\nuse TheCodingMachine\\GraphQLite\\Annotations\\SourceField;\nuse App\\Entities\\Product;\n\n/**\n * @Type(class=Product::class)\n * @SourceField(name="name")\n * @SourceField(name="price")\n */\nclass ProductType\n{\n}\n')))),(0,o.kt)("p",null,"By doing so, you let GraphQLite know that the type exposes the ",(0,o.kt)("inlineCode",{parentName:"p"},"getName")," method of the underlying ",(0,o.kt)("inlineCode",{parentName:"p"},"Product")," object."),(0,o.kt)("p",null,"Internally, GraphQLite will look for methods named ",(0,o.kt)("inlineCode",{parentName:"p"},"name()"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"getName()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"isName()"),")."),(0,o.kt)("h2",{id:"magicfield-annotation"},(0,o.kt)("inlineCode",{parentName:"h2"},"@MagicField")," annotation"),(0,o.kt)("p",null,"If your object has no getters, but instead uses magic properties (using the magic ",(0,o.kt)("inlineCode",{parentName:"p"},"__get")," method), you should use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@MagicField")," annotation:"),(0,o.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Annotations\\Type;\nuse TheCodingMachine\\GraphQLite\\Annotations\\SourceField;\nuse App\\Entities\\Product;\n\n#[Type]\n#[MagicField(name: "name", outputType: "String!")]\n#[MagicField(name: "price", outputType: "Float")]\nclass ProductType\n{\n    public function __get(string $property) {\n        // return some magic property\n    }\n}\n'))),(0,o.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Annotations\\Type;\nuse TheCodingMachine\\GraphQLite\\Annotations\\SourceField;\nuse App\\Entities\\Product;\n\n/**\n * @Type()\n * @MagicField(name="name", outputType="String!")\n * @MagicField(name="price", outputType="Float")\n */\nclass ProductType\n{\n    public function __get(string $property) {\n        // return some magic property\n    }\n}\n')))),(0,o.kt)("p",null,'By doing so, you let GraphQLite know that the type exposes "name" and the "price" magic properties of the underlying ',(0,o.kt)("inlineCode",{parentName:"p"},"Product")," object."),(0,o.kt)("p",null,"This is particularly useful in frameworks like Laravel, where Eloquent is making a very wide use of such properties."),(0,o.kt)("p",null,"Please note that GraphQLite has no way to know the type of a magic property. Therefore, you have specify the GraphQL type\nof each property manually."),(0,o.kt)("h3",{id:"authentication-and-authorization"},"Authentication and authorization"),(0,o.kt)("p",null,'You may also check for logged users or users with a specific right using the "annotations" property.'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},'use TheCodingMachine\\GraphQLite\\Annotations\\Type;\nuse TheCodingMachine\\GraphQLite\\Annotations\\SourceField;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Logged;\nuse TheCodingMachine\\GraphQLite\\Annotations\\Right;\nuse TheCodingMachine\\GraphQLite\\Annotations\\FailWith;\nuse App\\Entities\\Product;\n\n/**\n * @Type(class=Product::class)\n * @SourceField(name="name")\n * @SourceField(name="price", annotations={@Logged, @Right(name="CAN_ACCESS_Price", @FailWith(null)}))\n */\nclass ProductType extends AbstractAnnotatedObjectType\n{\n}\n')),(0,o.kt)("p",null,"Any annotations described in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/4.1/authentication_authorization"},"Authentication and authorization page"),", or any annotation this is actually a ",(0,o.kt)("a",{parentName:"p",href:"/docs/4.1/field-middlewares"},'"field middleware"')," can be used in the ",(0,o.kt)("inlineCode",{parentName:"p"},"@SourceField"),' "annotations" attribute.'),(0,o.kt)("div",{class:"alert alert--warning"},(0,o.kt)("strong",null,"Heads up!"),' The "annotation" attribute in @SourceField and @MagicField is only available as a ',(0,o.kt)("strong",null,"Doctrine annotations"),". You cannot use it in PHP 8 attributes (because PHP 8 attributes cannot be nested)"),(0,o.kt)("h2",{id:"declaring-fields-dynamically-without-annotations"},"Declaring fields dynamically (without annotations)"),(0,o.kt)("p",null,"In some very particular cases, you might not know exactly the list of ",(0,o.kt)("inlineCode",{parentName:"p"},"@SourceField")," annotations at development time.\nIf you need to decide the list of ",(0,o.kt)("inlineCode",{parentName:"p"},"@SourceField")," at runtime, you can implement the ",(0,o.kt)("inlineCode",{parentName:"p"},"FromSourceFieldsInterface"),":"),(0,o.kt)(r.Z,{defaultValue:"php8",values:[{label:"PHP 8",value:"php8"},{label:"PHP 7",value:"php7"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"php8",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\FromSourceFieldsInterface;\n\n#[Type(class: Product::class)]\nclass ProductType implements FromSourceFieldsInterface\n{\n    /**\n     * Dynamically returns the array of source fields\n     * to be fetched from the original object.\n     *\n     * @return SourceFieldInterface[]\n     */\n    public function getSourceFields(): array\n    {\n        // You may want to enable fields conditionally based on feature flags...\n        if (ENABLE_STATUS_GLOBALLY) {\n            return [\n                new SourceField(['name'=>'status', 'logged'=>true]),\n            ];\n        } else {\n            return [];\n        }\n    }\n}\n"))),(0,o.kt)(l.Z,{value:"php7",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-php"},"use TheCodingMachine\\GraphQLite\\FromSourceFieldsInterface;\n\n/**\n * @Type(class=Product::class)\n */\nclass ProductType implements FromSourceFieldsInterface\n{\n    /**\n     * Dynamically returns the array of source fields\n     * to be fetched from the original object.\n     *\n     * @return SourceFieldInterface[]\n     */\n    public function getSourceFields(): array\n    {\n        // You may want to enable fields conditionally based on feature flags...\n        if (ENABLE_STATUS_GLOBALLY) {\n            return [\n                new SourceField(['name'=>'status', 'logged'=>true]),\n            ];\n        } else {\n            return [];\n        }\n    }\n}\n")))))}m.isMDXComponent=!0}}]);