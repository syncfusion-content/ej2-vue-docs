<template>
  <div class="content-wrapper">
    <div align='center'>
      <ejs-lineargauge >
        <e-axes>
          <e-axis :labelStyle='labelStyle'>
          </e-axis>
        </e-axes>
      </ejs-lineargauge>
    </div>
  </div>
</template>
<script setup>

import { LinearGaugeComponent as EjsLineargauge, AxisDirective as EAxis, AxesDirective as EAxes } from "@syncfusion/ej2-vue-lineargauge";

const labelStyle = {
  format: "{value}°C"
};

</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>