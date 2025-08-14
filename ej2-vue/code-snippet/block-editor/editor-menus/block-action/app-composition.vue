<template>
  <div id='container'>
    <ejs-blockeditor id="blockeditor" :blocks="blocksData" :blockActionsMenu="blockActionsMenu"></ejs-blockeditor>
    <div id="controls">
        <h3>Block Action Menu Configuration Demo</h3>
        <div class="instructions">
          <p><strong>Instructions:</strong></p>
          <ol>
            <li>
              Hover over any block in the editor to see the block action menu
            </li>
            <li>Click on the action menu icon (⋮) next to any block</li>
            <li>Notice the custom popup size, action items and disabled tooltips</li>
          </ol>
        </div>
      </div>
  </div>
</template>

<script setup>
import { BlockEditorComponent as EjsBlockeditor  } from "@syncfusion/ej2-vue-blockeditor";

const blockData = [
    {
            id: 'title-block',
            type: 'Heading',
            props: { level: 1},
            content: [
                {
                    type: ContentType.Text,
                    content: 'Block Action Menu Demo'
                }
            ]
        },
        {
            id: 'intro-block',
            type: 'Quote',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Hover over any block and click the drag handle icon to see custom actions.'
                }
            ]
        }
];

const blockActionsMenu= {
        enable: true,
        popupWidth: '180px',
        popupHeight: '110px',
        enableTooltip: false,
        // Custom action items
        items: [
            {
                id: 'highlight-action',
                label: 'Highlight Block',
                iconCss: 'e-icons e-highlight',
                tooltip: 'Highlight this block'
            },
            {
                id: 'copy-content-action',
                label: 'Copy Content',
                iconCss: 'e-icons e-copy',
                tooltip: 'Copy block content to clipboard'
            },
            {
                id: 'block-info-action',
                label: 'Block Info',
                tooltip: 'Show block information'
            }
        ],
        open: (args) => {
            // Your actions here
        },
        close: (args) => {
            // Your actions here
        },
        itemClick: (args) => {
            // Handle custom block actions
        }
    }

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
