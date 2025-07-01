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
                type: 'Heading2',
                content: [
                    {
                        type: ContentType.Text,
                        content: 'Content Styling Options'
                    }
                ]
            },
            {
                type: 'Paragraph',
                content: [
                    {
                        type: ContentType.Text,
                        content: 'Bold text: ',
                        styles: { 
                            bold: true,
                            color: '#1976d2'
                        }
                    },
                    {
                        type: ContentType.Text,
                        content: 'This text is bold.',
                        styles: { 
                            bold: true 
                        }
                    }
                ]
            },
            {
                type: 'Paragraph',
                content: [
                    {
                        type: ContentType.Text,
                        content: 'Italic text: ',
                        styles: { 
                            bold: true,
                            color: '#1976d2'
                        }
                    },
                    {
                        type: ContentType.Text,
                        content: 'This text is italicized.',
                        styles: { 
                            italic: true 
                        }
                    }
                ]
            },
            {
                type: 'Paragraph',
                content: [
                    {
                        type: ContentType.Text,
                        content: 'Text with color: ',
                        styles: { 
                            bold: true,
                            color: '#1976d2'
                        }
                    },
                    {
                        type: ContentType.Text,
                        content: 'This text has custom color.',
                        styles: { 
                            color: '#e91e63' 
                        }
                    }
                ]
            },
            {
                type: 'Paragraph',
                content: [
                    {
                        type: ContentType.Text,
                        content: 'Text with background: ',
                        styles: { 
                            bold: true,
                            color: '#1976d2'
                        }
                    },
                    {
                        type: ContentType.Text,
                        content: 'This text has background color.',
                        styles: { 
                            bgColor: '#fff9c4' 
                        }
                    }
                ]
            },
            {
                type: 'Paragraph',
                content: [
                    {
                        type: ContentType.Text,
                        content: 'Multiple styles: ',
                        styles: { 
                            bold: true,
                            color: '#1976d2'
                        }
                    },
                    {
                        type: ContentType.Text,
                        content: 'This text combines multiple styles.',
                        styles: { 
                            bold: true,
                            italic: true,
                            underline: true,
                            color: '#4caf50'
                        }
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
