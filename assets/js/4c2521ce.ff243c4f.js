"use strict";(self.webpackChunk_open_sauced_docs_opensauced_pizza=self.webpackChunk_open_sauced_docs_opensauced_pizza||[]).push([[4657],{3905:(t,e,o)=>{o.d(e,{Zo:()=>s,kt:()=>g});var i=o(7294);function n(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}function r(t,e){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),o.push.apply(o,i)}return o}function a(t){for(var e=1;e<arguments.length;e++){var o=null!=arguments[e]?arguments[e]:{};e%2?r(Object(o),!0).forEach((function(e){n(t,e,o[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(o,e))}))}return t}function l(t,e){if(null==t)return{};var o,i,n=function(t,e){if(null==t)return{};var o,i,n={},r=Object.keys(t);for(i=0;i<r.length;i++)o=r[i],e.indexOf(o)>=0||(n[o]=t[o]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(i=0;i<r.length;i++)o=r[i],e.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(t,o)&&(n[o]=t[o])}return n}var u=i.createContext({}),p=function(t){var e=i.useContext(u),o=e;return t&&(o="function"==typeof t?t(e):a(a({},e),t)),o},s=function(t){var e=p(t.components);return i.createElement(u.Provider,{value:e},t.children)},c="mdxType",h={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},d=i.forwardRef((function(t,e){var o=t.components,n=t.mdxType,r=t.originalType,u=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),c=p(o),d=n,g=c["".concat(u,".").concat(d)]||c[d]||h[d]||r;return o?i.createElement(g,a(a({ref:e},s),{},{components:o})):i.createElement(g,a({ref:e},s))}));function g(t,e){var o=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=o.length,a=new Array(r);a[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l[c]="string"==typeof t?t:n,a[1]=l;for(var p=2;p<r;p++)a[p]=o[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,o)}d.displayName="MDXCreateElement"},1231:(t,e,o)=>{o.r(e),o.d(e,{assets:()=>u,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var i=o(7462),n=(o(7294),o(3905));const r={id:"setup-repo-with-git",title:"Setting Up a Repository with Git and GitHub",sidebar_label:"Setting Up a Repository with Git and GitHub",keywords:["setting up a repository with Git and GitHub","working with git and github","GitHub repository creation","GitHub repository workflow","GitHub repository initialization","GitHub repository hosting","GitHub repository collaboration","GitHub repository version control","GitHub repository deployment","GitHub repository setup"]},a=void 0,l={unversionedId:"contributing/technical/setup-repo-with-git",id:"contributing/technical/setup-repo-with-git",title:"Setting Up a Repository with Git and GitHub",description:"Using the GitHub CLI",source:"@site/docs/contributing/technical/setup-repo-with-git.md",sourceDirName:"contributing/technical",slug:"/contributing/technical/setup-repo-with-git",permalink:"/contributing/technical/setup-repo-with-git",draft:!1,editUrl:"https://github.com/open-sauced/docs.opensauced.pizza/edit/main/docs/contributing/technical/setup-repo-with-git.md",tags:[],version:"current",lastUpdatedBy:"BekahHW",lastUpdatedAt:1706635188,formattedLastUpdatedAt:"Jan 30, 2024",frontMatter:{id:"setup-repo-with-git",title:"Setting Up a Repository with Git and GitHub",sidebar_label:"Setting Up a Repository with Git and GitHub",keywords:["setting up a repository with Git and GitHub","working with git and github","GitHub repository creation","GitHub repository workflow","GitHub repository initialization","GitHub repository hosting","GitHub repository collaboration","GitHub repository version control","GitHub repository deployment","GitHub repository setup"]},sidebar:"docs",previous:{title:"OpenSauced Maintainers Guide",permalink:"/contributing/maintainers-guide"},next:{title:"Resolve Merge Conflicts",permalink:"/contributing/technical/resolve-merge-conflicts"}},u={},p=[{value:"Using the GitHub CLI",id:"using-the-github-cli",level:2},{value:"How to Install the GitHub CLI",id:"how-to-install-the-github-cli",level:3},{value:"How to Authenticate with the GitHub CLI",id:"how-to-authenticate-with-the-github-cli",level:3},{value:"How to Fork and Clone a Repository with the GitHub CLI",id:"how-to-fork-and-clone-a-repository-with-the-github-cli",level:3},{value:"How to Add a Remote Repository",id:"how-to-add-a-remote-repository",level:3},{value:"How to View the Remote Repositories Locally",id:"how-to-view-the-remote-repositories-locally",level:3},{value:"Using the GitHub Website and the Command Line",id:"using-the-github-website-and-the-command-line",level:2}],s={toc:p},c="wrapper";function h(t){let{components:e,...o}=t;return(0,n.kt)(c,(0,i.Z)({},s,o,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"using-the-github-cli"},"Using the GitHub CLI"),(0,n.kt)("h3",{id:"how-to-install-the-github-cli"},"How to Install the GitHub CLI"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://cli.github.com/"},"GitHub CLI")," allows you to fork repositories, create issues, pull requests, and more from the command line."),(0,n.kt)("p",null,"Follow these ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/cli/cli#installation"},"instructions to install GitHub CLI")," on Mac, Windows, or Linux."),(0,n.kt)("h3",{id:"how-to-authenticate-with-the-github-cli"},"How to Authenticate with the GitHub CLI"),(0,n.kt)("p",null,"From the terminal, you will need to authenticate with the GitHub CLI. You can do this by running the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"gh auth login\n")),(0,n.kt)("p",null,"Then, follow the prompts to authenticate with the GitHub CLI."),(0,n.kt)("h3",{id:"how-to-fork-and-clone-a-repository-with-the-github-cli"},"How to Fork and Clone a Repository with the GitHub CLI"),(0,n.kt)("p",null,"A fork is a remote copy of a repository, allowing you to experiment freely with changes without affecting the original project."),(0,n.kt)("p",null,"A clone is a local copy of a repository that includes all the files, branches and commits."),(0,n.kt)("p",null,"To fork and clone a repository with the GitHub CLI, run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"gh repo fork open-sauced/<REPO_NAME>\n")),(0,n.kt)("p",null,"The GitHub CLI will fork the project in your GitHub account and will ask you if you want to clone the repository on your local machine."),(0,n.kt)("h3",{id:"how-to-add-a-remote-repository"},"How to Add a Remote Repository"),(0,n.kt)("p",null,"Adding a remote repository allows you to pull in changes from the original repository and keep your forked copy of the repository up to date."),(0,n.kt)("p",null,"To add a remote repository, run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git remote add upstream https://github.com/open-sauced/app.git\n")),(0,n.kt)("h3",{id:"how-to-view-the-remote-repositories-locally"},"How to View the Remote Repositories Locally"),(0,n.kt)("p",null,"To view the remote repositories that your local repository is connected to, run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"git remote -v\n")),(0,n.kt)("p",null,"You should see the following output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"origin git@github.com:YOUR_GITHUB_USERNAME/app.git (fetch)\norigin git@github.com:YOUR_GITHUB_USERNAME/app.git (push)\nupstream git@github.com:open-sauced/app.git (fetch)\nupstream git@github.com:open-sauced/app.git (push)\n")),(0,n.kt)("h2",{id:"using-the-github-website-and-the-command-line"},"Using the GitHub Website and the Command Line"),(0,n.kt)("p",null,"If you prefer to set up your repository using the GitHub website and the command line, follow this detailed guide from the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.github.com/en/get-started/quickstart/fork-a-repo"},"official GitHub documentation"),"."))}h.isMDXComponent=!0}}]);