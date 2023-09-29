---
layout: post
title: Keyboard accessibility in Vue Pdfviewer component | Syncfusion
description: Learn here all about Keyboard accessibility in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Keyboard accessibility 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Keyboard accessibility in Vue Pdfviewer component

The Vue PDF Viewer supports the following keyboard interactions.

|**Action**|**Windows**|**Macintosh**|
|--|--|--|
|**Shortcuts for page navigation**|||
|Navigate to the first page|Home|Function + Left arrow|
|Navigate to the last page|End|Function + Right arrow|
|Navigate to the previous page|Up Arrow|Up Arrow|
|Navigate to the next page|Down Arrow|Down Arrow|
|**Shortcuts for Zooming**|||
|Perform zoom-in operation|CONTROL + =|COMMAND + =|
|Perform zoom-out operation|CONTROL + -|COMMAND + -|
|Retain the zoom level to 1|CONTROL + 0|COMMAND + 0|
|**Shortcut for Text Search**|||
|Open the search toolbar|CONTROL + F|COMMAND + F|
|**Shortcut for Text Selection**|||
|Copy the selected text or annotation or form field|CONTROL + C|COMMAND + C|
|Cut the selected text or annotation of the form field|CONTROL + X|COMMAND + X|
|Paste the selected text or annotation or form field|CONTROL + Y|COMMAND + Y|
|**Shortcuts for the general operation**|||
|Undo the action|CONTROL + Z|COMMAND + Z|
|Redo the action|CONTROL + Y|COMMAND + Y|
|Print the document|CONTROL + P|COMMAND + P|
|Delete the annotations and form fields|Delete|Delete|


{% tabs %}
{% highlight html tabtitle="Standalone" %}

<template>
  <div id="app">
      <ejs-pdfviewer
          id="pdfViewer"
          :documentPath="documentPath">
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
          :documentPath="documentPath">
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
      serviceUrl:"https://services.syncfusion.com/vue/production/api/pdfviewer",
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