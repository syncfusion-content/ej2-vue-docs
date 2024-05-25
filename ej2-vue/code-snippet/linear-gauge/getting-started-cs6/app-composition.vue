<template>
  <div class="content-wrapper">
    <div align='center'>
      <ejs-lineargauge >
        <e-axes>
          <e-axis :line='line'></e-axis>
        </e-axes>
      </ejs-lineargauge>
    </div>
  </div>
</template>
<script setup>

import { LinearGaugeComponent as EjsLineargauge, AxesDirective as EAxes, AxisDirective as EAxis} from "@syncfusion/ej2-vue-lineargauge";

const line = {
  height: 150,
  width: 2,
  color: '#4286f4',
  offset: 2
};

</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>