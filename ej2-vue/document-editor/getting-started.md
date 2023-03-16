---
layout: post
title: Getting started with Vue Document editor component | Syncfusion
description:  Checkout and learn about Getting started with Vue Document editor component of Syncfusion Essential JS 2 and more details.
control: Getting started 
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Getting Started

This section explains the steps to create a Word document editor within your application and demonstrates the basic usage of the Document Editor component.

## Prerequisites

[System requirements for Syncfusion Vue UI components](https://ej2.syncfusion.com/vue/documentation/system-requirements/)

## Dependencies

The list of dependencies required to use the Document Editor component in your application is given below:

```javascript
|-- @syncfusion/ej2-vue-documenteditor
|-- @syncfusion/ej2-vue-base
    |-- @syncfusion/ej2-documenteditor
    |-- @syncfusion/ej2-base
    |-- @syncfusion/ej2-buttons
    |-- @syncfusion/ej2-compression
    |-- @syncfusion/ej2-data
    |-- @syncfusion/ej2-dropdowns
    |-- @syncfusion/ej2-file-utils
    |-- @syncfusion/ej2-inputs
    |-- @syncfusion/ej2-lists
    |-- @syncfusion/ej2-navigations
    |-- @syncfusion/ej2-popups
    |-- @syncfusion/ej2-splitbuttons
    |-- @syncfusion/ej2-charts
```

### Server side dependencies

The Document Editor component requires server-side interactions for the following operations:

* [Open file formats other than SFDT](../document-editor/import#convert-word-documents-into-sfdt)
* [Paste with formatting](../document-editor/clipboard#paste-with-formatting)
* [Restrict editing](../document-editor/document-management)
* [Spellcheck](../document-editor/spell-check)
* [Save as file formats other than SFDT and DOCX](../document-editor/server-side-export)

>Note: If you don't require the above functionalities then you can deploy as pure client-side component without any server-side interactions.

To know about server-side dependencies, please refer this [page](../document-editor/web-services).

## Get Started with Vue CLI

You can use [`Vue CLI`](https://github.com/vuejs/vue-cli/) to setup your vue applications.

To install Vue CLI use the following command.

```bash
npm install -g @vue/cli
```

Start a new project using below Vue CLI command.

```bash
vue init webpack-simple quickstart

cd quickstart
npm install
```

## Adding Syncfusion packages

All the available Essential JS 2 packages are published in [`npmjs.com`](https://www.npmjs.com/~syncfusionorg/) registry.
You can choose the component that you want to install. For this application, we are going to use Document Editor component.

To install Document Editor component, use the following command

```bash
npm install @syncfusion/ej2-vue-documenteditor
```

## Adding CSS Reference

Add Document editor component’s styles as given below in `<style>` section of the `App.vue` file.

```
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/material.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-dropdowns/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
```

> Document editor has different themes, please refer to [Supported themes](../appearance/theme) section.

## Adding Component

You can add `DocumentEditorContainer` component with predefined toolbar and properties pane options or `DocumentEditor` component with customize options.

> Starting from `v19.3.0.x`, we have optimized the accuracy of text size measurements such as to match Microsoft Word pagination for most Word documents. This improvement is included as default behavior along with an optional API [to disable it and retain the document pagination behavior of older versions](../document-editor/how-to/disable-optimized-text-measuring).

### DocumentEditor Component

Document Editor Component is used to create,  view and edit word documents. In this, you can customize the UI options based on your requirements to modify the document.

#### Registering DocumentEditor Component

You can register the Document Editor component in your application by using the `Vue.use()`.

Refer to the code example given below.

```ts
import { DocumentEditorPlugin } from '@syncfusion/ej2-vue-documenteditor';

Vue.use(DocumentEditorPlugin);
```

> Registering `DocumentEditorPlugin` in vue, will register the Document Editor component along with its required child directives globally.

#### Adding DocumentEditor Component

Add the Vue Document Editor by using `<ejs-documenteditor>` selector in `<template>` section of the `App.vue` file.

```
<template>
    <div id="app">
          <ejs-documenteditor :serviceUrl='serviceUrl' :isReadOnly='false' :enablePrint='true' :enableSfdtExport='true' :enableSelection='true' :enableContextMenu='true' :enableSearch='true' :enableOptionsPane='true' :enableWordExport='true' :enableTextExport='true' :enableEditor='true' :enableImageResizer='true' :enableEditorHistory='true' :enableHyperlinkDialog='true' :enableTableDialog='true' :enableBookmarkDialog='true' :enableTableOfContentsDialog='true' :enablePageSetupDialog='true' :enableStyleDialog='true' :enableListDialog='true' :enableParagraphDialog='true' :enableFontDialog='true' :enableTablePropertiesDialog='true' :enableBordersAndShadingDialog='true' :enableTableOptionsDialog='true' height="370px"> </ejs-documenteditor>
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
      }
    }
  }
</script>
```

> The Document Editor requires server-side interactions for the following operations:
>
> * Paste with formatting
> * Restrict editing
> * Spell check
>
> Refer to this [link](https://github.com/SyncfusionExamples/EJ2-DocumentEditor-WebServices) to configure the web service and set the [serviceUrl](https://ej2.syncfusion.com/vue/documentation/api/document-editor#serviceurl).

#### Run the DocumentEditor application

The Vue Document Editor application is configured to compile and run the application in a browser. Use the following command to run the application.

```bash
npm run dev
```

Output will be displayed as follows.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/document-editor/getting-started-cs2/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/getting-started-cs2" %}

### DocumentEditorContainer Component

DocumentEditorContainer Component is also used to create, view and edit word document. But here, you can use predefined toolbar and properties pane to view and modify word document.

#### Registering DocumentEditorContainer Component

You can register the DocumentEditorContainer component in your application by using the `Vue.use()`.

Refer to the code example given below.

```ts
import { DocumentEditorContainerPlugin } from '@syncfusion/ej2-vue-documenteditor';

Vue.use(DocumentEditorContainerPlugin);
```

> Registering `DocumentEditorContainerPlugin` in vue, will register the DocumentEditorContainer component along with its required child directives globally.

#### Adding DocumentEditorContainer Component

Add the Vue DocumentEditorContainer by using `<ejs-documenteditorcontainer>` selector in `<template>` section of the `App.vue` file.

```
<template>
    <div id="app">
        <ejs-documenteditorcontainer height="590px" :serviceUrl='serviceUrl' :enableToolbar='true'> </ejs-documenteditorcontainer>
    </div>
</template>

<script>
  import Vue from 'vue';
  import { DocumentEditorContainerPlugin, DocumentEditorContainerComponent,Toolbar } from '@syncfusion/ej2-vue-documenteditor';

  Vue.use(DocumentEditorContainerPlugin);
  export default {
    data(){
      return { serviceUrl:'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/' }
    },
    provide: {
      //Inject require modules.
      DocumentEditorContainer: [Toolbar]
    }
  }
</script>
```

#### Run the DocumentEditorContainer application

The Vue DocumentEditorContainer application is configured to compile and run the application in a browser. Use the following command to run the application.

```bash
npm run dev
```

DocumentEditorContainer output will be displayed as follows.

{% tabs %}
{% highlight html tabtitle="app.vue" %}
{% include code-snippet/document-editor/getting-started-cs3/app.vue %}
{% endhighlight %}
{% endtabs %}
        
{% previewsample "page.domainurl/code-snippet/document-editor/getting-started-cs3" %}

## Frequently Asked Questions

* [How to localize the Documenteditor container](../document-editor/global-local).
* [How to load the document by default](../document-editor/how-to/open-default-document).
* [How to customize tool bar](../document-editor/how-to/customize-tool-bar).
* [How to resize Document editor component](../document-editor/how-to/resize-document-editor).