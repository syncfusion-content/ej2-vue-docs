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
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/maskedtextbox/index.css";

.wrap {
  margin: 20px auto;
  width: 240px;
}
</style>