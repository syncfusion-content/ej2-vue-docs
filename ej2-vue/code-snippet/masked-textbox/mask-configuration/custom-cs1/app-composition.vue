<template>
  <div id="app">
    <div class='wrap'>
        <ejs-maskedtextbox :customCharacters='customCharacters' mask='00:00 >PM' placeholder='Time (ex: 10:00 PM, 10:00 AM)' floatLabelType='Always'></ejs-maskedtextbox>
    </div>
  </div>
</template>
<script setup>

import { MaskedTextBoxComponent as EjsMaskedtextbox} from "@syncfusion/ej2-vue-inputs";

const customCharacters = {
  P: 'P,A,a,p',
  M: 'M,m'
};

</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
 .wrap {
    margin: 0 auto;
    width: 240px;
}
</style>