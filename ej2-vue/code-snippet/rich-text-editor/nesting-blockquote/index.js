import Vue from 'vue';
import { RichTextEditorPlugin, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';

Vue.use(RichTextEditorPlugin);
 
new Vue({
	el: '#app',
	template: `  <ejs-richtexteditor ref="defaultRTE" :value="rteValue">
  </ejs-richtexteditor>`,

  data() {
    return {
      rteValue: `<blockquote><p><strong>Outer Quote:</strong> The Rich Text Editor provides a flexible way to format quotations.</p><blockquote><p><em>Inner Quote:</em> You can even nest blockquotes to represent quoted replies or layered citations.</p><blockquote><p><em>Deep Quote:</em> This is useful in forums, emails, or academic writing where multiple levels of quoting are needed.</p></blockquote></blockquote></blockquote>`,
    }
  },
  provide: {
    richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar]
  }
});