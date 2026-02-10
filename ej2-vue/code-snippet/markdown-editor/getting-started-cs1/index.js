import Vue from 'vue';
import { RichTextEditorPlugin, Toolbar, Link, Image, Table, MarkdownEditor } from '@syncfusion/ej2-vue-richtexteditor';

Vue.use(RichTextEditorPlugin);
 
new Vue({
	el: '#app',
	template: `<div id="markdown-editor">
    <ejs-richtexteditor editorMode="Markdown"></ejs-richtexteditor>`,
    data: function () {
      return {
      };
    },
    provide: {
      richtexteditor: [Toolbar, Link, Image,Table, MarkdownEditor],
    },
});