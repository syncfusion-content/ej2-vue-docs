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
            type: 'Paragraph',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Task List:'
                }
            ]
        },
        {
            type: 'CheckList',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Completed task (checked)'
                }
            ],
            isChecked: true
        },
        {
            type: 'CheckList',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Pending task (unchecked)'
                }
            ],
            isChecked: false
        },
        {
            type: 'CheckList',
            content: [
                {
                    type: ContentType.Text,
                    content: 'High priority task'
                }
            ],
            isChecked: true
        },
        {
            type: 'CheckList',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Low priority task'
                }
            ],
            isChecked: false
        }
      ]
    }
  },
  methods: {
    
  }

});