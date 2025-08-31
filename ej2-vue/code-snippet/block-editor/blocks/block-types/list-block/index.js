import Vue from 'vue';
import { BlockEditorPlugin } from "@syncfusion/ej2-vue-interactive-chat";

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
            type: 'BulletList',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Features of the Block Editor'
                }
            ]
        },
        {
            type: 'NumberedList',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Step 1: Initialize the Block Editor'
                }
            ]
        },
        {
            type: 'Checklist',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Review documentation'
                }
            ],
            props: { isChecked: true}
        },
        {
            type: 'Checklist',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Implement drag and drop functionality'
                }
            ],
            props: { isChecked: false}
        }
      ]
    }
  },
  methods: {
    
  }

});