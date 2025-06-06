import Vue from 'vue';
import { RichTextEditorPlugin, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';
import { NodeSelection } from '@syncfusion/ej2-richtexteditor';

Vue.use(RichTextEditorPlugin);
  
new Vue({
	el: '#app',
	template: `<div>
                <button @click="setBackground" class="e-btn" style="margin: 5px">
                  Apply
                </button>
                <ejs-richtexteditor
                  ref="rteObj"
                  :height="340"
                  :value="rteValue"
                ></ejs-richtexteditor>
              </div>`,

  data() {
    return {
      rteValue: `<p>The Syncfusion Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here.</p><p><b>Key features:</b></p><ul><li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes.</p></li><li><p>Bulleted and numbered lists.</p></li><li><p>Handles images, hyperlinks, videos, hyperlinks, uploads, etc.</p></li><li><p>Contains undo/redo manager. </p></li></ul><div style='display: inline-block; width: 60%; vertical-align: top; cursor: auto;'><img alt='Sky with sun' src='https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png' width='309' style='min-width: 10px; min-height: 10px; width: 309px; height: 174px;' class='e-rte-image e-imginline e-rte-drag-image' height='174' /></div>`,
      nodeSelection: new NodeSelection(),
    }
  },
  methods: {
    setBackground() {
      const rteInstance = this.$refs.rteObj.ej2Instances;
      const rteContent = rteInstance.contentModule.getDocument();
      const firstParagraph = rteInstance.contentModule
        .getEditPanel()
        .querySelector('p');

      if (firstParagraph && firstParagraph.firstChild) {
        // Select text range using NodeSelection
        this.nodeSelection.setSelectionText(
          rteContent,
          firstParagraph.firstChild,
          firstParagraph.firstChild,
          4, // Start index
          20 // End index
        );

        // Apply background color
        rteInstance.executeCommand('backColor', 'yellow');
      }
    },
  },
  provide: {
    richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar]
  }
});