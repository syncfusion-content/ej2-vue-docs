import Vue from "vue";
import { RichTextEditorPlugin, Toolbar, HtmlEditor, PasteCleanup } from "@syncfusion/ej2-vue-richtexteditor";

Vue.use(RichTextEditorPlugin);

new Vue({
	el: '#app',
	template: `<div>
                <ejs-richtexteditor ref="rteObj" :value="rteValue" :toolbarSettings="toolbarSettings" :pasteCleanupSettings="pasteCleanupSettings"></ejs-richtexteditor>
            </div>`,

    data: function() {
        return {
            rteValue: `<p>Rich Text Editor is a WYSIWYG editing control which will reduce the effort for users while trying to express their formatting word content as HTML or Markdown format.</p>
                <p><b>Paste Cleanup properties:</b></p>
                <ul>
                    <li>
                        <p>prompt - specifies whether to enable the prompt when pasting in Rich Text Editor.</p>
                    </li>
                    <li>
                        <p>plainText - specifies whether to paste as plain text or not in Rich Text Editor.</p>
                    </li>
                    <li>
                        <p>keepFormat- specifies whether to keep or remove the format when pasting in Rich Text Editor.</p>
                    </li>
                    <li>
                        <p>deniedTags - specifies the tags to restrict when pasting in Rich Text Editor.</p>
                    </li>
                    <li>
                        <p>deniedAttributes - specifies the attributes to restrict when pasting in Rich Text Editor.</p>
                    </li>
                    <li>
                        <p>allowedStyleProperties - specifies the allowed style properties when pasting in Rich Text Editor.</p>
                    </li>
                </ul>`,
            toolbarSettings: {
                type: 'Expand',
                items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
                'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
                'LowerCase', 'UpperCase', '|',
                'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
                'Outdent', 'Indent', '|',
                'CreateLink', 'Image', '|', 'ClearFormat', 'Print',
                'SourceCode', 'FullScreen', '|', 'Undo', 'Redo'
                ]
            },
            pasteCleanupSettings: {
                prompt: true,
                plainText: false,
                keepFormat: false,
                deniedTags: ['a'],
                deniedAttrs: ['class', 'title', 'id'],
                allowedStyleProps: ['color', 'margin', 'font-size']
            }
        };
    },
    provide:{
        richtexteditor:[Toolbar, HtmlEditor, PasteCleanup]
    }
});