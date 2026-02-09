<template>
  <ejs-richtexteditor ref="rteObj" :value="value" :height="340" :toolbarSettings="toolbarSettings" :actionComplete="actionCompleteHandler" :showCharCount="showCharCount" :maxLength="maxLength"></ejs-richtexteditor>
</template>

<script>  
import { Browser, addClass, removeClass } from "@syncfusion/ej2-base";
import { RichTextEditorComponent, Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar } from "@syncfusion/ej2-vue-richtexteditor";
export default {
name: "App",
components: {
"ejs-richtexteditor":RichTextEditorComponent
},
    data: function() {
      return {
        showCharCount: true,
        myCodeMirror: '',
        value: `<p>The Syncfusion Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here.</p><p><b>Key features:</b></p><ul><li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes.</p></li><li><p>Bulleted and numbered lists.</p></li><li><p>Handles images, hyperlinks, videos, hyperlinks, uploads, etc.</p></li><li><p>Contains undo/redo manager. </p></li></ul><div style='display: inline-block; width: 60%; vertical-align: top; cursor: auto;'><img alt='Sky with sun' src='https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png' width='309' style='min-width: 10px; min-height: 10px; width: 309px; height: 174px;' class='e-rte-image e-imginline e-rte-drag-image' height='174' /></div>`,
        maxLength: 2000,
        toolbarSettings: {
            items: [ 'SourceCode']
        },
      };
    },
    methods: {
      mirrorConversion: function(e) {
        var textArea = this.$refs.rteObj.ej2Instances.contentModule.getEditPanel();
        var id = this.$refs.rteObj.ej2Instances.getID() +  'mirror-view';
        var mirrorView = this.$refs.rteObj.ej2Instances.inputElement.parentElement.querySelector('#' + id);
        var charCount =this.$refs.rteObj.ej2Instances.element.querySelector('.e-rte-character-count');
        if (e.targetItem === 'Preview') {
          textArea.style.display = 'block';
          mirrorView.style.display = 'none';
          textArea.innerHTML = this.myCodeMirror.getValue();
          charCount.style.display = 'block';
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
          charCount.style.display = 'none';
        }
      },
      renderCodeMirror: function(mirrorView, content) {
        this.myCodeMirror = CodeMirror(mirrorView, {
          value: content,
          lineNumbers: true,
          mode: 'text/html',
          lineWrapping: true,
        });
      },
      actionCompleteHandler: function(e) {
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
    provide:{
      richtexteditor:[Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar]
    }
  }
</script>

<style>

@import "../../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/tailwind3.css";

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