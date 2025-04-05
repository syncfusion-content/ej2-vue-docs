
  import Vue from "vue";
  import CodeMirror from "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.3.0/codemirror.js";
  import CodeMirror from "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.3.0/mode/css/css.js";
  import CodeMirror from "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.3.0/mode/xml/xml.js";
  import CodeMirror from "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.3.0/mode/htmlmixed/htmlmixed.js";
  import CodeMirror from "https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.3.0/mode/javascript/javascript.js";
  import { Browser, addClass, removeClass, createElement,  } from "@syncfusion/ej2-base";
  import { RichTextEditorPlugin, Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar } from "@syncfusion/ej2-vue-richtexteditor";

  Vue.use(RichTextEditorPlugin);

  
new Vue({
	el: '#app',
	template: `
  <ejs-richtexteditor ref="rteObj" :height="360" :value="value" :toolbarSettings="toolbarSettings" :actionComplete="actionCompleteHandler" :showCharCount="showCharCount" :maxLength="maxLength"></ejs-richtexteditor>
`,

    data: function() {
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
        var rteInstance = this.$refs.rteObj.ej2Instances;
        const id = rteInstance.getID() + 'mirror-view';
        const rteContainer =
          rteInstance.element.querySelector('.e-rte-container');
        let mirrorView = rteInstance.element.querySelector('#' + id);
        if (e.targetItem === 'Preview') {
          rteInstance.value = this.myCodeMirror.getValue();
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
            this.renderCodeMirror(
              mirrorView,
              rteInstance.value === null ? '' : rteInstance.value
            );
          } else {
            this.myCodeMirror.setValue(
              rteInstance.value === null ? '' : rteInstance.value
            );
          }
          this.myCodeMirror.focus();
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
        if (
          e.targetItem &&
          (e.targetItem === 'SourceCode' || e.targetItem === 'Preview')
        ) {
          this.mirrorConversion(e);
        }
      },
    },
    provide:{
      richtexteditor:[Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar]
    }
  
});