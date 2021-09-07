"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6613],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return y}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),y=a,h=p["".concat(s,".").concat(y)]||p[y]||u[y]||r;return n?i.createElement(h,o(o({ref:t},d),{},{components:n})):i.createElement(h,o({ref:t},d))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(e,t,n){var i=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return u}});var i=n(67294),a=n(79443);var r=function(){var e=(0,i.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,d=39;var u=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,u=e.values,p=e.groupId,y=e.className,h=r(),f=h.tabGroupChoices,m=h.setTabGroupChoices,v=(0,i.useState)(a),b=v[0],k=v[1],g=i.Children.toArray(e.children),D=[];if(null!=p){var w=f[p];null!=w&&w!==b&&u.some((function(e){return e.value===w}))&&k(w)}var T=function(e){var t=e.currentTarget,n=D.indexOf(t),i=u[n].value;k(i),null!=p&&(m(p,i),setTimeout((function(){var e,n,i,a,r,o,l,c;(e=t.getBoundingClientRect(),n=e.top,i=e.left,a=e.bottom,r=e.right,o=window,l=o.innerHeight,c=o.innerWidth,n>=0&&r<=c&&a<=l&&i>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},I=function(e){var t,n;switch(e.keyCode){case d:var i=D.indexOf(e.target)+1;n=D[i]||D[0];break;case c:var a=D.indexOf(e.target)-1;n=D[a]||D[D.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},y)},u.map((function(e){var t=e.value,n=e.label;return i.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return D.push(e)},onKeyDown:I,onFocus:T,onClick:T},n)}))),t?(0,i.cloneElement)(g.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,n){var i=(0,n(67294).createContext)(void 0);t.Z=i},43626:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return p},default:function(){return h}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=n(55064),l=n(58215),s=["components"],c={title:"Certificate Based Security",sidebar_position:2},d=void 0,u={unversionedId:"advanced/certificate-security",id:"advanced/certificate-security",isDocsHomePage:!1,title:"Certificate Based Security",description:"With the cloud platform, most use cases will not need to learn about this section. Instead, this is an advanced discussion of Ditto's underlying certificate, identity, and encryption implementation. However, if you are deploying an enterprise on-premise deployment of Ditto, you may be required to reference the following material.",source:"@site/docs/advanced/certificate-security.md",sourceDirName:"advanced",slug:"/advanced/certificate-security",permalink:"/advanced/certificate-security",editUrl:"https://github.com/getditto/docs/edit/master/docs/advanced/certificate-security.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Certificate Based Security",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Big Peer Internals",permalink:"/advanced/architecture/big-peer-internals"},next:{title:"Manual Network Transport Configuration",permalink:"/advanced/manual-network-transport-configuration"}},p=[{value:"Identities",id:"identities",children:[]},{value:"Certificates",id:"certificates",children:[]},{value:"Shared Secret Security",id:"shared-secret-security",children:[]},{value:"App-level Security",id:"app-level-security",children:[]}],y={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"With the cloud platform, most use cases will not need to learn about this section. Instead, this is an advanced discussion of Ditto's underlying certificate, identity, and encryption implementation. However, if you are deploying an enterprise on-premise deployment of Ditto, you may be required to reference the following material.")),(0,r.kt)("p",null,"All communications are consistently protected by modern and robust encryption for all of Ditto's communication methods. Cryptographically-signed business rules ensure users can only sync data that they are permitted to access. The app developer is in complete control of the keys, certificates, and rules."),(0,r.kt)("p",null,"The following details information about the certificates used to encrypt the communication channels."),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Capability"),(0,r.kt)("th",null,"Type")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Encryption"),(0,r.kt)("td",null,"TLS 1.3")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Authentication"),(0,r.kt)("td",null,"EC keypairs with signed certificates")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Trust infrastructure"),(0,r.kt)("td",null,"X.509 with a developer-controlled certificate authority")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Access Rules"),(0,r.kt)("td",null,"Query patterns on Document _id's describing read and or write access"))),(0,r.kt)("h2",{id:"identities"},"Identities"),(0,r.kt)("p",null,"Every installation of an app that uses Ditto has its own identity. This identity is used to identify each unique peer in the mesh network. When you start prototyping with Ditto you can use a development identity, which contains default settings and offers no real security. Development certificates should absolutely not be deployed to any production environments. Once you are ready to deploy, this can be swapped for a production identity where security is enforced."),(0,r.kt)("p",null,"An identity is a bundle of device and app-specific information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Site ID - A number unique to this device."),(0,r.kt)("li",{parentName:"ul"},"App Name - A name identifying the application. This avoids different Ditto-enabled apps trying to sync with each other. Like iOS App IDs, this takes the form of a domain name. Example: app.ditto.live"),(0,r.kt)("li",{parentName:"ul"},"Access Rules - Define which documents this device is allowed to read or write during sync."),(0,r.kt)("li",{parentName:"ul"},"Private Key - A secret for authenticating as this identity."),(0,r.kt)("li",{parentName:"ul"},"Identity Certificate - A certificate verifying the particulars of this device, signed by the CA."),(0,r.kt)("li",{parentName:"ul"},"CA Certificate - Used to verify certificates presented by other devices with the same app.")),(0,r.kt)("table",null,(0,r.kt)("tr",null,(0,r.kt)("th",null),(0,r.kt)("th",null,"Production"),(0,r.kt)("th",null,"Development")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Site ID"),(0,r.kt)("td",null,"Allocated by central authority"),(0,r.kt)("td",null,"Defaults to a random number; can be customized")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"App Name"),(0,r.kt)("td",null,"Set by central authority"),(0,r.kt)("td",null,'Defaults to "app.ditto.live"; can be customized')),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Access Rules"),(0,r.kt)("td",null,"Set by central authority"),(0,r.kt)("td",null,"All devices may read/write all documents")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Private Key"),(0,r.kt)("td",null,"Either generated on device, or distributed by central authority"),(0,r.kt)("td",null,"Hard-coded and shared by all devices")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"Identity Certificate"),(0,r.kt)("td",null,"Unique and signed by central authority; contains this device's public key"),(0,r.kt)("td",null,"Hard-coded and shared by all devices")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"CA Certificate"),(0,r.kt)("td",null,"Shared by all users of the same app"),(0,r.kt)("td",null,"Hard-coded and shared by all devices")),(0,r.kt)("table",null)),(0,r.kt)("h2",{id:"certificates"},"Certificates"),(0,r.kt)("p",null,"Ditto identities and public keys are distributed in the standard X.509 certificate format. They do not directly contain potentially sensitive data such as access rules."),(0,r.kt)("p",null,"Ditto does not commit you to any workflow for managing identity data and certificates. When you are ready to start using production identities, contact the Ditto team through the Ditto Portal and we will help you set up the right CA tooling for your use case - or provide specifications so you can build your own."),(0,r.kt)("h2",{id:"shared-secret-security"},"Shared Secret Security"),(0,r.kt)("p",null,"Ditto offers an intermediate-level of security for applications where all users and devices are trusted. For example, this could be appropriate for an enterprise application run on centrally managed devices. In this mode, every device knows the same secret key, and uses this to validate incoming connections. The benefit of this approach is that distinct certificates do not have to be distributed to every device, simplifying the deployment considerations."),(0,r.kt)("p",null,"To generate a shared secret, use this command with OpenSSL:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"openssl genpkey -algorithm EC -pkeyopt ec_paramgen_curve:P-256 -outform pem | openssl pkcs8 -topk8 -nocrypt -outform der | base64 -w 0\n")),(0,r.kt)("p",null,"At time of writing, this command works on Linux machines with an up-to-date OpenSSL but not with the LibreSSL distributed on Macs. See openssl version."),(0,r.kt)(o.Z,{groupId:"programming-language",defaultValue:"javascript",values:[{label:"JavaScript",value:"javascript"},{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"},{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"},{label:"C#",value:"csharp"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"javascript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"//Shared secrets are not supported by the JS SDK yet.\n"))),(0,r.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-swift"},'let p256DerB64 = "<base64 DER string>"\nlet identity = DittoIdentity.sharedKey(appName: "app", sharedKey: p256DerB64)\nDitto(identity: identity)\n'))),(0,r.kt)(l.Z,{value:"objc",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-objc"},'NSString *p256_der_b64 = @"<base64 DER string>";\nDITIdentity *identity = [[DITIdentity alloc] initWithAppName:@"app" sharedKey:p256_der_b64 siteID:nil];\nDITDitto *ditto = [[DITDitto alloc] initWithIdentity:identity];\n'))),(0,r.kt)(l.Z,{value:"kotlin",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-kotlin"},'val p256DerB64 = "<base64 DER string>"\nval androidDependencies = DefaultAndroidDittoDependencies(context)\nval identity = DittoIdentity.SharedKey("app", p256DerB64, null)\nDitto(androidDependencies, identity)\n'))),(0,r.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'String p256DerB64 = "<base64 DER string>"\nDefaultAndroidDittoDependencies androidDependencies = new DefaultAndroidDittoDependencies(applicationContext);\nDittoIdentity identity = new DittoIdentity.SharedKey("app", p256DerB64, null)\nDitto ditto = new Ditto(androidDependencies, identity);\n'))),(0,r.kt)(l.Z,{value:"csharp",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'String p256DerB64 = "<base64 DER string>";\nvar identity = DittoIdentity.SharedKey("app", p256DerB64);\nDitto ditto = new Ditto(identity);\n'))),(0,r.kt)(l.Z,{value:"cpp",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cpp"},'std::string p256_der_b64 = "<base64 DER string>";\nIdentity identity = Identity("app", p256_der_b64);\nDitto ditto = Ditto(identity);\n')))),(0,r.kt)("h2",{id:"app-level-security"},"App-level Security"),(0,r.kt)("p",null,"The access rules contained in the identity are rigid, signed by the central certificate authority, and enforced by all participating devices. This offers the highest level of security. If a person is not allowed to access particular data, it will never be synced to their device."),(0,r.kt)("p",null,"For apps with weaker security requirements a developer may choose to relax the access rules for Ditto, then restrict access in their application code."),(0,r.kt)("p",null,"One advantage is that the developer has more flexibility to change the access rules dynamically, since they are not encoded in signed certificates. Another advantage is that all devices in the mesh can participate in syncing the data, which may help it propagate faster. If certain data is only accessible to a few privileged devices which are not often in range of each other, it will take longer for them to sync."),(0,r.kt)("p",null,"The disadvantage is that an unprivileged user does have a device containing privileged data. A technically savvy user or phone thief may be able to gain access to not only their regular data, but also the more privileged data that they were never intended to able to view."),(0,r.kt)("p",null,"Therefore relaxed access rules - app-level security - are only suitable for environments where there is a degree of trust that the devices won't end up unlocked in the wrong hands."))}h.isMDXComponent=!0},86010:function(e,t,n){function i(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);