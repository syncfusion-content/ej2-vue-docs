---
layout: post
title: Getting started with Vue Standalone PDF Viewer component | Syncfusion
description: Checkout and learn about Getting started with Vue PDF Viewer component of Syncfusion Essential JS 2 and more details.
control: PDF Viewer 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with Standalone PDF Viewer component

This section explains the steps to create a simple Standalone Vue PDF Viewer and demonstrate its basic usage.

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

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg) registry. 

* To install PDF Viewer component, use the following command.

```bash
npm install @syncfusion/ej2-vue-pdfviewer --save
```

>   The **--save** will instruct NPM to include the PDF Viewer package inside the `dependencies` section of the `package.json`.

* Create a new directory named 'js' within the 'public' directory using the following command:

```bash
mkdir -p public/js
```

* Duplicate the content of the 'ej2-pdfviewer-lib' folder located in './node_modules/@syncfusion/ej2-pdfviewer/dist' to the public directory using the command:

```bash
cp -R ./node_modules/@syncfusion/ej2-pdfviewer/dist/ej2-pdfviewer-lib public/js/ej2-pdfviewer-lib
```

* Ensure that within your 'public' directory, there exists a directory named 'ej2-pdfviewer-lib' containing the assets of the PDF Viewer library.

* Validate that your server has been configured to utilize the Content-Type: application/wasm MIME type. Additional information can be found in the [Troubleshooting](./troubleshooting/troubleshooting) section.

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
    <ejs-pdfviewer 
      id="pdfViewer" 
      :serviceUrl="serviceUrl" 
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"> 
    </ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, 
         BookmarkView,ThumbnailView, Print,TextSelection, TextSearch, 
         Annotation, FormDesigner, FormFields } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data () {
    return {
      documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
      resourceUrl:"https://cdn.syncfusion.com/ej2/23.1.40/dist/ej2-pdfviewer-lib"
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, 
                 Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner]
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
{% include code-snippet/pdfviewer/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pdfviewer/getting-started-cs2" %}

> You can refer to our [Vue PDF Viewer](https://www.syncfusion.com/vue-ui-components/vue-pdf-viewer) feature tour page for its groundbreaking feature representations. You can also explore our [Vue PDF Viewer example](https://ej2.syncfusion.com/vue/demos/#/material/pdfviewer/default.html) to understand how to explains core features of PDF Viewer.

## Limitation over Server-Backed PDF Viewer to Standalone PDF Viewer control

When comparing a Standalone PDF Viewer to a Server-Backed PDF Viewer control, it's crucial to understand the limitations that the Standalone PDF Viewer may have in comparison. These limitations are important to consider

### PNG Image Support

The Standalone PDF Viewer does not have the capability to utilize PNG format for adding images to handwritten annotations ,custom stamp ,signature and initial form fields. It's important to be aware that only certain image formats, such as JPEG, are compatible for these purposes.

### Local File Access

* The Standalone PDF Viewer control does not have the capability to directly access and load local physical files from a user's device. As a result, it is not possible to use a documentPath to load a PDF file directly from a local server within the viewer.

* The Standalone PDF Viewer allows users to export annotations and form fields from the viewer, it's important to be aware that the viewer does not support the direct import of annotations and form fields from a locally specified file path. In other words, you can extract annotations and form fields from the viewer, but you cannot reintroduce them into the viewer from external sources by specifying a file path located on your local device.

N> These limitations are temporary and are expected to be addressed in the near future.