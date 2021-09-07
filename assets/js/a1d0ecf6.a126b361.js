"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3252],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1036:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"1 - Setup"},s=void 0,p={unversionedId:"tutorials/tasks/swiftui/setup",id:"tutorials/tasks/swiftui/setup",isDocsHomePage:!1,title:"1 - Setup",description:"The following guide will show you how to build a Task list application with Android Jetpack Compose. The Jetpack Compose is a modern set of libraries to build Android apps with a declarative UI with Kotlin code and without writing any XML.",source:"@site/docs/tutorials/tasks/swiftui/1-setup.md",sourceDirName:"tutorials/tasks/swiftui",slug:"/tutorials/tasks/swiftui/setup",permalink:"/tutorials/tasks/swiftui/setup",editUrl:"https://github.com/getditto/docs/edit/master/docs/tutorials/tasks/swiftui/1-setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"1 - Setup"},sidebar:"tutorialSidebar",previous:{title:"Intro - Tasks App Tutorial",permalink:"/tutorials/tasks/index"},next:{title:"2 - Configure Ditto",permalink:"/tutorials/tasks/swiftui/configure-ditto"}},c=[{value:"1-1 Create the App",id:"1-1-create-the-app",children:[]},{value:"1-2 Add dependencies (Cocoapods)",id:"1-2-add-dependencies-cocoapods",children:[]}],u={toc:c};function d(e){var t=e.components,l=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following guide will show you how to build a Task list application with ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/jetpack/getting-started"},"Android Jetpack Compose"),". The Jetpack Compose is a modern set of libraries to build Android apps with a declarative UI with Kotlin code and without writing any XML. "),(0,a.kt)("p",null,"Before getting started, you will need the latest version of ",(0,a.kt)("a",{parentName:"p",href:"https://apps.apple.com/us/app/xcode/id497799835"},"Xcode"),". This tutorial was written with Xcode 12.5.1. In addition, you should have a decent familiarity with Swift."),(0,a.kt)("h2",{id:"1-1-create-the-app"},"1-1 Create the App"),(0,a.kt)("p",null,"Once you've installed the latest version of Xcode installed, Click ",(0,a.kt)("strong",{parentName:"p"},"File > New Project")," and select ",(0,a.kt)("inlineCode",{parentName:"p"},"App")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9465).Z})),(0,a.kt)("p",null,"Fill out the information on the form similar to the screenshot below. These are recommended values however they are not crucial to complete this tutorial:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Name: ",(0,a.kt)("inlineCode",{parentName:"li"},'"Tasks"')),(0,a.kt)("li",{parentName:"ul"},"Organization Identifier: ",(0,a.kt)("inlineCode",{parentName:"li"},'"live.ditto"'),". However, feel free to use your own value here."),(0,a.kt)("li",{parentName:"ul"},"Interface: SwiftUI"),(0,a.kt)("li",{parentName:"ul"},'Life Cycle: "UIKit App Delegate"'),(0,a.kt)("li",{parentName:"ul"},"Language: Swift")),(0,a.kt)("p",null,'And finally click "Next" and select a directory to create the application.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(61190).Z})),(0,a.kt)("h2",{id:"1-2-add-dependencies-cocoapods"},"1-2 Add dependencies (Cocoapods)"),(0,a.kt)("p",null,"Currently, Ditto is published on ",(0,a.kt)("a",{parentName:"p",href:"https://guides.cocoapods.org/using/getting-started.html"},"Cocoapods"),". However, we are working on Swift Package Manager support soon. "),(0,a.kt)("p",null,"If you have not installed Cocoapods, open up a terminal and run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-terminal"},"$ sudo gem install cocoapods\n")),(0,a.kt)("p",null,"Once Cocoapods is install, ",(0,a.kt)("inlineCode",{parentName:"p"},"cd")," into the directory where Xcode created the ",(0,a.kt)("strong",{parentName:"p"},"Tasks.xcproj")," and run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-terminal"},"pod init\n")),(0,a.kt)("p",null,"This will have created a ",(0,a.kt)("strong",{parentName:"p"},"Podfile")," next to your ",(0,a.kt)("strong",{parentName:"p"},"Tasks.xcproj")),(0,a.kt)("p",null,"Open up the ",(0,a.kt)("inlineCode",{parentName:"p"},"Podfile")," your favorite code editor and replace everything with:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ruby",metastring:'title="Podfile"',title:'"Podfile"'},"platform :ios, '14.0'\n\ntarget 'Tasks' do\n  use_frameworks!\n\n  # Pods for Tasks\n  pod 'DittoSwift', '>='\n\nend\n")),(0,a.kt)("p",null,"Save the file. In your terminal run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-terminal"},"pod install --repo-update\n")),(0,a.kt)("p",null,"Now Cocoapods should have generated a ",(0,a.kt)("strong",{parentName:"p"},"Tasks.xcworkspace")," file and a ",(0,a.kt)("strong",{parentName:"p"},"Pods/")," directory. "),(0,a.kt)("p",null,"Your file structure should now look like:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-terminal",metastring:'title="Directory Structure" {6}',title:'"Directory','Structure"':!0,"{6}":!0},"Podfile\nPodfile.lock\nPods\nTasks\nTasks.xcproj\nTasks.xcworkspace \n")),(0,a.kt)("p",null,"Now open ",(0,a.kt)("strong",{parentName:"p"},"Tasks.xcworkspace"),". "),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"From now on open up Tasks.xcworkspace and ",(0,a.kt)("em",{parentName:"p"},"not")," Tasks.xcproj or else you will not be able to compile references to Ditto")))}d.isMDXComponent=!0},9465:function(e,t,n){t.Z=n.p+"assets/images/xcode-app-type-selection-49a7962e3ed8213fafe0ac0ea1869f0d.png"},61190:function(e,t,n){t.Z=n.p+"assets/images/xcode-project-form-fill-ba7334a9a7a4b5c5d9638870cf16cfd0.png"}}]);