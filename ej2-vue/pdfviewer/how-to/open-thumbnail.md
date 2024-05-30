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
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <button v-on:click="onSplitterResize">Open ThumbnailPanel</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner])

const onSplitterResize = function () {
  const viewer = pdfviewer.value.ej2Instances;
  viewer.updateViewerContainer();
  viewer.thumbnailViewModule.openThumbnailPane();
  debugger;
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}

<template>
  <div id="app">
    <button v-on:click="onSplitterResize">Open ThumbnailPanel</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]
  },
  methods: {
    onSplitterResize: function () {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.updateViewerContainer();
      viewer.thumbnailViewModule.openThumbnailPane();
      debugger;
    },
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Composition API (Server-Backed)" %}

<template>
  <div id="app">
    <button v-on:click="onSplitterResize">Open ThumbnailPanel</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :serviceUrl="serviceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide, ref } from 'vue';

const pdfviewer = ref(null);
const serviceUrl = "https://services.syncfusion.com/vue/production/api/pdfviewer";
const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner])

const onSplitterResize = function () {
  const viewer = pdfviewer.value.ej2Instances;
  viewer.updateViewerContainer();
  viewer.thumbnailViewModule.openThumbnailPane();
  debugger;
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Server-Backed)" %}

<template>
  <div id="app">
    <button v-on:click="onSplitterResize">Open ThumbnailPanel</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :serviceUrl="serviceUrl">
    </ejs-pdfviewer>
  </div>
</template>

<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation,
  LinkAnnotation, BookmarkView, Annotation, ThumbnailView,
  Print, TextSelection, TextSearch, FormFields, FormDesigner
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    return {
      serviceUrl: "https://services.syncfusion.com/vue/production/api/pdfviewer",
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]
  },
  methods: {
    onSplitterResize: function () {
      const viewer = this.$refs.pdfviewer.ej2Instances;
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