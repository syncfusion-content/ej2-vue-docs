<template>
  <ejs-richtexteditor ref="rteObj" :height="360" :value="value" :toolbarSettings="toolbarSettings"
    :actionComplete="actionCompleteHandler" :showCharCount="showCharCount" :maxLength="maxLength"></ejs-richtexteditor>
</template>

<script setup>
import { provide, ref } from 'vue';
import CodeMirror from "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.3.0/codemirror.js";
import CodeMirror from "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.3.0/mode/css/css.js";
import CodeMirror from "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.3.0/mode/xml/xml.js";
import CodeMirror from "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.3.0/mode/htmlmixed/htmlmixed.js";
import CodeMirror from "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.3.0/mode/javascript/javascript.js";
import { Browser, addClass, removeClass } from "@syncfusion/ej2-base";
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar } from "@syncfusion/ej2-vue-richtexteditor";
const rteObj = ref(null);
const showCharCount = true;
let myCodeMirror = '';
const value = `<p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p>
<p><b>Key features:</b></p>
          <ul>
            <li>
              <p>Provides IFRAME and DIV modes</p>
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
            <li>
              <p>Provides HTML view to edit the source directly for developers.</p>
            </li>
            <li>
              <p>Supports third-party library integration.</p>
            </li>
            <li>
              <p>Allows preview of modified content before saving it.</p>
            </li>
            <li>
              <p>Handles images, hyperlinks, video, hyperlinks, uploads, etc.</p>
            </li>
          </ul>`;
const maxLength = 2000;
const toolbarSettings = {
  items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
    'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
    'LowerCase', 'UpperCase', '|',
    'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
    'Outdent', 'Indent', '|',
    'CreateLink', 'Image', '|', 'ClearFormat', 'Print', 'SourceCode',
    'FullScreen', '|', 'Undo', 'Redo'
  ]
};
const actionCompleteHandler = (e) => {
  if (e.targetItem && (e.targetItem === 'SourceCode' || e.targetItem === 'Preview')) {
    rteObj.value.ej2Instances.sourceCodeModule.getPanel().style.display = 'none';
    mirrorConversion(e);
  }
  else {
    setTimeout(function () {
      rteObj.value.ej2Instances.toolbarModule.refreshToolbarOverflow();
    }, 400);
  }
};
const mirrorConversion = (e) => {
  var textArea = rteObj.value.ej2Instances.contentModule.getEditPanel();
  var id = rteObj.value.ej2Instances.getID() + 'mirror-view';
  var mirrorView = rteObj.value.$el.parentNode.querySelector('#' + id);
  var charCount = rteObj.value.$el.parentNode.querySelectorAll('.e-rte-character-count');
  if (e.targetItem === 'Preview') {
    textArea.style.display = 'block';
    mirrorView.style.display = 'none';
    textArea.innerHTML = myCodeMirror.getValue();
    charCount[0].style.display = 'block';
  } else {
    if (!mirrorView) {
      mirrorView = document.createElement('div', { className: 'e-content' });
      mirrorView.id = id;
      textArea.parentNode.appendChild(mirrorView);
    } else {
      mirrorView.innerHTML = '';
    }
    textArea.style.display = 'none';
    mirrorView.style.display = 'block';
    renderCodeMirror(mirrorView, rteObj.value.ej2Instances.value);
    charCount[0].style.display = 'none';
  }
};
const renderCodeMirror = (mirrorView, content) => {
  myCodeMirror = CodeMirror(mirrorView, {
    value: content,
    lineNumbers: true,
    mode: 'text/html',
    lineWrapping: true,
  });
};
provide('richtexteditor', [Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar]);
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
@import "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.3.0/codemirror.min.css";

.e-code-mirror::before {
  content: '\e345';
}

.e-html-preview::before {
  content: '\e350';
}

.CodeMirror-linenumber,
.CodeMirror-gutters {
  display: none;
}
</style>