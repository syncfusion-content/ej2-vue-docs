<template>
  <ejs-richtexteditor :toolbarSettings="toolbarSettingsData" :value="rteValue" :fileManagerSettings="fileManagerSettingsData">
  </ejs-richtexteditor>
</template>

<script>
import { RichTextEditorComponent, Toolbar, Link, Image, HtmlEditor, QuickToolbar, FileManager } from '@syncfusion/ej2-vue-richtexteditor';

export default {
    name: "App",
    components: {
      "ejs-richtexteditor":RichTextEditorComponent
    },
    data() {
      return {
        rteValue: `<p>The Syncfusion Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here.</p><p><b>Key features:</b></p><ul><li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes.</p></li><li><p>Bulleted and numbered lists.</p></li><li><p>Handles images, hyperlinks, videos, hyperlinks, uploads, etc.</p></li><li><p>Contains undo/redo manager. </p></li></ul><div style='display: inline-block; width: 60%; vertical-align: top; cursor: auto;'><img alt='Sky with sun' src='https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png' width='309' style='min-width: 10px; min-height: 10px; width: 309px; height: 174px;' class='e-rte-image e-imginline e-rte-drag-image' height='174' /></div>`,
        toolbarSettingsData: {
          items: ['FileManager']
        },
        fileManagerSettingsData: {
          enable: true,
          path: '/Pictures/Food',
          ajaxSettings: {
              url: 'https://ej2-aspcore-service.azurewebsites.net/api/FileManager/FileOperations',
              getImageUrl: 'https://ej2-aspcore-service.azurewebsites.net/api/FileManager/GetImage',
              uploadUrl: 'https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Upload',
              downloadUrl: 'https://ej2-aspcore-service.azurewebsites.net/api/FileManager/Download'
          }
        }
      }
    },
    provide: {
      richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar, FileManager]
    }
  }
</script>

<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-layouts/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-grids/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-filemanager/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/tailwind3.css";
</style>