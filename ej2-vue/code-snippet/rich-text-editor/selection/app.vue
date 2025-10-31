<template>
  <div class="control-section">
    <div class="sample-container">
      <ejs-slider
        id="range"
        :type="'Range'"
        :value="sliderValue"
        :min="0"
        :max="maxLength"
        @change="onSliderChange"
      />
      <ejs-richtexteditor
        ref="rteObj"
        id="editor"
        :value="rteValue"
        :height="400"
      >
        <ejs-richtexteditor-inject
          :services="[Toolbar, Link, Image, HtmlEditor, QuickToolbar, Table]"
        />
      </ejs-richtexteditor>
    </div>
  </div>
</template>

<script>
import {
  RichTextEditorComponent,
  Toolbar,
  Link,
  Image,
  HtmlEditor,
  QuickToolbar,
  Table,
} from '@syncfusion/ej2-vue-richtexteditor';
import { SliderComponent } from '@syncfusion/ej2-vue-inputs';

export default {
  name: 'App',
  components: {
    'ejs-richtexteditor': RichTextEditorComponent,
    'ejs-slider': SliderComponent,
    'ejs-richtexteditor-inject': RichTextEditorComponent.Inject,
  },
  data() {
    return {
      rteValue: `<p>The Syncfusion Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here. Key features: Provides IFRAME and DIV modes. Bulleted and numbered lists. Handles images, hyperlinks, videos, hyperlinks, uploads, etc. Contains undo/redo manager.</p>`,
      sliderValue: [0, 50],
      maxLength: 400,
    };
  },
  provide: {
    richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar, Table],
  },
  mounted() {
    this.$refs.rteObj.ej2Instances.element.addEventListener('created', () => {
      const panel =
        this.$refs.rteObj.ej2Instances.contentModule?.getEditPanel();
      const textNode = panel?.firstChild?.firstChild;
      if (textNode && textNode.textContent) {
        this.maxLength = textNode.textContent.length;
      }
    });
  },
  methods: {
    onSliderChange(args) {
      const [start, end] = args.value;
      const panel = this.$refs.rteObj.ej2Instances.contentModule.getEditPanel();
      const textNode = panel?.firstChild?.firstChild;
      if (!textNode || !(textNode instanceof Text)) return;

      const safeStart = Math.min(start, textNode.length);
      const safeEnd = Math.min(end, textNode.length);

      const range = document.createRange();
      range.setStart(textNode, safeStart);
      range.setEnd(textNode, safeEnd);

      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
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