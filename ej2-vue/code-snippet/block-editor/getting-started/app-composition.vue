<template>
  <div id='container'>
     <ejs-blockeditor></ejs-blockeditor>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { BlockEditorComponent } from '@syncfusion/ej2-vue-blockeditor';

</script>

<style>
  @import '../node_modules/@syncfusion/ej2-base/styles/material.css';

  @import '../node_modules/@syncfusion/ej2-blockeditor/styles/material.css';

  #container {
    margin: 50px auto;
    gap: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>