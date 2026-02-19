<template>
  <div>
    <ejs-button @click="openDialog">Open Dialog</ejs-button>
    <ejs-dialog
      ref="dialog"
      :width="'350px'"
      :height="'400px'"
      :showCloseIcon="true"
      :visible="false"
      :open="onDialogOpen"
      :header="headerTemplate"
      :footerTemplate="footerTemplate"
    >
      <div><ejs-richtexteditor ref="editor"></ejs-richtexteditor></div>
    </ejs-dialog>
  </div>
</template>

<script setup>
import { provide, ref } from "vue";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { DialogComponent as EjsDialog } from '@syncfusion/ej2-vue-popups';
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, Link, Image, HtmlEditor,QuickToolbar } from "@syncfusion/ej2-vue-richtexteditor";

const headerTemplate = 'Dialog Header';
const footerTemplate= 'Dialog Footer';
const onDialogOpen() = {
    this.$refs.editor.refreshUI();
},
const openDialog() = {
    this.$refs.dialog.show();
},
provide('richtexteditor', [Toolbar, Link, Image, HtmlEditor, QuickToolbar]);
</script>

<style>
@import "https://ej2.syncfusion.com/vue/documentation/../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-dropdowns/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/tailwind3.css";
</style>