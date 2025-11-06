<template>
  <ejs-richtexteditor ref="defaultRTE" :value="rteValue" :toolbarSettings="toolbarSettings">
  </ejs-richtexteditor>
</template>

<script>
import { RichTextEditorComponent, Toolbar, Link, Image, Table, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';
export default {
  name: "App",
  components: {
    "ejs-richtexteditor": RichTextEditorComponent
  },

  data() {
    return {
      toolbarSettings: {
          items: ['Blockquote','Bold', 'Italic', 'Underline', 'StrikeThrough',
            'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
            'LowerCase', 'UpperCase', '|',
            'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
            'Outdent', 'Indent', '|',
            'CreateLink', 'Image','CreateTable', '|', 'ClearFormat',
            'SourceCode', 'FullScreen', '|', 'Undo', 'Redo']
      },
      rteValue: `<table border="1" style="width:100%; border-collapse: collapse;">
      <tr>
        <th>Department</th>
        <th>Details</th>
      </tr>
      <tr>
        <td>Sales</td>
        <td>
          <table border="1" style="width:100%; border-collapse: collapse;">
            <tr>
              <th>Employee</th>
              <th>Target</th>
            </tr>
            <tr>
              <td>John Doe</td>
              <td>$50,000</td>
            </tr>
            <tr>
              <td>Jane Smith</td>
              <td>$60,000</td>
            </tr>
          </table>
        </td>
      </tr>
      <tr>
        <td>Marketing</td>
        <td>Campaign planning in progress</td>
      </tr>
    </table>`,
    }
  },
  provide: {
    richtexteditor: [Toolbar, Link, Image, Table,HtmlEditor, QuickToolbar]
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
</style>