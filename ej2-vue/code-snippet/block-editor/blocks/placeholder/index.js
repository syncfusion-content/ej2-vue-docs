import Vue from 'vue';
import { BlockEditorPlugin, ContentType } from "@syncfusion/ej2-vue-blockeditor";

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
                    content: 'This is a sample paragraph block.'
                }
            ]
        },
        {
            blockType: 'Paragraph',
            properties: { placeholder: 'Start typing your notes or press "/" for commands...'},
            content: [ { contentType: ContentType.Text, content: '' } ]
        }
      ]
    }
  },
  methods: {
    
  }

});