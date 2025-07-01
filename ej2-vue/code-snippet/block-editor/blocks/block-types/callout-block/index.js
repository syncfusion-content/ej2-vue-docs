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
          type: 'Callout',
          children: [{ 
              id: 'callout-content',
              type: 'Paragraph',
              content: [{
                  id: 'callout-content-1',
                  type: ContentType.Text,
                  content: 'Important information: This is a callout block used to highlight important content.'
              }]
          }]
      }
      ]
    }
  },
  methods: {
    
  }

});