"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9401],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),k=o,m=d["".concat(s,".").concat(k)]||d[k]||c[k]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},59327:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return d}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],l={title:"Network Transports",sidebar_position:2},s="Network Transport Support",u={unversionedId:"reference/network-transports",id:"reference/network-transports",isDocsHomePage:!1,title:"Network Transports",description:"The following are the network transports supported by Ditto. By default Ditto will attempt to use all available transports if permissions are given.",source:"@site/docs/reference/network-transports.md",sourceDirName:"reference",slug:"/reference/network-transports",permalink:"/reference/network-transports",editUrl:"https://github.com/getditto/docs/edit/master/website/docs/reference/network-transports.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"Network Transports",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Supported Platforms",permalink:"/reference/supported-platforms"},next:{title:"Frequently Asked Questions",permalink:"/reference/faq"}},p=[{value:"About the network transports",id:"about-the-network-transports",children:[{value:"Bluetooth Low Energy",id:"bluetooth-low-energy",children:[]},{value:"Apple Wireless Direct Link (AWDL)",id:"apple-wireless-direct-link-awdl",children:[]},{value:"Wi-Fi Direct",id:"wi-fi-direct",children:[]},{value:"Wi-Fi Aware",id:"wi-fi-aware",children:[]},{value:"Local Area Network",id:"local-area-network",children:[]},{value:"WebSockets",id:"websockets",children:[]},{value:"Universal Serial Bus (USB)",id:"universal-serial-bus-usb",children:[]}]}],c={toc:p};function d(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"network-transport-support"},"Network Transport Support"),(0,i.kt)("p",null,"The following are the network transports supported by Ditto. By default Ditto will attempt to use all available transports if permissions are given."),(0,i.kt)("table",{class:"table table-bordered reference-document-table"},(0,i.kt)("thead",{class:"thead-dark"},(0,i.kt)("tr",null,(0,i.kt)("th",{scope:"col"},"Transport"),(0,i.kt)("th",{scope:"col"},"iOS"),(0,i.kt)("th",{scope:"col"},"Android"),(0,i.kt)("th",{scope:"col"},"macOS"),(0,i.kt)("th",{scope:"col"},"Windows"),(0,i.kt)("th",{scope:"col"},"Linux"),(0,i.kt)("th",{scope:"col"},"Web Browser"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("th",{scope:"row"},"Bluetooth Low Energy (BLE)"),(0,i.kt)("td",null,"Supported"),(0,i.kt)("td",null,"Supported"),(0,i.kt)("td",null,"Coming Soon"),(0,i.kt)("td",null,"Coming Soon"),(0,i.kt)("td",null,"Supported"),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("th",{scope:"row"},"Apple Wireless Direct Link (AWDL)"),(0,i.kt)("td",null,"Supported"),(0,i.kt)("td",null),(0,i.kt)("td",null,"Coming Soon"),(0,i.kt)("td",null),(0,i.kt)("td",null),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("th",{scope:"row"},"Wi-Fi Aware"),(0,i.kt)("td",null),(0,i.kt)("td",null,"Coming Soon"),(0,i.kt)("td",null),(0,i.kt)("td",null),(0,i.kt)("td",null),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("th",{scope:"row"},"Wi-Fi Direct"),(0,i.kt)("td",null),(0,i.kt)("td",null,"Coming Soon"),(0,i.kt)("td",null),(0,i.kt)("td",null,"Coming Soon"),(0,i.kt)("td",null,"Coming Soon"),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("th",{scope:"row"},"Local Area Network (LAN)"),(0,i.kt)("td",null,"Supported"),(0,i.kt)("td",null,"Supported"),(0,i.kt)("td",null,"Supported"),(0,i.kt)("td",null,"Supported"),(0,i.kt)("td",null,"Supported"),(0,i.kt)("td",null)),(0,i.kt)("tr",null,(0,i.kt)("th",{scope:"row"},"WebSockets"),(0,i.kt)("td",null,"Supported"),(0,i.kt)("td",null,"Supported"),(0,i.kt)("td",null,"Supported"),(0,i.kt)("td",null,"Supported"),(0,i.kt)("td",null,"Supported"),(0,i.kt)("td",null,"Supported")),(0,i.kt)("tr",null,(0,i.kt)("th",{scope:"row"},"Universal Serial Bus (USB)"),(0,i.kt)("td",null,"Coming Soon"),(0,i.kt)("td",null,"Coming Soon"),(0,i.kt)("td",null,"Coming Soon"),(0,i.kt)("td",null,"Coming Soon"),(0,i.kt)("td",null,"Coming Soon"),(0,i.kt)("td",null,"Coming Soon")))),(0,i.kt)("h2",{id:"about-the-network-transports"},"About the network transports"),(0,i.kt)("p",null,"The following details specific information about each transport. Please read to fully understand how each platform behaves to align your expectations. We provide some ",(0,i.kt)("em",{parentName:"p"},"estimates")," of distances and bandwidth however the environment and hardware can greatly affect these numbers."),(0,i.kt)("h3",{id:"bluetooth-low-energy"},"Bluetooth Low Energy"),(0,i.kt)("p",null,"Ditto will use Bluetooth Low Energy (BLE) to form ",(0,i.kt)("strong",{parentName:"p"},"low-powered")," and ",(0,i.kt)("strong",{parentName:"p"},"high distance")," connections between devices. Depending on your device's chip, you may see some variation of distance and bandwidth. All devices that support Bluetooth Low Energy are fully capable of communicating with each other."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Devices can ",(0,i.kt)("em",{parentName:"li"},"discover")," each other at about 30m-60m away from each other but the connections can be sustained for further distances."),(0,i.kt)("li",{parentName:"ul"},"If your device is using a Bluetooth 4.0 chip, expect distances of 80 meters from point to point."),(0,i.kt)("li",{parentName:"ul"},"If your device i using a Bluetooth 5.x chip, expect impressive distances up to 130 meters from point to point.")),(0,i.kt)("p",null,"Most devices will have a Bluetooth 5.x chip if it was made during or after 2017. Bluetooth Low Energy is great for structured documents but performs poorly for large file sizes."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you intend to run Ditto on a Raspberry Pi or Linux device, ",(0,i.kt)("a",{parentName:"p",href:"../installation/linux"},"please follow the instructions to enable Bluetooth Low Energy support"))),(0,i.kt)("h3",{id:"apple-wireless-direct-link-awdl"},"Apple Wireless Direct Link (AWDL)"),(0,i.kt)("p",null,"Apple Wireless Direct Link (AWDL) is most known for powering ",(0,i.kt)("a",{parentName:"p",href:"https://support.apple.com/en-us/HT204144"},"AirDrop")," and is only supported on iOS and macOS devices. Apple Wireless Direct Link does not require an internet connection and is capable of communicating as long as the device Wi-Fi settings are turned on."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Distances are shorter than Bluetooth Low Energy with an average maximum of 35 meters from point-to-point."),(0,i.kt)("li",{parentName:"ul"},"However, the bandwidth is tremendously more powerful: capable of syncing 1 gigabyte of data in times as low as 8 seconds.")),(0,i.kt)("h3",{id:"wi-fi-direct"},"Wi-Fi Direct"),(0,i.kt)("p",null,"Wi-Fi Direct is supported on almost all Android (4.0 or higher, API Level 14 or higher) but only on some Windows 10 devices. P2P Wi-Fi Direct can achieve speeds as a fast as Apple Wireless Direct Link but unfortunately makes connections by requiring a permission alert to every new peer."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Distances can be achieved as far as 80 meters"),(0,i.kt)("li",{parentName:"ul"},"Can send 1 gigabyte of data in times as low as 8 seconds.")),(0,i.kt)("h3",{id:"wi-fi-aware"},"Wi-Fi Aware"),(0,i.kt)("p",null,"Wi-Fi aware is a new open standard introduced to Android devices that closely resembles Apple Wireless Direct Link in terms of distance and bandwidth. It is supported at the operating system level since Android 8, however not all Android manufacturers have enabled it at the hardware level."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Distances from point to point are approximately 40 meters"),(0,i.kt)("li",{parentName:"ul"},"It can sync 1 gigabyte files in as little as 8 seconds.")),(0,i.kt)("p",null,"In general most Google Pixel, Samsung, and LG phones built after 2018 can support Wi-Fi Aware. Other devices are being updated to include support. To check if your device can support Wi-Fi aware, ",(0,i.kt)("a",{parentName:"p",href:"https://play.google.com/store/apps/details?id=live.ditto.wifiawarechecker"},"download this app"),"."),(0,i.kt)("h3",{id:"local-area-network"},"Local Area Network"),(0,i.kt)("p",null,"If devices are connected over the same Wi-Fi access point or via some other means like an ethernet cord, they can take advantage of communicating over the LAN or Local Area Network."),(0,i.kt)("p",null,"Many enterprise or educational networks may have Client Isolation Mode turned ",(0,i.kt)("strong",{parentName:"p"},"ON"),". If the network has this setting ",(0,i.kt)("strong",{parentName:"p"},"ON"),' then devices are unable to discover each other and form a connection. Almost all "home" settings have this setting turned ',(0,i.kt)("strong",{parentName:"p"},"OFF"),"."),(0,i.kt)("h3",{id:"websockets"},"WebSockets"),(0,i.kt)("p",null,"All devices support WebSocket connections. It is by far the most easily available network transports which require no permissions to work. In general, WebSockets:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Require an internet connection for devices to communicate"),(0,i.kt)("li",{parentName:"ul"},"Cannot automatically discover each other like the other peer to peer transports.")),(0,i.kt)("p",null,"Devices need to specify an IP/PORT for a connection to be established. While most use cases require an internet connection. WebSockets can also work over the Local Area Network."),(0,i.kt)("h3",{id:"universal-serial-bus-usb"},"Universal Serial Bus (USB)"),(0,i.kt)("p",null,"If Ditto devices are active and share permissions for USB communication, Ditto will be able to form a wired connection between the two devices."))}d.isMDXComponent=!0}}]);