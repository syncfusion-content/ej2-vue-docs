<template>
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData"></ejs-blockeditor>
  </div>
</template>

<script setup>
import { BlockEditorComponent as EjsBlockeditor  } from "@syncfusion/ej2-vue-blockeditor";

const blocksData = [
    {
        type: 'Heading',
        props: { level : 1 },
        content: [
            {
                type: ContentType.Text,
                content: 'Main Document Title'
            }
        ]
    },
    {
        type: 'Heading',
        props: { level : 2 },
        content: [
            {
                type: ContentType.Text,
                content: 'Chapter Overview'
            }
        ]
    },
    {
        type: 'Heading',
        props: { level : 3 },
        content: [
            {
                type: ContentType.Text,
                content: 'Section Introduction'
            }
        ]
    },
    {
        type: 'Heading',
        props: { level : 4 },
        content: [
            {
                type: ContentType.Text,
                content: 'Sub-section Details'
            }
        ]
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
