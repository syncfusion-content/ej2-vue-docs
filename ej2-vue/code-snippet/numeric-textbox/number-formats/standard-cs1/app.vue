

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
<script>
import Vue from "vue";
import { NumericTextBoxPlugin } from "@syncfusion/ej2-vue-inputs";

Vue.use(NumericTextBoxPlugin);
export default {
  data () {
    return {
        value: 0.5,
        min: 0,
        max: 1,
        step: 0.01,

        // sets currency with 2 numbers of decimal places format
        format: 'c2'
        currencyvalue: 10,
    }
  }
}
</script>
<style>
  @import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
 .wrap {
    margin: 35px auto;
    width: 240px;
}
</style>


