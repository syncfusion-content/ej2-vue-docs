<template>
  <div>
    <ejs-richtexteditor></ejs-richtexteditor>
  </div>
</template>
<script>
import { RichTextEditorComponent, Toolbar, Link, Count, Image, HtmlEditor, QuickToolbar } from "@syncfusion/ej2-vue-richtexteditor";
export default {
  name: "App",
  components: {
    "ejs-richtexteditor": RichTextEditorComponent,
  },
  provide: {
    richtexteditor: [Toolbar, Link, Count, Image, HtmlEditor, QuickToolbar],
  },
};
</script>

