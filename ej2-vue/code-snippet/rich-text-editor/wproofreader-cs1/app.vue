<template>
    <div class="control-section">
        <ejs-richtexteditor :value="rteValue"></ejs-richtexteditor>
    </div>
</template>

<script>
import { RichTextEditorComponent, Toolbar, Link, Image, Resize, HtmlEditor } from "@syncfusion/ej2-vue-richtexteditor";
import WProofreader from '@webspellchecker/wproofreader-sdk-js';

export default {
    name: "App",
    components: {
        "ejs-richtexteditor": RichTextEditorComponent
    },
    data: function () {
        return {
            rteValue: `<p>Enter you\'re text here with real spelling and grammer mistakes to see how WProofreader work. Alot of potential errors will be underlined; hover on the marked wods for instant correction suggesstions.</p>`,
        }
    },
    mounted() {
        this.$nextTick(() => {
          WProofreader.init({
            container: this.$refs.spellEditor.$el.querySelector('.e-content'),
            lang: 'en_US',
            serviceId: "TDHiXV50gZlQaDw"
          });
        });
    },
    provide: {
        richtexteditor: [Toolbar, Image, Resize, HtmlEditor, Link]
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