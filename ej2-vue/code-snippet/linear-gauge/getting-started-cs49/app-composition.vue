<template>
  <div class="content-wrapper">
    <div align='center'>
      <button v-on:click="clickExport">Image Export</button>
      <ejs-lineargauge id="container" ref='gauge' :allowImageExport='allowImageExport'>
      </ejs-lineargauge>
    </div>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";

import { LinearGaugeComponent as EjsLineargauge, ImageExport } from "@syncfusion/ej2-vue-lineargauge";

const allowImageExport = true;
const gauge = ref(null);

const clickExport = () => {
  gauge.value.ej2Instances.export("PNG", "Gauge");
};

provide('lineargauge',  [ImageExport]);

</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>