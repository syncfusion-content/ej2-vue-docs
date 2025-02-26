import Vue from 'vue';
import { RichTextEditorPlugin, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';

Vue.use(RichTextEditorPlugin);
 
new Vue({
	el: '#app',
	template: `  <div class="control-section">
    <div class="editor">
      <h6 class="header">With style encapsulation</h6>
      <ejs-richtexteditor
        ref="rteObj"
        :value="rteValue"
        :iframeSettings="iframeSettings"
      >
      </ejs-richtexteditor>
    </div>
    <div class="editor">
      <h6 class="header">With style encapsulation</h6>
      <ejs-richtexteditor ref="rteObj" :value="rteValue"> </ejs-richtexteditor>
    </div>
  </div>`,

  data() {
    return {
      rteValue: `<p>The Syncfudion <strong>Rich Text Editor</strong>, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here.</p><p><b>Key features:</b></p><ul>
            <li>
               <p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes.</p>
            </li>
            <li>
               <p>Bulleted and numbered lists.</p>
            </li>
            <li>
               <p>Handles images, hyperlinks, videos, hyperlinks, uploads, etc.</p>
            </li>
            <li>
               <p>Contains undo/redo manager. </p>
            </li>
         </ul><div style="display: inline-block; width: 60%; vertical-align: top; cursor: auto;"></div> `,
        iframeSettings: {
          enable: true,
        },
    }
  },
  provide: {
    richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar]
  }
});