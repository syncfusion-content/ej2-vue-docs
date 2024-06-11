<template>
  <div class="content-wrapper">
    <div align='center'>
      <button v-on:click="print">Print</button>
      <ejs-lineargauge id="container" ref='gauge' :allowPrint='allowPrint' :beforePrint='beforePrint'>
      </ejs-lineargauge>
    </div>
  </div>
</template>
<script>

import { LinearGaugeComponent, Print } from "@syncfusion/ej2-vue-lineargauge";

export default {
name: "App",
components: {
"ejs-lineargauge":LinearGaugeComponent,
},
  data () {
    return {
      allowPrint: true
    }
  },
  methods: {
    beforePrint: function () {
    },
    print: function () {
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