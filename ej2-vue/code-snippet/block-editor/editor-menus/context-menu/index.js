import Vue from 'vue';
import { BlockEditorPlugin, ContentType } from "@syncfusion/ej2-vue-blockeditor";

Vue.use(BlockEditorPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container'>
    <ejs-blockeditor id="blockeditor" :blocks="blocksData" :contextMenuSettings="contextMenu"></ejs-blockeditor>
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
`,

 data() {
    return {
      customContextMenuItems : [
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
      ],
      blocksData: [
        {
            blockType: 'Heading',
            properties: { level: 1},
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Context Menu Demo'
                }
            ]
        },
        {
            blockType: 'Quote',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Right-click anywhere in this editor to open the custom context menu. Try different areas and blocks.'
                }
            ]
        }
      ],
      contextMenu: {
        enable: true,
        showItemOnClick: true,
        items: this.customContextMenuItems,
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
      }
    };
  },
  methods: {
    
  }

});