<template>
  <ejs-richtexteditor ref="defaultRTE" :height="340" :toolbarSettings="toolbarSettings" :fontFamily="fontFamily"
    :fontSize="fontSize">
    <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user
      experience to create and update the content. Users can format their content using standard toolbar commands.</p>
    <p><b>Key features:</b></p>
    <ul>
      <li>
        <p>Provides IFRAME and DIV modes</p>
      </li>
      <li>
        <p>Capable of handling markdown editing.</p>
      </li>
      <li>
        <p>Contains a modular library to load the necessary functionality on demand.</p>
      </li>
      <li>
        <p>Provides a fully customizable toolbar.</p>
      </li>
      <li>
        <p>Provides HTML view to edit the source directly for developers.</p>
      </li>
      <li>
        <p>Supports third-party library integration.</p>
      </li>
      <li>
        <p>Allows preview of modified content before saving it.</p>
      </li>
      <li>
        <p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p>
      </li>
    </ul>
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