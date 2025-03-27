import Vue from 'vue';
import { RichTextEditorPlugin, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';

Vue.use(RichTextEditorPlugin);
  
new Vue({
	el: '#app',
	template: `<div>
                  <ejs-richtexteditor ref="defaultRTE" :height="340" :value="value"></ejs-richtexteditor>
                  <button @click="getEditorValue">Get Editor Value</button>
                  <div v-if="editorContent">
                    <h3>Editor Content:</h3>
                    <div v-html="editorContent"></div>
                  </div>
              </div>`,

  data: function () {
    return {
      value: `Welcome to Syncfusion RichTextEditor!`,
      editorContent: '',
    };
  },
  methods: {
    getEditorValue() {
      this.editorContent = this.$refs.defaultRTE.ej2Instances.getHtml();
    },
  },
  provide: {
    richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar]
  }
});