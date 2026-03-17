import Vue from 'vue';
import { BlockEditorPlugin, ContentType } from "@syncfusion/ej2-vue-blockeditor";

Vue.use(BlockEditorPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData" :imageBlockSettings="imageBlockSettings"></ejs-blockeditor>
  </div>
`,

  data () {
    return {
      blocksData: [
          {
              blockType: 'Image',
              properties: {
                  src: 'https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png',
                  altText: 'Sample image'
              }
          },
          {
              blockType: 'Paragraph',
              content: [
                  {
                      contentType: ContentType.Text,
                      content: 'You can customize images further by configuring properties like allowedTypes for file upload restrictions, saveFormat for storage preferences, and cssClass for custom styling.'
                  }
              ]
          }
      ],
      imageBlockSettings: {
        saveUrl: "[SERVICE_HOSTED_PATH]/api/Home/SaveImage",
        path: "[SERVICE_HOSTED_PATH]/Uploads/"
      }
    }
  },
  methods: {
    
  }

});