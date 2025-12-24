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
            blockType: 'Quote',
            content: [
                {
                    contentType: ContentType.Text,
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