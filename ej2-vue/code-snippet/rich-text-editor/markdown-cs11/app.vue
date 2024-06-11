<template>
  <ejs-richtexteditor ref="rteObj" :height="360" :value="value" :toolbarSettings="toolbarSettings"
    :actionComplete="actionCompleteHandler" :showCharCount="showCharCount" :maxLength="maxLength"></ejs-richtexteditor>
</template>

<script>

import CodeMirror from "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.3.0/codemirror.js";
import CodeMirror from "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.3.0/mode/css/css.js";
import CodeMirror from "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.3.0/mode/xml/xml.js";
import CodeMirror from "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.3.0/mode/htmlmixed/htmlmixed.js";
import CodeMirror from "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.3.0/mode/javascript/javascript.js";
import { Browser, addClass, removeClass } from "@syncfusion/ej2-base";
import { RichTextEditorComponent, Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar } from "@syncfusion/ej2-vue-richtexteditor";
export default {
  name: "App",
  components: {
    "ejs-richtexteditor": RichTextEditorComponent
  },
  data: function () {
    return {
      showCharCount: true,
      myCodeMirror: '',
      value: `<p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p>
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
          </ul>`,
      maxLength: 2000,
      toolbarSettings: {
        items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
          'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
          'LowerCase', 'UpperCase', '|',
          'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
          'Outdent', 'Indent', '|',
          'CreateLink', 'Image', '|', 'ClearFormat', 'Print', 'SourceCode',
          'FullScreen', '|', 'Undo', 'Redo'
        ]
      },
    };
  },
  methods: {
    mirrorConversion: function (e) {
      var textArea = this.$refs.rteObj.ej2Instances.contentModule.getEditPanel();
      var id = this.$refs.rteObj.ej2Instances.getID() + 'mirror-view';
      var mirrorView = this.$refs.rteObj.$el.parentNode.querySelector('#' + id);
      var charCount = this.$refs.rteObj.$el.parentNode.querySelectorAll('.e-rte-character-count');
      if (e.targetItem === 'Preview') {
        textArea.style.display = 'block';
        mirrorView.style.display = 'none';
        textArea.innerHTML = this.myCodeMirror.getValue();
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
        this.renderCodeMirror(mirrorView, this.$refs.rteObj.ej2Instances.value);
        charCount[0].style.display = 'none';
      }
    },
    renderCodeMirror: function (mirrorView, content) {
      this.myCodeMirror = CodeMirror(mirrorView, {
        value: content,
        lineNumbers: true,
        mode: 'text/html',
        lineWrapping: true,
      });
    },
    actionCompleteHandler: function (e) {
      if (e.targetItem && (e.targetItem === 'SourceCode' || e.targetItem === 'Preview')) {
        this.$refs.rteObj.ej2Instances.sourceCodeModule.getPanel().style.display = 'none';
        this.mirrorConversion(e);
      }
      else {
        var proxy = this;
        setTimeout(function () {
          proxy.$refs.rteObj.ej2Instances.toolbarModule.refreshToolbarOverflow();
        }, 400);
      }
    }
  },
  provide: {
    richtexteditor: [Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar]
  }
}
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