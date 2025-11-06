<template>
  <div>
    <button class="e-btn" style="margin-bottom: 20px" @click="selectSecondParagraph">
      Select Paragraph
    </button>
    <ejs-richtexteditor ref="rteRef" :value="rteValue" height="400">
    </ejs-richtexteditor>
  </div>
</template>

<script setup>
import {
  RichTextEditorComponent as EjsRichtexteditor,
  Toolbar,
  Link,
  Image,
  HtmlEditor,
  QuickToolbar
} from '@syncfusion/ej2-vue-richtexteditor';
import { ref } from 'vue';

const rteRef = ref();

const rteValue = `<p>This is paragraph one.</p><p>This is paragraph two.</p>`;

function selectSecondParagraph() {
  const panel = rteRef.value?.ej2Instances?.contentModule?.getEditPanel();
  if (!panel) return;

  const paragraphs = panel.querySelectorAll('p');
  if (paragraphs.length > 1) {
    const range = document.createRange();
    range.selectNode(paragraphs[1]);

    const selection = window.getSelection();
    if (selection) {
      selection.removeAllRanges();
      selection.addRange(range);
    }
  }
}
provide('richtexteditor', [Toolbar, Link, Image, HtmlEditor, QuickToolbar]);
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