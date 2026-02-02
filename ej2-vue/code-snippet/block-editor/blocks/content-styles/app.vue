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
                blockType: 'Heading',
                properties: { level: 2},
                content: [
                    {
                        contentType: ContentType.Text,
                        content: 'Content Styling Options'
                    }
                ]
            },
            {
                blockType: 'Paragraph',
                content: [
                    {
                        contentType: ContentType.Text,
                        content: 'Bold text: ',
                        properties: {
                        styles: { 
                            bold: true,
                            color: '#1976d2'
                        }
                        }
                    },
                    {
                        contentType: ContentType.Text,
                        content: 'This text is bold.',
                        properties: {
                        styles: { 
                            bold: true 
                        }
                        }
                    }
                ]
            },
            {
                blockType: 'Paragraph',
                content: [
                    {
                        contentType: ContentType.Text,
                        content: 'Italic text: ',
                        properties: {
                        styles: { 
                            bold: true,
                            color: '#1976d2'
                        }
                        }
                    },
                    {
                        contentType: ContentType.Text,
                        content: 'This text is italicized.',
                        properties: {
                        styles: { 
                            italic: true 
                        }
                        }
                    }
                ]
            },
            {
                blockType: 'Paragraph',
                content: [
                    {
                        contentType: ContentType.Text,
                        content: 'Text with color: ',
                        properties: {
                        styles: { 
                            bold: true,
                            color: '#1976d2'
                        }
                        }
                    },
                    {
                        contentType: ContentType.Text,
                        content: 'This text has custom color.',
                        properties: {
                        styles: { 
                            color: '#e91e63' 
                        }
                        }
                    }
                ]
            },
            {
                blockType: 'Paragraph',
                content: [
                    {
                        contentType: ContentType.Text,
                        content: 'Text with background: ',
                        properties: {
                        styles: { 
                            bold: true,
                            color: '#1976d2'
                        }
                        }
                    },
                    {
                        contentType: ContentType.Text,
                        content: 'This text has background color.',
                        properties: {
                        styles: { 
                            backgroundColor: '#fff9c4' 
                        }
                        }
                    }
                ]
            },
            {
                blockType: 'Paragraph',
                content: [
                    {
                        contentType: ContentType.Text,
                        content: 'Multiple styles: ',
                        properties: {
                        styles: { 
                            bold: true,
                            color: '#1976d2'
                        }
                        }
                    },
                    {
                        contentType: ContentType.Text,
                        content: 'This text combines multiple styles.',
                        properties: {
                        styles: { 
                            bold: true,
                            italic: true,
                            underline: true,
                            color: '#4caf50'
                        }
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
  @import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-blockeditor/styles/tailwind3.css';
</style>
