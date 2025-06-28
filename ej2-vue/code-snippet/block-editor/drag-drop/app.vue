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
            id: 'block-1',
            type: 'Heading1',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Drag and Drop Demo'
                }
            ]
        },
        {
            id: 'block-2',
            type: 'Paragraph',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Try rearranging blocks by dragging the handle that appears when hovering over them. You can drag a single block or select multiple blocks to drag them together.'
                }
            ]
        },
        {
            id: 'block-3',
            type: 'BulletList',
            content: [
                {
                    type: ContentType.Text,
                    content: 'Drag and drop is enabled by default'
                }
            ]
        },
        {
            id: 'block-4',
            type: 'NumberedList',
            content: [
                {
                    type: ContentType.Text,
                    content: 'You can select multiple blocks and drag them together'
                }
            ]
        },
        {
            id: 'block-5',
            type: 'NumberedList',
            content: [
                {
                    type: ContentType.Text,
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
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/material.css";
</style>
