---
layout: post
title: Retrieve the bookmark content as text in Vue Document editor component | Syncfusion
description: Learn here all about Retrieve the bookmark content as text in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Retrieve the bookmark content as text 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Retrieve the bookmark content as text in Vue Document editor component

You can get the bookmark or whole document content from the Vue Document Editor component as plain text and SFDT (rich text).

## Get the bookmark content as plain text

You can [`selectBookmark`](../../document-editor/bookmark#select-bookmark) API to navigate to the bookmark and use [`text`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/selection/#text-code-classlanguage-textstringcode) API to get the bookmark content as plain text from Vue Document Editor component.

The following example code illustrates how to get the bookmark content as plain text.

```
<template>
  <div id="app">
    <ejs-documenteditorcontainer
      ref="container"
      :serviceUrl="serviceUrl"
      height="590px"
      id="container"
      :enableToolbar="true"
      v-on:created="onCreated.bind(this)"
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
      onCreated: function () {
        // To insert text in cursor position
        this.$refs.container.ej2Instances.documentEditor.editor.insertText('Document editor');
        // To select all the content in document
        this.$refs.container.ej2Instances.documentEditor.selection.selectAll();
        // Insert bookmark to selected content
        this.$refs.container.ej2Instances.documentEditor.editor.insertBookmark('Bookmark1');

        // Provide your bookmark name to navigate to specific bookmark
        this.$refs.container.ej2Instances.documentEditor.selection.selectBookmark('Bookmark1');

        // To get the selected content as text
        let selectedContent = this.$refs.container.ej2Instances.documentEditor.selection.text;
      }
    }
  };
</script>
```

To get the bookmark content as SFDT (rich text), please check this [`link`](../../document-editor/how-to/get-the-selected-content/#get-the-selected-content-as-sfdt-rich-text)

## Get the whole document content as text

You can use [`text`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/selection/#text-code-classlanguage-textstringcode) API to get the whole document content as plain text from Vue Document Editor component.

The following example code illustrates how to get the whole document content as plain text.

```
<template>
  <div id="app">
    <ejs-documenteditorcontainer
      ref="container"
      :serviceUrl="serviceUrl"
      height="590px"
      id="container"
      :enableToolbar="true"
      v-on:created="onCreated.bind(this)"
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
      onCreated: function () {
        // To insert text in cursor position
        this.$refs.container.ej2Instances.documentEditor.editor.insertText('Document editor');
        // To select all the content in document
        this.$refs.container.ej2Instances.documentEditor.selection.selectAll();

        // To get the content as text
        let selectedContent = this.$refs.container.ej2Instances.documentEditor.selection.text;
      }
    }
  };
</script>
```

## Get the whole document content as SFDT(rich text)

You can use [`serialize`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/#serialize) API to get the whole document content as SFDT string from Vue Document Editor component.

The following example code illustrates how to get the whole document content as SFDT.

```
<template>
  <div id="app">
    <ejs-documenteditorcontainer
      ref="container"
      :serviceUrl="serviceUrl"
      height="590px"
      id="container"
      :enableToolbar="true"
      v-on:created="onCreated.bind(this)"
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
      onCreated: function () {
        // To insert text in cursor position
        this.$refs.container.ej2Instances.documentEditor.editor.insertText('Document editor');

        // To get the content as SFDT
        let selectedContent: string = this.$refs.container.ej2Instances.documentEditor.serialize();
      }
    }
  };
</script>
```

## Get the header content as text

You can use [`goToHeader`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/selection/#gotoheader) API to navigate the selection to the header and then use [`text`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/selection/#text-code-classlanguage-textstringcode) API to get the content as plain text.

The following example code illustrates how to get the header content as plain text.

```
<template>
  <div id="app">
    <ejs-documenteditorcontainer
      ref="container"
      :serviceUrl="serviceUrl"
      height="590px"
      id="container"
      :enableToolbar="true"
      v-on:created="onCreated.bind(this)"
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
      onCreated: function () {
        // To navigate the selection to header
        this.$refs.container.ej2Instances.documentEditor.selection.goToHeader();
        // To insert text in cursor position
        this.$refs.container.ej2Instances.documentEditor.editor.insertText('Document editor');
        // To select all the content in document
        this.$refs.container.ej2Instances.documentEditor.selection.selectAll();

        // To get the selected content as text
        let selectedContent = this.$refs.container.ej2Instances.documentEditor.selection.text;
      }
    }
  };
</script>
```

Similarly, you can use [`goToFooter`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/selection/#gotofooter) API to navigate the selection to the footer and then use [`text`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/selection/#text-code-classlanguage-textstringcode) API to get the content as plain text.