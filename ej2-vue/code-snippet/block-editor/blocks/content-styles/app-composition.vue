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
        props: { level: 2 },
        content: [
            {
                type: ContentType.Text,
                content: 'Content Styling Options'
            }
        ]
    },
    {
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'Bold text: ',
                props: {
                styles: { 
                    bold: true,
                    color: '#1976d2'
                }
                }
            },
            {
                type: ContentType.Text,
                content: 'This text is bold.',
                props: {
                styles: { 
                    bold: true 
                }
                }
            }
        ]
    },
    {
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'Italic text: ',
                props: {
                styles: { 
                    bold: true,
                    color: '#1976d2'
                }
                }
            },
            {
                type: ContentType.Text,
                content: 'This text is italicized.',
                props: {
                styles: { 
                    italic: true 
                }
                }
            }
        ]
    },
    {
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'Text with color: ',
                props: {
                styles: { 
                    bold: true,
                    color: '#1976d2'
                }
                }
            },
            {
                type: ContentType.Text,
                content: 'This text has custom color.',
                props: {
                styles: { 
                    color: '#e91e63' 
                }
                }
            }
        ]
    },
    {
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'Text with background: ',
                props: {
                styles: { 
                    bold: true,
                    color: '#1976d2'
                }
                }
            },
            {
                type: ContentType.Text,
                content: 'This text has background color.',
                props: {
                styles: { 
                    bgColor: '#fff9c4' 
                }
                }
            }
        ]
    },
    {
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'Multiple styles: ',
                props: {
                styles: { 
                    bold: true,
                    color: '#1976d2'
                }
                }
            },
            {
                type: ContentType.Text,
                content: 'This text combines multiple styles.',
                props: {
                styles: { 
                    bold: true,
                    italic: true,
                    underline: true,
                    color: '#4caf50'
                }
                }
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
