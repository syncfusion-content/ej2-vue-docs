<template>
  <div id="app">
    <div class='wrap'>
      <ejs-maskedtextbox type='tel' class='form-control' mask='999-99999' value='342-45432'></ejs-maskedtextbox>
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
  },
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/maskedtextbox/index.css";

.wrap {
  margin: 0 auto;
  width: 240px;
}
</style>