---
layout: post
title: Open thumbnail in Vue Pdfviewer component | Syncfusion
description: Learn here all about Open thumbnail in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Open thumbnail 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Open thumbnail in Vue Pdfviewer component

The PDF Viewer library allows you to open the thumbnail of the PDF document using the **openThumbnailPanel()** method.

The following steps are used to open the thumbnail of the PDF Document.

**Step 1:** Follow the steps provided in the [link](https://ej2.syncfusion.com/vue/documentation/pdfviewer/getting-started) to create simple PDF Viewer sample in Vue.

**Step 2:** Add the following code snippet to open the thumbnail in the resizing event of splitter.

{% tabs %}
{% highlight html tabtitle="Standalone" %}
<template>
  <div id="app">
    <button v-on:click="onSplitterResize">Open ThumbnailPanel</button>
      <ejs-pdfviewer
        id="pdfViewer"
        ref="pdfviewer"
        :documentPath="documentPath" >
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
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation, 
                 ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    onSplitterResize: function () {
      var viewer = document.getElementById('pdfViewer').ej2_instances[0];
      viewer.updateViewerContainer();
      viewer.thumbnailViewModule.openThumbnailPane();
      debugger;
    },
  }
}
</script>
{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}
<template>
  <div id="app">
    <button v-on:click="onSplitterResize">Open ThumbnailPanel</button>
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
    onSplitterResize: function () {
      var viewer = document.getElementById('pdfViewer').ej2_instances[0];
      viewer.updateViewerContainer();
      viewer.thumbnailViewModule.openThumbnailPane();
      debugger;
    },
  }
}
</script>
{% endhighlight %}
{% endtabs %}

Find the Sample [how to open thumbnail](https://codesandbox.io/s/vue-examples-forked-1h1hg?file=/App.vue:1724-1944)