---
title: 'C#'
sidebar_position: 6
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Installation

> Currently, the C# SDK runs on macOS, Windows, and Linux. Currently, there is no peer to peer capabilites of the C# SDK, however we are working on it. Xamarin iOS and Android Support are coming soon. Please email us at [contact@ditto.live](mailto:contact@ditto.live) if these other platforms are essential for you. 

The C# SDK is available as part of [NuGet](https://nuget.org). The common ways to install the SDK is with either the NuGet Package Manager, the .NET CLI, or by adding a reference to the CSProj XML file.

<Tabs
  groupId="dotnet-installation"
  defaultValue="javascript"
  values={[
    {label: "Package Manager", value: 'package-manager'},
    {label: '.NET CLI', value: 'cli'},
    {label: 'Package Reference', value: 'package-reference'},
  ]
}>
<TabItem value="package-manager">

```
Install-Package Ditto
```

</TabItem>
<TabItem value="cli">

```
dotnet add package Ditto
```

</TabItem>
<TabItem value="package-reference">

```xml
<PackageReference Include="Ditto" Version="1.*" />
```

</TabItem>
</Tabs>

[For more installation options visit the NuGet Page](https://www.nuget.org/packages/Ditto/)

Now in your code you can call:

```csharp
using DittoSDK;
using System.Collections.Generic;

var ditto = new Ditto(identity: DittoIdentity.Development(appName: "live.ditto.tasks"));

ditto.SetLicenseToken("my token");
ditto.TryStartSync();

var insertedId = ditto.Store.Collection("cars").Insert(new Dictionary<string, object> {
    { "make", "honda" },
    { "color", "red" },
});
```