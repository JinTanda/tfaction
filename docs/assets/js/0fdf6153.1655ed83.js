"use strict";(self.webpackChunktfaction=self.webpackChunktfaction||[]).push([[282],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return s}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},g={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),f=u(n),s=a,d=f["".concat(c,".").concat(s)]||f[s]||g[s]||o;return n?r.createElement(d,i(i({ref:e},p),{},{components:n})):r.createElement(d,i({ref:e},p))}));function s(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},3076:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},c="get-global-config",u={unversionedId:"actions/get-global-config",id:"actions/get-global-config",title:"get-global-config",description:"GitHub Actions to get global configuration",source:"@site/docs/actions/get-global-config.md",sourceDirName:"actions",slug:"/actions/get-global-config",permalink:"/tfaction/docs/actions/get-global-config",editUrl:"https://github.com/suzuki-shunsuke/tfaction-docs/edit/main/docs/actions/get-global-config.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"export-secrets",permalink:"/tfaction/docs/actions/export-secrets"},next:{title:"get-target-config",permalink:"/tfaction/docs/actions/get-target-config"}},p=[{value:"Example",id:"example",children:[],level:2},{value:"Inputs",id:"inputs",children:[],level:2},{value:"Outputs",id:"outputs",children:[],level:2}],g={toc:p};function f(t){var e=t.components,n=(0,a.Z)(t,i);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-global-config"},"get-global-config"),(0,o.kt)("p",null,"GitHub Actions to get global configuration"),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"steps:\n- uses: suzuki-shunsuke/tfaction/get-global-config@main\n  id: global-config\n")),(0,o.kt)("h2",{id:"inputs"},"Inputs"),(0,o.kt)("p",null,"Nothing."),(0,o.kt)("h2",{id:"outputs"},"Outputs"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"name"),(0,o.kt)("th",{parentName:"tr",align:null},"description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"base_working_directory"),(0,o.kt)("td",{parentName:"tr",align:null},"base directory of working directories")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"working_directory_file"),(0,o.kt)("td",{parentName:"tr",align:null},"file name which locates on working directories")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"renovate_login"),(0,o.kt)("td",{parentName:"tr",align:null},"Renovate login")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"label_prefix_target"),(0,o.kt)("td",{parentName:"tr",align:null},"label prefix for target")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"label_prefix_tfmigrate"),(0,o.kt)("td",{parentName:"tr",align:null},"label prefix for tfmigrate")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"label_prefix_ignore"),(0,o.kt)("td",{parentName:"tr",align:null},"label prefix for ignore")))))}f.isMDXComponent=!0}}]);