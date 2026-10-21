<template>
  <div id="app">
    <div class='wrap'>
      <ejs-maskedtextbox mask='000-000-0000' placeholder='MaskedTextBox' floatLabelType='Always'></ejs-maskedtextbox>
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
  margin: 0 auto;
  width: 240px;
}
</style>