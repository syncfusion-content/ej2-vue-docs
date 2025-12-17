<template>
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData" :labelSettings="labelSettings"></ejs-blockeditor>
  </div>
</template>

<script setup>
import { BlockEditorComponent as EjsBlockeditor, ContentType  } from "@syncfusion/ej2-vue-blockeditor";

const blocksData = [
    {
        blockType: 'Heading',
        properties: { level: 1},
        content: [
            {
                contentType: ContentType.Text,
                content: 'Project Planning with Custom Labels'
            }
        ]
    },
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ContentType.Text,
                content: 'Type # to add status labels to your tasks.'
            }
        ]
    },
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ContentType.Text,
                content: 'Fix homepage layout issue - '
            },
            {
                contentType: ContentType.Label,
                properties: { labelId: 'bug'}
            },
            {
                contentType: ContentType.Text,
                content: ' '
            },
            {
                contentType: ContentType.Label,
                properties: { labelId: 'high'}
            }
        ]
    },
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ContentType.Text,
                content: 'Update user documentation - '
            },
            {
                contentType: ContentType.Label,
                properties: { labelId: 'task'}
            },
            {
                contentType: ContentType.Text,
                content: ' '
            },
            {
                contentType: ContentType.Label,
                properties: { labelId: 'medium'}
            }
        ]
    },
    {
        blockType: 'Paragraph',
        content: [
            {
                contentType: ContentType.Text,
                content: 'Implement payment gateway - '
            },
            {
                contentType: ContentType.Label,
                properties: { lableId: 'feature'}
            },
            {
                contentType: ContentType.Text,
                content: ' '
            },
            {
                contentType: ContentType.Label,
                properties: { lableId: 'critical'}
            }
        ]
    }
];
const labelSettings = {
    triggerChar: '#',
    items: [
        { id: 'bug', text: 'Bug', labelColor: '#ff5252', groupBy: 'Status' },
        { id: 'task', text: 'Task', labelColor: '#90caf9', groupBy: 'Status' },
        { id: 'feature', text: 'Feature', labelColor: '#81c784', groupBy: 'Status' },
        { id: 'enhancement', text: 'Enhancement', labelColor: '#ba68c8', groupBy: 'Status' },
        
        { id: 'low', text: 'Low Priority', labelColor: '#c5e1a5', groupBy: 'Priority' },
        { id: 'medium', text: 'Medium Priority', labelColor: '#fff59d', groupBy: 'Priority' },
        { id: 'high', text: 'High Priority', labelColor: '#ffab91', groupBy: 'Priority' },
        { id: 'critical', text: 'Critical', labelColor: '#ef9a9a', groupBy: 'Priority' }
    ]
};

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
