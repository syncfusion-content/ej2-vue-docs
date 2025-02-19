<template>
  <ejs-richtexteditor :height="350" :editorMode="editorMode" :value="value">
  </ejs-richtexteditor>
</template>

<script>
import { RichTextEditorComponent, Toolbar, Link, Image, MarkdownEditor } from '@syncfusion/ej2-vue-richtexteditor';
export default {
  name: "App",
  components: {
    "ejs-richtexteditor": RichTextEditorComponent
  },
  data() {
    return {
      editorMode: 'Markdown',
      value: `***Overview***
              The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor used to create and edit the content and return valid HTML markup or markdown (MD) of the content. The editor provides a standard toolbar to format content using its commands. Modular library features to load the necessary functionality on demand. The toolbar contains commands to align the text, insert link, insert image, insert list, undo/redo operation, HTML view, and more.

              ***Key features***
              - *Mode*: Provides IFRAME and DIV mode.
              - *Module*: Modular library to load the necessary functionality on demand.
              - *Toolbar*: Provide a fully customizable toolbar.
              - *Editing*: HTML view to edit the source directly for developers.
              - *Third-party Integration*: Supports to integrate third-party library.
              - *Preview*: Preview the modified content before saving it.
              - *Tools*: Handling images, hyperlinks, video, uploads and more.
              - *Undo and Redo*: Undo/redo manager.
              - *Lists*:Creates bulleted and numbered list.`
    }
  },

  provide: {
    richtexteditor: [Toolbar, Link, Image, MarkdownEditor]
  }
}
</script>

<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";
</style>