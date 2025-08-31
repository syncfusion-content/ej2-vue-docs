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
              type: 'Heading',
              props: { level : 1 },
              content: [
                  {
                      type: ContentType.Text,
                      content: 'Main Document Title'
                  }
              ]
          },
          {
              type: 'Heading',
              props: { level : 2 },
              content: [
                  {
                      type: ContentType.Text,
                      content: 'Chapter Overview'
                  }
              ]
          },
          {
              type: 'Heading',
              props: { level : 3 },
              content: [
                  {
                      type: ContentType.Text,
                      content: 'Section Introduction'
                  }
              ]
          },
          {
              type: 'Heading',
              props: { level : 4 },
              content: [
                  {
                      type: ContentType.Text,
                      content: 'Sub-section Details'
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
