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
              properties: { level : 1},
              content: [
                  {
                      contentType: ContentType.Text,
                      content: 'Custom CSS Classes in Block Editor'
                  }
              ]
          },
          {
              blockType: 'Paragraph',
              content: [
                  {
                      contentType: ContentType.Text,
                      content: 'Default paragraph block'
                  }
              ]
          },
          {
              blockType: 'Paragraph',
              content: [
                  {
                      contentType: ContentType.Text,
                      content: 'This is an info block'
                  }
              ],
              cssClass: 'info-block'
          },
          {
              blockType: 'Paragraph',
              content: [
                  {
                      contentType: ContentType.Text,
                      content: 'This is a warning block'
                  }
              ],
              cssClass: 'warning-block'
          },
          {
              blockType: 'Paragraph',
              content: [
                  {
                      contentType: ContentType.Text,
                      content: 'This is a success block'
                  }
              ],
              cssClass: 'success-block'
          },
          {
              blockType: 'Paragraph',
              content: [
                  {
                      contentType: ContentType.Text,
                      content: 'This is an error block'
                  }
              ],
              cssClass: 'error-block'
          },
          {
              blockType: 'Paragraph',
              content: [
                  {
                      contentType: ContentType.Text,
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
  @import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
  @import '../node_modules/@syncfusion/ej2-blockeditor/styles/tailwind3.css';
  /* Custom CSS for blocks  */
.e-block.info-block, .e-block.warning-block, .e-block.success-block, .e-block.error-block {
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 4px;
    margin-bottom: 5px;
    border-left: 4px solid;
}

.e-block.info-block {
    background-color: #e6f3ff;
    border-left-color: #007bff;
    color: #004085;
}

.e-block.warning-block {
    background-color: #fff8e1;
    border-left-color: #ffc107;
    color: #856404;
}

.e-block.success-block {
    background-color: #e8f5e9;
    border-left-color: #28a745;
    color: #155724;
}

.e-block.error-block {
    background-color: #fdecea;
    border-left-color: #dc3545;
    color: #721c24;
}

.e-block.custom-font {
    font-family: 'Georgia', serif;
    font-size: 18px;
    color: #4a4a4a;
    border-bottom: 2px dotted #ccc;
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>
