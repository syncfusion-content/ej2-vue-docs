<template>
  <div>
    <ejs-richtexteditor></ejs-richtexteditor>
  </div>
</template>
<script setup>
import { provide } from 'vue';
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, Link, Count, Image, HtmlEditor, QuickToolbar } from "@syncfusion/ej2-vue-richtexteditor";
provide('richtexteditor', [Toolbar, Link, Count, Image, HtmlEditor, QuickToolbar]);
</script>
