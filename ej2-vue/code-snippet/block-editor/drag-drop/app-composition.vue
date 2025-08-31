<template>
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData" :enableDragAndDrop= "true" ></ejs-blockeditor>
  </div>
</template>

<script setup>
import { BlockEditorComponent as EjsBlockeditor  } from "@syncfusion/ej2-vue-blockeditor";

const blocksData = [
        {
            id: 'block-1',
            type: 'Heading',
            props: { level: 1},
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
    ];

</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/fluent2.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/fluent2.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/fluent2.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/fluent2.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/fluent2.css";
@import "../node_modules/@syncfusion/ej2-interactive-chat/styles/fluent2.css";
@import "../node_modules/@syncfusion/ej2-blockeditor/styles/fluent2.css";
</style>
