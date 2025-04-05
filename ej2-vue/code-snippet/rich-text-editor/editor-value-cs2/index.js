import Vue from 'vue';
import { RichTextEditorPlugin, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';

Vue.use(RichTextEditorPlugin);
  
new Vue({
	el: '#app',
	template: `<div><h3>Editor 1</h3>
  <ejs-richtexteditor v-model="editorContent"></ejs-richtexteditor>

  <h3>Editor 2</h3>
  <ejs-richtexteditor v-model="editorContent"></ejs-richtexteditor></div>`,

  data: function () {
    return {
      editorContent: 'Initial content',
    };
  },
  mounted() {
    // Automatically update editor content after 2 seconds
    setTimeout(() => {
      this.editorContent = 'Updated content after 2 seconds!';
    }, 2000);
  },
  provide: {
    richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar]
  }
});