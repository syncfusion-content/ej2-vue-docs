<template>
  <div id="app">
    <div class='wrap'>
      <ejs-numerictextbox id="strict" :validateDecimalOnType='true' placeholder="ValidateDecimalOnType enabled"
        floatLabelType="Auto" format='n3' :value="value" :decimals="decimals"></ejs-numerictextbox>
    </div>
    <div class='wrap'>
      <ejs-numerictextbox id="allow" placeholder="ValidateDecimalOnType disabled" floatLabelType="Auto" format='n3'
        :value="value" :decimals="decimals"></ejs-numerictextbox>
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
      // sets number of decimal places to be allowed by the NumericTextBox
      decimals: 3,
      value: 10,
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";

.wrap {
  margin: 35px auto;
  width: 240px;
}</style>