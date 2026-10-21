<template>
  <div id='app'>
    <div class="e-btn-group">
        <ejs-button cssClass='e-info'>View</ejs-button>
        <ejs-button>Edit</ejs-button>
        <ejs-button cssClass='e-danger'>Delete</ejs-button>
    </div>
  </div>
</template>
<script setup>

import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
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