<template>
  <h3>Editor 1</h3>
  <ejs-richtexteditor v-model="editorContent"></ejs-richtexteditor>

  <h3>Editor 2</h3>
  <ejs-richtexteditor v-model="editorContent"></ejs-richtexteditor>
</template>

<script setup>
import {ref, provide } from "vue";  
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';

const editorContent = ref("Initial content");

// Automatically update content after 2 seconds
onMounted(() => {
  setTimeout(() => {
    editorContent.value = "Updated content after 2 seconds!";
  }, 2000);
});
provide('richtexteditor',  [Toolbar, Link, Image, HtmlEditor, QuickToolbar]);
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