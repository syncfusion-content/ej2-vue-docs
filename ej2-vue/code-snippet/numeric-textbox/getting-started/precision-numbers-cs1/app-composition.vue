<template>
  <div id="app">
        <div class='wrap'>
           <ejs-numerictextbox id="strict" :validateDecimalOnType='true' placeholder="ValidateDecimalOnType enabled" floatLabelType="Auto" format='n3' :value="value" :decimals="decimals"></ejs-numerictextbox>
        </div>
        <div class='wrap'>
           <ejs-numerictextbox id="allow" placeholder="ValidateDecimalOnType disabled" floatLabelType="Auto" format='n3' :value="value" :decimals="decimals"></ejs-numerictextbox>
        </div>
  </div>
</template>
<script setup>
import { NumericTextBoxComponent as EjsNumerictextbox} from "@syncfusion/ej2-vue-inputs";

// sets number of decimal places to be allowed by the NumericTextBox
const decimals = 3;
const value = 10;
 
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-material3-theme/styles/numerictextbox/index.css";
 .wrap {
    margin: 35px auto;
    width: 240px;
}
</style>