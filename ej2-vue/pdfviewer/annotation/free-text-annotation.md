---
layout: post
title: Free text annotation in Vue Pdfviewer component | Syncfusion
description: Learn here all about Free text annotation in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Free text annotation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Free text annotation in Vue Pdfviewer component

The PDF Viewer control provides the options to add, edit, and delete the free text annotations.

## Adding a free text annotation to the PDF document

The Free text annotations can be added to the PDF document using the annotation toolbar.

* Click the **Edit Annotation** button in the PDF Viewer toolbar. A toolbar appears below it.
* Select the **Free Text Annotation** button in the annotation toolbar. It enables the Free Text annotation mode.
* You can add the text over the pages of the PDF document.

In the pan mode, if the free text annotation mode is entered, the PDF Viewer control will switch to text select mode.

![FreeTextAnnotation](../../pdfviewer/images/freetext_tool.png)

Refer to the following code sample to switch to the Free Text annotation mode.

```

<template>
    <div id="app">
        <button id="set">FreeText</button>
        <ejs-pdfviewer
            id="pdfViewer"
            ref="pdfviewer"
            :serviceUrl="serviceUrl"
            :documentPath="documentPath"
            :documentLoad="documentLoad">
        </ejs-pdfviewer>
    </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, 
         LinkAnnotation, BookmarkView, ThumbnailView, Print,
         TextSelection, TextSearch, Annotation } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      serviceUrl:"https://ej2services.syncfusion.com/production/web-services/api/pdfviewer",
      documentPath:"PDF_Succinctly.pdf"
    };
  },

  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
                 ThumbnailView, Print, TextSelection, TextSearch, Annotation ]},

  methods: {
    documentLoad() {
      viewer = this.$refs.pdfviewer.ej2Instances;
      document.getElementById('set').addEventListener('click', ()=> {
        viewer.annotation.setAnnotationMode('FreeText');
      });
    }
  }
}
</script>

```

## Editing the properties of free text annotation

The font family, font size, font styles, font color, text alignment, fill color, the border stroke color, border thickness, and opacity of the free text annotation can be edited using the Font Family tool, Font Size tool, Font Color tool, Text Align tool, Font Style tool  Edit Color tool, Edit Stroke Color tool, Edit Thickness tool, and Edit Opacity tool in the annotation toolbar.

### Editing font family

The font family of the annotation can be edited by selecting the desired font in the Font Family tool.

![FontFamily](../../pdfviewer/images/fontfamily.png)

### Editing font size

The font size of the annotation can be edited by selecting the desired size in the Font Size tool.

![FontSize](../../pdfviewer/images/fontsize.png)

### Editing font color

The font color of the annotation can be edited using the color palette provided in the Font Color tool.

![FontColor](../../pdfviewer/images/fontcolor.png)

### Editing the text alignment

The text in the annotation can be aligned by selecting the desired styles in the drop-down pop-up in the Text Align tool.

![FreeTextAnnotation](../../pdfviewer/images/textalign.png)

### Editing text styles

The style of the text in the annotation can be edited by selecting the desired styles in the drop-down pop-up in the Font Style tool.

![FontStyle](../../pdfviewer/images/fontstyle.png)

### Editing fill color

The fill color of the annotation can be edited using the color palette provided in the Edit Color tool.

![FillColor](../../pdfviewer/images/fillcolor.png)

### Editing stroke color

The stroke color of the annotation can be edited using the color palette provided in the Edit Stroke Color tool.

![StrokeColor](../../pdfviewer/images/fontstroke.png)

### Editing thickness

The border thickness of the annotation can be edited using the range slider provided in the Edit Thickness tool.

![FontThickness](../../pdfviewer/images/fontthickness.png)

### Editing opacity

The opacity of the annotation can be edited using the range slider provided in the Edit Opacity tool.

![FontOpacity](../../pdfviewer/images/fontopacity.png)

## Setting default properties during control initialization

The properties of the free text annotation can be set before creating the control using the FreeTextSettings.

After editing the default values, they will be changed to the selected values. Refer to the following code sample to set the default free text annotation settings.

```

<template>
    <div id="app">
        <ejs-pdfviewer
            id="pdfViewer"
            ref="pdfviewer"
            :serviceUrl="serviceUrl"
            :documentPath="documentPath"
            :freeTextSettings="freetextSettings">
        </ejs-pdfviewer>
    </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, 
         LinkAnnotation, BookmarkView,ThumbnailView, Print,
         TextSelection, TextSearch, Annotation, SignStampItem } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      serviceUrl:"https://ej2services.syncfusion.com/production/web-services/api/pdfviewer",
      documentPath:"PDF_Succinctly.pdf",
      freetextSettings: {fillColor: 'green', borderColor: 'blue', fontColor: 'yellow'}
    };
  },
  
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView,
                 ThumbnailView, Print, TextSelection, TextSearch, Annotation ]}

}
</script>

```