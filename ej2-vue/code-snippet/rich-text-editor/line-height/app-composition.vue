<template>
  <ejs-richtexteditor ref="defaultRTE" :value="rteValue" :toolbarSettings="toolbarSettings" ></ejs-richtexteditor>
</template>

<script setup>
import { provide } from "vue";
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';

const toolbarSettings = {
  items: ['LineHeight']
};
const rteValue= `<p>The Rich Text Editor allows users to apply line-height (line-spacing) to elements like paragraphs, lists, headings, and table cells. You can set line height using a dedicated dropdown in the toolbar, and it is applied as inline style to the selected blocks. This feature makes text easier to read and gives better control over content layout.</p><p><b> Key features:</b></p> <ul> <li><p>Provides a <b>Line Height</b> dropdown in the toolbar for easy access.</p></li><li><p>Supports applying line-height to paragraphs, headings, lists, and table cells.</p></li><li><p>Applies line-height as inline styles for consistent and precise text rendering.</p></li><li><p>Ensures consistent appearance across devices and print layouts.</p></li><li><p>Improves text readability and overall document aesthetics.</p></li></ul>`,
provide('richtexteditor', [Toolbar, Link, Image, HtmlEditor, QuickToolbar]);
</script>

<style>
@import "https://ej2.syncfusion.com/vue/documentation/../node_modules/@syncfusion/ej2-vue-base/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-vue-lists/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-vue-navigations/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-vue-popups/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-vue-splitbuttons/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-vue-buttons/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-vue-inputs/styles/tailwind3.css";
</style>