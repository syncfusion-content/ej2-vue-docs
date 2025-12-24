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
            blockType: 'BulletList',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Features of the Block Editor'
                }
            ]
        },
        {
            blockType: 'NumberedList',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Step 1: Initialize the Block Editor'
                }
            ]
        },
        {
            blockType: 'Checklist',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Review documentation'
                }
            ],
            properties: { isChecked: true }
        },
        {
            blockType: 'Checklist',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Implement drag and drop functionality'
                }
            ],
            properties: { isChecked: false }
        }
      ]
    }
  },
  methods: {
    
  }

});