<template>
  <div class="content-wrapper">
    <div align='center'>
      <button v-on:click="print">Print</button>
      <ejs-lineargauge id="container" ref='gauge' :allowPrint='allowPrint' :beforePrint='beforePrint'>
      </ejs-lineargauge>
    </div>
  </div>
</template>
<script setup>
import { provide, ref } from "vue";

import { LinearGaugeComponent as EjsLineargauge, Print } from "@syncfusion/ej2-vue-lineargauge";

const gauge = ref(null);
const allowPrint = true;

const beforePrint = () => {
};

const print = () => {
  gauge.value.ej2Instances.print();
};

provide('lineargauge',  [Print]);

</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>