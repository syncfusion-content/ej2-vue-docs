<template>
  <div id='container'>
    <ejs-blockeditor id="blockeditor" :blocks="blocksData" :blockActionMenuSettings="blockActionMenuSettings"></ejs-blockeditor>
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
             blockType: 'Heading',
              properties: { level: 1},
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Block Action Menu Demo'
                }
            ]
        },
        {
            blockType: 'Quote',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Hover over any block and click the drag handle icon to see custom actions.'
                }
            ]
        }
      ],
      blockActionMenuSettings: {
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
        opening: () => {
            // Your actions here
        },
        closing: () => {
            // Your actions here
        },
        itemSelect: () => {
            // Handle custom block actions
        }
    }
    };
  },
  methods: {
    
  }
};
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
