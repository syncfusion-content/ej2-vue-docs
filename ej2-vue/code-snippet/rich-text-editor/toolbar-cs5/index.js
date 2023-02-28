
  import Vue from 'vue';
  import { RichTextEditorPlugin, NodeSelection, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';

  Vue.use(RichTextEditorPlugin);

  
new Vue({
	el: '#app',
	template: `
<div>
  <ejs-richtexteditor ref="defaultRTE" :placeholder="placeholder" >
    <p>The rich text editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p>
    <p id="key"><b>Key features:</b></p>
    <ul>
      <li>
        <p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p>
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
    </ul>
  </ejs-richtexteditor>
  <button v-on:click="onClick" class="e-btn">Set Cursor Position</button>
  </div>
`,

    data() {
      return {
        placeholder: "Type Something",
    }
    },
   methods: {
     onClick: function(event){
       var instance = this.$refs.defaultRTE.$el.ej2_instances[0];
      let element = instance.contentModule.getDocument().getElementById("key");
      let selectioncursor = new NodeSelection();
      let range = document.createRange();
      range.setStart(element, 1); // to set the range
      selectioncursor.setRange(document, range); // to set the cursor
     }
    },
    provide: {
      richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar]
    }
  
});