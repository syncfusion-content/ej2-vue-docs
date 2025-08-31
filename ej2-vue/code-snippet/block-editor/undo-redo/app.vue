<template>
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData" :undoRedoStack="20"></ejs-blockeditor>
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
              id: 'block-1',
              type: 'Heading',
              props: { level: 1},
              content: [
                  {
                      type: ContentType.Text,
                      content: 'Sample Heading'
                  }
              ]
          },
          {
              id: 'block-2',
              type: 'Paragraph',
              content: [
                  {
                      type: ContentType.Text,
                      content: 'This is a sample paragraph block.'
                  }
              ]
          },
          {
              id: 'block-3',
              type: 'Paragraph'
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
