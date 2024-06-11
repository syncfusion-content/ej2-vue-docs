<template>
  <div class="content-wrapper">
    <div align='center'>
      <ejs-lineargauge :tooltip='tooltip' :tooltipRender='tooltipRender'>
        <e-axes>
          <e-axis>
            <e-pointers>
              <e-pointer></e-pointer>
            </e-pointers>
          </e-axis>
        </e-axes>
      </ejs-lineargauge>
    </div>
  </div>
</template>
<script setup>
import { provide } from "vue";

import { LinearGaugeComponent as EjsLineargauge, GaugeTooltip, PointerDirective as EPointer, PointersDirective as EPointers,
  AxisDirective as EAxis, AxesDirective as EAxes } from "@syncfusion/ej2-vue-lineargauge";

const tooltip = {
  enable: true,
};

const tooltipRender = () => {
};

provide('lineargauge',  [GaugeTooltip]);

</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>