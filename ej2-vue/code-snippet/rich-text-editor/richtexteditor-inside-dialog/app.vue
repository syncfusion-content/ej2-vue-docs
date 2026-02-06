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

<script>
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

export default {
  name: 'App',
  components: {
    'ejs-button': ButtonComponent,
    'ejs-dialog': DialogComponent,
    'ejs-richtexteditor': RichTextEditorComponent,
  },
  data() {
    return {
      headerTemplate: 'Dialog Header',
      footerTemplate: 'Dialog Footer',
    };
  },
  methods: {
    onDialogOpen() {
      this.$refs.editor.refreshUI();
    },
    openDialog() {
      this.$refs.dialog.show();
    },
  },
  provide: {
    richtexteditor: [Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar],
  },
};
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
}
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