<template>
  <div class="content-wrapper">
    <div align='center'>
      <ejs-lineargauge>
        <e-axes>
          <e-axis minimum= 20  maximum= 140 :majorTicks='majorTicks' :minorTicks='minorTicks'>
          </e-axis>
        </e-axes>
      </ejs-lineargauge>
    </div>
  </div>
</template>
<script setup>

import { LinearGaugeComponent as EjsLineargauge, AxesDirective as EAxes, AxisDirective as EAxis } from "@syncfusion/ej2-vue-lineargauge";

const majorTicks = {
  interval: 20,
  color: "Orange",
  position: "Outside"
};

const minorTicks = {
  interval: 5,
  color: 'red',
  position: "Cross"
};

</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>