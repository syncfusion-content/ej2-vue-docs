<template>
  <div id='container'>
    <ejs-blockeditor :blocks="blocksData"></ejs-blockeditor>
  </div>
</template>

<script setup>
import { BlockEditorComponent as EjsBlockeditor  } from "@syncfusion/ej2-vue-blockeditor";

const blocksData = [
    {
        type: 'Paragraph',
        content: [
            {
                type: ContentType.Text,
                content: 'This is a paragraph block example.'
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
