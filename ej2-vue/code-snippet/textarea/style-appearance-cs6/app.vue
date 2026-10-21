<template>
  <div class='wrap'>
    <div>
      <ejs-textarea id='default1' placeholder="Success" floatLabelType="Auto" cssClass="e-success"></ejs-textarea>
    </div>
    <div>
      <ejs-textarea id='default2' placeholder="Warning" floatLabelType="Auto" cssClass="e-warning"></ejs-textarea>
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
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/textarea/index.css";

.wrap {
  box-sizing: border-box;
  margin: 0 auto;
  padding: 20px 10px;
  width: 340px;
}
</style>