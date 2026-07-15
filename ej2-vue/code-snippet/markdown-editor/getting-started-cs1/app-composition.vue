<template>
        <ejs-richtexteditor editorMode="Markdown"></ejs-richtexteditor>
</template>

<script setup>
import { provide } from "vue";
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, Link, Table, Image, MarkdownEditor } from '@syncfusion/ej2-vue-richtexteditor';

provide('richtexteditor', [Toolbar, Link, Image, Table, MarkdownEditor]);
</script>

<style>
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.css';
</style>