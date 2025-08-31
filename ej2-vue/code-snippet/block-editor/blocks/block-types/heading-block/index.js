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
            type: 'Heading',
            props: { level: 1},
            content: [
                {
                    type: ContentType.Text,
                    content: 'Main Document Title'
                }
            ]
        },
        {
            type: 'Heading',
            props: { level: 2},
            content: [
                {
                    type: ContentType.Text,
                    content: 'Chapter Overview'
                }
            ]
        },
        {
            type: 'Heading',
            props: { level: 3},
            content: [
                {
                    type: ContentType.Text,
                    content: 'Section Introduction'
                }
            ]
        },
        {
            type: 'Heading',
            props: { level: 4},
            content: [
                {
                    type: ContentType.Text,
                    content: 'Sub-section Details'
                }
            ]
        }
      ]
    }
  },
  methods: {
    
  }

});