import Vue from "vue";
import { RichTextEditorPlugin, Toolbar, Link, Image, HtmlEditor, QuickToolbar, Table, CodeBlock } from "@syncfusion/ej2-vue-richtexteditor";

Vue.use(RichTextEditorPlugin);

new Vue({
	el: '#app',
	template: `<div>
                    <div class="control-section">
                        <div class="sample-container">
                            <div class="default-section">
                            <ejs-richtexteditor ref="rteObj" :height="340" :toolbarSettings="toolbarSettings"></ejs-richtexteditor>
                            </div>
                        </div>
                    </div>
                </div>`,

    data: function() {
        return {
            toolbarSettings: {
                items: ['Checklist', 'Bold', 'Italic', 'StrikeThrough', '|', 'Formats', 'Alignments', 'Blockquote', 'OrderedList',
                    'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode', 'Undo', 'Redo']
            }
        };
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, HtmlEditor, QuickToolbar, Table, CodeBlock]
    }
});