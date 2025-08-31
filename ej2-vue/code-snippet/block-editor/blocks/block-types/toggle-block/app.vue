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
              type: 'CollapsibleHeading',
              content: [
                  {
                      type: ContentType.Text,
                      content: 'Collapsible Section'
                  }
              ],
              props: {
              level: 1,
              isExpanded: true,
              children: [
                  {
                      type: 'Paragraph',
                      content: [
                          {
                              type: ContentType.Text,
                              content: 'This content is inside a toggle section and can be collapsed.'
                          }
                      ]
                  }
              ]
              }
          },
          {
              type: 'CollapsibleParagraph',
              content: [
                  {
                      type: ContentType.Text,
                      content: 'Toggle paragraph section'
                  }
              ],
              props: {
              isExpanded: false,
              children: [
                  {
                      type: 'Paragraph',
                      content: [
                          {
                              type: ContentType.Text,
                              content: 'This content is initially hidden because isExpanded is set to false.'
                          }
                      ]
                  }
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
