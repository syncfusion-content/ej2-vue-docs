import Vue from "vue";
import { RichTextEditorPlugin, Toolbar, HtmlEditor, ClipboardCleanup } from "@syncfusion/ej2-vue-richtexteditor";

Vue.use(RichTextEditorPlugin);

new Vue({
	el: '#app',
	template: `<div>
                <ejs-richtexteditor></ejs-richtexteditor>
            </div>`,
    provide:{
        richtexteditor:[Toolbar, HtmlEditor, ClipboardCleanup]
    }
});