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
@import '../node_modules/@syncfusion/ej2-tailwind3-theme/styles/rich-text-editor/index.css';
</style>