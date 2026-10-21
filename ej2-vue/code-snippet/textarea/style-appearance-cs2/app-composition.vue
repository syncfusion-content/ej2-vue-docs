<template>
  <div class='wrap'>
    <label className="custom-input-label"> Filled TextArea </label>
    <div id='container'>
      <ejs-textarea id='filled' placeholder="Filled" floatLabelType="Auto" cssClass="e-filled"></ejs-textarea>
    </div>

    <label className="custom-input-label"> Outlined TextArea </label>
    <div id='container1'>
      <ejs-textarea id='outlined' placeholder="Outlined" floatLabelType="Auto" cssClass="e-outline"></ejs-textarea>
    </div>
  </div>
</template>
<script setup>
import { TextAreaComponent as EjsTextarea } from '@syncfusion/ej2-vue-inputs';

</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/textarea/index.css";

.wrap {
  box-sizing: border-box;
  margin: 0 auto;
  padding: 20px 10px;
  width: 340px;
}
</style>