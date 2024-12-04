---
layout: post
title: Getting started with Vue Standalone PDF Viewer component | Syncfusion
description: Checkout and learn about Getting started with Vue PDF Viewer component of Syncfusion Essential JS 2 and more details.
control: PDF Viewer 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting started with Vue Standalone PDF Viewer

This article provides a step-by-step guide for setting up a Vue 2 project using [Vue-CLI](https://cli.vuejs.org/) and integrating the Syncfusion Vue PDF Viewer component

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements)

## Setting up the Vue 2 project

To generate a Vue 2 project using Vue-CLI, use the [Vue create](https://cli.vuejs.org/#getting-started) command. Follow these steps to install Vue CLI and create a new project:

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

![Vue 2 project](./images/vue2-terminal.png)

Once the `quickstart` project is set up with default settings, proceed to add Syncfusion components to the project.

## Add Syncfusion Vue packages

Install Syncfusion `PDF Viewer` packages using below command.

Syncfusion packages are available at [npmjs.com](https://www.npmjs.com/search?q=ej2-vue). To use Vue components, install the required npm package.

This article uses the [Vue PDF Viewer component](https://www.syncfusion.com/vue-components/vue-pdf-viewer) as an example. Install the `@syncfusion/ej2-vue-pdfviewer` package by running the following command:

```bash
npm install @syncfusion/ej2-vue-pdfviewer --save
```
or

```bash
yarn add @syncfusion/ej2-vue-pdfviewer
```

## Import Syncfusion CSS styles

You can import themes for the Syncfusion Vue component in various ways, such as using CSS or SASS styles from npm packages, CDN, [CRG](https://ej2.syncfusion.com/javascript/documentation/common/custom-resource-generator/) and [Theme Studio](https://ej2.syncfusion.com/vue/documentation/appearance/theme-studio/). Refer to [themes topic](https://ej2.syncfusion.com/vue/documentation/appearance/theme/) to know more about built-in themes and different ways to refer to themes in a Vue project.

In this article, `Material` theme is applied using CSS styles, which are available in installed packages. The necessary `Material` CSS styles for the PDF Viewer component and its dependents were imported into the `<style>` section of **src/App.vue** file.

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
  @import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-pdfviewer/styles/material.css';
</style>

{% endhighlight %}
{% endtabs %}


> PDF Viewer has different themes, please refer to [Supported themes](../appearance/theme) section.

## Add Syncfusion Vue component

Follow the below steps to add the Vue PDF Viewer component:

1\. First, import and register the PDF Viewer component in the `script` section of the **src/App.vue** file

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, 
         BookmarkView,ThumbnailView, Print,TextSelection, TextSearch, 
         Annotation, FormDesigner, FormFields, PageOrganizer} from '@syncfusion/ej2-vue-pdfviewer';

}
</script>

{% endhighlight %}
{% endtabs %}

2\. In the `template` section, define the PDF Viewer component with [documentPath](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#documentpath) and [resourceUrl](https://helpej2.syncfusion.com/vue/documentation/api/pdfviewer/#resourceurl) property.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <div id="app">
    <ejs-pdfviewer 
      id="pdfViewer" 
      :resourceUrl="resourceUrl" 
      :documentPath="documentPath"> 
    </ejs-pdfviewer>
  </div>
</template>

{% endhighlight %}
{% endtabs %}

3\. Declare the bound properties `resourceUrl` and `documentPath` in the `script` section.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<script>

import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, 
         BookmarkView,ThumbnailView, Print,TextSelection, TextSearch, 
         Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';

  export default {

  name: 'App',

  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },

    data () {
      return {
        resourceUrl:'https://cdn.syncfusion.com/ej2/26.2.11/dist/ej2-pdfviewer-lib',
        documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      };
    },

    provide: {
      PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, 
                   Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields, PageOrganizer ]}
}

</script>

{% endhighlight %}
{% endtabs %}

Here is the summarized code for the above steps in the **src/App.vue** file:

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}

<template>
  <ejs-pdfviewer 
    id="pdfViewer" 
    :resourceUrl="resourceUrl" 
    :documentPath="documentPath">
  </ejs-pdfviewer>
</template>

<script>
  import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, 
           ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';

  export default {
    name: 'App',

    components: {
      "ejs-pdfviewer": PdfViewerComponent
    },

    data() {
      return {
        resourceUrl: 'https://cdn.syncfusion.com/ej2/26.2.11/dist/ej2-pdfviewer-lib',
        documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
      };
    },
    provide: {
      PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
                   Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields, PageOrganizer ]
    }
  }
</script>

<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';  
  @import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';  
  @import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-pdfviewer/styles/material.css';
</style>

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

Here is the summarized code for the above steps in the **src/App.vue** file:

Output will be displayed as follows.

{% tabs %}
{% highlight html tabtitle="~/src/App.vue" %}
<template>
  <div id="app">
    <ejs-pdfviewer 
      id="pdfViewer" 
      :documentPath="documentPath"
      :resourceUrl="resourceUrl"> 
    </ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, 
         BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, 
         Annotation, FormDesigner, FormFields, PageOrganizer } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl:"https://cdn.syncfusion.com/ej2/26.2.11/dist/ej2-pdfviewer-lib",
    };
  },

  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
                 Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer ]
  }
}
</script>
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pdfviewer/getting-started-cs2" %}

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/Getting%20Started%20-%20Standalone)

> You can refer to our [Vue PDF Viewer](https://www.syncfusion.com/vue-components/vue-pdf-viewer) feature tour page for its groundbreaking feature representations. You can also explore our [Vue PDF Viewer example](https://ej2.syncfusion.com/vue/demos/#/bootstrap5/pdfviewer/default.html) to understand how to explains core features of PDF Viewer.
