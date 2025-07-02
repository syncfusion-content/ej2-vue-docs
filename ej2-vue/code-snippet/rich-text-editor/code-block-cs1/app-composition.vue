<template>
<div>
    <div class="control-section">
        <div class="sample-container">
            <div class="default-section">
            <ejs-richtexteditor ref="rteObj" :value="rteValue" :height="340" :toolbarSettings="toolbarSettings" :codeBlockSettings="codeBlockSettings" :placeholder="placeholder"></ejs-richtexteditor>
            </div>
        </div>
    </div>
</div>
</template>

<script setup>
import { provide } from 'vue';
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar, Table, CodeBlock } from "@syncfusion/ej2-vue-richtexteditor";

const toolbarSettings = {
    items: ['Undo', 'Redo', '|', 'CodeBlock', '|', 'Bold', 'Italic', 'Underline', 'StrikeThrough', 'InlineCode', '|', 'CreateLink', 'Image', 'CreateTable', 'Blockquote', '|', 'BulletFormatList', 'NumberFormatList', '|', 'Formats', 'Alignments', '|', 'Outdent', 'Indent', '|',
                        'FontColor', 'BackgroundColor', 'FontName', 'FontSize', '|', 'LowerCase', 'UpperCase', '|', 'EmojiPicker', '|', 'SourceCode']
};
const codeBlockSettings = {
    languages: [
        {label: "HTML", language: "html"},
        {label: "JavaScript", language: "javascript"},
        {label: "CSS", language: "css"},
        {label: "Plain Text", language: "plaintext"}
    ],
    defaultLanguage: "plaintext"
};
const placeholder = 'Type something...';
provide('richtexteditor', [Toolbar, Link, Image, HtmlEditor, QuickToolbar, Table, CodeBlock]);
</script>

<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";
</style>