<template>
<div>
<div class="control-section">
    <div class="sample-container">
        <div class="default-section">
        <ejs-richtexteditor ref="rteObj" :toolbarSettings="toolbarSettings"><p>Rich
        Text Editor allows to insert images from online source as well as local
            computer where you want to insert the image in your content.</p>
            <p><b>Get started Quick Toolbar to click on the image</b></p>
            <p>It is possible to add custom style on the selected image inside the Rich Text Editor through quick toolbar.</p>
        </ejs-richtexteditor>
        </div>
    </div>
</div>
</div>
</template>
<script setup>
import { provide } from 'vue';
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, Image,  Link, HtmlEditor, QuickToolbar } from "@syncfusion/ej2-vue-richtexteditor";
const toolbarSettings = {
    items: ['CreateLink']
};
provide('richtexteditor', [Toolbar, Image, Link, HtmlEditor, QuickToolbar]);
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