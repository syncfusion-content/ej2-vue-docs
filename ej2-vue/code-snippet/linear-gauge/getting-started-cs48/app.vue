

<template>
  <div class="content-wrapper">
    <div align='center'>
      <button v-on:click="print">Print</button>
      <ejs-lineargauge id="container" ref='gauge' :allowPrint='allowPrint'>
      </ejs-lineargauge>
    </div>
  </div>
</template>
<script>
import Vue from 'vue';
import { LinearGaugePlugin, Print } from "@syncfusion/ej2-vue-lineargauge";
Vue.use(LinearGaugePlugin);
export default {
  data () {
    return {
      allowPrint: true
    }
  },
  methods: {
    print: function (event) {
      this.$refs.gauge.ej2Instances.print();
    }
  },
  provide: {
    lineargauge: [Print]
  }
};
</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>


