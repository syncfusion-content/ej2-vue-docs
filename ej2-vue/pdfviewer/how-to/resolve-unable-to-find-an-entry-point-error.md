---
layout: post
title: Resolve Unable to find an entry point error in Vue Pdfviewer component | Syncfusion
description: Learn here all about how to resolve unable to find an entry point error in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Unable to find an entry point
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Resolve "Unable to find an entry point named FPDFText_GetCharAngle" error

From the release of version **21.1.0.35 (2023 Volume 1)** of Essential Studio<sup style="font-size:70%">&reg;</sup>, the Pdfium package has been upgraded to improve various functionalities like text search, text selection, rendering, and even performance. If you are updating your project to this version of the Syncfusion<sup style="font-size:70%">&reg;</sup> PDF Viewer, you may encounter the **"Web-Service is not listening"** error. The Network tab can help you identify the root cause of the issue, which is typically caused by an old version of pdfium assembly being referenced in the local web service project. Below are the assemblies to be referred to in the respective operating systems.

* Windows – pdfium.dll
* Linux – libpdfium.so
* OSX – libpdfium.dylib

![Error information in the Network tab](../../pdfviewer/images/ErrorinformationuintheNetworkTab.png)

## To solve this issue, you should follow the below steps:

1. Clear the bin and object files of the web-service project.
2. Re-publish the web-service project.

N> **Note:** If you are hosting your application in Azure, AWS, or in Linux environments, delete the older published files and republish the application.