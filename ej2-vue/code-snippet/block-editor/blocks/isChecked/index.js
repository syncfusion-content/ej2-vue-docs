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
            blockType: 'Paragraph',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Task List:'
                }
            ]
        },
        {
            blockType: 'Checklist',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Completed task (checked)'
                }
            ],
            properties: { isChecked: true }
        },
        {
            blockType: 'Checklist',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Pending task (unchecked)'
                }
            ],
            properties: { isChecked: false }
        },
        {
            blockType: 'Checklist',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'High priority task'
                }
            ],
            properties: { isChecked: true }
        },
        {
            blockType: 'Checklist',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Low priority task'
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