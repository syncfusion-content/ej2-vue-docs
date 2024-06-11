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
<script>
import { TextAreaComponent } from '@syncfusion/ej2-vue-inputs';

export default {
  name: "App",
  components: {
    "ejs-textarea": TextAreaComponent
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
</style>