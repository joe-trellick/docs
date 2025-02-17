---
title: 'Certificate Based Security'
sidebar_position: 2
---


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

> With the cloud platform, most use cases will not need to learn about this section. Instead, this is an advanced discussion of Ditto's underlying certificate, identity, and encryption implementation. However, if you are deploying an enterprise on-premise deployment of Ditto, you may be required to reference the following material.

All communications are consistently protected by modern and robust encryption for all of Ditto's communication methods. Cryptographically-signed business rules ensure users can only sync data that they are permitted to access. The app developer is in complete control of the keys, certificates, and rules.
 
The following details information about the certificates used to encrypt the communication channels.
 
<table>
<tr>
  <th>Capability</th>
  <th>Type</th>
</tr>

<tr>
  <td>Encryption</td>
  <td>TLS 1.3</td>
</tr>

<tr>
  <td>Authentication</td>
  <td>EC keypairs with signed certificates</td>
</tr>

<tr>
  <td>Trust infrastructure</td>
  <td>X.509 with a developer-controlled certificate authority</td>
</tr>

<tr>
  <td>Access Rules</td>
  <td>
  
    Query patterns on Document _id's describing read and or write access

  </td>
</tr>

</table>

## Identities

Every installation of an app that uses Ditto has its own identity. This identity is used to identify each unique peer in the mesh network. When you start prototyping with Ditto you can use a development identity, which contains default settings and offers no real security. Development certificates should absolutely not be deployed to any production environments. Once you are ready to deploy, this can be swapped for a production identity where security is enforced.

An identity is a bundle of device and app-specific information:

* Site ID - A number unique to this device.
* App Name - A name identifying the application. This avoids different Ditto-enabled apps trying to sync with each other. Like iOS App IDs, this takes the form of a domain name. Example: app.ditto.live
* Access Rules - Define which documents this device is allowed to read or write during sync.
* Private Key - A secret for authenticating as this identity.
* Identity Certificate - A certificate verifying the particulars of this device, signed by the CA.
* CA Certificate - Used to verify certificates presented by other devices with the same app.

<table>
  <tr>
    <th></th>
    <th>Production</th>
    <th>Development</th>
  </tr>

  <tr>
    <td>Site ID</td>
    <td>Allocated by central authority</td>
    <td>Defaults to a random number; can be customized</td>
  </tr>

  <tr>
    <td>App Name</td>
    <td>Set by central authority</td>
    <td>Defaults to "app.ditto.live"; can be customized</td>
  </tr>

  <tr>
    <td>Access Rules</td>
    <td>Set by central authority</td>
    <td>All devices may read/write all documents</td>
  </tr>

  <tr>
    <td>Private Key</td>
    <td>Either generated on device, or distributed by central authority</td>
    <td>Hard-coded and shared by all devices</td>
  </tr>

  <tr>
    <td>Identity Certificate</td>
    <td>
      Unique and signed by central authority; contains this device's public key
    </td>
    <td>Hard-coded and shared by all devices</td>
  </tr>

  <tr>
    <td>CA Certificate</td>
    <td>Shared by all users of the same app</td>
    <td>Hard-coded and shared by all devices</td>
  </tr>

  <table></table>
</table>


## Certificates
Ditto identities and public keys are distributed in the standard X.509 certificate format. They do not directly contain potentially sensitive data such as access rules.

Ditto does not commit you to any workflow for managing identity data and certificates. When you are ready to start using production identities, contact the Ditto team through the Ditto Portal and we will help you set up the right CA tooling for your use case - or provide specifications so you can build your own.

## Shared Secret Security

Ditto offers an intermediate-level of security for applications where all users and devices are trusted. For example, this could be appropriate for an enterprise application run on centrally managed devices. In this mode, every device knows the same secret key, and uses this to validate incoming connections. The benefit of this approach is that distinct certificates do not have to be distributed to every device, simplifying the deployment considerations.

To generate a shared secret, use this command with OpenSSL:

```console
openssl genpkey -algorithm EC -pkeyopt ec_paramgen_curve:P-256 -outform pem | openssl pkcs8 -topk8 -nocrypt -outform der | base64 -w 0
```

At time of writing, this command works on Linux machines with an up-to-date OpenSSL but not with the LibreSSL distributed on Macs. See openssl version.

<Tabs
  groupId="programming-language"
  defaultValue="javascript"
  values={[
    {label: 'JavaScript', value: 'javascript'},
    {label: 'Swift', value: 'swift'},
    {label: 'Objective-C', value: 'objc'},
    {label: 'Kotlin', value: 'kotlin'},
    {label: 'Java', value: 'java'},
    {label: 'C#', value: 'csharp'},
    {label: 'C++', value: 'cpp'},
  ]
}>
<TabItem value="javascript">

```js
//Shared secrets are not supported by the JS SDK yet.
```

</TabItem>
<TabItem value="swift">

```swift
let p256DerB64 = "<base64 DER string>"
let identity = DittoIdentity.sharedKey(appName: "app", sharedKey: p256DerB64)
Ditto(identity: identity)
```

</TabItem>
<TabItem value="objc">

```objc
NSString *p256_der_b64 = @"<base64 DER string>";
DITIdentity *identity = [[DITIdentity alloc] initWithAppName:@"app" sharedKey:p256_der_b64 siteID:nil];
DITDitto *ditto = [[DITDitto alloc] initWithIdentity:identity];
```

</TabItem>
<TabItem value="kotlin">

```kotlin
val p256DerB64 = "<base64 DER string>"
val androidDependencies = DefaultAndroidDittoDependencies(context)
val identity = DittoIdentity.SharedKey("app", p256DerB64, null)
Ditto(androidDependencies, identity)
```

</TabItem>
<TabItem value="java">

```java
String p256DerB64 = "<base64 DER string>"
DefaultAndroidDittoDependencies androidDependencies = new DefaultAndroidDittoDependencies(applicationContext);
DittoIdentity identity = new DittoIdentity.SharedKey("app", p256DerB64, null)
Ditto ditto = new Ditto(androidDependencies, identity);
```

</TabItem>
<TabItem value="csharp">

```csharp
String p256DerB64 = "<base64 DER string>";
var identity = DittoIdentity.SharedKey("app", p256DerB64);
Ditto ditto = new Ditto(identity);
```

</TabItem>
<TabItem value="cpp">

```cpp
std::string p256_der_b64 = "<base64 DER string>";
Identity identity = Identity("app", p256_der_b64);
Ditto ditto = Ditto(identity);
```

</TabItem>
</Tabs>

## App-level Security
The access rules contained in the identity are rigid, signed by the central certificate authority, and enforced by all participating devices. This offers the highest level of security. If a person is not allowed to access particular data, it will never be synced to their device.

For apps with weaker security requirements a developer may choose to relax the access rules for Ditto, then restrict access in their application code.

One advantage is that the developer has more flexibility to change the access rules dynamically, since they are not encoded in signed certificates. Another advantage is that all devices in the mesh can participate in syncing the data, which may help it propagate faster. If certain data is only accessible to a few privileged devices which are not often in range of each other, it will take longer for them to sync.

The disadvantage is that an unprivileged user does have a device containing privileged data. A technically savvy user or phone thief may be able to gain access to not only their regular data, but also the more privileged data that they were never intended to able to view.

Therefore relaxed access rules - app-level security - are only suitable for environments where there is a degree of trust that the devices won't end up unlocked in the wrong hands.