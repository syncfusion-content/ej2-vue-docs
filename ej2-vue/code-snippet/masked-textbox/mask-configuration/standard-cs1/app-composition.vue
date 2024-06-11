<template>
  <div id="app">
    <div class='wrap'>
      <ejs-maskedtextbox mask='#####' placeholder='Mask ##### (ex: 012+-)' floatLabelType='Always'></ejs-maskedtextbox>
    </div>
    <div class='wrap'>
      <ejs-maskedtextbox mask='LLLLLL' placeholder='Mask LLLLLL (ex: Sample)' floatLabelType='Always'></ejs-maskedtextbox>
    </div>
    <div class='wrap'>
      <!-- eslint-disable-next-line -->
      <ejs-maskedtextbox mask='&&&&&' placeholder='Mask &&&&& (ex: A12@#)' floatLabelType='Always'></ejs-maskedtextbox>
    </div>
    <div class='wrap'>
      <ejs-maskedtextbox mask='>LLL<LLL' placeholder='Mask >LLL<LL (ex: SAMple)'
        floatLabelType='Always'></ejs-maskedtextbox>
    </div>
    <div class='wrap'>
      <ejs-maskedtextbox mask='\\A999' placeholder='Mask \\A999 (ex: A321)' floatLabelType='Always'></ejs-maskedtextbox>
    </div>
  </div>
</template>
<script setup>

import { MaskedTextBoxComponent as EjsMaskedtextbox } from "@syncfusion/ej2-vue-inputs";

</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";

.wrap {
  margin: 20px auto;
  width: 240px;
}
</style>