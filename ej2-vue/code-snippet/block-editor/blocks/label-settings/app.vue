<template>
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData" :labelSettings="labelSettings"></ejs-blockeditor>
  </div>
</template>

<script>
import { BlockEditorComponent, ContentType } from "@syncfusion/ej2-vue-blockeditor";

export default {
  components: {
    'ejs-blockeditor': BlockEditorComponent,
  },
  data() {
    return {
      blocksData: [
        {
            type: 'Heading1',
            content: [
                {
                    type: ej.blockeditor.ContentType.Text,
                    content: 'Project Planning with Custom Labels'
                }
            ]
        },
        {
            type: 'Paragraph',
            content: [
                {
                    type: ej.blockeditor.ContentType.Text,
                    content: 'Type # to add status labels to your tasks.'
                }
            ]
        },
        {
            type: 'Paragraph',
            content: [
                {
                    type: ej.blockeditor.ContentType.Text,
                    content: 'Fix homepage layout issue - '
                },
                {
                    type: ej.blockeditor.ContentType.Label,
                    id: 'bug'
                },
                {
                    type: ej.blockeditor.ContentType.Text,
                    content: ' '
                },
                {
                    type: ej.blockeditor.ContentType.Label,
                    id: 'high'
                }
            ]
        },
        {
            type: 'Paragraph',
            content: [
                {
                    type: ej.blockeditor.ContentType.Text,
                    content: 'Update user documentation - '
                },
                {
                    type: ej.blockeditor.ContentType.Label,
                    id: 'task'
                },
                {
                    type: ej.blockeditor.ContentType.Text,
                    content: ' '
                },
                {
                    type: ej.blockeditor.ContentType.Label,
                    id: 'medium'
                }
            ]
        },
        {
            type: 'Paragraph',
            content: [
                {
                    type: ej.blockeditor.ContentType.Text,
                    content: 'Implement payment gateway - '
                },
                {
                    type: ej.blockeditor.ContentType.Label,
                    id: 'feature'
                },
                {
                    type: ej.blockeditor.ContentType.Text,
                    content: ' '
                },
                {
                    type: ej.blockeditor.ContentType.Label,
                    id: 'critical'
                }
            ]
        }
      ],
    labelSettings : {
        triggerChar: '#',
        labelItems: [
            { id: 'bug', text: 'Bug', labelColor: '#ff5252', groupHeader: 'Status' },
            { id: 'task', text: 'Task', labelColor: '#90caf9', groupHeader: 'Status' },
            { id: 'feature', text: 'Feature', labelColor: '#81c784', groupHeader: 'Status' },
            { id: 'enhancement', text: 'Enhancement', labelColor: '#ba68c8', groupHeader: 'Status' },
            
            { id: 'low', text: 'Low Priority', labelColor: '#c5e1a5', groupHeader: 'Priority' },
            { id: 'medium', text: 'Medium Priority', labelColor: '#fff59d', groupHeader: 'Priority' },
            { id: 'high', text: 'High Priority', labelColor: '#ffab91', groupHeader: 'Priority' },
            { id: 'critical', text: 'Critical', labelColor: '#ef9a9a', groupHeader: 'Priority' }
        ]
    }
    };
  },
  methods: {
    
  }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";
</style>
