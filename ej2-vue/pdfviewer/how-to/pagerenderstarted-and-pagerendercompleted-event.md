---
layout: post
title: PageRenderStarted and PageRenderCompleted event in Vue PDF Viewer component | Syncfusion
description: Learn here all about Extract text in Syncfusion Vue PDF Viewer component of Syncfusion Essential JS 2 and more.
control: PDF Viewer
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# PageRenderStarted and PageRenderCompleted event

In Syncfusion PDF Viewer, `pageRenderStarted` and `pageRenderCompleted` actions are events that occur during the rendering process of PDF documents. 

**pageRenderStarted** 

The `pageRenderStarted` event is triggered when the rendering of a page in the PDF document begins. This event provides developers with an opportunity to perform any necessary initialization or setup before the rendering of the page content commences. It can be utilized to prepare resources, set up rendering parameters, or execute any other actions required before the page rendering process starts.

**pageRenderCompleted**

The `pageRenderCompleted` event is triggered when the rendering of a page in the PDF document is completed. This event allows developers to perform cleanup tasks or finalize rendering-related processes after the rendering of the page content finishes. It can be used to release resources, finalize rendering settings, or handle any post-rendering tasks necessary for the application.

{% tabs %}
{% highlight html tabtitle="Standalone" %}
<template>
  <div id="app">
      <ejs-pdfviewer
        id="pdfViewer"
        ref="pdfviewer"
        :documentPath="documentPath"
        :resourceUrl="resourceUrl"
        :pageRenderStarted="pageRenderStarted"
        :pageRenderCompleted="pageRenderCompleted">
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
      resourceUrl:"https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib",
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation, 
                 ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    pageRenderStarted: function (args) {
      // This method is called when the page rendering starts
      console.log('Rendering of page ' + args.pageNumber + ' started.');
    },
    pageRenderCompleted: function (args) {
      // This method is called when the page rendering completes
      console.log('Rendering of page ' + args.pageNumber + ' completed.');
    }
  }
}
</script>
{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}
<template>
  <div id="app">
      <ejs-pdfviewer
        id="pdfViewer"
        ref="pdfviewer"
        :documentPath="documentPath"
        :serviceUrl="serviceUrl"
        :pageRenderStarted="pageRenderStarted"
        :pageRenderCompleted="pageRenderCompleted">
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
    pageRenderStarted: function (args) {
      // This method is called when the page rendering starts
      console.log('Rendering of page ' + args.pageNumber + ' started.');
    },
    pageRenderCompleted: function (args) {
      // This method is called when the page rendering completes
      console.log('Rendering of page ' + args.pageNumber + ' completed.');
    }
  }
}
</script>
{% endhighlight %}
{% endtabs %}

The provided code demonstrates how to subscribe to the `pageRenderStarted` and `pageRenderCompleted` events in the Syncfusion PDF Viewer component. 

[View sample in GitHub]()