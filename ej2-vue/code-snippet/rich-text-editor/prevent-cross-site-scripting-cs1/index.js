import Vue from 'vue';
import { RichTextEditorPlugin, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';

Vue.use(RichTextEditorPlugin);

new Vue({
	el: '#app',
	template: `<ejs-richtexteditor :value="value" :beforeSanitizeHtml="beforeSanitizeHtml"></ejs-richtexteditor>`,

    data() {
      return {
        value: `<div>Prevention of Cross-Site Scripting (XSS)</div><script>alert('hi')</script><iframe srcdoc="<p>The Rich Text Editor component is WYSIWYG ('what you see is what you get') editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p>"></iframe>`
      }
    },
    provide: {
      richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar]
    },
    methods: {
      beforeSanitizeHtml: function(e) {
        if (e.selectors && e.selectors.tags) {
          e.selectors.tags = e.selectors.tags.filter((tag) => tag !== 'iframe:not(.e-rte-embed-url)');
          e.selectors.tags = [('iframe[src^="https://"]')];
        }
      }
    }
});