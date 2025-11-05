import Vue from 'vue';
import { RichTextEditorPlugin, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';

Vue.use(RichTextEditorPlugin);
 
new Vue({
	el: '#app',
	template: `<div>
    <button
      class="e-btn"
      style="margin-bottom: 20px"
      @click="selectCell"
    >
      Select Cell
    </button>
    <ejs-richtexteditor ref="defaultRTE" :value="rteValue">
    </ejs-richtexteditor>
  </div>`,

  data() {
    return {
      rteValue: `<table style="width:100%; border-collapse: collapse;" border="1">
    <thead>
      <tr>
        <th style="font-weight:bold; padding:8px;">Product</th>
        <th style="font-weight:bold; padding:8px;">Price</th>
        <th style="font-weight:bold; padding:8px;">Stock</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding:8px;">Product A</td>
        <td style="padding:8px;">$25</td>
        <td style="padding:8px;">Available</td>
      </tr>
      <tr>
        <td style="padding:8px;">Product B</td>
        <td style="padding:8px;">$40</td>
        <td style="padding:8px;">Out of Stock</td>
      </tr>
    </tbody>
  </table>`,
    }
  },
  provide: {
    richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar]
  },
  methods: {
    selectCell() {
      const panel =
        this.$refs.defaultRTE.ej2Instances.contentModule.getEditPanel();
        const cells = panel.querySelectorAll('td');

        if (cells.length > 2) {
          const cell = cells[2]; // Third cell
          const range = document.createRange();
          range.selectNode(cell);

          const selection = window.getSelection();
          if (selection) {
            selection.removeAllRanges();
            selection.addRange(range);
          }

          cell.style.backgroundColor = '#cce5ff';
          cell.classList.add('e-cell-select');
        }
     
      }
  },
});