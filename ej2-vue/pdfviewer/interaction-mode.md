---
layout: post
title: Interaction mode in Vue Pdfviewer component | Syncfusion
description: Learn here all about Interaction mode in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Interaction mode 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Interaction mode in Vue Pdfviewer component

The PDF Viewer provides interaction mode for easy interaction with the loaded PDF document.  Selection mode and panning mode are the two interactions modes.

## Selection mode

In this mode, the text selection can be performed in the PDF document loaded in PDF Viewer. The panning and scrolling of the pages by touch cannot be performed in this mode. It allows users to select and copy text from the PDF files. This is helpful for copying and sharing text content. You can enable/disable the text selection using the following code snippet.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<template>
  <div id="app">
      <ejs-pdfviewer
          id="pdfViewer"
          :documentPath="documentPath"
          :enableTextSelection="true">
      </ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, 
         LinkAnnotation, BookmarkView, Annotation, ThumbnailView, 
         Print, TextSelection, TextSearch } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, 
                 Annotation, ThumbnailView, Print, TextSelection, TextSearch ]},

}
</script>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

<template>
  <div id="app">
      <ejs-pdfviewer
          id="pdfViewer"
          :serviceUrl="serviceUrl"
          :documentPath="documentPath"
          :enableTextSelection="true">
      </ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, 
         LinkAnnotation, BookmarkView, Annotation, ThumbnailView, 
         Print, TextSelection, TextSearch } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data () {
    return {
      serviceUrl:"https://ej2services.syncfusion.com/production/web-services/api/pdfviewer",
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, 
                 Annotation, ThumbnailView, Print, TextSelection, TextSearch ]},

}
</script>

{% endhighlight %}
{% endtabs %}

![Alt text](./images/selection.png)

## Panning Mode

In this mode, the panning and scrolling of the pages by touch can be performed in the PDF document loaded in the PDF Viewer, but the text selection cannot be performed.

![Alt text](./images/pan.png)

You can switch the interaction mode of PDF Viewer by using the following code snippet.,

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<template>
  <div id="app">
      <ejs-pdfviewer
          id="pdfViewer"
          :documentPath="documentPath"
          :enableTextSelection="false"
          :interactionMode="interactionMode">
      </ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, 
         LinkAnnotation, BookmarkView, Annotation, ThumbnailView, 
         Print, TextSelection, TextSearch } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      interactionMode:"InteractionMode.Pan"
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, 
                 Annotation, ThumbnailView, Print, TextSelection, TextSearch ]},

}
</script>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

<template>
  <div id="app">
      <ejs-pdfviewer
          id="pdfViewer"
          :serviceUrl="serviceUrl"
          :documentPath="documentPath"
          :enableTextSelection="false"
          :interactionMode="interactionMode">
      </ejs-pdfviewer>
  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, 
         LinkAnnotation, BookmarkView, Annotation, ThumbnailView, 
         Print, TextSelection, TextSearch } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data () {
    return {
      serviceUrl:"https://ej2services.syncfusion.com/production/web-services/api/pdfviewer",
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      interactionMode:"InteractionMode.Pan"
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, 
                 Annotation, ThumbnailView, Print, TextSelection, TextSearch ]},

}
</script>

{% endhighlight %}
{% endtabs %}

## See also

* [Toolbar items](./toolbar)
* [Feature Modules](./feature-module)