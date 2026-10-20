<template>
  <div id="app">
        <div class='wrap'>
           <ejs-numerictextbox id="numeric" :showSpinButton='false' :value="value" :step="step" :min="min" :max="max"></ejs-numerictextbox>
        </div>
  </div>
</template>
<script setup>

import { NumericTextBoxComponent as EjsNumerictextbox } from "@syncfusion/ej2-vue-inputs";

const step = 2;
const min = 10;
const max = 100;
const value = 16;
   
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-material3-theme/styles/numerictextbox/index.css";
 .wrap {
  margin: 0 auto;
  width: 240px;
  padding-top: 100px;
}
</style>