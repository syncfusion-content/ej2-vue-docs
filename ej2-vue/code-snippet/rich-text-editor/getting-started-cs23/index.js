import Vue from 'vue';
import { RichTextEditorPlugin, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';

Vue.use(RichTextEditorPlugin);

new Vue({
	el: '#app',
	template: `
  <ejs-richtexteditor ref="defaultRTE" :value="rteValue" :height="340" :toolbarSettings="toolbarData" :keyConfigs="keyConfig"></ejs-richtexteditor>`,

    data() {
      return {
        toolbarData: {
          items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
            'Outdent', 'Indent', '|',
            'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
            'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
        },
        keyConfig: {
          'bold': 'ctrl+alt+b',
          'italic': 'ctrl+alt+i',
          'underline': 'ctrl+alt+u',
        },
        rteValue: `<p>The Syncfudion Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here.</p><p><b>Key features:</b></p><ul><li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes.</p></li><li><p>Bulleted and numbered lists.</p></li><li><p>Handles images, hyperlinks, videos, hyperlinks, uploads, etc.</p></li><li><p>Contains undo/redo manager. </p></li></ul><div style='display: inline-block; width: 60%; vertical-align: top; cursor: auto;'><img alt='Sky with sun' src='https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png' width='309' style='min-width: 10px; min-height: 10px; width: 309px; height: 174px;' class='e-rte-image e-imginline e-rte-drag-image' height='174' /></div>`,
      }
    },
    mounted() {
      document.addEventListener('keyup', this.onKeyUp);
    },
    methods: {
      onKeyUp (e) {
        if (e.altKey && e.keyCode === 84) { /* t */
          // press alt+t to focus the component.
          this.$refs.defaultRTE.ej2Instances.focusIn();
        }
      }
    },
    provide: {
      richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar]
    }
});