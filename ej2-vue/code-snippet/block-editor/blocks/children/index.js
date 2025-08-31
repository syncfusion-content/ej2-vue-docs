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
            id: 'security-callout',
            type: 'Callout',
            props: {
            children: [
                { 
                    id: 'security-title',
                    parentId: 'security-callout',
                    type: 'Heading',
                    props: { level: 3},
                    content: [{
                        type: ej.blockeditor.ContentType.Text,
                        content: 'Security Notice'
                    }]
                },
                { 
                    id: 'security-warning',
                    parentId: 'security-callout',
                    type: 'Paragraph',
                    content: [{
                        type: ej.blockeditor.ContentType.Text,
                        content: 'Always validate user input before processing to prevent security vulnerabilities.'
                    }]
                },
                { 
                    id: 'security-tips',
                    parentId: 'security-callout',
                    type: 'Paragraph',
                    content: [{
                        type: ej.blockeditor.ContentType.Text,
                        content: 'Use HTTPS for all data transmission'
                    }],
                    indent: 1
                },
                { 
                    id: 'security-tips-2',
                    parentId: 'security-callout',
                    type: 'Paragraph',
                    content: [{
                        type: ej.blockeditor.ContentType.Text,
                        content: 'Implement proper authentication mechanisms'
                    }],
                    indent: 1
                },
                { 
                    id: 'security-tips-3',
                    parentId: 'security-callout',
                    type: 'Paragraph',
                    content: [{
                        type: ej.blockeditor.ContentType.Text,
                        content: 'Regularly update dependencies and libraries'
                    }],
                    indent: 1
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