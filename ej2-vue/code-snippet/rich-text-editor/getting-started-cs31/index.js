import Vue from 'vue';
import { RichTextEditorPlugin, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';

Vue.use(RichTextEditorPlugin);

new Vue({
	el: '#app',
	template: `<ejs-richtexteditor ref="defaultRTE" :height="340" :toolbarSettings="toolbarSettings" :fontSize="fontSize"></ejs-richtexteditor>`,

    data() {
      return {
        toolbarSettings: {
          items: [ 'FontSize']
        },
        fontSize: {
          width: '40px',
          items: [
            { text: '8 pt', value: '8pt' },
            { text: '10 pt', value: '10pt' },
            { text: '12 pt', value: '12pt' },
            { text: '14 pt', value: '14pt' },
            { text: '42 pt', value: '42pt' }
          ]
        }
      }
    },
    provide: {
      richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar]
    }
});