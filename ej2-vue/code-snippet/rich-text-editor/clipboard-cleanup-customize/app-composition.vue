<template>
    <div>
        <ejs-richtexteditor ref="rteObj" :beforeClipboardWrite="beforeClipboardWrite"></ejs-richtexteditor>  
    </div>
</div>
</template>

<script setup>
import { provide } from 'vue';
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, HtmlEditor, ClipboardCleanup } from "@syncfusion/ej2-vue-richtexteditor";
import { detach } from '@syncfusion/ej2-base';

const beforeClipboardWrite = (args) => {
    if (args.operation === 'copy') {
        args.htmlContent = '<h1>This is customized content triggered while copy event</h1>';
        args.plainTextContent = 'This is customized content triggered while copy event';
    }
},
provide('richtexteditor', [Toolbar, HtmlEditor, ClipboardCleanup]);
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