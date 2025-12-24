import Vue from 'vue';
import { BlockEditorPlugin, ContentType } from "@syncfusion/ej2-vue-blockeditor";

Vue.use(BlockEditorPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container'>
    <ejs-blockeditor id="blockeditor" :blocks="blocksData" :commandMenuSettings="commandMenu"></ejs-blockeditor>
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
`,

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
      commandMenu: {
        popupWidth: '350px',
        popupHeight: '400px',
        enableTooltip: false,
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
    }
  },
methods: {

}
});