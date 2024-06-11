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
<script setup>

import { CircularGaugeComponent as EjsCirculargauge, AxesDirective as EAxes, AxisDirective as EAxis } from "@syncfusion/ej2-vue-circulargauge";

</script>
<style>
@import "../node_modules/@syncfusion/ej2-vue-circulargauge/styles/material.css";

.wrapper {
  max-width: 300px;
  margin: 0 auto;
}
</style>
