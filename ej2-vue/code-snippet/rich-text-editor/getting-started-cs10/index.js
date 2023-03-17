
    import Vue from 'vue';
    import { RichTextEditorPlugin, Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';
    Vue.use(RichTextEditorPlugin);

    
new Vue({
	el: '#app',
	template: `
  <div id="defaultRTE">
    <ejs-richtexteditor :valueTemplate="'vueTemplate'"  ref="defaultRTE" :height="340">
    <template v-slot:vueTemplate>
        <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content.Users can format their content using standard toolbar commands.</p>
    </template>
    </ejs-richtexteditor>
  </div>
`,

         data: function() {
    return { };
        },
        provide: {
            richtexteditor:[Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar]
        }
    
});