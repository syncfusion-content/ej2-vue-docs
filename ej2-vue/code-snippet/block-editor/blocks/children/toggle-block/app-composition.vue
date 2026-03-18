<template>
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData"></ejs-blockeditor>
  </div>
</template>

<script setup>
import { BlockEditorComponent as EjsBlockeditor, ContentType  } from "@syncfusion/ej2-vue-blockeditor";

const blocksData = [
    {
        blockType: 'CollapsibleHeading',
        content: [
            {
                contentType: ContentType.Text,
                content: 'Collapsible Section'
            }
        ],
        properties: {
            level: 1,
            isExpanded: true,
            children: [
                {
                    blockType: 'Paragraph',
                    content: [
                        {
                            contentType: ContentType.Text,
                            content: 'This content is inside a toggle section and can be collapsed.'
                        }
                    ]
                }
            ]
        }
    },
    {
        blockType: 'CollapsibleParagraph',
        content: [
            {
                contentType: ContentType.Text,
                content: 'Toggle paragraph section'
            }
        ],
        properties: {
            isExpanded: false,
            children: [
                {
                    blockType: 'Paragraph',
                    content: [
                        {
                            contentType: ContentType.Text,
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
  @import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-blockeditor/styles/tailwind3.css';
</style>
