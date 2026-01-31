<template>
    <div>
        <ejs-richtexteditor ref="rteObj" :toolbarSettings="toolbarSettings" :afterPasteCleanup="afterPasteCleanup" :value="rteValue" :pasteCleanupSettings="pasteCleanupSettings"></ejs-richtexteditor>       
    </div>
</template>

<script>
import { RichTextEditorComponent, Toolbar, HtmlEditor, PasteCleanup } from "@syncfusion/ej2-vue-richtexteditor";
import { detach } from '@syncfusion/ej2-base';

export default {
    name: "App",
    components: {
        "ejs-richtexteditor": RichTextEditorComponent
    },
    data: function () {
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
    methods: {
        afterPasteCleanup: function(args){
            const divElement = document.createElement('div');
            divElement.innerHTML = args.value;
            const pasteCleanupImage = divElement.querySelector('.pasteContent_Img');
            if (pasteCleanupImage) {
                detach(pasteCleanupImage);
                args.value = divElement.innerHTML;
            }
        }
    },
    provide: {
        richtexteditor: [Toolbar, HtmlEditor, PasteCleanup]
    }
}
</script>

<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/tailwind3.css";
</style>