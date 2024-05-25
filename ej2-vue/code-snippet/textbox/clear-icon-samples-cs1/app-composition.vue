<template>
  <div class='wrap'>
    <div id='input-container'>
      <h4> TextBox with clear button </h4>
      <ejs-textbox id='textbox' floatLabelType="Never" showClearButton="true" placeholder="First Name"></ejs-textbox>
      <h4>Floating TextBox with clear button </h4>
      <ejs-textbox id='textbox' floatLabelType="Auto" showClearButton="true" placeholder="Last Name"></ejs-textbox>
    </div>
  </div>
</template>

<script setup>

import { TextBoxComponent as EjsTextbox } from '@syncfusion/ej2-vue-inputs';

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
</style>