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
          type: 'Code',
          content: [
              {
                  type: ContentType.Text,  
                  content: 'function greeting() {\n  console.log("Hello, world!");\n}'
              }
          ],
          codeSettings: {
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
