<template>
  <div id="app">
    <div class='wrap'>
      <ejs-numerictextbox id="numeric" ref="numeric_instance" :value="value" :step="step" :min="min"
        :max="max"></ejs-numerictextbox>
    </div>
  </div>
</template>
<script>
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";

export default {
  name: "App",
  components: {
    "ejs-numerictextbox": NumericTextBoxComponent
  },
  data() {
    return {
      min: 1,
      max: 100,
      value: 30,
      step: 2
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";

.wrap {
  margin: 0 auto;
  width: 240px;
}
</style>