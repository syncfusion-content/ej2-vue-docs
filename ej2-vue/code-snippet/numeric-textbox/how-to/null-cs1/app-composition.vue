<template>
  <div id="app">
        <div class='wrap'>
           <ejs-numerictextbox id="numeric" :value='value' format='n2' :decimals='decimals' placeholder='NumericTextBox' :change='onChange' :created='onCreate'></ejs-numerictextbox>
        </div>
  </div>
</template>
<script setup>

import { NumericTextBoxComponent as EjsNumerictextbox} from "@syncfusion/ej2-vue-inputs";

const value = 10;
const decimals = 2;

const onChange = () => {
  var numericObj = document.getElementById("numeric").ej2_instances[0];
  numericObj.element.value = numericObj.formattedValue(numericObj.decimals, +numericObj.element.value);
};
const onCreate = () => {
  document.getElementById("numeric").addEventListener('focus', function () {
    var numericObj = document.getElementById("numeric").ej2_instances[0];
    numericObj.element.value = numericObj.formattedValue(numericObj.decimals, +numericObj.element.value);
  });

};
 
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
 .wrap {
  margin: 0 auto;
  width: 240px;
  padding-top: 100px;
}
</style>