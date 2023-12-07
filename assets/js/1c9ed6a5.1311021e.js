"use strict";(self.webpackChunk_open_sauced_docs_opensauced_pizza=self.webpackChunk_open_sauced_docs_opensauced_pizza||[]).push([[80],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(g,i(i({ref:t},p),{},{components:n})):o.createElement(g,i({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9821:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={id:"introduction-to-storybook",title:"Introduction to Storybook",sidebar_label:"Introduction to Storybook",keywords:["introduction to storybook"]},i=void 0,l={unversionedId:"contributing/technical/introduction-to-storybook",id:"contributing/technical/introduction-to-storybook",title:"Introduction to Storybook",description:"Storybook is an open-source tool that helps developers build, test, and document UI components in isolation. It's being leveraged to mock out visual React components. Follow this link to find the latest version of the OpenSauced design system.",source:"@site/docs/contributing/technical/introduction-to-storybook.md",sourceDirName:"contributing/technical",slug:"/contributing/technical/introduction-to-storybook",permalink:"/contributing/technical/introduction-to-storybook",draft:!1,editUrl:"https://github.com/open-sauced/docs.opensauced.pizza/edit/main/docs/contributing/technical/introduction-to-storybook.md",tags:[],version:"current",lastUpdatedBy:"Ayu Adiati",lastUpdatedAt:1701980082,formattedLastUpdatedAt:"Dec 7, 2023",frontMatter:{id:"introduction-to-storybook",title:"Introduction to Storybook",sidebar_label:"Introduction to Storybook",keywords:["introduction to storybook"]},sidebar:"docs",previous:{title:"OpenSauced Maintainers Guide",permalink:"/contributing/maintainers-guide"},next:{title:"Setting Up a Repository with Git and GitHub",permalink:"/contributing/technical/setup-repo-with-git"}},s={},c=[{value:"UI Categories",id:"ui-categories",level:2},{value:"Making Changes to Storybook",id:"making-changes-to-storybook",level:2},{value:"Adding a New Category",id:"adding-a-new-category",level:3},{value:"Adding a New UI Element",id:"adding-a-new-ui-element",level:3}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Storybook is an open-source tool that helps developers build, test, and document UI components in isolation. It's being leveraged to mock out visual React components. ",(0,r.kt)("a",{parentName:"p",href:"https://sauced-components.netlify.app/"},"Follow this link")," to find the latest version of the OpenSauced design system."),(0,r.kt)("p",null,"To run Storybook, use this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"npm run storybook\n")),(0,r.kt)("h2",{id:"ui-categories"},"UI Categories"),(0,r.kt)("p",null,"Storybook is broken into several categories:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Button"),": These are the Button elements that appear in the project in various forms. They primarily are the Button component in the project but can also be icons.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Cards"),": These are the main container elements in the project. Each item represents a live component in its current form in the project.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Primitives"),": These are the basic styling of base HTML components.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Nav"),": This is the main navigation bar for the project. There are two states:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"When no user is logged in."),(0,r.kt)("li",{parentName:"ul"},"When a user is logged in."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Footer"),": This represents the various footers for the project.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Homepage"),": This is the main component of the project homepage and shows the home page in its current form.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Miscellaneous"),": These are components that currently don't fit neatly into the above categories."))),(0,r.kt)("h2",{id:"making-changes-to-storybook"},"Making Changes to Storybook"),(0,r.kt)("p",null,"This section details how to make changes to Storybook, mainly by creating new categories or UI elements."),(0,r.kt)("h3",{id:"adding-a-new-category"},"Adding a New Category"),(0,r.kt)("p",null,"To add a new category, a new file needs to be added to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/stories")," directory."),(0,r.kt)("p",null,"When creating a new file, the file name should be named using the following convention: ",(0,r.kt)("inlineCode",{parentName:"p"},"*Previous File Number + 1*-*Name of Story Capitalized*-stories.js"),". For example, if the last file was ",(0,r.kt)("inlineCode",{parentName:"p"},"2-SideBar-stories.js"),", then the new file should be named ",(0,r.kt)("inlineCode",{parentName:"p"},"3-NameOfYourFile-stories.js"),"."),(0,r.kt)("p",null,"In the file ensure you have this code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'export default {\n  title: "*Name of category*",\n};\n')),(0,r.kt)("h3",{id:"adding-a-new-ui-element"},"Adding a New UI Element"),(0,r.kt)("p",null,"To add a new UI element to an existing category, add the following code to that category's file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"export const *Name of UI Element* = () => (\n// code for the new element\n);\n")))}d.isMDXComponent=!0}}]);