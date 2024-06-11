<template>
  <div id="app">
        <div class='wrap'>
           <ejs-numerictextbox id="percent" format='p2' placeholder="Percentage format" floatLabelType="Auto" :value="value" :step="step" :min="min" :max="max"></ejs-numerictextbox>
        </div>
        <div class='wrap'>
           <ejs-numerictextbox id="currency" placeholder="Currency format" floatLabelType="Auto" format='c2' :value="currencyvalue"></ejs-numerictextbox>
        </div>
  </div>
</template>
<script setup>

import { NumericTextBoxComponent as EjsNumerictextbox} from "@syncfusion/ej2-vue-inputs";

const value = 0.5;
const min = 0;
const max = 1;
const step = 0.01;

// sets currency with 2 numbers of decimal places format
const currencyvalue = 10;

</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
 .wrap {
    margin: 35px auto;
    width: 240px;
}
</style>