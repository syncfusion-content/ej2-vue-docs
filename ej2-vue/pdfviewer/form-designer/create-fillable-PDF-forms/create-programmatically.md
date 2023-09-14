---
layout: post
title: Create programmatically in Vue Pdfviewer component | Syncfusion
description: Learn here all about Create programmatically in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: Create programmatically 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Create form fields programmatically in Vue Pdfviewer component

The PDF Viewer control provides the option to add, edit and delete the Form Fields. The Form Fields type supported by the PDF Viewer Control are:

    * Textbox
    * Password
    * CheckBox
    * RadioButton
    * ListBox
    * DropDown
    * SignatureField
    * InitialField

## Add a form field to PDF document programmatically

Using addFormField method, the form fields can be added to the PDF document programmatically. We need to pass two parameters in this method. They are Form Field Type and Properties of Form Field Type. To add form field programmatically, Use the following code.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pdfviewer/addformfield-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% tabs %}
{% highlight html tabtitle="Standalone" %}
{% previewsample "page.domainurl/code-snippet/pdfviewer/addformfield-cs1-standalone" %}
{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}
{% previewsample "page.domainurl/code-snippet/pdfviewer/addformfield-cs1" %}
{% endhighlight %}
{% endtabs %}

## Edit or update form field programmatically

Using updateFormField method, Form Field can be updated programmatically. We should get the Form Field object/Id from FormFieldCollections property that you would like to edit and pass it as a parameter to updateFormField method. The second parameter should be the properties that you would like to update for Form Field programmatically. We have updated the value and background Color properties of Textbox Form Field.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pdfviewer/updateformfield-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/pdfviewer/updateformfield-cs1" %}

{% tabs %}
{% highlight html tabtitle="Standalone" %}
{% previewsample "page.domainurl/code-snippet/pdfviewer/updateformfield-cs1-standalone" %}
{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}
{% previewsample "page.domainurl/code-snippet/pdfviewer/updateformfield-cs1" %}
{% endhighlight %}
{% endtabs %}

## Delete form field programmatically

Using deleteFormField method, the form field can be deleted programmatically. We should retrieve the Form Field object/Id from FormFieldCollections property that you would like to delete and pass it as a parameter to deleteFormField method. To delete a Form Field programmatically, use the following code.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pdfviewer/deleteformfield-cs1/app.vue %}
{% endhighlight %}
{% endtabs %}
        


{% tabs %}
{% highlight html tabtitle="Standalone" %}
{% previewsample "page.domainurl/code-snippet/pdfviewer/deleteformfield-cs1-standalone" %}
{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}
{% previewsample "page.domainurl/code-snippet/pdfviewer/deleteformfield-cs1" %}
{% endhighlight %}
{% endtabs %}

## Saving the form fields

When the download icon is selected on the toolbar, the Form Fields will be saved in the PDF document and this action will not affect the original document. Refer the below GIF for further reference.

![Alt text](../../../pdfviewer/images/saveformfield.gif)

You can invoke download action using following code snippet.

{% tabs %}
{% highlight html tabtitle="Standalone" %}
<template>
    <div id="app">
      <button v-on:click="downloadClicked">Download</button>
        <ejs-pdfviewer
            id="pdfViewer"
            ref="pdfviewer"
            :documentPath="documentPath"
            :documentLoad="documentLoad">
        </ejs-pdfviewer>
    </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, 
         BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, 
         Annotation, FormDesigner, FormFields } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, 
                 Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields ]},

  methods: {
    downloadClicked: function (args) {
       viewer.download();
    },
    documentLoad: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
    },
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

<template>
    <div id="app">
      <button v-on:click="downloadClicked">Download</button>
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
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, 
         BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, 
         Annotation, FormDesigner, FormFields } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      serviceUrl:"https://ej2services.syncfusion.com/production/web-services/api/pdfviewer",
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, 
                 Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields ]},

  methods: {
    downloadClicked: function (args) {
       viewer.download();
    },
    documentLoad: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
    },
  }
}
</script>

{% endhighlight %}
{% endtabs %}

## Printing the form fields

When the print icon is selected on the toolbar, the PDF document will be printed along with the Form Fields added to the pages and this action will not affect the original document. Refer the below GIF for further reference.

![Alt text](../../../pdfviewer/images/printformfield.gif)

You can invoke print action using the following code snippet.,

{% tabs %}
{% highlight html tabtitle="Standalone" %}
<template>
    <div id="app">
      <button v-on:click="printClicked">Print</button>
        <ejs-pdfviewer
            id="pdfViewer"
            ref="pdfviewer"
            :documentPath="documentPath"
            :documentLoad="documentLoad">
        </ejs-pdfviewer>
    </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, 
         BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, 
         Annotation, FormDesigner, FormFields } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, 
                 Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields ]},

  methods: {
    printClicked: function (args) {
      viewer.print.print();
    },
    documentLoad: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
    },
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

<template>
    <div id="app">
      <button v-on:click="printClicked">Print</button>
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
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, 
         BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, 
         Annotation, FormDesigner, FormFields } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      serviceUrl:"https://ej2services.syncfusion.com/production/web-services/api/pdfviewer",
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, 
                 Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields ]},

  methods: {
    printClicked: function (args) {
      viewer.print.print();
    },
    documentLoad: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
    },
  }
}
</script>
{% endhighlight %}
{% endtabs %}

## Open the existing PDF document

We can open the already saved PDF document contains Form Fields in it by clicking the open icon in the toolbar. Refer the below GIF for further reference.

![Alt text](../../../pdfviewer/images/openexistingpdf.gif)

## Validate form fields

The form fields in the PDF Document will be validated when the `enableFormFieldsValidation` is set to true and hook the validateFormFields. The validateFormFields will be triggered when the PDF document is downloaded or printed with the non-filled form fields. The non-filled fields will be obtained in the `nonFillableFields` property of the event arguments of validateFormFields.

Add the following code snippet to validate the form fields,

{% tabs %}
{% highlight html tabtitle="Standalone" %}
<template>
    <div id="app">
        <ejs-pdfviewer
            id="pdfViewer"
            ref="pdfviewer"
            :documentPath="documentPath"
            :documentLoad="documentLoad"
            :enableFormFieldsValidation="true"
            :validateFormFields="validateFormFields">
        </ejs-pdfviewer>
    </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, 
         BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, 
         Annotation, FormDesigner, FormFields } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, 
                 Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields ]},

  methods: {
    documentLoad: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.formDesignerModule.addFormField("Textbox", { name: "Textbox", bounds: { X: 70, Y: 229, Width: 150, Height: 24 } });
    },
    validateFormFields: function(args){
      var nonfilledFormFields = args.nonFillableFields
    }
  }
}
</script>
<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-vue-pdfviewer/styles/material.css';
  #pdfViewer {
    height: 640px;
  }
</style>
{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}
<template>
    <div id="app">
        <ejs-pdfviewer
            id="pdfViewer"
            ref="pdfviewer"
            :serviceUrl="serviceUrl"
            :documentPath="documentPath"
            :documentLoad="documentLoad"
            :enableFormFieldsValidation="true"
            :validateFormFields="validateFormFields">
        </ejs-pdfviewer>
    </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, 
         BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, 
         Annotation, FormDesigner, FormFields } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      serviceUrl:"https://ej2services.syncfusion.com/production/web-services/api/pdfviewer",
      documentPath:"https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, 
                 Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields ]},

  methods: {
    documentLoad: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.formDesignerModule.addFormField("Textbox", { name: "Textbox", bounds: { X: 70, Y: 229, Width: 150, Height: 24 } });
    },
    validateFormFields: function(args){
      var nonfilledFormFields = args.nonFillableFields
    }
  }
}
</script>
<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
  @import '../node_modules/@syncfusion/ej2-vue-pdfviewer/styles/material.css';
  #pdfViewer {
    height: 640px;
  }
</style>
{% endhighlight %}
{% endtabs %}

## Export and import form fields

The PDF Viewer control provides the support to export and import the form field data in the following formats using the methods `importFormFields`, `exportFormFields`, `exportFormFieldsAsObject`.

* FDF
* XFDF
* JSON
* XML

### Export and import as FDF

Using the `exportFormFields` method, the form field data can be exported in the specified data format. This method accepts two parameters:

* The first one must be the destination path for the exported data. If path is not specified, it will ask for the location while exporting.
* The second parameter should be the format type of the form data.

The following code explains how to export and import the form field data as FDF.

```ts

<template>
    <div id="app">
        <button v-on:click="exportFdf">Export FDF</button>
        <button v-on:click="imporFdf">Import FDF</button>
        <ejs-pdfviewer
            id="pdfViewer"
            ref="pdfviewer"
            :serviceUrl="serviceUrl"
            :documentPath="documentPath">
        </ejs-pdfviewer>
    </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, 
         BookmarkView,ThumbnailView, Print,TextSelection, TextSearch, 
         Annotation, FormDesigner, FormFields, FormFieldDataFormat } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data () {
    return {
      serviceUrl:"https://ej2services.syncfusion.com/production/web-services/api/pdfviewer",
      documentPath:"https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
    };
  },

  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
                 ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    // Event triggers on the Export FDF button click.
    exportFdf: function () {
      // Data must be the desired path for the exported document.
      var viewer = document.getElementById('pdfViewer').ej2_instances[0];
      viewer.exportFormFields('Data', FormFieldDataFormat.Fdf);
    },

    // Event triggers on the Import FDF button click.
    importFdf: function () {
      var viewer = document.getElementById('pdfViewer').ej2_instances[0];
      // The file for importing the form fields should be placed in the desired location and the path should be provided correctly
      viewer.importFormFields('File',FormFieldDataFormat.Fdf);
    },
  }
}

</script>

```

### Export and import as XFDF

The following code explains how to export and import the form field data as XFDF.

```ts
<template>
    <div id="app">
        <button v-on:click="exportXfdf">Export XFDF</button>
        <button v-on:click="importXfdf">Import XFDF</button>
        <ejs-pdfviewer
            id="pdfViewer"
            ref="pdfviewer"
            :serviceUrl="serviceUrl"
            :documentPath="documentPath">
        </ejs-pdfviewer>
    </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, 
         BookmarkView,ThumbnailView, Print,TextSelection, TextSearch, 
         Annotation, FormDesigner, FormFields, FormFieldDataFormat } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data () {
    return {
      serviceUrl:"https://ej2services.syncfusion.com/production/web-services/api/pdfviewer",
      documentPath:"https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
    };
  },

  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
                 ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    // Event triggers on the Export XFDF button click.
    exportXfdf: function () {
      // Data must be the desired path for the exported document.
      var viewer = document.getElementById('pdfViewer').ej2_instances[0];
      viewer.exportFormFields('Data', FormFieldDataFormat.Xfdf);
    },

    // Event triggers on the Import XFDF button click.
    importXfdf: function () {
      var viewer = document.getElementById('pdfViewer').ej2_instances[0];
      // The file for importing the form fields should be placed in the desired location and the path should be provided correctly
      viewer.importFormFields('File',FormFieldDataFormat.Xfdf);
    },
  }
}
</script>
```

### Export and import as JSON

The following code explains how to export and import the form field data as JSON.

```ts
<template>
    <div id="app">
        <button v-on:click="exportJson">Export JSON</button>
        <button v-on:click="importJson">Import JSON</button>
        <ejs-pdfviewer
            id="pdfViewer"
            ref="pdfviewer"
            :serviceUrl="serviceUrl"
            :documentPath="documentPath">
        </ejs-pdfviewer>
    </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, 
         BookmarkView,ThumbnailView, Print,TextSelection, TextSearch, 
         Annotation, FormDesigner, FormFields, FormFieldDataFormat } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data () {
    return {
      serviceUrl:"https://ej2services.syncfusion.com/production/web-services/api/pdfviewer",
      documentPath:"https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
    };
  },

  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
                 ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    // Event triggers on the Export JSON button click.
    exportJson: function () {
      // Data must be the desired path for the exported document.
      var viewer = document.getElementById('pdfViewer').ej2_instances[0];
      viewer.exportFormFields('Data', FormFieldDataFormat.Json);
    },

    // Event triggers on the Import JSON button click.
    importJson: function () {
      var viewer = document.getElementById('pdfViewer').ej2_instances[0];
      // The file for importing the form fields should be placed in the desired location and the path should be provided correctly
      viewer.importFormFields('File',FormFieldDataFormat.Json);
    },
  }
}

```
### Export and import as Object

The PDF Viewer control supports exporting the form field data as an object, and the exported data will be imported into the current PDF document from the object.

The following code shows how to export the form field data as an object and import the form field data from that object into the current PDF document via a button click.

 ```ts
<template>
    <div id="app">
        <button v-on:click="exportDataAsObject">Export Object</button>
        <button v-on:click="importData">Import Data</button>
        <ejs-pdfviewer
            id="pdfViewer"
            ref="pdfviewer"
            :serviceUrl="serviceUrl"
            :documentPath="documentPath">
        </ejs-pdfviewer>
    </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, 
         BookmarkView,ThumbnailView, Print,TextSelection, TextSearch, 
         Annotation, FormDesigner, FormFields, FormFieldDataFormat } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var exportedData;

export default {
  name: 'app',
  data () {
    return {
      serviceUrl:"https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
      documentPath:"https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
    };
  },

  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
                 ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    // Event triggers on the Export Object button click.
    exportDataAsObject: function (args) {
      // Export the form fields data to an FDF object.
      exportedData = viewer.exportFormFieldsAsObject(FormFieldDataFormat.Fdf);
      //// Export the form fields data to an XFDF object.
      //exportedData = viewer.exportFormFieldsAsObject(FormFieldDataFormat.Xfdf);
      //// Export the form fields data to an JSON object.
      //exportedData = viewer.exportFormFieldsAsObject(FormFieldDataFormat.Json);
    },

    // Event triggers on the Import Data button click.
    importData: function (args) {
      // Import the form fields data from the FDF object into the current PDF document.
      viewer.importFormFields(exportedData, FormFieldDataFormat.Fdf);
      //// Import the form fields data from the XFDF object into the current PDF document.
      //viewer.importFormFields(exportedData, FormFieldDataFormat.Xfdf);
      //// Import the form fields data from the JSON object into the current PDF document.
      //viewer.importFormFields(exportedData, FormFieldDataFormat.Json);
    },

  }
}
```

### Export and import as XML

The following code explains how to export and import the form field data as XML.

```ts
<template>
    <div id="app">
      <button v-on:click="exportXml">Export XML</button>
      <button v-on:click="importXml">Import XML</button>
      <ejs-pdfviewer
        id="pdfViewer"
        ref="pdfviewer"
        :serviceUrl="serviceUrl"
        :documentPath="documentPath">
      </ejs-pdfviewer>
    </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, LinkAnnotation, 
         BookmarkView,ThumbnailView, Print,TextSelection, TextSearch, 
         Annotation, FormDesigner, FormFields, FormFieldDataFormat } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);

export default {
  name: 'app',
  data () {
    return {
      serviceUrl:"https://ej2services.syncfusion.com/production/web-services/api/pdfviewer",
      documentPath:"https://cdn.syncfusion.com/content/pdf/form-designer.pdf"
    };
  },

  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,
                 ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    // Event triggers on the Export XML button click.
    exportXml: function () {
      // Data must be the desired path for the exported document.
      var viewer = document.getElementById('pdfViewer').ej2_instances[0];
      viewer.exportFormFields('Data', FormFieldDataFormat.Xml);
    },

    // Event triggers on the Import XML button click.
    importXml: function () {
      var viewer = document.getElementById('pdfViewer').ej2_instances[0];
      // The file for importing the form fields should be placed in the desired location and the path should be provided correctly
      viewer.importFormFields('File',FormFieldDataFormat.Xml);
    },
  }
}
```

## Form field properties

Form field properties in Syncfusion PDF Viewer allow you to customize and interact with form fields embedded within PDF documents. This documentation provides an overview of the form field properties supported by the Syncfusion PDF Viewer and explains how to use them effectively.

    * Textbox
    * Password
    * CheckBox
    * RadioButton
    * ListBox
    * DropDown
    * SignatureField
    * InitialField

### Signature and initial fields settings

Using the `updateFormField` method, the form fields can be updated programmatically.

The following code example explains how to update the signature field properties on a button click.

{% tabs %}
{% highlight html tabtitle="Standalone" %}
<template>
    <div id="app">
      <button v-on:click="updateProperties">Update Properties</button>
        <ejs-pdfviewer
            id="pdfViewer"
            ref="pdfviewer"
            :documentPath="documentPath">
        </ejs-pdfviewer>
    </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, 
         LinkAnnotation, BookmarkView, Annotation, ThumbnailView, 
         Print, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },

  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation, 
                 ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    // Event triggers on the Update Properties button click.
    updateProperties: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
      var formField = viewer.retrieveFormFields();
      viewer.formDesignerModule.updateFormField(formField[0], {
        name: 'Signature',
        isReadOnly: true,
        visibility: 'visible',
        isRequired: false,
        isPrint: true,
        tooltip: 'Signature',
        thickness: 4
     });
    },
  }
}
</script>
{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}
<template>
    <div id="app">
      <button v-on:click="updateProperties">Update Properties</button>
        <ejs-pdfviewer
            id="pdfViewer"
            ref="pdfviewer"
            :serviceUrl="serviceUrl"
            :documentPath="documentPath">
        </ejs-pdfviewer>
    </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, 
         LinkAnnotation, BookmarkView, Annotation, ThumbnailView, 
         Print, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      serviceUrl:"https://ej2services.syncfusion.com/production/web-services/api/pdfviewer",
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },

  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation, 
                 ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    // Event triggers on the Update Properties button click.
    updateProperties: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
      var formField = viewer.retrieveFormFields();
      viewer.formDesignerModule.updateFormField(formField[0], {
        name: 'Signature',
        isReadOnly: true,
        visibility: 'visible',
        isRequired: false,
        isPrint: true,
        tooltip: 'Signature',
        thickness: 4
     });
    },
  }
}
</script>
{% endhighlight %}
{% endtabs %}

The following code example explains how to update the properties of the signature field added to the document from the form designer toolbar.

```ts
  // Properties to customize the signature field settings
  viewer.signatureFieldSettings = {
    // Set the name of the form field element.
    name: 'Signatute',
    // Specify whether the signature field is in read-only or read-write mode.
    isReadOnly: false,
    // Set the visibility of the form field.
    visibility: 'visible',
    // Specify whether the field is mandatory or not.
    isRequired: false,
    // Specify whether to print the signature field.
    isPrint: true,
    // Set the text to be displayed as a tooltip.
    tooltip: 'Signatute',
    // Set the thickness of the signature field. To hide the borders, set the value to 0 (zero).
    thickness: 4,
    // Specify the properties of the signature Dialog Settings in the signature field.
    signatureDialogSettings: {
      isplayMode: DisplayMode.Draw | DisplayMode.Upload | DisplayMode.Text,
      hideSaveSignature: false,
    },
    // Specify the properties of the signature indicator in the signature field.
    signatureIndicatorSettings: {
      opacity: 1,
      backgroundColor: '#237ba2',
      height: 50,
      fontSize: 15,
      text: 'Signature Field',
      color: 'white'
    },
  };

```

![Signature Field Settings](../../images/SignatureField.png)

The following code example explains how to update the properties of the initial field added to the document from the form designer toolbar.

```ts
  // Properties to customize the initial field settings
  viewer.initialFieldSettings  = {
    // Set the name of the form field element.
    name: 'Initial',
    // Specify whether the initial field is in read-only or read-write mode.
    isReadOnly: false,
    // Set the visibility of the form field.
    visibility: 'visible',
    // Specify whether the field is mandatory or not.
    isRequired: false,
    // Specify whether to print the initial field.
    isPrint: true,
    // Set the text to be displayed as tooltip.
    tooltip: 'Initial',
    // Set the thickness of the initial field. To hide the borders, set the value to 0 (zero).
    thickness: 4,
    // Specify the properties of the initial indicator in the initial field.
    initialIndicatorSettings: {
      opacity: 1,
      backgroundColor: '#237ba2',
      height: 50,
      fontSize: 15,
      text: 'Initial Field',
      color: 'white'
    },
    // Specify the properties of the initial Dialog Settings in the intial field.
    initialDialogSettings: {
      displayMode: DisplayMode.Draw | DisplayMode.Upload | DisplayMode.Text,
      hideSaveSignature: false
    }
  };

```

![Initial Field Settings](../../images/InitialField.png)

### Textbox field settings

Using the `updateFormField` method, the form fields can be updated programmatically.

The following code example explains how to update the Textbox field properties on a button click.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<template>
    <div id="app">
      <button v-on:click="updateProperties">updateProperties</button>
        <ejs-pdfviewer
          id="pdfViewer"
          ref="pdfviewer"
          :documentPath="documentPath">
        </ejs-pdfviewer>
    </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Annotation, 
         Navigation, LinkAnnotation, BookmarkView, ThumbnailView, 
         Print, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },

  provide: {
     PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,  
                  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    // Event triggers on the Update Properties button click.
    updateProperties: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
      var formField = viewer.retrieveFormFields();
      viewer.formDesignerModule.updateFormField(formField[0], {
        name: 'Textbox',
        isReadOnly: true,
        visibility: 'visible',
        isRequired: false,
        isPrint: true,
        tooltip: 'Textbox',
        thickness: 4,
        value:'Textbox',
        fontFamily: 'Courier',
        fontSize: 10,
        fontStyle: 'None',
        color: 'black',
        borderColor: 'black',
        backgroundColor: '#daeaf7ff',
        alignment: 'Left',
        maxLength: 0,
        isMultiline: false,
        bounds: { X: 146, Y: 229, Width: 150, Height: 24 }
     });
    }
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

<template>
    <div id="app">
      <button v-on:click="updateProperties">updateProperties</button>
        <ejs-pdfviewer
          id="pdfViewer"
          ref="pdfviewer"
          :serviceUrl="serviceUrl"
          :documentPath="documentPath">
        </ejs-pdfviewer>
    </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Annotation, 
         Navigation, LinkAnnotation, BookmarkView, ThumbnailView, 
         Print, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      serviceUrl:"https://ej2services.syncfusion.com/production/web-services/api/pdfviewer",
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },

  provide: {
     PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,  
                  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    // Event triggers on the Update Properties button click.
    updateProperties: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
      var formField = viewer.retrieveFormFields();
      viewer.formDesignerModule.updateFormField(formField[0], {
        name: 'Textbox',
        isReadOnly: true,
        visibility: 'visible',
        isRequired: false,
        isPrint: true,
        tooltip: 'Textbox',
        thickness: 4,
        value:'Textbox',
        fontFamily: 'Courier',
        fontSize: 10,
        fontStyle: 'None',
        color: 'black',
        borderColor: 'black',
        backgroundColor: '#daeaf7ff',
        alignment: 'Left',
        maxLength: 0,
        isMultiline: false,
        bounds: { X: 146, Y: 229, Width: 150, Height: 24 }
     });
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

The following code example explains how to update the properties of the textbox field added to the document from the form designer toolbar.

{% tabs %}
{% highlight html tabtitle="Standalone" %}
<template>
  <div id="app">
      <ejs-pdfviewer
        id="pdfViewer"
        ref="pdfviewer"
        :documentPath="documentPath"
        :documentLoad="documentLoad">
      </ejs-pdfviewer>

  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, 
         LinkAnnotation, BookmarkView, Annotation, ThumbnailView, 
         Print, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation, 
                 ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    documentLoad: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
        viewer.textFieldSettings = {
        // Set the name of the form field element.
        name: 'Textbox',
        // Specify whether the Textbox field is in read-only or read-write mode.
        isReadOnly: false,
        // Set the visibility of the form field.
        visibility: 'visible',
        // Specify whether the field is mandatory or not.
        isRequired: false,
        // Specify whether to print the Textbox field.
        isPrint: true,
        // Set the text to be displayed as a tooltip.
        tooltip: 'Textbox',
        // Set the thickness of the Textbox field. To hide the borders, set the value to 0 (zero).
        thickness: 4,
        // Set the value of the form field element.
        value:'Textbox',
        // Set the font family of the textbox field.
        fontFamily: 'Courier',
        // Set the font size of the textbox field.
        fontSize: 10,
        // Specify the font style
      fontStyle: 'None',
      // Set the font color of the textbox field.
      color: 'black',
      // Set the border color of the textbox field.
      borderColor: 'black',
      // Set the background color of the textbox field.
      backgroundColor: '#daeaf7ff',
      // Set the alignment of the text.
      alignment: 'Left',
      // Set the maximum character length.
      maxLength: 0,
      // Allows multiline input in the text field. FALSE, by default.
      isMultiline: false
      }
    },
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
        :serviceUrl="serviceUrl"
        :documentPath="documentPath"
        :documentLoad="documentLoad">
      </ejs-pdfviewer>

  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, 
         LinkAnnotation, BookmarkView, Annotation, ThumbnailView, 
         Print, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      serviceUrl:"https://ej2services.syncfusion.com/production/web-services/api/pdfviewer",
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation, 
                 ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    documentLoad: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
        viewer.textFieldSettings = {
        // Set the name of the form field element.
        name: 'Textbox',
        // Specify whether the Textbox field is in read-only or read-write mode.
        isReadOnly: false,
        // Set the visibility of the form field.
        visibility: 'visible',
        // Specify whether the field is mandatory or not.
        isRequired: false,
        // Specify whether to print the Textbox field.
        isPrint: true,
        // Set the text to be displayed as a tooltip.
        tooltip: 'Textbox',
        // Set the thickness of the Textbox field. To hide the borders, set the value to 0 (zero).
        thickness: 4,
        // Set the value of the form field element.
        value:'Textbox',
        // Set the font family of the textbox field.
        fontFamily: 'Courier',
        // Set the font size of the textbox field.
        fontSize: 10,
        // Specify the font style
      fontStyle: 'None',
      // Set the font color of the textbox field.
      color: 'black',
      // Set the border color of the textbox field.
      borderColor: 'black',
      // Set the background color of the textbox field.
      backgroundColor: '#daeaf7ff',
      // Set the alignment of the text.
      alignment: 'Left',
      // Set the maximum character length.
      maxLength: 0,
      // Allows multiline input in the text field. FALSE, by default.
      isMultiline: false
      }
    },
  }
}
</script>
{% endhighlight %}
{% endtabs %}

![Textbox Field Settings](../../images/textbox.png)

### Password field settings

Using the `updateFormField` method, the form fields can be updated programmatically.

The following code example explains how to update the Password field properties on a button click.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<template>
    <div id="app">
         <button v-on:click="updateProperties">updateProperties</button>
        <ejs-pdfviewer
            id="pdfViewer"
            ref="pdfviewer"
            :documentPath="documentPath">
        </ejs-pdfviewer>
    </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Annotation, 
         Navigation, LinkAnnotation, BookmarkView, ThumbnailView, 
         Print, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },

  provide: {
     PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,  
                  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    // Event triggers on the Update Properties button click.
    updateProperties: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
      var formField = viewer.retrieveFormFields();
      viewer.formDesignerModule.updateFormField(formField[0], {
        name: 'Password',
        isReadOnly: true,
        visibility: 'visible',
        isRequired: false,
        isPrint: true,
        tooltip: 'Password',
        thickness: 4,
        value:'Password',
        fontFamily: 'Courier',
        fontSize: 10,
        fontStyle: 'None',
        color: 'black',
        borderColor: 'black',
        backgroundColor: '#daeaf7ff',
        alignment: 'Left',
        maxLength: 0,
        bounds: { X: 148, Y: 229, Width: 150, Height: 24 }
      });
    }
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

<template>
    <div id="app">
         <button v-on:click="updateProperties">updateProperties</button>
        <ejs-pdfviewer
            id="pdfViewer"
            ref="pdfviewer"
            :serviceUrl="serviceUrl"
            :documentPath="documentPath">
        </ejs-pdfviewer>
    </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Annotation, 
         Navigation, LinkAnnotation, BookmarkView, ThumbnailView, 
         Print, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      serviceUrl:"https://ej2services.syncfusion.com/production/web-services/api/pdfviewer",
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },

  provide: {
     PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,  
                  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    // Event triggers on the Update Properties button click.
    updateProperties: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
      var formField = viewer.retrieveFormFields();
      viewer.formDesignerModule.updateFormField(formField[0], {
        name: 'Password',
        isReadOnly: true,
        visibility: 'visible',
        isRequired: false,
        isPrint: true,
        tooltip: 'Password',
        thickness: 4,
        value:'Password',
        fontFamily: 'Courier',
        fontSize: 10,
        fontStyle: 'None',
        color: 'black',
        borderColor: 'black',
        backgroundColor: '#daeaf7ff',
        alignment: 'Left',
        maxLength: 0,
        bounds: { X: 148, Y: 229, Width: 150, Height: 24 }
      });
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}


The following code example explains how to update the properties of the password field added to the document from the form designer toolbar.

{% tabs %}
{% highlight html tabtitle="Standalone" %}
<template>
  <div id="app">
      <ejs-pdfviewer
        id="pdfViewer"
        ref="pdfviewer"
        :documentPath="documentPath"
        :documentLoad="documentLoad">
      </ejs-pdfviewer>

  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, 
         LinkAnnotation, BookmarkView, Annotation, ThumbnailView, 
         Print, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation, 
                 ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    documentLoad: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.passwordFieldSettings = {
        // Set the name of the form field element.
        name: 'Password',
        // Specify whether the Password field is in read-only or read-write mode.
        isReadOnly: false,
        // Set the visibility of the form field.
        visibility: 'visible',
        // Specify whether the field is mandatory or not.
        isRequired: false,
        // Specify whether to print the Password field.
        isPrint: true,
        // Set the text to be displayed as a tooltip.
        tooltip: 'Password',
        // Set the thickness of the Password field. To hide the borders, set the value to 0 (zero).
        thickness: 4,
        // Set the value of the form field element.
        value:'Password',
        // Set the font family of the Password field.
        fontFamily: 'Courier',
        // Set the font size of the Password field.
        fontSize: 10,
        // Specify the font style
        fontStyle: 'None',
        // Set the font color of the Password field.
        color: 'black',
        // Set the border color of the Password field.
        borderColor: 'black',
        // Set the background color of the Password field.
        backgroundColor: '#daeaf7ff',
        // Set the alignment of the text.
        alignment: 'Left',
        // Set the maximum character length.
        maxLength: 0,
      }
    },
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
        :serviceUrl="serviceUrl"
        :documentPath="documentPath"
        :documentLoad="documentLoad">
      </ejs-pdfviewer>

  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, 
         LinkAnnotation, BookmarkView, Annotation, ThumbnailView, 
         Print, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      serviceUrl:"https://ej2services.syncfusion.com/production/web-services/api/pdfviewer",
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation, 
                 ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    documentLoad: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.passwordFieldSettings = {
        // Set the name of the form field element.
        name: 'Password',
        // Specify whether the Password field is in read-only or read-write mode.
        isReadOnly: false,
        // Set the visibility of the form field.
        visibility: 'visible',
        // Specify whether the field is mandatory or not.
        isRequired: false,
        // Specify whether to print the Password field.
        isPrint: true,
        // Set the text to be displayed as a tooltip.
        tooltip: 'Password',
        // Set the thickness of the Password field. To hide the borders, set the value to 0 (zero).
        thickness: 4,
        // Set the value of the form field element.
        value:'Password',
        // Set the font family of the Password field.
        fontFamily: 'Courier',
        // Set the font size of the Password field.
        fontSize: 10,
        // Specify the font style
        fontStyle: 'None',
        // Set the font color of the Password field.
        color: 'black',
        // Set the border color of the Password field.
        borderColor: 'black',
        // Set the background color of the Password field.
        backgroundColor: '#daeaf7ff',
        // Set the alignment of the text.
        alignment: 'Left',
        // Set the maximum character length.
        maxLength: 0,
      }
    },
  }
}
</script>
{% endhighlight %}
{% endtabs %}

![Password Field Settings](../../images/password.png)

### CheckBox field settings

Using the `updateFormField` method, the form fields can be updated programmatically.

The following code example explains how to update the CheckBox field properties on a button click.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<template>
    <div id="app">
        <button v-on:click="updateProperties">updateProperties</button>
        <ejs-pdfviewer
            id="pdfViewer"
            ref="pdfviewer"
            :documentPath="documentPath">
        </ejs-pdfviewer>
    </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Annotation, 
         Navigation, LinkAnnotation, BookmarkView, ThumbnailView, 
         Print, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },

  provide: {
     PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,  
                  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    // Event triggers on the Update Properties button click.
    updateProperties: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
      var formField = viewer.retrieveFormFields();
      viewer.formDesignerModule.updateFormField(formField[0], {
        name: 'CheckBox',
        isReadOnly: true,
        visibility: 'visible',
        isRequired: false,
        isPrint: true,
        tooltip: 'CheckBox',
        thickness: 4,
        isChecked: true,
        backgroundColor: '#daeaf7ff',
        borderColor: 'black',
        value: 'CheckBox'
      });
    }
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}
<template>
    <div id="app">
        <button v-on:click="updateProperties">updateProperties</button>
        <ejs-pdfviewer
            id="pdfViewer"
            ref="pdfviewer"
            :serviceUrl="serviceUrl"
            :documentPath="documentPath">
        </ejs-pdfviewer>
    </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Annotation, 
         Navigation, LinkAnnotation, BookmarkView, ThumbnailView, 
         Print, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      serviceUrl:"https://ej2services.syncfusion.com/production/web-services/api/pdfviewer",
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },

  provide: {
     PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,  
                  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    // Event triggers on the Update Properties button click.
    updateProperties: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
      var formField = viewer.retrieveFormFields();
      viewer.formDesignerModule.updateFormField(formField[0], {
        name: 'CheckBox',
        isReadOnly: true,
        visibility: 'visible',
        isRequired: false,
        isPrint: true,
        tooltip: 'CheckBox',
        thickness: 4,
        isChecked: true,
        backgroundColor: '#daeaf7ff',
        borderColor: 'black',
        value: 'CheckBox'
      });
    }
  }
}
</script>
{% endhighlight %}
{% endtabs %}


The following code example explains how to update the properties of the checkbox field added to the document from the form designer toolbar.

{% tabs %}
{% highlight html tabtitle="Standalone" %}
<template>
  <div id="app">
      <ejs-pdfviewer
        id="pdfViewer"
        ref="pdfviewer"
        :documentPath="documentPath"
        :documentLoad="documentLoad">
      </ejs-pdfviewer>

  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, 
         LinkAnnotation, BookmarkView, Annotation, ThumbnailView, 
         Print, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation, 
                 ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    documentLoad: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.checkBoxFieldSettings = {
        // Set the name of the form field element.
        name: 'CheckBox',
        // Specify whether the CheckBox field is in read-only or read-write mode.
        isReadOnly: false,
        // Set the visibility of the form field.
        visibility: 'visible',
        // Specify whether the field is mandatory or not.
        isRequired: false,
        // Specify whether to print the CheckBox field.
        isPrint: true,
        // Set the text to be displayed as a tooltip.
        tooltip: 'CheckBox',
        // Set the thickness of the CheckBox field. To hide the borders, set the value to 0 (zero).
        thickness: 4,
        // Specifies whether the CheckBox is in checked state or not.
        isSelected: true,
        // Set the background color of the CheckBox  in hexadecimal string format.
        backgroundColor: '#daeaf7ff',
        // Set the border color of the CheckBox  field.
        borderColor: 'black',
        // Set the value of the form field element.
        value: 'CheckBox'
      }
    },
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
        :serviceUrl="serviceUrl"
        :documentPath="documentPath"
        :documentLoad="documentLoad">
      </ejs-pdfviewer>

  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, 
         LinkAnnotation, BookmarkView, Annotation, ThumbnailView, 
         Print, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      serviceUrl:"https://ej2services.syncfusion.com/production/web-services/api/pdfviewer",
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation, 
                 ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    documentLoad: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.checkBoxFieldSettings = {
      // Set the name of the form field element.
        name: 'CheckBox',
        // Specify whether the CheckBox field is in read-only or read-write mode.
        isReadOnly: false,
        // Set the visibility of the form field.
        visibility: 'visible',
        // Specify whether the field is mandatory or not.
        isRequired: false,
        // Specify whether to print the CheckBox field.
        isPrint: true,
        // Set the text to be displayed as a tooltip.
        tooltip: 'CheckBox',
        // Set the thickness of the CheckBox field. To hide the borders, set the value to 0 (zero).
        thickness: 4,
        // Specifies whether the CheckBox is in checked state or not.
        isSelected: true,
        // Set the background color of the CheckBox  in hexadecimal string format.
        backgroundColor: '#daeaf7ff',
        // Set the border color of the CheckBox  field.
        borderColor: 'black',
        // Set the value of the form field element.
        value: 'CheckBox'
      }
    },
  }
}
</script>
{% endhighlight %}
{% endtabs %}

![CheckBox Field Settings](../../images/checkbox.png)

### RadioButton field settings

Using the `updateFormField` method, the form fields can be updated programmatically.

The following code example explains how to update the RadioButton field properties on a button click.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<template>
    <div id="app">
        <button v-on:click="updateProperties">updateProperties</button>
        <ejs-pdfviewer
            id="pdfViewer"
            ref="pdfviewer"
            :documentPath="documentPath">
        </ejs-pdfviewer>
    </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Annotation, 
         Navigation, LinkAnnotation, BookmarkView, ThumbnailView, 
         Print, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },

  provide: {
     PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,  
                  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    // Event triggers on the Update Properties button click.
    updateProperties: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
      var formField = viewer.retrieveFormFields();
      viewer.formDesignerModule.updateFormField(formField[0], {
        name: 'RadioButton',
        isReadOnly: true,
        visibility: 'visible',
        isRequired: false,
        isPrint: true,
        tooltip: 'RadioButton',
        thickness: 4,
        isSelected: true,
        backgroundColor: '#daeaf7ff',
        borderColor: 'black',
        value: 'RadioButton'
      });
    }
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

<template>
    <div id="app">
        <button v-on:click="updateProperties">updateProperties</button>
        <ejs-pdfviewer
            id="pdfViewer"
            ref="pdfviewer"
            :serviceUrl="serviceUrl"
            :documentPath="documentPath">
        </ejs-pdfviewer>
    </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Annotation, 
         Navigation, LinkAnnotation, BookmarkView, ThumbnailView, 
         Print, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      serviceUrl:"https://ej2services.syncfusion.com/production/web-services/api/pdfviewer",
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },

  provide: {
     PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,  
                  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    // Event triggers on the Update Properties button click.
    updateProperties: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
      var formField = viewer.retrieveFormFields();
      viewer.formDesignerModule.updateFormField(formField[0], {
        name: 'RadioButton',
        isReadOnly: true,
        visibility: 'visible',
        isRequired: false,
        isPrint: true,
        tooltip: 'RadioButton',
        thickness: 4,
        isSelected: true,
        backgroundColor: '#daeaf7ff',
        borderColor: 'black',
        value: 'RadioButton'
      });
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

The following code example explains how to update the properties of the radiobutton field added to the document from the form designer toolbar.


{% tabs %}
{% highlight html tabtitle="Standalone" %}
<template>
  <div id="app">
      <ejs-pdfviewer
        id="pdfViewer"
        ref="pdfviewer"
        :documentPath="documentPath"
        :documentLoad="documentLoad">
      </ejs-pdfviewer>

  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, 
         LinkAnnotation, BookmarkView, Annotation, ThumbnailView, 
         Print, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation, 
                 ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    documentLoad: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
     viewer.radioButtonFieldSettings = {
        // Set the name of the form field element.
        name: 'RadioButton',
        // Specify whether the RadioButton field is in read-only or read-write mode.
        isReadOnly: false,
        // Set the visibility of the form field.
        visibility: 'visible',
        // Specify whether the field is mandatory or not.
        isRequired: false,
        // Specify whether to print the RadioButton field.
        isPrint: true,
        // Set the text to be displayed as a tooltip.
        tooltip: 'RadioButton',
        // Set the thickness of the RadioButton field. To hide the borders, set the value to 0 (zero).
        thickness: 4,
        // Specifies whether the radio button is in checked state or not.
        isSelected: true,
        // Set the background color of the radio button in hexadecimal string format.
        backgroundColor: '#daeaf7ff',
        // Set the border color of the radio button field.
        borderColor: 'black',
        // Set the value of the form field element.
        value: 'RadioButton'
      }
    },
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
        :serviceUrl="serviceUrl"
        :documentPath="documentPath"
        :documentLoad="documentLoad">
      </ejs-pdfviewer>

  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, 
         LinkAnnotation, BookmarkView, Annotation, ThumbnailView, 
         Print, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      serviceUrl:"https://ej2services.syncfusion.com/production/web-services/api/pdfviewer",
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation, 
                 ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    documentLoad: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.checkBoxFieldSettings = {
      viewer.radioButtonFieldSettings = {
        // Set the name of the form field element.
        name: 'RadioButton',
        // Specify whether the RadioButton field is in read-only or read-write mode.
        isReadOnly: false,
        // Set the visibility of the form field.
        visibility: 'visible',
        // Specify whether the field is mandatory or not.
        isRequired: false,
        // Specify whether to print the RadioButton field.
        isPrint: true,
        // Set the text to be displayed as a tooltip.
        tooltip: 'RadioButton',
        // Set the thickness of the RadioButton field. To hide the borders, set the value to 0 (zero).
        thickness: 4,
        // Specifies whether the radio button is in checked state or not.
        isSelected: true,
        // Set the background color of the radio button in hexadecimal string format.
        backgroundColor: '#daeaf7ff',
        // Set the border color of the radio button field.
        borderColor: 'black',
        // Set the value of the form field element.
        value: 'RadioButton'
      }
    },
  }
}
</script>
{% endhighlight %}
{% endtabs %}


![RadioButton Field Settings](../../images/radiobutton.png)

### ListBox field settings

Using the `updateFormField` method, the form fields can be updated programmatically.

The following code example explains how to update the ListBox field properties on a button click.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<template>
    <div id="app">
      <button v-on:click="updateProperties">updateProperties</button>
      <ejs-pdfviewer
        id="pdfViewer"
        ref="pdfviewer"
        :documentPath="documentPath">
      </ejs-pdfviewer>
   </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Annotation, 
         Navigation, LinkAnnotation, BookmarkView, ThumbnailView, 
         Print, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },

  provide: {
     PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,  
                  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    // Event triggers on the Update Properties button click.
    updateProperties() {
      viewer = this.$refs.pdfviewer.ej2Instances;
      const formFields = viewer.retrieveFormFields();
      const customOptions = [
        { itemName: 'item1', itemValue: 'item1' },
        { itemName: 'item2', itemValue: 'item2' },
        { itemName: 'item3', itemValue: 'item3' }
      ];
      viewer.formDesignerModule.updateFormField(formFields[0], {
        name: 'ListBox',
        isReadOnly: true,
        visibility: 'visible',
        isRequired: false,
        isPrint: true,
        tooltip: 'ListBox',
        thickness: 4,
        fontFamily: 'Courier',
        fontSize: 10,
        fontStyle: 'None',
        color: 'black',
        borderColor: 'black',
        backgroundColor: '#daeaf7ff',
        alignment: 'Left',
        options: customOptions
      });
    }
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

<template>
    <div id="app">
      <button v-on:click="updateProperties">updateProperties</button>
      <ejs-pdfviewer
        id="pdfViewer"
        ref="pdfviewer"
        :serviceUrl="serviceUrl"
        :documentPath="documentPath">
      </ejs-pdfviewer>
   </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Annotation, 
         Navigation, LinkAnnotation, BookmarkView, ThumbnailView, 
         Print, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      serviceUrl:"https://ej2services.syncfusion.com/production/web-services/api/pdfviewer",
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },

  provide: {
     PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,  
                  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    // Event triggers on the Update Properties button click.
    updateProperties() {
      viewer = this.$refs.pdfviewer.ej2Instances;
      const formFields = viewer.retrieveFormFields();
      const customOptions = [
        { itemName: 'item1', itemValue: 'item1' },
        { itemName: 'item2', itemValue: 'item2' },
        { itemName: 'item3', itemValue: 'item3' }
      ];
      viewer.formDesignerModule.updateFormField(formFields[0], {
        name: 'ListBox',
        isReadOnly: true,
        visibility: 'visible',
        isRequired: false,
        isPrint: true,
        tooltip: 'ListBox',
        thickness: 4,
        fontFamily: 'Courier',
        fontSize: 10,
        fontStyle: 'None',
        color: 'black',
        borderColor: 'black',
        backgroundColor: '#daeaf7ff',
        alignment: 'Left',
        options: customOptions
      });
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}

The following code example explains how to update the properties of the listbox field added to the document from the form designer toolbar.

{% tabs %}
{% highlight html tabtitle="Standalone" %}
<template>
  <div id="app">
      <ejs-pdfviewer
        id="pdfViewer"
        ref="pdfviewer"
        :documentPath="documentPath"
        :documentLoad="documentLoad">
      </ejs-pdfviewer>

  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, 
         LinkAnnotation, BookmarkView, Annotation, ThumbnailView, 
         Print, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation, 
                 ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    documentLoad: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
      const customOptions = [
          { itemName: 'item1', itemValue: 'item1' },
          { itemName: 'item2', itemValue: 'item2' },
          { itemName: 'item3', itemValue: 'item3' }
      ];
      viewer.listBoxFieldSettings = {
        // Set the name of the form field element.
        name: 'listbox',
        // Specify whether the listbox field is in read-only or read-write mode.
        isReadOnly: false,
        // Set the visibility of the form field.
        visibility: 'visible',
        // Specify whether the field is mandatory or not.
        isRequired: false,
        // Specify whether to print the listbox field.
        isPrint: true,
        // Set the text to be displayed as a tooltip.
        tooltip: 'listbox',
        // Set the thickness of the listbox field. To hide the borders, set the value to 0 (zero).
        thickness: 4,
        // Set the value of the form field element.
        value:'listbox',
        // Set the font family of the listbox field.
        fontFamily: 'Courier',
        // Set the font size of the listbox field.
        fontSize: 10,
        // Specify the font style
        fontStyle: 'None',
        // Set the  font color of the listbox field.
        color: 'black',
        // Set the border color of the listbox field.
        borderColor: 'black',
        // Set the background color of the listbox field.
        backgroundColor: '#daeaf7ff',
        // Set the alignment of the text.
        alignment: 'Left',
        // Set the listbox items.
        options: customOptions
      }
    },
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
        :serviceUrl="serviceUrl"
        :documentPath="documentPath"
        :documentLoad="documentLoad">
      </ejs-pdfviewer>

  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, 
         LinkAnnotation, BookmarkView, Annotation, ThumbnailView, 
         Print, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      serviceUrl:"https://ej2services.syncfusion.com/production/web-services/api/pdfviewer",
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation, 
                 ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    documentLoad: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
      const customOptions = [
          { itemName: 'item1', itemValue: 'item1' },
          { itemName: 'item2', itemValue: 'item2' },
          { itemName: 'item3', itemValue: 'item3' }
      ];
      viewer.listBoxFieldSettings = {
        // Set the name of the form field element.
        name: 'listbox',
        // Specify whether the listbox field is in read-only or read-write mode.
        isReadOnly: false,
        // Set the visibility of the form field.
        visibility: 'visible',
        // Specify whether the field is mandatory or not.
        isRequired: false,
        // Specify whether to print the listbox field.
        isPrint: true,
        // Set the text to be displayed as a tooltip.
        tooltip: 'listbox',
        // Set the thickness of the listbox field. To hide the borders, set the value to 0 (zero).
        thickness: 4,
        // Set the value of the form field element.
        value:'listbox',
        // Set the font family of the listbox field.
        fontFamily: 'Courier',
        // Set the font size of the listbox field.
        fontSize: 10,
        // Specify the font style
        fontStyle: 'None',
        // Set the  font color of the listbox field.
        color: 'black',
        // Set the border color of the listbox field.
        borderColor: 'black',
        // Set the background color of the listbox field.
        backgroundColor: '#daeaf7ff',
        // Set the alignment of the text.
        alignment: 'Left',
        // Set the listbox items.
        options: customOptions
      }
    },
  }
}
</script>
{% endhighlight %}
{% endtabs %}

![ListBox Field Settings](../../images/listbox.png)

### DropDown field settings

Using the `updateFormField` method, the form fields can be updated programmatically.

The following code example explains how to update the DropDown field properties on a button click.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<template>
    <div id="app">
      <button v-on:click="updateProperties">updateProperties</button>
      <ejs-pdfviewer
        id="pdfViewer"
        ref="pdfviewer"
        :documentPath="documentPath">
      </ejs-pdfviewer>
   </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Annotation, 
         Navigation, LinkAnnotation, BookmarkView, ThumbnailView, 
         Print, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },

  provide: {
     PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,  
                  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    // Event triggers on the Update Properties button click.
    updateProperties() {
      viewer = this.$refs.pdfviewer.ej2Instances;
      const formFields = viewer.retrieveFormFields();
      const customOptions = [
        { itemName: 'item1', itemValue: 'item1' },
        { itemName: 'item2', itemValue: 'item2' },
        { itemName: 'item3', itemValue: 'item3' }
      ];
      viewer.formDesignerModule.updateFormField(formFields[0], {
        name: 'DropDown',
        isReadOnly: false,
        visibility: 'visible',
        isRequired: false,
        isPrint: true,
        tooltip: 'DropDown',
        thickness: 4,
        fontFamily: 'Courier',
        fontSize: 10,
        fontStyle: 'None',
        color: 'black',
        borderColor: 'black',
        backgroundColor:'#daeaf7ff',
        alignment: 'Left',
        options: customOptions,
      });
    }
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

<template>
    <div id="app">
      <button v-on:click="updateProperties">updateProperties</button>
      <ejs-pdfviewer
        id="pdfViewer"
        ref="pdfviewer"
        :serviceUrl="serviceUrl"
        :documentPath="documentPath">
      </ejs-pdfviewer>
   </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Annotation, 
         Navigation, LinkAnnotation, BookmarkView, ThumbnailView, 
         Print, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      serviceUrl:"https://ej2services.syncfusion.com/production/web-services/api/pdfviewer",
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },

  provide: {
     PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView,  
                  ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    // Event triggers on the Update Properties button click.
    updateProperties() {
      viewer = this.$refs.pdfviewer.ej2Instances;
      const formFields = viewer.retrieveFormFields();
      const customOptions = [
        { itemName: 'item1', itemValue: 'item1' },
        { itemName: 'item2', itemValue: 'item2' },
        { itemName: 'item3', itemValue: 'item3' }
      ];
      viewer.formDesignerModule.updateFormField(formFields[0], {
        name: 'DropDown',
        isReadOnly: false,
        visibility: 'visible',
        isRequired: false,
        isPrint: true,
        tooltip: 'DropDown',
        thickness: 4,
        fontFamily: 'Courier',
        fontSize: 10,
        fontStyle: 'None',
        color: 'black',
        borderColor: 'black',
        backgroundColor:'#daeaf7ff',
        alignment: 'Left',
        options: customOptions,
      });
    }
  }
}
</script>

{% endhighlight %}
{% endtabs %}


The following code example explains how to update the properties of the dropdown field added to the document from the form designer toolbar.

{% tabs %}
{% highlight html tabtitle="Standalone" %}
<template>
  <div id="app">
      <ejs-pdfviewer
        id="pdfViewer"
        ref="pdfviewer"
        :documentPath="documentPath"
        :documentLoad="documentLoad">
      </ejs-pdfviewer>

  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, 
         LinkAnnotation, BookmarkView, Annotation, ThumbnailView, 
         Print, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf"
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation, 
                 ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    documentLoad: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
      const customOptions = [
            { itemName: 'item1', itemValue: 'item1' },
            { itemName: 'item2', itemValue: 'item2' },
            { itemName: 'item3', itemValue: 'item3' }
      ];
      viewer.DropdownFieldSettings = {
        // Set the name of the form field element.
        name: 'DropDown',
        // Specify whether the DropDown field is in read-only or read-write mode.
        isReadOnly: false,
        // Set the visibility of the form field.
        visibility: 'visible',
        // Specify whether the field is mandatory or not.
        isRequired: false,
        // Specify whether to print the DropDown field.
        isPrint: true,
        // Set the text to be displayed as a tooltip.
        tooltip: 'DropDown',
        // Set the thickness of the DropDown field. To hide the borders, set the value to 0 (zero).
        thickness: 4,
        // Set the value of the form field element.
        value:'DropDown',
        // Set the font family of the DropDown field.
        fontFamily: 'Courier',
        // Set the font size of the DropDown field.
        fontSize: 10,
        // Specify the font style
        fontStyle: 'None',
        // Set the  font color of the DropDown field.
        color: 'black',
        // Set the border color of the DropDown field.
        borderColor: 'black',
        // Set the background color of the DropDown field.
        backgroundColor: '#daeaf7ff',
        // Set the alignment of the text.
        alignment: 'Left',
        // Set the DropDown items.
        options: customOptions
      }
    },
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
        :serviceUrl="serviceUrl"
        :documentPath="documentPath"
        :documentLoad="documentLoad">
      </ejs-pdfviewer>

  </div>
</template>

<script>
import Vue from 'vue';
import { PdfViewerPlugin, Toolbar, Magnification, Navigation, 
         LinkAnnotation, BookmarkView, Annotation, ThumbnailView, 
         Print, TextSelection, TextSearch, FormFields, FormDesigner } from '@syncfusion/ej2-vue-pdfviewer';
Vue.use(PdfViewerPlugin);
var viewer;

export default {
  name: 'app',
  data () {
    return {
      documentPath:"https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      serviceUrl:"https://ej2services.syncfusion.com/production/web-services/api/pdfviewer",
    };
  },
  provide: {
    PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, Annotation, 
                 ThumbnailView, Print, TextSelection, TextSearch, FormFields, FormDesigner ]},

  methods: {
    documentLoad: function (args) {
      viewer = this.$refs.pdfviewer.ej2Instances;
      const customOptions = [
            { itemName: 'item1', itemValue: 'item1' },
            { itemName: 'item2', itemValue: 'item2' },
            { itemName: 'item3', itemValue: 'item3' }
      ];
      viewer.DropdownFieldSettings = {
        // Set the name of the form field element.
        name: 'DropDown',
        // Specify whether the DropDown field is in read-only or read-write mode.
        isReadOnly: false,
        // Set the visibility of the form field.
        visibility: 'visible',
        // Specify whether the field is mandatory or not.
        isRequired: false,
        // Specify whether to print the DropDown field.
        isPrint: true,
        // Set the text to be displayed as a tooltip.
        tooltip: 'DropDown',
        // Set the thickness of the DropDown field. To hide the borders, set the value to 0 (zero).
        thickness: 4,
        // Set the value of the form field element.
        value:'DropDown',
        // Set the font family of the DropDown field.
        fontFamily: 'Courier',
        // Set the font size of the DropDown field.
        fontSize: 10,
        // Specify the font style
        fontStyle: 'None',
        // Set the  font color of the DropDown field.
        color: 'black',
        // Set the border color of the DropDown field.
        borderColor: 'black',
        // Set the background color of the DropDown field.
        backgroundColor: '#daeaf7ff',
        // Set the alignment of the text.
        alignment: 'Left',
        // Set the DropDown items.
        options: customOptions
      }
    },
  }
}
</script>
{% endhighlight %}
{% endtabs %}

![DropDown Field Settings](../../images/dropdown.png)