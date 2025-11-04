import Vue from 'vue';
import { RichTextEditorPlugin, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';

Vue.use(RichTextEditorPlugin);
 
new Vue({
	el: '#app',
	template: `<div>
    <button
      class="e-btn"
      style="margin-bottom: 20px"
      @click="selectSecondParagraph">Select Paragraph</button>
    <ejs-richtexteditor ref="defaultRTE" :value="rteValue">
    </ejs-richtexteditor>
  </div>`,

  data() {
    return {
      rteValue: `<p>This is paragraph one.</p><p>This is paragraph two.</p>`,
    }
  },
  provide: {
    richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar]
  },
  methods: {
    selectSecondParagraph() {
      const panel =
        this.$refs.defaultRTE.ej2Instances.contentModule.getEditPanel();
      const paragraphs = panel.querySelectorAll('p');

      if (paragraphs.length > 1) {
        const range = document.createRange();
        range.selectNode(paragraphs[1]); // Select second paragraph

        const selection = window.getSelection();
        if (selection) {
          selection.removeAllRanges();
          selection.addRange(range);
        }
      }
    },
  },
});