<template>
  <div id="defaultRTE">
    <ejs-richtexteditor :valueTemplate="'vueTemplate'" ref="defaultRTE" :height="340">
      <template v-slot:vueTemplate>
        <p>The Rich Text Editor component is WYSIWYG ("what you see is what you get") editor that provides the best user
          experience to create and update the content.Users can format their content using standard toolbar commands.</p>
      </template>
    </ejs-richtexteditor>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';
const data = {
  iframeConfig: {
    enable: true
  }
};
provide('richtexteditor', [Toolbar, Link, Image, Count, HtmlEditor, QuickToolbar]);
</script>

<style>
@import "../node_modules/@syncfusion/ej2-base/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-inputs/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-lists/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-navigations/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/tailwind3.css";
@import "../node_modules/@syncfusion/ej2-vue-richtexteditor/styles/tailwind3.css";
</style>