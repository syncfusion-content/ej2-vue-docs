<template>
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData"></ejs-blockeditor>
  </div>
</template>

<script setup>
import { BlockEditorComponent as EjsBlockeditor  } from "@syncfusion/ej2-vue-blockeditor";

const blocksData = [
    {
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'This is a paragraph with no indentation (indent: 0)'
            }
        ],
        indent: 0
    },
    {
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'This paragraph has one level of indentation (indent: 1)'
            }
        ],
        indent: 1
    },
    {
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'This paragraph has two levels of indentation (indent: 2)'
            }
        ],
        indent: 2
    },
    {
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'Back to no indentation'
            }
        ],
        indent: 0
    }
];

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/fluent2.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/fluent2.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/fluent2.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/fluent2.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/fluent2.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/fluent2.css";
@import "../node_modules/@syncfusion/ej2-blockeditor/styles/fluent2.css";
</style>
