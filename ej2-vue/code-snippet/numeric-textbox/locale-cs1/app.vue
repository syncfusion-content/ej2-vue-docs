<template>
  <div id="app">
    <div class='wrap'>
      <ejs-numerictextbox id="numeric" locale='de' :value="value"></ejs-numerictextbox>
    </div>
  </div>
</template>
<script>

import { L10n } from '@syncfusion/ej2-base';
import { NumericTextBoxComponent } from "@syncfusion/ej2-vue-inputs";

// Load `German` culture to override spin buttons tooltip text
L10n.load({
  'de': {
    'numerictextbox': {
      incrementTitle: 'Wert erhöhen', decrementTitle: 'Dekrementwert'
    }
  },

});
export default {
  name: "App",
  components: {
    "ejs-numerictextbox": NumericTextBoxComponent
  },
  data() {
    return {
      value: 10,
    }
  }
}
</script>
<style>
@import "../node_modules/@syncfusion/ej2-base/styles/material.css";
@import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";

.wrap {
  margin: 0px auto;
  width: 240px;
}
</style>