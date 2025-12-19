import Vue from 'vue';
import { BlockEditorPlugin, ContentType, BlockType } from "@syncfusion/ej2-vue-blockeditor";

Vue.use(BlockEditorPlugin);

new Vue({
	el: '#app',
	template: `
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData"></ejs-blockeditor>
  </div>
`,

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
    }
  },
  methods: {
    
  }

});