<template>
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData"></ejs-blockeditor>
  </div>
</template>

<script setup>
import { BlockEditorComponent as EjsBlockeditor, ContentType } from "@syncfusion/ej2-vue-blockeditor";

const blocksData = [
    {
        id: 'security-callout',
        blockType: 'Callout',
        properties: {
        children: [
            { 
                parentId: 'security-callout',
                blockType: 'Heading',
                props: { level: 3},
                content: [{
                    contentType: ContentType.Text,
                    content: 'Security Notice'
                }]
            },
            { 
                parentId: 'security-callout',
                blockType: 'Paragraph',
                content: [{
                    contentType: ContentType.Text,
                    content: 'Always validate user input before processing to prevent security vulnerabilities.'
                }]
            },
            { 
                parentId: 'security-callout',
                blockType: 'Paragraph',
                content: [{
                    contentType: ContentType.Text,
                    content: 'Use HTTPS for all data transmission'
                }],
                indent: 1
            },
            { 
                parentId: 'security-callout',
                blockType: 'Paragraph',
                content: [{
                    contentType: ContentType.Text,
                    content: 'Implement proper authentication mechanisms'
                }],
                indent: 1
            },
            { 
                parentId: 'security-callout',
                blockType: 'Paragraph',
                content: [{
                    contentType: ContentType.Text,
                    content: 'Regularly update dependencies and libraries'
                }],
                indent: 1
            }
        ]
        }
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
