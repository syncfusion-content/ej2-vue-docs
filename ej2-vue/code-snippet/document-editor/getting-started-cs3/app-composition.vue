<template>
  <div id="app">
    <ejs-documenteditorcontainer ref='documenteditor' :serviceUrl='serviceUrl' height="590px" id='container'
      :enableToolbar='true'></ejs-documenteditorcontainer>
  </div>
</template>
<script setup>
import { provide } from "vue";
import { DocumentEditorContainerComponent as EjsDocumenteditorcontainer, DocumentEditorContainerComponent, Toolbar } from '@syncfusion/ej2-vue-documenteditor';

const serviceUrl = 'https://ej2services.syncfusion.com/production/web-services/api/documenteditor/';

provide('DocumentEditorContainer', [Toolbar]);

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-documenteditor/styles/material.css";
</style>
