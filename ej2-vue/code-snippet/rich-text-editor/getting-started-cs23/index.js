
  import Vue from 'vue';
  import { RichTextEditorPlugin, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';

  Vue.use(RichTextEditorPlugin);

  
new Vue({
	el: '#app',
	template: `
  <ejs-richtexteditor ref="defaultRTE" :height="200" placeholder="Type Something">
  </ejs-richtexteditor>
`,

    provide: {
      richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar]
    }
  
});