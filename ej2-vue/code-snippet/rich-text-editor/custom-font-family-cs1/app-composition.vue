<template>
  <ejs-richtexteditor ref="defaultRTE" :height="340" :toolbarSettings="toolbarSettings" :fontFamily="fontFamily">
  </ejs-richtexteditor>
</template>

<script setup>
import { provide } from "vue";
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';
const toolbarSettings = {
  items: ['FontName', 'FontSize']
};
const fontFamily = {
  default: 'Segoe UI',
  width: '60px',
  items: [
    { text: 'Segoe UI', value: 'Segoe UI' },
    { text: 'Arial', value: 'Arial,Helvetica,sans-serif' },
    { text: 'Courier New', value: 'Courier New,Courier,monospace' },
    { text: 'Georgia', value: 'Georgia,serif' },
    { text: 'Impact', value: 'Impact,Charcoal,sans-serif' },
    { text: 'Calibri Light', value: 'CalibriLight' }
  ]
};
const fontSize = {
  default: '10 pt',
  width: '40px',
  items: [
    { text: '8 pt', value: '8pt' },
    { text: '10 pt', value: '10pt' },
    { text: '12 pt', value: '12pt' },
    { text: '14 pt', value: '14pt' },
    { text: '42 pt', value: '42pt' }
  ]
};
provide('richtexteditor', [Toolbar, Link, Image, HtmlEditor, QuickToolbar]);
</script>

<style>
@import "https://ej2.syncfusion.com/vue/documentation/../node_modules/@syncfusion/ej2-vue-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-lists/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-splitbuttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";</style>