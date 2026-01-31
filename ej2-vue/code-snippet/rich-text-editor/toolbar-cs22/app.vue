<template>
  <div>
    <ejs-richtexteditor ref="rteObj" :toolbarSettings="toolbarSettings">
      <p>The rich text editor component is WYSIWYG ("what you see is what you get") editor that provides the best
        user experience to create and update the content. Users can format their content using standard toolbar
        commands.</p>
      <p><b>Key features:</b></p>
      <ul>
        <li>
          <p>Provides &lt;IFRAME&gt; and &lt;DIV&gt; modes</p>
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
      </ul>
    </ejs-richtexteditor>
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
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css';
@import '../node_modules/@syncfusion/ej2-richtexteditor/styles/tailwind3.css';
</style>