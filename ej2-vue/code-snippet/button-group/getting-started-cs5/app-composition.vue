<template>
  <div id='app'>
    <div class='e-btn-group e-round-corner'>
        <ejs-button content='HTML'></ejs-button>
        <ejs-button content='CSS'></ejs-button>
        <ejs-button content='Javascript'></ejs-button>
    </div>
  </div>
</template>
<script setup>
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { enableRipple } from '@syncfusion/ej2-base';
enableRipple(true);
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/button-group/index.css";
  #app {
   margin: 20px;
  }
  .e-btn-group {
    margin: 25px 5px 20px 20px;
  }
</style>