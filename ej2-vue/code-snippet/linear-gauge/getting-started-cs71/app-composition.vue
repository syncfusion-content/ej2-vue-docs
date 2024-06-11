<template>
  <div class="content-wrapper">
    <div align='center'>
      <ejs-lineargauge :tooltip='tooltip'>
        <e-axes>
          <e-axis>
            <e-pointers>
              <e-pointer value=80 ></e-pointer>
            </e-pointers>
          </e-axis>
        </e-axes>
      </ejs-lineargauge>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";

import { LinearGaugeComponent as EjsLineargauge, GaugeTooltip, AxesDirective as EAxes, AxisDirective as EAxis,
PointerDirective as EPointer, PointersDirective as EPointers } from "@syncfusion/ej2-vue-lineargauge";

const tooltip = {
  enable: true,
  format: '{value}km'
};

provide('lineargauge',  [ GaugeTooltip]);;

</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>