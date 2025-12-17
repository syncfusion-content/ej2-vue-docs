<template>
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData" :enableDragAndDrop= "true"></ejs-blockeditor>
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
            properties: { level: 1},
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Drag and Drop Demo'
                }
            ]
        },
        {
            blockType: 'Paragraph',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Try rearranging blocks by dragging the handle that appears when hovering over them. You can drag a single block or select multiple blocks to drag them together.'
                }
            ]
        },
        {
            blockType: 'BulletList',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Drag and drop is enabled by default'
                }
            ]
        },
        {
            blockType: 'NumberedList',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'You can select multiple blocks and drag them together'
                }
            ]
        },
        {
            blockType: 'NumberedList',
            content: [
                {
                    contentType: ContentType.Text,
                    content: 'Try dragging this block to rearrange the content'
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
  @import '../node_modules/@syncfusion/ej2-base/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-popups/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-buttons/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-splitbuttons/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-navigations/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-dropdowns/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-inputs/styles/fluent2.css';
  @import '../node_modules/@syncfusion/ej2-blockeditor/styles/fluent2.css';
</style>
