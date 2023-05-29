

<template>
  <div class="content-wrapper">
    <div align='center'>
      <button v-on:click="clickExport">PDF Export</button>
      <ejs-lineargauge id="container" ref='gauge' :allowPdfExport='allowPdfExport'>
      </ejs-lineargauge>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { LinearGaugePlugin, PdfExport } from "@syncfusion/ej2-vue-lineargauge";
Vue.use(LinearGaugePlugin);
export default {
  data () {
    return {
      allowPdfExport: true
    }
  },
  methods: {
    clickExport: function (event) {
      this.$refs.gauge.ej2Instances.export("PNG", "Gauge");
    }
  },
  provide: {
    lineargauge: [PdfExport]
  }
};
</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>


