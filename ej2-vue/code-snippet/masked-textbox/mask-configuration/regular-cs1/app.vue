<template>
  <div id="app">
    <div class='wrap'>
      <ejs-maskedtextbox mask='[0-2][0-9][0-9].[0-2][0-9][0-9].[0-2][0-9][0-9].[0-2][0-9][0-9]'
        placeholder='IP Address (ex: 212.212.111.222)' id='mask1' name='mask_value'
        floatLabelType='Always'></ejs-maskedtextbox>
    </div>
  </div>
</template>
<script>

import { MaskedTextBoxComponent } from "@syncfusion/ej2-vue-inputs";


export default {
  name: "App",
  components: {
    "ejs-maskedtextbox": MaskedTextBoxComponent
  },
  data() {
    return {}
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";

.wrap {
  margin: 0 auto;
  width: 240px;
}</style>