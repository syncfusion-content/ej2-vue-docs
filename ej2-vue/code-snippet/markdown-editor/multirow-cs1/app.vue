<template>
  <div id="markdown-editor">
    <ejs-richtexteditor
        ref="editor"
        :height="340"
        :width="500"
        editorMode="Markdown"
        :value="rteValue"
        :toolbarSettings="toolbarSettings"
      ></ejs-richtexteditor>
  </div>
</template>

<script>
import { RichTextEditorComponent, Toolbar, Link, Image,Table, MarkdownEditor } from '@syncfusion/ej2-vue-richtexteditor';
export default {
    name: "App",
    components: {
        'ejs-richtexteditor': RichTextEditorComponent
    },
   data: function () {
    return {
      rteValue: `In Rich Text Editor, you click the toolbar buttons to format the words and the changes are visible immediately. Markdown is not like that. When you format the word in Markdown format, you need to add Markdown syntax to the word to indicate which words and phrases should look different from each other. Rich Text Editor supports markdown editing when the editorMode set as **markdown** and using both *keyboard interaction* and *toolbar action*, you can apply the formatting to text. You can add our own custom formation syntax for the Markdown formation, [sample link](https://ej2.syncfusion.com/home/). The third-party library <b>Marked</b> is used in this sample to convert markdown into HTML content.`,
      toolbarSettings: {
        type: 'Multirow',
        items: [
          'Bold',
          'Italic',
          'StrikeThrough',
          'InlineCode',
          'SuperScript',
          'SubScript',
          '|',
          'Formats',
          'Blockquote',
          '|',
          'OrderedList',
          'UnorderedList',
          'CreateLink',
          'Image',
          'CreateTable',
          '|',
          'Undo',
          'Redo',
        ],
      },
    };
  },
  provide: {
    richtexteditor: [Toolbar, Link, Image, Table, MarkdownEditor],
  },
}
</script>

<style>@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/tailwind3.css";</style>