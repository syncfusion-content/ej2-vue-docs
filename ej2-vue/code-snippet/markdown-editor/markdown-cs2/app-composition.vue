<template>
  <ejs-richtexteditor ref="defaultRTE" :placeholder="placeholder" editorMode="Markdown" :formatter="formatter" :value="rteValue">
  </ejs-richtexteditor>
</template>

<script setup>
import { provide } from "vue";
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, Link, Image, MarkdownEditor, MarkdownFormatter } from '@syncfusion/ej2-vue-richtexteditor';
const customHTMLModel = {
  keyConfig: {
    'insert-link': 'ctrl+q', // confite the desired key
  }
}
const rteValue = `In Rich Text Editor, you click the toolbar buttons to format the words and the changes are visible immediately. Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words and phrases should look different from each other. Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text. You can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/). The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content.`,
const placeholder = "Type Something";
const formatter = new MarkdownFormatter(customHTMLModel); // to configure custom key
provide('richtexteditor', [Toolbar, Link, Image, MarkdownEditor]);
</script>

<style>
@import 'https://ej2.syncfusion.com/vue/documentation./node_modules/@syncfusion/ej2/material.css';
</style>