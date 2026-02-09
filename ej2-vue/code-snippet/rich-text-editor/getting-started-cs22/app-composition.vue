<template>
  <ejs-richtexteditor ref="defaultRTE" :height="340" :toolbarSettings="toolbarData" :valueTemplate="valueTemplate" editorMode="Markdown">
  </ejs-richtexteditor>
</template>
<script setup>
import { provide, onMounted, ref } from "vue";
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, Link, Image, MarkdownEditor } from '@syncfusion/ej2-vue-richtexteditor';
const defaultRTE = ref(null);
const toolbarData = {
  items: ['Bold', 'Italic', 'StrikeThrough', '|',
    'Formats', 'OrderedList', 'UnorderedList', '|',
    'CreateLink', 'Image', '|','Undo', 'Redo']
  };
const valueTemplate = `The sample is added to showcase **markdown editing**.

Type or edit the content and apply formatting to view markdown formatted content.

We can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/).

The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content`;
onMounted(() => {
  document.addEventListener('keyup', onKeyUp);
});
const onKeyUp = (e) => {
  if (e.altKey && e.keyCode === 84) { /* t */
    // press alt+t to focus the component.
    defaultRTE.value.ej2Instances.focusIn();
  }
}
provide('richtexteditor',  [Toolbar, Link, Image, MarkdownEditor]);
</script>
<style>
@import "https://ej2.syncfusion.com/vue/documentation/../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/tailwind3.css";
</style>