---
layout: post
title: Customize context menu in Vue PDF Viewer component | Syncfusion
description: Learn here all about Customize context menu in Syncfusion Vue PDF Viewer component of Syncfusion Essential JS 2 and more.
control: PDF Viewer
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customize context menu in Vue PDF Viewer component

PDF Viewer allows you to add custom option in context menu. It can be achieved by using the `addCustomMenu()` method and custom action is defined using the `customContextMenuSelect()`method.

### Add Custom Option

The following code shows how to add custom option in context menu.

```js
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, 
         TextSelection, TextSearch, Annotation, FormFields, FormDesigner,PageOrganizer } from "@syncfusion/ej2-vue-pdfviewer";
import { MenuComponent } from "@syncfusion/ej2-vue-navigations";
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";

export default {
    components: {
        'ejs-pdfviewer': PdfViewerComponent,
        'ejs-menu': MenuComponent,
        'ejs-checkbox': CheckBoxComponent 
    },
    data: function() {
        return {
			documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
            resourceUrl: 'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
            menuItems : [
            {
                text: 'Search In Google',
                id: 'search_in_google',
                iconCss: 'e-icons e-search'
            },
            {
                text: 'Lock Annotation',
                iconCss: 'e-icons e-lock',
                id: 'lock_annotation'
            },
            {
                text: 'Unlock Annotation',
                iconCss: 'e-icons e-unlock',
                id: 'unlock_annotation'
            },
            {
                text: 'Lock Form Field',
                iconCss: 'e-icons e-lock',
                id: 'read_only_true'
            },
            {
                text: 'Unlock Form Field',
                iconCss: 'e-icons e-unlock',
                id: 'read_only_false'
            },
        ]
        }
    },
	provide: {
      PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner,PageOrganizer]
    },
    methods: {     
    documentLoad: function (args) {
        var viewer = this.$refs.pdfviewer.ej2Instances;       
        viewer.addCustomMenu(this.menuItems, false, false);
    },
  }
```

### Customize custom option in context menu

The PDF Viewer feature enables customization of custom options and the ability to toggle the display of the default context menu. When the addCustomMenu parameter is set to `true`, the default menu is hidden; conversely, when it is set to `false`, the default menu items are displayed.

```js
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, 
         TextSelection, TextSearch, Annotation, FormFields, FormDesigner,PageOrganizer } from "@syncfusion/ej2-vue-pdfviewer";
import { MenuComponent } from "@syncfusion/ej2-vue-navigations";
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";

export default {
    components: {
        'ejs-pdfviewer': PdfViewerComponent,
        'ejs-switch': SwitchComponent ,
        'ejs-menu': MenuComponent,
        'ejs-checkbox': CheckBoxComponent 
    },
    data: function() {
        return {
			documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
            resourceUrl: 'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
            menuItems : [
            {
                text: 'Search In Google',
                id: 'search_in_google',
                iconCss: 'e-icons e-search'
            },
            {
                text: 'Lock Annotation',
                iconCss: 'e-icons e-lock',
                id: 'lock_annotation'
            },
            {
                text: 'Unlock Annotation',
                iconCss: 'e-icons e-unlock',
                id: 'unlock_annotation'
            },
            {
                text: 'Lock Form Field',
                iconCss: 'e-icons e-lock',
                id: 'read_only_true'
            },
            {
                text: 'Unlock Form Field',
                iconCss: 'e-icons e-unlock',
                id: 'read_only_false'
            },
        ]
        }
    },
	provide: {
      PdfViewer: [ Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, 
                   Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner,PageOrganizer]
    },
    methods: {     
    documentLoad: function (args) {
        var viewer = this.$refs.pdfviewer.ej2Instances;       
        viewer.addCustomMenu(this.menuItems, true);
    },
  }
```

#### Customize added context menu items

The following code shows how to hide/show added custom option in context menu using the `customContextMenuBeforeOpen()` method.

{% tabs %}
{% highlight html tabtitle="Standalone" %}

<template>
  <div id="app">
      <ul>
        <ejs-checkbox label='Hide Default Context Menu' id="enable" @change="contextmenuHelper" checked="false"></ejs-checkbox>
        <ejs-checkbox label='Add Custom option at bottom' id="position" @change="contextmenuHelper" checked="false"></ejs-checkbox>
      </ul>
      <ejs-pdfviewer
        id="pdfViewer"
        ref="pdfviewer"
        :resourceUrl="resourceUrl"
        :documentPath="documentPath"
        :documentLoad="documentLoad"
        :customContextMenuBeforeOpen="customContextMenuBeforeOpen"
        :customContextMenuSelect="customContextMenuSelect" > 
      </ejs-pdfviewer>
  </div>
</template>

<script>
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch, Annotation, FormFields, FormDesigner,PageOrganizer } from "@syncfusion/ej2-vue-pdfviewer";
import { MenuComponent } from "@syncfusion/ej2-vue-navigations";
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";

export default {
    components: {
        'ejs-pdfviewer': PdfViewerComponent,
        'ejs-menu': MenuComponent,
        'ejs-checkbox': CheckBoxComponent 
    },
    data: function() {
        return {
			documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
            resourceUrl: 'https://cdn.syncfusion.com/ej2/23.2.6/dist/ej2-pdfviewer-lib',
            menuItems : [
            {
                text: 'Search In Google',
                id: 'search_in_google',
                iconCss: 'e-icons e-search'
            },
            {
                text: 'Lock Annotation',
                iconCss: 'e-icons e-lock',
                id: 'lock_annotation'
            },
            {
                text: 'Unlock Annotation',
                iconCss: 'e-icons e-unlock',
                id: 'unlock_annotation'
            },
            {
                text: 'Lock Form Field',
                iconCss: 'e-icons e-lock',
                id: 'read_only_true'
            },
            {
                text: 'Unlock Form Field',
                iconCss: 'e-icons e-unlock',
                id: 'read_only_false'
            },
        ]
        }
    },
	provide: {
      PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, 
                  TextSelection, TextSearch, Annotation, FormFields, FormDesigner,PageOrganizer]
    },
    methods: {
    documentLoad: function (args) {
      var viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.addCustomMenu(this.menuItems, false, false);
    },
    customContextMenuSelect: function (args) {
      var viewer = this.$refs.pdfviewer.ej2Instances;
      switch (args.id) {
        case 'search_in_google':
          for (var i = 0; i < viewer.textSelectionModule.selectionRangeArray.length; i++) {
            var content = viewer.textSelectionModule.selectionRangeArray[i].textContent;
            if ((viewer.textSelectionModule.isTextSelection) && (/\S/.test(content))) {
              window.open('http://google.com/search?q=' + content);
            }
          }
          break;
        case 'lock_annotation':
          this.lockAnnotations(args);
          break;
        case 'unlock_annotation':
          this.unlockAnnotations(args);
          break;
        case 'read_only_true':
          this.setReadOnlyTrue(args);
          break;
        case 'read_only_false':
          this.setReadOnlyFalse(args);
          break;
        default:
          break;
      }
    },

    customContextMenuBeforeOpen: function (args) {
      var viewer = this.$refs.pdfviewer.ej2Instances;
      for (var i = 0; i < args.ids.length; i++) {
        var search = document.getElementById(args.ids[i]);
        if (search) {
          search.style.display = 'none';
          if (args.ids[i] === 'search_in_google' && (viewer.textSelectionModule) && viewer.textSelectionModule.isTextSelection) {
            search.style.display = 'block';
          } else if (args.ids[i] === "lock_annotation" || args.ids[i] === "unlock_annotation") {
            var isLockOption = args.ids[i] === "lock_annotation";
            for (var j = 0; j < viewer.selectedItems.annotations.length; j++) {
              var selectedAnnotation = viewer.selectedItems.annotations[j];
              if (selectedAnnotation && selectedAnnotation.annotationSettings) {
                var shouldDisplay = (isLockOption && !selectedAnnotation.annotationSettings.isLock) ||
                  (!isLockOption && selectedAnnotation.annotationSettings.isLock);
                search.style.display = shouldDisplay ? 'block' : 'none';
              }
            }
          } else if ((args.ids[i] === "read_only_true" || args.ids[i] === "read_only_false") && viewer.selectedItems.formFields.length !== 0) {
            var isReadOnlyOption = args.ids[i] === "read_only_true";
            for (var j = 0; j < viewer.selectedItems.formFields.length; j++) {
              var selectedFormFields = viewer.selectedItems.formFields[j];
              if (selectedFormFields) {
                var selectedFormField = viewer.selectedItems.formFields[j].isReadonly;
                var displayMenu = (isReadOnlyOption && !selectedFormField) || (!isReadOnlyOption && selectedFormField);
                search.style.display = displayMenu ? 'block' : 'none';
              }
            }
          } else if (args.ids[i] === 'formfield properties' && viewer.selectedItems.formFields.length !== 0) {
            search.style.display = 'block';
          }
        }
      }
    },

    lockAnnotations: function (args) {
      var viewer = this.$refs.pdfviewer.ej2Instances;
      for (var i = 0; i < viewer.annotationCollection.length; i++) {
        if (viewer.annotationCollection[i].uniqueKey === viewer.selectedItems.annotations[0].id) {
          viewer.annotationCollection[i].annotationSettings.isLock = true;
          viewer.annotationCollection[i].isCommentLock = true;
          viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
        }
        args.cancel = false;
      }
    },

    unlockAnnotations: function (args) {
      var viewer = this.$refs.pdfviewer.ej2Instances;
      for (var i = 0; i < viewer.annotationCollection.length; i++) {
        if (viewer.annotationCollection[i].uniqueKey === viewer.selectedItems.annotations[0].id) {
          viewer.annotationCollection[i].annotationSettings.isLock = false;
          viewer.annotationCollection[i].isCommentLock = false;
          viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
        }
        args.cancel = false;
      }
    },

    setReadOnlyTrue: function (args) {
      var viewer = this.$refs.pdfviewer.ej2Instances;
      var selectedFormFields = viewer.selectedItems.formFields;
      for (var i = 0; i < selectedFormFields.length; i++) {
        var selectedFormField = selectedFormFields[i];
        if (selectedFormField) {
          viewer.formDesignerModule.updateFormField(selectedFormField, {
            isReadOnly: true,
          });
        }
        args.cancel = false;
      }
    },

    setReadOnlyFalse: function (args) {
      var viewer = this.$refs.pdfviewer.ej2Instances;
      var selectedFormFields = viewer.selectedItems.formFields;
      for (var i = 0; i < selectedFormFields.length; i++) {
        var selectedFormField = selectedFormFields[i];
        if (selectedFormField) {
          viewer.formDesignerModule.updateFormField(selectedFormField, {
            isReadOnly: false,
          });
        }
        args.cancel = false;
      }
    },

    contextmenuHelper: function (args) {
      var viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.addCustomMenu(this.menuItems, enable.checked, position.checked);
    },
  }
};
</script>
{% endhighlight %}
{% highlight html tabtitle="Server-Backed" %}

<template>
  <div id="app">
      <ul>
        <ejs-checkbox label='Hide Default Context Menu' id="enable" @change="contextmenuHelper" checked="false"></ejs-checkbox>
        <ejs-checkbox label='Add Custom option at bottom' id="position" @change="contextmenuHelper" checked="false"></ejs-checkbox>
      </ul>
      <ejs-pdfviewer
        id="pdfViewer"
        ref="pdfviewer"
        :serviceUrl="serviceUrl"
        :documentPath="documentPath"
        :documentLoad="documentLoad"
        :customContextMenuBeforeOpen="customContextMenuBeforeOpen"
        :customContextMenuSelect="customContextMenuSelect" > 
      </ejs-pdfviewer>
  </div>
</template>
<script>
import { PdfViewerComponent, Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, 
         TextSelection, TextSearch, Annotation, FormFields, FormDesigner,PageOrganizer } from "@syncfusion/ej2-vue-pdfviewer";
import { MenuComponent } from "@syncfusion/ej2-vue-navigations";
import { CheckBoxComponent } from "@syncfusion/ej2-vue-buttons";

export default {
    components: {
        'ejs-pdfviewer': PdfViewerComponent,
        'ejs-menu': MenuComponent,
        'ejs-checkbox': CheckBoxComponent 
    },
    data: function() {
        return {
		  documentPath:'https://cdn.syncfusion.com/content/pdf/pdf-succinctly.pdf',
          serviceUrl:"https://services.syncfusion.com/vue/production/api/pdfviewer",
          menuItems : [
            {
                text: 'Search In Google',
                id: 'search_in_google',
                iconCss: 'e-icons e-search'
            },
            {
                text: 'Lock Annotation',
                iconCss: 'e-icons e-lock',
                id: 'lock_annotation'
            },
            {
                text: 'Unlock Annotation',
                iconCss: 'e-icons e-unlock',
                id: 'unlock_annotation'
            },
            {
                text: 'Lock Form Field',
                iconCss: 'e-icons e-lock',
                id: 'read_only_true'
            },
            {
                text: 'Unlock Form Field',
                iconCss: 'e-icons e-unlock',
                id: 'read_only_false'
            },
        ]
        }
    },
	provide: {
      PdfViewer: [Toolbar, Magnification, Navigation, LinkAnnotation, BookmarkView, ThumbnailView, Print, 
                  TextSelection, TextSearch, Annotation, FormFields, FormDesigner, PageOrganizer]
    },
    methods: {
    documentLoad: function (args) {
      var viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.addCustomMenu(this.menuItems, false, false);
    },
    customContextMenuSelect: function (args) {
      var viewer = this.$refs.pdfviewer.ej2Instances;
      switch (args.id) {
        case 'search_in_google':
          for (var i = 0; i < viewer.textSelectionModule.selectionRangeArray.length; i++) {
            var content = viewer.textSelectionModule.selectionRangeArray[i].textContent;
            if ((viewer.textSelectionModule.isTextSelection) && (/\S/.test(content))) {
              window.open('http://google.com/search?q=' + content);
            }
          }
          break;
        case 'lock_annotation':
          this.lockAnnotations(args);
          break;
        case 'unlock_annotation':
          this.unlockAnnotations(args);
          break;
        case 'read_only_true':
          this.setReadOnlyTrue(args);
          break;
        case 'read_only_false':
          this.setReadOnlyFalse(args);
          break;
        default:
          break;
      }
    },

    customContextMenuBeforeOpen: function (args) {
      var viewer = this.$refs.pdfviewer.ej2Instances;
      for (var i = 0; i < args.ids.length; i++) {
        var search = document.getElementById(args.ids[i]);
        if (search) {
          search.style.display = 'none';
          if (args.ids[i] === 'search_in_google' && (viewer.textSelectionModule) && viewer.textSelectionModule.isTextSelection) {
            search.style.display = 'block';
          } else if (args.ids[i] === "lock_annotation" || args.ids[i] === "unlock_annotation") {
            var isLockOption = args.ids[i] === "lock_annotation";
            for (var j = 0; j < viewer.selectedItems.annotations.length; j++) {
              var selectedAnnotation = viewer.selectedItems.annotations[j];
              if (selectedAnnotation && selectedAnnotation.annotationSettings) {
                var shouldDisplay = (isLockOption && !selectedAnnotation.annotationSettings.isLock) ||
                  (!isLockOption && selectedAnnotation.annotationSettings.isLock);
                search.style.display = shouldDisplay ? 'block' : 'none';
              }
            }
          } else if ((args.ids[i] === "read_only_true" || args.ids[i] === "read_only_false") && viewer.selectedItems.formFields.length !== 0) {
            var isReadOnlyOption = args.ids[i] === "read_only_true";
            for (var j = 0; j < viewer.selectedItems.formFields.length; j++) {
              var selectedFormFields = viewer.selectedItems.formFields[j];
              if (selectedFormFields) {
                var selectedFormField = viewer.selectedItems.formFields[j].isReadonly;
                var displayMenu = (isReadOnlyOption && !selectedFormField) || (!isReadOnlyOption && selectedFormField);
                search.style.display = displayMenu ? 'block' : 'none';
              }
            }
          } else if (args.ids[i] === 'formfield properties' && viewer.selectedItems.formFields.length !== 0) {
            search.style.display = 'block';
          }
        }
      }
    },

    lockAnnotations: function (args) {
      var viewer = this.$refs.pdfviewer.ej2Instances;
      for (var i = 0; i < viewer.annotationCollection.length; i++) {
        if (viewer.annotationCollection[i].uniqueKey === viewer.selectedItems.annotations[0].id) {
          viewer.annotationCollection[i].annotationSettings.isLock = true;
          viewer.annotationCollection[i].isCommentLock = true;
          viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
        }
        args.cancel = false;
      }
    },

    unlockAnnotations: function (args) {
      var viewer = this.$refs.pdfviewer.ej2Instances;
      for (var i = 0; i < viewer.annotationCollection.length; i++) {
        if (viewer.annotationCollection[i].uniqueKey === viewer.selectedItems.annotations[0].id) {
          viewer.annotationCollection[i].annotationSettings.isLock = false;
          viewer.annotationCollection[i].isCommentLock = false;
          viewer.annotation.editAnnotation(viewer.annotationCollection[i]);
        }
        args.cancel = false;
      }
    },

    setReadOnlyTrue: function (args) {
      var viewer = this.$refs.pdfviewer.ej2Instances;
      var selectedFormFields = viewer.selectedItems.formFields;
      for (var i = 0; i < selectedFormFields.length; i++) {
        var selectedFormField = selectedFormFields[i];
        if (selectedFormField) {
          viewer.formDesignerModule.updateFormField(selectedFormField, {
            isReadOnly: true,
          });
        }
        args.cancel = false;
      }
    },

    setReadOnlyFalse: function (args) {
      var viewer = this.$refs.pdfviewer.ej2Instances;
      var selectedFormFields = viewer.selectedItems.formFields;
      for (var i = 0; i < selectedFormFields.length; i++) {
        var selectedFormField = selectedFormFields[i];
        if (selectedFormField) {
          viewer.formDesignerModule.updateFormField(selectedFormField, {
            isReadOnly: false,
          });
        }
        args.cancel = false;
      }
    },

    contextmenuHelper: function (args) {
      var viewer = this.$refs.pdfviewer.ej2Instances;
      viewer.addCustomMenu(this.menuItems, enable.checked, position.checked);
    },
  }
};
</script>

{% endhighlight %}
{% endtabs %}

The following is the output of custom context menu with customization. 

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/pdfviewer/custom-context-menu/app.vue %}
{% endhighlight %}
{% endtabs %}

N> To set up the **server-backed PDF Viewer** in the app.Vue file, include the following `serviceUrl`:
**serviceUrl: "https://services.syncfusion.com/vue/production/api/pdfviewer"**
Within the `template`, configure the PDF Viewer by adding the `:serviceUrl="serviceUrl"` attribute inside the <div> element.

{% previewsample "page.domainurl/code-snippet/pdfviewer/custom-context-menu" %}

[View sample in GitHub](https://github.com/SyncfusionExamples/vue-pdf-viewer-examples/tree/master/How%20to/Customize%20context%20menu)