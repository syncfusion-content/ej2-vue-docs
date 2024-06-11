<template>
  <div class="content-wrapper">
    <div align='center'>
      <ejs-lineargauge >
        <e-axes>
          <e-axis opposedPosition= true></e-axis>
        </e-axes>
      </ejs-lineargauge>
    </div>
  </div>
</template>
<script setup>

import { LinearGaugeComponent as EjsLineargauge, AxesDirective as EAxes, AxisDirective as EAxis } from "@syncfusion/ej2-vue-lineargauge";

</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>