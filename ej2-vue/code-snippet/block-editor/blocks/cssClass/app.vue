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
              type: 'Heading1',
              content: [
                  {
                      type: ej.blockeditor.ContentType.Text,
                      content: 'Custom CSS Classes in Block Editor'
                  }
              ]
          },
          {
              type: 'Paragraph',
              content: [
                  {
                      type: ej.blockeditor.ContentType.Text,
                      content: 'Default paragraph block'
                  }
              ]
          },
          {
              type: 'Paragraph',
              content: [
                  {
                      type: ej.blockeditor.ContentType.Text,
                      content: 'This is an info block'
                  }
              ],
              cssClass: 'info-block'
          },
          {
              type: 'Paragraph',
              content: [
                  {
                      type: ej.blockeditor.ContentType.Text,
                      content: 'This is a warning block'
                  }
              ],
              cssClass: 'warning-block'
          },
          {
              type: 'Paragraph',
              content: [
                  {
                      type: ej.blockeditor.ContentType.Text,
                      content: 'This is a success block'
                  }
              ],
              cssClass: 'success-block'
          },
          {
              type: 'Paragraph',
              content: [
                  {
                      type: ej.blockeditor.ContentType.Text,
                      content: 'This is an error block'
                  }
              ],
              cssClass: 'error-block'
          },
          {
              type: 'Paragraph',
              content: [
                  {
                      type: ej.blockeditor.ContentType.Text,
                      content: 'This is a custom font block'
                  }
              ],
              cssClass: 'custom-font'
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
