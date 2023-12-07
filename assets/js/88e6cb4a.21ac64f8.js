"use strict";(self.webpackChunk_open_sauced_docs_opensauced_pizza=self.webpackChunk_open_sauced_docs_opensauced_pizza||[]).push([[8710],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),u=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?i.createElement(g,o(o({ref:t},p),{},{components:n})):i.createElement(g,o({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3781:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var i=n(7462),a=(n(7294),n(3905));const r={id:"triage-guide",title:"Triage Guide",sidebar_label:"Triage Guide",keywords:["triage guide"]},o=void 0,s={unversionedId:"contributing/triage-guide",id:"contributing/triage-guide",title:"Triage Guide",description:"How to Join the Triage Team",source:"@site/docs/contributing/triage-guide.md",sourceDirName:"contributing",slug:"/contributing/triage-guide",permalink:"/contributing/triage-guide",draft:!1,editUrl:"https://github.com/open-sauced/docs.opensauced.pizza/edit/main/docs/contributing/triage-guide.md",tags:[],version:"current",lastUpdatedBy:"Ayu Adiati",lastUpdatedAt:1701980082,formattedLastUpdatedAt:"Dec 7, 2023",frontMatter:{id:"triage-guide",title:"Triage Guide",sidebar_label:"Triage Guide",keywords:["triage guide"]},sidebar:"docs",previous:{title:"Code of Conduct",permalink:"/contributing/code-of-conduct"},next:{title:"Set Up Authentication",permalink:"/contributing/set-up-authentication"}},l={},u=[{value:"How to Join the Triage Team",id:"how-to-join-the-triage-team",level:2},{value:"Triage Process",id:"triage-process",level:2},{value:"Adding Issue and PR Labels",id:"adding-issue-and-pr-labels",level:3},{value:"Labeling <code>good first issue</code>",id:"labeling-good-first-issue",level:3},{value:"Approaches and Best Practices for Getting Into Triage Contributions",id:"approaches-and-best-practices-for-getting-into-triage-contributions",level:2},{value:"Removal of Triage Role",id:"removal-of-triage-role",level:2},{value:"Helpful Hints",id:"helpful-hints",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"how-to-join-the-triage-team"},"How to Join the Triage Team"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Sign up for ",(0,a.kt)("a",{parentName:"li",href:"https://opensauced.pizza"},"opensauced.pizza"),"."),(0,a.kt)("li",{parentName:"ol"},"Leave a comment in the ",(0,a.kt)("inlineCode",{parentName:"li"},"\ud83c\udf55opensauced-contributors-chat")," channel on ",(0,a.kt)("a",{parentName:"li",href:"https://discord.com/channels/714698561081704529/928693344358514698"},"Discord"),".")),(0,a.kt)("h2",{id:"triage-process"},"Triage Process"),(0,a.kt)("p",null,"When a new issue or pull request (PR) is opened, the issue will be labeled with ",(0,a.kt)("inlineCode",{parentName:"p"},"needs triage"),". If a triage team member is available, they can help ensure all the required information is provided."),(0,a.kt)("h3",{id:"adding-issue-and-pr-labels"},"Adding Issue and PR Labels"),(0,a.kt)("p",null,"Depending on the issue or PR, there are several labels the triage team can add for further classification, as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"needs triage"),": This can be kept if the triager is unsure which next steps to take."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"awaiting more info"),": If more information has been requested from the author, apply this label."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"question"),": User questions that do not appear to be bugs or enhancements."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"discuss"),": Topics for discussion. It might end in an ",(0,a.kt)("inlineCode",{parentName:"li"},"enhancement")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"question")," label."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"bug"),": Issues that present reasonable conviction there is a reproducible bug."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"enhancement"),": Issues that are found to be a reasonable candidate feature additions."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"style"),": Minor CSS or visual changes.")),(0,a.kt)("p",null,"In all cases, maintainers may close issues if they don't receive a timely response when further information is sought or when additional questions are asked."),(0,a.kt)("h3",{id:"labeling-good-first-issue"},"Labeling ",(0,a.kt)("inlineCode",{parentName:"h3"},"good first issue")),(0,a.kt)("p",null,"Issues labeled as ",(0,a.kt)("inlineCode",{parentName:"p"},"good first issue")," represent a curated list of easy contributions for new contributors. These issues are meant to help folks make their first contribution to open source and should not require excessive research or triaging on the contributor's part."),(0,a.kt)("p",null,"All ",(0,a.kt)("inlineCode",{parentName:"p"},"good first issue")," should include one or more of the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A solution."),(0,a.kt)("li",{parentName:"ul"},"A suggestion for a solution."),(0,a.kt)("li",{parentName:"ul"},"Links to components or in which issue occurs.")),(0,a.kt)("p",null,"Please be noted:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Issues that ",(0,a.kt)("inlineCode",{parentName:"li"},"needs triage")," cannot be labeled as ",(0,a.kt)("inlineCode",{parentName:"li"},"good first issues"),"."),(0,a.kt)("li",{parentName:"ul"},"It is better to have no ",(0,a.kt)("inlineCode",{parentName:"li"},"good first issue")," labeled issues than to have a ",(0,a.kt)("inlineCode",{parentName:"li"},"good first issue")," confusing enough to deter a contributor from contributing.")),(0,a.kt)("h2",{id:"approaches-and-best-practices-for-getting-into-triage-contributions"},"Approaches and Best Practices for Getting Into Triage Contributions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Review the project's Contribution Guidelines if they are present. In a nutshell, commit to the community's standards and values.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Review the documentation; for most projects, it is just the ",(0,a.kt)("inlineCode",{parentName:"p"},"README.md"),". Ensure you understand the key APIs, semantics, configurations, and use cases.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Writing your own test apps to reaffirm your understanding of the key functions might be helpful. This may identify some gaps in documentation; record those as they might be good PRs to open.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Skim through the issues backlog; identify low-hanging and mostly new issues. From those, attempt to recreate issues based on the OP (Original Poster) description and ask questions if required. No question is a bad question!"))),(0,a.kt)("h2",{id:"removal-of-triage-role"},"Removal of Triage Role"),(0,a.kt)("p",null,"There are a few cases where members can be removed from the triage role:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Breaking the ",(0,a.kt)("a",{parentName:"li",href:"/contributing/code-of-conduct"},"Code of Conduct")," or ",(0,a.kt)("a",{parentName:"li",href:"/contributing/introduction-to-contributing"},"project contributor guidelines"),"."),(0,a.kt)("li",{parentName:"ul"},"Abuse or misuse of the role as deemed by the Triage Team."),(0,a.kt)("li",{parentName:"ul"},"Lack of participation for more than six months.")),(0,a.kt)("p",null,"If any of these happen, we will discuss them as a part of the triage portion of the regular Triage Team meetings. If you have questions, feel free to contact any Triage Team members."),(0,a.kt)("h2",{id:"helpful-hints"},"Helpful Hints"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"When reviewing the list of open issues, there are some common types and suggested actions:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"New/unattended issues or simple questions"),": A good place to start."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Hard bugs & ongoing discussions"),": Feel free to chime in and help."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Issues that imply gaps in the documentation"),": Open PRs with changes or help the user to do so."))),(0,a.kt)("li",{parentName:"ul"},"For recurring issues, it is helpful to create functional examples to demonstrate (publish as gists or a repo)."),(0,a.kt)("li",{parentName:"ul"},"Review and identify the maintainers. If necessary, mention one or more of them with ",(0,a.kt)("inlineCode",{parentName:"li"},"@")," if you are unsure what to do."),(0,a.kt)("li",{parentName:"ul"},"Ensure all your interactions are professional, welcoming, and respectful to the parties involved.")))}c.isMDXComponent=!0}}]);