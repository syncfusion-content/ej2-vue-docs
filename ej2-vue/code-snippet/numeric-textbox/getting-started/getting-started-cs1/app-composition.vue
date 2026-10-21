<template>
  <div id="app">
    <div class='wrap'>
        <ejs-numerictextbox value="10"></ejs-numerictextbox>
    </div>
  </div>
</template>
<script setup>

import { NumericTextBoxComponent as EjsNumerictextbox } from "@syncfusion/ej2-vue-inputs";

</script>
<style>
  @import "../node_modules/@syncfusion/ej2-material3-theme/styles/numerictextbox/index.css";
 .wrap {
    margin: 0 auto;
    width: 240px;
}
</style>