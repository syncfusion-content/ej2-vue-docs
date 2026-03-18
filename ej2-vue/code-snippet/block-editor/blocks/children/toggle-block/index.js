import Vue from 'vue';
import { BlockEditorPlugin, ContentType } from "@syncfusion/ej2-vue-blockeditor";

Vue.use(BlockEditorPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData"></ejs-blockeditor>
  </div>
`,

  data () {
    return {
      blocksData: [
        {
            blockType: 'CollapsibleHeading',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Collapsible Section'
                }
            ],
            properties: {
            level: 1,
            isExpanded: true,
            children: [
                {
                    blockType: 'Paragraph',
                    content: [
                        {
                            contentType: ContentType.Text,
                            content: 'This content is inside a toggle section and can be collapsed.'
                        }
                    ]
                }
            ]
            }
        },
        {
            blockType: 'CollapsibleParagraph',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Toggle paragraph section'
                }
            ],
            properties: {
            isExpanded: false,
            children: [
                {
                    blockType: 'Paragraph',
                    content: [
                        {
                            contentType: ContentType.Text,
                            content: 'This content is initially hidden because isExpanded is set to false.'
                        }
                    ]
                }
            ]
        }
        }
      ]
    }
  },
  methods: {
    
  }

});