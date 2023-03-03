---
layout: post
title: Delete annotation in Vue Pdfviewer component | Syncfusion
description: Learn here all about Delete annotation in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Delete annotation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Delete annotation in Vue Pdfviewer component

The PDF Viewer library allows you to delete a specific annotation from a PDF document. Deleting a specific annotation can be done using the **deleteAnnotationById()** method. This method is used to delete a specific annotation using its id.

The following steps are used to delete a specific annotation from PDF Document.

**Step 1:** Follow the steps provided in the [link](https://ej2.syncfusion.com/vue/documentation/pdfviewer/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** Use the following code snippet to delete a specific annotation using `deleteAnnotationById()` method.

```
<template>
    <div>
        <button v-on:click="deleteAnnotationById">Delete Annotation By Id</button>
        <ejs-pdfviewer
            id="pdfViewer"
            :serviceUrl="serviceUrl"
            :documentPath="documentPath">
        </ejs-pdfviewer>
    </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
         ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields} from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);

export default {
  data () {
    return {
      serviceUrl:"https://ej2services.syncfusion.com/production/web-services/api/pdfviewer",
      documentPath:"PDF_Succinctly.pdf",
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
                ThumbnailView, Print, TextSelection, TextSearch,Annotation, FormDesigner, FormFields]},

  methods: {
  // Delete annotation by ID.
    deleteAnnotationById: function() {
      var viewer = document.getElementById('pdfViewer').ej2_instances[0];
      viewer.annotationModule.deleteAnnotationById(viewer.annotationCollection[0].annotationId);
    }
  }
}
</script>

```

Note :
If you use the **deleteAnnotation** API to delete an annotation, select an annotation first using the **selectAnnotation** API. You can't delete an annotation without selecting that annotation.

Find the sample, [how to delete a specific annotation using deleteAnnotationById](https://www.syncfusion.com/downloads/support/directtrac/general/ze/quickstart125741734.zip)

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/Annotations/Interaction%20with%20annotations)