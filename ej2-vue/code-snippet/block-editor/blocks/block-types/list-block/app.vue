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
              type: 'BulletList',
              content: [
                  {
                      type: ContentType.Text,
                      content: 'Features of the Block Editor'
                  }
              ]
          },
          {
              type: 'NumberedList',
              content: [
                  {
                      type: ContentType.Text,
                      content: 'Step 1: Initialize the Block Editor'
                  }
              ]
          },
          {
              type: 'CheckList',
              content: [
                  {
                      type: ContentType.Text,
                      content: 'Review documentation'
                  }
              ],
              isChecked: true
          },
          {
              type: 'CheckList',
              content: [
                  {
                      type: ContentType.Text,
                      content: 'Implement drag and drop functionality'
                  }
              ],
              isChecked: false
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
