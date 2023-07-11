"use strict";(self.webpackChunk_open_sauced_docs_opensauced_pizza=self.webpackChunk_open_sauced_docs_opensauced_pizza||[]).push([[461],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,h=c["".concat(l,".").concat(m)]||c[m]||d[m]||r;return n?o.createElement(h,a(a({ref:t},p),{},{components:n})):o.createElement(h,a({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:i,a[1]=s;for(var u=2;u<r;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2683:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var o=n(7462),i=(n(7294),n(3905));const r={id:"introduction-to-contributing",title:"Introduction to contributing",sidebar_label:"Introduction to contributing",keywords:["introduction to contributing"]},a=void 0,s={unversionedId:"contributing/introduction-to-contributing",id:"contributing/introduction-to-contributing",title:"Introduction to contributing",description:"Contributions are always welcome, no matter how large or small. Before contributing,",source:"@site/docs/contributing/introduction-to-contributing.md",sourceDirName:"contributing",slug:"/contributing/introduction-to-contributing",permalink:"/contributing/introduction-to-contributing",draft:!1,editUrl:"https://github.com/open-sauced/docs.opensauced.pizza/edit/main/docs/contributing/introduction-to-contributing.md",tags:[],version:"current",lastUpdatedBy:"Brian Douglas",lastUpdatedAt:1689107677,formattedLastUpdatedAt:"Jul 11, 2023",frontMatter:{id:"introduction-to-contributing",title:"Introduction to contributing",sidebar_label:"Introduction to contributing",keywords:["introduction to contributing"]},sidebar:"docs",previous:{title:"Introduction to OpenSauced \ud83c\udf55",permalink:"/"},next:{title:"Code of Conduct",permalink:"/contributing/code-of-conduct"}},l={},u=[{value:"Recommended communication style",id:"recommended-communication-style",level:2},{value:"Setup",id:"setup",level:2},{value:"Building",id:"building",level:2},{value:"Testing",id:"testing",level:2},{value:"Applying Lint Styleguide",id:"applying-lint-styleguide",level:2},{value:"Pull requests",id:"pull-requests",level:2},{value:"PR validation",id:"pr-validation",level:3},{value:"Work in progress",id:"work-in-progress",level:3},{value:"Issues",id:"issues",level:2},{value:"Triage team",id:"triage-team",level:2},{value:"Funding",id:"funding",level:2},{value:"Community",id:"community",level:2},{value:"Coding tips",id:"coding-tips",level:2},{value:"Frequently Asked Questions",id:"frequently-asked-questions",level:2},{value:"License",id:"license",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Contributions are always welcome, no matter how large or small. Before contributing,\nplease read the ",(0,i.kt)("a",{parentName:"p",href:"/contributing/code-of-conduct"},"code of conduct"),"."),(0,i.kt)("p",null,"Some thoughts to help you contribute to this project"),(0,i.kt)("h2",{id:"recommended-communication-style"},"Recommended communication style"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Always leave screenshots for visuals changes"),(0,i.kt)("li",{parentName:"ol"},"Always leave a detailed description in the Pull Request. Leave nothing ambiguous for the reviewer."),(0,i.kt)("li",{parentName:"ol"},"Always review your code first. Do this by leaving comments in your coding noting questions, or interesting things for the reviewer."),(0,i.kt)("li",{parentName:"ol"},"Always communicate. Whether it is in the issue or the pull request, keeping the lines of communication helps everyone around you.")),(0,i.kt)("h2",{id:"setup"},"Setup"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://docs.github.com/en/get-started/quickstart/fork-a-repo"},"Fork")," one of the repositories from ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/open-sauced"},"github/open-sauced")," to your own GitHub account."),(0,i.kt)("li",{parentName:"ol"},"Clone the forked repository to your local machine."),(0,i.kt)("li",{parentName:"ol"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"npm ci")," to install the dependencies and set up the project.")),(0,i.kt)("p",null,"You can also use the shell commands below to get started once you have forked the repository.\nMake sure to replace ",(0,i.kt)("inlineCode",{parentName:"p"},"<your-name>")," with your GitHub username."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/<your-name>/open-sauced\ncd open-sauced\nnpm ci\n")),(0,i.kt)("h2",{id:"building"},"Building"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm run build\n")),(0,i.kt)("h2",{id:"testing"},"Testing"),(0,i.kt)("p",null,"For running the test suite, use the following command. Since the tests run in watch mode by default, some users may encounter errors about too many files being open. In this case, it may be beneficial to ",(0,i.kt)("a",{parentName:"p",href:"https://facebook.github.io/watchman/docs/install.html"},"install watchman"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# the tests will run in watch mode by default\nnpm test\n")),(0,i.kt)("p",null,"For more info on testing React and JavaScript, check out this course ",(0,i.kt)("a",{parentName:"p",href:"https://testingjavascript.com/"},"Testing JavaScript")),(0,i.kt)("h2",{id:"applying-lint-styleguide"},"Applying Lint Styleguide"),(0,i.kt)("p",null,"To check the code for formatting and linting errors, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm run lint\n")),(0,i.kt)("p",null,"These errors will also be displayed during development, but won't prevent the code from compiling."),(0,i.kt)("p",null,"To fix the formatting and linting errors, run the following command instead:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm run format\n")),(0,i.kt)("p",null,"These commands use ",(0,i.kt)("a",{parentName:"p",href:"https://eslint.org/"},"ESLint")," to check and fix the code."),(0,i.kt)("p",null,"The automated PR checks will also run these commands, and the PR will be blocked if there are any errors, so it's a good idea to run them before submitting a PR."),(0,i.kt)("h2",{id:"pull-requests"},"Pull requests"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"We actively welcome your pull requests, however linking your work to an existing issue is preferred."))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Fork the repo and create your branch from the default branch."),(0,i.kt)("li",{parentName:"ol"},"Name your branch something that is descriptive to the work you are doing. i.e. adds-new-thing or fixes-mobile"),(0,i.kt)("li",{parentName:"ol"},"If you've added code that should be tested, add tests."),(0,i.kt)("li",{parentName:"ol"},"If you've changed APIs, update the documentation."),(0,i.kt)("li",{parentName:"ol"},"If you make visual changes, screenshots are required."),(0,i.kt)("li",{parentName:"ol"},"Ensure the test suite passes."),(0,i.kt)("li",{parentName:"ol"},"Make sure you address any lint warnings."),(0,i.kt)("li",{parentName:"ol"},"If you make the existing code better, please let us know in your PR description."),(0,i.kt)("li",{parentName:"ol"},'A PR description and title are required. The title is required to begin with: "feat:" or "fix:"'),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://help.github.com/en/github/writing-on-github/autolinked-references-and-urls"},"Link to an issue")," in the project. Unsolicited code is welcomed, but an issue is required for an announcement your intentions. PR's without a linked issue will be marked invalid and closed.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"note for maintainers: All pull requests need a label to assist automation. See the ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/open-sauced/open-sauced/blob/HEAD/.github/release-drafter.yml"},"template")," to guide which labels to use.")),(0,i.kt)("h3",{id:"pr-validation"},"PR validation"),(0,i.kt)("p",null,"Examples for valid PR titles:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"fix: Correct typo."),(0,i.kt)("li",{parentName:"ul"},"feat: Add support for Node 12."),(0,i.kt)("li",{parentName:"ul"},"refactor!: Drop support for Node 6.")),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Note that since PR titles only have a single line, you have to use the ! syntax for breaking changes.")),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"Conventional Commits")," for more examples."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},(0,i.kt)("a",{parentName:"em",href:"https://youtu.be/cuMeC-eZJJ4"},"3 tips for getting your Pull Request reviewed"))),(0,i.kt)("p",null,"You can also experiment with conventional commits by doing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"npm run push\n")),(0,i.kt)("p",null,"Using the ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run push")," command is an interactive replacement for ",(0,i.kt)("inlineCode",{parentName:"p"},"git commit"),". It enforces the conventional commits specification for writing commit messages, making it easier for developers and maintainers to understand the changes made in a particular commit."),(0,i.kt)("p",null,"Assuming you are dealing with code changes and you add them using ",(0,i.kt)("inlineCode",{parentName:"p"},"git add"),", once you are ready to commit, there are 2 ways we can proceed: ",(0,i.kt)("inlineCode",{parentName:"p"},"git commit")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"npm run push"),". The second method is preferred, as doing a subsequent ",(0,i.kt)("inlineCode",{parentName:"p"},"git push")," and then opening a PR would ensure the title is conforming to our standards."),(0,i.kt)("h3",{id:"work-in-progress"},"Work in progress"),(0,i.kt)("p",null,"GitHub has support for draft pull requests, which will disable the merge button until the PR is marked as ready for merge."),(0,i.kt)("h2",{id:"issues"},"Issues"),(0,i.kt)("p",null,"If you wish to work on an open issue, please comment on the issue with ",(0,i.kt)("inlineCode",{parentName:"p"},".take")," and it will be assigned to you. If an issue is not assigned, it is assumed to be open for anyone to work on. Please assign yourself to an issue before beginning work on it to avoid conflicts."),(0,i.kt)("p",null,"If you are contributing to the project for the first time, please consider checking the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/open-sauced/hot/issues?q=is%3Aissue+is%3Aopen+label%3A%22%F0%9F%90%9B+bug%22"},"bug")," or ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/open-sauced/hot/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"},"good first issue")," labels."),(0,i.kt)("p",null,"In case you get stuck, please feel free to ask for help in the ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/U2peSNf23P"},"Discord")," server or GitHub Discussions."),(0,i.kt)("p",null,"Please note that we have a ",(0,i.kt)("a",{parentName:"p",href:"/contributing/code-of-conduct"},"code of conduct"),", please follow it in all your interactions with the project and it's contributors."),(0,i.kt)("h2",{id:"triage-team"},"Triage team"),(0,i.kt)("p",null,"The Triage team is inspired by ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/expressjs/express/blob/HEAD/Triager-Guide.md"},"expressjs/express"),". This team exists to create a path for making contributions to this project and open source. All Triage Team members are expected to follow this guide: ",(0,i.kt)("a",{parentName:"p",href:"/contributing/triage-guide"},"TRIAGE_GUIDE.md")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"There are no minimum requirements to become a member of the Triage Team."))),(0,i.kt)("p",null,"For those interested in getting involved in the project or just open source in general, please request an invite to the Triage Team in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/open-sauced/open-sauced/discussions/638"},"this discussion.")),(0,i.kt)("h2",{id:"funding"},"Funding"),(0,i.kt)("p",null,"OpenSauced is a part of GitHub Sponsors. If you would like to contribute, please note the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/sponsors/open-sauced"},"sponsor page")," for details on how funds are distributed. If you have made any contributions to the project directly or indirectly, please consider adding your profile to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/open-sauced/.github/blob/main/FUNDING.yml"},"FUNDING.yml"),"."),(0,i.kt)("h2",{id:"community"},"Community"),(0,i.kt)("p",null,"Do you have questions? Join the conversation in our ",(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/U2peSNf23P"},"Discord"),"."),(0,i.kt)("h2",{id:"coding-tips"},"Coding tips"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Ask questions if you are stuck."),(0,i.kt)("li",{parentName:"ul"},"Use ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/open-sauced/open-sauced/blob/HEAD/src/styles/variables.js"},"CSS variables")),(0,i.kt)("li",{parentName:"ul"},"Always use ",(0,i.kt)("a",{parentName:"li",href:"https://web.dev/external-anchors-use-rel-noopener/"},'rel="noreferrer" on all target="',"_",'blank" links'),".")),(0,i.kt)("h2",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"How do I find good first issues?"),"\nWe recommend checking out sites like ",(0,i.kt)("a",{parentName:"p",href:"https://goodfirstissues.com/"},"Good First Issues")," and ",(0,i.kt)("a",{parentName:"p",href:"https://www.firsttimersonly.com/"},"First Timers Only"),". They will lead you to projects and issues worth working on.  We also recommend using the ",(0,i.kt)("inlineCode",{parentName:"p"},"Good First Issue")," label in the search engine of the project you want to contribute to. Check out ",(0,i.kt)("a",{parentName:"p",href:"https://www.youtube.com/watch?v=k3l_rurKOXg"},"this YouTube Short from GitHub"),' to learn more. Furthermore, check out our daily "Who\'s looking for open source contributors?" on ',(0,i.kt)("a",{parentName:"p",href:"https://dev.to/opensauced/whos-looking-for-open-source-contributors-week-46-247i"},"Dev.to"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},"My contribution does not show up on my OpenSauced profile. How do I fix it?"),"\nWe suggest creating a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/open-sauced/intro/blob/main/05-how-to-contribute-to-open-source.md#discovering-open-source-with-opensauced"},"Insight page")," or adding your merged pull request to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/open-sauced/intro/blob/main/06-the-secret-sauce.md#develop-your-open-source-resume"},"the Highlights Page"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("strong",{parentName:"p"},'I want to find "X" language or frameworks data. How do I find it?'),"\nPost your suggestion in our ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/orgs/open-sauced/discussions"},"Feedback repository"),". We'd love to see it! \ud83d\ude04"))),(0,i.kt)("h2",{id:"license"},"License"),(0,i.kt)("p",null,"By contributing to the OpenSauced project, you agree that your contributions will be licensed\nunder its ",(0,i.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/open-sauced/open-sauced/main/LICENSE"},"MIT license"),"."))}d.isMDXComponent=!0}}]);