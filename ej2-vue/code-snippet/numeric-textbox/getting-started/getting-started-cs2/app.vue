<template>
  <div id="app">
    <div class='wrap'>
      <ejs-numerictextbox value="10"></ejs-numerictextbox>
    </div>
  </div>
</template>
<script>
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";

export default {
  name: "App",
  components: {
    "ejs-numerictextbox": NumericTextBoxComponent
  },
  data() {
    return {
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-material3-theme/styles/numerictextbox/index.css";

.wrap {
  margin: 0 auto;
  width: 240px;
}
</style>