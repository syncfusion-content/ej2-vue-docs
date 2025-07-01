<template>
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData"></ejs-blockeditor>
  </div>
</template>

<script setup>
import { BlockEditorComponent as EjsBlockeditor  } from "@syncfusion/ej2-vue-blockeditor";

const blocksData = [
    {
        id: 'security-callout',
        type: 'Callout',
        children: [
            { 
                id: 'security-title',
                parentId: 'security-callout',
                type: 'Heading3',
                content: [{
                    type: ej.blockeditor.ContentType.Text,
                    content: 'Security Notice'
                }]
            },
            { 
                id: 'security-warning',
                parentId: 'security-callout',
                type: 'Paragraph',
                content: [{
                    type: ej.blockeditor.ContentType.Text,
                    content: 'Always validate user input before processing to prevent security vulnerabilities.'
                }]
            },
            { 
                id: 'security-tips',
                parentId: 'security-callout',
                type: 'Paragraph',
                content: [{
                    type: ej.blockeditor.ContentType.Text,
                    content: 'Use HTTPS for all data transmission'
                }],
                indent: 1
            },
            { 
                id: 'security-tips-2',
                parentId: 'security-callout',
                type: 'Paragraph',
                content: [{
                    type: ej.blockeditor.ContentType.Text,
                    content: 'Implement proper authentication mechanisms'
                }],
                indent: 1
            },
            { 
                id: 'security-tips-3',
                parentId: 'security-callout',
                type: 'Paragraph',
                content: [{
                    type: ej.blockeditor.ContentType.Text,
                    content: 'Regularly update dependencies and libraries'
                }],
                indent: 1
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
