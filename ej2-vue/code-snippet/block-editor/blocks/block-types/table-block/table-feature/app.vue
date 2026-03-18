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
            blockType: 'Paragraph',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'You can resize table columns by dragging column borders and can do multi-row column selection and perform deletion via popup.'
                }
            ]
        },
        {
            blockType: BlockType.Table,
            properties: {
                columns: [{ id: 'col1', headerText: 'Column 1' }, { id: 'col2', headerText: 'Column 2' },{ id: 'col3', headerText: 'Column 3' }, { id: 'col4', headerText: 'Column 4' }],
                rows: [
                {
                    cells: [
                        {
                            columnId: 'col1',
                            blocks: [{ blockType: BlockType.Paragraph, content: [{ contentType: ContentType.Text, content: 'Cell 1' }] }]
                        },
                        {
                            columnId: 'col2',
                            blocks: [{ blockType: BlockType.Paragraph, content: [{ contentType: ContentType.Text, content: 'Cell 2' }] }]
                        },
                        {
                            columnId: 'col3',
                            blocks: [{ blockType: BlockType.Paragraph, content: [{ contentType: ContentType.Text, content: 'Cell 3' }] }]
                        },
                        {
                            columnId: 'col4',
                            blocks: [{ blockType: BlockType.Paragraph, content: [{ contentType: ContentType.Text, content: 'Cell 4' }] }]
                        },
                    ]
                },
                {
                    cells: [
                        {
                            columnId: 'col1',
                            blocks: [{ blockType: BlockType.Paragraph, content: [{ contentType: ContentType.Text, content: 'Cell 5' }] }]
                        },
                        {
                            columnId: 'col2',
                            blocks: [{ blockType: BlockType.Paragraph, content: [{ contentType: ContentType.Text, content: 'Cell 6' }] }]
                        },
                        {
                            columnId: 'col3',
                            blocks: [{ blockType: BlockType.Paragraph, content: [{ contentType: ContentType.Text, content: 'Cell 7' }] }]
                        },
                        {
                            columnId: 'col4',
                            blocks: [{ blockType: BlockType.Paragraph, content: [{ contentType: ContentType.Text, content: 'Cell 8' }] }]
                        },
                    ]
                },
                {
                    cells: [
                        {
                            columnId: 'col1',
                            blocks: [{ blockType: BlockType.Paragraph, content: [{ contentType: ContentType.Text, content: 'Cell 9' }] }]
                        },
                        {
                            columnId: 'col2',
                            blocks: [{ blockType: BlockType.Paragraph, content: [{ contentType: ContentType.Text, content: 'Cell 10' }] }]
                        },
                        {
                            columnId: 'col3',
                            blocks: [{ blockType: BlockType.Paragraph, content: [{ contentType: ContentType.Text, content: 'Cell 11' }] }]
                        },
                        {
                            columnId: 'col4',
                            blocks: [{ blockType: BlockType.Paragraph, content: [{ contentType: ContentType.Text, content: 'Cell 12' }] }]
                        },
                    ]
                },
                {
                    cells: [
                        {
                            columnId: 'col1',
                            blocks: [{ blockType: BlockType.Paragraph, content: [{ contentType: ContentType.Text, content: 'Cell 13' }] }]
                        },
                        {
                            columnId: 'col2',
                            blocks: [{ blockType: BlockType.Paragraph, content: [{ contentType: ContentType.Text, content: 'Cell 14' }] }]
                        },
                        {
                            columnId: 'col3',
                            blocks: [{ blockType: BlockType.Paragraph, content: [{ contentType: ContentType.Text, content: 'Cell 15' }] }]
                        },
                        {
                            columnId: 'col4',
                            blocks: [{ blockType: BlockType.Paragraph, content: [{ contentType: ContentType.Text, content: 'Cell 16' }] }]
                        },
                    ]
                }
                ]
            }
        }]
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
