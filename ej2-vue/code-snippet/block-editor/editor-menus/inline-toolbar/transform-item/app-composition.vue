<template>
  <div id='container'>
    <ejs-blockeditor id="blockeditor" :blocks="blocksData" :inlineToolbarSettings="inlineToolbarSettings" :transformSettings="transformSettings"></ejs-blockeditor>
    <div id="controls">
        <h3>Inline Toolbar Configuration Demo</h3>
        <div class="instructions">
            <p><strong>Instructions:</strong></p>
            <ol>
                <li>Select any text in the editor to open the Inline Toolbar</li>
                <li>Notice the custom popup size, toolbar items and enabled tooltips</li>
            </ol>
        </div>
    </div>
  </div>
</template>

<script setup>
import { BlockEditorComponent as EjsBlockeditor, ContentType } from "@syncfusion/ej2-vue-blockeditor";

const customToolbarItems = [ 'Transform', 'Bold', 'InlineCode', 'Link' ];

const blocksData = [
    {
        blockType: 'Heading',
        properties: { level: 1},
        content: [
            {
                contentType: ContentType.Text,
                content: 'Inline Toolbar Demo'
            }
        ]
    },
    {
        blockType: 'Quote',
        properties:{
            children:[{
                blockType: 'Paragraph',
                content: [
                    {
                        contentType: ContentType.Text,
                        content: 'Select any text in the editor to open the Inline Toolbar'
                    }
                ]
            }]
        }
    }
];
const inlineToolbarSettings = {
        popupWidth: 'auto',
        enable: true,
        items: customToolbarItems,
        itemClick: () => {
            // Handle custom actions here
        }
    };
const transformSettings = {
        items: ['Paragraph', 'Heading 1'],
        itemSelect: () => {
            // Handle custom actions here
        }
    }
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
