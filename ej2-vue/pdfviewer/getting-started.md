---
layout: post
title: Getting started with Vue Pdfviewer component | Syncfusion
description:  Checkout and learn about Getting started with Vue Pdfviewer component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains the steps to create a simple Vue PDF Viewer and demonstrate its basic usage.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Setup Vue environment

You can use [`Vue CLI`](https://github.com/vuejs/vue-cli) to setup your Vue applications.
To install Vue CLI, use the following commands.

```bash
npm install -g @vue/cli
npm install -g @vue/cli-init
```

## Create a Vue application

Start a new Vue application using the following Vue CLI command.

```bash
vue init webpack-simple quickstart

cd quickstart
npm install
```

## Adding Syncfusion PDF Viewer package

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry. To install PDF Viewer component, use the following command.

```bash
npm install @syncfusion/ej2-vue-pdfviewer --save
```

> The **--save** will instruct NPM to include the PDF Viewer package inside the `dependencies` section of the `package.json`.

## Registering PDF Viewer component

You can register the Vue PDF Viewer component in your application by using the `Vue.use()` as in the below.

```ts
import { PdfViewerPlugin } from '@syncfusion/ej2-vue-pdfviewer';

Vue.use(PdfViewerPlugin);
```

> Registering `PdfViewerPlugin` in Vue, will register the PDF Viewer component along with its required child directives globally.

## Adding CSS reference

Add the Vue PDF Viewer component’s styles as given below in `<style>` section of the `App.vue` file.

```
<style>
<!-- Material theme used for this sample -->
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';  
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-pdfviewer/styles/material.css";
</style>
```

## Adding PDF Viewer component

Add the Vue PDF Viewer by using the `<ejs-pdfviewer>` selector in `<template>` section of the `App.vue` file.

```
<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" :serviceUrl="serviceUrl" :documentPath="documentPath"> </ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
export default {
  name: 'app',
  data () {
    return {
      serviceUrl:"https://ej2services.syncfusion.com/production/web-services/api/pdfviewer",
      documentPath:"PDF_Succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner]
  }
}
</script>
```

## Run the application

The Vue PDF Viewer application is configured to compile and run the application in a browser. Use the following command to run the application.

```bash
npm run dev
```

Output will be displayed as follows.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pdfviewer/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pdfviewer/getting-started-cs1" %}

> For PDF Viewer serviceUrl creation, follow the steps provided in the [link](https://ej2.syncfusion.com/documentation/pdfviewer/how-to/create-pdfviewer-service/)

## How to run the PDF Viewer web service

1. Download the sample from the [Web service sample in GitHub](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices) link.
2. Navigate to the `ASP.NET Core` folder and open it in the command prompt.
3. Use the below command to restore the required packages.

   ```
   dotnet restore
   ```

4. Use the below command to run the web service.

   ```
   dotnet run
   ```

5. You can see that the PDF Viewer server instance runs in the local host with the port number [`localhost:5001`](https://localhost:5001/) and navigate to the PDF Viewer Web control [`localhost:5001/pdfviewer`](https://localhost:5001/pdfviewer) which returns the default get response method. We can bind the link to the `serviceUrl` property of PDF Viewer as below.

```js
export default {
  name: 'app',
  data () {
    return {
      serviceUrl:"https://localhost:5001/pdfviewer",
      documentPath:"PDF_Succinctly.pdf"
    };
  }}
```

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/Getting%20Started).

> You can refer to our [Vue PDF Viewer](https://www.syncfusion.com/vue-ui-components/vue-pdf-viewer) feature tour page for its groundbreaking feature representations. You can also explore our [Vue PDF Viewer example](https://ej2.syncfusion.com/vue/demos/#/material/pdfviewer/default.html) to understand how to explains core features of PDF Viewer.