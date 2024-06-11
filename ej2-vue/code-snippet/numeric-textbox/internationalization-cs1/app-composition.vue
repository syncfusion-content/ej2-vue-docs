<template>
  <div id="app">
        <div class='wrap'>
           <ejs-numerictextbox id="numeric" locale='de' currency='EUR' format='c2' :value='value'></ejs-numerictextbox>
        </div>
  </div>
</template>
<script setup>

import { loadCldr,L10n } from '@syncfusion/ej2-base';
import { NumericTextBoxComponent as EjsNumerictextbox} from "@syncfusion/ej2-vue-inputs";

import * as numberingSystems from './numberingSystems.json';
import * as currencyData from './currencyData.json';
import * as numbers from './numbers.json';
import * as currencies from './currencies.json';

loadCldr(numberingSystems, currencyData, numbers, currencies);

L10n.load({
    'de': {
      'numerictextbox': { incrementTitle: 'Wert erhöhen', decrementTitle: 'Dekrementwert'}
    }
});

const value =  100;

</script>
<style>
  @import "../node_modules/@syncfusion/ej2-base/styles/material.css";
  @import "../node_modules/@syncfusion/ej2-vue-inputs/styles/material.css";
 .wrap {
    margin: 0px auto;
    width: 240px;
}
</style>