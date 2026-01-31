<template>
    <div class="control-section">
      <ejs-richtexteditor :value="rteValue"></ejs-richtexteditor>
    </div>
</template>

<script setup>
import { provide } from 'vue';
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, Link, Image, Resize, HtmlEditor } from "@syncfusion/ej2-vue-richtexteditor";

const rteValue = `<p>Enter you\'re text here with real spelling and grammer mistakes to see how WProofreader work. Alot of potential errors will be underlined; hover on the marked wods for instant correction suggesstions.</p>`;
provide('richtexteditor', [Toolbar, Link, Image, Resize, HtmlEditor]);
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