import Vue from 'vue';
import { BlockEditorPlugin,  ContentType } from "@syncfusion/ej2-vue-blockeditor"

Vue.use(BlockEditorPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData" :codeBlockSettings="codeBlockData"></ejs-blockeditor>
  </div>
`,

  data () {
    return {
      blocksData: [
           {
            blockType: 'Code',
            content: [
                {
                    contentType: ContentType.Text,  
                    content: 'function greeting() {\n  console.log("Hello, world!");\n}'
                }
            ]
        }
      ],

      codeBlockData: {
        defaultLanguage: 'javascript',
        languages: [
            { language: 'javascript', label: 'JavaScript' },
            { language: 'typescript', label: 'TypeScript' },
            { language: 'html', label: 'HTML' },
            { language: 'css', label: 'CSS' }
        ]
      }
    }
  },
  methods: {
    
  }

});