import Vue from 'vue';
import { BlockEditorPlugin } from "@syncfusion/ej2-vue-interactive-chat";

Vue.use(BlockEditorPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData" :enableRtl= "true"></ejs-blockeditor>
  </div>
`,

  data () {
    return {
      blocksData: [
        {
          id: 'block-1',
          type: 'Heading1',
          content: [
            {
              type: ContentType.Text,
              content: 'Sample Heading'
            }
          ]
        },
        {
          id: 'block-2',
          type: 'Paragraph',
          content: [
            {
              type: ContentType.Text,
              content: 'This is a sample paragraph block.'
            }
          ]
        },
        {
          id: 'block-3',
          type: 'Paragraph'
        }
      ]
    }
  },
  methods: {
 
  }
});