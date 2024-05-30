<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-button id='export' isToggle="true" v-on:click='clickExport'> Export </ejs-button>
      <ejs-circulargauge id="gauge" ref="gauge" allowPdfExport="true">
      </ejs-circulargauge>
    </div>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";
import { CircularGaugeComponent as EjsCirculargauge, PdfExport } from "@syncfusion/ej2-vue-circulargauge";
import { ButtonComponent as EjsButton } from '@syncfusion/ej2-vue-buttons';
import { PdfPageOrientation } from '@syncfusion/ej2-pdf-export';

const gauge = ref(null);
const clickExport = function (args) {
  gauge.value.ej2Instances.export('PDF', 'Gauge', PdfPageOrientation.Portrait);
}

provide('circulargauge', [PdfExport],);

</script>
<style>
.wrapper {
  max-width: 300px;
  margin: 0 auto;
}
</style>
