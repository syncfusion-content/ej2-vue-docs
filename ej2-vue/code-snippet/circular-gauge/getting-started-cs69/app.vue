<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-button id='export' isToggle="true" v-on:click='clickExport'> Export </ejs-button>
      <ejs-circulargauge id="gauge" ref="gauge" allowPdfExport="true">
      </ejs-circulargauge>
    </div>
  </div>
</template>
<script>

import { CircularGaugeComponent, PdfExport } from "@syncfusion/ej2-vue-circulargauge";
import { ButtonComponent } from '@syncfusion/ej2-vue-buttons';
import { PdfPageOrientation } from '@syncfusion/ej2-pdf-export';

export default {
  name: "App",
  components: {
    "ejs-button": ButtonComponent,
    "ejs-circulargauge": CircularGaugeComponent
  },
  methods: {
    clickExport: function (args) {
      this.$refs.gauge.ej2Instances.export('PDF', 'Gauge', PdfPageOrientation.Portrait);
    }
  },
  provide: {
    circulargauge: [PdfExport],
  }
};
</script>
<style>
.wrapper {
  max-width: 300px;
  margin: 0 auto;
}
</style>
