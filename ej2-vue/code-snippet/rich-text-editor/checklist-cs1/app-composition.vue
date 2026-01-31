<template>
<div>
    <div class="control-section">
        <div class="sample-container">
            <div class="default-section">
            <ejs-richtexteditor ref="rteObj" :height="340" :toolbarSettings="toolbarSettings"></ejs-richtexteditor>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import { provide } from 'vue';
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar, Table, CodeBlock } from "@syncfusion/ej2-vue-richtexteditor";

const toolbarSettings = {
    items: ['Checklist', 'Bold', 'Italic', 'StrikeThrough', '|', 'Formats', 'Alignments', 'Blockquote', 'OrderedList',
      'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode', 'Undo', 'Redo']
};
provide('richtexteditor', [Toolbar, Link, Image, HtmlEditor, QuickToolbar, Table, CodeBlock]);
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