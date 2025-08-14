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
            type: 'Code',
            content: [
                {
                    type: ContentType.Text,  
                    content: 'function greeting() {\n  console.log("Hello, world!");\n}'
                }
            ],
            props: {
                defaultLanguage: 'javascript',
                languages: [
                    { language: 'javascript', label: 'JavaScript' },
                    { language: 'typescript', label: 'TypeScript' },
                    { language: 'html', label: 'HTML' },
                    { language: 'css', label: 'CSS' }
                ]
            }
        }
      ]
    }
  },
  methods: {
    
  }

});