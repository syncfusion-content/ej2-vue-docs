import Vue from "vue";
import { RichTextEditorPlugin, Toolbar, Link, Count, Image, HtmlEditor, QuickToolbar } from "@syncfusion/ej2-vue-richtexteditor";

Vue.use(RichTextEditorPlugin);

new Vue({
  el: "#app",
  template: `
<div>
  <ejs-richtexteditor ></ejs-richtexteditor>
</div>
`,

  data: function () {
    return {};
  },
  provide: {
    richtexteditor: [Toolbar, Link, Count, Image, HtmlEditor, QuickToolbar],
  },
});