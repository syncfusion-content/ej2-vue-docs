<template>
    <div>
        <ejs-richtexteditor ref="rteObj" :beforeClipboardWrite="beforeClipboardWrite"></ejs-richtexteditor>       
    </div>
</template>

<script>
import { RichTextEditorComponent, Toolbar, HtmlEditor, ClipboardCleanup } from "@syncfusion/ej2-vue-richtexteditor";
import { detach } from '@syncfusion/ej2-base';

export default {
    name: "App",
    components: {
        "ejs-richtexteditor": RichTextEditorComponent
    },
    methods: {
        beforeClipboardWrite: function(args){
            if (args.operation === 'copy') {
                args.htmlContent = '<h1>This is customized content triggered while copy event</h1>';
                args.plainTextContent = 'This is customized content triggered while copy event';
            }
        }
    },
    provide: {
        richtexteditor: [Toolbar, HtmlEditor, ClipboardCleanup]
    }
}
</script>

<style>
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";
</style>