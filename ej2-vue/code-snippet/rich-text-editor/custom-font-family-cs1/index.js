import Vue from 'vue';
import { RichTextEditorPlugin, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';

Vue.use(RichTextEditorPlugin);

new Vue({
	el: '#app',
	template: `
  <ejs-richtexteditor ref="defaultRTE" :height="340" :toolbarSettings="toolbarSettings" :fontFamily="fontFamily"></ejs-richtexteditor>`,

    data() {
      return {
        toolbarSettings: {
          items: ['FontName']
        },
        fontFamily: {
          width: '60px',
          items: [
            { text: 'Segoe UI', value: 'Segoe UI' },
            { text: 'Arial', value: 'Arial,Helvetica,sans-serif' },
            { text: 'Courier New', value: 'Courier New,Courier,monospace' },
            { text: 'Georgia', value: 'Georgia,serif' },
            { text: 'Impact', value: 'Impact,Charcoal,sans-serif' },
            { text: 'Calibri Light', value: 'CalibriLight' }
          ]
        },
      }
    },
    provide: {
      richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar]
    }
});