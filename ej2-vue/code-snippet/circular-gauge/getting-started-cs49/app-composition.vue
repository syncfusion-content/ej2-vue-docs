<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-button id='print' isToggle="true" v-on:click='clickPrint'> Print
      </ejs-button>
      <ejs-circulargauge id="gauge" ref="gauge" allowPrint="true">
      </ejs-circulargauge>
    </div>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { CircularGaugeComponent as EjsCirculargauge, Print } from "@syncfusion/ej2-vue-circulargauge";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';

const gauge = ref(null);
const clickPrint = function (args) {
  gauge.value.ej2Instances.print();
}

provide('circulargauge', [Print],);

</script>
<style>
.wrapper {
  max-width: 300px;
  margin: 0 auto;
}
</style>
