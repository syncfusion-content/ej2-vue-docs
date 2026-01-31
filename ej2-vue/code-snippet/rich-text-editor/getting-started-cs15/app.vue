<template>
  <div>
    <ejs-richtexteditor ref="defaultRTE" :placeholder="placeholder">
    </ejs-richtexteditor>
  </div>
  <style>
    .e-richtexteditor .e-rte-placeholder {
      font-family: monospace;
      color: deeppink;
    }
  </style>
</template>

<script>
import { RichTextEditorComponent, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';
export default {
  name: "App",
  components: {
    "ejs-richtexteditor": RichTextEditorComponent
  },

  data() {
    return {
      placeholder: "Type Something",
    }
  },
  provide: {
    richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar]
  }
}
</script>

<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/tailwind3.css";
</style>