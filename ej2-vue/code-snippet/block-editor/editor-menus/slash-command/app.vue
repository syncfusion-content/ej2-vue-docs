<template>
  <div id='container'>
    <ejs-blockeditor id="blockeditor" :blocks="blocksData" :commandMenu="commandMenu"></ejs-blockeditor>
    <div id="controls">
        <h3>Slash Command Menu Configuration Demo</h3>
        <div class="instructions">
          <p><strong>Instructions:</strong></p>
          <ol>
            <li>
              Click in the editor below and type "/" to open the slash command
              menu
            </li>
            <li>Notice the custom popup size, commands and disabled tooltips</li>
          </ol>
        </div>
      </div>
  </div>
</template>

<script>
import { BlockEditorComponent } from "@syncfusion/ej2-vue-blockeditor";

export default {
  components: {
    'ejs-blockeditor': BlockEditorComponent,
  },
  data() {
    return {
      blocksData: [
        {
            id: 'demo-block',
            type: 'Paragraph',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Type "/" anywhere in this editor to open the custom slash command menu.'
                }
            ]
        }
      ],
      commandMenu: {
        popupWidth: '350px',
        popupHeight: '400px',
        enableTooltip: false,
        // Custom command items
        commands: [
            {
                id: 'line-cmd',
                type: BlockType.Divider,
                groupHeader: 'Utility',
                label: 'Insert a Line',
                iconCss: 'e-icons e-divider',
            },
            {
                id: 'timestamp-cmd',
                groupHeader: 'Actions',
                label: 'Insert Timestamp',
                iconCss: 'e-icons e-schedule',
            }
        ],
        itemClicked: (args) => {
            // Handle custom command actions
        },
        open: (args) => {
            // Your actions here
        },
        close: (args) => {
            // Your actions here
        },
        queryFiltering: (args) => {
            // Your actions here
        }
      }
    };
  },
  methods: {
    
  }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";
</style>
