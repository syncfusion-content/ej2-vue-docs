<template>
  <div id="app">
        <div class='wrap'>
           <ejs-numerictextbox id="numeric" locale='de' :value="value"></ejs-numerictextbox>
        </div>
  </div>
</template>
<script setup>

import { L10n } from '@syncfusion/ej2-base';
import { NumericTextBoxComponent as EjsNumerictextbox } from "@syncfusion/ej2-vue-inputs";

// Load `German` culture to override spin buttons tooltip text
L10n.load({
    'de': {
        'numerictextbox': {
            incrementTitle: 'Wert erhöhen', decrementTitle: 'Dekrementwert'
        }
    },

});
const value = 10;
</script>
<style>
  @import "../node_modules/@syncfusion/ej2-material3-theme/styles/numerictextbox/index.css";
 .wrap {
    margin: 0px auto;
    width: 240px;
}
</style>