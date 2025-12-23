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
            blockType: 'Heading',
            properties: { level : 1 },
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Main Document Title'
                }
            ]
        },
        {
            blockType: 'Heading',
            properties: { level : 2 },
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Chapter Overview'
                }
            ]
        },
        {
            blockType: 'Heading',
            properties: { level : 3 },
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Section Introduction'
                }
            ]
        },
        {
            blockType: 'Heading',
            properties: { level : 4 },
            content: [
                {
                    contentType: ContentType.Text,
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