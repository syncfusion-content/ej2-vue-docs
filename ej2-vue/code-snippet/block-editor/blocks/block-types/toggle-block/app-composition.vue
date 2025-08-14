<template>
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData"></ejs-blockeditor>
  </div>
</template>

<script setup>
import { BlockEditorComponent as EjsBlockeditor  } from "@syncfusion/ej2-vue-blockeditor";

const blocksData = [
    {
        type: 'CollapsibleParagraph',
        content: [
            {
                type: ContentType.Text,
                content: 'Collapsible Section'
            }
        ],
        props: {
        isExpanded: true,
        children: [
            {
                type: 'Paragraph',
                content: [
                    {
                        type: ContentType.Text,
                        content: 'This content is inside a toggle section and can be collapsed.'
                    }
                ]
            }
        ]
        }
    },
    {
        type: 'CollapsibleParagraph',
        content: [
            {
                type: ContentType.Text,
                content: 'Toggle paragraph section'
            }
        ],
        props: {
        isExpanded: false,
        children: [
            {
                type: 'Paragraph',
                content: [
                    {
                        type: ContentType.Text,
                        content: 'This content is initially hidden because isExpanded is set to false.'
                    }
                ]
            }
        ]
        }
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
