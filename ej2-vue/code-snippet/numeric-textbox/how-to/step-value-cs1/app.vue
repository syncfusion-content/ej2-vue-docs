<template>
  <div id="app">
    <div class='wrap'>
      <ejs-numerictextbox id="numeric" :showSpinButton='false' :value="value" :step="step" :min="min"
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
      step: 2,
      min: 10,
      max: 100,
      value: 16
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/numerictextbox/index.css";

.wrap {
  margin: 0 auto;
  width: 240px;
  padding-top: 100px;
}
</style>