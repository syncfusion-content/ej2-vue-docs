import Vue from 'vue';
import { BlockEditorPlugin } from "@syncfusion/ej2-vue-blockeditor"

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
      blocksData : [
      {
        blockType: 'Callout',
        properties: {
        children: [{ 
            blockType: 'Paragraph',
            content: [{
                contentType: 'Text',
                content: 'Important information: This is a callout block used to highlight important content.'
            }]
          }]
        }
      }
    ]
    }
  },
  methods: {
    
  }

});