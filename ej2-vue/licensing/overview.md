---
layout: post
title: Overview in Vue Licensing component | Syncfusion
description: Learn here all about Overview in Syncfusion Vue Licensing component of Syncfusion Essential JS 2 and more.
control: Overview 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Syncfusion<sup style="font-size:70%">&reg;</sup> Licensing Overview

We have introduced license key validation for Essential<sup style="font-size:70%">&reg;</sup> JS2 platforms from the 2022 Volume 1 release. This licensing key validation will enforce the developer to register the valid licensing key in an application while referring to any of the latest JavaScript packages, either from npm or CDN or build.

License keys can be obtained from the [License and Downloads](https://www.syncfusion.com/account/downloads) section of the Syncfusion<sup style="font-size:70%">&reg;</sup> website. An active trial, license, or community license is required to obtain a license key.

Failure to register a valid license key results in a license validation error message:

> This application was built using a trial version of Syncfusion<sup style="font-size:70%">&reg;</sup> Essential<sup style="font-size:70%">&reg;</sup> Studio. Please include a valid license to permanently remove this license validation message. You can also obtain a free 30-day evaluation license to temporarily remove this message during the evaluation period. Please refer to this [help topic](https://ej2.syncfusion.com/vue/documentation/licensing/licensing-errors/#license-key-not-registered) for more information.

## Difference between unlock key and license key

Please note that this license key is different from the installer unlock key that you might have used in the past and needs to be separately generated from Syncfusion<sup style="font-size:70%">&reg;</sup> website.

* **Unlock Key** - Syncfusion<sup style="font-size:70%">&reg;</sup> Unlock Key is used to unlock the Syncfusion<sup style="font-size:70%">&reg;</sup> installers alone.

* **License Key** - Syncfusion<sup style="font-size:70%">&reg;</sup> License Key is a string that needs to be registered in your script to avoid licensing warning.

> Refer to this [KB article](https://www.syncfusion.com/kb/8950/difference-between-the-unlock-key-and-licensing-key) for more information about the differences between the unlock key and the license key.

## Registering Syncfusion<sup style="font-size:70%">&reg;</sup> license keys in Build server

| Source of Syncfusion<sup style="font-size:70%">&reg;</sup> assemblies | Details | License Key needs to be registered? | Where to get license key from |
| ------------- | ------------- | ------------- | ------------- |
| **NuGet package** | If the Syncfusion<sup style="font-size:70%">&reg;</sup> assemblies used in Build Server were from the Syncfusion<sup style="font-size:70%">&reg;</sup> NuGet packages, then no need to install any Syncfusion<sup style="font-size:70%">&reg;</sup> installer. We can directly use the required Syncfusion<sup style="font-size:70%">&reg;</sup> NuGet packages at [nuget.org](https://www.nuget.org/). <br><br>But, if using NuGet packages from the [nuget.org](https://www.nuget.org/packages?q=syncfusion), then we should register the Syncfusion<sup style="font-size:70%">&reg;</sup> license key in the application.| Yes | Use any developer license to [generate](https://ej2.syncfusion.com/vue/documentation/licensing/license-key-generation) keys for Build Environments as well. |
| **Trial installer** | If the Syncfusion<sup style="font-size:70%">&reg;</sup> assemblies used in Build Server were from Trial Installer, we should register the license key in the application for the corresponding version and platforms, to avoid trial license warning. | Yes | Use any developer trial license to [generate](https://ej2.syncfusion.com/vue/documentation/licensing/license-key-generation) keys for Build Environments as well. |
| **Licensed installer** |If the Syncfusion<sup style="font-size:70%">&reg;</sup> assemblies used in Build Server were from Licensed Installer, then there is no need to register the license keys.<br><br>You can [download](https://ej2.syncfusion.com/vue/documentation/installation-and-upgrade/download#download-the-license-version) and [install](https://ej2.syncfusion.com/vue/documentation/installation-and-upgrade/installation-using-web-installer) the licensed version of our installer. | No | Not applicable |

## See also

* [How to generate Syncfusion<sup style="font-size:70%">&reg;</sup> Vue license key?](https://ej2.syncfusion.com/vue/documentation/licensing/license-key-generation)
* [How to register Syncfusion<sup style="font-size:70%">&reg;</sup> license key in Vue application?](https://ej2.syncfusion.com/vue/documentation/licensing/license-key-registration)
* [Licensing FAQ](https://ej2.syncfusion.com/vue/documentation/licensing/licensing-troubleshoot)
