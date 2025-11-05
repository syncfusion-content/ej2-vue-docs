<template>
  <div>
    <button
      class="e-btn"
      style="margin-bottom: 20px"
      @click="selectSecondParagraph"
    >
      Select Paragraph
    </button>
    <ejs-richtexteditor ref="defaultRTE" :value="rteValue">
    </ejs-richtexteditor>
  </div>
</template>

<script>
import {
  RichTextEditorComponent,
  Toolbar,
  Link,
  Image,
  Table,
  HtmlEditor,
  QuickToolbar,
} from '@syncfusion/ej2-vue-richtexteditor';

export default {
  name: 'App',
  components: {
    'ejs-richtexteditor': RichTextEditorComponent,
  },

  data() {
    return {
      rteValue: `<p>This is paragraph one.</p><p>This is paragraph two.</p>`,
    };
  },
  provide: {
    richtexteditor: [Toolbar, Link, Image, Table, HtmlEditor, QuickToolbar],
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
};
</script>
<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";
</style>