<template>
  <div id="app">
    <div class='wrap'>
        <ejs-numerictextbox id="numeric" ref="numeric_instance" :value="value" :step="step" :min="min" :max="max"></ejs-numerictextbox>
    </div>
  </div>
</template>
<script setup>
import { NumericTextBoxComponent as EjsNumerictextbox } from "@syncfusion/ej2-vue-inputs";

const min = 1;
const max = 100;
const value = 30;
const step = 2;

</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
 .wrap {
    margin: 0 auto;
    width: 240px;
}
</style>