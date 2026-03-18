import Vue from 'vue';
import { BlockEditorPlugin, ContentType } from "@syncfusion/ej2-vue-blockeditor";

Vue.use(BlockEditorPlugin);

new Vue({
	el: '#app',
	template: `
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
`,

 data() {
    return {
      customToolbarItems : [ 'Transform', 'Bold', 'InlineCode', 'Link' ],
      blocksData: [
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
      ],
      inlineToolbarSettings: {
        popupWidth: 'auto',
        enable: true,
        itemClick: () => {
            // Handle custom actions here
        },
        items: this.customToolbarItems
    },
    transformSettings: {
        items: ['Paragraph', 'Heading 1'],
        itemSelect: () => {
            // Handle custom actions here
        }
      }
}   
  },
methods: {

}
});