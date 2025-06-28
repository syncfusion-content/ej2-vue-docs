<template>
  <div id='container'>
    <ejs-blockeditor id="blockeditor" :blocks="blocksData" :contextMenu="contextMenu"></ejs-blockeditor>
    <div id="controls">
        <h3>Context Menu Configuration Demo</h3>
        <div class="instructions">
          <p><strong>Instructions:</strong></p>
          <ol>
            <li>Right-click anywhere in the editor to open the context menu</li>
            <li>Notice the custom popup size, menu items and disabled tooltips</li>
            <li>Try clicking on items with submenus (they appear on click, not hover)</li>
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
        type: 'Heading1',
        content: [
            {
                type: ContentType.Text,
                content: 'Context Menu Demo'
            }
        ]
    },
    {
        id: 'intro-block',
        type: 'Quote',
        content: [
            {
                type: ContentType.Text,
                content: 'Right-click anywhere in this editor to open the custom context menu. Try different areas and blocks.'
            }
        ]
    }
];
const customContextMenuItems = [
    {
        id: 'format-menu',
        text: 'Format',
        iconCss: 'e-icons e-format-painter',
        items: [
            {
                id: 'bold-item',
                text: 'Bold',
                iconCss: 'e-icons e-bold',
            },
            {
                id: 'italic-item',
                text: 'Italic',
                iconCss: 'e-icons e-italic',
            },
            {
                id: 'underline-item',
                text: 'Underline',
                iconCss: 'e-icons e-underline',
            }
        ]
    },
    { separator: true },
    {
        id: 'statistics-item',
        text: 'Block Statistics',
        iconCss: 'e-icons e-chart'
    },
    {
        id: 'export-item',
        text: 'Export Options',
        iconCss: 'e-icons e-export',
        items: [
            {
                id: 'export-json',
                text: 'Export as JSON',
                iconCss: 'e-icons e-file-json'
            },
            {
                id: 'export-html',
                text: 'Export as HTML',
                iconCss: 'e-icons e-file-html'
            },
            {
                id: 'export-pdf',
                text: 'Export as PDF',
                iconCss: 'e-icons e-file-pdf'
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
        open: () => {
            // Your actions here
        },
        close: () => {
            // Your actions here
        },
        itemClick: () => {
            // Handle custom block actions
        }
    };

    const contextMenu= {
        enable: true,
        showItemOnClick: true,
        items: customContextMenuItems,
        beforeOpen: (args) => {
            // Your actions here
        },
        open: (args) => {
            // Your actions here
        },
        beforeClose: (args) => {
            // Your actions here
        },
        close: (args) => {
            // Your actions here
        },
        itemClick: (args) => {
            // Handle custom actions here
        }
    };

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
