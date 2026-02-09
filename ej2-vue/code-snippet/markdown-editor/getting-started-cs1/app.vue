<template>
 <ejs-richtexteditor editorMode="Markdown"></ejs-richtexteditor>
</template>

<script>
import { RichTextEditorComponent, Toolbar, Link, Image, Table, MarkdownEditor } from '@syncfusion/ej2-vue-richtexteditor';
export default {
    name: "App",
    components: {
        'ejs-richtexteditor': RichTextEditorComponent
    },
   data: function () {
    return {
    };
  },
  provide: {
    richtexteditor: [Toolbar, Link, Image, Table, MarkdownEditor],
  },
}
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-richtexteditor/styles/tailwind3.css";
</style>