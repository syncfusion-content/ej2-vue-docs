---
layout: post
title: Customize toolbar in Vue Pdfviewer component | Syncfusion
description: Learn here all about Customize toolbar in Syncfusion Vue Pdfviewer component of Syncfusion Essential JS 2 and more.
control: PDF Viewer
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customize toolbar in PDF Viewer component

## How to customize existing toolbar in PDF Viewer component

PDF Viewer allows you to customize(add, show, hide, enable, and disable) existing items in a toolbar.

* Add - New items can defined by [**CustomToolbarItemModel**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/customToolbarItemModel/) and with existing items in [**ToolbarSettings**](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/toolbarSettings/) property. Newly added item click action can be defined in [`toolbarclick`](https://ej2.syncfusion.com/vue/documentation/api/toolbar/clickEventArgs/).

* Show, Hide - Existing items can be shown or hidden using the [`ToolbarSettings`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/toolbarSettings/) property. Pre-defined toolbar items are available with [`ToolbarItem`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/toolbarItem/).

* Enable, Disable -  Toolbar items can be enabled or disable using [`enabletoolbaritem`](https://ej2.syncfusion.com/vue/documentation/api/pdfviewer/toolbar/#enabletoolbaritem)

{% tabs %}
{% highlight html tabtitle="Composition API (Standalone)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :resourceUrl="resourceUrl"
      :toolbarClick="toolbarClick" :OnCreateSearch="OnCreateSearch" :toolbarSettings="toolbarSettings">
    </ejs-pdfviewer>
  </div>
</template>
<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { ComboBox } from "@syncfusion/ej2-dropdowns";
import { TextBox } from "@syncfusion/ej2-inputs";
import { provide, ref } from 'vue';

const pdfviewer = ref(null);

// Move the toolItem declaration inside the data function
let toolItem1 = {
  prefixIcon: 'e-icons e-paste',
  id: 'print',
  tooltipText: 'Custom toolbar item',
  align: 'left'
};
let toolItem2 = {
  id: 'download',
  text: 'Save',
  tooltipText: 'Custom toolbar item',
  align: 'right'
};
let LanguageList = ['Typescript', 'Javascript', 'Angular', 'C#', 'C', 'Python'];
let toolItem3 = {
  type: 'Input',
  tooltipText: 'Language List',
  cssClass: 'percentage',
  align: 'Left',
  id: 'dropdown',
  template: new ComboBox({ width: 100, value: 'TypeScript', dataSource: LanguageList, popupWidth: 85, showClearButton: false, readonly: false })
};
let toolItem4 = {
  type: 'Input',
  tooltipText: 'Text',
  align: 'Right',
  cssClass: 'find',
  id: 'textbox',
  template: new TextBox({ width: 125, placeholder: 'Type Here' })
}

const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const resourceUrl = "https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib";
const toolbarSettings = {
  toolbarItems: [toolItem1, toolItem2, 'OpenOption', 'PageNavigationTool', 'MagnificationTool', toolItem3, 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', toolItem4, 'CommentTool', 'SubmitForm']
}

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]);

const toolbarClick = function (args) {
  if (args.item && args.item.id === 'print') {
    pdfviewer.value.ej2Instances.printModule.print();
  }
  else if (args.item && args.item.id === 'download') {
    pdfviewer.value.ej2Instances.download();
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Standalone)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath"
      :resourceUrl="resourceUrl" :toolbarClick="toolbarClick" :OnCreateSearch="OnCreateSearch"
      :toolbarSettings="toolbarSettings">
    </ejs-pdfviewer>
  </div>
</template>
<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { ComboBox } from "@syncfusion/ej2-dropdowns";
import { TextBox } from "@syncfusion/ej2-inputs";

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    // Move the toolItem declaration inside the data function
    let toolItem1 = {
      prefixIcon: 'e-icons e-paste',
      id: 'print',
      tooltipText: 'Custom toolbar item',
      align: 'left'
    };
    let toolItem2 = {
      id: 'download',
      text: 'Save',
      tooltipText: 'Custom toolbar item',
      align: 'right'
    };
    let LanguageList = ['Typescript', 'Javascript', 'Angular', 'C#', 'C', 'Python'];
    let toolItem3 = {
      type: 'Input',
      tooltipText: 'Language List',
      cssClass: 'percentage',
      align: 'Left',
      id: 'dropdown',
      template: new ComboBox({ width: 100, value: 'TypeScript', dataSource: LanguageList, popupWidth: 85, showClearButton: false, readonly: false })
    };
    let toolItem4 = {
      type: 'Input',
      tooltipText: 'Text',
      align: 'Right',
      cssClass: 'find',
      id: 'textbox',
      template: new TextBox({ width: 125, placeholder: 'Type Here' })
    }
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      resourceUrl: "https://cdn.syncfusion.com/ej2/24.1.41/dist/ej2-pdfviewer-lib",
      toolbarSettings: {
        toolbarItems: [toolItem1, toolItem2, 'OpenOption', 'PageNavigationTool', 'MagnificationTool', toolItem3, 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', toolItem4, 'CommentTool', 'SubmitForm']
      }
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]
  },
  methods: {
    toolbarClick: function (args) {
      if (args.item && args.item.id === 'print') {
        this.$refs.pdfviewer.ej2Instances.printModule.print();
      }
      else if (args.item && args.item.id === 'download') {
        this.$refs.pdfviewer.ej2Instances.download();
      }
    },
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Composition API (Server-Backed)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :serviceUrl="serviceUrl"
      :toolbarClick="toolbarClick" :OnCreateSearch="OnCreateSearch" :toolbarSettings="toolbarSettings">
    </ejs-pdfviewer>
  </div>
</template>
<script setup>

import {
  PdfViewerComponent as EjsPdfviewer, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { ComboBox } from "@syncfusion/ej2-dropdowns";
import { TextBox } from "@syncfusion/ej2-inputs";
import { provide, ref } from 'vue';

const pdfviewer = ref(null);

// Move the toolItem declaration inside the data function
let toolItem1 = {
  prefixIcon: 'e-icons e-paste',
  id: 'print',
  tooltipText: 'Custom toolbar item',
  align: 'left'
};
let toolItem2 = {
  id: 'download',
  text: 'Save',
  tooltipText: 'Custom toolbar item',
  align: 'right'
};
let LanguageList = ['Typescript', 'Javascript', 'Angular', 'C#', 'C', 'Python'];
let toolItem3 = {
  type: 'Input',
  tooltipText: 'Language List',
  cssClass: 'percentage',
  align: 'Left',
  id: 'dropdown',
  template: new ComboBox({ width: 100, value: 'TypeScript', dataSource: LanguageList, popupWidth: 85, showClearButton: false, readonly: false })
};
let toolItem4 = {
  type: 'Input',
  tooltipText: 'Text',
  align: 'Right',
  cssClass: 'find',
  id: 'textbox',
  template: new TextBox({ width: 125, placeholder: 'Type Here' })
}

const documentPath = "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf";
const serviceUrl = "https://services.syncfusion.com/vue/production/api/pdfviewer";
const toolbarSettings = {
  toolbarItems: [toolItem1, toolItem2, 'OpenOption', 'PageNavigationTool', 'MagnificationTool', toolItem3, 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', toolItem4, 'CommentTool', 'SubmitForm']
}

provide('PdfViewer', [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
  Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]);

const toolbarClick = function (args) {
  if (args.item && args.item.id === 'print') {
    this.$refs.pdfviewer.ej2Instances.printModule.print();
  }
  else if (args.item && args.item.id === 'download') {
    this.$refs.pdfviewer.ej2Instances.download();
  }
}
</script>

{% endhighlight %}
{% highlight html tabtitle="Options API (Server-Backed)" %}

<template>
  <div id="app">
    <ejs-pdfviewer id="pdfViewer" ref="pdfviewer" :documentPath="documentPath" :serviceUrl="serviceUrl" :toolbarClick="toolbarClick" :OnCreateSearch="OnCreateSearch"
      :toolbarSettings="toolbarSettings">
    </ejs-pdfviewer>
  </div>
</template>
<script>

import {
  PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation,
  BookmarkView, ThumbnailView, Print, TextSelection, TextSearch,
  Annotation, FormDesigner, FormFields
} from '@syncfusion/ej2-vue-pdfviewer';
import { ComboBox } from "@syncfusion/ej2-dropdowns";
import { TextBox } from "@syncfusion/ej2-inputs";

export default {
  name: "App",
  components: {
    "ejs-pdfviewer": PdfViewerComponent
  },
  data() {
    // Move the toolItem declaration inside the data function
    let toolItem1 = {
      prefixIcon: 'e-icons e-paste',
      id: 'print',
      tooltipText: 'Custom toolbar item',
      align: 'left'
    };
    let toolItem2 = {
      id: 'download',
      text: 'Save',
      tooltipText: 'Custom toolbar item',
      align: 'right'
    };
    let LanguageList = ['Typescript', 'Javascript', 'Angular', 'C#', 'C', 'Python'];
    let toolItem3 = {
      type: 'Input',
      tooltipText: 'Language List',
      cssClass: 'percentage',
      align: 'Left',
      id: 'dropdown',
      template: new ComboBox({ width: 100, value: 'TypeScript', dataSource: LanguageList, popupWidth: 85, showClearButton: false, readonly: false })
    };
    let toolItem4 = {
      type: 'Input',
      tooltipText: 'Text',
      align: 'Right',
      cssClass: 'find',
      id: 'textbox',
      template: new TextBox({ width: 125, placeholder: 'Type Here' })
    }
    return {
      documentPath: "https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf",
      serviceUrl: "https://services.syncfusion.com/vue/production/api/pdfviewer",
      toolbarSettings: {
        toolbarItems: [toolItem1, toolItem2, 'OpenOption', 'PageNavigationTool', 'MagnificationTool', toolItem3, 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption', 'UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', toolItem4, 'CommentTool', 'SubmitForm']
      }
    };
  },
  provide: {
    PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView,
      Print, TextSelection, TextSearch, Annotation, FormDesigner, FormFields]
  },
  methods: {
    toolbarClick: function (args) {
      if (args.item && args.item.id === 'print') {
        this.$refs.pdfviewer.ej2Instances.printModule.print();
      }
      else if (args.item && args.item.id === 'download') {
        this.$refs.pdfviewer.ej2Instances.download();
      }
    },
  }
}
</script>

{% endhighlight %}
{% endtabs %}

>Note : Default value of toolbar items is ['OpenOption', 'PageNavigationTool','MagnificationTool', 'PanTool', 'SelectionTool', 'SearchOption', 'PrintOption', 'DownloadOption','UndoRedoTool', 'AnnotationEditTool', 'FormDesignerEditTool', 'CommentTool', 'SubmitForm']

### Align Property

The align property is used to specify the alignment of a toolbar item within the toolbar.

`Left`: Aligns the item to the left side of the toolbar.
`Right`: Aligns the item to the right side of the toolbar.

### Tooltip Property

The tooltip property is used to set the tooltip text for a toolbar item. Tooltip provides additional information when a user hovers over the item.

### CssClass Property

The cssClass property is used to apply custom CSS classes to a toolbar item. It allows custom styling of the toolbar item.

### Prefix Property

The prefix property is used to set the CSS class or icon that should be added as a prefix to the existing content of the toolbar item.

### ID Property

The id property within a CustomToolbarItemModel is a compulsory attribute that plays a vital role in toolbar customization. It serves as a unique identifier for each toolbar item, facilitating distinct references and interactions.

When defining or customizing toolbar items, it is mandatory to assign a specific and descriptive id to each item. 
These properties are commonly used when defining custom toolbar items with the `CustomToolbarItemModel`` in the context of Syncfusion PDF Viewer. When configuring the toolbar using the `ToolbarSettings`` property, you can include these properties to customize the appearance and behavior of each toolbar item.

N> When customizing toolbar items, you have the flexibility to include either icons or text based on your design preference.

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/How%20to/Customize%20existing%20toolbar)