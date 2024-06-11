<template>
  <div id="app">
    <div class='wrapper'>
      <ejs-circulargauge>
        <e-axes>
          <e-axis showLastLabel="true" minimum=0 maximum=170 startAngle=210 endAngle=150>
          </e-axis>
        </e-axes>
      </ejs-circulargauge>
    </div>
  </div>
</template>
<script>

import { CircularGaugeComponent, AxesDirective, AxisDirective } from "@syncfusion/ej2-vue-circulargauge";

export default {
  name: "App",
  components: {
    "ejs-circulargauge": CircularGaugeComponent,
    "e-axes": AxesDirective,
    "e-axis": AxisDirective
  },
  data: function () {
    return {}
  }
};
</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-circulargauge/styles/material.css";

.wrapper {
  max-width: 300px;
  margin: 0 auto;
}
</style>
