<template>
  <div id='app'>
    <div class="e-btn-group">
        <ejs-button>HTML</ejs-button>
        <ejs-button>CSS</ejs-button>
        <ejs-button>Javascript</ejs-button>
    </div>
  </div>
</template>
<script>
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
export default {
  components: {
    'ejs-button': ButtonComponent
  },
  name: 'app'
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-buttons/styles/material.css";
@import "../node_modules/@syncfusion/ej2-popups/styles/material.css";
@import "../node_modules/@syncfusion/ej2-splitbuttons/styles/material.css";
  #app {
   margin: 20px;
  }
  .e-btn-group {
    margin: 25px 5px 20px 20px;
  }
</style>