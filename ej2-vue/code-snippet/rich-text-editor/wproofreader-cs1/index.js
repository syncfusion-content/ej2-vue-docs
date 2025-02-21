import Vue from "vue";
import { RichTextEditorPlugin, Toolbar, Link, Image, Resize, HtmlEditor } from "@syncfusion/ej2-vue-richtexteditor";
import WProofreader from '@webspellchecker/wproofreader-sdk-js';

Vue.use(RichTextEditorPlugin);

new Vue({
	el: '#app',
	template: `<div class="control-section"><ejs-richtexteditor :value="rteValue"></ejs-richtexteditor></div>`,

    data: function () {
        return {
            rteValue: `<p>Enter you\'re text here with real spelling and grammer mistakes to see how WProofreader work. Alot of potential errors will be underlined; hover on the marked wods for instant correction suggesstions.</p>`,
        }
    },
    mounted() {
        this.$nextTick(() => {
          WProofreader.init({
            container: this.$refs.spellEditor.$el.querySelector('.e-content'),
            lang: 'en_US',
            serviceId: "TDHiXV50gZlQaDw"
          });
        });
    },
    provide:{
        richtexteditor:[Toolbar, Image, Resize,HtmlEditor, Link]
    }

});