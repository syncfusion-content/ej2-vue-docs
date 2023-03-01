---
layout: post
title: Get the selected content in Vue Document editor component | Syncfusion
description: Learn here all about Get the selected content in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Get the selected content 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Get the selected content in Vue Document editor component

You can get the selected content from the Vue Document Editor component as plain text and SFDT (rich text).

## Get the selected content as plain text

You can use [`text`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/selection/#text-code-classlanguage-textstringcode) API to get the selected content as plain text from Vue Document Editor component.

The following example code illustrates how to add search in google option in context menu for the selected text.

```
<template>
    <div id="app">
      <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' v-on:created="onCreated" height="590px" id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
    </div>
</template>
<script>
  import Vue from 'vue';
  import { DocumentEditorContainerPlugin, DocumentEditorContainerComponent,Toolbar} from '@syncfusion/ej2-vue-documenteditor';

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
      handleCustomMenuSelect: function (args) {
        var documentEditor = this.$refs.container.ej2Instances.documentEditor;
        // custom Options Functionality
        let id = documentEditor.element.id;
        switch (args.id) {
          case id + 'search_in_google':
            var searchContent = documentEditor.selection.text;
            if (!documentEditor.selection.isEmpty && /\S/.test(searchContent)) {
              window.open('http://google.com/search?q=' + searchContent);
            }
            break;
        }
      },
      onCreated: function () {
        var obj = this.$refs.container.ej2Instances.documentEditor;
        var menuItems = [
          {
            text: 'Search In Google',
            id: 'search_in_google',
            iconCss: 'e-icons e-de-ctnr-find',
          },
        ];
        // adding Custom Options
        obj.contextMenu.addCustomMenu(menuItems, false);
        // custom Options Select Event
        obj.customContextMenuSelect = (args) => {
          this.handleCustomMenuSelect(args);
        };
      },
    }
  };
</script>
```

You can add the following custom options using this API,

* Save or export the selected text as text file.
* Search the selected text in Google or other search engines.
* Show synonyms for the selected word in context menu and replace with selected synonym using the setter method of same API.

## Get the selected content as SFDT (rich text)

You can use [`sfdt`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/selection/#sfdt-code-classlanguage-textstringcode) API to get the selected content as plain text from Vue Document Editor component.

The following example code illustrates how to get the content of a bookmark and export it as SFDT.

```
<template>
    <div id="app">
      <ejs-documenteditorcontainer ref='container' :serviceUrl='serviceUrl' v-on:created="onCreated" height="590px" id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
    </div>
</template>
<script>
  import Vue from 'vue';
  import { DocumentEditorContainerPlugin, DocumentEditorContainerComponent,Toolbar} from '@syncfusion/ej2-vue-documenteditor';

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
      onCreated: function () {
        var obj = this.$refs.container.ej2Instances.documentEditor;
        // To insert text in cursor position
        obj.editor.insertText('Document editor');
        // To select all the content in document
        obj.selection.selectAll();
        // Insert bookmark to selected content
        obj.editor.insertBookmark('Bookmark1');
        //Select the bookmark
        obj.selection.selectBookmark('Bookmark1');
        // To get the selected content as sfdt
        let selectedContent = obj.selection.sfdt;
        // Insert the sfdt content in cursor position using paste API
        obj.editor.paste(selectedContent);
      }
    }
  };
</script>
```

You can add the following custom options using this API,

* Save or export the selected content as SFDT file.
* Get the content of a bookmark in Word document as SFDT by selecting a bookmark using [`selectbookmark`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/selection/#selectbookmark) API.
* Create template content that can be inserted to multiple documents in cursor position using [`paste`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/editor/#paste) API.