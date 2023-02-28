
  import Vue from 'vue';
  import { RichTextEditorPlugin, Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';

  Vue.use(RichTextEditorPlugin);

  
new Vue({
	el: '#app',
	template: `
  <ejs-richtexteditor ref="defaultRTE" :height="340" :showCharCount="showCharCount"
  :maxLength="maxLength" :value="value"></ejs-richtexteditor>
`,

     data: function() {
      return {
        showCharCount: true,
        maxLength: 2000,
        value: `<p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p>
          <p><b>Key features:</b></p>
          <ul>
            <li>
              <p>Provides IFRAME and DIV modes</p>
            </li>
            <li>
              <p>Capable of handling markdown editing.</p>
            </li>
            <li>
              <p>Contains a modular library to load the necessary functionality on demand.</p>
            </li>
            <li>
              <p>Provides a fully customizable toolbar.</p>
            </li>
            <li>
              <p>Provides HTML view to edit the source directly for developers.</p>
            </li>
            <li>
              <p>Supports third-party library integration.</p>
            </li>
            <li>
              <p>Allows preview of modified content before saving it.</p>
            </li>
            <li>
              <p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p>
            </li>
          </ul>`,
      }
    },
    provide: {
      richtexteditor: [Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar]
    }
  
});