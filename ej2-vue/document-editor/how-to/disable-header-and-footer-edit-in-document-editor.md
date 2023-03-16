---
layout: post
title: Disable header and footer edit in document editor in Vue Document editor component | Syncfusion
description: Learn here all about Disable header and footer edit in document editor in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Disable header and footer edit in document editor 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Disable header and footer edit in document editor in Vue Document editor component

## Disable header and footer edit in DocumentEditorContainer instance

You can use [`restrictEditing`](https://ej2.syncfusion.com/vue/documentation/api/document-editor-container/#restrictediting) property to disable header and footer editing based on selection context type.

RestrictEditing allows you to restrict the document modification and makes the Document read only mode. So, by using this property, and if selection inside header or footer, you can set this property as true.

The following example code illustrates how to header and footer edit in `DocumentEditorContainer` instance.

```
<template>
  <div id="app">
    <ejs-documenteditorcontainer
      ref="container"
      :serviceUrl="serviceUrl"
      height="590px"
      id="container"
      :enableToolbar="true"
      v-on:selectionChange="selectionChanged.bind(this)"
    ></ejs-documenteditorcontainer>
  </div>
</template>
<script>
  import Vue from 'vue';
  import {
    DocumentEditorContainerPlugin,
    DocumentEditorContainerComponent,
    Toolbar,
  } from '@syncfusion/ej2-vue-documenteditor';

  Vue.use(DocumentEditorContainerPlugin);

  export default {
    data() {
      return {
        serviceUrl:
          'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/',
      };
    },
    provide: {
      //Inject require modules.
      DocumentEditorContainer: [Toolbar],
    },
    methods: {
      selectionChanged: function () {
        // Check whether selection is in header
        if (this.$refs.container.ej2Instances.documentEditor.selection.contextType.indexOf('Header') > -1 ||
          // Check whether selection is in Footer
          this.$refs.container.ej2Instances.documentEditor.selection.contextType.indexOf('Footer') > -1 ) {
          // Change the document to read only mode
          this.$refs.container.ej2Instances.restrictEditing = true;
        } else {
          // Change the document to editable mode
          this.$refs.container.ej2Instances.restrictEditing = false;
        }
      }
    }
  };
</script>
```

Otherwise, you can disable clicking inside Header or Footer by using [`closeHeaderFooter`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/selection/#closeheaderfooter) API in selection module.

The following example code illustrates how to close header and footer when selection is inside header or footer in `DocumentEditorContainer` instance.

```
<template>
  <div id="app">
    <ejs-documenteditorcontainer
      ref="container"
      :serviceUrl="serviceUrl"
      height="590px"
      id="container"
      :enableToolbar="true"
      v-on:selectionChange="selectionChanged.bind(this)"
    ></ejs-documenteditorcontainer>
  </div>
</template>
<script>
  import Vue from 'vue';
  import {
    DocumentEditorContainerPlugin,
    DocumentEditorContainerComponent,
    Toolbar,
  } from '@syncfusion/ej2-vue-documenteditor';

  Vue.use(DocumentEditorContainerPlugin);

  export default {
    data() {
      return {
        serviceUrl:
          'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/',
      };
    },
    provide: {
      //Inject require modules.
      DocumentEditorContainer: [Toolbar],
    },
    methods: {
      selectionChanged: function () {
        // Check whether selection is in header
        if (this.$refs.container.ej2Instances.documentEditor.selection.contextType.indexOf('Header') > -1 ||
          // Check whether selection is in Footer
          this.$refs.container.ej2Instances.documentEditor.selection.contextType.indexOf('Footer') > -1 ) {
          // Close header Footer
          this.$refs.container.ej2Instances.documentEditor.selection.closeHeaderFooter();
        }
      }
    }
  };
</script>
```

## Disable header and footer edit in DocumentEditor instance

Like restrictEditing, you can use [`isReadOnly`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/#isreadonly) property in Document editor to disable header and footer edit.

The following example code illustrates how to header and footer edit in `DocumentEditor` instance.

```
<template>
    <div id="app">
          <ejs-documenteditor :serviceUrl='serviceUrl' ref='documentEditor' :isReadOnly='false' :enablePrint='true' :enableSfdtExport='true' :enableSelection='true' :enableContextMenu='true' :enableSearch='true' :enableOptionsPane='true' :enableWordExport='true' :enableTextExport='true' :enableEditor='true' :enableImageResizer='true' :enableEditorHistory='true' :enableHyperlinkDialog='true' :enableTableDialog='true' :enableBookmarkDialog='true' :enableTableOfContentsDialog='true' :enablePageSetupDialog='true' :enableStyleDialog='true' :enableListDialog='true' :enableParagraphDialog='true' :enableFontDialog='true' :enableTablePropertiesDialog='true' :enableBordersAndShadingDialog='true' :enableTableOptionsDialog='true' height="370px" v-on:selectionChange="selectionChanged.bind(this)"> </ejs-documenteditor>
    </div>
</template>

<script>
  import Vue from 'vue';
  import { DocumentEditorPlugin, DocumentEditorComponent, Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog } from '@syncfusion/ej2-vue-documenteditor';
  Vue.use(DocumentEditorPlugin);
  export default {
    data () {
      return {
        serviceUrl:'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/'
      },
      provide: {
        //Inject require modules.
        DocumentEditor: [Print, SfdtExport, WordExport, TextExport, Selection, Search, Editor, ImageResizer, EditorHistory, ContextMenu, OptionsPane, HyperlinkDialog, TableDialog, BookmarkDialog, TableOfContentsDialog, PageSetupDialog, StyleDialog, ListDialog, ParagraphDialog, BulletsAndNumberingDialog, FontDialog, TablePropertiesDialog, BordersAndShadingDialog, TableOptionsDialog, CellOptionsDialog, StylesDialog]
      },
      methods: {
      selectionChanged: function () {
      // Check whether selection is in header
        if (this.$refs.documentEditor.ej2Instances.selection.contextType.indexOf('Header') > -1 ||
        // Check whether selection is in Footer
        this.$refs.documentEditor.ej2Instances.selection.contextType.indexOf('Footer') > -1) {
          // Change the document to read only mode
          this.$refs.documentEditor.ej2Instances.isReadOnly = true;
        } else {
          // Change the document to editable mode
          this.$refs.documentEditor.ej2Instances.isReadOnly = false;
        }
      }
    }
  }
</script>
```
