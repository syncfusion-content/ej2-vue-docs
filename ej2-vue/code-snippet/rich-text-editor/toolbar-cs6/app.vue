<template>
  <div>
    <div class="control-section">
      <div class="sample-container">
        <div class="default-section">
          <ejs-richtexteditor ref="rteObj" :value="rteValue" :fontFamily="fontFamily" :toolbarSettings="toolbarSettings"></ejs-richtexteditor>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import { RichTextEditorComponent, Toolbar, Link, Count, Image, HtmlEditor, QuickToolbar } from "@syncfusion/ej2-vue-richtexteditor";
export default {
  name: "App",
  components: {
    "ejs-richtexteditor": RichTextEditorComponent
  },
  data: function () {
    return {
      rteValue: `<p>The Syncfusion Rich Text Editor, a WYSIWYG (what you see is what you get) editor, is a user interface that allows you to create, edit, and format rich text content. You can try out a demo of this editor here.</p><p><b>Key features:</b></p><ul><li><p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes.</p></li><li><p>Bulleted and numbered lists.</p></li><li><p>Handles images, hyperlinks, videos, hyperlinks, uploads, etc.</p></li><li><p>Contains undo/redo manager. </p></li></ul><div style='display: inline-block; width: 60%; vertical-align: top; cursor: auto;'><img alt='Sky with sun' src='https://cdn.syncfusion.com/ej2/richtexteditor-resources/RTE-Overview.png' width='309' style='min-width: 10px; min-height: 10px; width: 309px; height: 174px;' class='e-rte-image e-imginline e-rte-drag-image' height='174' /></div>`,
      fontFamily: {
        items: [
          { text: "Segoe UI", value: "Segoe UI", class: "e-segoe-ui", command: "Font", subCommand: "FontName" },
          { text: "Roboto", value: "Roboto", command: "Font", subCommand: "FontName" }, // here font is added
          { text: "Great vibes", value: "Great Vibes,cursive", command: "Font", subCommand: "FontName" }, // here font is added
          { text: "Noto Sans", value: "Noto Sans", command: "Font", subCommand: "FontName" },
          { text: "Impact", value: "Impact,Charcoal,sans-serif", class: "e-impact", command: "Font", subCommand: "FontName" },
          { text: "Tahoma", value: "Tahoma,Geneva,sans-serif", class: "e-tahoma", command: "Font", subCommand: "FontName" },
        ]
      },
      toolbarSettings: {
        items: ['Bold', 'Italic', 'Underline', 'StrikeThrough', '|',
          'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
          'LowerCase', 'UpperCase', '|',
          'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
          'Outdent', 'Indent', '|',
          'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
          'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
      },
    }
  },
  provide: {
    richtexteditor: [Toolbar, Link, Count, Image, HtmlEditor, QuickToolbar]
  }
}
</script>

<style>@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";
</style>