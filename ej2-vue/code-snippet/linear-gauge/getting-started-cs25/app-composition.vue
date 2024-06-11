<template>
  <div class="content-wrapper">
    <div align='center'>
      <ejs-lineargauge :gaugeMouseDown='gaugeMouseDown'>
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

import { LinearGaugeComponent as EjsLineargauge, AxisDirective as EAxis,
  AxesDirective as EAxes, PointersDirective as EPointers, PointerDirective as EPointer } from "@syncfusion/ej2-vue-lineargauge";

const gaugeMouseDown = () => {
};

</script>
<style>
#content-wrapper {
    padding: 0px !important;
}
</style>