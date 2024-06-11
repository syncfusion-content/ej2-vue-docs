---
layout: post
title: Import export annotation object in Vue Pdfviewer component | Syncfusion
description: Learn here all about Import export annotation object in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Import export annotation object 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Import export annotation object in Vue Pdfviewer component

The PDF Viewer library allows you to import annotations from objects or streams instead of loading it as a file. To import such annotation objects, the PDF Viewer control must export the PDF annotations as objects using the [**ExportAnnotationsAsObject()**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/#exportannotationsasobject) method. Only the annotations objects that are exported from the PDF Viewer can be imported.

The following steps are used to import and export annotation as object.

**Step 1:** Follow the steps provided in the [link](https://ej2.syncfusion.com/vue/documentation/pdfviewer/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Use the following code snippet to perform import and export annotation.

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <button v-on:click="exportAnnotation">Export Annotation</button>
    <button v-on:click="importAnnotation">Import Annotation</button>
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
const exportObject = null;

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]);

//Export annotation as object.
const exportAnnotation = function () {
  const viewer = pdfviewer.value.ej2Instances;
  viewer.exportAnnotationsAsObject().then(function (value) {
    exportObject = value;
  });
}
//Import annotation that are exported as object.
const importAnnotation = function () {
  const viewer = pdfviewer.value.ej2Instances;
  viewer.importAnnotation(JSON.parse(exportObject));
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}

<template>
  <div id="app">
    <button v-on:click="exportAnnotation">Export Annotation</button>
    <button v-on:click="importAnnotation">Import Annotation</button>
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
      exportObject: null
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]
  },
  methods: {
    //Export annotation as object.
    exportAnnotation: function () {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.exportAnnotationsAsObject().then(function (value) {
        this.exportObject = value;
      });
    },

    //Import annotation that are exported as object.
    importAnnotation: function () {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.importAnnotation(JSON.parse(this.exportObject));
    }
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Composition API (Server-Backed)" %}

<template>
  <div id="app">
    <button v-on:click="exportAnnotation">Export Annotation</button>
    <button v-on:click="importAnnotation">Import Annotation</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :serviceUrl="serviceUrl" :documentPath="documentPath">
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
const exportObject = null;

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner])

//Export annotation as object.
const exportAnnotation = function () {
  const viewer = pdfviewer.value.ej2Instances;
  viewer.exportAnnotationsAsObject().then(function (value) {
    exportObject = value;
  });
}
//Import annotation that are exported as object.
const importAnnotation = function () {
  const viewer = pdfviewer.value.ej2Instances;
  viewer.importAnnotation(JSON.parse(exportObject));
}

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Server-Backed)" %}

<template>
  <div id="app">
    <button v-on:click="exportAnnotation">Export Annotation</button>
    <button v-on:click="importAnnotation">Import Annotation</button>
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :serviceUrl="serviceUrl" :documentPath="documentPath">
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
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      exportObject: null
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation,
      ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner]
  },
  methods: {
    //Export annotation as object.
    exportAnnotation: function () {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.exportAnnotationsAsObject().then(function (value) {
        this.exportObject = value;
      });
    },
    //Import annotation that are exported as object.
    importAnnotation: function () {
      const viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.importAnnotation(JSON.parse(this.exportObject));
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

Find the Sample, [how to import and export annotation as object](https://www.syncfusion.com/downloads/support/directtrac/general/ze/quickstart1493378357.zip)