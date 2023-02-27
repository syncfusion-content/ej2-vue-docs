


<template>
  <div id='app'>
    <div class="e-btn-group">
        <ejs-button content='Left' iconCss='e-icons e-left-icon'></ejs-button>
        <ejs-button content='Center' iconCss='e-icons e-middle-icon'></ejs-button>
        <ejs-button content='Right' iconCss='e-icons e-right-icon'></ejs-button>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { ButtonPlugin } from '@syncfusion/ej2-vue-buttons';

Vue.use(ButtonPlugin);
export default {
  name: 'app'
}
</script>
<style>
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import '../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css';
  #app {
   margin: 20px;
  }
  .e-btn-group {
    margin: 25px 5px 20px 20px;
  }
  .e-left-icon::before {
    content: '\e33a';
  }

  .e-right-icon::before {
    content: '\e34d';
  }

  .e-middle-icon::before {
    content: '\e35e';
  }
</style>



