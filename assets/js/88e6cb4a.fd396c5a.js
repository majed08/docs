"use strict";(self.webpackChunk_open_sauced_docs_opensauced_pizza=self.webpackChunk_open_sauced_docs_opensauced_pizza||[]).push([[710],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>g});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),u=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(i),m=r,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return i?n.createElement(g,o(o({ref:t},c),{},{components:i})):n.createElement(g,o({ref:t},c))}));function g(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=i[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},3781:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=i(7462),r=(i(7294),i(3905));const a={id:"triage-guide",title:"Triage guide",sidebar_label:"Triage guide",keywords:["triage guide"]},o=void 0,s={unversionedId:"contributing/triage-guide",id:"contributing/triage-guide",title:"Triage guide",description:"How do I join the triage team?",source:"@site/docs/contributing/triage-guide.md",sourceDirName:"contributing",slug:"/contributing/triage-guide",permalink:"/contributing/triage-guide",draft:!1,editUrl:"https://github.com/open-sauced/docs.opensauced.pizza/edit/main/docs/contributing/triage-guide.md",tags:[],version:"current",lastUpdatedBy:"Jessica Wilkins",lastUpdatedAt:1698166448,formattedLastUpdatedAt:"Oct 24, 2023",frontMatter:{id:"triage-guide",title:"Triage guide",sidebar_label:"Triage guide",keywords:["triage guide"]},sidebar:"docs",previous:{title:"Code of Conduct",permalink:"/contributing/code-of-conduct"},next:{title:"Set up Authentication",permalink:"/contributing/set-up-authentication"}},l={},u=[{value:"How do I join the triage team?",id:"how-do-i-join-the-triage-team",level:2},{value:"Issue triage process",id:"issue-triage-process",level:2},{value:"Approaches and best practices for getting into triage contributions",id:"approaches-and-best-practices-for-getting-into-triage-contributions",level:2},{value:"Labeling good first issues",id:"labeling-good-first-issues",level:2},{value:"Removal of triage role",id:"removal-of-triage-role",level:2},{value:"Other helpful hints:",id:"other-helpful-hints",level:2}],c={toc:u},d="wrapper";function p(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"how-do-i-join-the-triage-team"},"How do I join the triage team?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Sign up for ",(0,r.kt)("a",{parentName:"li",href:"https://opensauced.pizza"},"opensauced.pizza")),(0,r.kt)("li",{parentName:"ol"},"Leave a comment in the ",(0,r.kt)("a",{parentName:"li",href:"https://discord.com/channels/714698561081704529/928693344358514698"},"discord")," channel ",(0,r.kt)("inlineCode",{parentName:"li"},"open-sauced-contributors-chat"),".")),(0,r.kt)("h2",{id:"issue-triage-process"},"Issue triage process"),(0,r.kt)("p",null,"When a new issue or pull request is opened the issue will be labeled with ",(0,r.kt)("inlineCode",{parentName:"p"},"needs triage"),". If a triage team member is available they can help make sure all the required information is provided. Depending on the issue or PR there are several next labels they can add for further classification:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"needs triage"),": This can be kept if the triager is unsure which next steps to take"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"awaiting more info"),": If more info has been requested from the author, apply this label."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"question"),": User questions that do not appear to be bugs or enhancements."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"discuss"),": Topics for discussion. Might end in an ",(0,r.kt)("inlineCode",{parentName:"li"},"enhancement")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"question")," label."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bug"),": Issues that present a reasonable conviction there is a reproducible bug."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"enhancement"),": Issues that are found to be a reasonable candidate feature additions."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"style"),": small css or visual changes.")),(0,r.kt)("p",null,"In all cases, issues may be closed by maintainers if they don't receive a timely response when further information is sought, or when additional questions are asked."),(0,r.kt)("h2",{id:"approaches-and-best-practices-for-getting-into-triage-contributions"},"Approaches and best practices for getting into triage contributions"),(0,r.kt)("p",null,"Review the project's contribution guideline if present. In a nutshell, commit to the community's standards and values. Review the documentation, for most of the projects it is just the README.md, and make sure you understand the key APIs, semantics, configurations, and use cases."),(0,r.kt)("p",null,"It might be helpful to write your own test apps to re-affirm your understanding of the key functions. This may identify some gaps in documentation, record those as they might be good PR's to open. Skim through the issue backlog; identify low hanging issues and mostly new ones. From those, attempt to recreate issues based on the OP description and ask questions if required. No question is a bad question!"),(0,r.kt)("h2",{id:"labeling-good-first-issues"},"Labeling good first issues"),(0,r.kt)("p",null,"Issues labeled as ",(0,r.kt)("inlineCode",{parentName:"p"},"good first issue")," represent a curated list of easy contributions for new contributors. These issues are meant to help folks make their first contribution to open-source and should not require an excessive amount of research or triaging on the contributor's part."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"All good first issues should include one or more of the following: a solution, a suggestion for a solution, links to components, or in which issue occurs.")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Issues that ",(0,r.kt)("inlineCode",{parentName:"li"},"needs triage")," cannot be labeled as ",(0,r.kt)("inlineCode",{parentName:"li"},"good first issues"),"."),(0,r.kt)("li",{parentName:"ul"},"It is better to have no ",(0,r.kt)("inlineCode",{parentName:"li"},"good first issue")," labeled issues than to have a ",(0,r.kt)("inlineCode",{parentName:"li"},"good first issue")," confusing enough to deter a contributor from contributing.")),(0,r.kt)("h2",{id:"removal-of-triage-role"},"Removal of triage role"),(0,r.kt)("p",null,"There are a few cases where members can be removed as triagers:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Breaking the ",(0,r.kt)("a",{parentName:"li",href:"/contributing/code-of-conduct"},"CoC")," or ",(0,r.kt)("a",{parentName:"li",href:"/contributing/introduction-to-contributing"},"project contributor guidelines")),(0,r.kt)("li",{parentName:"ul"},"Abuse or misuse of the role as deemed by the TC"),(0,r.kt)("li",{parentName:"ul"},"Lack of participation for more than 6 months")),(0,r.kt)("p",null,"If any of these happen we will discuss as a part of the triage portion of the regular TC meetings. If you have questions feel free to reach out to any of the TC members."),(0,r.kt)("h2",{id:"other-helpful-hints"},"Other helpful hints:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When reviewing the list of open issues there are some common types and suggested actions:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"New/unattended issues or simple questions: A good place to start"),(0,r.kt)("li",{parentName:"ul"},"Hard bugs & ongoing discussions: always feel free to chime in and help"),(0,r.kt)("li",{parentName:"ul"},"Issues that imply gaps in documentation: open PRs with changes or help the user to do so"))),(0,r.kt)("li",{parentName:"ul"},"For recurring issues, it is helpful to create functional examples to demonstrate (publish as gists or a repo)"),(0,r.kt)("li",{parentName:"ul"},"Review and identify the maintainers. If necessary, at-mention one or more of them if you are unsure what to do"),(0,r.kt)("li",{parentName:"ul"},"Make sure all your interactions are professional, welcoming and respectful to the parties involved.")))}p.isMDXComponent=!0}}]);