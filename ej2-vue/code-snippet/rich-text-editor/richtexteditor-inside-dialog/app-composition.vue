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
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { DialogComponent } from '@syncfusion/ej2-vue-popups';
import {
  RichTextEditorComponent,
  Toolbar,
  Link,
  Image,
  Count,
  HtmlEditor,
  QuickToolbar,
} from '@syncfusion/ej2-vue-richtexteditor';

const headerTemplate = 'Dialog Header';
const footerTemplate= 'Dialog Footer';
const onDialogOpen() = {
    this.$refs.editor.refreshUI();
},
const  openDialog() = {
    this.$refs.dialog.show();
},
provide('richtexteditor', [Toolbar, Link, Image, HtmlEditor, QuickToolbar]);
</script>

<style>
@import "https://ej2.syncfusion.com/vue/documentation/../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-lists/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
@import "../../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/material.css";
</style>