<template>
  <div>
    <ejs-richtexteditor
      ref="defaultRTE"
      :height="340"
      :value="value"
    ></ejs-richtexteditor>
    <button @click="getEditorValue">Get Editor Value</button>
    <div v-if="editorContent">
      <h3>Editor Content:</h3>
      <div v-html="editorContent"></div>
    </div>
  </div>
</template>

<script setup>
import {ref, provide } from "vue";  
import { RichTextEditorComponent as EjsRichtexteditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar } from '@syncfusion/ej2-vue-richtexteditor';

// Reactive variables
const value = ref(`Welcome to Syncfusion RichTextEditor!`);
const editorContent = ref("");
const defaultRTE = ref(null);

// Function to get the editor value
const getEditorValue = () => {
  if (defaultRTE.value) {
    editorContent.value = defaultRTE.value.ej2Instances.getHtml();
  }
};

provide('richtexteditor',  [Toolbar, Link, Image, HtmlEditor, QuickToolbar]);
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