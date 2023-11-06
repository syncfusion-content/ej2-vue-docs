---
layout: post
title: Getting started with Vue PDF Viewer component | Syncfusion
description:  Checkout and learn about Getting started with Vue PDF Viewer component of Syncfusion Essential JS 2 and more details.
control: PDF Viewer 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started with the Vue Pdfviewer Component in Vue 2

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion Vue Pdfviewer component

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Setting up the Vue 2 project

To generate a Vue 2 project using Vue-CLI, use the [vue create](https://cli.vuejs.org/#getting-started) command. Follow these steps to install Vue CLI and create a new project:

```bash
npm install -g @vue/cli
vue create quickstart
cd quickstart
```

or

```bash
yarn global add @vue/cli
vue create quickstart
cd quickstart
```

When creating a new project, choose the option `Default ([Vue 2] babel, eslint)` from the menu.

![Vue 2 project](../appearance/images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion components to the project.

## Add Syncfusion Vue packages

Syncfusion packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue Pdfviewer component](https://www.syncfusion.com/vue-components/vue-pdf-viewer) as an example. Install the `@syncfusion/ej2-vue-pdfviewer` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-pdfviewer --save
```
or

```bash
yarn add @syncfusion/ej2-vue-pdfviewer
```

>   The **--save** will instruct NPM to include the PDF Viewer package inside the `dependencies` section of the `package.json`.

## Import Syncfusion CSS styles

You can import themes for the Syncfusion Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio/). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme/) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, the `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the Pdfviewer component and its dependents were imported into the `<style>` section of **src/App.vue** file.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

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

{% endhighlight %}
{% endtabs %}

## Add Syncfusion Vue component

Follow the below steps to add the Vue Pdfviewer component:

1\. First, import and register the Pdfviewer component in the `script` section of the **src/App.vue** file

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, 
         BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, 
         Annotation, FormDesigner, FormFields } from '@syncfusion/ej2-vue-pdfviewer';
export default {
  components: {
    'ejs-pdfviewer': PdfViewerComponent
  }
}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the Pdfviewer component with [documentPath](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#documentpath) and [serviceUrl](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer#serviceurl) property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <div id="app">
    <ejs-pdfviewer 
      id="pdfViewer" 
      :serviceUrl="serviceUrl" 
      :documentPath="documentPath"> 
    </ejs-pdfviewer>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

3\. Declare the value for the `documentPath` and `serviceUrl` properties in the `script` section.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
data () {
    return {
      serviceUrl:"https://services.syncfusion.com/vue/production/api/pdfviewer",
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  }
</script>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
{% include code-snippet/pdfviewer/getting-started-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}

## Run the project

To run the project, use the following command:

```bash
npm run serve
```

or

```bash
yarn run serve
```
        
{% previewsample "page.domainurl/code-snippet/pdfviewer/getting-started-cs1" %}

> For PDF Viewer serviceUrl creation, follow the steps provided in the [link](https://ej2.syncfusion.com/documentation/pdfviewer/how-to/create-pdfviewer-service/)

## How to run the PDF Viewer web service

1.Download the sample from the [Web service sample in GitHub](https://github.com/SyncfusionExamples/EJ2-PDFViewer-WebServices) link.
2.Navigate to the `ASP.NET Core` folder and open it in the command prompt.
3.Use the below command to restore the required packages.

```
  dotnet restore
```

4.Use the below command to run the web service.

```
  dotnet run
```

5.You can see that the PDF Viewer server instance runs in the local host with the port number `localhost:5001` and navigate to the PDF Viewer Web control `localhost:5001/pdfviewer` which returns the default get response method. We can bind the link to the `serviceUrl` property of PDF Viewer as below.

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

N> When configuring the server-backed PDF viewer, it's essential to understand that there is no need to include the pdfium.js and pdfium.wasm files. Unlike the standalone PDF viewer, which relies on these files for local rendering, the server-backed PDF viewer fetches and renders PDFs directly from the server. Consequently, you can exclude the copy command for deployment process, as they are not required to load and display PDFs in this context.

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/Getting%20Started%20-%20server-back).

> You can refer to our [Vue PDF Viewer](https://www.syncfusion.com/vue-ui-components/vue-pdf-viewer) feature tour page for its groundbreaking feature representations. You can also explore our [Vue PDF Viewer example](https://ej2.syncfusion.com/vue/demos/#/material/pdfviewer/default.html) to understand how to explains core features of PDF Viewer.