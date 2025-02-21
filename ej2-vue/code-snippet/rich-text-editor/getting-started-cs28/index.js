import Vue from 'vue';
import { RichTextEditorPlugin, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';
import { detach } from "@syncfusion/ej2-base";

Vue.use(RichTextEditorPlugin);

new Vue({
	el: '#app',
	template: `<ejs-richtexteditor :value="value" :beforeSanitizeHtml="beforeSanitizeHtml"></ejs-richtexteditor>`,

    data() {
      return {
        value: `<div>Prevention of Cross Sit Scripting (XSS) </div> <script>alert('hi')<\/script>`
      }
    },
    provide: {
      richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar]
    },
    methods: {
      beforeSanitizeHtml: function(e) {
        e.helper = value => {
          e.cancel = true;
          let temp = document.createElement("div");
          temp.innerHTML = value;
          let scriptTag = temp.querySelector("script");
          if (scriptTag) {
            detach(scriptTag);
          }
          return temp.innerHTML;
        };
      }
  }
});