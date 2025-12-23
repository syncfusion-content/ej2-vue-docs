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
            blockType: 'Heading',
            properties: { level : 1},
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Custom CSS Classes in Block Editor'
                }
            ]
        },
        {
            blockType: 'Paragraph',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Default paragraph block'
                }
            ]
        },
        {
            blockType: 'Paragraph',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'This is an info block'
                }
            ],
            cssClass: 'info-block'
        },
        {
            blockType: 'Paragraph',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'This is a warning block'
                }
            ],
            cssClass: 'warning-block'
        },
        {
            blockType: 'Paragraph',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'This is a success block'
                }
            ],
            cssClass: 'success-block'
        },
        {
            blockType: 'Paragraph',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'This is an error block'
                }
            ],
            cssClass: 'error-block'
        },
        {
            blockType: 'Paragraph',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'This is a custom font block'
                }
            ],
            cssClass: 'custom-font'
        }
      ]
    }
  },
  methods: {
    
  }

});