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
                content: 'Task List:'
            }
        ]
    },
    {
        type: 'CheckList',
        content: [
            {
                type: ContentType.Text,
                content: 'Completed task (checked)'
            }
        ],
        isChecked: true
    },
    {
        type: 'CheckList',
        content: [
            {
                type: ContentType.Text,
                content: 'Pending task (unchecked)'
            }
        ],
        isChecked: false
    },
    {
        type: 'CheckList',
        content: [
            {
                type: ContentType.Text,
                content: 'High priority task'
            }
        ],
        isChecked: true
    },
    {
        type: 'CheckList',
        content: [
            {
                type: ContentType.Text,
                content: 'Low priority task'
            }
        ],
        isChecked: false
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
