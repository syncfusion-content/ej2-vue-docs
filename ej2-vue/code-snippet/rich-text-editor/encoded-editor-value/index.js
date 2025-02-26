import Vue from 'vue';
import { RichTextEditorPlugin, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';

Vue.use(RichTextEditorPlugin);
  
new Vue({
	el: '#app',
	template: `<ejs-richtexteditor ref="defaultRTE" :height="350" :enableHtmlEncode="enableHtmlEncode" :value="rteValue"></ejs-richtexteditor>`,

  data() {
    return {
      enableHtmlEncode: true,
      rteValue: `&lt;p&gt;Rich Text Editor is a WYSIWYG editing control which will reduce the effort for users while trying to express their formatting word content as HTML or Markdown format.&lt;/p&gt;&lt;p&gt;&lt;b&gt;API’s:&lt;/b&gt;&lt;/p&gt;&lt;ul&gt;&lt;li&gt;&lt;p&gt;maxLength - allows restricting the maximum length to be entered.&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;readOnly - allows to change it as a non-editable state.&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;enabled - enable or disable the RTE component.&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;enableHtmlEncode - Get the encoded string value through value property and source code panel&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;getValue - get the value of RTE.&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;getSelection - get the selected text of RTE.&lt;/p&gt;&lt;/li&gt;&lt;li&gt;&lt;p&gt;selectAll - select all content in RTE.&lt;/p&gt;&lt;/li&gt;&lt;/ul&gt;`,
    }
  },
  provide: {
    richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar]
  }
});