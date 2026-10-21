<template>
  <div id="app">
    <div class='wrap'>
        <ejs-numerictextbox id="numeric" ref="numeric_instance" :format="format" :value="value"></ejs-numerictextbox>
    </div>
  </div>
</template>
<script setup>
import { NumericTextBoxComponent as EjsNumerictextbox } from "@syncfusion/ej2-vue-inputs";

 

const format = 'c2';
// sets value to the NumericTextBox
const value = 10;
   
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-material3-theme/styles/numerictextbox/index.css";
 .wrap {
    margin: 0 auto;
    width: 240px;
}
</style>