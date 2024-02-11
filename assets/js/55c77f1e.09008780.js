"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3835],{44:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=t(5072),n=(t(1504),t(5788));t(5490);const i={id:"semver",title:"Our backward compatibility promise",sidebar_label:"Semantic versioning"},o=void 0,s={unversionedId:"semver",id:"version-4.2/semver",title:"Our backward compatibility promise",description:"Ensuring smooth upgrades of your project is a priority. That's why we promise you backward compatibility (BC) for all minor GraphQLite releases. You probably recognize this strategy as Semantic Versioning. In short, Semantic Versioning means that only major releases (such as 4.0, 5.0 etc.) are allowed to break backward compatibility. Minor releases (such as 4.0, 4.1 etc.) may introduce new features, but must do so without breaking the existing API of that release branch (4.x in the previous example).",source:"@site/versioned_docs/version-4.2/semver.md",sourceDirName:".",slug:"/semver",permalink:"/docs/4.2/semver",draft:!1,editUrl:"https://github.com/thecodingmachine/graphqlite/edit/master/website/versioned_docs/version-4.2/semver.md",tags:[],version:"4.2",lastUpdatedBy:"Yurii",lastUpdatedAt:1707691116,formattedLastUpdatedAt:"Feb 11, 2024",frontMatter:{id:"semver",title:"Our backward compatibility promise",sidebar_label:"Semantic versioning"},sidebar:"version-4.2/docs",previous:{title:"Annotations reference",permalink:"/docs/4.2/annotations-reference"},next:{title:"Changelog",permalink:"/docs/4.2/changelog"}},l={},p=[],m={toc:p},u="wrapper";function c(e){let{components:a,...t}=e;return(0,n.yg)(u,(0,r.c)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.yg)("p",null,"Ensuring smooth upgrades of your project is a priority. That's why we promise you backward compatibility (BC) for all minor GraphQLite releases. You probably recognize this strategy as ",(0,n.yg)("a",{parentName:"p",href:"https://semver.org/"},"Semantic Versioning"),". In short, Semantic Versioning means that only major releases (such as 4.0, 5.0 etc.) are allowed to break backward compatibility. Minor releases (such as 4.0, 4.1 etc.) may introduce new features, but must do so without breaking the existing API of that release branch (4.x in the previous example)."),(0,n.yg)("p",null,'But sometimes, a new feature is not quite "dry" and we need a bit of time to find the perfect API.\nIn such cases, we prefer to gather feedback from real-world usage, adapt the API, or remove it altogether.\nDoing so is not possible with a no BC-break approach.'),(0,n.yg)("p",null,"To avoid being bound to our backward compatibility promise, such features can be marked as ",(0,n.yg)("strong",{parentName:"p"},"unstable")," or ",(0,n.yg)("strong",{parentName:"p"},"experimental")," and their classes and methods are marked with the ",(0,n.yg)("inlineCode",{parentName:"p"},"@unstable")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"@experimental")," tag."),(0,n.yg)("p",null,(0,n.yg)("inlineCode",{parentName:"p"},"@unstable")," or ",(0,n.yg)("inlineCode",{parentName:"p"},"@experimental")," classes / methods will ",(0,n.yg)("strong",{parentName:"p"},"not break")," in a patch release, but ",(0,n.yg)("em",{parentName:"p"},"may be broken")," in a minor version."),(0,n.yg)("p",null,"As a rule of thumb:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"If you are a GraphQLite user (using GraphQLite mainly through its annotations), we guarantee strict semantic versioning"),(0,n.yg)("li",{parentName:"ul"},"If you are extending GraphQLite features (if you are developing custom annotations, or if you are developing a GraphQlite integration\nwith a framework...), be sure to check the tags.")),(0,n.yg)("p",null,"Said otherwise:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"If you are a GraphQLite user, in your ",(0,n.yg)("inlineCode",{parentName:"p"},"composer.json"),", target a major version:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "require": {\n    "thecodingmachine/graphqlite": "^4"\n  }\n}\n'))),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("p",{parentName:"li"},"If you are extending the GraphQLite ecosystem, in your ",(0,n.yg)("inlineCode",{parentName:"p"},"composer.json"),", target a minor version:"),(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "require": {\n    "thecodingmachine/graphqlite": "~4.1.0"\n  }\n}\n')))),(0,n.yg)("p",null,"Finally, classes / methods annotated with the ",(0,n.yg)("inlineCode",{parentName:"p"},"@internal")," annotation are not meant to be used in your code or third-party library. They are meant for GraphQLite internal usage and they may break anytime. Do not use those directly."))}c.isMDXComponent=!0}}]);