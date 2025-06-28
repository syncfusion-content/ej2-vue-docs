<template>
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData"></ejs-blockeditor>
  </div>
</template>

<script>
import { BlockEditorComponent, ContentType } from "@syncfusion/ej2-vue-blockeditor";

export default {
  components: {
    'ejs-blockeditor': BlockEditorComponent,
  },
  data() {
    return {
      blocksData: [
          {
              type: 'Image',
              imageSettings: {
                  src: 'https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png',
                  altText: 'Sample image'
              }
          },
          {
              type: 'Paragraph',
              content: [
                  {
                      type: ContentType.Text,
                      content: 'You can customize images further by configuring properties like allowedTypes for file upload restrictions, saveFormat for storage preferences, and cssClass for custom styling.'
                  }
              ]
          }
      ]
    };
  },
  methods: {
    
  }
};
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";
</style>
