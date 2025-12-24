import Vue from 'vue';
import { BlockEditorPlugin, ContentType } from "@syncfusion/ej2-vue-blockeditor";

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
              blockType: 'Heading',
              properties: { level: 1},
              content: [
                  {
                      contentType: ContentType.Text,
                      content: 'Sample Heading'
                  }
              ]
          },
          {
              blockType: 'Paragraph',
              content: [
                  {
                      contentType: ContentType.Text,
                      content: 'This is a sample paragraph block.'
                  }
              ]
          },
          {
              blockType: 'Paragraph'
          }
      ]
    }
  },
  methods: {
 
  }
});