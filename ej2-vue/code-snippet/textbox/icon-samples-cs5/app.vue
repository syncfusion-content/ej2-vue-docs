<template>
  <div class='wrap'>
    <div id='input-container'>
      <ejs-textbox id='textbox' floatLabelType="Auto" placeholder="First Name"></ejs-textbox>
    </div>
  </div>
</template>
<script>

import { TextBoxComponent } from '@syncfusion/ej2-vue-inputs';

export default {
  name: "App",
  components: {
    "ejs-textbox": TextBoxComponent
  },
  data: function () {
    return {}
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";

.wrap {
  box-sizing: border-box;
  margin: 0 auto;
  padding: 20px 10px;
  width: 340px;
}

.e-float-input.e-control-wrapper .e-float-text::after {
  content: '*';
  color: red;
}
</style>