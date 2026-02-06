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

<script setup>
import {
  RichTextEditorComponent as EjsRichtexteditor,
  Toolbar,
  Link,
  Image,
  HtmlEditor,
  QuickToolbar,
  Table,
} from '@syncfusion/ej2-vue-richtexteditor';
import { SliderComponent as EjsSlider } from '@syncfusion/ej2-vue-inputs';
import { ref, onMounted, provide } from 'vue';

provide('richtexteditor', [Toolbar, Link, Image, HtmlEditor, QuickToolbar, Table]);

const rteObj = ref(null);
const sliderValue = ref([0, 50]);
const maxLength = ref(400);

const rteValue = `<p>The Syncfusion Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here. Key features: Provides IFRAME and DIV modes. Bulleted and numbered lists. Handles images, hyperlinks, videos, hyperlinks, uploads, etc. Contains undo/redo manager.</p>`;

function onSliderChange(args) {
  const [start, end] = args.value;
  const panel = rteObj.value?.ej2Instances?.contentModule?.getEditPanel();
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
}

onMounted(() => {
  const rteInstance = rteObj.value?.ej2Instances;
  if (!rteInstance) return;

  rteInstance.addEventListener('created', () => {
    const panel = rteInstance.contentModule?.getEditPanel();
    const textNode = panel?.firstChild?.firstChild;
    if (textNode && textNode.textContent) {
      maxLength.value = textNode.textContent.length;
    }
  });
});
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