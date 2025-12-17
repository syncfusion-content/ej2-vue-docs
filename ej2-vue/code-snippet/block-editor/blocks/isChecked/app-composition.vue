<template>
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData"></ejs-blockeditor>
  </div>
</template>

<script setup>
import { BlockEditorComponent as EjsBlockeditor, ContentType  } from "@syncfusion/ej2-vue-blockeditor";

const blocksData = [
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ContentType.Text,
                content: 'Task List:'
            }
        ]
    },
    {
        blockType: 'Checklist',
        content: [
            {
                contentType: ContentType.Text,
                content: 'Completed task (checked)'
            }
        ],
        properties: { isChecked: true }
    },
    {
        blockType: 'Checklist',
        content: [
            {
                contentType: ContentType.Text,
                content: 'Pending task (unchecked)'
            }
        ],
        properties: { isChecked: false }
    },
    {
        blockType: 'Checklist',
        content: [
            {
                contentType: ContentType.Text,
                content: 'High priority task'
            }
        ],
        properties: { isChecked: true }
    },
    {
        blockType: 'Checklist',
        content: [
            {
                contentType: ContentType.Text,
                content: 'Low priority task'
            }
        ],
        properties: { isChecked: false }
    }
];

</script>

<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-navigations/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-dropdowns/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-inputs/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-blockeditor/styles/fluent2.css';
</style>
