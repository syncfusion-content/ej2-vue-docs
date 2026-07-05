<template>
  <div id='container'>
     <ejs-blockeditor></ejs-blockeditor>
  </div>
</template>

<script setup>
import { BlockEditorComponent as EjsBlockeditor } from '@syncfusion/ej2-vue-blockeditor';
</script>

<style>
  @import "../node_modules/@syncfusion/ej2-tailwind3-theme/styles/blockeditor/index.css";
  #container {
    margin: 50px auto;
  }
</style>