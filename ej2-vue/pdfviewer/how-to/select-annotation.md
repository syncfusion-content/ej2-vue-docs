---
layout: post
title: Select annotation in Vue Pdfviewer component | Syncfusion
description: Learn here all about Select annotation in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Select annotation 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Select annotation in Vue Pdfviewer component

The PDF Viewer library allows you to select an annotation from a PDF document. Selecting an annotation can be done using the `selectAnnotation()` method. This method is used to select an annotation using its id.

The following steps are used to select an annotation from a PDF Document.

**Step 1:** Follow the steps provided in this [link](https://ej2.syncfusion.com/vue/documentation/pdfviewer/getting-started/) to create a simple PDF Viewer sample.

**Step 2:** The following code sample represents how to select an annotation in a button click.

```

<button id="selectAnnotation">SelectAnnotation</button>

<script>
    //Event triggers when you click the SelectAnnotation button.
    document.getElementById('selectAnnotation').addEventListener('click', () => {
        //API to select the annotation
        viewer.annotationModule.selectAnnotation(viewer.annotationCollection[0].annotationId);
    });
</script>

```

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/Annotations/Interaction%20with%20annotations)