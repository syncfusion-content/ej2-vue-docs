<template>
  <div id="app">
        <div class='wrap'>
           <ejs-numerictextbox id="numeric" format='###.##' placeholder="Custom format string #" floatLabelType="Auto" :value="value"></ejs-numerictextbox>
        </div>
        <div class='wrap'>
           <ejs-numerictextbox id="numeric1" placeholder="Custom format string 0" floatLabelType="Auto" format='000.00' :value="numvalue"></ejs-numerictextbox>
        </div>
  </div>
</template>
<script setup>

import { NumericTextBoxComponent as EjsNumerictextbox } from "@syncfusion/ej2-vue-inputs";

// sets the format using custom format string `#`
const value = 10;
// sets the format using custom format string `0`
const numvalue = 10;
  
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
 .wrap {
    margin: 35px auto;
    width: 240px;
}
</style>