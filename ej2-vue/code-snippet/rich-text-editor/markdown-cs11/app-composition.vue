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
import { Browser, addClass, removeClass, createElement,  } from "@syncfusion/ej2-base";
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
   if (
        e.targetItem &&
        (e.targetItem === 'SourceCode' || e.targetItem === 'Preview')
      ) {
        mirrorConversion(e);
      }
};
const mirrorConversion = (e) => {
  var rteInstance = rteObj.ej2Instances;
    const id = rteInstance.getID() + 'mirror-view';
    const rteContainer =
      rteInstance.element.querySelector('.e-rte-container');
    let mirrorView = rteInstance.element.querySelector('#' + id);
    if (e.targetItem === 'Preview') {
      rteInstance.value = myCodeMirror.getValue();
      rteInstance.dataBind();
      rteContainer.classList.remove('e-rte-code-mirror-enabled');
      rteInstance.focusIn();
    } else {
      rteContainer.classList.add('e-rte-code-mirror-enabled');
      rteContainer.classList.remove('e-source-code-enabled');
      if (!mirrorView) {
        mirrorView = createElement('div', {
          className: 'rte-code-mirror',
          id: id,
          styles: 'display: none;',
        });
        rteContainer.appendChild(mirrorView);
        renderCodeMirror(
          mirrorView,
          rteInstance.value === null ? '' : rteInstance.value
        );
      } else {
          myCodeMirror.setValue(
          rteInstance.value === null ? '' : rteInstance.value
        );
      }
      myCodeMirror.focus();
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
.CodeMirror-linenumber,
.CodeMirror-gutters {
  display: none;
}
.e-rte-code-mirror-enabled .rte-code-mirror {
  display: block !important;
  /* To show the custom source code view. */
}

.e-rte-code-mirror-enabled .e-rte-content {
  display: none !important;
  /* To hide the editor area when custom source code enabled. */
}
body[class*='-dark'] .em-name {
  color: #fff !important;
}

/** custom source code styles **/
body[class*='-dark'] .rte-code-mirror .cm-tag {
  color: #00ff00;
}

body[class*='-dark'] .rte-code-mirror .cm-string {
  color: blue;
}

body[class*='-dark'] .rte-code-mirror .cm-attribute {
  color: #f00;
}

body[class*='-dark'] .rte-code-mirror .CodeMirror-gutters,
body[class*='-dark'] .rte-code-mirror .CodeMirror {
  background-color: transparent;
  color: #fff;
}
</style>