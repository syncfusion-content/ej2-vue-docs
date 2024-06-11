<template>
  <div class="content-wrapper">
    <div align='center'>
      <button v-on:click="clickExport">Export</button>
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
  gauge.value.ej2Instances.export('JPEG', 'Gauge', null, false).then((data) => {
        let base64 = data;
        document.writeln(base64);
    });
};

provide('lineargauge',  [ImageExport]);

</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>