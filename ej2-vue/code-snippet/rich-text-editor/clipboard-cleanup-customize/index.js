import Vue from "vue";
import { RichTextEditorPlugin, Toolbar, HtmlEditor, ClipboardCleanup } from "@syncfusion/ej2-vue-richtexteditor";
import { detach } from '@syncfusion/ej2-base';

Vue.use(RichTextEditorPlugin);

new Vue({
	el: '#app',
	template: `<div>
                <ejs-richtexteditor ref="rteObj" :beforeClipboardWrite="beforeClipboardWrite"></ejs-richtexteditor>
            </div>`,
    methods: {
        beforeClipboardWrite: function(args){
            if (args.operation === 'copy') {
                args.htmlContent = '<h1>This is customized content triggered while copy event</h1>';
                args.plainTextContent = 'This is customized content triggered while copy event';
            }
        }
    },
    provide:{
        richtexteditor:[Toolbar, HtmlEditor, ClipboardCleanup]
    }
});