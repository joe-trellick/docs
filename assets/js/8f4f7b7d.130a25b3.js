"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[506],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(s,".").concat(m)]||p[m]||u[m]||a;return n?i.createElement(f,r(r({ref:t},d),{},{components:n})):i.createElement(f,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var c=2;c<a;c++)r[c]=n[c];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},58215:function(e,t,n){var i=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,o=e.className;return i.createElement("div",{role:"tabpanel",hidden:n,className:o},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return u}});var i=n(67294),o=n(79443);var a=function(){var e=(0,i.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=n(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,d=39;var u=function(e){var t=e.lazy,n=e.block,o=e.defaultValue,u=e.values,p=e.groupId,m=e.className,f=a(),v=f.tabGroupChoices,g=f.setTabGroupChoices,b=(0,i.useState)(o),T=b[0],y=b[1],k=i.Children.toArray(e.children),N=[];if(null!=p){var h=v[p];null!=h&&h!==T&&u.some((function(e){return e.value===h}))&&y(h)}var C=function(e){var t=e.currentTarget,n=N.indexOf(t),i=u[n].value;y(i),null!=p&&(g(p,i),setTimeout((function(){var e,n,i,o,a,r,l,c;(e=t.getBoundingClientRect(),n=e.top,i=e.left,o=e.bottom,a=e.right,r=window,l=r.innerHeight,c=r.innerWidth,n>=0&&a<=c&&o<=l&&i>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},D=function(e){var t,n;switch(e.keyCode){case d:var i=N.indexOf(e.target)+1;n=N[i]||N[0];break;case c:var o=N.indexOf(e.target)-1;n=N[o]||N[N.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},m)},u.map((function(e){var t=e.value,n=e.label;return i.createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,r.Z)("tabs__item",l,{"tabs__item--active":T===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:D,onFocus:C,onClick:C},n)}))),t?(0,i.cloneElement)(k.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}},79443:function(e,t,n){var i=(0,n(67294).createContext)(void 0);t.Z=i},71545:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return p},default:function(){return f}});var i=n(87462),o=n(63366),a=(n(67294),n(3905)),r=n(55064),l=n(58215),s=["components"],c={title:"Monitoring Transport Conditions"},d=void 0,u={unversionedId:"advanced/monitoring-network-transports",id:"advanced/monitoring-network-transports",isDocsHomePage:!1,title:"Monitoring Transport Conditions",description:"If syncing over Bluetooth LE is a critical part of your application you may want to warn the user if they are missing the permission or if the hardware is disabled. Ditto will help you by reporting conditions via a delegate or callback object.",source:"@site/docs/advanced/monitoring-network-transports.md",sourceDirName:"advanced",slug:"/advanced/monitoring-network-transports",permalink:"/advanced/monitoring-network-transports",editUrl:"https://github.com/getditto/docs/edit/master/website/docs/advanced/monitoring-network-transports.md",tags:[],version:"current",frontMatter:{title:"Monitoring Transport Conditions"},sidebar:"tutorialSidebar",previous:{title:"Certificate Based Security",permalink:"/advanced/certificate-security"},next:{title:"UIKit (Swift & Objective C)",permalink:"/tutorials/tasks/uikit"}},p=[],m={toc:p};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If syncing over Bluetooth LE is a critical part of your application you may want to warn the user if they are missing the permission or if the hardware is disabled. Ditto will help you by reporting conditions via a delegate or callback object."),(0,a.kt)("p",null,"First, while configuring Ditto, assign a delegate or a callback to receive notifications."),(0,a.kt)(r.Z,{groupId:"programming-language",defaultValue:"swift",values:[{label:"JavaScript",value:"javascript"},{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"},{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"},{label:"C#",value:"csharp"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"javascript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"ditto.tryStartSync()\n"))),(0,a.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'// Setting up inside a ViewController\nditto = Ditto()\nditto.delegate = self\nditto.setLicenseToken("...")\ntry! ditto.tryStartSync()\n'))),(0,a.kt)(l.Z,{value:"objc",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objc"},'// Setting up inside a ViewController\nDITDitto *ditto = [[DITDitto alloc] init];\nditto.delegate = self;\n[ditto setLicenseToken: @"..."];\n[ditto tryStartSync:nil];\n'))),(0,a.kt)(l.Z,{value:"kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'// Setting up inside an Activity\nval androidDependencies = DefaultAndroidDittoDependencies(applicationContext)\nval ditto = Ditto(androidDependencies)\nditto.callback = this\nditto.setLicenseToken("...")\nditto.tryStartSync()\n'))),(0,a.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'// Setting up inside an Activity\nDefaultAndroidDittoDependencies androidDependencies = new DefaultAndroidDittoDependencies(getApplicationContext());\nDitto ditto = new Ditto(androidDependencies);\nditto.callback = this;\nditto.setLicenseToken("...");\nditto.tryStartSync();\n'))),(0,a.kt)(l.Z,{value:"csharp",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},'// Setting up inside Main\nDitto ditto = new Ditto();\nditto.setLicenseToken("...");\nditto.tryStartSync();\n'))),(0,a.kt)(l.Z,{value:"cpp",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// API coming soon.\n")))),(0,a.kt)("p",null,"Now you can observe real time changes to the transport conditions:"),(0,a.kt)(r.Z,{groupId:"programming-language",defaultValue:"javascript",values:[{label:"JavaScript",value:"javascript"},{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"},{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"},{label:"C#",value:"csharp"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"javascript",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const transportConditionsObserver = ditto.observeTransportConditions((condition, source) => {\n    console.log(condition, source)\n})\n"))),(0,a.kt)(l.Z,{value:"swift",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-swift"},'extension ViewController: DittoDelegate {\n    func transportConditionDidChange(transportID: Int64, condition: TransportCondition) {\n        if condition == .BleDisabled {\n            print("BLE disabled")\n        } else if condition == .NoBleCentralPermission {\n            print("Permission missing for BLE")\n        } else if condition == .NoBlePeripheralPermission {\n            print("Permission missing for BLE")\n        }\n    }\n}\n'))),(0,a.kt)(l.Z,{value:"objc",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objc"},'@interface ViewController () <DITDittoDelegate>\n\n@end\n\n@implementation ViewController\n\n- (void)transportConditionChanged:(enum DITTransportCondition)condition forSubsystem:(enum DITConditionSource)source {\n    if (condition == DITTransportConditionBleDisabled) {\n        NSLog(@"BLE disabled");\n    } else if (condition == DITTransportConditionNoBleCentralPermission) {\n        NSLog(@"Permission missing for BLE");\n    } else if (condition == DITTransportConditionNoBlePeripheralPermission) {\n        NSLog(@"Permission missing for BLE");\n    }\n}\n\n@end\n'))),(0,a.kt)(l.Z,{value:"kotlin",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'class MainActivity : AppCompatActivity(), DittoCallback {\n    // ...\n    override fun transportConditionDidChange(transportId: Long, condition: TransportCondition) {\n        var toastText: String? = null\n        if (condition == TransportCondition.TRANSPORT_CONDITION_BLE_DISABLED) {\n            toastText = "BLE disabled"\n        } else if (condition == TransportCondition.TRANSPORT_CONDITION_NO_BLE_CENTRAL_PERMISSION) {\n            toastText = "Permission missing for BLE"\n        } else if (condition == TransportCondition.TRANSPORT_CONDITION_NO_BLE_PERIPHERAL_PERMISSION) {\n            toastText = "Permission missing for BLE"\n        }\n        toastText?.let {\n            Handler(mainLooper).post {\n                Toast.makeText(this, it, Toast.LENGTH_LONG).show()\n            }\n        }\n    }\n}\n'))),(0,a.kt)(l.Z,{value:"java",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class MainActivity extends AppCompatActivity implements DittoCallback {\n    @Override\n    public void transportConditionDidChange(@NotNull DittoTransportCondition condition, @NotNull DittoConditionSource transportId) {\n        String toastText = null;\n        if (condition == DittoTransportCondition.BleDisabled) {\n            toastText = "BLE disabled";\n        } else if (condition == DittoTransportCondition.NoBleCentralPermission) {\n            toastText = "Permission missing for BLE";\n        } else if (condition == DittoTransportCondition.NoBlePeripheralPermission) {\n            toastText = "Permission missing for BLE";\n        }\n\n        if (toastText != null) {\n            String finalToastText = toastText;\n            runOnUiThread(new Runnable() {\n                @Override\n                public void run() {\n                    Toast.makeText(MainActivity.this, finalToastText, Toast.LENGTH_LONG).show();\n                }\n            });\n        }\n    }\n}\n'))),(0,a.kt)(l.Z,{value:"csharp",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-csharp"},"// API Not yet available\n"))),(0,a.kt)(l.Z,{value:"cpp",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cpp"},"// API Not yet available\n")))))}f.isMDXComponent=!0},86010:function(e,t,n){function i(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(o&&(o+=" "),o+=t);return o}n.d(t,{Z:function(){return o}})}}]);