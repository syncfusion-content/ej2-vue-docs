import Vue from "vue";
import { RichTextEditorPlugin, Toolbar, Link, Image, HtmlEditor, QuickToolbar, Table, CodeBlock } from "@syncfusion/ej2-vue-richtexteditor";

Vue.use(RichTextEditorPlugin);

new Vue({
	el: '#app',
	template: `<div>
                    <div class="control-section">
                        <div class="sample-container">
                            <div class="default-section">
                            <ejs-richtexteditor ref="rteObj" :value="rteValue" :height="340" :toolbarSettings="toolbarSettings" :codeBlockSettings="codeBlockSettings" :placeholder="placeholder"></ejs-richtexteditor>
                            </div>
                        </div>
                    </div>
                </div>`,

    data: function() {
        return {
            toolbarSettings: {
                items: ['Undo', 'Redo', '|', 'CodeBlock', '|', 'Bold', 'Italic', 'Underline', 'StrikeThrough', 'InlineCode', '|', 'CreateLink', 'Image', 'CreateTable', 'Blockquote', '|', 'BulletFormatList', 'NumberFormatList', '|', 'Formats', 'Alignments', '|', 'Outdent', 'Indent', '|',
                    'FontColor', 'BackgroundColor', 'FontName', 'FontSize', '|', 'LowerCase', 'UpperCase', '|', 'EmojiPicker', '|', 'SourceCode']
            },
            codeBlockSettings: {
                languages: [
                    {label: "HTML", language: "html"},
                    {label: "JavaScript", language: "javascript"},
                    {label: "CSS", language: "css"},
                    {label: "Plain Text", language: "plaintext"}
                ],
                defaultLanguage: "plaintext"
            },
            placeholder: 'Type something...'
        };
    },
    provide:{
        richtexteditor:[Toolbar, Link, Image, HtmlEditor, QuickToolbar, Table, CodeBlock]
    }
});