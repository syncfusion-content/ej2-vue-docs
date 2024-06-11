<template>
  <div class="content-wrapper">
    <div align='center'>
      <button v-on:click="clickExport">PDF Export</button>
      <ejs-lineargauge id="container" ref='gauge' :allowPdfExport='allowPdfExport'>
      </ejs-lineargauge>
    </div>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";

import { LinearGaugeComponent as EjsLineargauge, PdfExport } from "@syncfusion/ej2-vue-lineargauge";

const allowPdfExport = true;

const gauge = ref(null);

const clickExport = () => {
  gauge.value.ej2Instances.export("PNG", "Gauge");
};

provide('lineargauge',  [PdfExport]);

</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>