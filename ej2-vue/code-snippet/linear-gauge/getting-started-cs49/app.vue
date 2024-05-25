<template>
  <div class="content-wrapper">
    <div align='center'>
      <button v-on:click="clickExport">Image Export</button>
      <ejs-lineargauge id="container" ref='gauge' :allowImageExport='allowImageExport'>
      </ejs-lineargauge>
    </div>
  </div>
</template>
<script>

import { LinearGaugeComponent, ImageExport } from "@syncfusion/ej2-vue-lineargauge";

export default {
name: "App",
components: {
"ejs-lineargauge":LinearGaugeComponent
},
  data () {
    return {
      allowImageExport: true
    }
  },
  methods: {
    clickExport: function () {
      this.$refs.gauge.ej2Instances.export("PNG", "Gauge");
    }
  },
  provide: {
    lineargauge: [ImageExport]
  }
};
</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>