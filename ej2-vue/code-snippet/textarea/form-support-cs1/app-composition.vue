<template>
  <div class='wrap'>
    <form id="myForm">
      <span>Please leave your comments</span>
      <br />
      <div id='input-container'>
        <ejs-textarea id='default' name="myTextarea" placeholder='Enter your comments' floatLabelType='Auto'
          required=""></ejs-textarea>
      </div>
      <input id="submit" type="submit" value="Submit">
      <input id="reset" type="reset" value="Reset">
    </form>
  </div>
</template>
<script setup>

import { TextAreaComponent as EjsTextarea } from '@syncfusion/ej2-vue-inputs';

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