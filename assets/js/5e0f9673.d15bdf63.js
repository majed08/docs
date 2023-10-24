"use strict";(self.webpackChunk_open_sauced_docs_opensauced_pizza=self.webpackChunk_open_sauced_docs_opensauced_pizza||[]).push([[938],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>g});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(t),m=i,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||r;return t?a.createElement(g,o(o({ref:n},l),{},{components:t})):a.createElement(g,o({ref:n},l))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=t[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},3901:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var a=t(7462),i=(t(7294),t(3905));const r={id:"check-engines",title:"@open-sauced/check-engines",sidebar_label:"@open-sauced/check-engines",keywords:["@open-sauced/check-engines"]},o=void 0,s={unversionedId:"maintainers/check-engines",id:"maintainers/check-engines",title:"@open-sauced/check-engines",description:"Description",source:"@site/docs/maintainers/check-engines.md",sourceDirName:"maintainers",slug:"/maintainers/check-engines",permalink:"/maintainers/check-engines",draft:!1,editUrl:"https://github.com/open-sauced/docs.opensauced.pizza/edit/main/docs/maintainers/check-engines.md",tags:[],version:"current",lastUpdatedBy:"Jessica Wilkins",lastUpdatedAt:1698166448,formattedLastUpdatedAt:"Oct 24, 2023",frontMatter:{id:"check-engines",title:"@open-sauced/check-engines",sidebar_label:"@open-sauced/check-engines",keywords:["@open-sauced/check-engines"]},sidebar:"docs",previous:{title:"Setting up a new repository",permalink:"/maintainers/setting-up-a-new-repository"},next:{title:"@open-sauced/conventional-commit",permalink:"/maintainers/conventional-commit"}},c={},p=[{value:"Description",id:"description",level:2},{value:"Dependencies",id:"dependencies",level:2},{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Advanced usage",id:"advanced-usage",level:2},{value:"FAQ",id:"faq",level:2},{value:"Usage on older <code>node</code> and <code>npm</code> versions",id:"usage-on-older-node-and-npm-versions",level:3},{value:"Why not use <code>check-engines</code> or <code>engine-strict</code>",id:"why-not-use-check-engines-or-engine-strict",level:3},{value:"Library usage",id:"library-usage",level:3},{value:"Contributing",id:"contributing",level:2}],l={toc:p},d="wrapper";function u(e){let{components:n,...t}=e;return(0,i.kt)(d,(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," package ",(0,i.kt)("inlineCode",{parentName:"p"},"@open-sauced/check-engines")," is designed to help contributors install dependencies conforming to the ",(0,i.kt)("inlineCode",{parentName:"p"},"engines")," property in package.json."),(0,i.kt)("h2",{id:"dependencies"},"Dependencies"),(0,i.kt)("p",null,"This package uses the following modules:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/npm/npm-install-checks"},"npm-install-checks"))),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm install --save-dev @open-sauced/check-engines\n")),(0,i.kt)("p",null,"Add the verification scripts to your ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts")," section in the ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," file:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "preinstall": "npx @open-sauced/check-engines"\n  }\n}\n')),(0,i.kt)("p",null,"The reason why we provide ",(0,i.kt)("inlineCode",{parentName:"p"},"npx")," in the ",(0,i.kt)("inlineCode",{parentName:"p"},"scripts")," section is for the people using this as a development enhancement, interactive configurations or trimmed dependency trees, where using ",(0,i.kt)("inlineCode",{parentName:"p"},"npx")," is preferred over installing all the dependencies at once."),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,"Use your favourite package manager to install dependencies in your project or, if you set it as global verification system:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "check-engines": "npx @open-sauced/check-engines"\n    "preinstall": "npm run check-engines",\n    "prestart": "npm run check-engines"\n  }\n}\n')),(0,i.kt)("h2",{id:"advanced-usage"},"Advanced usage"),(0,i.kt)("p",null,"If you have an API or any other non-library type of application, you can decouple this package from any install scripts and just use it as a verification:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "check-engines": "npx @open-sauced/check-engines"\n    "prestart": "npm run check-engines"\n  }\n}\n')),(0,i.kt)("p",null,"A more traditional approach not using ",(0,i.kt)("inlineCode",{parentName:"p"},"pre")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"post")," scripts, this example enables the check only for local machine development:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "scripts": {\n    "check-engines": "npx @open-sauced/check-engines"\n    "start": "...",\n    "dev": "npm run check-engines && npm start -- --watch"\n  }\n}\n')),(0,i.kt)("h2",{id:"faq"},"FAQ"),(0,i.kt)("h3",{id:"usage-on-older-node-and-npm-versions"},"Usage on older ",(0,i.kt)("inlineCode",{parentName:"h3"},"node")," and ",(0,i.kt)("inlineCode",{parentName:"h3"},"npm")," versions"),(0,i.kt)("p",null,"Older ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," versions won't be able to run this package, depending on versions the scripts section could be ignored completely."),(0,i.kt)("p",null,"If you have that use case, this package is only worth enabling for progressive contributors frequently missing the legacy support of the respective module and forcefully upgrading dependencies - them running newer versions will force the error message and explicitly disable."),(0,i.kt)("h3",{id:"why-not-use-check-engines-or-engine-strict"},"Why not use ",(0,i.kt)("inlineCode",{parentName:"h3"},"check-engines")," or ",(0,i.kt)("inlineCode",{parentName:"h3"},"engine-strict")),(0,i.kt)("p",null,"As described in the ",(0,i.kt)("inlineCode",{parentName:"p"},"npm@6")," ",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v6/configuring-npm/package-json#enginestrict"},"engine-strict docs"),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Prior to npm 3.0.0, this feature was used to treat this package as if the user had set engine-strict. It is no longer used.")),(0,i.kt)("p",null,"In ",(0,i.kt)("inlineCode",{parentName:"p"},"npm@6")," and later this was re-introduced as a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.npmjs.com/cli/v7/using-npm/config#engine-strict"},"config flag"),"."),(0,i.kt)("p",null,"This package is designed with multiple legacy use cases in mind."),(0,i.kt)("h3",{id:"library-usage"},"Library usage"),(0,i.kt)("p",null,"If you are using this module in a library package, be advised that any ",(0,i.kt)("inlineCode",{parentName:"p"},"*install")," script will run in the parent module when installed."),(0,i.kt)("p",null,"For example, given a module ",(0,i.kt)("inlineCode",{parentName:"p"},"@demo-org/demo-package")," with a ",(0,i.kt)("inlineCode",{parentName:"p"},'preinstall: "npx @open-sauced/check-engines"')," script, running ",(0,i.kt)("inlineCode",{parentName:"p"},"npm install @demo-org/demo-package")," will require your locally installed ",(0,i.kt)("inlineCode",{parentName:"p"},"node")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"npm")," versions to match the ",(0,i.kt)("inlineCode",{parentName:"p"},"engines")," section of your ",(0,i.kt)("inlineCode",{parentName:"p"},"package.json")," - if that is not set, nothing should happen and this package is a stray dependency in either ",(0,i.kt)("inlineCode",{parentName:"p"},"@demo-org/demo-package")," or the module you are running this command in."),(0,i.kt)("h2",{id:"contributing"},"Contributing"),(0,i.kt)("p",null,"We're always happy to onboard people into open source!"),(0,i.kt)("p",null,"Check out the repository at ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/open-sauced/check-engines"},"@open-sauced/check-engines")," \u2764\ufe0f"))}u.isMDXComponent=!0}}]);