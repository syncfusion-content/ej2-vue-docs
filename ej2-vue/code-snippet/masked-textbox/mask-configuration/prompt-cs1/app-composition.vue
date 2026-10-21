<template>
  <div id="app">
    <div class='wrap'>
        <ejs-maskedtextbox mask='999-999-9999' promptChar="#"></ejs-maskedtextbox>
    </div>
  </div>
</template>
<script setup>

import { MaskedTextBoxComponent as EjsMaskedtextbox} from "@syncfusion/ej2-vue-inputs";

</script>
<style>
  @import "../node_modules/@syncfusion/ej2-material3-theme/styles/maskedtextbox/index.css";
 .wrap {
    margin: 0 auto;
    width: 240px;
}
</style>