<template>
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData"></ejs-blockeditor>
  </div>
</template>

<script setup>
import { BlockEditorComponent as EjsBlockeditor, ContentType  } from "@syncfusion/ej2-vue-blockeditor";

const blocksData = [
    {
        blockType: 'Heading',
        properties: { level : 1 },
        content: [
            {
                contentType: ContentType.Text,
                content: 'Main Document Title'
            }
        ]
    },
    {
        blockType: 'Heading',
        properties: { level : 2 },
        content: [
            {
                contentType: ContentType.Text,
                content: 'Chapter Overview'
            }
        ]
    },
    {
        blockType: 'Heading',
        properties: { level : 3 },
        content: [
            {
                contentType: ContentType.Text,
                content: 'Section Introduction'
            }
        ]
    },
    {
        blockType: 'Heading',
        properties: { level : 4 },
        content: [
            {
                contentType: ContentType.Text,
                content: 'Sub-section Details'
            }
        ]
    }
];

</script>

<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-blockeditor/styles/tailwind3.css';
</style>
