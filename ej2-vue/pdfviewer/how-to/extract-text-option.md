---
layout: post
title: Extract text Option in Vue PDF Viewer component | Syncfusion
description: Learn here all about Extract text Option in Syncfusion Angular PDF Viewer component of Syncfusion Essential JS 2 and more.
control: PDF Viewer
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Extract Text Option in Vue Pdfviewer component

The `extractTextOption` property in the Syncfusion<sup style="font-size:70%">&reg;</sup> PdfViewer control allows you to optimize memory usage by controlling the level of text extraction. This setting influences the data returned in the `extractTextCompleted` event. You can select one of the following options to determine the kind of text extraction and layout information to retrieve.

### Available Options:

**None:** No text information is extracted or returned. This is useful when you want to optimize memory usage and don't need any text data.

**TextOnly:** Extracts only the plain text from the document. This option excludes any layout or positional information.

**BoundsOnly:** Extracts layout information, such as bounds or coordinates, without including the plain text data.

**TextAndBounds:** Extracts both the plain text and the layout (bounds) information, which is the default behavior.

The following example demonstrates how to configure the `extractTextOption` property to control the level of text extraction:


```html
<template>
  <div id="app">
    <ejs-pdfviewer
      id="pdfViewer"
      ref="pdfviewer"
      :documentPath="documentPath"
      :extractTextOption="extractTextOption"
      :resourceUrl="resourceUrl"
      style="height: 640px;"
    >
    </ejs-pdfviewer>
  </div>
</template>

<script>
import {
  PdfViewerComponent,
  Toolbar,
  Magnification,
  Navigation,
  Annotation,
  TextSelection,
  TextSearch,
  FormFields,
  FormDesigner,
  PageOrganizer,
} from '@syncfusion/ej2-vue-pdfviewer';

export default {
  name: 'App',
  components: {
    'ejs-pdfviewer': PdfViewerComponent,
  },
  data() {
    return {
        documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
        resourceUrl: 'https://cdn.syncfusion.com/ej2/29.1.33/dist/ej2-pdfviewer-lib',
        extractTextOption: 'None', // Options: 'None', 'TextOnly', 'BoundsOnly', 'TextAndBounds'
    };
  },
  provide: {
    PdfViewer: [
      Toolbar,
      Magnification,
      Navigation,
      Annotation,
      TextSelection,
      TextSearch,
      FormFields,
      FormDesigner,
      PageOrganizer,
    ],
  },
};
</script>
```

### Description of Each Option
**extractTextOption.TextAndBounds (default):** This option returns both plain text and its positional data (bounds). Use this option when you need to access both the content of the PDF and its layout for further processing or analysis.

**extractTextOption.TextOnly:** This option returns only the plain text from the PDF. No positional or layout data is included. Note that when using this option, text search functionality will be disabled. In such cases, it is recommended to use findTextAsync for text searching.

**extractTextOption.BoundsOnly:** This option returns only the layout information (bounds) of the text, excluding the actual content. It is useful when the focus is on the position of text elements rather than the text itself.

**extractTextOption.None:** This option does not extract or return any text or layout information. It is used to optimize memory usage when no text extraction is necessary. This setting is only relevant for the `extractTextCompleted` event and cannot be used with the `ExtractText` method.

N> Text Search: When using the `extractTextOption.TextOnly` and `extractTextOption.None` option, the findText method will not work. Instead, you should use the findTextAsync method to perform text searches asynchronously.

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/How%20to)