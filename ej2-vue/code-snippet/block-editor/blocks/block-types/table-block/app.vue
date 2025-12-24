<template>
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData"></ejs-blockeditor>
  </div>
</template>

<script>
import { BlockEditorComponent, ContentType, BlockType } from "@syncfusion/ej2-vue-blockeditor";

export default {
  components: {
    'ejs-blockeditor': BlockEditorComponent,
  },
  data: function () {
    return {
      blocksData: [
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
    };
  },
  methods: {
    
  }
};
</script>

<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-navigations/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-dropdowns/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-inputs/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-blockeditor/styles/fluent2.css';
</style>
