"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[861],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?a.createElement(h,r(r({ref:t},u),{},{components:n})):a.createElement(h,r({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(67294),o=n(79443);var i=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=n(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,u=39;var p=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,p=e.values,d=e.groupId,m=e.className,h=i(),k=h.tabGroupChoices,g=h.setTabGroupChoices,f=(0,a.useState)(o),y=f[0],b=f[1],v=a.Children.toArray(e.children),N=[];if(null!=d){var w=k[d];null!=w&&w!==y&&p.some((function(e){return e.value===w}))&&b(w)}var C=function(e){var t=e.currentTarget,n=N.indexOf(t),a=p[n].value;b(a),null!=d&&(g(d,a),setTimeout((function(){var e,n,a,o,i,r,l,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,o=e.bottom,i=e.right,r=window,l=r.innerHeight,c=r.innerWidth,n>=0&&i<=c&&o<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},D=function(e){var t,n;switch(e.keyCode){case u:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case c:var o=N.indexOf(e.target)-1;n=N[o]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,r.Z)("tabs__item",l,{"tabs__item--active":y===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:D,onFocus:C,onClick:C},n)}))),t?(0,a.cloneElement)(v.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},97791:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return d},default:function(){return h}});var a=n(87462),o=n(63366),i=(n(67294),n(3905)),r=n(55064),l=n(58215),s=["components"],c={title:"1 - Setup"},u=void 0,p={unversionedId:"tutorials/tasks/c-sharp-console/setup",id:"tutorials/tasks/c-sharp-console/setup",isDocsHomePage:!1,title:"1 - Setup",description:"The following guide will show you how to build a Task list application with a standard C# Console App Starter Project. This tutorial assumes that you have some familiarity with starting up a new Visual Studio Project.",source:"@site/docs/tutorials/tasks/c-sharp-console/1-setup.md",sourceDirName:"tutorials/tasks/c-sharp-console",slug:"/tutorials/tasks/c-sharp-console/setup",permalink:"/tutorials/tasks/c-sharp-console/setup",editUrl:"https://github.com/getditto/docs/edit/master/website/docs/tutorials/tasks/c-sharp-console/1-setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"1 - Setup"},sidebar:"tutorialSidebar",previous:{title:"5 - Editing Tasks",permalink:"/tutorials/tasks/jetpack-compose/edit-screen"},next:{title:"2 - Configuring Commands",permalink:"/tutorials/tasks/c-sharp-console/configuring-commands"}},d=[{value:"1-1 Create a new Console Project",id:"1-1-create-a-new-console-project",children:[]},{value:"1 - 2 Add Ditto to the project",id:"1---2-add-ditto-to-the-project",children:[]},{value:"1-3 Create a new file called <strong>Task.cs</strong>.",id:"1-3-create-a-new-file-called-taskcs",children:[]}],m={toc:d};function h(e){var t=e.components,c=(0,o.Z)(e,s);return(0,i.kt)("wrapper",(0,a.Z)({},m,c,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The following guide will show you how to build a Task list application with a standard C# Console App Starter Project. This tutorial assumes that you have some familiarity with starting up a new Visual Studio Project. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Note: the C# SDK currently does not have the ability to sync over AWDL, LAN, or BLE communication just yet. We are working on this functionality. If this is very important to you please contact us at ",(0,i.kt)("a",{parentName:"p",href:"mailto:contact@ditto.live"},"contact@ditto.live"),".")),(0,i.kt)("h2",{id:"1-1-create-a-new-console-project"},"1-1 Create a new Console Project"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Open up Visual Studio for Windows or for Mac. "),(0,i.kt)("li",{parentName:"ol"},"Create a ",(0,i.kt)("strong",{parentName:"li"},"New Project")," and select ",(0,i.kt)("strong",{parentName:"li"},"Console Application"))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Console Project Selection Visual Studio Mac",src:n(68710).Z})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"When the prompt asks to select a target framework, you can feel free to select either ",(0,i.kt)("strong",{parentName:"p"},".NET 5.0 or .NET Core 3.1"),". ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Choose a Project Name, for this example we went with ",(0,i.kt)("strong",{parentName:"p"},"Tasks"),"."))),(0,i.kt)("h2",{id:"1---2-add-ditto-to-the-project"},"1 - 2 Add Ditto to the project"),(0,i.kt)("p",null,"We've deployed Ditto for C# on the standard NuGet package repository. We will need to add Ditto to this project. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Right click the project's ",(0,i.kt)("strong",{parentName:"li"},"Dependencies")," folder, and click _",(0,i.kt)("em",{parentName:"li"},"Manage NuGet Dependencies"),"."),(0,i.kt)("li",{parentName:"ol"},"Search for ",(0,i.kt)("strong",{parentName:"li"},'"Ditto"')," in the search bar and add the package called ",(0,i.kt)("strong",{parentName:"li"},'"Ditto" by "Ditto"'),". Ensure not to mistake it for another package.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Nuget Selection Selection Visual Studio Mac",src:n(53765).Z})),(0,i.kt)("p",null,"If you prefer a different way of installation, feel free to take a look at the alternative ways to install or ",(0,i.kt)("a",{parentName:"p",href:"https://www.nuget.org/packages/Ditto/"},"reference the NuGet page here."),". "),(0,i.kt)(r.Z,{groupId:"dotnet-installation",defaultValue:"javascript",values:[{label:"Package Manager",value:"package-manager"},{label:".NET CLI",value:"cli"},{label:"Package Reference",value:"package-reference"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"package-manager",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Install-Package Ditto\n"))),(0,i.kt)(l.Z,{value:"cli",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"dotnet add package Ditto\n"))),(0,i.kt)(l.Z,{value:"package-reference",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<PackageReference Include="Ditto" Version="1.*" />\n')))),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"In your ",(0,i.kt)("strong",{parentName:"li"},"Program.cs")," file add ",(0,i.kt)("inlineCode",{parentName:"li"},"using DittoSDK")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"using System.Collections.Generic")," to the top of the file like so:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Program.cs"',title:'"Program.cs"'},"using System;\nusing DittoSDK;\nusing System.Collections.Generic;\n")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Now we'll need to hold a reference to our Ditto instance as a ",(0,i.kt)("inlineCode",{parentName:"li"},"static")," variable and also add a ",(0,i.kt)("inlineCode",{parentName:"li"},"static DittoLiveQuery")," variable. These variables must be ",(0,i.kt)("inlineCode",{parentName:"li"},"static")," because the console program's ",(0,i.kt)("inlineCode",{parentName:"li"},"Main")," function is also ",(0,i.kt)("inlineCode",{parentName:"li"},"static"),"."),(0,i.kt)("li",{parentName:"ol"},"Instantiate the ",(0,i.kt)("inlineCode",{parentName:"li"},"ditto")," static variable by constructing it with a development identity with an ",(0,i.kt)("inlineCode",{parentName:"li"},'appName: "live.ditto.tasks"'),". If you want to sync with other tutorial app types like iOS or Android, you'll need to match the ",(0,i.kt)("inlineCode",{parentName:"li"},"appName")," to enable sync. Also ensure to add your license token to ",(0,i.kt)("inlineCode",{parentName:"li"},"ditto.SetLicenseToken")," to properly ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Program.cs"',title:'"Program.cs"'},'namespace Tasks\n{\n    class Program\n    {\n        // 4.\n        // highlight-start\n        static Ditto ditto;\n        static DittoLiveQuery liveQuery;\n        // highlight-end\n\n        public static void Main(params string[] args)\n        {\n          // 5.\n          // highlight-start\n          ditto = new Ditto(identity: DittoIdentity.Development(appName: "live.ditto.tasks"));\n\n          try\n          {\n              ditto.SetLicenseToken("<REPlACE_ME>");\n              ditto.StartSync();\n          }\n          catch (DittoException ex)\n          {\n              Console.WriteLine("There was an error starting Ditto.");\n              Console.WriteLine("Here\'s the following error");\n              Console.WriteLine(ex.ToString());\n              Console.WriteLine("Ditto cannot start sync but don\'t worry.");\n              Console.WriteLine("Ditto will still work as a local database.");\n          }\n          Console.WriteLine("Welcome to Ditto\'s Task App");\n          // highlight-end\n        }\n    }\n}\n')),(0,i.kt)("h2",{id:"1-3-create-a-new-file-called-taskcs"},"1-3 Create a new file called ",(0,i.kt)("strong",{parentName:"h2"},"Task.cs"),"."),(0,i.kt)("p",null,"Ditto documents have a flexible structure. Oftentimes, in strongly-typed languages like C#, we will create a data structure give more definition to the app. Create a new C# file called ",(0,i.kt)("strong",{parentName:"p"},"Task.cs")," in your project. "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"In the new file, you'll need to reference ",(0,i.kt)("inlineCode",{parentName:"p"},"System"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"System.Collections.Generic")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"DittoSDK"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add the matching variables ",(0,i.kt)("inlineCode",{parentName:"p"},"string _id"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"string body"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"bool isCompleted")," to the struct. We will use this to match the document values to to the struct.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add an constructor to Task that takes in a DittoDocument. In the constructor, parse out the document's keys with Ditto's type safe value accessors. This will safely map all the document's values to the struct's variables that we created in step 2. In addition we will add a couple of other constructor overloads for easier creation of data. ")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Override the ",(0,i.kt)("inlineCode",{parentName:"p"},"ToString()")," method of the struct. We will later use this to easily print out a more readable string that we can use in ",(0,i.kt)("inlineCode",{parentName:"p"},"Console.WriteLine")," back in the main ",(0,i.kt)("strong",{parentName:"p"},"Program.cs"),".")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Add a function to the struct called ",(0,i.kt)("inlineCode",{parentName:"p"},"ToDictionary")," which will serialize the values into a ",(0,i.kt)("inlineCode",{parentName:"p"},"Dictionary<string, object>"),". This will assist us later when we need to insert a new document into Ditto."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp",metastring:'title="Task.cs"',title:'"Task.cs"'},'// 1. \n// highlight-start\nusing System;\nusing System.Collections.Generic;\nusing DittoSDK;\n// highlight-end\n\nnamespace Tasks\n{\n    public struct Task\n    {\n        string _id;\n        string body;\n        bool isCompleted;\n\n        // 3\n        // highlight-start\n        public Task(string _id, string body, bool isCompleted)\n        {\n            this._id = _id;\n            this.body = body;\n            this.isCompleted = isCompleted;\n        }\n\n        public Task(string body, bool isCompleted)\n        {\n            this._id = Guid.NewGuid().ToString();\n            this.body = body;\n            this.isCompleted = isCompleted;\n        }\n\n        public Task(DittoDocument document)\n        {\n            this._id = document["_id"].StringValue;\n            this.body = document["body"].StringValue;\n            this.isCompleted = document["isCompleted"].BooleanValue;\n        }\n        // highlight-end\n\n        // 4.\n        // highlight-start\n        public override string ToString()\n        {\n            return $"Task _id: {_id}, body: {body}, isCompleted: {isCompleted}";\n        }\n        // highlight-end\n\n        // 5.\n        // highlight-start\n        public Dictionary<string, object> ToDictionary()\n        {\n            return new Dictionary<string, object>\n            {\n                { "_id", _id },\n                { "body", body },\n                { "isCompleted", isCompleted },\n            };\n        }\n        // 5.\n        // highlight-end\n    }\n}\n')))}h.isMDXComponent=!0},86010:function(e,t,n){function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})},68710:function(e,t,n){t.Z=n.p+"assets/images/console-project-selection-eb032ab074a0ab27450b409c6806ce3b.png"},53765:function(e,t,n){t.Z=n.p+"assets/images/nuget-selection-mac-1dc1f9b8d3ff1a44dd8c915874590d9f.png"}}]);