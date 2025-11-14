<template>
  <ejs-richtexteditor ref="defaultRTE" :value="rteValue">
  </ejs-richtexteditor>
</template>

<script>
import { RichTextEditorComponent, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';
export default {
  name: "App",
  components: {
    "ejs-richtexteditor": RichTextEditorComponent
  },

  data() {
    return {
      rteValue: `<blockquote><p><strong>Outer Quote:</strong> The Rich Text Editor provides a flexible way to format quotations.</p><blockquote><p><em>Inner Quote:</em> You can even nest blockquotes to represent quoted replies or layered citations.</p><blockquote><p><em>Deep Quote:</em> This is useful in forums, emails, or academic writing where multiple levels of quoting are needed.</p></blockquote></blockquote></blockquote>`,
    }
  },
  provide: {
    richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar]
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