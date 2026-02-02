<template>
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData"></ejs-blockeditor>
  </div>
</template>

<script setup>
import { BlockEditorComponent as EjsBlockeditor, ContentType, BlockType } from "@syncfusion/ej2-vue-blockeditor";

const blocksData = [
      {
          blockType: BlockType.Table,
          properties: {
              columns: [{ id: 'col1', headerText: 'Column 1' }, { id: 'col2', headerText: 'Column 2' }],
              rows: [
                  {
                      cells: [
                          {
                              columnId: 'col1',
                              blocks: [{ blockType: 'Paragraph', content: [{ contentType: ContentType.Text, content: 'Cell 1' }] }]
                          },
                          {
                              columnId: 'col2',
                              blocks: [{ blockType: 'Paragraph', content: [{ contentType: ContentType.Text, content: 'Cell 2' }] }]
                          }
                      ]
                  },
                  {
                      cells: [
                          {
                              columnId: 'col1',
                              blocks: [{ blockType: 'Paragraph', content: [{ contentType: ContentType.Text, content: 'Cell 3' }] }]
                          },
                          {
                              columnId: 'col2',
                              blocks: [{ blockType: 'Paragraph', content: [{ contentType: ContentType.Text, content: 'Cell 4' }] }]
                          }
                      ]
                  }
              ]
          }
      },
      {
          blockType: 'Paragraph',
          content: [
              {
                  contentType: ContentType.Text,
                  content: 'You can customize the table further by configuring properties like width, enableHeader to show a header row, enableRowNumbers to display row indices, and readOnly to prevent edits.'
              }
          ]
      }]

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
