<template>
  <div id='container'>
    <ejs-blockeditor id="blockeditor" :blocks="blocksData" :commandMenuSettings="commandMenuSettings"></ejs-blockeditor>
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
import { BlockEditorComponent, ContentType } from "@syncfusion/ej2-vue-blockeditor";

export default {
  components: {
    'ejs-blockeditor': BlockEditorComponent,
  },
  data() {
    return {
      blocksData: [
        {
            blockType: 'Paragraph',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Type "/" anywhere in this editor to open the custom slash command menu.'
                }
            ]
        }
      ],
      commandMenuSettings: {
        popupWidth: '350px',
        popupHeight: '400px',
        // Custom command items
        commands: [
            {
                id: 'line-cmd',
                type: 'Divider',
                groupBy: 'Utility',
                label: 'Insert a Line',
                iconCss: 'e-icons e-divider',
            },
            {
                id: 'timestamp-cmd',
                groupBy: 'Actions',
                label: 'Insert Timestamp',
                iconCss: 'e-icons e-schedule',
            }
        ],
        itemSelect: () => {
            // Handle custom command actions
        },
        filtering: () => {
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
  @import '../node_modules/@syncfusion/ej2-base/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-navigations/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-dropdowns/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-inputs/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-blockeditor/styles/fluent2.css';
</style>
