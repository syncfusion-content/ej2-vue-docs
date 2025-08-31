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
                    type: ej.blockeditor.ContentType.Text,
                    content: 'This is a sample paragraph block.'
                }
            ]
        },
        {
            type: 'Paragraph',
            props: { placeholder: 'Start typing your notes or press "/" for commands...' }
        }
      ]
    }
  },
  methods: {
    
  }

});