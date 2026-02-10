<template>
    <div>
        <div class="control-section">
            <div class="sample-container">
                <div class="default-section">
                    <ejs-richtexteditor ref="rteObj" :formatPainterSettings="formatPainterSettings"
                        :toolbarSettings="toolbarSettings" :value="rteValue"></ejs-richtexteditor>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { RichTextEditorComponent, Toolbar, Link, Image, HtmlEditor, QuickToolbar, FormatPainter } from "@syncfusion/ej2-vue-richtexteditor";

export default {
    name: "App",
    components: {
        "ejs-richtexteditor": RichTextEditorComponent
    },
    data: function () {
        return {
            rteValue: `<h3><strong>Format Painter</strong></h3><p>A Format Painter is a Rich Text Editor feature allowing users to quickly <span style=\"background-color: rgb(198, 140, 83);\"><strong>copy</strong></span> and <span style=\"background-color: rgb(198, 140, 83);\"><strong>paste</strong></span> formatting from one text to another. With a rich text editor, utilize the format painter as follows:</p><ul><li>Select the text whose format you want to copy.</li><li>Click on the <strong><em>Format Painter</em></strong> button in the toolbar. It may look like a paintbrush icon.</li><li>The cursor will change to a <strong>paintbrush</strong> icon. Click and drag the cursor over the text you want to apply the copied format.</li><li>Release the mouse button to apply the format.</li></ul><p>Using the format painter in a rich text editor can save you time when formatting a large document. You can quickly copy and apply formatting to <span style=\"background-color: rgb(198, 140, 83);\"><strong>multiple sections</strong></span>. It's a helpful tool for anyone who works with text editing regularly, such as writers, editors, and content creators.</p>`,

            toolbarSettings: {
                items: ['FormatPainter', 'ClearFormat', 'Bold', 'Italic', 'Underline', '|', 'Formats', 'Alignments',
                    'OrderedList', 'UnorderedList', '|', 'CreateLink', 'Image', '|', 'SourceCode', 'Undo', 'Redo']
            },
            formatPainterSettings: {
                allowedFormats: 'p;h1;h2;h3;div;ul;ol;li;span;strong;em;code;',
                deniedFormats: 'h3(e-rte-block-blue-text){background-color,padding,color}[title]; li{color}; span(e-inline-text-highlight){color}[title]; strong{color}(e-rte-strong-bg);',
            }
        };
    },
    provide: {
        richtexteditor: [Toolbar, Link, Image, HtmlEditor, QuickToolbar, FormatPainter]
    }
}
</script>

<style>@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/tailwind3.css";
</style>