---
layout: post
title: Unload document in Vue Pdfviewer component | Syncfusion
description: Learn here all about Unload document in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Unload document 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Unload document in Vue Pdfviewer component

The PDF Viewer library allows you to unload the PDF document being displayed in the PDF Viewer control programmatically using the [**unload()**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#unload) method.

The following steps are used to unload the PDF document programmatically.

**Step 1:** Follow the steps provided in the [link](https://ej2.syncfusion.com/vue/documentation/pdfviewer/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Add the following code snippet to perform the unload operation.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<template>
  <div id="app">
     <button v-on:click="unload">Unload Document</button>
      <ejs-pdfviewer
        id="pdfViewer"
        ref="pdfviewer"
        :documentPath="documentPath">
      </ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, 
         LinkAnnotation, BookmarkView, Annotation, ThumbnailView, 
         Print, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);

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
    unload: function() {
      var viewer = document.getElementById('pdfViewer').ej2_instances[0];
      // Unload the PDF document.
      viewer.unload();
    }
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

<template>
  <div id="app">
     <button v-on:click="unload">Unload Document</button>
      <ejs-pdfviewer
        id="pdfViewer"
        ref="pdfviewer"
        :documentPath="documentPath"
        :serviceUrl="serviceUrl">
      </ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, 
         LinkAnnotation, BookmarkView, Annotation, ThumbnailView, 
         Print, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data () {
    return {
      serviceUrl:"https://services.syncfusion.com/vue/production/api/pdfviewer",
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation, 
                 ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    unload: function() {
      var viewer = document.getElementById('pdfViewer').ej2_instances[0];
      // Unload the PDF document.
      viewer.unload();
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

Find the Sample, [how to unload the PDF document programmatically](https://www.syncfusion.com/downloads/support/directtrac/general/ze/quickstart-620361849.zip)