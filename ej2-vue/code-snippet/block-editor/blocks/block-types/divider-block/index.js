import Vue from 'vue';
import { BlockEditorPlugin,  ContentType } from "@syncfusion/ej2-vue-blockeditor"

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
                      content: 'This section discusses the features of the Block Editor.'
                  }
              ]
          },
          {
              blockType: 'Divider'
          },
          {
              blockType: 'Paragraph',
              content: [
                  {
                      contentType: ContentType.Text,
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