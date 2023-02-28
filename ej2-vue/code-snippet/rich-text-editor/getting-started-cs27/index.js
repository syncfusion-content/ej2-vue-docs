
  import Vue from 'vue';
  import { RichTextEditorPlugin, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';

  Vue.use(RichTextEditorPlugin);

  
new Vue({
	el: '#app',
	template: `
   <ejs-richtexteditor :value="value"></ejs-richtexteditor>
`,

    data() {
      return {
        value: `<div onmouseover='javascript:alert(1)'>Prevention of Cross Sit Scripting (XSS) </div> <script>alert('hi')<\/script>`
      }
    },
    provide: {
      richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar]
    }
  
});