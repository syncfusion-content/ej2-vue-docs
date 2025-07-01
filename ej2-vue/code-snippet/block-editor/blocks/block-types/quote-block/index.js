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
            type: 'Quote',
            content: [
                {
                    type: ContentType.Text,
                    content: 'The greatest glory in living lies not in never falling, but in rising every time we fall.'
                }
            ]
        }
      ]
    }
  },
  methods: {
    
  }

});