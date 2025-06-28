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
              id: 'security-callout',
              type: 'Callout',
              children: [
                  { 
                      id: 'security-title',
                      parentId: 'security-callout',
                      type: 'Heading3',
                      content: [{
                          type: ej.blockeditor.ContentType.Text,
                          content: 'Security Notice'
                      }]
                  },
                  { 
                      id: 'security-warning',
                      parentId: 'security-callout',
                      type: 'Paragraph',
                      content: [{
                          type: ej.blockeditor.ContentType.Text,
                          content: 'Always validate user input before processing to prevent security vulnerabilities.'
                      }]
                  },
                  { 
                      id: 'security-tips',
                      parentId: 'security-callout',
                      type: 'Paragraph',
                      content: [{
                          type: ej.blockeditor.ContentType.Text,
                          content: 'Use HTTPS for all data transmission'
                      }],
                      indent: 1
                  },
                  { 
                      id: 'security-tips-2',
                      parentId: 'security-callout',
                      type: 'Paragraph',
                      content: [{
                          type: ej.blockeditor.ContentType.Text,
                          content: 'Implement proper authentication mechanisms'
                      }],
                      indent: 1
                  },
                  { 
                      id: 'security-tips-3',
                      parentId: 'security-callout',
                      type: 'Paragraph',
                      content: [{
                          type: ej.blockeditor.ContentType.Text,
                          content: 'Regularly update dependencies and libraries'
                      }],
                      indent: 1
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
