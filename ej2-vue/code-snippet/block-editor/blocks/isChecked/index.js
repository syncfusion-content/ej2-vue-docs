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
            type: 'Checklist',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Completed task (checked)'
                }
            ],
            props: { isChecked: true}
        },
        {
            type: 'Checklist',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Pending task (unchecked)'
                }
            ],
            props: { isChecked: false}
        },
        {
            type: 'Checklist',
            content: [
                {
                    type: ContentType.Text,
                    content: 'High priority task'
                }
            ],
            props: { isChecked: true}
        },
        {
            type: 'Checklist',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Low priority task'
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