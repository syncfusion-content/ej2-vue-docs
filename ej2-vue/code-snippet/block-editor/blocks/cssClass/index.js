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
            type: 'Heading1',
            content: [
                {
                    type: ej.blockeditor.ContentType.Text,
                    content: 'Custom CSS Classes in Block Editor'
                }
            ]
        },
        {
            type: 'Paragraph',
            content: [
                {
                    type: ej.blockeditor.ContentType.Text,
                    content: 'Default paragraph block'
                }
            ]
        },
        {
            type: 'Paragraph',
            content: [
                {
                    type: ej.blockeditor.ContentType.Text,
                    content: 'This is an info block'
                }
            ],
            cssClass: 'info-block'
        },
        {
            type: 'Paragraph',
            content: [
                {
                    type: ej.blockeditor.ContentType.Text,
                    content: 'This is a warning block'
                }
            ],
            cssClass: 'warning-block'
        },
        {
            type: 'Paragraph',
            content: [
                {
                    type: ej.blockeditor.ContentType.Text,
                    content: 'This is a success block'
                }
            ],
            cssClass: 'success-block'
        },
        {
            type: 'Paragraph',
            content: [
                {
                    type: ej.blockeditor.ContentType.Text,
                    content: 'This is an error block'
                }
            ],
            cssClass: 'error-block'
        },
        {
            type: 'Paragraph',
            content: [
                {
                    type: ej.blockeditor.ContentType.Text,
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