"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4571],{3905:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return m}});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=p(a),m=o,v=d["".concat(c,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(v,r(r({ref:t},s),{},{components:a})):n.createElement(v,r({ref:t},s))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,r[1]=i;for(var p=2;p<l;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:o},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return u}});var n=a(67294),o=a(79443);var l=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},r=a(86010),i="tabItem_1uMI",c="tabItemActive_2DSg";var p=37,s=39;var u=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,u=e.values,d=e.groupId,m=e.className,v=l(),g=v.tabGroupChoices,b=v.setTabGroupChoices,k=(0,n.useState)(o),f=k[0],h=k[1],y=n.Children.toArray(e.children),I=[];if(null!=d){var N=g[d];null!=N&&N!==f&&u.some((function(e){return e.value===N}))&&h(N)}var T=function(e){var t=e.currentTarget,a=I.indexOf(t),n=u[a].value;h(n),null!=d&&(b(d,n),setTimeout((function(){var e,a,n,o,l,r,i,p;(e=t.getBoundingClientRect(),a=e.top,n=e.left,o=e.bottom,l=e.right,r=window,i=r.innerHeight,p=r.innerWidth,a>=0&&l<=p&&o<=i&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},D=function(e){var t,a;switch(e.keyCode){case s:var n=I.indexOf(e.target)+1;a=I[n]||I[0];break;case p:var o=I.indexOf(e.target)-1;a=I[o]||I[I.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},m)},u.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:f===t?0:-1,"aria-selected":f===t,className:(0,r.Z)("tabs__item",i,{"tabs__item--active":f===t}),key:t,ref:function(e){return I.push(e)},onKeyDown:D,onFocus:T,onClick:T},a)}))),t?(0,n.cloneElement)(y.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==f})}))))}},79443:function(e,t,a){var n=(0,a(67294).createContext)(void 0);t.Z=n},96615:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return d},default:function(){return v}});var n=a(87462),o=a(63366),l=(a(67294),a(3905)),r=a(55064),i=a(58215),c=["components"],p={sidebar_position:2},s="Insert, Update, and Remove",u={unversionedId:"concepts/insert-update-remove",id:"concepts/insert-update-remove",isDocsHomePage:!1,title:"Insert, Update, and Remove",description:"Inserting Documents",source:"@site/docs/concepts/insert-update-remove.mdx",sourceDirName:"concepts",slug:"/concepts/insert-update-remove",permalink:"/concepts/insert-update-remove",editUrl:"https://github.com/getditto/docs/edit/master/website/docs/concepts/insert-update-remove.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Data Model",permalink:"/concepts/data-model"},next:{title:"Querying",permalink:"/concepts/querying"}},d=[{value:"Inserting Documents",id:"inserting-documents",children:[{value:"Inserting with a specific <code>_id</code>",id:"inserting-with-a-specific-_id",children:[]},{value:"Default Data",id:"default-data",children:[]}]},{value:"Updating Documents",id:"updating-documents",children:[]},{value:"Removing Documents",id:"removing-documents",children:[{value:"Removing by <code>_id</code>",id:"removing-by-_id",children:[]},{value:"Removing by query",id:"removing-by-query",children:[]}]},{value:"Evicting Data",id:"evicting-data",children:[]}],m={toc:d};function v(e){var t=e.components,a=(0,o.Z)(e,c);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"insert-update-and-remove"},"Insert, Update, and Remove"),(0,l.kt)("h2",{id:"inserting-documents"},"Inserting Documents"),(0,l.kt)("p",null,"Insert data into a collection with the insert function. It will return the ",(0,l.kt)("inlineCode",{parentName:"p"},"_id")," of the document that was inserted."),(0,l.kt)(r.Z,{groupId:"programming-language",defaultValue:"javascript",values:[{label:"JavaScript",value:"javascript"},{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"},{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"},{label:"C#",value:"csharp"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const docID = await ditto.store.collection('people').insert({\n    value: {name: \"Susan\", age: 31}\n})\n"))),(0,l.kt)(i.Z,{value:"swift",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'// Insert JSON-compatible data into Ditto\nlet docId = ditto.store["people"].insert([\n    "name": "Susan",\n    "age": 31\n])\n'))),(0,l.kt)(i.Z,{value:"objc",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objc"},'// Insert JSON-compatible data into Ditto\nDITDocumentID *docID = [[ditto.store collection:@"people"]\n     insert:@{ @"name": @"Susan", @"age": [NSNumber numberWithInt:31] }\n     isDefault:false\n     error:nil];\n'))),(0,l.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val docId = ditto.store["people"].insert(mapOf(\n    "name" to "Susan",\n    "age" to 31\n))\n'))),(0,l.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Map<String, Object> content = new HashMap<>();\ncontent.put("name", "Susan");\ncontent.put("age", 31);\nDittoDocumentID docId = ditto.store.collection("people").insert(content);\n'))),(0,l.kt)(i.Z,{value:"csharp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var content = new Dictionary<string, object>\n{\n    { "name", "Susan" },\n    { "age", 31 }\n};\nvar docId = ditto.Store.Collection("people").Insert(content);\n'))),(0,l.kt)(i.Z,{value:"cpp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'json content = json({\n    { "name", "Susan" },\n    { "age", 31 }\n});\nDocumentId doc_id = ditto.store.collection("people").insert(content);\n')))),(0,l.kt)("h3",{id:"inserting-with-a-specific-_id"},"Inserting with a specific ",(0,l.kt)("inlineCode",{parentName:"h3"},"_id")),(0,l.kt)("p",null,"There are times where you want to specify the ",(0,l.kt)("inlineCode",{parentName:"p"},"_id")," of the document before insertion. Note that the ",(0,l.kt)("inlineCode",{parentName:"p"},"_id")," is immutable. This means that you cannot change the ",(0,l.kt)("inlineCode",{parentName:"p"},"_id")," once you have inserted the document."),(0,l.kt)(r.Z,{groupId:"programming-language",defaultValue:"javascript",values:[{label:"JavaScript",value:"javascript"},{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"},{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"},{label:"C#",value:"csharp"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const docID = await ditto.store.collection(\'people\').insert({\n    _id, "123abc",\n    name: "Susan", \n    age: 31\n})\n'))),(0,l.kt)(i.Z,{value:"swift",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'// Insert JSON-compatible data into Ditto\nlet docId = ditto.store["people"].insert([\n    "_id": "123abc",\n    "name": "Susan",\n    "age": 31\n])\n'))),(0,l.kt)(i.Z,{value:"objc",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objc"},'// Insert JSON-compatible data into Ditto\nDITDocumentID *docID = [[ditto.store collection:@"people"]\n     insert:@{ @"_id": "123abc", @"name": @"Susan", @"age": [NSNumber numberWithInt:31] }\n     isDefault:false\n     error:nil];\n'))),(0,l.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val docId = ditto.store["people"].insert(mapOf(\n    "_id" to "123abc",\n    "name" to "Susan",\n    "age" to 31\n), DittoDocumentID("123abc"))\n\n'))),(0,l.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Map<String, Object> content = new HashMap<>();\ncontent.put("_id", "123abc");\ncontent.put("name", "Susan");\ncontent.put("age", 31);\nDittoDocumentID docId = ditto.store.collection("people").insert(content);\n'))),(0,l.kt)(i.Z,{value:"csharp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var content = new Dictionary<string, object>\n{\n    { "_id_", "123abc" },\n    { "name", "Susan" },\n    { "age", 31 }\n};\nditto.Store.Collection("people").Insert(content);\n'))),(0,l.kt)(i.Z,{value:"cpp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'ditto.store.collection("people").insert({{"_id", "123abc"}, { "name", "Susan" }, { "age", 31 }});\n')))),(0,l.kt)("h3",{id:"default-data"},"Default Data"),(0,l.kt)("p",null,'Default Data can be thought of as "placeholder" data.  Default Data is useful when your app needs to load "starter" data from an external data source, like from a backend API, on multiple devices without creating odd "overwriting" behavior.'),(0,l.kt)("p",null,"Ditto's approach to conflict resolution orders changes by time. In most situations, this leads to predictable behavior. However, if your application is inserting the same initial data into multiple devices, such as common data from a central backend API, this could result in overwriting later changes:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Device A inserts a document ",(0,l.kt)("inlineCode",{parentName:"li"},'{"firstName": "Adam"}')," at time = 0 after downloading from a central API."),(0,l.kt)("li",{parentName:"ol"},"Device A updates the document to ",(0,l.kt)("inlineCode",{parentName:"li"},'{"firstName": "Max"}')," at time = 1."),(0,l.kt)("li",{parentName:"ol"},"Device B synchronizes with Device A receiving the document ",(0,l.kt)("inlineCode",{parentName:"li"},'{"firstName": "Max"}')," at time = 2."),(0,l.kt)("li",{parentName:"ol"},"Device B downloads the same document from the backend API ",(0,l.kt)("inlineCode",{parentName:"li"},'{"firstName": "Adam"}')," and inserts at t = 3, which overwrites the previous change synced at time = 1.")),(0,l.kt)("p",null,"In the above example, both Device A and B want to preserve the change by Device A that occurred after downloading the common data. To do so, Ditto offers an additional parameter: isDefault."),(0,l.kt)(r.Z,{groupId:"programming-language",defaultValue:"javascript",values:[{label:"JavaScript",value:"javascript"},{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"},{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"},{label:"C#",value:"csharp"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const docID = await ditto.store.collection('people').insert({\n    id: new DocumentID(123),\n    value: {name: \"Susan\", age: 31},\n    isDefault: true\n})\n"))),(0,l.kt)(i.Z,{value:"swift",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'let docId = ditto.store.collection("people").insert([\n    "name": "Susan",\n    "age": 31\n], isDefault: true)\n'))),(0,l.kt)(i.Z,{value:"objc",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objc"},'DITDocumentID *docID = [[ditto.store collection:@"people"]\n     insert:@{ @"name": @"Susan", @"age": [NSNumber numberWithInt:31] }\n     isDefault:true\n     error:nil];\n'))),(0,l.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val docId = ditto.store.collection("people").insert(mapOf(\n    "name" to "Susan",\n    "age" to 31\n), isDefault: true)\n'))),(0,l.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Map<String, Object> content = new HashMap<>();\ncontent.put("name", "Susan");\ncontent.put("age", 31);\nDittoDocumentID docId = ditto.store\n                             .collection("people")\n                             .insert(content, new DittoDocumentID("doc-id"), true);\n'))),(0,l.kt)(i.Z,{value:"csharp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'DittoDocumentID docID = ditto.Store\n                        .Collection("people")\n                        .Insert(\n                            {{"name", "Susan"}, {"age", 31}},\n                            new DittoDocumentID("doc-id"),\n                            true\n                        );\n'))),(0,l.kt)(i.Z,{value:"cpp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'json content = json({{ "name", "Susan" }, { "age", 31 }}):\nDocumentId doc_id = ditto.store.collection("people")\n                               .insert(content, DocumentId("doc-id"), true);\n')))),(0,l.kt)("h2",{id:"updating-documents"},"Updating Documents"),(0,l.kt)("p",null,"Updating documents are categorized into 3 types of operations:"),(0,l.kt)("p",null,"Standard"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Set - sets value for a given key in the document"),(0,l.kt)("li",{parentName:"ul"},"Remove - removes a value for a given key in the document")),(0,l.kt)("p",null,"Counters"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Replace with counter - will convert a number value for a given key into a counter"),(0,l.kt)("li",{parentName:"ul"},"Increment - unlike a number, a counter allows for increment operations (decrement is performed by incrementing by a negative increment) and these operations will converge")),(0,l.kt)("p",null,"Arrays"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Push - inserts a value on to the end of an array at the document's key"),(0,l.kt)("li",{parentName:"ul"},"Pop - removes a value at the end of an array at the document's key")),(0,l.kt)(r.Z,{groupId:"programming-language",defaultValue:"javascript",values:[{label:"JavaScript",value:"javascript"},{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"},{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"},{label:"C#",value:"csharp"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const docID = await ditto.store.collection('people').insert({\n    value: {\n        name: \"Frank\",\n        age: 31,\n        ownedCars: 0,\n        friends: []\n    }\n})\n\nawait ditto.store.collection('people').findByID(docID).update((mutableDoc) => {\n    mutableDoc['age'] = 32\n    mutableDoc['friends'].push('Susan')\n    \n    // Counters aren't supported by the JS SDK yet but will be soon:\n    mutableDoc['ownedCars'].replaceWithCounter()\n    mutableDoc['ownedCars'].increment(amount: 1)    \n})\n"))),(0,l.kt)(i.Z,{value:"swift",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'let docId = ditto.store["people"].insert([\n    "name": "Frank",\n    "age": 31,\n    "ownedCars": 0,\n    "friends": []\n])\n\nditto.store["people"].findByID(docId).update { mutableDoc in\n    mutableDoc?["age"].set(32)\n    mutableDoc?["ownedCars"].replaceWithCounter()\n    mutableDoc?["ownedCars"].increment(amount: 1)\n    mutableDoc?["friends"].push("Susan")\n}\n'))),(0,l.kt)(i.Z,{value:"objc",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objc"},'NSString *docId = [[ditto.store collection:@"people"] insert:@{\n    @"name": @"Frank",\n    @"age": [NSNumber numberWithInt:31],\n    @"ownedCars": [NSNumber numberWithInt:0],\n    @"friends": @[]\n} error:nil];\n\n[[[ditto.store collection:@"people"] findByID:docId] update:^(DITMutableDocument *doc) {\n   [doc[@"age"] set:[NSNumber numberWithInt:32]];\n   [doc[@"ownedCars"] replaceWithCounter];\n   [doc[@"ownedCars"] increment:1];\n   [doc[@"friends"] push:@"Susan" error:nil];\n} error:nil];\n'))),(0,l.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'val docId = ditto.store["people"].insert(mapOf(\n    "name" to "Frank",\n    "age" to 31,\n    "ownedCars" to 0,\n    "friends" to emptyList<String>()\n))\n\nditto.store.collection("people").findByID(docId).update { mutableDoc ->\n    mutableDoc?.let {\n        it["age"].set(32)\n        it["ownedCars"].replaceWithCounter()\n        it["ownedCars"].increment(1)\n        it["friends"].push("Susan")\n        it["name"].replaceText(5, 0, " Smith")\n    }\n}\n'))),(0,l.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Map<String, Object> content = new HashMap<>();\ncontent.put("name", "Frank");\ncontent.put("age", 31);\ncontent.put("ownedCars", 0);\ncontent.put("friends", Arrays.asList());\nDittoDocumentID docId = ditto.store.collection("people").insert(content);\n\nditto.store.collection("people").findByID(docId).update(doc -> {\n    try {\n      doc.get("age").set(32);\n      doc.get("ownedCars").replaceWithCounter();\n      doc.get("ownedCars").increment(1);\n      doc.get("friends").push("Susan");\n    } catch (DittoError err) {\n        // Do something with error\n    }\n});\n'))),(0,l.kt)(i.Z,{value:"csharp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'var content = new Dictionary<string, object>\n{\n    { "name", "Bob" },\n    { "age", 40 },\n    { "ownedCars", 0 },\n    { "friends", new List<object>() }\n};\n\nvar docId = ditto.Store.Collection("people").Insert(content);\nditto.Store.Collection("people").FindById(docId).Update((mutableDoc) => {\n    mutableDoc["age"].Set(32);\n    mutableDoc["ownedCars"].ReplaceWithCounter();\n    mutableDoc["ownedCars"].Increment(1);\n    mutableDoc["friends"].Push("Susan");\n});\n'))),(0,l.kt)(i.Z,{value:"cpp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'DocumentId doc_id = ditto.store.collection("people").insert({\n  {"name", "Frank"},\n  {"age", 31},\n  {"ownedCars", 0},\n  {"friends": {}}\n});\n\nditto.store\n     .collection("people")\n     .find_by_id(doc_id)\n     .update([](MutableDocument &doc) {\n       doc["age"].set(32);\n       doc["ownedCars"].replace_with_counter();\n       doc["ownedCars"].increment(1);\n       doc["friends"].push("Susan");\n     });\n')))),(0,l.kt)("h2",{id:"removing-documents"},"Removing Documents"),(0,l.kt)("p",null,"Removes will delete or remove one or more documents from the collection. These remove operations will also sync and remove the relevant documents from connected peers."),(0,l.kt)("h3",{id:"removing-by-_id"},"Removing by ",(0,l.kt)("inlineCode",{parentName:"h3"},"_id")),(0,l.kt)(r.Z,{groupId:"programming-language",defaultValue:"javascript",values:[{label:"JavaScript",value:"javascript"},{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"},{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"},{label:"C#",value:"csharp"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await ditto.store.collection('people').findByID(docID).remove()\n"))),(0,l.kt)(i.Z,{value:"swift",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'ditto.store["people"].findByID(docId).remove()\n'))),(0,l.kt)(i.Z,{value:"objc",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objc"},'DITCollection *collection = [ditto.store collection:@"people"];\n[[collection findByID:@"123"] remove];\n'))),(0,l.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'ditto.store["people"].findByID(docId).remove()\n'))),(0,l.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'ditto.store.collection("people").findByID(docId).remove();\n'))),(0,l.kt)(i.Z,{value:"csharp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'ditto.Store.Collection("people").FindByID(docId).Remove();\n'))),(0,l.kt)(i.Z,{value:"cpp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'ditto.store.collection("people").find_by_id(docId).remove();\n')))),(0,l.kt)("h3",{id:"removing-by-query"},"Removing by query"),(0,l.kt)("p",null,'You can also remove several documents with a query string. This example will remove all documents in the "people" collection who has an age property lower than or equal to 32 (',(0,l.kt)("inlineCode",{parentName:"p"},'"age <= 32"'),")"),(0,l.kt)(r.Z,{groupId:"programming-language",defaultValue:"javascript",values:[{label:"JavaScript",value:"javascript"},{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"},{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"},{label:"C#",value:"csharp"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await ditto.store.collection('people').find('age <= 32').remove()\n"))),(0,l.kt)(i.Z,{value:"swift",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'ditto.store["people"].find("age <= 32").remove()\n'))),(0,l.kt)(i.Z,{value:"objc",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objc"},'DITCollection *collection = [ditto.store collection:@"people"];\n[[collection find:@"age <= 32"] remove];\n'))),(0,l.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'ditto.store["people"].find("age <= 32").remove()\n'))),(0,l.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'ditto.store.collection("people").find("age <= 32").remove();\n'))),(0,l.kt)(i.Z,{value:"csharp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'ditto.Store.Collection("people").Find("age <= 32").Remove();\n'))),(0,l.kt)(i.Z,{value:"cpp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'ditto.store.collection("people").find("age <= 32").remove();\n')))),(0,l.kt)("h2",{id:"evicting-data"},"Evicting Data"),(0,l.kt)("p",null,"There are times where you want to remove data ",(0,l.kt)("em",{parentName:"p"},"without")," syncing the delete operation. This operation is different than remove in that it only removes one of more documents from the local storage and ",(0,l.kt)("strong",{parentName:"p"},"does not sync the change to other devices.")),(0,l.kt)("p",null,"For example, you might use this operation when a device has completed an activity that involved synchronizing data with other devices and has transmitted the data to a backend. At this point, the device can evict the data locally to free up storage, but it does not want to remove the data from any other device."),(0,l.kt)("p",null,"The API is extremely similar to the ",(0,l.kt)("inlineCode",{parentName:"p"},"remove()")," API, however it uses ",(0,l.kt)("inlineCode",{parentName:"p"},"evict()")," instead."),(0,l.kt)(r.Z,{groupId:"programming-language",defaultValue:"javascript",values:[{label:"JavaScript",value:"javascript"},{label:"Swift",value:"swift"},{label:"Objective-C",value:"objc"},{label:"Kotlin",value:"kotlin"},{label:"Java",value:"java"},{label:"C#",value:"csharp"},{label:"C++",value:"cpp"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"javascript",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await ditto.store.collection('people').find('age <= 32').evict()\n"))),(0,l.kt)(i.Z,{value:"swift",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-swift"},'ditto.store["people"].find("age <= 32").evict()\n'))),(0,l.kt)(i.Z,{value:"objc",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-objc"},'DITCollection *collection = [ditto.store collection:@"people"];\n[[collection find:@"age <= 32"] evict];\n'))),(0,l.kt)(i.Z,{value:"kotlin",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-kotlin"},'ditto.store["people"].find("age <= 32").evict()\n'))),(0,l.kt)(i.Z,{value:"java",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'ditto.store.collection("people").find("age <= 32").evict();\n'))),(0,l.kt)(i.Z,{value:"csharp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-csharp"},'ditto.Store.Collection("people").Find("age <= 32").evict();\n'))),(0,l.kt)(i.Z,{value:"cpp",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-cpp"},'ditto.store.collection("people").find("age <= 32").evict();\n')))))}v.isMDXComponent=!0},86010:function(e,t,a){function n(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}a.d(t,{Z:function(){return o}})}}]);