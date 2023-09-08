---
layout: post
title: Download in Vue Pdfviewer component | Syncfusion
description: Learn here all about Download in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Download 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---
# Download in Vue Pdfviewer component

The PDF Viewer supports downloading the loaded PDF file. You can enable/disable the download using the following code snippet.

![Alt text](./images/download.png)

You can invoke download action using following code snippet.,

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<template>
  <div id="app">
    <button v-on:click="downloadClicked">Download</button>
      <ejs-pdfviewer
        id="pdfViewer"
        ref="pdfviewer"
        :documentPath="documentPath"
        :documentLoad="documentLoad">
      </ejs-pdfviewer>

  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, 
         LinkAnnotation, BookmarkView, Annotation, ThumbnailView, 
         Print, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation, 
                 ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    downloadClicked: function (args) {
      viewer.download();
    },
    documentLoad: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
    },
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

<template>
  <div id="app">
    <button v-on:click="downloadClicked">Download</button>
      <ejs-pdfviewer
        id="pdfViewer"
        ref="pdfviewer"
        :serviceUrl="serviceUrl"
        :documentPath="documentPath"
        :documentLoad="documentLoad">
      </ejs-pdfviewer>

  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, 
         LinkAnnotation, BookmarkView, Annotation, ThumbnailView, 
         Print, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      serviceUrl:"https://ej2services.syncfusion.com/production/web-services/api/pdfviewer",
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation, 
                 ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    downloadClicked: function (args) {
      viewer.download();
    },
    documentLoad: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
    },
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## See also

* [Toolbar items](./toolbar)
* [Feature Modules](./feature-module)