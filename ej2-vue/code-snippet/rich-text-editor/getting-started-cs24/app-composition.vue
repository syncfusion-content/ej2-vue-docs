<template>
  <ejs-richtexteditor ref="defaultRTE" :height="200" placeholder="Type Something">
  </ejs-richtexteditor>
</template>
<script setup>
import { provide } from "vue";  
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';
provide('richtexteditor', [Toolbar, Link, Image, HtmlEditor, QuickToolbar]);
</script>

<style>
.e-richtexteditor .rte-placeholder {
    font-family: monospace;
  }
@import "https://ej2.syncfusion.com/vue/documentation/../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/tailwind3.css";
</style>