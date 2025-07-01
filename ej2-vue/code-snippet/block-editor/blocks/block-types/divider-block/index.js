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
                      content: 'This section discusses the features of the Block Editor.'
                  }
              ]
          },
          {
              type: 'Divider'
          },
          {
              type: 'Paragraph',
              content: [
                  {
                      type: ContentType.Text,
                      content: 'This section covers implementation details and usage examples.' 
                  }
              ]
          }
      ]
    }
  },
  methods: {
    
  }

});