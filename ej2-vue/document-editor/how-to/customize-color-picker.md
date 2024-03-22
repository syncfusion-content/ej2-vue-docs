---
layout: post
title: Customize color picker in Vue Document editor | Syncfusion
description: Learn here all about Customize color picker in Syncfusion Vue Document editor component of Syncfusion Essential JS 2 and more.
control: Customize color picker
platform: ej2-vue
documentation: ug
domainurl: ##DomainURL##
---

# Customize color picker in Vue Document editor component

Document editor provides an options to customize the color picker using [`colorPickerSettings`](https://ej2.syncfusion.com/vue/documentation/api/document-editor/documentEditorSettingsModel/#colorpickersettings)in the document editor settings. The color picker offers customization options for default appearance, by allowing selection between Picker or Palette mode, for font and border colors."

Similarly, you can use [`documentEditorSettings`](https://ej2.syncfusion.com/vue/documentation/api/document-editor#documenteditorsettings) property for DocumentEditor also.

The following example code illustrates how to Customize the color picker in Document editor container.

```
<template>
    <div id="app">
      <ejs-documenteditorcontainer ref='documenteditor' :serviceUrl='serviceUrl' :documentEditorSettings='settings' height="590px" id='container' :enableToolbar='true'></ejs-documenteditorcontainer>
    </div>
</template>
<script>
  import Vue from 'vue';
  import { DocumentEditorContainerPlugin, DocumentEditorContainerComponent,Toolbar} from '@syncfusion/ej2-vue-documenteditor';

  Vue.use(DocumentEditorContainerPlugin);

  export default {
    data() {
      return { serviceUrl:'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/',
      settings:{ colorPickerSettings: { mode: 'Palette', modeSwitcher: true, showButtons: true } } };
    },
    provide: {
      //Inject require modules.
      DocumentEditorContainer: [Toolbar]
    }
  }
</script>
```

| Property | Behaviour |
|---|---|
| columns | It is used to render the ColorPicker palette with specified columns. Defaults to 10 |
| disabled | It is used to enable / disable ColorPicker component. If it is disabled the ColorPicker popup won’t open. Defaults to false |
| mode | It is used to render the ColorPicker with the specified mode. Defaults to ‘Picker’ |
| modeSwitcher | It is used to show / hide the mode switcher button of ColorPicker component. Defaults to true |
| showButtons | It is used to show / hide the control buttons (apply / cancel) of ColorPicker component. Defaults to true |
