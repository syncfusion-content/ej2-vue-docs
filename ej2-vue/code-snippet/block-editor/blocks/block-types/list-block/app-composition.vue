<template>
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData"></ejs-blockeditor>
  </div>
</template>

<script setup>
import { BlockEditorComponent as EjsBlockeditor  } from "@syncfusion/ej2-vue-blockeditor";

const blocksData = [
    {
        type: 'BulletList',
        content: [
            {
                type: ContentType.Text,
                content: 'Features of the Block Editor'
            }
        ]
    },
    {
        type: 'NumberedList',
        content: [
            {
                type: ContentType.Text,
                content: 'Step 1: Initialize the Block Editor'
            }
        ]
    },
    {
        type: 'Checklist',
        content: [
            {
                type: ContentType.Text,
                content: 'Review documentation'
            }
        ],
        props: { isChecked: true }
    },
    {
        type: 'Checklist',
        content: [
            {
                type: ContentType.Text,
                content: 'Implement drag and drop functionality'
            }
        ],
        props: { isChecked: false}
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
