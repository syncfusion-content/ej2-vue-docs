import Vue from 'vue';
import { BlockEditorPlugin } from "@syncfusion/ej2-vue-interactive-chat";

Vue.use(BlockEditorPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container'>
    <ejs-blockeditor id="blockeditor" :blocks="blocksData" :inlineToolbar="inlineToolbar"></ejs-blockeditor>
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
      customToolbarItems : [
          { id: 'clear', iconCss: 'e-icons e-format-painter', item: BuiltInToolbar.Custom, tooltip: 'Format Painter' },
          { id: 'highlight', iconCss: 'e-icons e-highlight', item: BuiltInToolbar.Custom, tooltip: 'Highlight' },
      ],
      blocksData: [
        {
            id: 'title-block',
            type: 'Heading1',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Inline Toolbar Demo'
                }
            ]
        },
        {
            id: 'intro-block',
            type: 'Quote',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Select any text in the editor to open the Inline Toolbar'
                }
            ]
        }
      ],
      inlineToolbar: {
        width: '80px',
        enable: true,
        items: this.customToolbarItems,
        enableTooltip: true,
        open: (args) => {
            // Your actions here
        },
        close: (args) => {
            // Your actions here
        },
        itemClicked: (args) => {
            // Handle custom actions here
        }
      }
    };
  },
methods: {

}
});