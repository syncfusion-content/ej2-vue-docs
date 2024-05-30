---
layout: post
title: Authorization token in Vue Pdfviewer component | Syncfusion
description: Learn here all about Authorization token in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Authorization token 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Authorization token in Vue Pdfviewer component

The PDF Viewer library allows you to include the authorization token in the PDF viewer AJAX request using the properties of the ajaxRequest header available in `AjaxRequestSettings`, and it will be included in every AJAX request send from PDF Viewer.

The following steps are used to include the authorization token to the PDF viewer control.

**Step 1:** Follow the steps provided in the [link](https://ej2.syncfusion.com/vue/documentation/pdfviewer/getting-started/) to create simple PDF Viewer sample in React.

**Step 2:** Add the following code snippet to include the authorization token.

{% tabs %}
{% highlight html tabtitle="Composition API (~/src/App.vue)" %}

<template>
  <div>
    <ejs-pdfviewer id="pdfViewer" :serviceUrl="serviceUrl" :documentPath="documentPath"
      :ajaxRequestSettings="ajaxRequestSettings">
    </ejs-pdfviewer>
  </div>
</template>

<script setup>
import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { provide } from 'vue';

const serviceUrl = "https://services.syncfusion.com/vue/production/api/pdfviewer";
const documentPath = "PDF_Succinctly.pdf";

// Include Authorization Token.
const ajaxRequestSettings = {
  ajaxHeaders: [
    {
      headerName: 'Authorization',
      headerValue: 'Bearer 64565dfgfdsjweiuvbiuyhiueygf'
    }
  ],
  withCredentials: false
}

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]);

</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (~/src/App.vue)" %}

<template>
  <div>
    <ejs-pdfviewer id="pdfViewer" :serviceUrl="serviceUrl" :documentPath="documentPath"
      :ajaxRequestSettings="ajaxRequestSettings">
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';


export default {
  name: 'App',
  components: {
    'ejs-pdfviewer': PdfViewerComponent
  },
  data() {
    return {
      serviceUrl: "https://services.syncfusion.com/vue/production/api/pdfviewer",
      documentPath: "PDF_Succinctly.pdf",

      // Include Authorization Token.
      ajaxRequestSettings: {
        ajaxHeaders: [
          {
            headerName: 'Authorization',
            headerValue: 'Bearer 64565dfgfdsjweiuvbiuyhiueygf'
          }
        ],
        withCredentials: false
      },
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
    Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]
  }
}
</script>

{% endhighlight %}
{% endtabs %}

Find the Sample, [how to include authorization token](https://www.syncfusion.com/downloads/support/directtrac/general/ze/quickstart-1627983082.zip)