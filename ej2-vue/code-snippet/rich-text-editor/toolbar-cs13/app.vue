<template>
    <div class="control-section">
        <ejs-richtexteditor :enableResize="true" :value="rteValue"></ejs-richtexteditor>
    </div>
</template>

<script>
import { RichTextEditorComponent, Toolbar, Link, Image, Resize, HtmlEditor } from "@syncfusion/ej2-vue-richtexteditor";
export default {
    name: "App",
    components: {
        "ejs-richtexteditor": RichTextEditorComponent
    },
    data: function () {
        return {
            rteValue: `<p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user experience to create and update the content. Users can format their content using standard toolbar commands.</p>`,
        }
    },
    provide: {
        richtexteditor: [Toolbar, Image, Resize, HtmlEditor, Link]
    }
}
</script>

<style>
.e-richtexteditor {
  max-width: 880px;
  min-width: 250px;
  min-height: 250px;
  max-height: 400px;
}
@import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";
</style>